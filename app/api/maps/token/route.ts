import { createPrivateKey, sign } from "node:crypto";
import { SITE_URL } from "@/app/lib/site";

export const runtime = "nodejs";

export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const allowed = [SITE_URL, "https://robabby.com"];
  if (process.env.VERCEL_URL) allowed.push(`https://${process.env.VERCEL_URL}`);
  if (process.env.NODE_ENV === "development") allowed.push("http://localhost:3098", "http://127.0.0.1:3098", "http://localhost:3000");
  const { MAPKIT_TEAM_ID: team, MAPKIT_KEY_ID: keyId, MAPKIT_PRIVATE_KEY: privateKey } = process.env;
  if (!allowed.includes(origin)) return new Response(null, { status: 403 });
  if (!team || !keyId || !privateKey) return new Response(null, { status: 503 });
  try {
    const key = createPrivateKey(Buffer.from(privateKey, "base64").toString("utf8"));
    const now = Math.floor(Date.now() / 1000);
    const encode = (value: object) => Buffer.from(JSON.stringify(value)).toString("base64url");
    const payload = `${encode({ alg: "ES256", kid: keyId, typ: "JWT" })}.${encode({ iss: team, iat: now, exp: now + 1800, origin, scope: "mapkit_js" })}`;
    const signature = sign("sha256", Buffer.from(payload), { key, dsaEncoding: "ieee-p1363" }).toString("base64url");
    return new Response(`${payload}.${signature}`, { headers: { "Content-Type": "text/plain", "Cache-Control": "private, no-store" } });
  } catch { return new Response(null, { status: 503 }); }
}
