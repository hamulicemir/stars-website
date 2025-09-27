import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const s = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export const authOptions: NextAuthOptions = {
  debug: true,
  session: { strategy: "jwt" },
  pages: { signIn: "/admin/login" },
  providers: [
    Credentials({
      name: "Admin Login",
      credentials: {
        email: { label: "E-Mail", type: "email" },
        password: { label: "Passwort", type: "password" },
      },
      async authorize(credentials) {
        const email = s(credentials?.email);
        const password = s(credentials?.password);
        const ADMIN_EMAIL = s(process.env.ADMIN_EMAIL);
        const ADMIN_PASSWORD = s(process.env.ADMIN_PASSWORD);

        console.log("[AUTH] attempt", { email, hasPw: !!password });
        console.log("[AUTH] expect", { ADMIN_EMAIL, hasEnvPw: !!ADMIN_PASSWORD });

        if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
          throw new Error("Server ist nicht konfiguriert");
        }

        const ok = email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
        if (!ok) {
          console.warn("[AUTH] mismatch");
          return null; // -> 401
        }
        return { id: "admin-1", name: "Admin", email };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) { if (user) token.role = "admin"; return token; },
    session({ session, token }) { (session as any).role = token.role; return session; },
  },
};
