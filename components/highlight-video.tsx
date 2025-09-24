"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";

type Props = {
  youtubeId: string;
  title?: string;
  poster?: string;
};

function extractYouTubeId(input: string): string {
  if (/^[\w-]{11}$/.test(input)) return input;
  try {
    const u = new URL(input);
    if (u.hostname.includes("youtu.be")) return u.pathname.split("/")[1] || input;
    if (u.searchParams.get("v")) return u.searchParams.get("v") as string;
    const parts = u.pathname.split("/").filter(Boolean);
    const i = parts.findIndex((p) => p === "embed" || p === "shorts");
    if (i !== -1 && parts[i + 1]) return parts[i + 1];
  } catch {}
  return input;
}

function useYouTubeThumb(rawId: string, poster?: string) {
  const id = useMemo(() => extractYouTubeId(rawId), [rawId]);
  const [thumb, setThumb] = useState<string | null>(poster ?? null);

  useEffect(() => {
    if (poster) { setThumb(poster); return; }
    let cancelled = false;

    const candidates = [
      `https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`,
      `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi_webp/${id}/sddefault.webp`,
      `https://i.ytimg.com/vi/${id}/sddefault.jpg`,
      `https://i.ytimg.com/vi_webp/${id}/hqdefault.webp`,
      `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    ];

    (async () => {
      for (const url of candidates) {
        const ok = await new Promise<boolean>((res) => {
          const img = new Image();
          img.onload = () => res(true);
          img.onerror = () => res(false);
          img.referrerPolicy = "no-referrer";
          img.src = url;
        });
        if (cancelled) return;
        if (ok) { setThumb(url); return; }
      }
      setThumb(null);
    })();

    return () => { cancelled = true; };
  }, [id, poster]);

  return { id, thumb };
}

export default function HighlightVideo({ youtubeId, title = "Highlights", poster }: Props) {
  const [open, setOpen] = useState(false);
  const onKey = useCallback((e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); }, []);
  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onKey]);

  const { id, thumb } = useYouTubeThumb(youtubeId, poster);

  return (
    <section className="border-b border-slate-200 py-12 md:py-16">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[2000px] overflow-hidden rounded-2xl">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative block w-full"
            aria-label="Highlights abspielen"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {thumb ? (
              <img
                src={`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`}
                alt={title}
                className="aspect-[21/9] w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="aspect-[21/9] w-full bg-slate-200" />
            )}
            <span className="absolute inset-0 grid place-items-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur transition group-hover:scale-105">
                <Play className="h-8 w-8" />
              </span>
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)} aria-modal="true" role="dialog"
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black"
              initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button" onClick={() => setOpen(false)}
                className="absolute right-2 top-2 z-10 rounded-full bg-white/90 p-2 shadow" aria-label="Schließen"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
