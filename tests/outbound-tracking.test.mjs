import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const pagePaths = [
  'index.html', 'lab/index.html', 'keeper/index.html',
  'en/index.html', 'en/lab/index.html', 'en/keeper/index.html',
  'ja/index.html', 'ja/lab/index.html', 'ja/keeper/index.html',
  'zh-cn/index.html', 'zh-cn/lab/index.html', 'zh-cn/keeper/index.html'
];

test('Given links from Pygmy Test to RYANG STUDIO, when a visitor clicks one, then the source page and placement are trackable', async () => {
  const pages = await Promise.all(pagePaths.map(async pagePath => ({
    pagePath,
    html: await readFile(new URL(`../${pagePath}`, import.meta.url), 'utf8')
  })));

  for (const { pagePath, html } of pages) {
    const links = [...html.matchAll(/href="(https:\/\/ryangstudio\.com\/[^"?]*(?:\?[^"#]*)?)"/g)];
    assert.ok(links.length > 0, `${pagePath} should contain a RYANG STUDIO link`);

    for (const [, href] of links) {
      const url = new URL(href.replaceAll('&amp;', '&'));
      assert.equal(url.searchParams.get('utm_source'), 'pygmytest', `${pagePath}: ${href}`);
      assert.equal(url.searchParams.get('utm_medium'), 'referral', `${pagePath}: ${href}`);
      assert.ok(url.searchParams.get('utm_campaign'), `${pagePath}: ${href}`);
      assert.ok(url.searchParams.get('utm_content'), `${pagePath}: ${href}`);
    }
  }
});
