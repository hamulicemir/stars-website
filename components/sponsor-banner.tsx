import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  src: string;
  alt?: string;
};

export default function SponsorBanner({
  href,
  src,
  alt = "Sponsor",
}: Props) {
  return (
    <section className="border-b border-slate-200 py-8 md:py-10 mb-5">
      <h1 className="mb-4 text-center text-2xl font-semibold md:text-4xl">
        Vielen Dank an unseren Sponsor
      </h1>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto flex max-w-3xl items-center justify-center">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex"
          >
            <div className="relative w-full">
              <Image
                src={src}
                alt={alt}
                // feste Breite/Höhe als Basis-Ratio
                width={800}
                height={120}
                className="h-auto w-full opacity-90 transition group-hover:opacity-100"
                // Breakpoints für Ladegröße
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 800px"
                priority={false}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
