// app/media/page.tsx
import { Container } from "@/components/ui/container";
import MediaGrid, { MediaItem } from "@/components/media/media-grid";

export const metadata = {
  title: "Media – Stars Basketball",
  description:
    "Fotos & Videos aus der Saison. Highlights, Galerien und Playlists der Stars.",
};

const mediaItems: MediaItem[] = [
  { id: "1", title: "U14 Heimspiel", type: "image", src: "/media/u14-heim.jpg" },
  { id: "2", title: "Season Recap 2025", type: "youtube", src: "dQw4w9WgXcQ" },
  { id: "3", title: "Trainingscamp", type: "image", src: "/media/camp.jpg" },
  { id: "4", title: "U16 Auswärts", type: "image", src: "/media/u16-away.jpg" },
  { id: "5", title: "Stars Family Day", type: "image", src: "/media/family.jpg" },
  // Beispiel ohne Beschreibung/Titel:
  { id: "6", type: "youtube", src: "9bZkp7q19f0" },
  { id: "7", title: "Mini Sportschule", type: "image", src: "/media/minis.jpg" },
  { id: "8", title: "Final Four", type: "image", src: "/media/final4.jpg" },
];

export default function Page() {
  return (
    <div className="bg-sky-100">
      {/* Hero ohne "Verein"-Label */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-5rem] top-[-2rem] h-56 w-56 rounded-full bg-gradient-to-br from-orange-400/15 to-red-400/15 blur-3xl" />
          <div className="absolute right-[-3rem] top-20 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-400/15 to-indigo-400/15 blur-3xl" />
        </div>

        <Container className="py-10 sm:py-12 md:py-16">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Media</h1>
          <p className="mt-3 max-w-2xl text-base text-slate-700 md:text-lg">
            Fotos &amp; Videos aus der Saison. Binde hier eine YouTube-Playlist oder eigene Galerien ein.
          </p>
        </Container>
      </section>

      {/* Grid + Filter (Client) */}
      <section className="border-b border-slate-200 bg-sky-100">
        <Container className="py-10 md:py-14">
          <MediaGrid items={mediaItems} />
        </Container>
      </section>
    </div>
  );
}
