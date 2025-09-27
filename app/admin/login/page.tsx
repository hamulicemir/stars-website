import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

export const metadata = { title: "Admin Login" };

export default async function AdminLoginPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/admin"); // schon eingeloggt? -> Dashboard
  return <LoginForm />;
}
