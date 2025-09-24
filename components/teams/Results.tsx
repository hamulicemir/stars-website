// components/teams/Results.tsx
import { Game } from "@/lib/teams";
export default function Results({ games }: { games: Game[] }) {
  if (!games?.length) return <p className="text-sm text-slate-600">Noch keine Ergebnisse.</p>;
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-slate-500">
            <th className="py-2 pr-4">Datum</th>
            <th className="py-2 pr-4">Spiel</th>
            <th className="py-2">Ergebnis</th>
          </tr>
        </thead>
        <tbody>
          {games.map(g => {
            const d = new Date(g.dateISO);
            const dateStr = d.toLocaleDateString("de-AT");
            const score = g.score ? `${g.score.home}:${g.score.away}` : "–";
            return (
              <tr key={g.id} className="border-t border-slate-200">
                <td className="py-2 pr-4 whitespace-nowrap">{dateStr}</td>
                <td className="py-2 pr-4">{g.home} <span className="text-slate-400">vs.</span> {g.away}</td>
                <td className="py-2 font-semibold">{score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
