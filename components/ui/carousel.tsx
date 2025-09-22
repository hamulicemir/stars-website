// components/Carousel.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
type Slide = {
  src: string;
  alt?: string;
};

type Props = {
  slides: Slide[];
  className?: string;
};

export default function Carousel({ slides, className }: Props) {
  const [index, setIndex] = React.useState(0);
  const slideCount = slides.length;

  const clamp = (n: number) => (n + slideCount) % slideCount;
  const prev = () => setIndex(i => clamp(i - 1));
  const next = () => setIndex(i => clamp(i + 1));
  const goTo = (i: number) => setIndex(clamp(i));

  // Keyboard (←/→)
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Swipe (touch & mouse)
  const startX = React.useRef(0);
  const deltaX = React.useRef(0);
  const dragging = React.useRef(false);

  const onStart = (clientX: number) => {
    dragging.current = true;
    startX.current = clientX;
    deltaX.current = 0;
  };
  const onMove = (clientX: number) => {
    if (!dragging.current) return;
    deltaX.current = clientX - startX.current;
  };
  const onEnd = () => {
    if (!dragging.current) return;
    dragging.current = false;
    const threshold = 60; // minimaler Swipe
    if (deltaX.current > threshold) prev();
    else if (deltaX.current < -threshold) next();
  };

  return (
    <div
      className={"relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-slate-200 shadow-md"}
      onMouseDown={(e) => onStart(e.clientX)}
      onMouseMove={(e) => onMove(e.clientX)}
      onMouseUp={onEnd}
      onMouseLeave={onEnd}
      onTouchStart={(e) => onStart(e.touches[0].clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onTouchEnd={onEnd}
    >
      {/* Track */}
      <div
        className="flex h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div key={i} className="relative h-full w-full shrink-0">
            <Image
              src={s.src}
              alt={s.alt ?? `Slide ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Deko-Ring (wie in Hero) */}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-black/5" />

      {/* Controls */}
      <button
        aria-label="Vorheriges Bild"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-400"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        aria-label="Nächstes Bild"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-400"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              aria-label={`Gehe zu Bild ${i + 1}`}
              onClick={() => goTo(i)}
              className={"h-2.5 w-2.5 rounded-full transition " + (active ? "bg-slate-900" : "bg-white/70 ring-1 ring-slate-300 hover:bg-white")}
            />
          );
        })}
      </div>
    </div>
  );
}
