import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('Given a keeper result, when it is shared or copied, then only a short result URL is sent', async () => {
  const app = await readFile(new URL('../keeper/app.js', import.meta.url), 'utf8');

  assert.doesNotMatch(app, /searchParams\.set\('s'/);
  assert.match(app, /function getResultUrl/);
  assert.match(app, /navigator\.clipboard\.writeText\(getResultUrl\(\)\)/);
  assert.match(app, /const data = \{ title: [^}]+, url: getResultUrl\(\) \}/);
});
