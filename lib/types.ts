export type NewsItem = {
  id: string;
  title: string;
  body: string;
  imageUrl?: string;
  createdAt: string; // ISO
};

export type Training = {
  id: string;
  team: string;
  weekday: "Mo" | "Di" | "Mi" | "Do" | "Fr" | "Sa" | "So";
  time: string; // "18:30"
  location: string;
};

export type Game = {
  id: string;
  opponent: string;
  date: string; // ISO date
  time: string; // "19:00"
  location: string;
};

export type GalleryImage = {
  id: string;
  url: string;     // /uploads/...
  title?: string;
  createdAt: string;
};

export type Video = {
  id: string;
  youtubeId: string;
  title?: string;
  createdAt: string;
};

export type Sponsor = {
  id: string;
  name: string;
  website?: string;
  logoUrl: string; // /uploads/...
  createdAt: string;
};
