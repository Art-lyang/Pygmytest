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
    if (variant.lang !== 'ko') {
      assert.match(html, /<meta name="keywords" content="[^"]*Graphiurus murinus[^"]*">/);
    }
    assert.ok(html.includes(`<link rel="canonical" href="${variant.canonical}`));
    assert.equal((html.match(/rel="alternate" hreflang=/g) || []).length, 5);
  });
}

test('pages declare an existing favicon instead of triggering a browser 404', async () => {
  const html = await readFile(path.join(root, 'index.html'), 'utf8');
  assert.match(html, /<link rel="icon" href="\/img\/icon-normal\.png">/);
});

test('sitemap lists every language URL and hreflang set', async () => {
  const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
  assert.ok((sitemap.match(/<url>/g) || []).length >= variants.length);
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

test('care-guide sentences are translated as complete sentences across inline markup', async () => {
  const expectations = {
    en: /The African pygmy dormouse \(<i>Graphiurus murinus<\/i>\) is manageable even for first-time keepers/,
    ja: /アフリカヤマネ（<i>Graphiurus murinus<\/i>）は、<b>温度と食事を適切に管理すれば/,
    'zh-cn': /非洲侏儒睡鼠（<i>Graphiurus murinus<\/i>）只要<b>妥善控制温度并合理喂食/
  };
  for (const [locale, expected] of Object.entries(expectations)) {
    const html = await readFile(path.join(root, locale, 'index.html'), 'utf8');
    assert.match(html, expected, `${locale} care guide must preserve sentence context around <b>/<i> tags`);
  }
});

function jpegDimensions(buffer) {
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) { offset += 1; continue; }
    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);
    if (marker >= 0xc0 && marker <= 0xc3) {
      return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
    }
    offset += 2 + length;
  }
  throw new Error('JPEG dimensions not found');
}

test('result photos exclude the baked-in Korean label strip while staying high resolution', async () => {
  const names = ['normal', 'ringtail', 'pied', 'oreo', 'dalmatian', 'mask', 'high-white', 'lucistic', 'dust', 'black'];
  for (const name of names) {
    const dimensions = jpegDimensions(await readFile(path.join(root, 'img', `img-${name}.jpg`)));
    assert.ok(dimensions.width >= 1600, `${name} photo is too narrow: ${dimensions.width}px`);
    assert.ok(dimensions.width / dimensions.height >= 1.75, `${name} photo still includes its top label strip`);
  }
});
