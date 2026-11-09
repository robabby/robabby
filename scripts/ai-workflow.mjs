import { chromium } from "playwright";
import fs from "node:fs";
import assert from "node:assert/strict";
const base = process.argv[2] || 'http://localhost:3000';
const out = 'screenshots/ai-workflow';
fs.mkdirSync(out, { recursive: true });
(async () => {
    const browser = await chromium.launch({ channel: 'chrome' });
    const errors = [];
    const results = [];
    try {
        for (const [name, width, height, theme, js] of [['desktop', 1440, 1000, 'light', true], ['desktop-dark', 1440, 1000, 'dark', true], ['phone', 390, 844, 'light', true], ['phone-dark', 390, 844, 'dark', true], ['narrow', 320, 800, 'light', true], ['tablet', 768, 1024, 'light', true], ['nojs', 390, 844, 'dark', false]]) {
            const context = await browser.newContext({ viewport: { width, height }, colorScheme: theme, javaScriptEnabled: js, reducedMotion: 'reduce' });
            const page = await context.newPage();
            page.on('pageerror', e => errors.push(name + ': ' + e.message));
            for (const route of ['/', '/how-i-work-with-ai']) {
                await page.goto(base + route);
                await page.evaluate(() => document.fonts.ready);
                assert.equal(await page.locator('h1').count(), 1);
                const layout = await page.evaluate(() => ({ width: innerWidth, doc: document.documentElement.scrollWidth, bad: [...document.querySelectorAll('nav a')].filter(e => { const r = e.getBoundingClientRect(); return r.right > innerWidth + 1 || r.left < 0; }).map(e => e.textContent) }));
                assert(layout.doc <= width + 1, `${name} ${route} overflow ${JSON.stringify(layout)}`);
                assert.deepEqual(layout.bad, []);
                if (route === '/') {
                    assert(await page.locator('.experience + section:has(#ai-invitation-title) + #work').count());
                    if (width === 1440)
                        await page.evaluate(() => scrollTo(0, 430));
                    else
                        await page.locator('section:has(> div > #ai-invitation-title)').evaluate(e => e.scrollIntoView());
                    if (name !== 'tablet' && name !== 'narrow')
                        await page.screenshot({ path: `${out}/home-${name}.png` });
                }
                else {
                    assert.equal(await page.locator('.nav [aria-current="page"]').textContent(), 'AI workflow');
                    assert.equal(await page.locator('.skill-row').count(), 4);
                    assert.equal(await page.locator('.plan-ticket').count(), 3);
                    assert.equal(await page.locator('.parallel-sessions li').count(), 4);
                    assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), 'https://www.robabby.com/how-i-work-with-ai');
                    assert.equal(await page.locator('.skill-row a').count(), 5);
                    if (js)
                        assert.equal(await page.locator('.caption button').textContent(), 'Play');
                    else
                        assert.equal(await page.locator('.caption button').isVisible(), false);
                    if (!['tablet', 'narrow'].includes(name))
                        await page.screenshot({ path: `${out}/page-${name}.png`, fullPage: true });
                    await page.locator('.plan-ticket summary').first().focus();
                    await page.keyboard.press('Enter');
                    assert.equal(await page.locator('.plan-ticket[open]').count(), 1);
                    assert(await page.locator('.plan-ticket[open] dd').first().isVisible());
                    if (name === 'desktop-dark')
                        await page.locator('#plans').screenshot({ path: `${out}/plan-open-dark.png` });
                    const broken = await page.locator('img').evaluateAll(imgs => imgs.filter(i => i.complete && !i.naturalWidth).map(i => i.src));
                    assert.deepEqual(broken, []);
                }
            }
            results.push(`${name}: home placement, navigation, layout, route content, ticket disclosure passed`);
            await context.close();
        }
        const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
        const p = await ctx.newPage();
        p.on('pageerror', e => errors.push(e.message));
        await p.clock.install();
        await p.goto(base + '/how-i-work-with-ai');
        await p.locator('.caption button:not([hidden])').waitFor();
        await p.clock.runFor(1400);
        let draft = await p.locator('[data-draft]').textContent();
        assert(draft.length > 0 && draft.length < 76, 'message types into composer');
        await p.getByRole('button', { name: 'Pause simulated activity' }).click();
        const paused = await p.locator('[data-draft]').textContent();
        await p.clock.runFor(2000);
        assert.equal(await p.locator('[data-draft]').textContent(), paused);
        await p.getByRole('button', { name: 'Play simulated activity' }).click();
        await p.clock.runFor(61000);
        assert.match(await p.locator('.conversation').textContent(), /Simulation repeats/);
        assert.match(await p.locator('.conversation').textContent(), /Production deployment: READY/);
        await p.clock.runFor(120000);
        assert((await p.locator('.conversation > *').count()) <= 42);
        await p.locator('.conversation').focus();
        assert.equal(await p.locator('.caption button').textContent(), 'Play');
        await p.getByRole('button', { name: 'Play simulated activity' }).click();
        await p.locator('#parallel').scrollIntoViewIfNeeded();
        await p.clock.runFor(80);
        const offscreen = await p.locator('[data-draft]').textContent();
        await p.clock.runFor(5000);
        assert.equal(await p.locator('[data-draft]').textContent(), offscreen);
        await p.locator('.home-link').click();
        await p.waitForURL(base + '/');
        await p.getByRole('link', { name: 'See how I work with AI' }).click();
        await p.waitForURL('**/how-i-work-with-ai');
        await p.locator('.terminal:not(.paused)').waitFor();
        await p.clock.runFor(1200);
        assert.equal(await p.locator('.terminal').count(), 1);
        assert(await p.locator('[data-draft]').textContent());
        results.push('Playback: typed prompts, pause/resume, repeated cycles, bounded feed, focus/offscreen pause, route return passed');
        await ctx.close();
        assert.deepEqual(errors, []);
        fs.writeFileSync(out + '/results.json', JSON.stringify({ results, errors }, null, 2));
        console.log(results.join('\n'));
    }
    finally {
        await browser.close();
    }
})().catch(e => { console.error(e); process.exit(1); });
