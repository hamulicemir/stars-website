// app/api/next-game/all/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const origin = req.nextUrl.origin; // Basis-URL der aktuellen Anfrage

  const divisions = ["u19", "u16", "u14", "u12"] as const;

  // interne API-Aufrufe mit absoluter URL
  const results = await Promise.all(
    divisions.map(async (d) => {
      const r = await fetch(`${origin}/api/next-game?division=${d}`, {
        // wenn deine /api/next-game serverseitig cacht, kannst du hier "force-cache" lassen
        cache: "no-store",
      });
      if (!r.ok) return { division: d, nextGame: null as any };
      const j = await r.json();
      return { division: d, nextGame: j?.nextGame ?? null };
    })
  );

  const candidates = results
    .filter((x) => x.nextGame)
    .map((x) => ({ division: x.division, ...x.nextGame }));

  if (candidates.length === 0) {
    return NextResponse.json({ nextGame: null });
  }

  candidates.sort(
    (a: any, b: any) =>
      new Date(a.whenISO).getTime() - new Date(b.whenISO).getTime()
  );

  return NextResponse.json({ nextGame: candidates[0] });
}
