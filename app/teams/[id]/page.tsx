import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";

import TrainingTimes from "@/components/teams/TrainingTimes";
import Schedule from "@/components/teams/Schedule";
import Results from "@/components/teams/Results";
import Standings from "@/components/teams/Standings";

import {
  fetchTeamById,
  fetchTrainingTimes,
  fetchSchedule,
  fetchResults,
  fetchStandings,
} from "@/lib/teams";

export default async function TeamDetail({ params }: { params: { id: string } }) {
  const team = await fetchTeamById(params.id);
  if (!team) return notFound();

  const [slots, schedule, results, standings] = await Promise.all([
    fetchTrainingTimes(team.id),
    fetchSchedule(team.id),
    fetchResults(team.id),
    fetchStandings(team.id),
  ]);

  return (
    <div className="bg-sky-100">
      <section className="border-b border-slate-200">
        <Container className="py-8 md:py-10">
          <h1 className="text-3xl font-bold tracking-tight">{team.name}</h1>
          <p className="mt-1 text-slate-700">Coach: {team.coach}</p>
        </Container>
      </section>

      <section className="border-b border-slate-200">
        <Container className="py-8">
          <h2 className="text-xl font-semibold">Trainingszeiten</h2>
          <TrainingTimes slots={slots} />
        </Container>
      </section>

      <section className="border-b border-slate-200">
        <Container className="py-8">
          <h2 className="text-xl font-semibold">Spieltermine</h2>
          <Schedule games={schedule} />
        </Container>
      </section>

      <section className="border-b border-slate-200">
        <Container className="py-8">
          <h2 className="text-xl font-semibold">Ergebnisse</h2>
          <Results games={results} />
        </Container>
      </section>

      <section className="border-b border-slate-200">
        <Container className="py-8">
          <h2 className="text-xl font-semibold">Tabelle</h2>
          <Standings rows={standings} />
        </Container>
      </section>
    </div>
  );
}
