import { teams } from "@/data/teams";
export default function TeamsPage() {
  return (
    <div className="container-7xl py-10">
      <h1 className="text-3xl font-bold">Teams</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teams.map(t => (
          <div key={t.id} className="rounded-2xl border border-slate-200 bg-white">
            <div className={`h-28 w-full rounded-t-2xl bg-gradient-to-r ${t.color}`} />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-slate-600">Coach: {t.coach}</p>
              <div className="mt-4 flex gap-2">
                <a href={`/teams/${t.id}`} className="text-sm text-slate-700 hover:underline">Teamseite</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
