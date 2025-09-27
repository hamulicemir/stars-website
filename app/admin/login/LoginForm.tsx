"use client";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const sp = useSearchParams();
  const error = sp.get("error");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      email: String(fd.get("email") || ""),
      password: String(fd.get("password") || ""),
      callbackUrl: "/admin",
    });
    setLoading(false);
    if (res?.error) router.replace("/admin/login?error=CredentialsSignin");
    else router.replace(res?.url || "/admin");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <form onSubmit={onSubmit} className="w-full max-w-sm space-y-4 bg-white p-6 rounded-2xl shadow">
        <h1 className="text-xl font-semibold">Admin Login</h1>
        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded p-2">
            Login fehlgeschlagen. Bitte prüfe deine Daten.
          </p>
        )}
        <div className="space-y-1">
            <label className="text-sm font-medium">E-Mail</label>
            <input
            name="email"
            type="email"
            required
            autoComplete="username"
            className="w-full rounded-lg border px-3 py-2"
            />
        </div>
        <div className="space-y-1">
            <label className="text-sm font-medium">Passwort</label>
            <input
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="w-full rounded-lg border px-3 py-2"
            />
        </div>
        <button disabled={loading} className="w-full rounded-lg px-3 py-2 font-medium bg-slate-900 text-white">
          {loading ? "Anmelden..." : "Anmelden"}
        </button>
      </form>
    </div>
  );
}
