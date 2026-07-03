// Screenshot harness for visual review: light/dark × desktop/mobile, plus
// no-JS and reduced-motion renders. Output lands in ./screenshots/ (ignored).
// Usage: pnpm shots [base-url]   (defaults to http://localhost:3000)
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const base = process.argv[2] ?? "http://localhost:3000";
const out = fileURLToPath(new URL("../screenshots/", import.meta.url));
mkdirSync(out, { recursive: true });

const variants = [
  { name: "desktop-light", viewport: { width: 1440, height: 900 }, colorScheme: "light" },
  { name: "desktop-dark", viewport: { width: 1440, height: 900 }, colorScheme: "dark" },
  { name: "mobile-light", viewport: { width: 390, height: 844 }, colorScheme: "light", isMobile: true, hasTouch: true },
  { name: "mobile-dark", viewport: { width: 390, height: 844 }, colorScheme: "dark", isMobile: true, hasTouch: true },
  { name: "no-js", viewport: { width: 1440, height: 900 }, colorScheme: "light", javaScriptEnabled: false },
  { name: "reduced-motion", viewport: { width: 1440, height: 900 }, colorScheme: "light", reducedMotion: "reduce" },
];

const browser = await chromium
  .launch({ channel: "chrome" })
  .catch(() => chromium.launch());

for (const { name, ...context } of variants) {
  const ctx = await browser.newContext({ deviceScaleFactor: 2, ...context });
  const page = await ctx.newPage();
  await page.goto(base, {
    waitUntil: context.javaScriptEnabled === false ? "domcontentloaded" : "networkidle",
  });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${out}${name}.png`, fullPage: true });
  await ctx.close();
  console.log(`✓ ${name}`);
}

await browser.close();
