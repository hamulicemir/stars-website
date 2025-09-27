// app/mitglied-werden/page.tsx
import { Container } from "@/components/ui/container";
import TiltCard from "@/components/ui/tilt-card";

export const metadata = {
  title: "Mitglied werden – Stars Basketball",
  description:
    "Jetzt Spieler:in bei den Stars werden: 15 Tage gratis schnuppern, Trainingszeiten & Mitgliedsbeiträge, Bankdaten und Downloads.",
};

export default function Page() {
  return (
    <div className="bg-sky-100">
      {/* Hero (kompakter) */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-5rem] top-[-2rem] h-56 w-56 rounded-full bg-gradient-to-br from-orange-400/15 to-red-400/15 blur-3xl" />
          <div className="absolute right-[-3rem] top-20 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-400/15 to-indigo-400/15 blur-3xl" />
        </div>

        <Container className="py-8 sm:py-10 md:py-12">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Mitglied werden
          </h1>
          <p className="mt-2 max-w-2xl text-base text-slate-700 md:text-lg">
            Werde Teil der Stars: 15&nbsp;Tage gratis schnuppern, starke
            Trainer:innen und Teams für jedes Alter.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="mailto:office@stars-basketball.com?subject=Schnuppertraining%20Anfrage"
              className="inline-flex h-10 items-center rounded-xl bg-sky-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              Schnuppertraining anfragen
            </a>
            <a
              href="#beitraege"
              className="inline-flex h-10 items-center rounded-xl border border-slate-300 bg-white/70 px-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-sky-200 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              Mitgliedsbeiträge ansehen
            </a>
          </div>
        </Container>
      </section>

      {/* Intro + USP */}
      <section className="border-b border-slate-200 bg-sky-100">
        <Container className="py-8 md:py-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <TiltCard className="rounded-2xl border border-slate-200 bg-sky-50 p-5 shadow-sm hover:shadow-md">
              <h2 className="text-xl font-bold text-slate-900">
                Wie werde ich Spieler:in bei Stars Basketball?
              </h2>
              <p className="mt-2 text-slate-700">
                Wir sind immer auf der Suche nach neuen Mitspielerinnen und
                Mitspielern! Du hast Basketball in der Schule kennengelernt und
                willst jetzt richtig loslegen? Du möchtest Balltricks lernen,
                an Wettbewerben teilnehmen oder vielleicht sogar einmal
                professionell spielen? Egal ob Mädchen oder Junge, klein oder
                groß – bei uns bist du willkommen. Wir freuen uns, dich bei
                einer unserer vielen Übungseinheiten zu begrüßen.
              </p>
            </TiltCard>

            <TiltCard className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-sky-400/20 to-indigo-400/20 blur-2xl" />
              <h3 className="text-xl font-black tracking-tight text-slate-900">
                15 Tage gratis schnuppern
              </h3>
              <p className="mt-2 text-slate-700">
                Unentschlossen? Teste uns zwei Wochen lang kostenlos,
                trainiere mit der STARS-Mannschaft und erlebe die Freude am
                Sport. Die Aufnahme ist jederzeit möglich.
              </p>
              <a
                href="mailto:office@stars-basketball.com?subject=Schnuppertraining%20Anfrage"
                className="mt-3 inline-flex h-10 items-center rounded-xl bg-sky-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                Jetzt Schnuppertermin vereinbaren
              </a>
            </TiltCard>
          </div>
        </Container>
      </section>

      {/* Beiträge */}
      <section id="beitraege" className="border-b border-slate-200 bg-sky-100">
        <Container className="py-8 md:py-12">
          <h2 className="text-2xl font-black tracking-tight">Mitgliedsbeitrag</h2>
          <p className="mt-1 text-slate-700">
            Wähle das passende Training – Abrechnung pro Halbsaison*.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            <PriceCard
              title="Basketball"
              subtitle="Training 2× pro Woche"
              price="€ 220"
              period="pro Halbsaison*"
              popular
            />
            <PriceCard
              title="Basketball"
              subtitle="Training 3× pro Woche"
              price="€ 240"
              period="pro Halbsaison*"
            />
            <PriceCard
              title="Minisportschule"
              subtitle="Training 1× pro Woche (Samstags)"
              price="€ 170"
              period="pro Halbsaison*"
            />
          </div>

          <p className="mt-3 text-sm text-slate-600">
            * Ein Semester dauert 5&nbsp;Monate:
            1.&nbsp;Semester: September – Jänner · 2.&nbsp;Semester: Februar – Juni
          </p>
        </Container>
      </section>

      {/* Bankdaten + Downloads */}
      <section className="border-b border-slate-200 bg-sky-100">
        <Container className="py-8 md:py-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <TiltCard className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md">
              <h3 className="text-lg font-bold text-slate-900">Kontoverbindung</h3>
              <dl className="mt-2 space-y-1.5 text-slate-800">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-slate-600">Kontoinhaber</dt>
                  <dd className="text-sm font-semibold">SV Stars</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-slate-600">IBAN</dt>
                  <dd className="text-sm font-mono font-semibold tracking-wide">
                    AT81&nbsp;3236&nbsp;7000&nbsp;0012&nbsp;4248
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-slate-600">Verwendungszweck</dt>
                  <dd className="text-sm font-semibold">
                    Mitgliedsbeitrag – Name des Kindes
                  </dd>
                </div>
              </dl>
            </TiltCard>

            <TiltCard className="rounded-2xl border border-slate-200 bg-sky-50 p-5 shadow-sm hover:shadow-md">
              <h3 className="text-lg font-bold text-slate-900">Downloads</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/downloads/Beitrittserklaerung-SV-Stars-Basketball.pdf"
                    target="_blank"
                    className="inline-flex items-center rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-sky-200 hover:bg-sky-50"
                  >
                    Anmeldeformular (PDF)
                  </a>
                </li>
              </ul>

              <p className="mt-3 text-sm text-slate-600">
                Bitte das ausgefüllte Anmeldeformular an{" "}
                <a
                  href="mailto:office@stars-basketball.com"
                  className="font-semibold text-sky-700 underline-offset-2 hover:underline"
                >
                  office@stars-basketball.com
                </a>{" "}
                senden oder beim jeweiligen Trainer abgeben.
              </p>
            </TiltCard>
                          <p className="mt-3 text-sm text-slate-600">
                * Kein Training in Schulferien oder an schulautonomen Tagen.
              </p>
          </div>
        </Container>
      </section>

      {/* Kontakt CTA */}
      <section className="bg-sky-100">
        <Container className="py-8 md:py-12">
          <TiltCard className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 to-white/70 p-5 shadow-sm hover:shadow-md">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Fragen? Wir helfen gerne.
              </h3>
              <p className="mt-0.5 text-sm text-slate-700">
                Schreib uns – wir melden uns schnell zurück.
              </p>
            </div>
            <a
              href="mailto:office@stars-basketball.com?subject=Frage%20zu%20Mitgliedschaft"
              className="inline-flex h-10 items-center rounded-xl bg-sky-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              Kontakt aufnehmen
            </a>
          </TiltCard>
        </Container>
      </section>
    </div>
  );
}

