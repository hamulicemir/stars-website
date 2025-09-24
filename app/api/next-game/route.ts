import { NextResponse } from "next/server";

// Division -> Quell-URL
const DIVISION_URL: Record<string, string> = {
  u19: "https://www.basketballwien.at/ligen/u19-maennlich/",
  u16: "https://www.basketballwien.at/ligen/u16-maennlich/",
  u14: "https://www.basketballwien.at/ligen/u14-maennlich/",
  u12: "https://www.basketballwien.at/ligen/u12-maennlich/",
};

// Matches „Team A - Team B Sa., 03.05.2025 13:00 Uhr Halle …“
// score/teilstände am Ende sind optional, „t.b.a“ auch möglich.
const LINE_REGEX =
  /(?<home>[^-\n]+?)\s*-\s*(?<away>[^,\n]+?)\s+(?<weekday>[A-ZÄÖÜa-zäöüß.]+),?\s*(?<date>\d{2}\.\d{2}\.\d{4})\s+(?:(?<time>\d{1,2}:\d{2})\s*Uhr|t\.b\.a)\s*(?<venue>[^0-9\n][^\n]*?)(?:\s+\d+\s:\s\d+.*)?$/gm;

const TZ = "Europe/Vienna";
const STAR_PATTERNS = [/sv\s*stars/i, /\bstars\b/i];

function looksLikeStars(team: string) {
  return STAR_PATTERNS.some((re) => re.test(team));
}

function parseAtDate(dateStr: string, timeStr?: string | null) {
  // dateStr: "12.01.2025", timeStr: "14:00" | null
  const [d, m, y] = dateStr.split(".").map((x) => parseInt(x, 10));
  let hh = 12, mm = 0;
  if (timeStr && /^\d{1,2}:\d{2}$/.test(timeStr)) {
    const [h, min] = timeStr.split(":").map((x) => parseInt(x, 10));
    hh = h; mm = min;
  }
  // baue ISO in lokaler Zeit (VIE), dann nach UTC konvertieren
  const local = new Date(Date.UTC(y, m - 1, d, hh, mm));
  // „Europe/Vienna“ Offset berücksichtigen
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hour12: false
  });
  const parts = fmt.formatToParts(local);
  const obj: any = {};
  for (const p of parts) obj[p.type] = p.value;
  const isoLocal = `${obj.year}-${obj.month}-${obj.day}T${obj.hour}:${obj.minute}:00`;
  const asDate = new Date(isoLocal + ":00"); // interpretiert als local; reicht für Vergleich/Sort
  return asDate;
}

async function fetchHtml(url: string) {
  const r = await fetch(url, { next: { revalidate: 60 * 30 } }); // 30 Min Cache
  if (!r.ok) throw new Error(`Fetch failed ${r.status}`);
  return await r.text();
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const division = (searchParams.get("division") || "").toLowerCase();
  const url = DIVISION_URL[division];
  if (!url) {
    return NextResponse.json({ error: "Invalid division" }, { status: 400 });
  }

  const html = await fetchHtml(url);

  const matches: {
    home: string; away: string; date: string; time?: string | null;
    venue?: string; when: Date; source: string;
  }[] = [];

  for (const m of html.matchAll(LINE_REGEX)) {
    const { home, away, date, time, venue } = m.groups as any;
    // Nur Spiele mit Stars (Heim ODER Auswärts)
    if (!looksLikeStars(home) && !looksLikeStars(away)) continue;

    const when = parseAtDate(date, time);
    if (isNaN(when.getTime())) continue;

    matches.push({
      home: home.trim().replace(/\s+/g, " "),
      away: away.trim().replace(/\s+/g, " "),
      date,
      time: time ?? null,
      venue: venue?.trim(),
      when,
      source: url,
    });
  }

  // Nächstes zukünftiges Spiel (>= jetzt, Vienna Zeit)
  const now = new Date();
  const upcoming = matches
    .filter((g) => g.when.getTime() >= now.getTime())
    .sort((a, b) => a.when.getTime() - b.when.getTime())[0];

  // Wenn kein zukünftiges, optional letztes abgeschlossenes (kannst du entfernen)
  // const last = matches.filter(g => g.when < now).sort((a,b)=>b.when-a.when)[0];

  if (!upcoming) {
    return NextResponse.json({
      division,
      nextGame: null,
      message: "Derzeit kein Spiel anstehend",
      source: url,
    });
  }

  return NextResponse.json({
    division,
    nextGame: {
      home: upcoming.home,
      away: upcoming.away,
      date: upcoming.date,
      time: upcoming.time,
      venue: upcoming.venue,
      whenISO: upcoming.when.toISOString(),
    },
    source: url,
  });
}
