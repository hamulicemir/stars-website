// lib/teams.ts
export type TeamId = string;

export type TrainingSlot = {
  id: string;
  weekday: "Mo" | "Di" | "Mi" | "Do" | "Fr" | "Sa" | "So";
  start: string; // "17:00"
  end: string;   // "18:30"
  hall: string;
};

export type Game = {
  id: string;
  dateISO: string;   // ISO: "2025-10-03T17:30:00+02:00"
  home: string;
  away: string;
  venue?: string | null;
  status: "scheduled" | "finished";
  score?: { home: number; away: number } | null;
};

export type StandingRow = {
  position: number;
  team: string;
  played: number;
  wins: number;
  losses: number;
  pointsFor: number;
  pointsAgainst: number;
  diff: number;
};

export type TeamDetail = {
  id: TeamId;
  name: string;
  coach: string;
  division: "u10" | "u12" | "u14" | "u16" | "u19" | "girls" | "minis" | string;
};

// ==== FETCHER (heute Mock -> morgen DB/API) ====

export async function fetchTeamById(id: TeamId): Promise<TeamDetail | null> {
  // TODO: DB/Prisma/ORM
  const all: TeamDetail[] = [
    { id: "u10", name: "U10", coach: "Armin", division: "u10" },
    { id: "u12", name: "U12", coach: "Asmir", division: "u12" },
    { id: "u14", name: "U14", coach: "Armin", division: "u14" },
    { id: "u16", name: "U16", coach: "Ramiz", division: "u16" },
    { id: "u19", name: "U19", coach: "Ramiz", division: "u19" },
  ];
  return all.find(t => t.id === id) ?? null;
}

export async function fetchTrainingTimes(teamId: TeamId): Promise<TrainingSlot[]> {
  // TODO: DB
  return [
    { id: "1", weekday: "Di", start: "17:00", end: "18:30", hall: "Musterhalle 1" },
    { id: "2", weekday: "Fr", start: "16:30", end: "18:00", hall: "Musterhalle 2" },
  ];
}

export async function fetchSchedule(teamId: TeamId): Promise<Game[]> {
  // TODO: scrape/API→DB (du hast /api/next-game schon)
  return [
    { id: "g1", dateISO: "2025-10-03T19:30:00+02:00", home: "Stars U16", away: "Raptors U16", venue: "Sporthalle X", status: "scheduled" },
    { id: "g2", dateISO: "2025-10-10T18:00:00+02:00", home: "Stars U16", away: "Lions", venue: "Arena Y", status: "scheduled" },
  ];
}

export async function fetchResults(teamId: TeamId): Promise<Game[]> {
  // finished games nur
  return [
    { id: "r1", dateISO: "2025-09-12T14:00:00+02:00", home: "Stars U16", away: "Wolves U16", status: "finished", score: { home: 58, away: 44 } },
    { id: "r2", dateISO: "2025-09-05T18:00:00+02:00", home: "Falcons U16", away: "Stars U16", status: "finished", score: { home: 72, away: 69 } },
  ];
}

export async function fetchStandings(teamId: TeamId): Promise<StandingRow[]> {
  // TODO: scrape Tabelle → DB
  return [
    { position: 1, team: "Wolves U16", played: 6, wins: 5, losses: 1, pointsFor: 420, pointsAgainst: 370, diff: 50 },
    { position: 2, team: "Stars U16", played: 6, wins: 4, losses: 2, pointsFor: 408, pointsAgainst: 395, diff: 13 },
    { position: 3, team: "Lions U16", played: 6, wins: 3, losses: 3, pointsFor: 380, pointsAgainst: 390, diff: -10 },
  ];
}
