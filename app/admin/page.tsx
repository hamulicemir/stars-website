import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

export const metadata = { title: "Admin Dashboard" };

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  // <<< Guard: nur eingeloggte dürfen weiter
  if (!session) redirect("/admin/login");

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <form action="/api/auth/signout" method="post">
          <button className="rounded-lg border px-3 py-2">Abmelden</button>
        </form>
      </div>
      <p className="mt-6">Willkommen, {session.user?.email}</p>
      {/* deine Kacheln … */}
    </div>
  );
}
