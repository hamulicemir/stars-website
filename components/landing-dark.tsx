import React from "react";
import {
  CalendarDays,
  Newspaper,
  Images,
  Users,
  Award,
  Play,
  ChevronRight,
} from "lucide-react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Pill } from "./ui/pill";
import { Card } from "./ui/card";
import { gallery } from "@/data/media";
import { news } from "@/data/news";
import { teams } from "@/data/teams";
import Carousel from "@/components/ui/carousel"; // dein eigenes Carousel (slides, className)
import Image from "next/image";

export default function Landing() {
  const slides = [
    { src: "/data/slide-img1.jpg", alt: "Stars Basketball 1" },
    { src: "/data/slide-img2.jpg", alt: "Stars Basketball 2" },
    { src: "/data/slide-img3.jpg", alt: "Stars Basketball 3" },
    { src: "/data/slide-img4.jpg", alt: "Stars Basketball 4" },
  ];

  return (
    <div id="home">
      {/* =========== HERO (dunkel, sportlich, Court-Vibes) =========== */}
      <section className="relative overflow-hidden">
        {/* Dark court background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,#0b1220_30%,#08101c_60%,#060e19_100%)]" />
          {/* soft orange/blue glows */}
          <div className="absolute -left-16 top-16 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
          {/* subtle court lines */}
          <div className="absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(255,255,255,0.6)_32px)]" />
        </div>

        <Container className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          {/* Left: copy + ctas */}
          <div>
            <div className="flex items-center gap-2">
              <Pill>
                <CalendarDays size={16} className="mr-2" />
                Nächstes Spiel · Samstag 19:30
              </Pill>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
              Mehr als ein Verein. <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-sky-300 bg-clip-text text-transparent">
                Stars Basketball.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-slate-200/90 md:text-xl">
              Nachwuchs. Leidenschaft. Community. Von U10 bis U19, Girls-Only-Programme
              und Camps – werde Teil der Stars-Familie.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                href="/news"
                className="bg-orange-500 text-white hover:bg-orange-600"
              >
                <Newspaper size={20} className="mr-2" />
                Aktuelle News
              </Button>
              <Button
                href="/media"
                variant="ghost"
                className="text-sky-300 hover:text-white hover:bg-white/10"
              >
                <Play size={20} className="mr-2" />
                Highlights ansehen
              </Button>
            </div>

            {/* compact stats strip */}
            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-slate-200">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-4">
                <p className="text-2xl font-extrabold text-white">6</p>
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Teams
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-4">
                <p className="text-2xl font-extrabold text-white">50+</p>
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Mitglieder
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-4">
                <p className="text-2xl font-extrabold text-white">4+</p>
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Coaches
                </p>
              </div>
            </div>
          </div>

          {/* Right: widescreen carousel */}
          <div className="relative">
            <Carousel
              slides={slides}
              className="aspect-[16/9] lg:aspect-[21/9] rounded-[1.5rem] border border-white/10 shadow-2xl"
            />
            {/* glass ring */}
            <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-white/15" />
          </div>
        </Container>
      </section>

      {/* =========== NEWS (bildstärker, dichter) =========== */}
      
      <section className="border-b border-slate-200 bg-sky-50/50 py-12 md:py-16">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="inline-block border-b-4 border-orange-500 pb-1 text-4xl font-extrabold md:text-5xl">
                Aktuelle News
              </h2>
              <p className="mt-2 text-slate-600">Spielberichte, Ankündigungen & mehr</p>
            </div>
            <a
              href="/news"
              className="group hidden text-sm text-orange-700 hover:text-orange-800 md:inline-flex"
            >
              Alle Beiträge
              <ChevronRight className="ml-1 transition group-hover:translate-x-0.5" size={16} />
            </a>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((n) => (
              <article
                key={n.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow"
              >
                {n.image && (
                  <div className="relative aspect-[16/9]">
                    <Image src={n.image} alt={n.title} fill className="object-cover" />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="rounded-full bg-orange-100 px-2 py-0.5 font-medium text-orange-700">
                      {n.tag}
                    </span>
                    <time>{new Date(n.date).toLocaleDateString("de-AT")}</time>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-orange-700">
                    <a href={`/news/${n.slug}`}>{n.title}</a>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-slate-700">{n.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =========== TEAMS (farbige header + callouts) =========== */}
      <section className="border-b border-slate-200 bg-white py-12 md:py-16">
        <Container>
          <div className="mb-8">
            <h2 className="inline-block border-b-4 border-sky-500 pb-1 text-3xl font-extrabold md:text-4xl">
              Unsere Teams
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Trainingszeiten, Coaches, Spieltermine
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teams.map((t) => (
              <div
                key={t.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors hover:border-sky-200"
              >
                <div className={`h-28 w-full bg-gradient-to-r ${t.color}`} />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-sm text-slate-600">Coach: {t.coach}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={`/teams/${t.id}`}
                      className="rounded-md bg-sky-50 px-3 py-1 text-sm text-sky-700 ring-1 ring-sky-200 hover:bg-sky-100"
                    >
                      Trainingszeiten
                    </a>
                    <a
                      href={`/teams/${t.id}`}
                      className="rounded-md bg-orange-50 px-3 py-1 text-sm text-orange-700 ring-1 ring-orange-200 hover:bg-orange-100"
                    >
                      Spielplan
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========== MEDIA STRIP (Schnellansicht) =========== */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-white to-sky-50 py-12 md:py-16">
        <Container>
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="inline-block border-b-4 border-sky-500 pb-1 text-3xl font-extrabold md:text-4xl">
                Media
              </h2>
              <p className="mt-2 text-sm text-slate-600">Fotos & Videos aus der Saison</p>
            </div>
            <a
              href="/media"
              className="group hidden text-sm text-sky-700 hover:text-sky-800 md:inline-flex"
            >
              Zur Galerie
              <ChevronRight className="ml-1 transition group-hover:translate-x-0.5" size={16} />
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {gallery.map((g) => (
              <div
                key={g.id}
                className={`${g.ratio} group relative overflow-hidden rounded-xl border border-slate-200 bg-white`}
              >
                {/* Falls du echte Pfade hast: <Image .../> */}
                <div className="flex h-full items-center justify-center text-xs text-slate-500 group-hover:text-slate-700">
                  {g.alt}
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 ring-1 ring-sky-200 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>

          <Card className="mt-6 flex items-center justify-between transition-colors hover:border-sky-200">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-sky-50 p-2">
                <Play className="text-sky-700" />
              </div>
              <div>
                <p className="text-sm font-semibold">Game Highlights</p>
                <p className="text-xs text-slate-600">YouTube-Playlist einbetten</p>
              </div>
            </div>
            <Button href="/media" className="bg-sky-600 hover:bg-sky-700">
              Jetzt ansehen
            </Button>
          </Card>
        </Container>
      </section>

      {/* =========== SPONSOREN (dezent) =========== */}
      <section className="bg-white py-8">
        <Container className="flex flex-wrap items-center justify-center gap-8 opacity-70">
          <span className="text-sm font-semibold text-slate-500">SPONSOR · LOGO</span>
          <span className="text-sm font-semibold text-slate-500">SPONSOR · LOGO</span>
          <span className="text-sm font-semibold text-slate-500">SPONSOR · LOGO</span>
          <span className="text-sm font-semibold text-slate-500">SPONSOR · LOGO</span>
        </Container>
      </section>
    </div>
  );
}
