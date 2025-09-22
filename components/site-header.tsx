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
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-sky-100 backdrop-blur">
  <Container className="flex h-24 items-center justify-between">
    <a href="/" className="flex items-center gap-3 text-gray-900">
      <img
        src="/data/logo.png"
        alt="Stars Basketball Logo"
        className="h-20 w-auto object-contain"
      />
      <span className="text-xl font-extrabold tracking-tight">STARS BASKETBALL</span>
    </a>
    <nav className="hidden gap-6 md:flex">
      {nav.map((n) => (
        <a
          key={n.href}
          href={n.href}
          className="text-lg text-slate-600 font-bold px-3 py-1 
             hover:text-white hover:bg-sky-600 rounded-md transition-colors"
        >
          {n.label}
        </a>
      ))}
    </nav>
    <div className="flex items-center gap-2">
      <Button 
        variant="ghost" 
        href="/mitglied"
        className="text-lg lg:text-xl hover:text-sky-600 text-black"
      >
        Mitglied werden
      </Button>
    </div>
  </Container>
</header>
  );
}
