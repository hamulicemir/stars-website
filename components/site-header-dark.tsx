import React from "react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";

const nav = [
  { label: "HOME", href: "/" },
  { label: "NEWS", href: "/news" },
  { label: "VEREIN", href: "/verein" },
  { label: "TEAMS", href: "/teams" },
  { label: "MEDIA", href: "/media" },
  { label: "SPONSOR", href: "/sponsors" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1220]/80 backdrop-blur-md">
      {/* Hintergrund-Glows + Court-Lines */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-orange-500/20 blur-2xl" />
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-sky-500/20 blur-2xl" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(255,255,255,0.6)_32px)]" />
      </div>

      <Container className="flex h-20 items-center justify-between">
        {/* Logo + Name */}
        <a href="/" className="flex items-center gap-3 text-white">
          <img
            src="/data/logo.png"
            alt="Stars Basketball Logo"
            className="h-12 w-auto object-contain"
          />
          <span className="text-lg font-extrabold tracking-wide">
            STARS BASKETBALL
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden gap-6 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-semibold uppercase tracking-wide text-slate-200 hover:text-orange-400 transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <Button
            href="/mitglied"
            className="bg-orange-500 text-white hover:bg-orange-600"
          >
            Mitglied werden
          </Button>
        </div>
      </Container>
    </header>
  );
}
