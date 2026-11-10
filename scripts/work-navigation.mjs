import { chromium } from "playwright";
import assert from "node:assert/strict";
import { mkdirSync } from "node:fs";

const base = process.argv[2] ?? "http://localhost:3090";
const out = new URL("../screenshots/sg-1790/", import.meta.url).pathname;
mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ channel: "chrome" });
try {
  for (const width of [1440, 390, 320]) {
    for (const colorScheme of ["light", "dark"]) {
      const page = await browser.newPage({ viewport: { width, height: 900 }, colorScheme });
      page.setDefaultTimeout(10000);
      await page.goto(base);
      await page.evaluate(() => document.fonts.ready);
      const summary = page.locator(".work-nav summary");
      const details = page.locator(".work-nav");
      await summary.focus();
      await page.keyboard.press("Enter");
      assert.equal(await details.getAttribute("open"), "");
      await page.keyboard.press("Tab");
      assert.equal(await page.locator(":focus").getAttribute("href"), "https://wavepoint.space/");
      await page.keyboard.press("Escape");
      assert.equal(await details.getAttribute("open"), null);
      assert.ok(await summary.evaluate(el => el === document.activeElement));
      await summary.click();
      await page.screenshot({ path: `${out}${width}-${colorScheme}.png` });
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      const bounds = await page.locator(".work-nav-links").boundingBox();
      assert.ok(bounds.x >= 0 && bounds.x + bounds.width <= width);
      for (const link of await details.getByRole("link").all()) {
        assert.ok((await link.boundingBox()).height >= 44);
      }
      await page.locator(".site-description").click();
      assert.equal(await details.getAttribute("open"), null);
      await summary.click();
      await details.getByRole("link", { name: "PartySlate", exact: true }).click();
      await page.waitForURL(`${base}/work/partyslate`);
      await summary.click();
      await details.getByRole("link", { name: "SAVO", exact: true }).click();
      await page.waitForURL(`${base}/work/savo`);
      await summary.click();
      await summary.focus();
      for (let i = 0; i < 4; i++) await page.keyboard.press("Tab");
      assert.equal(await details.getAttribute("open"), null);
      await page.close();
      console.log(`PASS ${width}px ${colorScheme}: keyboard, dismissal, destinations, sizing`);
    }
  }
  const page = await browser.newPage({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  await page.goto(base);
  await page.locator(".work-nav summary").click();
  await page.locator(".work-nav").getByRole("link", { name: "SAVO", exact: true }).click();
  await page.waitForURL(`${base}/work/savo`);
  console.log("PASS no JavaScript: dropdown and case-study navigation");
} finally {
  await browser.close();
}
