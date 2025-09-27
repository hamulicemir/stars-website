import { revalidatePath } from "next/cache";
import { readCollection, writeCollection, saveUpload, uid } from "@/lib/fsdb";
import type { NewsItem } from "@/lib/types";
import { makeNewsSlug } from "@/lib/slug";
export const runtime = "nodejs";


async function createNews(formData: FormData) {
  "use server";
  const title = String(formData.get("title") || "").trim();
  const body = String(formData.get("body") || "").trim();
  const file = formData.get("image") as File | null;

  let imageUrl: string | undefined;
  if (file && file.size > 0) {
    imageUrl = await saveUpload(file);
  }

  const items = readCollection<NewsItem>("news");
  items.unshift({
    id: uid("news_"),
    title,
    body,
    imageUrl,
    createdAt: new Date().toISOString(),
  });
  writeCollection("news", items);

  // Frontend-Routen neu validieren
  const created = items[0];
  const slug = makeNewsSlug(created);
  revalidatePath("/news");
  revalidatePath(`/news/${slug}`);

  // Admin-Seite auch aktualisieren
  revalidatePath("/admin/news");
}

async function deleteNews(id: string) {
  "use server";
  // zu löschenden Eintrag vorher holen, damit wir den Slug kennen
  const all = readCollection<NewsItem>("news");
  const removed = all.find(n => n.id === id);

  const items = all.filter(n => n.id !== id);
  writeCollection("news", items);

  // Frontend-Routen neu validieren
  revalidatePath("/news");
  if (removed) {
    const slug = makeNewsSlug(removed);
    revalidatePath(`/news/${slug}`);
  }

  // Admin-Seite aktualisieren
  revalidatePath("/admin/news");
}

export default function NewsPage() {
  const items = readCollection<NewsItem>("news");

  return (
    <div className="grid gap-8">
      <section>
        <h1 className="text-xl font-semibold">News anlegen</h1>
          <form action={createNews} className="mt-4 bg-white rounded-2xl border p-5 shadow-sm"> 
          <div className="grid gap-3">
            <input name="title" required placeholder="Titel"
              className="rounded-lg border px-3 py-2" />
            <textarea name="body" required placeholder="Text"
              className="rounded-lg border px-3 py-2 h-32" />
            <div>
              <label className="text-sm text-slate-600">Bild (optional)</label>
              <input name="image" type="file" accept="image/*" className="mt-1 block" />
            </div>
            <button className="self-start rounded-lg bg-slate-900 text-white px-4 py-2">
              Veröffentlichen
            </button>
          </div>
        </form>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Bisherige News</h2>
        <div className="grid gap-4 mt-3">
          {items.map(n => (
            <article key={n.id} className="bg-white rounded-2xl border p-4 shadow-sm">
              <div className="flex items-start gap-4">
                {n.imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={n.imageUrl} alt="" className="w-24 h-24 object-cover rounded-lg" />
                )}
                <div className="flex-1">
                  <h3 className="font-semibold">{n.title}</h3>
                  <p className="text-sm text-slate-700 whitespace-pre-wrap mt-1">{n.body}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    {new Date(n.createdAt).toLocaleString("de-DE")}
                  </p>
                </div>
                <form
                  action={async () => {
                    "use server";
                    await deleteNews(n.id);
                  }}
                >
                  <button className="text-red-600 text-sm">Löschen</button>
                </form>
              </div>
            </article>
          ))}
          {items.length === 0 && <p className="text-slate-600">Noch keine News.</p>}
        </div>
      </section>
    </div>
  );
}
