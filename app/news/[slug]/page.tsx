import { notFound } from "next/navigation";
import { readCollection } from "@/lib/fsdb";
import type { NewsItem } from "@/lib/types";
import { makeNewsSlug, toExcerpt } from "@/lib/slug";

export const revalidate = 0;

export default function NewsDetail({ params }: { params: { slug: string } }) {
  const items = readCollection<NewsItem>("news");
  const item = items.find((n) => makeNewsSlug(n) === params.slug);
  if (!item) return notFound();

  return (
    <div className="container-7xl py-10">
      <p className="text-xs text-slate-500">
        {new Date(item.createdAt).toLocaleDateString("de-AT")} · News
      </p>
      <h1 className="mt-2 text-3xl font-bold">{item.title}</h1>

      {item.imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.imageUrl} alt="" className="mt-6 w-full max-h-[60vh] object-cover rounded-2xl" />
      )}

      <div className="prose prose-slate mt-6 max-w-none">
        <p className="lead">{toExcerpt(item.body)}</p>
      </div>
    </div>
  );
}

// (Optional) schönerer <title>/<meta>
export function generateMetadata({ params }: { params: { slug: string } }) {
  const items = readCollection<NewsItem>("news");
  const item = items.find((n) => makeNewsSlug(n) === params.slug);
  if (!item) return {};
  return {
    title: item.title,
    description: toExcerpt(item.body, 150),
  };
}
