import { QUESTIONS_A } from './questions-a.js';
import { QUESTIONS_B } from './questions-b.js';
import { QUESTIONS_C } from './questions-c.js';
import { QUESTIONS_D } from './questions-d.js';
import { QUESTIONS_E } from './questions-e.js';
import { QUESTIONS_F } from './questions-f.js';

const LEGACY_QUESTIONS = [...QUESTIONS_A, ...QUESTIONS_B, ...QUESTIONS_C];
const CARELOG_INDEXES = new Set([16, 21]);
const FUN_INDEXES = new Set([7, 9, 12, 14, 19, 20]);

export const QUESTIONS = [
  ...LEGACY_QUESTIONS.map((question, index) => ({
    ...question,
    id: `classic-${index + 1}`,
    category: CARELOG_INDEXES.has(index)
      ? 'carelog'
      : FUN_INDEXES.has(index) ? 'fun' : 'personality'
  })),
  ...QUESTIONS_D,
  ...QUESTIONS_E,
  ...QUESTIONS_F
];

function shuffle(items, random) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
  }
  return shuffled;
}

export function selectQuestions(questionPool, count = 12, random = Math.random) {
  const carelog = questionPool.filter(({ category }) => category === 'carelog');
  const personality = questionPool.filter(({ category }) => category !== 'carelog');
  const carelogCount = Math.min(carelog.length, random() < 0.5 ? 1 : 2, count);
  const selected = [
    ...shuffle(carelog, random).slice(0, carelogCount),
    ...shuffle(personality, random).slice(0, count - carelogCount)
  ];
  return shuffle(selected, random);
}
