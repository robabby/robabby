// Verify the site against a running production build and capture review images.
// Usage: pnpm shots [base-url] — output is ignored under screenshots/.
import { chromium } from "playwright";
import assert from "node:assert/strict";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const out = fileURLToPath(new URL("../screenshots/sg-1779-partyslate/", import.meta.url));
const canonicalOrigin = "https://www.robabby.com";
const routes = [
  { path: "/", name: "home" },
  { path: "/work-with-me", name: "services" },
  { path: "/work/savo", name: "savo" },
  { path: "/work/partyslate", name: "partyslate" },
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
        waitUntil: "domcontentloaded",
      });
      assert.equal(response.status(), 200);
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.locator("h1").count(), 1);
      assert.equal(await page.locator("main").count(), 1);
      assert.equal(await page.locator('a[href^="/work/wavepoint"]').count(), 0);
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
        if (!(await img.isVisible())) continue;
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
          options.colorScheme === "dark" ? "#191c20" : "#f9fafb",
        );
      } else {
        assert.equal(
          await page.locator("html").getAttribute("data-theme"),
          options.colorScheme,
        );
      }
      if (path === "/") {
        await page.locator(".gallery-viewport").evaluate((el) => el.scrollTo({ left: 0, behavior: "instant" }));
        if (options.javaScriptEnabled !== false) {
          await page.waitForFunction(() => document.querySelector('.gallery-choices button').getAttribute('aria-pressed') === 'true');
        }
      }
      await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
      if (name.startsWith("desktop") || name.startsWith("mobile")) {
        await page.screenshot({
          path: `${out}${routeName}-${name}.png`,
          fullPage: true,
        });
        await page.screenshot({ path: `${out}${routeName}-${name}-fold.png` });
        if (path === "/") {
          await page.locator("#about").screenshot({ path: `${out}about-${name}.png` });
        }
      }
      if (routeName !== "privacy") {
        assert.equal(
          await page.locator("#contact .email").getAttribute("href"),
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
    const missingPage = await page.goto(`${base}/this-page-does-not-exist`);
    assert.equal(missingPage.status(), 404);
    assert.ok(await page.getByRole('link', { name: 'Back to home', exact: true }).isVisible());
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    if (name.startsWith('desktop') || name.startsWith('mobile')) {
      await page.screenshot({ path: `${out}not-found-${name}.png`, fullPage: true });
    }
    // The intentional 404 emits a resource error, unlike the four content routes.
    assert.deepEqual(errors.filter(error => !error.includes('404')), [], `${name}: browser errors`);
    await context.close();
    console.log(`✓ ${name}: ${routes.length} pages`);
  }

  const galleryContext = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, colorScheme: "dark" });
  await galleryContext.route("**/_vercel/**", route => route.fulfill({ status: 200, body: "" }));
  const galleryPage = await galleryContext.newPage();
  await galleryPage.goto(base);
  const gallery = galleryPage.locator(".product-gallery");
  await gallery.scrollIntoViewIfNeeded();
  const website = gallery.getByRole("button", { name: "Website", exact: true });
  const app = gallery.getByRole("button", { name: "iPhone app", exact: true });
  await app.click();
  await galleryPage.waitForFunction(() => document.querySelectorAll('.gallery-choices button')[1].getAttribute('aria-pressed') === 'true');
  assert.match(await gallery.locator('.gallery-caption').innerText(), /Development preview/);
  await galleryPage.waitForFunction(() => {
    const el = document.querySelector('.gallery-viewport');
    return Math.abs(el.scrollLeft - el.clientWidth) < 1;
  });
  const height = (await gallery.boundingBox()).height;
  await gallery.screenshot({ path: `${out}gallery-mobile-dark-app.png` });
  const viewport = gallery.locator('.gallery-viewport');
  await viewport.focus();
  await galleryPage.keyboard.press('Home');
  await galleryPage.waitForFunction(() => document.querySelector('.gallery-choices button').getAttribute('aria-pressed') === 'true');
  assert.equal((await gallery.boundingBox()).height, height, 'Slides reserve the same layout height');
  await galleryPage.keyboard.press('End');
  await galleryPage.waitForFunction(() => document.querySelectorAll('.gallery-choices button')[1].getAttribute('aria-pressed') === 'true');
  await gallery.getByRole('button', { name: 'Next product image' }).click();
  await galleryPage.waitForFunction(() => document.querySelector('.gallery-choices button').getAttribute('aria-pressed') === 'true');
  const client = await galleryContext.newCDPSession(galleryPage);
  const bounds = await viewport.boundingBox();
  const y = bounds.y + bounds.height / 2;
  await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: bounds.x + bounds.width - 25, y }] });
  for (let step = 1; step <= 8; step++) {
    await client.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: bounds.x + bounds.width - 25 - step * (bounds.width - 50) / 8, y }] });
  }
  await client.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await galleryPage.waitForFunction(() => document.querySelectorAll('.gallery-choices button')[1].getAttribute('aria-pressed') === 'true');
  await galleryPage.waitForFunction(() => {
    const el = document.querySelector('.gallery-viewport');
    return Math.abs(el.scrollLeft - el.clientWidth) < 1;
  });
  await galleryPage.setViewportSize({ width: 1440, height: 1000 });
  await galleryPage.waitForFunction(() => {
    const el = document.querySelector('.gallery-viewport');
    return Math.abs(el.scrollLeft - el.clientWidth) < 2;
  });
  await gallery.screenshot({ path: `${out}gallery-desktop-dark-app.png` });
  for (const control of await gallery.getByRole('button').all()) {
    const box = await control.boundingBox();
    assert.ok(box.width >= 44 && box.height >= 44, 'Gallery touch targets are at least 44px');
  }
  await website.click();
  await galleryContext.close();

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
  assert.ok(await page.locator(".skip").evaluate((el) => {
    const bounds = el.getBoundingClientRect();
    return bounds.top >= 0 && bounds.bottom <= innerHeight;
  }), "Keyboard focus reveals the skip link");
  await page.keyboard.press("Enter");
  assert.equal(
    await page.evaluate(() => document.activeElement.id),
    "main-content",
  );
  await page.locator('.hero-actions a[href="#contact"]').click();
  assert.ok(await page.evaluate(() => scrollY > 0));
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await page
    .getByRole("navigation", { name: "Footer" })
    .getByRole("link", { name: "Work with me" })
    .click();
  await page.waitForURL(`${base}/work-with-me`);
  await page.waitForLoadState("load");
  assert.ok(await page.locator(".skip").evaluate((el) => el.getBoundingClientRect().bottom < 0),
    "Pointer navigation keeps the skip link offscreen");
  assert.equal(await page.locator("html").getAttribute("data-theme"), "dark");
  await page.reload();
  assert.equal(await page.locator("html").getAttribute("data-theme"), "dark");
  await page.getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Work", exact: true }).click();
  await page.waitForURL(`${base}/#work`);
  assert.ok(await page.locator("#wavepoint-title").isVisible());
  assert.equal(await page.getByRole("link", { name: "Visit WavePoint", exact: true }).getAttribute("href"),
    "https://wavepoint.space/");
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

  await page.getByRole("link", { name: "Read the SAVO story", exact: true }).last().click();
  await page.waitForURL(`${base}/work/savo`);
  await page.waitForLoadState("load");
  assert.ok(await page.locator(".skip").evaluate((el) => el.getBoundingClientRect().bottom < 0),
    "The work link navigates without revealing the skip link");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Shift+Tab");
  assert.equal(await page.evaluate(() => document.activeElement.className), "skip");
  assert.ok(await page.locator(".skip").evaluate((el) => el.getBoundingClientRect().top >= 0),
    "Keyboard navigation still reveals the skip link after a route change");
  await page.keyboard.press("Enter");
  assert.equal(await page.evaluate(() => document.activeElement.id), "main-content");
  await page.getByRole("link", { name: "Rob Abby", exact: true }).click();
  await page.waitForURL(`${base}/`);
  await page.getByRole("link", { name: "SAVO — read the case study", exact: true }).click();
  await page.waitForURL(`${base}/work/savo`);
  await page.getByRole("navigation", { name: "In this case study" })
    .getByRole("link", { name: "The shared UI system", exact: true }).click();
  await page.waitForURL(`${base}/work/savo#shared-ui`);
  assert.ok(await page.locator("#shared-ui-title").isVisible());
  await page.waitForFunction(() => {
    const bounds = document.querySelector("#shared-ui-title").getBoundingClientRect();
    return bounds.top >= 0 && bounds.bottom <= innerHeight;
  });
  const expectedProfiles = [
    "meggancarczyk", "gwgoodman", "brittanymikottis", "johnnarofsky", "tom-green-b6198a4", "allisonpaul", "esands", "caronp", "jeff-charbeneau-984b7a14", "braunreyes", "andrewikamas", "jason-liu-a4757812",
    "zachary-debelak-39b7541", "doug-marquis", "vbrianhauk",
  ].map((slug) => `https://www.linkedin.com/in/${slug}/`).sort();
  const profiles = await page.locator('article a[href^="https://www.linkedin.com/in/"]')
    .evaluateAll((links) => [...new Set(links.map((link) => link.href))].sort());
  assert.deepEqual(profiles, expectedProfiles);
  const article = await page.locator("article").innerText();
  assert.ok(article.includes("The redesign shipped to customers and was well received."));
  assert.ok(article.includes("The recommendation initiative ultimately didn’t reach customers; company priorities changed."));
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
  await page.waitForURL(`${base}/#wavepoint`);
  assert.ok(await page.locator("#wavepoint-title").isVisible());

  await page.goto(base);
  assert.deepEqual(await page.locator(".work-grid article h3").allTextContents(), ["WavePoint", "PartySlate", "SAVO"]);
  await page.getByRole("link", { name: "PartySlate — read the case study", exact: true }).click();
  await page.waitForURL(`${base}/work/partyslate`);
  await page.getByRole("navigation", { name: "In this case study" }).getByRole("link", { name: "The Soirée design system", exact: true }).click();
  await page.waitForURL(`${base}/work/partyslate#design-system`);
  const partyText = await page.locator("article").innerText();
  assert.ok(partyText.includes("and to PartySlate's detriment"));
  assert.ok(partyText.includes("Rollup"));
  assert.doesNotMatch(partyText, /150%|private review|page-drafts|\/Users\//i);
  const partyProfiles = await page.locator('article a[href^="https://www.linkedin.com/in/"]').evaluateAll(links => [...new Set(links.map(link => link.href))].sort());
  assert.deepEqual(partyProfiles, ["ben-kimpel", "mark-semon-84ab913", "lucasbrandt", "katharine-cooney", "tylertravitz"].map(slug => `https://www.linkedin.com/in/${slug}/`).sort());
  assert.equal(await page.locator("article figure").count(), 7);
  const people = page.locator("#people");
  await people.locator("summary").click();
  assert.equal(await people.getAttribute("open"), "");
  assert.equal(await people.locator("a").count(), 5);
  await people.locator("summary").click();
  assert.equal(await people.getAttribute("open"), null);
  for (const link of await page.locator('article figcaption a[href^="/images/"]').all()) {
    assert.equal((await context.request.get(new URL(await link.getAttribute("href"), base).href)).status(), 200);
  }
  await page.getByRole("navigation", { name: "Related work" }).getByRole("link", { name: "Read the SAVO story" }).click();
  await page.waitForURL(`${base}/work/savo`);
  await page.getByRole("navigation", { name: "Related work" }).getByRole("link", { name: "Read the PartySlate story" }).click();
  await page.waitForURL(`${base}/work/partyslate`);

  const sitemap = await context.request.get(`${base}/sitemap.xml`);
  assert.equal(sitemap.status(), 200);
  const xml = await sitemap.text();
  assert.ok(!xml.includes("/work/wavepoint"));
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
  const retiredCaseStudy = await context.request.get(`${base}/work/wavepoint`, {
    maxRedirects: 0,
  });
  assert.equal(retiredCaseStudy.status(), 308);
  assert.equal(new URL(retiredCaseStudy.headers().location, base).href, `${base}/#wavepoint`);
  const retiredShareCard = await context.request.get(`${base}/work/wavepoint/opengraph-image`);
  assert.equal(retiredShareCard.status(), 404);
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
    selectedWorkLinks: "pass",
    skipLinkPointerAndKeyboard: "pass",
    keyboard: "pass",
    themePersistence: "pass",
    schema: "pass",
    searchRoutes: "pass",
    legacyRoutes: "pass",
    shareImages: "pass",
    galleryControlsKeyboardSwipeResize: "pass",
    analyticsTransport: "not tested",
  };
  writeFileSync(`${out}verification.json`, JSON.stringify(report, null, 2));
  console.log(
    `✓ ${results.length} page renders; navigation, keyboard, persistence, schema, sitemap, redirects, and share images`,
  );
} finally {
  await browser.close();
}
