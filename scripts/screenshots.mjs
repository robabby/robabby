// Verify the site against a running production build and capture review images.
// Usage: pnpm shots [base-url] — output is ignored under screenshots/.
import { chromium } from "playwright";
import assert from "node:assert/strict";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const out = fileURLToPath(new URL("../screenshots/", import.meta.url));
const canonicalOrigin = "https://www.robabby.com";
const routes = [
  { path: "/", name: "home" },
  { path: "/work-with-me", name: "services" },
  { path: "/work/wavepoint", name: "wavepoint" },
  { path: "/work/savo", name: "savo" },
  { path: "/privacy", name: "privacy" },
];
const variants = [
  {
    name: "desktop-light",
    viewport: { width: 1440, height: 1000 },
    colorScheme: "light",
  },
  {
    name: "desktop-dark",
    viewport: { width: 1440, height: 1000 },
    colorScheme: "dark",
  },
  {
    name: "mobile-light",
    viewport: { width: 390, height: 844 },
    colorScheme: "light",
    isMobile: true,
    hasTouch: true,
  },
  {
    name: "mobile-dark",
    viewport: { width: 390, height: 844 },
    colorScheme: "dark",
    isMobile: true,
    hasTouch: true,
  },
  {
    name: "narrow",
    viewport: { width: 320, height: 740 },
    colorScheme: "light",
  },
  {
    name: "tablet",
    viewport: { width: 820, height: 1000 },
    colorScheme: "light",
  },
  {
    name: "no-js-light",
    viewport: { width: 1440, height: 1000 },
    colorScheme: "light",
    javaScriptEnabled: false,
  },
  {
    name: "no-js-dark",
    viewport: { width: 390, height: 844 },
    colorScheme: "dark",
    javaScriptEnabled: false,
  },
  {
    name: "reduced-motion",
    viewport: { width: 1440, height: 1000 },
    colorScheme: "light",
    reducedMotion: "reduce",
  },
];
mkdirSync(out, { recursive: true });
const browser = await chromium
  .launch({ channel: "chrome" })
  .catch(() => chromium.launch());
