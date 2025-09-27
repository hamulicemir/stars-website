import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <nav className="flex gap-4 text-sm">
            <Link href="/admin" className="font-semibold">Dashboard</Link>
            <Link href="/admin/news">News</Link>
            <Link href="/admin/events">Trainings & Spiele</Link>
            <Link href="/admin/media">Bilder & Videos</Link>
            <Link href="/admin/sponsors">Sponsoren</Link>
          </nav>
          <form action="/api/auth/signout" method="post">
            <button className="rounded-lg border px-3 py-1.5 text-sm">Abmelden</button>
          </form>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">{children}</main>
    </div>
  );
}
