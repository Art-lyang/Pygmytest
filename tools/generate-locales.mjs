import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const sourceHtml = await readFile(path.join(root, 'index.html'), 'utf8');
const sourceScript = await readFile(path.join(root, 'script.js'), 'utf8');

const locales = {
  en: {
    google: 'en', htmlLang: 'en', path: '/en/', label: 'English',
    title: 'Pygmy Squirrel Morph Test | Which Morph Are You?',
    description: 'Take a 10-question personality quiz to discover your African pygmy dormouse morph and read practical care tips.',
    overrides: {
      '한국어': '한국어',
      '내가 피그미다람쥐라면': 'If I were an African pygmy dormouse,',
      '어떤 모프': 'which morph',
      '일까?': 'would I be?',
      '랜덤 10문항으로 알아보는 나의 모프': 'Discover your morph in 10 random questions',
      '다시 해도 매번 다른 질문이 나와요!': 'Every retake brings a different set of questions!',
      '명이 테스트했어요': ' people have taken the test',
      '✨ 10가지 결과 모프': '✨ 10 possible morph results',
      '테스트 시작하기': 'Start the test'
    }
  },
  ja: {
    google: 'ja', htmlLang: 'ja', path: '/ja/', label: '日本語',
    title: 'ピグミーリスのモルフ診断 | あなたはどのモルフ？',
    description: '10問の性格診断で、あなたにぴったりのアフリカヤマネのモルフを見つけ、飼育の基本も確認できます。',
    overrides: { '한국어': '한국語' }
  },
  'zh-cn': {
    google: 'zh-CN', htmlLang: 'zh-CN', path: '/zh-cn/', label: '简体中文',
    title: '非洲侏儒睡鼠花色测试 | 你是哪一种花色？',
    description: '通过10道性格题找出最适合你的非洲侏儒睡鼠花色，并查看实用的饲养护理要点。',
    overrides: {
      '한국어': '韩语',
      '내가 피그미다람쥐라면': '如果我是非洲侏儒睡鼠，',
      '어떤 모프': '会是哪种花色',
      '일까?': '呢？',
      '랜덤 10문항으로 알아보는 나의 모프': '用10道随机题找到你的专属花色',
      '다시 해도 매번 다른 질문이 나와요!': '每次重测都会遇到不同的问题！',
      '명이 테스트했어요': ' 人已完成测试',
      '✨ 10가지 결과 모프': '✨ 10种花色结果',
      '테스트 시작하기': '开始测试'
    }
  }
};

function extractHtmlText(html) {
  const values = [];
  const body = html.match(/<body[\s\S]*?<\/body>/i)?.[0] || html;
  for (const match of body.matchAll(/>([^<>]*[가-힣][^<>]*)</g)) {
    const value = match[1].replace(/\s+/g, ' ').trim();
    if (value && !/[{};]/.test(value)) values.push(value);
  }
  return values;
}

function extractScriptStrings(script) {
  const values = [];
  const stringPattern = /(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/g;
  for (const match of script.matchAll(stringPattern)) {
    if (!/[가-힣]/.test(match[2]) || (match[1] === '`' && match[2].includes('${'))) continue;
    try {
      const value = Function(`"use strict"; return (${match[0]});`)();
      if (typeof value === 'string') values.push(value);
    } catch {}
  }
  return values;
}

async function translate(text, target) {
  const endpoint = new URL('https://translate.googleapis.com/translate_a/single');
  endpoint.search = new URLSearchParams({ client: 'gtx', sl: 'ko', tl: target, dt: 't', q: text });
  const response = await fetch(endpoint, { signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`Translation failed: ${response.status}`);
  const payload = await response.json();
  return payload[0].map(part => part[0]).join('');
}

async function translateAll(values, target, existing) {
  const entries = [];
  let cursor = 0;
  const workers = Array.from({ length: 8 }, async () => {
    while (cursor < values.length) {
      const index = cursor++;
      const source = values[index];
      let translated = existing[source];
      if (translated) {
        entries[index] = [source, translated];
        continue;
      }
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          translated = await translate(source, target);
          break;
        } catch (error) {
          if (attempt === 3) throw error;
        }
      }
      entries[index] = [source, translated];
      if ((index + 1) % 50 === 0) process.stdout.write(`${target}: ${index + 1}/${values.length}\n`);
    }
  });
  await Promise.all(workers);
  return Object.fromEntries(entries);
}

