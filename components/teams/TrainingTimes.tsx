// components/teams/TrainingTimes.tsx
import { TrainingSlot } from "@/lib/teams";

export default function TrainingTimes({ slots }: { slots: TrainingSlot[] }) {
  if (!slots?.length) return <p className="text-sm text-slate-600">Keine Trainingszeiten hinterlegt.</p>;
  return (
    <ul className="mt-3 text-sm text-slate-700 space-y-2">
      {slots.map(s => (
        <li key={s.id} className="flex flex-wrap gap-2">
          <span className="inline-flex min-w-[2.5rem] font-semibold text-slate-800">{s.weekday}</span>
          <span>{s.start}–{s.end}</span>
          <span className="text-slate-400">•</span>
          <span>{s.hall}</span>
        </li>
      ))}
    </ul>
  );
}
