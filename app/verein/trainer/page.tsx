import { Container } from "@/components/ui/container";
import Image from "next/image";

export const metadata = {
    title: "Trainer – Stars Basketball",
    description:
        "Unsere Trainer:innen: hochqualifiziert, erfahren und mit Herz für den Nachwuchs.",
};

const trainers = [
    {
        key: "ramiz",
        name: "Ramiz Suljanovic",
        roles: ["Trainer U16 / U19"],
        bio: "Zählt zu den absoluten Stars in der österreichischen Basketball Bundesliga.",
        img: "/trainers/ramiz.jpg",
    },
    {
        key: "armin",
        name: "Armin",
        roles: ["Trainer U10 / U14", "Mini Sportschule"],
        bio: "Langjähriger Jugendtrainer, aktiver Basketballspieler und im Masterstudium Sportwissenschaften.",
        img: "/trainers/armin.jpg",
    },
    {
        key: "asmir",
        name: "Asmir",
        roles: ["Trainer U12 / U19", "Stars Weiß"],
        bio: "Ehemaliger Basketballspieler mit langjähriger Erfahrung im Trainings- und Consulting-Bereich.",
        img: "/trainers/asmir.jpg",
    },
    {
        key: "dzenana",
        name: "Dženana",
        roles: ["Trainerin U10", "Mini Sportschule"],
        bio: "Ehemalige Nationalspielerin, Dipl. Sportlehrerin und Freizeitpädagogin.",
        img: "/trainers/dzenana.jpg",
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
                    <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Trainer</h1>
                    <p className="mt-3 max-w-2xl text-base text-slate-700 md:text-lg">
                        Unser Verein setzt auf hochqualifizierte Trainer:innen – einer der Hauptschlüssel für erfolgreiche Trainings.
                        Die STARS-Mannschaften werden derzeit von folgenden Trainer:innen geleitet.
                    </p>
                </Container>
            </section>

            {/* Trainer-Liste */}
            <section className="border-b border-slate-200 bg-sky-100">
                <Container className="py-10 md:py-14 space-y-8">
                    {trainers.map((t, i) => (
                        <article
                            key={t.key}
                            className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-sky-50 p-5 shadow-sm transition hover:border-sky-200 md:flex-row md:items-start"
                        >
                            {/* Bild links */}
                            <div className="shrink-0">
                                <Image
                                    src={t.img}
                                    alt={t.name}
                                    width={214}
                                    height={300}
                                    className="h-[300px] w-[214px] rounded-lg object-cover"
                                    sizes="214px"
                                    quality={90}
                                />
                            </div>

                            {/* Text rechts */}
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-slate-900">{t.name}</h3>
                                <ul className="mt-1 text-sm font-medium text-sky-700">
                                    {t.roles.map((r) => (
                                        <li key={r}>{r}</li>
                                    ))}
                                </ul>
                                <p className="mt-2 text-sm text-slate-700">{t.bio}</p>
                            </div>
                        </article>
                    ))}

                    <p className="mt-8 text-sm text-slate-700 text-center">
                        Das Wohl der Kinder liegt uns besonders am Herzen.
                    </p>
                </Container>
            </section>
        </div>
    );
}
