"use client";

import { useEffect, useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";

type NextGame = {
  division: "u19" | "u16" | "u14" | "u12";
  home: string;
  away: string;
  whenISO: string;
  venue?: string | null;
};

export default function NextStarsGameGlobal() {
  const [data, setData] = useState<{ nextGame: NextGame | null } | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/api/next-game/all", { cache: "no-store" });
        const j = await r.json();
        setData(j);
      } catch (e: any) {
        setErr(e?.message || "Fehler beim Laden");
      }
    })();
  }, []);

  // Skeleton
  if (!data && !err) {
    return (
      <section className="border-b border-slate-200 py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="h-7 w-40 rounded bg-slate-200 animate-pulse" />
          <div className="mt-4 h-16 w-full rounded-2xl border border-slate-200 bg-white p-4">
            <div className="h-5 w-2/3 rounded bg-slate-200 animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  // Fehler
  if (err || !data) {
    return (
      <section className="border-b border-slate-200 py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-600">
          Konnte das nächste Spiel nicht laden.
        </div>
      </section>
    );
  }

  const nxt = data.nextGame;

  // Kein kommendes Spiel
  if (!nxt) {
    return (
      <section className="border-b border-slate-200 py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="inline-block border-b-4 border-sky-500 pb-1 text-2xl font-bold md:text-3xl">
            Nächstes Spiel
          </h2>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-slate-700">
            Derzeit kein Spiel anstehend.
          </div>
        </div>
      </section>
    );
  }

  const when = new Date(nxt.whenISO);
  const dateStr = when.toLocaleString("de-AT", {
    timeZone: "Europe/Vienna",
    dateStyle: "full",
    timeStyle: "short",
  });

  return (
    <section className="border-b border-slate-200 py-8 md:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="inline-block border-b-4 border-sky-500 pb-1 text-2xl font-bold md:text-3xl">
            Nächstes Spiel
          </h2>
          <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-700">
            {nxt.division.toUpperCase()}
          </span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-lg font-semibold">
            {nxt.home} <span className="text-slate-400">vs.</span> {nxt.away}
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-700">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              {dateStr}
            </span>
            {nxt.venue && (
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {nxt.venue}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