/* ---------- kompaktere PriceCard (mit 3D-Tilt) ---------- */
function PriceCard({
  title,
  subtitle,
  price,
  period,
  popular = false,
}: {
  title: string;
  subtitle: string;
  price: string;
  period: string;
  popular?: boolean;
}) {
  return (
    <TiltCard
      className={[
        "relative rounded-2xl border p-5 shadow-sm transition hover:shadow-md",
        popular
          ? "border-sky-300 bg-white/80 ring-1 ring-sky-200"
          : "border-slate-200 bg-sky-50",
      ].join(" ")}
    >
      {popular && (
        <span className="absolute right-4 top-4 rounded-md bg-sky-600 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          Beliebt
        </span>
      )}
      <h3 className="text-sm font-semibold text-sky-700">{title}</h3>
      <p className="mt-0.5 text-base font-bold text-slate-900">{subtitle}</p>

      <div className="mt-3 flex items-baseline gap-2">
        <div className="text-3xl font-black text-slate-900">{price}</div>
        <div className="text-sm font-medium text-slate-600">{period}</div>
      </div>

      <a
        href="mailto:office@stars-basketball.com?subject=Anmeldung%20Stars%20Basketball"
        className="mt-4 inline-flex h-10 items-center rounded-xl bg-sky-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
      >
        Jetzt anmelden
      </a>
    </TiltCard>
  );
}