function replaceTextNodes(html, messages) {
  return html.replace(/>([^<>]+)</g, (whole, raw) => {
    const trimmed = raw.replace(/\s+/g, ' ').trim();
    const translated = messages[trimmed];
    if (!translated) return whole;
    const leading = raw.match(/^\s*/)?.[0] || '';
    const trailing = raw.match(/\s*$/)?.[0] || '';
    return `>${leading}${translated}${trailing}<`;
  });
}

function replaceQuotedStrings(html, messages) {
  return Object.entries(messages).reduce(
    (localized, [source, translated]) => localized.replaceAll(`"${source}"`, `"${translated}"`),
    html
  );
}

async function readExistingPack(locale) {
  try {
    const source = await readFile(path.join(root, 'locales', `${locale}.js`), 'utf8');
    return JSON.parse(source.replace(/^window\.PYGMY_LOCALE=/, '').replace(/;\s*$/, '')).messages;
  } catch {
    return {};
  }
}

function localizeMetadata(html, locale, config) {
  const canonical = `https://pygmytest.com${config.path}`;
  return html
    .replace('<html lang="ko">', `<html lang="${config.htmlLang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${config.title}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${config.description}">`)
    .replace(/<meta property="og:title"\s+content="[^"]*">/, `<meta property="og:title" content="${config.title}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${config.description}">`)
    .replace(/<meta property="og:url"\s+content="[^"]*">/, `<meta property="og:url" content="${canonical}">`)
    .replace(/<meta name="twitter:title"\s+content="[^"]*">/, `<meta name="twitter:title" content="${config.title}">`)
    .replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${config.description}">`)
    .replace(/<link rel="canonical"\s+href="[^"]*">/, `<link rel="canonical" href="${canonical}">`)
    .replace('"inLanguage": "ko-KR"', `"inLanguage": "${config.htmlLang}"`)
    .replace(/ aria-current="page"/g, '')
    .replace(`href="${config.path}"`, `href="${config.path}" aria-current="page"`)
    .replace('<script src="/i18n.js?v=20260814-1"></script>', `<script src="/locales/${locale}.js?v=20260814-1"></script>\n<script src="/i18n.js?v=20260814-1"></script>`);
}

const runtimeKeys = [
  '{morph} 모프 이미지',
  '피그미다람쥐 모프 테스트에서 결과 확인 👉',
  '나도 테스트하기',
  '너도 테스트해봐 👉',
  '피그미다람쥐 모프 테스트'
];

const uniqueValues = [...new Set([
  ...extractHtmlText(sourceHtml),
  ...extractScriptStrings(sourceHtml),
  ...extractScriptStrings(sourceScript),
  ...runtimeKeys
])];
process.stdout.write(`Found ${uniqueValues.length} translatable strings.\n`);

await mkdir(path.join(root, 'locales'), { recursive: true });
for (const [locale, config] of Object.entries(locales)) {
  const existing = await readExistingPack(locale);
  const messages = await translateAll(uniqueValues, config.google, existing);
  if (locale === 'zh-cn') {
    for (const source of Object.keys(messages)) messages[source] = messages[source].replaceAll('变形', '花色');
  }
  Object.assign(messages, config.overrides);
  const pack = `window.PYGMY_LOCALE=${JSON.stringify({ locale, messages }, null, 2)};\n`;
  await writeFile(path.join(root, 'locales', `${locale}.js`), pack, 'utf8');

  const translatedHtml = replaceQuotedStrings(replaceTextNodes(sourceHtml, messages), messages);
  const localized = localizeMetadata(translatedHtml, locale, config);
  await mkdir(path.join(root, locale), { recursive: true });
  await writeFile(path.join(root, locale, 'index.html'), localized, 'utf8');
}
