"use client";

import * as React from "react";
import { Container } from "./ui/container";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "NEWS", href: "/news" },
  { label: "VEREIN", href: "/verein" },
  { label: "TEAMS", href: "/teams" },
  { label: "MEDIA", href: "/media" },
  { label: "SPONSOR", href: "/sponsors" },
];

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  // Body-Scroll sperren, solange das Panel offen ist
  React.useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  // ESC schließt Menü
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-sky-100/90 backdrop-blur">
      {/* ─────────────────────────────────────────────────────────
          STAGEs (mobil-first)
          - <1280px (Mobile/iPad/kleine Laptops): Burger sichtbar, CTA NUR im Panel
          - ≥1280px (XL, Desktop/Laptops): Desktop-Nav sichtbar, Burger weg, CTA oben im Header
         ───────────────────────────────────────────────────────── */}
      <Container className="flex h-14 items-center justify-between sm:h-16 md:h-20">
        {/* Logo + Brand (Brand-Text erst ab xl einblenden) */}
        <a href="/" className="flex items-center gap-3 text-gray-900">
          <img
            src="/data/logo.png"
            alt="Stars Basketball Logo"
            className="h-10 w-auto object-contain sm:h-12 md:h-14"
          />
          <span className="hidden xl:inline text-xl font-extrabold tracking-tight">
            STARS BASKETBALL
          </span>
        </a>

        {/* Desktop-Navigation: NUR ab XL → bei 1440 sichtbar */}
        <nav className="hidden gap-2 xl:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-md px-4 py-2 text-sm font-bold text-slate-600 transition-colors hover:bg-sky-600 hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Rechts: CTA oben nur ab XL (wenn kein Burger existiert) + Burger bis <XL */}
        <div className="flex items-center gap-2">
          {/* CTA oben im Header NUR ab XL (Desktop) */}
          <a
            href="/mitglied"
            className="hidden xl:inline-flex rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Mitglied werden
          </a>

          {/* Burger-Button: bis <XL sichtbar, ab XL ausgeblendet */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-sky-200 xl:hidden"
            aria-label="Menü öffnen"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </Container>

      {/* Overlay (nur, wenn Panel offen & <XL) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 xl:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Panel: Mobile/Tablet/kleine Laptops (<XL) */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        className={`xl:hidden fixed inset-x-0 top-0 z-50 origin-top rounded-b-2xl bg-sky-50 shadow-xl ring-1 ring-slate-200 transition-transform duration-200 ease-out ${
          open ? "scale-y-100" : "scale-y-0"
        }`}
      >
        {/* Panel-Header */}
        <Container className="flex h-14 items-center justify-between sm:h-16">
          <a
            href="/"
            className="flex items-center gap-3 text-gray-900"
            onClick={() => setOpen(false)}
          >
            <img
              src="/data/logo.png"
              alt="Stars Basketball Logo"
              className="h-10 w-auto object-contain sm:h-12"
            />
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-sky-200"
            aria-label="Menü schließen"
            onClick={() => setOpen(false)}
          >
            <X className="h-7 w-7" />
          </button>
        </Container>

        {/* Links + CTA (orange) IM Panel für <XL */}
        <nav className="px-4 pb-4">
          <ul className="space-y-1">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-sky-100"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA im Panel (nur <XL sichtbar, da Panel selbst xl:hidden ist) */}
          <div className="mt-3 border-t border-slate-200 pt-3">
            <a
              href="/mitglied"
              className="block w-full rounded-xl bg-orange-500 px-4 py-3 text-center text-base font-semibold text-white hover:bg-orange-600"
              onClick={() => setOpen(false)}
            >
              Mitglied werden
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

