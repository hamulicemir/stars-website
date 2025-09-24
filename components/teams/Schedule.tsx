// components/teams/Schedule.tsx
import { Game } from "@/lib/teams";
import { CalendarDays, MapPin } from "lucide-react";

export default function Schedule({ games }: { games: Game[] }) {
  if (!games?.length) return <p className="text-sm text-slate-600">Keine Spieltermine verfügbar.</p>;
  return (
    <ul className="mt-3 space-y-3">
      {games.map(g => {
        const d = new Date(g.dateISO);
        const dateStr = d.toLocaleString("de-AT", { dateStyle: "medium", timeStyle: "short", timeZone: "Europe/Vienna" });
        return (
          <li key={g.id} className="rounded-xl border border-slate-200 bg-sky-50 p-3">
            <div className="text-sm font-semibold text-slate-900">{g.home} <span className="text-slate-400">vs.</span> {g.away}</div>
            <div className="mt-1 flex flex-wrap gap-3 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1"><CalendarDays className="h-4 w-4"/> {dateStr}</span>
              {g.venue && <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4"/> {g.venue}</span>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
