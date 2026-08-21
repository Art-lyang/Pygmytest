import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '..');
const locales = [
  { folder: 'en', lang: 'en', recorder: 'Care Recorder' },
  { folder: 'ja', lang: 'ja', recorder: '記録管理タイプ' },
  { folder: 'zh-cn', lang: 'zh-CN', recorder: '记录管理型' }
];

for (const route of ['lab', 'keeper']) {
  test(`${route} has independent localized pages and hreflang`, async () => {
    for (const locale of locales) {
      const html = await readFile(path.join(root, locale.folder, route, 'index.html'), 'utf8');
      assert.match(html, new RegExp(`<html lang="${locale.lang}">`));
      assert.equal((html.match(/rel="alternate" hreflang=/g) || []).length, 5);
      assert.match(html, new RegExp(`<a href="/${locale.folder}/${route}/" lang="${locale.lang}"[^>]*aria-current="page"`));
      assert.match(html, new RegExp(`<a href="/${route}/" lang="ko"`));
      const auditable = html.replace(/<!--[^]*?-->/g, '').replace(/<nav class="locale-switcher"[^]*?<\/nav>/, '');
      assert.ok(!/[가-힣]/.test(auditable), `${locale.folder}/${route} still contains visible Korean copy`);
    }
  });
}

test('locale packs include dynamic keeper questions and result content', async () => {
  for (const locale of locales) {
    const pack = await readFile(path.join(root, 'locales', `${locale.folder}.js`), 'utf8');
    assert.ok(pack.includes('평소보다 오래 조용히 관찰하고 행동을 메모한다.'));
    assert.ok(pack.includes('관찰형 연구자 집사'));
    assert.ok(pack.includes('결과 링크가 복사됐어요.'));
    assert.ok(pack.includes(`"기록형 데이터 집사": "${locale.recorder}"`));
  }
});

test('keeper artwork provides DPR3-ready square sources', async () => {
  const names = ['keeper', 'behavior', 'readiness', 'compatibility', 'personality', 'morph'];
  for (const name of names) {
    const webp = await readFile(path.join(root, 'lab', 'img', `${name}-hd.webp`));
    assert.equal(webp.toString('ascii', 0, 4), 'RIFF');
    assert.equal(webp.toString('ascii', 12, 16), 'VP8 ');
    const width = webp.readUInt16LE(26) & 0x3fff;
    const height = webp.readUInt16LE(28) & 0x3fff;
    assert.ok(width >= 1092, `${name} artwork is too narrow for a 364px DPR3 viewport`);
    assert.ok(height >= 1092, `${name} artwork is too short for a 364px DPR3 viewport`);
  }
});
