import { TYPE_ORDER, ICONS, TYPES } from './types.js';
import { QUESTIONS } from './questions.js';

let activeQuestions = [];
let currentIndex = 0;
let scores = createEmptyScores();
let currentResultId = null;
let toastTimer = null;
const t = value => window.PygmyI18n?.translate(value) || value;

const els = {
  start: document.getElementById('start-screen'), quiz: document.getElementById('quiz-screen'), loading: document.getElementById('loading-screen'), result: document.getElementById('result-screen'),
  startButton: document.getElementById('start-button'), preview: document.getElementById('type-preview'), step: document.getElementById('quiz-step'), progress: document.getElementById('progress-fill'),
  kicker: document.getElementById('question-kicker'), question: document.getElementById('question-text'), hint: document.getElementById('question-hint'), options: document.getElementById('option-list'), card: document.getElementById('question-card'),
  resultScreen: document.getElementById('result-screen'), resultHero: document.getElementById('result-hero'), resultImage: document.getElementById('result-image'), resultIndex: document.getElementById('result-index'), resultIcon: document.getElementById('result-icon'),
  resultName: document.getElementById('result-name'), resultTagline: document.getElementById('result-tagline'), resultSummaryTitle: document.getElementById('result-summary-title'), resultDescription: document.getElementById('result-description'),
  resultTraits: document.getElementById('result-traits'), resultStrengths: document.getElementById('result-strengths'), resultWatchouts: document.getElementById('result-watchouts'), routineIcon: document.getElementById('routine-icon'), resultRoutine: document.getElementById('result-routine'),
  scoreBars: document.getElementById('score-bars'), secondaryIcon: document.getElementById('secondary-icon'), secondaryName: document.getElementById('secondary-name'), secondaryCopy: document.getElementById('secondary-copy'), resultFit: document.getElementById('result-fit'),
  share: document.getElementById('share-button'), copy: document.getElementById('copy-button'), retry: document.getElementById('retry-button'), toast: document.getElementById('toast')
};

