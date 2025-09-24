import React from "react";
import { CalendarDays, Newspaper, Images, Users, Award, Play, ChevronRight, ArrowRight, Trophy, HeartHandshake } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Pill } from "./ui/pill";
import { Card } from "./ui/card";
import { gallery } from "@/data/media";
import { news } from "@/data/news";
import { teams } from "@/data/teams";
import Image from "next/image";
import Carousel from "@/components/ui/carousel";
import HighlightVideo from "@/components/highlight-video";
import SponsorBanner from "@/components/sponsor-banner";
import NextStarsGameGlobal from "@/components/next-stars-game-global";


export default function Landing() {
    const slides = [
    { src: "/data/slide-img1.jpg", alt: "Stars Basketball 1" },
    { src: "/data/slide-img2.jpg", alt: "Stars Basketball 2" },
    { src: "/data/slide-img3.jpg", alt: "Stars Basketball 3" },
    { src: "/data/slide-img4.jpg", alt: "Stars Basketball 4" },
  ];
  const stats = [
  { icon: <Users className="h-5 w-5" />, label: "Aktive Mitglieder", value: "120+" },
  { icon: <Award className="h-5 w-5" />, label: "Teams", value: "8" },
  { icon: <Trophy className="h-5 w-5" />, label: "Turniersiege", value: "15+" },
  { icon: <HeartHandshake className="h-5 w-5" />, label: "Coaches", value: "4+" },
];


  return (
    <div id="home">
        {/* Hero (mobil-first, responsive optimiert) */}
        <section className="relative overflow-hidden border-b border-slate-200">
          {/* Deko-Background (dezent; Größe skaliert mit Viewport) */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-gradient-to-br from-orange-400/10 to-red-400/10 blur-3xl md:h-64 md:w-64" />
            <div className="absolute right-0 top-40 h-56 w-56 rounded-full bg-gradient-to-br from-fuchsia-400/10 to-indigo-400/10 blur-3xl md:h-72 md:w-72" />
            <div className="absolute -bottom-10 left-1/3 h-56 w-56 rounded-full bg-gradient-to-tr from-sky-400/10 to-blue-500/10 blur-3xl md:h-80 md:w-80" />
          </div>

          {/* GRID-LAYOUT
              - mobil: 1 Spalte (Text → Foto → CTAs/KPIs)
              - ab md (iPad/kleine Laptops): 2 Spalten
              - Gaps mobil kompakt, wachsen mit Breakpoints  */}
          <Container className="grid items-start gap-6 py-8 sm:gap-8 sm:py-10 md:grid-cols-2 md:gap-x-12 md:gap-y-0 md:py-14 lg:gap-x-16 lg:py-20">

            {/* RECHTE SPALTE (ab md): Textblock (Pill + H1 + Copy) 
                - mobil zuerst (order-1), ab md rechts (order-2 + col-start-2) */}
            <div className="order-1 md:order-2 md:col-start-2 md:row-start-1">
              {/* Pill skaliert automatisch klein → normal */}
              <Pill>
                <CalendarDays className="mr-1 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Nächstes Spiel · Samstag 19:30
              </Pill>

              {/* Headline
                  - mobil: groß, aber nicht zu wuchtig (text-5xl)
                  - iPad (md): kompakter (text-6xl, engeres leading)
                  - Desktop (lg): richtig groß */}
              <h1 className="mt-3 font-black tracking-tight text-5xl leading-tight sm:text-6xl md:text-6xl md:leading-[1.05] lg:text-7xl">
                Leidenschaft. Teamgeist. <br />
                <span className="text-orange-500">Stars Basketball.</span>
              </h1>

              {/* Untertext: Lesbarkeit ab md leicht größer */}
              <p className="mt-4 max-w-xl text-slate-700 sm:text-base md:text-lg">
                Nachwuchsförderung und Basketball – von U10 bis U19, Girls-Only-Programme und Camps. Komm ins Team!
              </p>

              {/* CTAs + KPI-Karten (DESKTOP/TABLET-Version)
                  - sitzen direkt unter dem Text in derselben Spalte/Zeile
                  - mobil ausgeblendet (es gibt unten eine mobile Variante) */}
              <div className="mt-8 hidden md:block">
                {/* CTAs: mobil-first Spacing, iPad kompakter, Desktop luftiger */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <Button href="/news" className="bg-orange-500">
                    <Newspaper size={22} className="mr-2" />
                    Aktuelle News
                  </Button>
                  <Button
                    href="/media"
                    variant="ghost"
                    className="text-sky-600 hover:text-sky-700 hover:bg-sky-50"
                  >
                    <Play size={22} className="mr-2" />
                    Highlights ansehen
                  </Button>
                </div>

                {/* KPI-Grid - lg (iPad, Laptop/Desktop): 4 Spalten*/}
                  <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-2xl border border-slate-200 bg-white/70 p-3 text-center shadow-sm backdrop-blur"
                      >
                        <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                          {s.icon}
                        </div>
                        <div className="text-lg font-bold">{s.value}</div>
                        <div className="text-xs text-slate-500">{s.label}</div>
                      </div>
                    ))}
                  </div>
              </div>
            </div>

            {/* LINKE SPALTE (ab md): Carousel
                - mobil nach dem Text (order-2)
                - iPad: 4:3 Aspect & höhere fixe Höhe (füllt die Spalte)
                - Laptop/Desktop: kinoartigeres Seitenverhältnis */}
            <div className="relative order-2 md:order-1 md:col-start-1 md:row-start-1">
              <Carousel
                slides={slides}
                className="
                  rounded-xl md:rounded-[2rem]
                  /* Handy: breit, aber nicht zu hoch */
                  aspect-[16/9] h-56
                  /* kleine Phones etwas höher */
                  sm:h-64
                  /* iPad/kleine Laptops: natürlicher 4:3-Look + mehr Höhe */
                  md:aspect-[4/3] md:h-[28rem]
                  /* Laptops/Desktops: panoramaartig + großzügige Höhe */
                  lg:aspect-[21/8] lg:h-[30rem]
                  xl:h-[34rem]
                "
              />
            </div>

            {/* CTAs + KPI-Karten (MOBILE-Version)
                - erscheinen NACH dem Foto
                - eigenständiges Spacing, kompakt gehalten */}
            <div className="order-3 md:hidden">
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href="/news" className="bg-orange-500">
                  <Newspaper size={20} className="mr-2" />
                  Aktuelle News
                </Button>
                <Button
                  href="/media"
                  variant="ghost"
                  className="text-sky-600 hover:text-sky-700 hover:bg-sky-50"
                >
                  <Play size={20} className="mr-2" />
                  Highlights ansehen
                </Button>
              </div>

              {/* 2 Spalten auf Handy, bleibt luftig; kleine Top-Margin */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-slate-200 bg-white/70 p-3 text-center shadow-sm backdrop-blur"
                  >
                    <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                      {s.icon}
                    </div>
                    <div className="text-lg font-bold">{s.value}</div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </Container>
        </section>

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
      
      {/* Highlight-Video (YouTube) */}
      <HighlightVideo
        youtubeId="Ef77kl68UUw"           // z.B. "dQw4w9WgXcQ"
        title="Stars Season Highlights"
        poster="/media/highlights-teaser.jpg"  // optional
      />


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
