import React from "react";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Projektweit einheitliche Container-Maße, damit Header, Footer und Inhalte
  // bündig abschließen und der Header beim Routenwechsel nicht "wandert".
  // TODO: max-w anpassen, wenn das Design breiter wird. 
  return (
    <div className={`mx-auto w-full max-w-8xl px-4 md:px-6 ${className}`}>
      {children}
    </div>
  );
}
