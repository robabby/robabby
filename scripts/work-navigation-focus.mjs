import { chromium } from 'playwright';
import assert from 'node:assert/strict';

const base = process.argv[2] ?? 'http://localhost:3098';
const browser = await chromium.launch({ channel: 'chrome' });
try {
  for (const activation of ['click', 'tap']) {
    for (const name of ['PartySlate', 'SAVO', 'WavePoint']) {
      const page = await browser.newPage({ viewport: { width: 1024, height: 1366 }, hasTouch: true });
      await page.goto(base);
      await page.locator('html[data-js]').waitFor();
      const menu = page.locator('.work-nav');
      await menu.locator('summary').click();
      await menu.locator('summary').focus();
      // Reproduce a browser that blurs the summary without focusing the pressed link.
      await menu.evaluate(details => details.addEventListener('mousedown', event => {
        if (event.target.closest('a')) {
          event.preventDefault();
          document.activeElement.blur();
        }
      }, true));
      const link = menu.getByRole('link', { name, exact: name !== 'WavePoint' });
      if (name === 'WavePoint') {
        await page.context().route('https://wavepoint.space/**', route => route.fulfill({ body: 'Destination reached' }));
        const popupPromise = page.waitForEvent('popup');
        await link[activation]();
        const popup = await popupPromise;
        await popup.waitForURL('https://wavepoint.space/');
        await popup.close();
      } else {
        await link[activation]();
        await page.waitForURL(`${base}/work/${name.toLowerCase()}`);
      }
      console.log(`PASS null-focus ${activation}: ${name}`);
      await page.close();
    }
  }
  const page = await browser.newPage({ viewport: { width: 1024, height: 1366 } });
  await page.goto(base);
  await page.locator('html[data-js]').waitFor();
  const menu = page.locator('.work-nav');
  const summary = menu.locator('summary');
  await summary.focus();
  await page.keyboard.press('Enter');
  await page.keyboard.press('Tab');
  assert.equal(await page.locator(':focus').getAttribute('href'), 'https://wavepoint.space/');
  await page.keyboard.press('Escape');
  assert.equal(await menu.getAttribute('open'), null);
  assert.ok(await summary.evaluate(el => el === document.activeElement));
  await summary.click();
  await summary.focus();
  for (let i = 0; i < 4; i++) await page.keyboard.press('Tab');
  assert.equal(await menu.getAttribute('open'), null);
  await summary.click();
  await page.locator('.site-description').click();
  assert.equal(await menu.getAttribute('open'), null);
  await summary.click();
  await menu.getByRole('link', { name: 'PartySlate', exact: true }).click();
  await page.waitForURL(`${base}/work/partyslate`);
  console.log('PASS normal click, keyboard traversal, Escape, outside click');
  await page.close();
  for (const javaScriptEnabled of [true, false]) {
    const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, javaScriptEnabled });
    await mobile.goto(base);
    if (javaScriptEnabled) {
      await mobile.locator('html[data-js]').waitFor();
      await mobile.getByRole('button', { name: 'Open menu', exact: true }).tap();
      await mobile.locator('.mobile-work-links').getByRole('link', { name: 'SAVO', exact: true }).tap();
    } else {
      await mobile.locator('.work-nav summary').tap();
      await mobile.locator('.work-nav').getByRole('link', { name: 'SAVO', exact: true }).tap();
    }
    await mobile.waitForURL(`${base}/work/savo`);
    console.log(`PASS phone navigation, JavaScript=${javaScriptEnabled}`);
    await mobile.close();
  }
} finally {
  await browser.close();
}
