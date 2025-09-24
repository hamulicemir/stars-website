// components/teams/Standings.tsx
import { StandingRow } from "@/lib/teams";

export default function Standings({ rows }: { rows: StandingRow[] }) {
  if (!rows?.length) return <p className="text-sm text-slate-600">Keine Tabelle verfügbar.</p>;
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-slate-500">
            <th className="py-2 pr-3">#</th>
            <th className="py-2 pr-3">Team</th>
            <th className="py-2 pr-3">Sp</th>
            <th className="py-2 pr-3">S</th>
            <th className="py-2 pr-3">N</th>
            <th className="py-2 pr-3">Punkte</th>
            <th className="py-2">Diff</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.team} className="border-t border-slate-200">
              <td className="py-2 pr-3">{r.position}</td>
              <td className="py-2 pr-3">{r.team}</td>
              <td className="py-2 pr-3">{r.played}</td>
              <td className="py-2 pr-3">{r.wins}</td>
              <td className="py-2 pr-3">{r.losses}</td>
              <td className="py-2 pr-3">{r.pointsFor}:{r.pointsAgainst}</td>
              <td className="py-2">{r.diff >= 0 ? `+${r.diff}` : r.diff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
