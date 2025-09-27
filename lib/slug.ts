import type { NewsItem } from "./types";

export function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function makeNewsSlug(n: NewsItem) {
  // Stabil & eindeutig (auch ohne gespeicherten slug)
  return `${n.id.slice(-6)}-${slugify(n.title)}`;
}

export function toExcerpt(text: string, len = 160) {
  const t = text.replace(/\s+/g, " ").trim();
  return t.length > len ? t.slice(0, len - 1) + "…" : t;
}
