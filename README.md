# Stars Basketball – Starter (Next.js + Tailwind, App Router)

**Ready to `npm run dev`**: moderne Struktur, Light-Mode, Beispielseiten & Mock-Daten.
Du kannst später Postgres/Storage/Auth integrieren, ohne die UI zu brechen.

## Los geht's
1. `npm install`
2. `npm run dev`
3. Öffne http://localhost:3000

## Struktur
- `app/` – Next.js App Router (Home, /news, /teams, /media, /sponsors, /verein, /mitglied)
- `components/` – UI-Bausteine (Button, Card, Container, Pill) & Layout (Header, Footer)
- `data/` – **Mock-Daten** für News, Teams, Media (ersetzt später DB)
- `app/api/news` – Beispiel-API, liefert Mock-News

## Nächste Schritte (Tech-Stack-fit)
- **DB (Postgres/Drizzle/Prisma)**: Ersetze `data/*` durch DB-Queries (Server Components).
- **Storage (Supabase/R2)**: Ersetze Platzhalter-Bilder durch Uploads + `next/image`.
- **Auth/Rollen (NextAuth)**: Gate für Admin-/Redakteur-Routen.
- **SEO**: OG-Images, Sitemap, robots.

Viel Spaß beim Weiterbauen! ✨
