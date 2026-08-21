import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const sourceHtml = await readFile(path.join(root, 'index.html'), 'utf8');
const sourceScript = await readFile(path.join(root, 'script.js'), 'utf8');
const labHtml = await readFile(path.join(root, 'lab', 'index.html'), 'utf8');
const keeperHtml = await readFile(path.join(root, 'keeper', 'index.html'), 'utf8');
const keeperScripts = await Promise.all([
  'app.js', 'types.js', 'questions-a.js', 'questions-b.js', 'questions-c.js',
  'questions-d.js', 'questions-e.js', 'questions-f.js'
].map(file => readFile(path.join(root, 'keeper', file), 'utf8')));

const careLeadSource = '피그미다람쥐(아프리카난쟁이겨울잠쥐, <i>Graphiurus murinus</i>)는 <b>온도와 먹이만 잘 맞춰주면</b> 초보자도 충분히 키울 수 있어요. 사육 환경에서 평균 <b>6년</b> 정도 함께합니다.';
const keeperHeadingSource = '나는 어떤<br><em>피그미 집사</em>일까?';
const labHeroSource = '나와 피그미를<br><em>조금 더 알아보는 곳</em>';
const labMorphHeadingSource = '나는 어떤<br>피그미 모프일까?';
const labKeeperHeadingSource = '나는 어떤<br>피그미 집사일까?';
const labHeroLeadSource = '가볍게 즐기는 성향 테스트부터 실제 사육에 도움이 되는 준비도 점검까지.<br class="desktop-only"> 하나씩 새로운 피그미 테스트를 공개합니다.';