const results = [];
try {
  for (const { name, ...options } of variants) {
    const context = await browser.newContext({
      deviceScaleFactor: 1,
      ...options,
    });
    // Local production builds do not serve Vercel's analytics endpoints.
    // Analytics transport is outside this UI/search verification.
    await context.route("**/_vercel/**", (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/javascript",
        body: "",
      }),
    );
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    for (const { path, name: routeName } of routes) {
      const response = await page.goto(`${base}${path}`, {
        waitUntil: "networkidle",
      });
      assert.equal(response.status(), 200);
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.locator("h1").count(), 1);
      assert.equal(await page.locator("main").count(), 1);
      assert.ok(await page.locator("h1").isVisible());
      assert.ok((await page.locator("main").innerText()).length > 300);
      assert.equal(
        new URL(
          await page.locator('link[rel="canonical"]').getAttribute("href"),
        ).href,
        `${canonicalOrigin}${path}`,
      );
      assert.equal(
        new URL(
          await page.locator('meta[property="og:url"]').getAttribute("content"),
        ).href,
        `${canonicalOrigin}${path}`,
      );
      assert.ok(
        await page.locator('meta[name="description"]').getAttribute("content"),
      );
      assert.equal(
        await page.locator('meta[property="og:title"]').getAttribute("content"),
        await page.title(),
      );
      assert.equal(
        await page
          .locator('meta[name="twitter:title"]')
          .getAttribute("content"),
        await page.title(),
      );
      assert.equal(
        await page.locator('meta[name="robots"][content*="noindex"]').count(),
        0,
      );
      for (const img of await page.locator("img").all()) {
        await img.scrollIntoViewIfNeeded();
        await img.evaluate((el) => el.decode());
        assert.ok(await img.getAttribute("alt"));
      }
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        true,
        `${path} overflows in ${name}`,
      );
      if (options.javaScriptEnabled === false) {
        assert.equal(await page.locator(".theme").isVisible(), false);
        const paper = await page.evaluate(() =>
          getComputedStyle(document.documentElement)
            .getPropertyValue("--paper")
            .trim(),
        );
        assert.equal(
          paper,
          options.colorScheme === "dark" ? "#111d17" : "#f5f3eb",
        );
      } else {
        assert.equal(
          await page.locator("html").getAttribute("data-theme"),
          options.colorScheme,
        );
      }
      await page.evaluate(() => scrollTo(0, 0));
      if (name.startsWith("desktop") || name.startsWith("mobile")) {
        await page.screenshot({
          path: `${out}${routeName}-${name}.png`,
          fullPage: true,
        });
        await page.screenshot({ path: `${out}${routeName}-${name}-fold.png` });
      }
      if (routeName !== "privacy") {
        assert.equal(
          await page.locator("#contact .button").getAttribute("href"),
          "mailto:robabby23@gmail.com",
        );
      }
      if (path === "/work-with-me") {
        await page.locator("summary").first().click();
        assert.equal(
          await page.locator("details").first().getAttribute("open"),
          "",
        );
      }
      if (name === "reduced-motion" && path === "/") {
        assert.equal(
          await page
            .locator(".arrow")
            .first()
            .evaluate((el) => getComputedStyle(el).transitionDuration),
          "0s",
        );
      }
      results.push({
        path,
        variant: name,
        rendering: "pass",
        metadata: "pass",
        overflow: "none",
      });
    }
    assert.deepEqual(errors, [], `${name}: browser errors`);
    await context.close();
    console.log(`✓ ${name}: ${routes.length} pages`);
  }

  const context = await browser.newContext({ colorScheme: "light" });
  await context.route("**/_vercel/**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/javascript",
      body: "",
    }),
  );
  const page = await context.newPage();
  await page.goto(base);
  await page.keyboard.press("Tab");
  assert.equal(
    await page.evaluate(() => document.activeElement.className),
    "skip",
  );
  await page.keyboard.press("Enter");
  assert.equal(
    await page.evaluate(() => document.activeElement.id),
    "hero-title",
  );
  await page.locator('.hero-actions a[href="#contact"]').click();
  assert.ok(await page.evaluate(() => scrollY > 0));
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Work with me" })
    .click();
  await page.waitForURL(`${base}/work-with-me`);
  assert.equal(await page.locator("html").getAttribute("data-theme"), "dark");
  await page.reload();
  assert.equal(await page.locator("html").getAttribute("data-theme"), "dark");
  await page.getByRole("link", { name: "See how I build with AI" }).click();
  await page.waitForURL(`${base}/work/wavepoint#process`);
  assert.ok(await page.locator("#process-title").isVisible());
  await page.getByRole("link", { name: "About", exact: true }).click();
  await page.waitForURL(`${base}/#about`);
  assert.ok(await page.locator("#about-title").isVisible());
  const schemas = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((items) => items.map((el) => JSON.parse(el.textContent)));
  const graph = schemas.find((value) => value["@graph"])["@graph"];
  const person = graph.find((value) => value["@type"] === "Person");
  const business = graph.find((value) => value["@type"] === "Organization");
  assert.equal(business.founder["@id"], person["@id"]);
  assert.equal(person.worksFor["@id"], business["@id"]);
  assert.ok(person.sameAs.every((url) => !url.includes("wavepoint.space")));
  assert.equal(
    schemas.find((value) => value["@type"] === "ProfilePage").mainEntity["@id"],
    person["@id"],
  );

  await page.getByRole("link", { name: "SAVO — read the case study", exact: true }).click();
  await page.waitForURL(`${base}/work/savo`);
  await page.getByRole("navigation", { name: "In this case study" })
    .getByRole("link", { name: "The shared UI system", exact: true }).click();
  await page.waitForURL(`${base}/work/savo#shared-ui`);
  assert.ok(await page.locator("#shared-ui-title").isVisible());
  assert.ok(await page.locator("#shared-ui-title").evaluate((el) => {
    const bounds = el.getBoundingClientRect();
    return bounds.top >= 0 && bounds.bottom <= innerHeight;
  }));
  const expectedProfiles = [
    "brittanymikottis", "johnnarofsky", "tom-green-b6198a4", "allisonpaul",
    "zachary-debelak-39b7541", "doug-marquis", "vbrianhauk",
  ].map((slug) => `https://www.linkedin.com/in/${slug}/`).sort();
  const profiles = await page.locator('article a[href^="https://www.linkedin.com/in/"]')
    .evaluateAll((links) => links.map((link) => link.href).sort());
  assert.deepEqual(profiles, expectedProfiles);
  const article = await page.locator("article").innerText();
  assert.ok(article.includes("The redesign shipped to customers and was well received."));
  assert.ok(article.includes("The team never delivered that work to customers; company priorities changed."));
  assert.doesNotMatch(article, /private review|draft 02|Downloads\/Portfolio|iHeartMEDIA/i);
  const caseSchema = await page.locator('script[type="application/ld+json"]')
    .evaluateAll((items) => items.map((el) => JSON.parse(el.textContent))
      .find((value) => value["@type"] === "WebPage"));
  assert.equal(caseSchema.url, `${canonicalOrigin}/work/savo`);
  assert.equal(caseSchema.mainEntity.author["@id"], person["@id"]);
  assert.equal(caseSchema.mainEntity.about.name, "SAVO");
  const figure = await context.request.get(`${base}/images/savo/styleguide-buttons.png`);
  assert.equal(figure.status(), 200);
  assert.match(figure.headers()["content-type"], /^image\/png/);
  await page.getByRole("navigation", { name: "Related work" })
    .getByRole("link", { name: "Explore WavePoint" }).click();
  await page.waitForURL(`${base}/work/wavepoint`);
  await page.getByRole("navigation", { name: "Related work" })
    .getByRole("link", { name: "Building a UI/UX practice at SAVO" }).click();
  await page.waitForURL(`${base}/work/savo`);

  const sitemap = await context.request.get(`${base}/sitemap.xml`);
  assert.equal(sitemap.status(), 200);
  const xml = await sitemap.text();
  for (const { path } of routes)
    assert.ok(xml.includes(`<loc>${canonicalOrigin}${path}</loc>`));
  assert.ok(!xml.includes("<lastmod>"));
  const robots = await context.request.get(`${base}/robots.txt`);
  assert.ok(
    (await robots.text()).includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`),
  );
  const redirect = await context.request.get(`${base}/wavepoint`, {
    maxRedirects: 0,
  });
  assert.equal(redirect.status(), 307);
  assert.equal(
    new URL(redirect.headers().location).href,
    "https://wavepoint.space/",
  );
  const resume = await context.request.get(`${base}/resume.pdf`);
  assert.equal(resume.status(), 200);
  assert.equal(resume.headers()["x-robots-tag"], "noindex");
  const missing = await context.request.get(`${base}/this-page-does-not-exist`);
  assert.equal(missing.status(), 404);
  assert.match(await missing.text(), /name="robots" content="noindex"/);
  for (const { path, name } of routes.filter(
    (route) => route.name !== "privacy",
  )) {
    await page.goto(`${base}${path}`);
    const og = new URL(
      await page.locator('meta[property="og:image"]').getAttribute("content"),
    );
    const image = await context.request.get(
      `${base}${og.pathname}${og.search}`,
    );
    assert.equal(image.status(), 200);
    const bytes = await image.body();
    assert.equal(bytes.readUInt32BE(16), 1200);
    assert.equal(bytes.readUInt32BE(20), 630);
    writeFileSync(`${out}${name}-share.png`, bytes);
  }
  await context.close();
  const report = {
    results,
    navigation: "pass",
    caseStudyLinksAndClaims: "pass",
    keyboard: "pass",
    themePersistence: "pass",
    schema: "pass",
    searchRoutes: "pass",
    legacyRoutes: "pass",
    shareImages: "pass",
    analyticsTransport: "not tested",
  };
  writeFileSync(`${out}verification.json`, JSON.stringify(report, null, 2));
  console.log(
    `✓ ${results.length} page renders; navigation, keyboard, persistence, schema, sitemap, redirects, and share images`,
  );
} finally {
  await browser.close();
}
