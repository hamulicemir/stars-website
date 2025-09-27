import { readCollection } from "@/lib/fsdb";
import type { NewsItem } from "@/lib/types";
import { makeNewsSlug, toExcerpt } from "@/lib/slug";

export const revalidate = 0; // immer frische Daten (lokale JSON)

export default function NewsPage() {
  const items = readCollection<NewsItem>("news");

  return (
    <div className="container-7xl py-10">
      <h1 className="text-3xl font-bold">News</h1>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((n) => {
          const slug = makeNewsSlug(n);
          return (
            <article key={n.id} className="card hover:bg-slate-50 transition p-4 rounded-2xl border bg-white">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="rounded-full bg-slate-100 px-2 py-0.5">News</span>
                <time>{new Date(n.createdAt).toLocaleDateString("de-AT")}</time>
              </div>

              <h2 className="mt-3 text-lg font-semibold">
                <a href={`/news/${slug}`}>{n.title}</a>
              </h2>

              <p className="mt-2 text-sm text-slate-700">
                {toExcerpt(n.body)}
              </p>

              {n.imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={n.imageUrl} alt="" className="mt-3 w-full aspect-video object-cover rounded-lg" />
              )}
            </article>
          );
        })}
        {items.length === 0 && <p className="text-slate-600">Noch keine News.</p>}
      </div>
    </div>
  );
}
