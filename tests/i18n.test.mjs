import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '..');
const variants = [
  { folder: '.', lang: 'ko', canonical: 'https://pygmytest.com' },
  { folder: 'en', lang: 'en', canonical: 'https://pygmytest.com/en/' },
  { folder: 'ja', lang: 'ja', canonical: 'https://pygmytest.com/ja/' },
  { folder: 'zh-cn', lang: 'zh-CN', canonical: 'https://pygmytest.com/zh-cn/' }
];

for (const variant of variants) {
  test(`${variant.lang} page has independent SEO metadata`, async () => {
    const html = await readFile(path.join(root, variant.folder, 'index.html'), 'utf8');
    assert.match(html, new RegExp(`<html lang="${variant.lang}">`));
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.match(html, /<meta name="description" content="[^"]+">/);
    assert.ok(html.includes(`<link rel="canonical" href="${variant.canonical}`));
    assert.equal((html.match(/rel="alternate" hreflang=/g) || []).length, 5);
  });
}

test('sitemap lists every language URL and hreflang set', async () => {
  const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
  assert.equal((sitemap.match(/<url>/g) || []).length, 4);
  for (const variant of variants) assert.ok(sitemap.includes(variant.canonical));
  assert.equal((sitemap.match(/hreflang="x-default"/g) || []).length, 4);
});

test('language packs cover quiz questions and result copy', async () => {
  for (const locale of ['en', 'ja', 'zh-cn']) {
    const pack = await readFile(path.join(root, 'locales', `${locale}.js`), 'utf8');
    assert.ok(pack.includes('나는 어떤 여행을 좋아하나요?'));
    assert.ok(pack.includes('자연 그대로의 따뜻함'));
    assert.ok(pack.includes('피그미 케어 및 관리 기능을 사용해 보세요'));
  }
});
