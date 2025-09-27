import { revalidatePath } from "next/cache";
import { readCollection, writeCollection, saveUpload, uid } from "@/lib/fsdb";
import type { Sponsor } from "@/lib/types";

async function addSponsor(form: FormData) {
  "use server";
  const name = String(form.get("name") || "").trim();
  const website = String(form.get("website") || "").trim();
  const logo = form.get("logo") as File | null;
  if (!logo || logo.size === 0) return;

  const logoUrl = await saveUpload(logo);
  const sponsors = readCollection<Sponsor>("sponsors");
  sponsors.push({ id: uid("sp_"), name, website, logoUrl, createdAt: new Date().toISOString() });
  writeCollection("sponsors", sponsors);
  revalidatePath("/admin/sponsors");
  // -> Du kannst in deiner Footer-Komponente künftig einfach readCollection<Sponsor>("sponsors") nutzen
}

async function deleteSponsor(id: string) {
  "use server";
  const sponsors = readCollection<Sponsor>("sponsors").filter(s => s.id !== id);
  writeCollection("sponsors", sponsors);
  revalidatePath("/admin/sponsors");
}

export default function SponsorsPage() {
  const sponsors = readCollection<Sponsor>("sponsors");

  return (
    <div className="grid gap-8">
      <section className="bg-white rounded-2xl border p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Sponsor hinzufügen</h2>
        <form action={addSponsor} className="mt-3" encType="multipart/form-data">
          <div className="grid gap-3 sm:grid-cols-2">
            <input name="name" required placeholder="Name"
              className="rounded-lg border px-3 py-2" />
            <input name="website" placeholder="Website (optional, https://...)"
              className="rounded-lg border px-3 py-2" />
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-600">Logo (PNG/JPG)</label>
              <input name="logo" type="file" accept="image/*" required className="mt-1 block" />
            </div>
            <button className="sm:col-span-2 justify-self-start rounded-lg bg-slate-900 text-white px-4 py-2">
              Speichern
            </button>
          </div>
        </form>
      </section>

      <section>
        <h3 className="text-lg font-semibold">Sponsoren</h3>
        <div className="grid gap-4 mt-3 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map(s => (
            <div key={s.id} className="rounded-2xl border bg-white p-4 shadow-sm flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.logoUrl} alt={s.name} className="w-20 h-20 object-contain" />
              <div className="flex-1">
                <div className="font-medium">{s.name}</div>
                {s.website && <a href={s.website} target="_blank" className="text-sm text-blue-600">{s.website}</a>}
              </div>
              <form action={async () => deleteSponsor(s.id)}>
                <button className="text-red-600 text-sm">Löschen</button>
              </form>
            </div>
          ))}
          {sponsors.length === 0 && <p className="text-slate-600">Noch keine Sponsoren.</p>}
        </div>
      </section>
    </div>
  );
}
