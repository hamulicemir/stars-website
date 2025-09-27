import Link from "next/link";

export const metadata = { title: "Admin Dashboard" };

const Card = (p: { href: string; title: string; desc: string; }) => (
  <Link href={p.href}
    className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow transition">
    <h3 className="text-lg font-semibold">{p.title}</h3>
    <p className="text-slate-600 text-sm mt-1">{p.desc}</p>
  </Link>
);

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Willkommen 👋</h1>
      <p className="text-slate-600 mt-1">Wähle eine Funktion aus:</p>
      <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card href="/admin/news" title="News" desc="Artikel anlegen, mit Bild veröffentlichen" />
        <Card href="/admin/events" title="Trainings & Spiele" desc="Trainingszeiten & Spieltermine verwalten" />
        <Card href="/admin/media" title="Bilder & YouTube" desc="Bilder hochladen, YouTube-Links setzen" />
        <Card href="/admin/sponsors" title="Sponsoren" desc="Sponsoren inkl. Logos pflegen" />
      </div>
    </div>
  );
}
