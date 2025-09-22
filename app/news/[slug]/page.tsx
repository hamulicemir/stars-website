import { news } from "@/data/news";
import { notFound } from "next/navigation";

export default function NewsDetail({ params }: { params: { slug: string } }) {
  const item = news.find(n => n.slug === params.slug);
  if (!item) return notFound();
  return (
    <div className="container-7xl py-10">
      <p className="text-xs text-slate-500">{new Date(item.date).toLocaleDateString("de-AT")} · {item.tag}</p>
      <h1 className="mt-2 text-3xl font-bold">{item.title}</h1>
      <div className="prose prose-slate mt-6 max-w-none">
        <p>{item.excerpt}</p>
        <p>Hier kommt dein Inhalt – Bilder, Videos, Zitate…</p>
      </div>
    </div>
  );
}
