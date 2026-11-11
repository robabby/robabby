import { handleContact } from "@/app/lib/contact";
import { SITE_URL } from "@/app/lib/site";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const allowedOrigins = [SITE_URL, "https://robabby.com"];
  if (process.env.VERCEL_URL) allowedOrigins.push(`https://${process.env.VERCEL_URL}`);
  if (process.env.NODE_ENV === "development") {
    allowedOrigins.push("http://localhost:3098", "http://127.0.0.1:3098", "http://localhost:3000");
  }
  return handleContact(request, {
    apiKey: process.env.BREVO_API_KEY,
    sender: process.env.CONTACT_FROM_EMAIL,
    recipient: "robabby23@gmail.com",
    allowedOrigins,
  });
}
