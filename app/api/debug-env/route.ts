export async function GET() {
  return Response.json({
    NEXTAUTH_URL: !!process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: !!process.env.NEXTAUTH_SECRET,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL ?? null,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ? "***" : null,
  });
}
