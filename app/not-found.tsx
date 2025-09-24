import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-[50vh] grid place-items-center bg-gradient-to-b bg-sky-100 px-4 py-8">
      <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur">
        <div className="relative grid items-center gap-8 md:grid-cols-2">
          {/* Textbereich */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">404 – Seite nicht gefunden</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Uups, die Seite hat dir einen Korb gegeben.
            </h1>
            <p className="mt-3 text-slate-600">
              Die angeforderte Adresse existiert nicht (mehr). Prüfe die URL oder kehre zur <a className="font-semibold text-sky-600 hover:underline" href="/">Startseite</a> zurück.
            </p>
          </div>
          {/* Bild */}
          <div className="mx-auto aspect-square w-40 md:w-56 relative">
          <Image
            src="/data/player-scoring.png"
            alt="Basketball-Dunk Illustration"
            fill
            sizes="(min-width: 768px) 14rem, 10rem"
            className="object-contain"
            priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
