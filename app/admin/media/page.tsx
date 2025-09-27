import { revalidatePath } from "next/cache";
import { readCollection, writeCollection, saveUpload, uid } from "@/lib/fsdb";
import type { GalleryImage, Video } from "@/lib/types";

async function uploadImage(form: FormData) {
  "use server";
  const file = form.get("file") as File | null;
  const title = String(form.get("title") || "");
  if (!file || file.size === 0) return;
  const url = await saveUpload(file);
  const images = readCollection<GalleryImage>("gallery");
  images.unshift({ id: uid("img_"), url, title, createdAt: new Date().toISOString() });
  writeCollection("gallery", images);
  revalidatePath("/admin/media");
}

async function deleteImage(id: string) {
  "use server";
  const images = readCollection<GalleryImage>("gallery").filter(i => i.id !== id);
  writeCollection("gallery", images);
  revalidatePath("/admin/media");
}

function parseYoutubeId(input: string) {
  const m = input.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/);
  return m ? m[1] : input.trim();
}

async function addVideo(form: FormData) {
  "use server";
  const raw = String(form.get("youtube") || "");
  const title = String(form.get("title") || "");
  const id = parseYoutubeId(raw);
  const vids = readCollection<Video>("videos");
  vids.unshift({ id: uid("vid_"), youtubeId: id, title, createdAt: new Date().toISOString() });
  writeCollection("videos", vids);
  revalidatePath("/admin/media");
}

async function deleteVideo(id: string) {
  "use server";
  const vids = readCollection<Video>("videos").filter(v => v.id !== id);
  writeCollection("videos", vids);
  revalidatePath("/admin/media");
}

export default function MediaPage() {
  const images = readCollection<GalleryImage>("gallery");
  const videos = readCollection<Video>("videos");

  return (
    <div className="grid gap-8">
      <section className="bg-white rounded-2xl border p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Bild hochladen</h2>
        <form action={uploadImage} className="mt-3" encType="multipart/form-data">
          <div className="flex flex-col sm:flex-row gap-3">
            <input name="title" placeholder="Titel (optional)" className="rounded-lg border px-3 py-2 flex-1" />
            <input name="file" type="file" accept="image/*" className="rounded-lg border px-3 py-2" required />
            <button className="rounded-lg bg-slate-900 text-white px-4 py-2">Hochladen</button>
          </div>
        </form>
        <div className="grid gap-3 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map(img => (
            <div key={img.id} className="border rounded-xl overflow-hidden bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.url} alt={img.title || ""} className="w-full h-40 object-cover" />
              <div className="p-2 text-sm flex items-center justify-between">
                <span className="truncate">{img.title || "–"}</span>
                <form action={async () => deleteImage(img.id)}>
                  <button className="text-red-600">Löschen</button>
                </form>
              </div>
            </div>
          ))}
          {images.length === 0 && <p className="text-slate-600">Noch keine Bilder.</p>}
        </div>
      </section>

      <section className="bg-white rounded-2xl border p-5 shadow-sm">
        <h2 className="text-lg font-semibold">YouTube-Video verlinken</h2>
        <form action={addVideo} className="mt-3 flex flex-col sm:flex-row gap-3">
          <input name="title" placeholder="Titel (optional)" className="rounded-lg border px-3 py-2 flex-1" />
          <input name="youtube" required placeholder="YouTube-URL oder Video-ID"
                 className="rounded-lg border px-3 py-2 flex-1" />
          <button className="rounded-lg bg-slate-900 text-white px-4 py-2">Hinzufügen</button>
        </form>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map(v => (
            <li key={v.id} className="rounded-xl border bg-white overflow-hidden">
              <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${v.youtubeId}`} />
              <div className="p-2 text-sm flex items-center justify-between">
                <span className="truncate">{v.title || v.youtubeId}</span>
                <form action={async () => deleteVideo(v.id)}>
                  <button className="text-red-600">Löschen</button>
                </form>
              </div>
            </li>
          ))}
          {videos.length === 0 && <p className="text-slate-600">Noch keine Videos.</p>}
        </ul>
      </section>
    </div>
  );
}
