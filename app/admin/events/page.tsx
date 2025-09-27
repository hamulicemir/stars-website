import { revalidatePath } from "next/cache";
import { readCollection, writeCollection, uid } from "@/lib/fsdb";
import type { Training, Game } from "@/lib/types";

async function addTraining(form: FormData) {
  "use server";
  const items = readCollection<Training>("trainings");
  items.push({
    id: uid("tr_"),
    team: String(form.get("team") || "").trim(),
    weekday: (form.get("weekday") as any) || "Mo",
    time: String(form.get("time") || "18:00"),
    location: String(form.get("location") || "").trim(),
  });
  writeCollection("trainings", items);
  revalidatePath("/admin/events");
}

async function deleteTraining(id: string) {
  "use server";
  const items = readCollection<Training>("trainings").filter(t => t.id !== id);
  writeCollection("trainings", items);
  revalidatePath("/admin/events");
}

async function addGame(form: FormData) {
  "use server";
  const items = readCollection<Game>("games");
  items.push({
    id: uid("gm_"),
    opponent: String(form.get("opponent") || "").trim(),
    date: String(form.get("date") || ""),
    time: String(form.get("time") || ""),
    location: String(form.get("location") || "").trim(),
  });
  writeCollection("games", items);
  revalidatePath("/admin/events");
}

async function deleteGame(id: string) {
  "use server";
  const items = readCollection<Game>("games").filter(g => g.id !== id);
  writeCollection("games", items);
  revalidatePath("/admin/events");
}

export default function EventsPage() {
  const trainings = readCollection<Training>("trainings");
  const games = readCollection<Game>("games");

  return (
    <div className="grid gap-8">
      <section className="bg-white rounded-2xl border p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Training hinzufügen</h2>
        <form action={addTraining} className="grid gap-3 mt-3 sm:grid-cols-2">
          <input name="team" required placeholder="Team (z. B. U12)"
            className="rounded-lg border px-3 py-2" />
          <select name="weekday" className="rounded-lg border px-3 py-2">
            {["Mo","Di","Mi","Do","Fr","Sa","So"].map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          <input name="time" type="time" className="rounded-lg border px-3 py-2" defaultValue="18:00" />
          <input name="location" placeholder="Ort/Halle" className="rounded-lg border px-3 py-2" />
          <button className="sm:col-span-2 justify-self-start rounded-lg bg-slate-900 text-white px-4 py-2">
            Speichern
          </button>
        </form>

        <h3 className="font-medium mt-6">Trainingszeiten</h3>
        <ul className="mt-2 divide-y">
          {trainings.map(t => (
            <li key={t.id} className="py-2 flex items-center justify-between">
              <span className="text-sm">{t.team} • {t.weekday} {t.time} • {t.location}</span>
              <form action={async () => deleteTraining(t.id)}>
                <button className="text-red-600 text-sm">Löschen</button>
              </form>
            </li>
          ))}
          {trainings.length === 0 && <p className="text-slate-600 text-sm mt-2">Keine Einträge.</p>}
        </ul>
      </section>

      <section className="bg-white rounded-2xl border p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Spieltermin hinzufügen</h2>
        <form action={addGame} className="grid gap-3 mt-3 sm:grid-cols-2">
          <input name="opponent" required placeholder="Gegner"
            className="rounded-lg border px-3 py-2" />
          <input name="location" placeholder="Ort" className="rounded-lg border px-3 py-2" />
          <input name="date" type="date" className="rounded-lg border px-3 py-2" />
          <input name="time" type="time" className="rounded-lg border px-3 py-2" defaultValue="19:00" />
          <button className="sm:col-span-2 justify-self-start rounded-lg bg-slate-900 text-white px-4 py-2">
            Speichern
          </button>
        </form>

        <h3 className="font-medium mt-6">Spieltermine</h3>
        <ul className="mt-2 divide-y">
          {games.map(g => (
            <li key={g.id} className="py-2 flex items-center justify-between">
              <span className="text-sm">{g.date} {g.time} • vs. {g.opponent} • {g.location}</span>
              <form action={async () => deleteGame(g.id)}>
                <button className="text-red-600 text-sm">Löschen</button>
              </form>
            </li>
          ))}
          {games.length === 0 && <p className="text-slate-600 text-sm mt-2">Keine Einträge.</p>}
        </ul>
      </section>
    </div>
  );
}
