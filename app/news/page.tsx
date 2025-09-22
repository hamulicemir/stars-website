import { news } from "@/data/news";
export default function NewsPage() {
  return (
    <div className="container-7xl py-10">
      <h1 className="text-3xl font-bold">News</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.map(n => (
          <article key={n.id} className="card hover:bg-slate-50 transition">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="rounded-full bg-slate-100 px-2 py-0.5">{n.tag}</span>
              <time>{new Date(n.date).toLocaleDateString("de-AT")}</time>
            </div>
            <h2 className="mt-3 text-lg font-semibold"><a href={`/news/${n.slug}`}>{n.title}</a></h2>
            <p className="mt-2 text-sm text-slate-700">{n.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
