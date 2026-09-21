import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '..');
const variants = [
  { folder: '.', lang: 'ko', canonical: 'https://pygmytest.com' },
  { folder: 'en', lang: 'en', canonical: 'https://pygmytest.com/en/' },
  { folder: 'ja', lang: 'ja', canonical: 'https://pygmytest.com/ja/' },
  { folder: 'zh-cn', lang: 'zh-CN', canonical: 'https://pygmytest.com/zh-cn/' },
  { folder: 'zh-tw', lang: 'zh-TW', canonical: 'https://pygmytest.com/zh-tw/' }
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
    assert.equal((html.match(/rel="alternate" hreflang=/g) || []).length, 6);
  });
}

test('pages declare an existing favicon instead of triggering a browser 404', async () => {
  const html = await readFile(path.join(root, 'index.html'), 'utf8');
  assert.match(html, /<link rel="icon" href="\/img\/icon-normal\.png">/);
});

test('sitemap lists every language URL and hreflang set', async () => {
  const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
  const urlCount = (sitemap.match(/<url>/g) || []).length;
  assert.ok(urlCount >= variants.length);
  for (const variant of variants) assert.ok(sitemap.includes(variant.canonical));
  assert.equal((sitemap.match(/hreflang="x-default"/g) || []).length, urlCount);
});

test('language packs cover quiz questions and result copy', async () => {
  for (const locale of ['en', 'ja', 'zh-cn', 'zh-tw']) {
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
    'zh-cn': /非洲侏儒睡鼠（<i>Graphiurus murinus<\/i>）只要<b>妥善控制温度并合理喂食/,
    'zh-tw': /非洲侏儒睡鼠（<i>Graphiurus murinus<\/i>）只要<b>妥善控制溫度並提供均衡飲食/
  };
  for (const [locale, expected] of Object.entries(expectations)) {
    const html = await readFile(path.join(root, locale, 'index.html'), 'utf8');
    assert.match(html, expected, `${locale} care guide must preserve sentence context around <b>/<i> tags`);
  }
});

test('Chinese packs keep critical UI and morph terminology intact', async () => {
  const simplified = await readFile(path.join(root, 'locales', 'zh-cn.js'), 'utf8');
  const traditional = await readFile(path.join(root, 'locales', 'zh-tw.js'), 'utf8');
  for (const broken of ['进步', '狗问题', '俾格米人', '白种人的', '斑点狗', '花哨的', '执事', '养鸟用品']) {
    assert.ok(!simplified.includes(broken), `zh-cn still contains broken translation: ${broken}`);
  }
  for (const broken of ['進步', '狗問題', '俾格米人', '白種人的', '斑點狗', '花哨的', '執事', '養鳥用品']) {
    assert.ok(!traditional.includes(broken), `zh-tw still contains broken translation: ${broken}`);
  }
  assert.ok(simplified.includes('"진행도": "进度"'));
  assert.ok(simplified.includes('"루시스틱": "淡色型"'));
  assert.ok(traditional.includes('"진행도": "進度"'));
  assert.ok(traditional.includes('"기록형 데이터 집사": "紀錄管理型"'));
});

test('localized home pages expose the translated Test Lab entry', async () => {
  const runtime = await readFile(path.join(root, 'i18n.js'), 'utf8');
  assert.match(runtime, /const localePrefix = pack\.locale === 'ko'/);
  assert.match(runtime, /link\.href = `\$\{localePrefix\}\/lab\/`/);
  for (const locale of ['en', 'ja', 'zh-cn', 'zh-tw']) {
    const pack = await readFile(path.join(root, 'locales', `${locale}.js`), 'utf8');
    assert.ok(pack.includes('다른 피그미 테스트도 해볼까요?'));
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
