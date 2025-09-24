"use client";
import * as React from "react";
import { Container } from "./ui/container";
import { Menu, X, ChevronDown } from "lucide-react";

// 🧭 Navigationsstruktur mit Dropdown-Unterpunkten
const nav = [
  { label: "HOME", href: "/" },
  { label: "NEWS", href: "/news" },
  {
    label: "VEREIN",
    items: [
      { label: "Über uns", href: "/verein/ueber-uns" },
      { label: "Vereinsleitung", href: "/verein/vereinsleitung" },
      { label: "Trainer", href: "/verein/trainer" },
    ],
  },
  {
    label: "TEAMS",
    items: [
      { label: "U10", href: "/teams/u10" },
      { label: "U12", href: "/teams/u12" },
      { label: "U14", href: "/teams/u14" },
      { label: "Mädchen", href: "/teams/maedchen" },
      { label: "U19", href: "/teams/u19" },
      { label: "Stars Weiß U16", href: "/teams/stars-weiss-u16" },
      { label: "Minisportschule", href: "/teams/minisportschule" },
    ],
  },
  { label: "MEDIA", href: "/media" },
  { label: "SPONSORING", href: "/sponsoring" },
];

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  // Mobile-Accordions Zustand pro Dropdown
  const [mobileOpen, setMobileOpen] = React.useState<{ [key: string]: boolean }>({});

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
          - <1280px: Burger sichtbar, CTA NUR im Panel
          - ≥1280px: Desktop-Nav sichtbar, Burger weg, CTA oben im Header
         ───────────────────────────────────────────────────────── */}
      <Container className="flex h-14 items-center justify-between sm:h-16 md:h-20">
        {/* Logo + Brand */}
        <a href="/" className="flex items-center gap-3 text-gray-900">
          <img
            src="/data/logo.png"
            alt="Stars Basketball Logo"
            className="h-10 w-auto object-contain sm:h-12 md:h-14"
          />
          <span className="hidden text-xl font-extrabold tracking-tight xl:inline">
            STARS BASKETBALL
          </span>
        </a>

        {/* Desktop-Navigation (ab XL) */}
        <nav className="hidden gap-1 xl:flex">
          {nav.map((item) =>
            item.items ? (
              <div key={item.label} className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-sky-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                  aria-haspopup="menu"
                  aria-expanded="false"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 opacity-80" />
                </button>
                {/* Dropdown */}
                <div
                  role="menu"
                  className="invisible absolute left-0 top-full z-50 mt-1 w-56 origin-top rounded-xl border border-slate-200 bg-white p-1 opacity-0 shadow-lg transition-all duration-150 ease-out group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                >
                  {item.items.map((sub) => (
                    <a
                      key={sub.href}
                      href={sub.href}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-900"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                href={(item as any).href}
                className="rounded-md px-4 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-sky-600 hover:text-white"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Rechts: CTA (nur Desktop) + Burger (mobil) */}
        <div className="flex items-center gap-2">
          <a
            href="/mitglied"
            className="hidden rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 xl:inline-flex"
          >
            Mitglied werden
          </a>
          {/* Burger */}
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
          <a href="/" className="flex items-center gap-3 text-gray-900" onClick={() => setOpen(false)}>
            <img src="/data/logo.png" alt="Stars Basketball Logo" className="h-10 w-auto object-contain sm:h-12" />
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
            {nav.map((item) => (
              <li key={item.label}>
                {item.items ? (
                  <div className="rounded-xl bg-white/70 p-1">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base font-semibold text-slate-800 hover:bg-sky-100"
                      onClick={() =>
                        setMobileOpen((s) => ({ ...s, [item.label]: !s[item.label] }))
                      }
                      aria-expanded={!!mobileOpen[item.label]}
                      aria-controls={`section-${item.label}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          mobileOpen[item.label] ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    <div
                      id={`section-${item.label}`}
                      className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out ${
                        mobileOpen[item.label] ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0">
                        {item.items.map((sub) => (
                          <a
                            key={sub.href}
                            href={sub.href}
                            className="block rounded-lg px-4 py-2 text-slate-700 hover:bg-sky-50"
                            onClick={() => setOpen(false)}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={(item as any).href}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-sky-100"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
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
