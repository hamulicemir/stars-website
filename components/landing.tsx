import React from "react";
import { CalendarDays, Newspaper, Images, Users, Award, Play, ChevronRight } from "lucide-react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Pill } from "./ui/pill";
import { Card } from "./ui/card";
import { gallery } from "@/data/media";
import { news } from "@/data/news";
import { teams } from "@/data/teams";
import Carousel from "@/components/ui/carousel";

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
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-orange-400/10 to-red-400/10 blur-3xl" />
          <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-400/10 to-indigo-400/10 blur-3xl" />
          <div className="absolute -bottom-10 left-1/3 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-400/10 to-blue-500/10 blur-3xl" />
        </div>
        <Container className="grid items-center gap-16 py-14 md:grid-cols-2 md:py-20">
          <div className="relative">
            <Carousel slides={slides} 
              className="aspect-[21/9] lg:aspect-[21/9] rounded-[2rem] border border-slate-200 shadow-xl"
            />
          </div>
          <div>
            <Pill><CalendarDays size={16} className="mr-2" /> Nächstes Spiel · Samstag 19:30</Pill>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Leidenschaft. Teamgeist. <br />
              <span className="text-orange-500">Stars Basketball.</span>
            </h1>
            <p className="mt-4 max-w-xl text-slate-700 md:text-lg">
              Nachwuchsförderung und Basketball – von U10 bis U19, Girls-Only-Programme und Camps. Komm ins Team!
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/news" className="bg-orange-500"><Newspaper size={30} /> Aktuelle News</Button>
              {/* Sekundär-Button in Blau */}
              <Button
                href="/media"
                variant="ghost"
                className="text-sky-600 hover:text-sky-700 hover:bg-sky-50"
              >
                <Play size={30} /> Highlights ansehen
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights 
      <section className="border-b border-slate-200">
        <Container className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="hover:border-sky-200 transition-colors">
            <div className="flex items-center gap-3">
              <Award className="text-sky-600" />
              <div>
                <p className="text-lg font-semibold">Programm</p>
                <p className="text-md text-slate-600">U10–U19 & Girls</p>
              </div>
            </div>
          </Card>
          <Card className="hover:border-sky-200 transition-colors">
            <div className="flex items-center gap-3">
              <Users className="text-sky-600" />
              <div>
                <p className="text-lg font-semibold">4+ Coaches</p>
                <p className="text-md text-slate-600">Professionelle Trainer*innen</p>
              </div>
            </div>
          </Card>
          <Card className="hover:border-sky-200 transition-colors">
            <div className="flex items-center gap-3">
              <Images className="text-sky-600" />
              <div>
                <p className="text-lg font-semibold">Media</p>
                <p className="text-md text-slate-600">Fotos & Videos</p>
              </div>
            </div>
          </Card>
          <Card className="hover:border-sky-200 transition-colors">
            <div className="flex items-center gap-3">
              <CalendarDays className="text-sky-600" />
              <div>
                <p className="text-lg font-semibold">Trainingszeiten</p>
                <p className="text-md text-slate-600">Alle Teams</p>
              </div>
            </div>
          </Card>
        </Container>
      </section>
      */}
      {/* News */}
      <section className="border-b border-slate-200 py-6 md:py-6">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              {/* Headline mit blauer Unterstreichung */}
              <h2 className="text-3xl font-bold md:text-4xl inline-block pb-2 border-b-4 border-sky-500">
                Aktuelle News
              </h2>
              <p className="mt-1 text-md text-slate-600">Spielberichte, Ankündigungen & mehr</p>
            </div>
            <a
              href="/news"
              className="group hidden text-sm text-sky-700 hover:text-sky-800 md:inline-flex bg"
            >
              Alle Beiträge <ChevronRight className="ml-1 transition group-hover:translate-x-0.5" size={16} />
            </a>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((n) => (
              <article
                key={n.id}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:bg-slate-50 hover:border-sky-200"
              >
                <div className="flex items-center justify-between text-xs text-slate-500">
                  {/* Tag in Blau */}
                  <span className="rounded-full bg-sky-100 text-sky-700 px-2 py-0.5">
                    {n.tag}
                  </span>
                  <time>{new Date(n.date).toLocaleDateString("de-AT")}</time>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:underline">
                  <a href={`/news/${n.slug}`} className="hover:text-sky-700">
                    {n.title}
                  </a>
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-slate-700">{n.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Teams */}
      <section className="border-b border-slate-200 py-12 md:py-16">
        <Container>
          <div className="mb-8">
            <h2 className="text-2xl font-bold md:text-3xl inline-block pb-1 border-b-4 border-sky-500">
              Unsere Teams
            </h2>
            <p className="mt-1 text-sm text-slate-600">Trainingszeiten, Coaches, Spieltermine</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teams.map((t) => (
              <div
                key={t.id}
                className="group rounded-2xl border border-slate-200 bg-white hover:border-sky-200 transition-colors"
              >
                <div className={`h-28 w-full rounded-t-2xl bg-gradient-to-r ${t.color}`} />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-sm text-slate-600">Coach: {t.coach}</p>
                  <div className="mt-4 flex gap-2">
                    <a href={`/teams/${t.id}`} className="text-sm text-sky-700 hover:underline">Trainingszeiten</a>
                    <span className="text-slate-300">•</span>
                    <a href={`/teams/${t.id}`} className="text-sm text-sky-700 hover:underline">Spielplan</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