const locales = {
  en: {
    google: 'en', htmlLang: 'en', path: '/en/', label: 'English',
    title: 'African Pygmy Dormouse Morph Test (Micro Squirrel)',
    description: 'Discover your African Pygmy Dormouse morph in 10 questions. Also known as the Woodland Dormouse, African Dwarf Dormouse, or Micro Squirrel.',
    keywords: 'African Pygmy Dormouse, Woodland Dormouse, African Dwarf Dormouse, Micro Squirrel, Graphiurus murinus, dormouse morph, pygmy dormouse care',
    schemaName: 'African Pygmy Dormouse Morph Test',
    schemaDescription: 'A 10-question morph quiz and care guide for the African Pygmy Dormouse, also known as the Woodland Dormouse or Micro Squirrel.',
    pages: {
      lab: { title: 'African Pygmy Dormouse Test Lab', description: 'Explore morph, keeper-type, compatibility, personality and care-readiness quizzes for African pygmy dormice.' },
      keeper: { title: 'What Kind of African Pygmy Dormouse Keeper Are You?', description: 'Discover your African pygmy dormouse care style through 12 practical questions and six keeper types.' }
    },
    overrides: {
      '한국어': '한국어',
      '내가 피그미다람쥐라면': 'If I were an African pygmy dormouse,',
      '어떤 모프': 'which morph',
      '일까?': ' would I be?',
      '랜덤 10문항으로 알아보는 나의 모프': 'Discover your morph in 10 random questions',
      '다시 해도 매번 다른 질문이 나와요!': 'Every retake brings a different set of questions!',
      '명이 테스트했어요': ' people have taken the test',
      '✨ 10가지 결과 모프': '✨ 10 possible morph results',
      '테스트 시작하기': 'Start the test',
      '🐿 Pygmy Squirrel Morph Test': '🐿 African Pygmy Dormouse (Micro Squirrel)',
      '피그미 테스트랩': 'African Pygmy Dormouse Test Lab',
      '나는 어떤 피그미 집사일까?': 'What Kind of African Pygmy Dormouse Keeper Are You?',
      '피그미 집사 유형 테스트': 'African Pygmy Dormouse Keeper Type Test',
      '관찰형 연구자 집사': 'Observant Researcher',
      '환경설계형 집사': 'Habitat Designer',
      '다정한 교감형 집사': 'Gentle Companion',
      '기록형 데이터 집사': 'Care Recorder',
      '자연주의형 집사': 'Naturalistic Keeper',
      '든든한 계획형 집사': 'Reliable Care Planner',
      '피그미를 대하는 나만의 방식': 'My Own Way of Caring for Pygmy Dormice',
      '가볍게 즐기는 성향 테스트부터 실제 사육에 도움이 되는 준비도 점검까지. 하나씩 새로운 피그미 테스트를 공개합니다.': 'From lighthearted personality quizzes to practical care-readiness checks, discover a growing collection of African pygmy dormouse tests.',
      '공개된 테스트': 'Available Tests', '준비 중인 테스트': 'Coming Soon',
      '테스트 둘러보기': 'Explore the Tests', '나를 알아보기': 'Learn About Yourself',
      '피그미가 평소와 다르게 행동할 때 무엇부터 확인하나요? 12개의 생활형 질문으로 나의 관찰·환경·교감·기록 성향을 알아봅니다.': 'When an African pygmy dormouse behaves differently, what do you check first? Explore your observation, habitat, bonding, and record-keeping style through 12 practical questions.',
      '개 질문': ' questions', '가지 결과': ' results',
      '관찰형': 'Observant', '환경형': 'Habitat', '교감형': 'Companion',
      '기록형': 'Recorder', '자율형': 'Naturalist', '계획형': 'Planner'
    },
    blockOverrides: {
      [careLeadSource]: 'The African pygmy dormouse (<i>Graphiurus murinus</i>) is manageable even for first-time keepers when <b>temperature and diet are set correctly</b>. In captivity, its average lifespan is about <b>6 years</b>.',
      [keeperHeadingSource]: 'What Kind of<br><em>African Pygmy Dormouse Keeper</em> Are You?',
      [labHeroSource]: 'A Place to Learn More About<br><em>You and African Pygmy Dormice</em>',
      [labHeroLeadSource]: 'From lighthearted personality quizzes to practical care-readiness checks.<br class="desktop-only"> Explore a growing collection of African pygmy dormouse tests.',
      [labMorphHeadingSource]: 'Which African Pygmy Dormouse<br>Morph Are You?',
      [labKeeperHeadingSource]: 'What Kind of African Pygmy Dormouse<br>Keeper Are You?'
    }
  },
  ja: {
    google: 'ja', htmlLang: 'ja', path: '/ja/', label: '日本語',
    title: 'アフリカヤマネ（African Pygmy Dormouse）モルフ診断',
    description: 'アフリカヤマネ（African Pygmy Dormouse／Graphiurus murinus）のモルフを10問で診断。飼育の基本も確認できます。',
    keywords: 'アフリカヤマネ, African Pygmy Dormouse, Graphiurus murinus, モルフ, アフリカヤマネ 飼育, アフリカヤマネ 種類',
    schemaName: 'アフリカヤマネのモルフ診断',
    schemaDescription: 'アフリカヤマネ（African Pygmy Dormouse）のモルフを見つける10問の診断と飼育ガイドです。',
    pages: {
      lab: { title: 'アフリカヤマネ テストラボ', description: 'モルフ診断、飼育者タイプ、相性、性格、飼育準備度のテストをまとめて楽しめます。' },
      keeper: { title: 'あなたはどんなアフリカヤマネ飼育者？', description: '12の実践的な質問から、6タイプのアフリカヤマネ飼育スタイルを診断します。' }
    },
    overrides: {
      '한국어': '韓国語',
      '🐿 Pygmy Squirrel Morph Test': '🐿 アフリカヤマネ（African Pygmy Dormouse）',
      '피그미 테스트랩': 'アフリカヤマネ テストラボ',
      '나는 어떤 피그미 집사일까?': 'あなたはどんなアフリカヤマネ飼育者？',
      '피그미 집사 유형 테스트': 'アフリカヤマネ飼育者タイプ診断',
      '관찰형 연구자 집사': '観察型リサーチャー',
      '환경설계형 집사': '環境設計タイプ',
      '다정한 교감형 집사': 'ふれあい重視タイプ',
      '기록형 데이터 집사': '記録管理タイプ',
      '자연주의형 집사': 'ナチュラル飼育タイプ',
      '든든한 계획형 집사': 'しっかり計画タイプ',
      '피그미가 평소와 다르게 행동할 때 무엇부터 확인하나요? 12개의 생활형 질문으로 나의 관찰·환경·교감·기록 성향을 알아봅니다.': 'アフリカヤマネがいつもと違う行動をしたとき、最初に何を確認しますか？12の実践的な質問から、観察・環境・ふれあい・記録の傾向を確認します。',
      '관찰형': '観察', '환경형': '環境', '교감형': 'ふれあい',
      '기록형': '記録', '자율형': '自然', '계획형': '計画'
    },
    blockOverrides: {
      [careLeadSource]: 'アフリカヤマネ（<i>Graphiurus murinus</i>）は、<b>温度と食事を適切に管理すれば</b>、初心者でも飼育できます。飼育下での平均寿命は約<b>6年</b>です。',
      [keeperHeadingSource]: 'あなたはどんな<br><em>アフリカヤマネ飼育者</em>？',
      [labHeroSource]: '自分とアフリカヤマネを<br><em>もっと知る場所</em>',
      [labHeroLeadSource]: '気軽に楽しめるタイプ診断から、実際の飼育に役立つ準備度チェックまで。<br class="desktop-only"> アフリカヤマネの新しいテストを順次公開します。',
      [labMorphHeadingSource]: 'あなたはどの<br>アフリカヤマネモルフ？',
      [labKeeperHeadingSource]: 'あなたはどんな<br>アフリカヤマネ飼育者？'
    }
  },
  'zh-cn': {
    google: 'zh-CN', htmlLang: 'zh-CN', path: '/zh-cn/', label: '简体中文',
    title: '非洲睡鼠（非洲侏儒睡鼠）花色测试',
    description: '通过10道题测试非洲睡鼠（非洲侏儒睡鼠／非洲林睡鼠，Graphiurus murinus）的花色，并查看实用饲养要点。',
    keywords: '非洲睡鼠, 非洲侏儒睡鼠, 非洲林睡鼠, Graphiurus murinus, 睡鼠花色, 非洲睡鼠饲养, 非洲睡鼠种类',
    schemaName: '非洲睡鼠花色测试',
    schemaDescription: '非洲睡鼠（非洲侏儒睡鼠、非洲林睡鼠）的10道花色测试与实用饲养指南。',
    pages: {
      lab: { title: '非洲侏儒睡鼠测试实验室', description: '集中体验花色、饲养者类型、性格、契合度和饲养准备度测试。' },
      keeper: { title: '你是哪种非洲侏儒睡鼠饲养者？', description: '通过12道生活化问题，了解你在6种非洲侏儒睡鼠照护类型中的倾向。' }
    },
    overrides: {
      '한국어': '韩语',
      '내가 피그미다람쥐라면': '如果我是非洲侏儒睡鼠，',
      '어떤 모프': '会是哪种花色',
      '일까?': '呢？',
      '랜덤 10문항으로 알아보는 나의 모프': '用10道随机题找到你的专属花色',
      '다시 해도 매번 다른 질문이 나와요!': '每次重测都会遇到不同的问题！',
      '명이 테스트했어요': ' 人已完成测试',
      '✨ 10가지 결과 모프': '✨ 10种花色结果',
      '테스트 시작하기': '开始测试',
      '🐿 Pygmy Squirrel Morph Test': '🐿 非洲睡鼠（非洲侏儒睡鼠）',
      '피그미 테스트랩': '非洲侏儒睡鼠测试实验室',
      '나는 어떤 피그미 집사일까?': '你是哪种非洲侏儒睡鼠饲养者？',
      '피그미 집사 유형 테스트': '非洲侏儒睡鼠饲养者类型测试',
      '관찰형 연구자 집사': '观察型研究者',
      '환경설계형 집사': '环境规划型',
      '다정한 교감형 집사': '互动陪伴型',
      '기록형 데이터 집사': '记录管理型',
      '자연주의형 집사': '自然照护型',
      '든든한 계획형 집사': '稳健规划型饲养者',
      '피그미가 평소와 다르게 행동할 때 무엇부터 확인하나요? 12개의 생활형 질문으로 나의 관찰·환경·교감·기록 성향을 알아봅니다.': '当非洲侏儒睡鼠的行为与平时不同时，你会先检查什么？通过12道生活化问题了解你的观察、环境、互动和记录倾向。',
      '관찰형': '观察', '환경형': '环境', '교감형': '互动',
      '기록형': '记录', '자율형': '自然', '계획형': '规划'
    },
    blockOverrides: {
      [careLeadSource]: '非洲侏儒睡鼠（<i>Graphiurus murinus</i>）只要<b>妥善控制温度并合理喂食</b>，新手也可以饲养。人工饲养条件下的平均寿命约为<b>6年</b>。',
      [keeperHeadingSource]: '你是哪种<br><em>非洲侏儒睡鼠饲养者</em>？',
      [labHeroSource]: '进一步了解自己与非洲侏儒睡鼠的<br><em>测试空间</em>',
      [labHeroLeadSource]: '从轻松有趣的性格测试到实用的饲养准备度检查。<br class="desktop-only"> 我们将持续推出新的非洲侏儒睡鼠测试。',
      [labMorphHeadingSource]: '你是哪种<br>非洲侏儒睡鼠花色？',
      [labKeeperHeadingSource]: '你是哪种<br>非洲侏儒睡鼠饲养者？'
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

function normalizeHtml(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function extractCareBlocks(html) {
  const section = html.match(/<section class="care-guide">[\s\S]*?<\/section>/i)?.[0] || '';
  return [...section.matchAll(/<(h1|h2|h3|p|summary|li)\b[^>]*>([\s\S]*?)<\/\1>/gi)]
    .map(match => normalizeHtml(match[2]))
    .filter(value => /[가-힣]/.test(value));
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

function replaceCareBlocks(html, blocks) {
  return html.replace(/(<(h1|h2|h3|p|summary|li)\b[^>]*>)([\s\S]*?)(<\/\2>)/gi, (whole, open, tag, inner, close) => {
    const translated = blocks[normalizeHtml(inner)];
    return translated ? `${open}${translated}${close}` : whole;
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
    .replace(/<meta name="keywords"\s+content="[^"]*">/, `<meta name="keywords" content="${config.keywords}">`)
    .replace(/<meta property="og:title"\s+content="[^"]*">/, `<meta property="og:title" content="${config.title}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${config.description}">`)
    .replace(/<meta property="og:url"\s+content="[^"]*">/, `<meta property="og:url" content="${canonical}">`)
    .replace(/<meta name="twitter:title"\s+content="[^"]*">/, `<meta name="twitter:title" content="${config.title}">`)
    .replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${config.description}">`)
    .replace(/<link rel="canonical"\s+href="[^"]*">/, `<link rel="canonical" href="${canonical}">`)
    .replace(/"name": "[^"]*",/, `"name": "${config.schemaName}",`)
    .replace(/"description": "[^"]*",/, `"description": "${config.schemaDescription}",`)
    .replace('"inLanguage": "ko-KR"', `"inLanguage": "${config.htmlLang}"`)
    .replace(/ aria-current="page"/g, '')
    .replace(`href="${config.path}"`, `href="${config.path}" aria-current="page"`)
    .replace('<script src="/i18n.js?v=20260814-1"></script>', `<script src="/locales/${locale}.js?v=20260814-1"></script>\n<script src="/i18n.js?v=20260814-1"></script>`);
}

function routeAlternates(route) {
  return [
    ['ko-KR', `/${route}/`], ['en', `/en/${route}/`], ['ja', `/ja/${route}/`],
    ['zh-CN', `/zh-cn/${route}/`], ['x-default', `/${route}/`]
  ].map(([lang, url]) => `<link rel="alternate" hreflang="${lang}" href="https://pygmytest.com${url}">`).join('\n  ');
}

function localizeExtraPage(html, locale, config, messages, route) {
  const prefix = `/${locale}`;
  const canonical = `https://pygmytest.com${prefix}/${route}/`;
  const contextualHtml = replaceCareBlocks(html, config.blockOverrides);
  let localized = replaceQuotedStrings(replaceTextNodes(contextualHtml, messages), messages)
    .replace(/\s*<link rel="alternate" hreflang="[^"]+" href="[^"]+">/g, '')
    .replace('<html lang="ko">', `<html lang="${config.htmlLang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${config.pages[route].title}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${config.pages[route].description}">`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${canonical}">\n  ${routeAlternates(route)}`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${config.pages[route].title}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${config.pages[route].description}">`)
    .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${canonical}">`)
    .replace(/"inLanguage": "ko-KR"/, `"inLanguage": "${config.htmlLang}"`)
    .replaceAll('href="/lab/"', `href="${prefix}/lab/"`)
    .replaceAll('href="/keeper/"', `href="${prefix}/keeper/"`)
    .replaceAll('href="/"', `href="${prefix}/"`)
    .replace(/ aria-current="page"/g, '')
    .replace(/<a href="[^"]*" lang="ko"/, `<a href="/${route}/" lang="ko"`)
    .replace(/<a href="[^"]*" lang="en"/, `<a href="/en/${route}/" lang="en"`)
    .replace(/<a href="[^"]*" lang="ja"/, `<a href="/ja/${route}/" lang="ja"`)
    .replace(/<a href="[^"]*" lang="zh-CN"/, `<a href="/zh-cn/${route}/" lang="zh-CN"`)
    .replace(new RegExp(`(<a href="[^"]*" lang="${config.htmlLang}"[^>]*)(>)`), '$1 aria-current="page"$2');
  const localeScripts = `<script src="/locales/${locale}.js?v=20260821-1"></script>\n  <script src="/i18n.js?v=20260821-1"></script>`;
  if (route === 'keeper') {
    localized = localized.replace('<script src="/keeper/script.js?v=20260820-1"></script>', `${localeScripts}\n  <script src="/keeper/script.js?v=20260820-1"></script>`);
  } else {
    localized = localized.replace('</body>', `  ${localeScripts}\n</body>`);
  }
  return localized;
}

const runtimeKeys = [
  '{morph} 모프 이미지',
  '피그미다람쥐 모프 테스트에서 결과 확인 👉',
  '나도 테스트하기',
  '너도 테스트해봐 👉',
  '피그미다람쥐 모프 테스트',
  '결과 일러스트',
  '나는',
  '나는 어떤 피그미 집사일까?',
  '피그미 집사 유형 테스트',
  '피그미 집사 유형 테스트에서 확인해 보세요.',
  '결과 링크가 복사됐어요.'
];

const uniqueValues = [...new Set([
  ...extractHtmlText(sourceHtml),
  ...extractHtmlText(labHtml),
  ...extractHtmlText(keeperHtml),
  ...extractScriptStrings(sourceHtml),
  ...extractScriptStrings(labHtml),
  ...extractScriptStrings(keeperHtml),
  ...extractScriptStrings(sourceScript),
  ...keeperScripts.flatMap(extractScriptStrings),
  ...runtimeKeys
])];
const careBlocks = [...new Set(extractCareBlocks(sourceHtml))];
process.stdout.write(`Found ${uniqueValues.length} translatable strings.\n`);

await mkdir(path.join(root, 'locales'), { recursive: true });
for (const [locale, config] of Object.entries(locales)) {
  const existing = await readExistingPack(locale);
  const messages = await translateAll(uniqueValues, config.google, existing);
  const translatedBlocks = await translateAll(careBlocks, config.google, config.blockOverrides);
  if (locale === 'en') {
    for (const source of Object.keys(messages)) messages[source] = messages[source].replaceAll('Butler', 'Keeper').replaceAll('butler', 'keeper');
  }
  if (locale === 'ja') {
    for (const source of Object.keys(messages)) messages[source] = messages[source].replaceAll('執事', '飼育者');
  }
  if (locale === 'zh-cn') {
    for (const source of Object.keys(messages)) messages[source] = messages[source].replaceAll('变形', '花色').replaceAll('管家', '饲养者').replaceAll('巴特勒', '饲养者');
  }
  Object.assign(messages, config.overrides);
  const pack = `window.PYGMY_LOCALE=${JSON.stringify({ locale, messages }, null, 2)};\n`;
  await writeFile(path.join(root, 'locales', `${locale}.js`), pack, 'utf8');

  const contextualHtml = replaceCareBlocks(sourceHtml, translatedBlocks);
  const translatedHtml = replaceQuotedStrings(replaceTextNodes(contextualHtml, messages), messages);
  const localized = localizeMetadata(translatedHtml, locale, config);
  await mkdir(path.join(root, locale), { recursive: true });
  await writeFile(path.join(root, locale, 'index.html'), localized, 'utf8');

  for (const [route, html] of [['lab', labHtml], ['keeper', keeperHtml]]) {
    const routeDir = path.join(root, locale, route);
    await mkdir(routeDir, { recursive: true });
    await writeFile(path.join(routeDir, 'index.html'), localizeExtraPage(html, locale, config, messages, route), 'utf8');
  }
}
