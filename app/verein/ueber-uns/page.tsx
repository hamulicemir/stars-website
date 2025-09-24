import { Container } from "@/components/ui/container";
import Link from "next/link";
import {
  Users,
  Trophy,
  CalendarHeart,
  MapPin,
  ChevronRight,
  HeartHandshake,
  GraduationCap,
} from "lucide-react";

export const metadata = {
  title: "Über uns – Stars Basketball",
  description:
    "Der Basketballverein STARS wurde 2013 gegründet. Heute trainieren rund 110 Mitglieder in U10, U12, U14, U16 und der Mini-Sportschule.",
};

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
          <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Über uns</h1>
          <p className="mt-3 max-w-2xl text-base text-slate-700 md:text-lg">
            Der Basketballverein <strong>STARS</strong> wurde im Jahr <strong>2013</strong> gegründet.
            Seither hat sich der Verein stetig weiterentwickelt. Zurzeit zählt er rund
            <strong> 110 Mitglieder</strong>, die in <strong>U16, U14, U12, U10</strong> sowie in der{" "}
            <strong>Mini-Sportschule (4–7 Jahre)</strong> auf Korbjagd gehen.
          </p>

          {/* kleine Stats-Zeile (dezent) */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat icon={<Users className="h-5 w-5" />} label="Mitglieder" value="~110" />
            <Stat icon={<Trophy className="h-5 w-5" />} label="Wettbewerbe" value="Wiener Liga & Turniere" />
            <Stat icon={<CalendarHeart className="h-5 w-5" />} label="Gründung" value="2013" />
            <Stat icon={<MapPin className="h-5 w-5" />} label="Hallen" value="6., 10., 11., 22. Bezirk" />
          </div>
        </Container>
      </section>

      {/* Unsere Geschichte*/}
      <section className="border-b border-slate-200 bg-sky-100">
        <Container className="py-10 md:py-14">
          <h2 className="inline-block border-b-4 border-sky-500 pb-1 text-2xl font-bold md:text-3xl">
            Unsere Geschichte
          </h2>
          <div className="prose prose-slate mt-6 max-w-none">
            <p>
              Wir schauen zurück auf unsere Geschichte und schreiben eine Erfolgsstory. Wir starteten im Jahr 2013 mit
              einer U10-Mannschaft, die bereits im darauf folgenden Jahr dank unserer professionellen Trainer:innen den
              ersten Erfolg verzeichnete – Bronze beim österreichischen Mini-Cup.
            </p>
            <p>
              Im Jahr 2015 wurden die U10- und U12-Teams in der Wiener Liga angemeldet und erfreuten uns kurz danach mit
              vielen Siegen. Natürlich gehörten auch ein paar Niederlagen dazu, doch durch ihre gute Spielweise und das
              trainerische Geschick landete unsere U12 im Jahr 2016 auf dem 2. Platz und gewann Silber beim
              österreichischen Mini-Cup.
            </p>
            <p>
              Das Sportliche ist uns sehr wichtig – noch wichtiger ist uns das Wohlfühlen der Kinder in einer netten
              Atmosphäre und ihr Aufwachsen in einer gesunden sozialen Umgebung. Unser ganzes Team (Trainer:innen und
              pädagogische Betreuung) kümmert sich jederzeit um das Wohl der Kinder und steht den Eltern zur Verfügung.
            </p>
          </div>
        </Container>
      </section>

      {/* Aktivitäten */}
      <section className="border-b border-slate-200 bg-sky-100">
        <Container className="py-10 md:py-14">
          <h2 className="inline-block border-b-4 border-sky-500 pb-1 text-2xl font-bold md:text-3xl">
            Aktivitäten
          </h2>
          <div className="prose prose-slate mt-6 max-w-none">
            <p>
              Trainingsgruppen sind nach Alter aufgeteilt in <strong>U16, U14, U12 und U10</strong> sowie in die{" "}
              <strong>Mini-Sportschule (4–7 Jahre)</strong>. Unseren Jüngsten stehen neben Basketball auch andere
              Sportarten wie Schwimmen, Kampfkunst und Fußball zur Verfügung.
            </p>
            <p>
              Die U10, U12, U14 und U16 Teams nehmen an der <strong>Wiener Liga</strong> sowie an zahlreichen Turnieren
              und Freundschaftsspielen teil. Neben den regulären Trainings ist der Verein bei vielen Turnieren
              vertreten.
            </p>
            <p>
              Traditionell organisieren wir am Ende jedes Schuljahres einen <strong>3-tägigen Basketball-Camp</strong>{" "}
              für alle Altersgruppen – Eltern können ebenfalls teilnehmen. Außerdem veranstalten wir die beliebten{" "}
              <strong>„Eltern vs. Kids“</strong>-Spiele.
            </p>
            <p>
              Mit einem umfangreichen Trainingsangebot, lizenzierten Jugendtrainer:innen und mehreren
              Trainingssporthallen (im 6., 10., 11. und 22. Bezirk) erfüllen wir alle Voraussetzungen, um in Liga und
              Turnieren erfolgreich voranzuschreiten.
            </p>
          </div>
        </Container>
      </section>

      {/* Trainer */}
      <section className="border-b border-slate-200">
        <Container className="py-10 md:py-14">
          <div className="grid items-center gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="inline-block border-b-4 border-sky-500 pb-1 text-2xl font-bold md:text-3xl">
                Unsere Trainer
              </h2>
              <p className="mt-3 text-slate-700">
                Unsere Trainer:innen sind ehemalige Bundesligaspieler:innen, Nationalteamspieler:innen und
                Sportwissenschaftler:innen – alle zertifiziert für die Arbeit mit Kindern und Jugendlichen.
              </p>
              <Link
                href="/verein/trainer"
                className="mt-4 inline-flex items-center rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700"
              >
                <GraduationCap className="mr-2 h-4 w-4" />
                Erfahre mehr über die STARS-Trainer
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-sky-50 p-4">
              <h3 className="text-sm font-semibold text-slate-800">Was uns wichtig ist</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <HeartHandshake className="mt-0.5 h-4 w-4 text-sky-600" />
                  Persönliche Betreuung &amp; sichere Lernumgebung
                </li>
                <li className="flex items-start gap-2">
                  <Trophy className="mt-0.5 h-4 w-4 text-sky-600" />
                  Technik, Teamgeist &amp; Fair Play
                </li>
                <li className="flex items-start gap-2">
                  <Users className="mt-0.5 h-4 w-4 text-sky-600" />
                  Entwicklung von U10 bis U16 + Mini-Sportschule
                </li>
              </ul>
            </div>
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
                  Lust auf ein Probetraining?
                </h3>
                <p className="mt-2 text-slate-700">
                  Mit umfangreichem Trainingsangebot und lizenzierten Jugendtrainer:innen gehen wir den nächsten Schritt –
                  in Liga und Turnieren.
                </p>
              </div>
              <div className="flex flex-col gap-2 md:justify-end">
                <Link
                  href="/probetraining"
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white shadow hover:bg-orange-600"
                >
                  Jetzt anmelden <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

/* ---------- kleine Hilfskomponenten ---------- */

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-sky-50/80 p-3 text-center shadow-sm backdrop-blur">
      <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-700">
        {icon}
      </div>
      <div className="text-sm font-bold">{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}
