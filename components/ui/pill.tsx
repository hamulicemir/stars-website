import React from "react";
export function Pill({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-full border border-slate-300 bg-orange-500 px-3 py-1 text-md font-medium tracking-wide text-black">{children}</span>;
}