function createEmptyScores() { return Object.fromEntries(TYPE_ORDER.map(id => [id, 0])); }
function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function track(name, params = {}) {
  if (typeof window.gtag === 'function') window.gtag('event', name, params);
}
function setScreen(screen) {
  [els.start, els.quiz, els.loading, els.result].forEach(el => el.classList.remove('is-active'));
  screen.classList.add('is-active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function renderPreview() {
  els.preview.innerHTML = TYPE_ORDER.map(id => {
    const type = TYPES[id];
    return `<div class="type-chip" style="--chip-bg:${type.soft};--chip-border:${type.accent}33"><strong>${t(type.short)}</strong><small>${type.en.replace('THE ', '')}</small></div>`;
  }).join('');
}
function startQuiz() {
  activeQuestions = shuffle(QUESTIONS).slice(0, 12);
  currentIndex = 0;
  scores = createEmptyScores();
  currentResultId = null;
  history.replaceState({}, '', window.location.pathname);
  track('keeper_quiz_start', { question_count: 12 });
  setScreen(els.quiz);
  renderQuestion();
}
function renderQuestion() {
  const item = activeQuestions[currentIndex];
  const step = currentIndex + 1;
  els.step.textContent = `${String(step).padStart(2, '0')} / 12`;
  els.progress.style.width = `${step / 12 * 100}%`;
  els.kicker.textContent = `${t(item.kicker).toUpperCase()} · SCENARIO ${String(step).padStart(2, '0')}`;
  els.question.textContent = t(item.text);
  els.hint.textContent = t(item.hint);
  els.options.innerHTML = '';
  shuffle(item.options).forEach(option => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-button';
    button.textContent = t(option.text);
    button.addEventListener('click', () => selectOption(button, option));
    els.options.appendChild(button);
  });
  els.card.animate([
    { opacity: .1, transform: 'translateY(10px)' },
    { opacity: 1, transform: 'translateY(0)' }
  ], { duration: 330, easing: 'cubic-bezier(.2,.75,.2,1)' });
}
function selectOption(button, option) {
  const buttons = [...els.options.querySelectorAll('button')];
  buttons.forEach(item => { item.disabled = true; item.classList.remove('is-selected'); });
  button.classList.add('is-selected');
  Object.entries(option.scores).forEach(([id, value]) => { scores[id] += value; });
  track('keeper_answer', { question_index: currentIndex + 1 });
  window.setTimeout(() => {
    currentIndex += 1;
    if (currentIndex < activeQuestions.length) renderQuestion();
    else finishQuiz();
  }, 360);
}
function finishQuiz() {
  track('keeper_quiz_complete');
  setScreen(els.loading);
  window.setTimeout(() => {
    const sorted = getSortedScores(scores);
    showResult(sorted[0][0], scores, true);
  }, 1750);
}
function getSortedScores(value) {
  return Object.entries(value).sort((a, b) => b[1] - a[1] || TYPE_ORDER.indexOf(a[0]) - TYPE_ORDER.indexOf(b[0]));
}
function showResult(resultId, scoreSet, updateUrl) {
  if (!TYPES[resultId]) return;
  currentResultId = resultId;
  scores = { ...createEmptyScores(), ...scoreSet };
  const type = TYPES[resultId];
  const sorted = getSortedScores(scores);
  const secondaryId = sorted.find(([id]) => id !== resultId)?.[0] || TYPE_ORDER.find(id => id !== resultId);
  const secondary = TYPES[secondaryId];

  els.resultScreen.style.setProperty('--result-accent', type.accent);
  els.resultScreen.style.setProperty('--result-soft', type.soft);
  els.resultHero.style.setProperty('--result-accent', type.accent);
  els.resultHero.style.setProperty('--result-soft', type.soft);
  els.resultImage.src = type.image;
  els.resultImage.alt = `${t(type.name)} ${t('결과 일러스트')}`;
  els.resultIndex.textContent = type.index;
  els.resultIcon.innerHTML = ICONS[resultId];
  els.resultName.textContent = t(type.name);
  els.resultTagline.textContent = t(type.tagline);
  els.resultSummaryTitle.textContent = t(type.summary);
  els.resultDescription.textContent = t(type.description);
  els.resultTraits.innerHTML = type.traits.map(trait => `<span>${t(trait)}</span>`).join('');
  els.resultStrengths.innerHTML = type.strengths.map(item => `<li>${t(item)}</li>`).join('');
  els.resultWatchouts.innerHTML = type.watchouts.map(item => `<li>${t(item)}</li>`).join('');
  els.routineIcon.innerHTML = ICONS[resultId];
  els.resultRoutine.textContent = t(type.routine);
  els.secondaryIcon.innerHTML = ICONS[secondaryId];
  els.secondaryName.textContent = t(secondary.name);
  els.secondaryCopy.textContent = t(type.secondaryCopy);
  els.resultFit.textContent = t(type.fit);
  renderScoreBars(scores);

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set('result', resultId);
    url.searchParams.set('s', encodeScores(scores));
    history.replaceState({}, '', `${url.pathname}${url.search}`);
  }
  document.title = `${t(type.name)} | ${t('나는 어떤 피그미 집사일까?')}`;
  track('keeper_result_view', { keeper_type: resultId, secondary_type: secondaryId });
  setScreen(els.result);
}
function renderScoreBars(value) {
  const max = Math.max(...Object.values(value), 1);
  els.scoreBars.innerHTML = TYPE_ORDER.map(id => {
    const type = TYPES[id];
    const percent = Math.round(value[id] / max * 100);
    return `<div class="score-row"><span>${t(type.short)}</span><div class="score-track"><div class="score-value" style="width:${Math.max(percent, 4)}%;--bar-color:${type.accent}"></div></div><b>${percent}</b></div>`;
  }).join('');
}
function encodeScores(value) { return TYPE_ORDER.map(id => Math.max(0, Math.round(value[id] || 0))).join(','); }
function decodeScores(raw, resultId) {
  if (!raw) return Object.fromEntries(TYPE_ORDER.map((id, index) => [id, TYPES[resultId].profile[index]]));
  const parts = raw.split(',').map(Number);
  if (parts.length !== TYPE_ORDER.length || parts.some(item => !Number.isFinite(item) || item < 0 || item > 99)) {
    return Object.fromEntries(TYPE_ORDER.map((id, index) => [id, TYPES[resultId].profile[index]]));
  }
  return Object.fromEntries(TYPE_ORDER.map((id, index) => [id, parts[index]]));
}
function showToast(message) {
  window.clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add('is-visible');
  toastTimer = window.setTimeout(() => els.toast.classList.remove('is-visible'), 2400);
}
async function copyResultLink() {
  const text = currentResultId ? `${t('나는')} ${t(TYPES[currentResultId].name)}!\n${t(TYPES[currentResultId].tagline)}\n${window.location.href}` : window.location.href;
  try {
    await navigator.clipboard.writeText(text);
    showToast(t('결과 링크가 복사됐어요.'));
  } catch (error) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    showToast(t('결과 링크가 복사됐어요.'));
  }
  track('keeper_result_copy', { keeper_type: currentResultId || 'unknown' });
}
async function shareResult() {
  if (!currentResultId) return;
  const type = TYPES[currentResultId];
  const data = { title: `${t('나는')} ${t(type.name)}!`, text: `${t(type.tagline)}\n${t('피그미 집사 유형 테스트에서 확인해 보세요.')}`, url: window.location.href };
  if (navigator.share) {
    try {
      await navigator.share(data);
      track('keeper_result_share', { keeper_type: currentResultId, method: 'web_share' });
      return;
    } catch (error) {
      if (error?.name === 'AbortError') return;
    }
  }
  await copyResultLink();
}
function retryQuiz() {
  document.title = `${t('나는 어떤 피그미 집사일까?')} | ${t('피그미 집사 유형 테스트')}`;
  startQuiz();
}
function hydrateFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const resultId = params.get('result');
  if (!TYPES[resultId]) return false;
  showResult(resultId, decodeScores(params.get('s'), resultId), false);
  return true;
}

renderPreview();
els.startButton.addEventListener('click', startQuiz);
els.share.addEventListener('click', shareResult);
els.copy.addEventListener('click', copyResultLink);
els.retry.addEventListener('click', retryQuiz);

if (!hydrateFromQuery()) setScreen(els.start);
