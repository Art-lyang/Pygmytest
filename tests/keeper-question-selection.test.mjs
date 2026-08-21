import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

import * as questionModule from '../keeper/questions.js';

test('Given the keeper question pool, when its mix is inspected, then it includes plenty of fun personality prompts', () => {
  const engagingQuestions = questionModule.QUESTIONS.filter(({ category }) =>
    category === 'fun' || category === 'personality'
  );

  assert.equal(questionModule.QUESTIONS.length, 52);
  assert.equal(engagingQuestions.length, 50);
});

test('Given a new play, when twelve questions are selected, then only one or two are carelog prompts', () => {
  assert.equal(typeof questionModule.selectQuestions, 'function');

  const selected = questionModule.selectQuestions(questionModule.QUESTIONS, 12, () => 0.42);
  const carelogCount = selected.filter(({ category }) => category === 'carelog').length;

  assert.equal(selected.length, 12);
  assert.equal(new Set(selected.map(({ id }) => id)).size, 12);
  assert.ok(carelogCount >= 1 && carelogCount <= 2);
});

test('Given different random values, when a new play starts, then the question combination changes', () => {
  assert.equal(typeof questionModule.selectQuestions, 'function');

  const firstPlay = questionModule.selectQuestions(questionModule.QUESTIONS, 12, () => 0.15);
  const secondPlay = questionModule.selectQuestions(questionModule.QUESTIONS, 12, () => 0.85);

  assert.notDeepEqual(firstPlay.map(({ id }) => id), secondPlay.map(({ id }) => id));
});

test('Given localized keeper pages, when question sources are collected, then the new question file is included', async () => {
  const generator = await readFile(new URL('../tools/generate-locales.mjs', import.meta.url), 'utf8');

  assert.match(generator, /questions-d\.js/);
  assert.match(generator, /questions-e\.js/);
  assert.match(generator, /questions-f\.js/);
});
