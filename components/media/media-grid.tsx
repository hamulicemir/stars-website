// components/media/media-grid.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

// kleine Hilfsfunktion statt clsx (keine zusätzliche lib nötig)
function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

export type MediaItem = {
  id: string;
  type: "image" | "youtube";
  src: string;      // Bildpfad oder YouTube-ID
  title?: string;   // optional
};

type Props = { items: MediaItem[] };
type Filter = "all" | "image" | "youtube";

export default function MediaGrid({ items }: Props) {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? items : items.filter(i => i.type === filter)),
    [items, filter]
  );

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setLightboxItem(null);
    if (lightboxItem) window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [lightboxItem]);

  return (
    <>
      {/* Filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        <FilterChip active={filter === "all"}    onClick={() => setFilter("all")}>Alle</FilterChip>
        <FilterChip active={filter === "image"}  onClick={() => setFilter("image")}>Fotos</FilterChip>
        <FilterChip active={filter === "youtube"} onClick={() => setFilter("youtube")}>Videos</FilterChip>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((item, idx) => (
          <MediaCard
            key={item.id}
            item={item}
            onOpenImage={() => setLightboxItem(item)}
            priority={idx < 2}
          />
        ))}
      </div>

      {/* Lightbox nur für Bilder */}
      {lightboxItem && lightboxItem.type === "image" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute -right-2 -top-2 z-10 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-900 shadow"
            >
              Schließen
            </button>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={lightboxItem.src}
                alt={lightboxItem.title ?? "Foto"}
                fill
                sizes="100vw"
                className="object-contain bg-slate-100"
                priority
                quality={90}
              />
            </div>
            {lightboxItem.title && (
              <div className="mt-3 text-center text-sm font-medium text-white/90">
                {lightboxItem.title}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

/* ====== UI-Teile ====== */

function FilterChip({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition",
        active
          ? "border-sky-300 bg-sky-600 text-white shadow-sm"
          : "border-slate-200 bg-white/70 text-slate-700 hover:border-sky-200 hover:bg-sky-50"
      )}
    >
      {children}
    </button>
  );
}

function MediaCard({
  item,
  onOpenImage,
  priority,
}: {
  item: MediaItem;
  onOpenImage: () => void;
  priority?: boolean;
}) {
  const title = item.title ?? (item.type === "image" ? "Foto" : "Video");

  // Einheitliche Card-Hülle
  const CardShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-sky-50 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md">
      {children}
    </div>
  );

  // Einheitlicher Footer (außerhalb des Medienbereichs)
  const Footer = (
    <div className="flex items-center justify-between gap-2 border-t border-slate-200 bg-white/70 px-3 py-2">
      <div className="min-w-0 truncate text-sm font-semibold text-slate-800">{title}</div>
      <span className={cx(
        "shrink-0 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white",
        item.type === "image" ? "bg-sky-600" : "bg-indigo-600"
      )}>
        {item.type === "image" ? "Foto" : "Video"}
      </span>
    </div>
  );

  if (item.type === "image") {
    return (
      <button
        type="button"
        onClick={onOpenImage}
        className="text-left focus:outline-none focus:ring-2 focus:ring-sky-300 rounded-2xl"
      >
        <CardShell>
          {/* Medienbereich: immer 16:9 */}
          <div className="relative aspect-video w-full">
            <ImageWithFallback
              src={item.src}
              alt={title}
              priority={priority}
            />
          </div>
          {Footer}
        </CardShell>
      </button>
    );
  }

  // Video-Karte
  return (
    <CardShell>
      <div className="relative aspect-video w-full overflow-hidden">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${item.src}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      {Footer}
    </CardShell>
  );
}

/** Next/Image mit einfachem Fallback, falls Pfad defekt ist */
function ImageWithFallback({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [error, setError] = useState(false);
  return error ? (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
      <span className="text-sm font-medium">Bild nicht verfügbar</span>
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
      className="object-cover"
      onError={() => setError(true)}
      priority={priority}
      quality={85}
    />
  );
}
