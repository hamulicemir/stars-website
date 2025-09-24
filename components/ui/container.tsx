import React from "react";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Projektweit einheitliche Container-Maße mit responsiven Breiten
  // - Mobile: Volle Breite mit Padding (16px)
  // - Tablet: Mehr Padding (24px)
  // - Laptop: Begrenzte Breite (1400px)
  // - Desktop: Erweiterte Breite (1700px)
  // - Große Screens: Maximale Breite (1800px)
  return (
    <div
      className={`
        mx-auto w-full
        px-4 sm:px-6 lg:px-8
        max-w-[1400px]
        xl:max-w-[1700px]
        2xl:max-w-[1800px]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
