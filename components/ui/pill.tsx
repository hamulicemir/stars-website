export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        inline-flex items-center rounded-full border border-slate-300 bg-orange-500
        px-2 py-0.5 text-xs
        sm:px-3 sm:py-1 sm:text-sm
        font-medium tracking-wide text-black
      "
    >
      {children}
    </span>
  );
}
