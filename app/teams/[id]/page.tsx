import { teams } from "@/data/teams";
import { notFound } from "next/navigation";

export default function TeamDetail({ params }: { params: { id: string } }) {
  const team = teams.find(t => t.id === params.id);
  if (!team) return notFound();
  return (
    <div className="container-7xl py-10">
      <h1 className="text-3xl font-bold">{team.name}</h1>
      <p className="mt-2 text-slate-700">Coach: {team.coach}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="card">
          <h2 className="text-lg font-semibold">Trainingszeiten</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>Di · 17:00–18:30 · Musterhalle 1</li>
            <li>Fr · 16:30–18:00 · Musterhalle 2</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Spielplan</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>Sa 19:30 vs. City Lions (H)</li>
            <li>So 17:00 @ Blue Eagles (A)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
