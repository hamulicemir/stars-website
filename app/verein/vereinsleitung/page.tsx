import { Container } from "@/components/ui/container";
import { Users, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Vereinsleitung – Stars Basketball",
  description: "Die Vereinsleitung von Stars Basketball stellt sich vor.",
};

const leaders = [
  {
    role: "Obmann",
    name: "Asmir Husanovic",
    responsibility: "Vereinsführung, Medienarbeit",
  },
  {
    role: "Obmann-Stv.",
    name: "Edin Cizmic",
    responsibility: "Vereinsführung, Medienarbeit",
  },
  {
    role: "Kassier",
    name: "Edin Cizmic",
    responsibility: "Koordination der Finanzen",
  },
  {
    role: "Sportlicher Leiter",
    name: "Ramiz Suljanovic",
    responsibility: "Sportliche Leitung, Landesliga, Nachwuchs, Medienarbeit, Schulprojekte",
  },
  {
    role: "Sportlicher Koordinator",
    name: "Asmir Husanovic",
    responsibility: "Nachwuchs, Meisterschafts- und Cupanmeldungen, Reise Koordination",
  },
  {
    role: "Elternarbeit",
    name: "Edin Cizmic",
    responsibility:
      "Information und Austausch, Beratung, Ausflug/Camp Organisation, Einfluss der Eltern auf die Betreuung im Sportverein",
  },
];

export default function Page() {
  return (
    <div className="bg-sky-100">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-5rem] top-[-2rem] h-56 w-56 rounded-full bg-gradient-to-br from-orange-400/15 to-red-400/15 blur-3xl" />
          <div className="absolute right-[-3rem] top-20 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-400/15 to-indigo-400/15 blur-3xl" />
        </div>
        <Container className="py-10 sm:py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">Verein</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Vereinsleitung</h1>
          <p className="mt-3 max-w-2xl text-base text-slate-700 md:text-lg">
            Unsere Vereinsleitung sorgt für eine erfolgreiche Organisation, sportliche Entwicklung
            und enge Zusammenarbeit mit Mitgliedern und Eltern.
          </p>
        </Container>
      </section>

      {/* Team */}
      <section className="border-b border-slate-200 bg-sky-100">
        <Container className="py-10 md:py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((p) => (
              <div
                key={p.role + p.name}
                className="rounded-2xl border border-slate-200 bg-sky-50 p-5 shadow-sm transition hover:border-sky-200"
              >
                <h3 className="text-base font-bold text-slate-900">{p.role}</h3>
                <p className="mt-1 text-sm font-semibold text-sky-700">{p.name}</p>
                <p className="mt-2 text-sm text-slate-700">{p.responsibility}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-orange-50 to-sky-50 p-6 md:p-10">
            <div className="grid items-center gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-black tracking-tight md:text-3xl">
                  Lust, den Verein mitzugestalten?
                </h3>
                <p className="mt-2 text-slate-700">
                  Wir freuen uns über Engagement – ob als Trainer:in, Elternteil oder Sponsor. Gemeinsam
                  bringen wir Stars Basketball weiter voran.
                </p>
              </div>
              <div className="flex flex-col gap-2 md:justify-end">
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white shadow hover:bg-orange-600"
                >
                  Kontakt aufnehmen
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
