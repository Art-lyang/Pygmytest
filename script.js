/* ============================================================
   피그미다람쥐 모프 테스트 - script.js
   pygmytest.com
   ============================================================ */


/* ============================================================
   1. 모프 데이터
   9가지 모프의 정보 (이모지, 이름, 설명, 특징, 결과 해설, 궁합)
   ============================================================ */
const MORPHS = [
  {
    id: 'normal',
    // ↓ 실제 모프 사진으로 교체하세요 (권장 400×300px 이상)
    image: 'img/img-normal.jpg',
    name: '노말',
    nameEn: 'Normal',
    emoji: '🌿',
    tagline: '자연 그대로의 따뜻함',
    desc: '노말 모프는 피그미다람쥐 본연의 색을 지닌 가장 기본적이고 자연스러운 모프예요. 흙빛 갈색 털에 따뜻한 눈빛을 가진 노말은 소박하지만 특유의 매력이 있어요.',
    traits: ['믿음직함', '자연스러움', '편안함', '진정성'],
    why: '당신은 화려한 것보다 진실되고 편안한 관계를 중시해요. 겉치레보다 내면의 따뜻함을 더 중요하게 여기는 타입으로, 주변 사람들에게 안정감을 주는 존재예요.',
    compat: '✨ 잘 맞는 모프: 파이드, 루시스틱\n부드럽고 포근한 에너지의 모프들과 잘 어울려요.'
  },
  {
    id: 'ringtail',
    // ↓ 실제 모프 사진으로 교체하세요 (권장 400×300px 이상)
    image: 'img/img-ringtail.jpg',
    name: '링테일',
    nameEn: 'Ring Tail',
    emoji: '🌀',
    tagline: '눈길을 끄는 개성파',
    desc: '링테일은 꼬리에 독특한 링 패턴이 있는 개성 넘치는 모프예요. 눈에 띄는 특징 덕분에 한 번 보면 잊기 힘든 인상을 남기죠.',
    traits: ['개성적', '눈에 띄는', '기억에 남는', '독창적'],
    why: '당신은 어디서나 존재감이 뚜렷한 편이에요. 자신만의 스타일이 분명하고, 남들과 다른 길을 걸어도 당당한 타입이에요.',
    compat: '✨ 잘 맞는 모프: 달마시안, 마스크\n개성 있는 모프들끼리 서로의 매력을 인정해요.'
  },
  {
    id: 'pied',
    // ↓ 실제 모프 사진으로 교체하세요 (권장 400×300px 이상)
    image: 'img/img-pied.jpg',
    name: '파이드',
    nameEn: 'Pied',
    emoji: '🤍',
    tagline: '독특한 패턴의 소유자',
    desc: '파이드는 흰 반점이 불규칙하게 퍼진 독특한 패턴을 가진 모프예요. 세상에 똑같은 개체가 없는 유일무이한 존재랍니다.',
    traits: ['유니크함', '예측불가', '특별함', '자유로움'],
    why: '당신은 틀에 박히지 않는 자유로운 영혼이에요. 예측 불가능한 면이 있지만, 그게 오히려 매력으로 작용하는 타입이에요.',
    compat: '✨ 잘 맞는 모프: 노말, 하이화이트\n안정적인 모프가 당신의 자유로운 에너지를 잘 받아줘요.'
  },
  {
    id: 'oreo',
    // ↓ 실제 모프 사진으로 교체하세요 (권장 400×300px 이상)
    image: 'img/img-oreo.jpg',
    name: '오레오',
    nameEn: 'Oreo',
    emoji: '🍪',
    tagline: '흑백의 선명한 대비',
    desc: '오레오 모프는 이름처럼 검정과 하얀색이 선명하게 대비되는 아름다운 패턴을 가졌어요. 흑백의 조화가 만드는 클래식한 매력이 있답니다.',
    traits: ['명확함', '결단력', '클래식함', '균형'],
    why: '당신은 흑백처럼 명확한 가치관을 가진 사람이에요. 좋은 것과 싫은 것이 분명하고, 결단력 있게 행동하는 편이에요.',
    compat: '✨ 잘 맞는 모프: 달마시안, 마스크\n뚜렷한 개성을 가진 모프들과 서로 잘 이해해요.'
  },
  {
    id: 'dalmatian',
    // ↓ 실제 모프 사진으로 교체하세요 (권장 400×300px 이상)
    image: 'img/img-dalmatian.jpg',
    name: '달마시안',
    nameEn: 'Dalmatian',
    emoji: '✨',
    tagline: '별처럼 흩뿌려진 매력',
    desc: '달마시안 모프는 흰 바탕에 검정 점들이 흩뿌려진 패턴이에요. 마치 밤하늘의 별처럼, 어디를 봐도 새로운 포인트를 발견할 수 있어요.',
    traits: ['활발함', '매력적', '사교적', '긍정적'],
    why: '당신은 어디에 있든 주위를 환하게 만드는 에너지를 가졌어요. 사람들과 어울리기를 좋아하고 긍정적인 에너지로 주변을 물들이죠.',
    compat: '✨ 잘 맞는 모프: 링테일, 오레오\n활기찬 에너지끼리 시너지가 폭발해요!'
  },
  {
    id: 'mask',
    // ↓ 실제 모프 사진으로 교체하세요 (권장 400×300px 이상)
    image: 'img/img-mask.jpg',
    name: '마스크',
    nameEn: 'Mask',
    emoji: '🎭',
    tagline: '신비로운 눈빛의 소유자',
    desc: '마스크 모프는 눈 주위에 독특한 마스크 패턴이 있어요. 마치 가면을 쓴 것 같은 신비로운 외모가 보는 사람을 사로잡아요.',
    traits: ['신비로움', '깊이감', '카리스마', '지적임'],
    why: '당신에겐 쉽게 파악되지 않는 신비로운 면이 있어요. 처음엔 차가워 보여도 알면 알수록 매력이 깊어지는 타입이에요.',
    compat: '✨ 잘 맞는 모프: 블랙, 링테일\n개성 강한 모프들과의 만남이 특별한 케미를 만들어요.'
  },
  {
    id: 'high-white',
    // ↓ 실제 모프 사진으로 교체하세요 (권장 400×300px 이상)
    image: 'img/img-high-white.jpg',
    name: '하이화이트',
    nameEn: 'High White',
    emoji: '☁️',
    tagline: '순백의 포근한 솜털',
    desc: '하이화이트는 흰 비율이 매우 높은 모프로, 마치 솜뭉치처럼 순백의 아름다움을 자랑해요. 보기만 해도 마음이 포근해지는 모프랍니다.',
    traits: ['순수함', '포근함', '배려심', '온화함'],
    why: '당신은 주변 사람들에게 편안함과 따뜻함을 주는 사람이에요. 순수한 마음과 깊은 배려심으로 사람들에게 사랑받는 타입이에요.',
    compat: '✨ 잘 맞는 모프: 노말, 루시스틱\n온화한 에너지끼리 만나면 더없이 평화로워요.'
  },
  {
    id: 'lucistic',
    // ↓ 실제 모프 사진으로 교체하세요 (권장 400×300px 이상)
    image: 'img/img-lucistic.jpg',
    name: '루시스틱',
    nameEn: 'Lucistic',
    emoji: '🌕',
    tagline: '달빛처럼 은은한 빛',
    desc: '루시스틱은 전체적으로 밝고 연한 색조를 띠는 모프예요. 마치 달빛이 스민 것처럼 은은하고 고운 빛깔이 특징이에요.',
    traits: ['감수성', '섬세함', '예술적', '차분함'],
    why: '당신은 세상을 섬세하게 느끼는 감수성이 풍부한 사람이에요. 예술적 감각이 있고, 깊이 있는 대화를 좋아하는 내면이 풍부한 타입이에요.',
    compat: '✨ 잘 맞는 모프: 하이화이트, 파이드\n섬세한 감성을 이해해주는 모프와 잘 통해요.'
  },
  {
    id: 'black',
    // ↓ 실제 모프 사진으로 교체하세요 (권장 400×300px 이상)
    image: 'img/img-black.jpg',
    name: '블랙',
    nameEn: 'Black',
    emoji: '🖤',
    tagline: '강렬한 존재감',
    desc: '블랙 모프는 온몸이 짙은 검정으로 덮인 희귀하고 강렬한 모프예요. 보기 드문 만큼 특별한 존재감을 가지고 있답니다.',
    traits: ['강인함', '희귀함', '카리스마', '독립적'],
    why: '당신은 강한 카리스마와 독립적인 정신을 가진 사람이에요. 쉽게 휩쓸리지 않고 자신만의 세계를 굳건히 지켜나가는 타입이에요.',
    compat: '✨ 잘 맞는 모프: 마스크, 링테일\n강렬한 개성끼리 만나도 서로를 존중하며 어울려요.'
  }
];


/* ============================================================
   2. 질문 풀 (30개)
   실제 진행 시 랜덤으로 10개만 추출됩니다.
   각 답변의 scores 객체: { 모프id: 가중치 }
   ============================================================ */
const ALL_QUESTIONS = [
  {
    text: "친구들이 나를 뭐라고 소개할까?",
    options: [
      { text: "🌿 \"얘는 진짜 믿음직해\"",           scores: { normal: 3, 'high-white': 2 } },
      { text: "✨ \"어딜 가도 분위기 띄우는 애\"",     scores: { dalmatian: 3, ringtail: 1 } },
      { text: "🎭 \"신비롭고 알다가도 몰라\"",         scores: { mask: 3, lucistic: 2 } },
      { text: "🖤 \"자기 길 뚜렷하게 가는 타입\"",    scores: { black: 3, oreo: 1 } }
    ]
  },
  {
    text: "주말 아침, 나의 이상적인 모습은?",
    options: [
      { text: "☀️ 상쾌하게 일찍 일어나 산책",         scores: { normal: 2, dalmatian: 2 } },
      { text: "📚 느긋하게 책이나 영상 감상",          scores: { lucistic: 3, mask: 2 } },
      { text: "👯 친구들과 브런치 약속",               scores: { dalmatian: 3, pied: 1 } },
      { text: "🛋️ 아무 계획 없이 완전 쉬기",          scores: { 'high-white': 3, normal: 1 } }
    ]
  },
  {
    text: "누군가 나의 첫인상을 묻는다면?",
    options: [
      { text: "😊 \"처음엔 편안했어\"",                scores: { normal: 3, 'high-white': 2 } },
      { text: "😮 \"어딘가 독특해 보였어\"",           scores: { ringtail: 3, pied: 2 } },
      { text: "😏 \"좀 미스터리했어\"",                scores: { mask: 3, black: 2 } },
      { text: "🤩 \"엄청 밝고 에너지 넘쳤어\"",       scores: { dalmatian: 3, oreo: 1 } }
    ]
  },
  {
    text: "스트레스 받을 때 나는?",
    options: [
      { text: "🎵 음악 틀고 혼자 정리하기",           scores: { lucistic: 3, mask: 2 } },
      { text: "🏃 몸 쓰거나 바깥 나가기",             scores: { dalmatian: 2, normal: 2 } },
      { text: "💬 믿는 사람에게 털어놓기",            scores: { 'high-white': 3, pied: 1 } },
      { text: "😤 조용히 참고 해결 방법 찾기",        scores: { black: 3, oreo: 2 } }
    ]
  },
  {
    text: "새로운 사람을 만날 때 나는?",
    options: [
      { text: "🤝 먼저 다가가서 인사하는 편",         scores: { dalmatian: 3, normal: 1 } },
      { text: "👀 일단 살펴보다가 자연스럽게",        scores: { mask: 2, lucistic: 2 } },
      { text: "😊 상대가 다가오면 반갑게 받기",       scores: { 'high-white': 3, pied: 1 } },
      { text: "🙂 친해지기까지 시간이 걸려",          scores: { black: 2, oreo: 2 } }
    ]
  },
  {
    text: "내가 가장 소중하게 여기는 것은?",
    options: [
      { text: "💛 진심 어린 관계와 신뢰",             scores: { normal: 3, 'high-white': 2 } },
      { text: "🎯 내 신념과 원칙",                    scores: { black: 3, oreo: 2 } },
      { text: "🌈 자유와 나만의 개성",                scores: { pied: 3, ringtail: 2 } },
      { text: "🌸 섬세한 감정과 아름다움",            scores: { lucistic: 3, mask: 1 } }
    ]
  },
  {
    text: "모임에서 나의 포지션은?",
    options: [
      { text: "🎤 자연스럽게 중심이 되는 편",         scores: { dalmatian: 3, ringtail: 2 } },
      { text: "🌿 분위기 잘 맞춰주는 서포터",         scores: { normal: 3, 'high-white': 2 } },
      { text: "🎭 관찰하다 핵심 발언 날리기",         scores: { mask: 3, black: 2 } },
      { text: "🎨 독특한 아이디어 내는 사람",         scores: { pied: 3, lucistic: 2 } }
    ]
  },
  {
    text: "나에게 이상적인 하루란?",
    options: [
      { text: "☀️ 계획대로 알차게 흘러가는 날",       scores: { oreo: 3, normal: 2 } },
      { text: "🎲 예상치 못한 재미가 생기는 날",      scores: { pied: 3, dalmatian: 2 } },
      { text: "🌙 혼자 깊이 집중하는 고요한 날",      scores: { lucistic: 3, black: 2 } },
      { text: "👥 소중한 사람들과 함께하는 날",       scores: { 'high-white': 3, dalmatian: 1 } }
    ]
  },
  {
    text: "나의 옷 스타일에 가깝다면?",
    options: [
      { text: "🟤 자연스럽고 무난한 베이직",          scores: { normal: 3, 'high-white': 1 } },
      { text: "⬛ 클린한 블랙 & 화이트 대비",         scores: { oreo: 3, black: 2 } },
      { text: "🌈 포인트 있는 개성 아이템",           scores: { ringtail: 3, pied: 2 } },
      { text: "✨ 은은하고 감각적인 스타일",          scores: { lucistic: 3, mask: 2 } }
    ]
  },
  {
    text: "갈등이 생겼을 때 나는?",
    options: [
      { text: "💬 바로 대화로 해결하려 해",           scores: { dalmatian: 2, normal: 2 } },
      { text: "🤔 혼자 충분히 생각하고 정리",         scores: { black: 3, lucistic: 2 } },
      { text: "🤝 상대 입장에서 먼저 생각해",         scores: { 'high-white': 3, normal: 1 } },
      { text: "📝 명확하게 입장 정리해서 전달",       scores: { oreo: 3, mask: 1 } }
    ]
  },
  {
    text: "누군가 나를 한 단어로 표현한다면?",
    options: [
      { text: "🌿 따뜻함",                            scores: { normal: 3, 'high-white': 2 } },
      { text: "⚡ 에너지",                            scores: { dalmatian: 3, ringtail: 2 } },
      { text: "🌙 신비로움",                          scores: { mask: 3, lucistic: 2 } },
      { text: "🦅 독립적",                            scores: { black: 3, pied: 1 } }
    ]
  },
  {
    text: "내가 주로 받는 칭찬은?",
    options: [
      { text: "\"정말 믿을 수 있어\"",                scores: { normal: 3, oreo: 1 } },
      { text: "\"같이 있으면 신나\"",                 scores: { dalmatian: 3, ringtail: 2 } },
      { text: "\"감각이 남달라\"",                    scores: { lucistic: 3, pied: 2 } },
      { text: "\"카리스마 있어\"",                    scores: { black: 3, mask: 2 } }
    ]
  },
  {
    text: "혼자 있는 시간을 어떻게 쓰나요?",
    options: [
      { text: "🎨 취미 활동에 푹 빠지기",             scores: { lucistic: 3, pied: 2 } },
      { text: "📱 sns나 유튜브 편하게 보기",           scores: { dalmatian: 2, normal: 1 } },
      { text: "💭 생각 정리하고 계획 세우기",         scores: { black: 3, oreo: 2 } },
      { text: "😴 아무 것도 안 하고 충전하기",        scores: { 'high-white': 3, normal: 2 } }
    ]
  },
  {
    text: "내가 가장 불편한 상황은?",
    options: [
      { text: "😬 약속이 갑자기 바뀔 때",             scores: { oreo: 3, normal: 2 } },
      { text: "😶 억지로 분위기 맞춰야 할 때",        scores: { black: 3, pied: 2 } },
      { text: "😔 오해받거나 무시당할 때",            scores: { 'high-white': 3, lucistic: 2 } },
      { text: "😵 할 게 너무 많아 정신없을 때",       scores: { mask: 2, normal: 1 } }
    ]
  },
  {
    text: "내가 설레는 순간은?",
    options: [
      { text: "🌱 새로운 취미나 도전을 시작할 때",   scores: { pied: 3, dalmatian: 2 } },
      { text: "👥 오랜 친구와 깊은 대화를 나눌 때",  scores: { normal: 3, 'high-white': 2 } },
      { text: "🌙 혼자 몰입해서 뭔가 완성될 때",     scores: { black: 3, lucistic: 2 } },
      { text: "✨ 예상 밖의 좋은 일이 생길 때",      scores: { ringtail: 3, dalmatian: 1 } }
    ]
  },
  {
    text: "나의 에너지 충전 방법은?",
    options: [
      { text: "🌿 혼자만의 조용한 시간",             scores: { lucistic: 3, black: 2 } },
      { text: "👫 가까운 사람들과 함께하기",         scores: { normal: 3, dalmatian: 2 } },
      { text: "🏋️ 땀 흘리며 몸 쓰는 활동",          scores: { dalmatian: 2, ringtail: 2 } },
      { text: "🛁 아무 생각 없이 완전 쉬기",         scores: { 'high-white': 3, mask: 1 } }
    ]
  },
  {
    text: "친구가 고민을 털어놓으면 나는?",
    options: [
      { text: "🤗 끝까지 들어주고 공감해줘",         scores: { 'high-white': 3, normal: 2 } },
      { text: "💡 해결책을 같이 찾아줘",             scores: { oreo: 3, black: 2 } },
      { text: "😊 기분 전환시켜 주려고 노력해",      scores: { dalmatian: 3, pied: 1 } },
      { text: "🤫 판단 없이 들어줘, 말수가 적더라도",scores: { mask: 3, lucistic: 2 } }
    ]
  },
  {
    text: "나를 가장 잘 표현하는 시간대는?",
    options: [
      { text: "🌅 상쾌한 아침, 에너지 넘침",         scores: { normal: 2, dalmatian: 2 } },
      { text: "🌞 활기찬 낮 시간대",                 scores: { dalmatian: 3, oreo: 1 } },
      { text: "🌆 여유로운 저녁 노을 시간",          scores: { 'high-white': 3, lucistic: 1 } },
      { text: "🌙 모두가 잠든 고요한 밤",            scores: { black: 3, mask: 2 } }
    ]
  },
  {
    text: "나의 장점 중 가장 자신 있는 건?",
    options: [
      { text: "🤝 어디서나 편안하게 해주는 포용력",  scores: { normal: 3, 'high-white': 2 } },
      { text: "🎯 흔들리지 않는 뚜렷한 주관",        scores: { black: 3, oreo: 2 } },
      { text: "🌈 재미있고 독특한 발상",             scores: { pied: 3, ringtail: 2 } },
      { text: "💎 깊은 감수성과 섬세한 공감",        scores: { lucistic: 3, mask: 2 } }
    ]
  },
  {
    text: "나는 어떤 여행을 좋아하나요?",
    options: [
      { text: "🗺️ 꼼꼼히 계획된 완벽한 여행",        scores: { oreo: 3, normal: 2 } },
      { text: "🎲 즉흥으로 흘러가는 여행",           scores: { pied: 3, dalmatian: 2 } },
      { text: "🌿 자연 속 힐링 여행",               scores: { lucistic: 3, 'high-white': 2 } },
      { text: "🎭 감각적인 문화·예술 여행",          scores: { mask: 3, ringtail: 1 } }
    ]
  },
  {
    text: "팀 프로젝트에서 나는?",
    options: [
      { text: "🎯 목표 향해 끌고 가는 리더",         scores: { black: 3, oreo: 2 } },
      { text: "🤝 갈등 조율하는 중재자",             scores: { normal: 3, 'high-white': 2 } },
      { text: "💡 아이디어 폭발하는 크리에이터",     scores: { pied: 3, dalmatian: 2 } },
      { text: "🔍 꼼꼼하게 체크하는 완성자",         scores: { mask: 3, lucistic: 2 } }
    ]
  },
  {
    text: "나에게 \"집\"이란?",
    options: [
      { text: "🏠 가장 편안하고 나다운 공간",        scores: { normal: 3, 'high-white': 2 } },
      { text: "🎨 취향으로 꾸민 나만의 세계",        scores: { lucistic: 3, pied: 2 } },
      { text: "⚡ 충전하고 다시 나가기 위한 베이스",  scores: { dalmatian: 3, ringtail: 2 } },
      { text: "🌙 완전한 고독과 사색의 공간",        scores: { black: 3, mask: 2 } }
    ]
  },
  {
    text: "나는 어떤 타입의 친구를 선호하나요?",
    options: [
      { text: "☀️ 밝고 에너지 넘치는 친구",          scores: { dalmatian: 3, normal: 1 } },
      { text: "🌿 편하고 조용히 함께 있을 수 있는 친구", scores: { 'high-white': 3, normal: 2 } },
      { text: "💭 생각 깊고 대화가 통하는 친구",     scores: { mask: 3, lucistic: 2 } },
      { text: "🎲 예측불가하고 재미있는 친구",       scores: { pied: 3, ringtail: 2 } }
    ]
  },
  {
    text: "내가 결정할 때 더 의지하는 건?",
    options: [
      { text: "💭 논리적인 분석과 판단",             scores: { oreo: 3, black: 2 } },
      { text: "❤️ 직관과 감정",                     scores: { lucistic: 3, pied: 2 } },
      { text: "👥 주변 의견과 분위기",               scores: { normal: 2, 'high-white': 2 } },
      { text: "📋 경험과 원칙",                      scores: { mask: 3, dalmatian: 1 } }
    ]
  },
  {
    text: "나의 SNS 피드 스타일은?",
    options: [
      { text: "✨ 감각적이고 통일된 미학",            scores: { lucistic: 3, mask: 2 } },
      { text: "😂 재미있고 유쾌한 콘텐츠",           scores: { dalmatian: 3, pied: 2 } },
      { text: "🌿 잘 올리진 않지만 진심 담긴 것만",  scores: { normal: 3, black: 2 } },
      { text: "📌 아예 안 하거나 완전 개인적으로",   scores: { black: 2, 'high-white': 2 } }
    ]
  },
  {
    text: "나는 어떤 순간 가장 나답다고 느끼나요?",
    options: [
      { text: "🤗 소중한 사람과 따뜻하게 있을 때",  scores: { 'high-white': 3, normal: 2 } },
      { text: "🎯 뭔가에 완전히 집중하고 있을 때",  scores: { black: 3, oreo: 2 } },
      { text: "🌈 아무것도 신경 쓰지 않고 자유로울 때", scores: { pied: 3, ringtail: 2 } },
      { text: "💫 새로운 감각이나 경험을 할 때",     scores: { lucistic: 3, dalmatian: 1 } }
    ]
  },
  {
    text: "내가 무심코 하는 습관은?",
    options: [
      { text: "📖 관심 있는 분야 파고들기",          scores: { mask: 3, black: 2 } },
      { text: "🎵 노래 흥얼거리거나 리듬 타기",      scores: { dalmatian: 3, normal: 1 } },
      { text: "✍️ 생각이나 감정 기록하기",           scores: { lucistic: 3, 'high-white': 2 } },
      { text: "🤔 혼자서 시뮬레이션 해보기",         scores: { oreo: 3, pied: 1 } }
    ]
  },
  {
    text: "힘들 때 나를 일으키는 건?",
    options: [
      { text: "💪 '이 정도는 해낼 수 있어' 자기 다짐", scores: { black: 3, oreo: 2 } },
      { text: "🤗 주변 사람의 따뜻한 말 한마디",    scores: { 'high-white': 3, normal: 2 } },
      { text: "🌱 새로운 것에 집중하며 전환",        scores: { pied: 3, dalmatian: 2 } },
      { text: "🎶 좋아하는 음악이나 콘텐츠",         scores: { lucistic: 3, mask: 2 } }
    ]
  },
  {
    text: "나를 화나게 하는 건?",
    options: [
      { text: "😠 배신감이나 신뢰 깨짐",             scores: { normal: 3, 'high-white': 2 } },
      { text: "😤 불합리하거나 불공평한 상황",       scores: { black: 3, oreo: 2 } },
      { text: "😒 개성이나 다양성을 무시할 때",      scores: { pied: 3, ringtail: 2 } },
      { text: "😶 나를 오해하거나 편견을 가질 때",  scores: { mask: 3, lucistic: 2 } }
    ]
  },
  {
    text: "내가 선택한다면?",
    options: [
      { text: "🌲 울창한 숲 속의 오두막",            scores: { normal: 3, lucistic: 2 } },
      { text: "🌊 파도 소리 들리는 오션뷰",          scores: { pied: 3, dalmatian: 2 } },
      { text: "🏙️ 야경 보이는 시티뷰 펜트하우스",   scores: { black: 3, mask: 2 } },
      { text: "🌸 꽃밭 한가운데 아기자기한 집",      scores: { 'high-white': 3, ringtail: 1 } }
    ]
  }
];



/* ============================================================
   2-1. 개그성 질문 풀 (10개)
   - 일반 질문 3번~9번 사이에 이 배열에서 랜덤 2개만 삽입됩니다.
   - 점수 영향은 최소화해서 흐름을 해치지 않도록 구성
   ============================================================ */
const FUNNY_QUESTIONS = [
  {
    text: "갑자기 다람쥐가 말을 걸어온다면?",
    options: [
      { text: "😱 일단 도망부터",                           scores: { pied: 2, normal: 1 } },
      { text: "🤝 악수하고 자기소개 함",                    scores: { dalmatian: 2, 'high-white': 1 } },
      { text: "📱 영상 찍어서 SNS 올림",                   scores: { ringtail: 2, oreo: 1 } },
      { text: "💬 \"어… 반가워요\" 하고 대화 시도",         scores: { mask: 2, lucistic: 1 } }
    ]
  },
  {
    text: "피그미다람쥐가 내 핸드폰을 훔쳐갔다. 나는?",
    options: [
      { text: "🏃 전력 질주로 추격",                        scores: { dalmatian: 2, black: 1 } },
      { text: "😮 그냥 멍하니 구경함",                      scores: { lucistic: 2, mask: 1 } },
      { text: "🍪 간식으로 협상 시도",                      scores: { 'high-white': 2, normal: 1 } },
      { text: "🤷 어차피 비번도 모르겠지…",                 scores: { pied: 2, oreo: 1 } }
    ]
  },
  {
    text: "내 이불 속에서 다람쥐를 발견했다. 반응은?",
    options: [
      { text: "😴 \"같이 자도 돼\" 하고 다시 잠",           scores: { 'high-white': 2, normal: 1 } },
      { text: "😤 당장 퇴거 조치",                          scores: { black: 2, oreo: 1 } },
      { text: "📸 인생샷 먼저 찍고 생각함",                 scores: { ringtail: 2, dalmatian: 1 } },
      { text: "🤔 이게 현실인지 꿈인지 확인부터",           scores: { mask: 2, lucistic: 1 } }
    ]
  },
  {
    text: "피그미다람쥐가 내 도시락을 먹고 있다. 어떻게 하지?",
    options: [
      { text: "😭 같이 먹자…(포기)",                        scores: { 'high-white': 2, normal: 1 } },
      { text: "😤 당장 빼앗음",                             scores: { black: 2, oreo: 1 } },
      { text: "🍱 새 도시락 사러 감",                       scores: { pied: 2, dalmatian: 1 } },
      { text: "📱 영상 찍고 유튜브 올림",                   scores: { ringtail: 2, mask: 1 } }
    ]
  },
  {
    text: "다람쥐가 내 이름을 부른다면 뭐라고 부를 것 같아?",
    options: [
      { text: "🌿 \"야, 착한 애\"",                          scores: { normal: 2, 'high-white': 1 } },
      { text: "✨ \"오, 인싸\"",                             scores: { dalmatian: 2, ringtail: 1 } },
      { text: "🎭 \"저기… 당신\"",                          scores: { mask: 2, lucistic: 1 } },
      { text: "🖤 \"…(그냥 눈빛으로)\"",                    scores: { black: 2, oreo: 1 } }
    ]
  },
  {
    text: "피그미다람쥐와 1:1 달리기 시합, 결과는?",
    options: [
      { text: "🏆 당연히 내가 이김 (자신만만)",             scores: { black: 2, dalmatian: 1 } },
      { text: "🐿 다람쥐가 이김 (인정함)",                  scores: { normal: 2, 'high-white': 1 } },
      { text: "🤝 비겼다고 우김",                           scores: { pied: 2, ringtail: 1 } },
      { text: "😅 출발 전에 넘어짐",                        scores: { lucistic: 2, mask: 1 } }
    ]
  },
  {
    text: "다람쥐가 내 카드로 쇼핑을 한다면 뭘 살 것 같아?",
    options: [
      { text: "🌰 도토리 대량 구매",                        scores: { normal: 2, 'high-white': 1 } },
      { text: "👟 러닝화 (발에 맞는 사이즈로)",             scores: { dalmatian: 2, ringtail: 1 } },
      { text: "🕶️ 선글라스 (폼나려고)",                    scores: { black: 2, mask: 1 } },
      { text: "🎨 취미용품 한가득",                         scores: { lucistic: 2, pied: 1 } }
    ]
  },
  {
    text: "피그미다람쥐가 내 회의에 난입했다. 상사 반응은?",
    options: [
      { text: "😂 분위기 풀려서 오히려 좋음",               scores: { dalmatian: 2, pied: 1 } },
      { text: "😱 초긴장… 어떻게 수습하지",                 scores: { oreo: 2, normal: 1 } },
      { text: "📸 상사가 먼저 사진 찍음",                   scores: { ringtail: 2, 'high-white': 1 } },
      { text: "🤷 어차피 내 발표보다 다람쥐가 낫겠지",      scores: { mask: 2, lucistic: 1 } }
    ]
  },
  {
    text: "다람쥐에게 한 마디 할 수 있다면?",
    options: [
      { text: "🥺 \"제발 나 좀 좋아해줘\"",                 scores: { 'high-white': 2, normal: 1 } },
      { text: "😤 \"왜 이렇게 귀여운 거야 (화남)\"",        scores: { dalmatian: 2, ringtail: 1 } },
      { text: "🧐 \"너 모프가 뭐야?\"",                     scores: { mask: 2, oreo: 1 } },
      { text: "😎 \"우리 잘 지내보자\"",                    scores: { black: 2, pied: 1 } }
    ]
  },
  {
    text: "피그미다람쥐가 내 방에서 하룻밤 자고 갔다. 흔적은?",
    options: [
      { text: "🌰 도토리가 침대 밑에 숨겨져 있음",          scores: { normal: 2, 'high-white': 1 } },
      { text: "💅 내 립밥이 없어짐",                        scores: { ringtail: 2, pied: 1 } },
      { text: "📱 셀카가 수십 장 찍혀 있음",                scores: { dalmatian: 2, oreo: 1 } },
      { text: "🕵️ 아무 흔적도 없음 (미스터리)",            scores: { mask: 2, black: 1 } }
    ]
  }
];

/* ============================================================
   3. 앱 상태 변수
   ============================================================ */
var currentQuestions = []; // 이번 회차에 뽑힌 10개 질문
var currentIndex = 0;      // 현재 진행 중인 질문 인덱스
var scores = {};           // 모프별 누적 점수 { morphId: number }
var quizStartTime = null;  // 테스트 시작 시각 (소요 시간 측정용)




/* ============================================================
   3-1. GA4 이벤트 추적 헬퍼
   ---------------------------------------------------------------
   GA4에서 확인할 수 있는 커스텀 이벤트 목록:

   이벤트명               | 설명
   ----------------------|-------------------------------------
   quiz_start            | 테스트 시작 버튼 클릭
   quiz_complete         | 10문항 완료 (결과 도달)
   quiz_retry            | 다시 테스트 버튼 클릭
   result_view           | 결과 모프 확인 (morph_name 파라미터)
   share_link_copy       | 링크 복사 버튼 클릭
   cta_click             | CTA 카드 클릭 (destination 파라미터)

   GA4 콘솔 확인 경로:
   - 실시간 확인  : 보고서 → 실시간
   - 이벤트 목록  : 보고서 → 참여 → 이벤트
   - 버튼별 상세  : 탐색 → 맞춤 보고서 (event_name + 파라미터)
   ============================================================ */
function trackEvent(eventName, params = {}) {
  // GA4 gtag 미로드 환경(로컬 테스트 등)에서도 오류 없이 동작
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  } else {
    // 로컬 개발 환경에서는 콘솔로 확인
    console.log('[GA4 이벤트]', eventName, params);
  }
}

/* ============================================================
   4. 초기화 함수
   DOMContentLoaded 시 실행
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderMorphGrid();  // 시작 화면 모프 그리드 렌더
  animateCounter();   // 참여자 수 카운터 애니메이션
});


/* ============================================================
   5. 참여자 카운터 애니메이션
   숫자가 올라가며 표시 → 실시간처럼 보이는 효과
   ============================================================ */
function animateCounter() {
  const el = document.getElementById('counter-num');
  const base = 1284;
  const extra = Math.floor(Math.random() * 50); // 방문마다 조금씩 다른 숫자
  const target = base + extra;
  let current = target - 30;

  const timer = setInterval(() => {
    current += 2;
    el.textContent = current.toLocaleString();
    if (current >= target) {
      el.textContent = target.toLocaleString();
      clearInterval(timer);
    }
  }, 50);
}


/* ============================================================
   6. 모프 그리드 렌더 (시작 화면)
   MORPHS 배열을 순회해 .morph-chip 요소 생성
   ============================================================ */
function renderMorphGrid() {
  const grid = document.getElementById('morphGrid');
  grid.innerHTML = MORPHS.map(m =>
    `<div class="morph-chip">
      <span class="emoji">${m.emoji}</span>
      ${m.name}
    </div>`
  ).join('');
}


/* ============================================================
   7. 퀴즈 시작
   - 점수 초기화
   - 30개 질문 중 랜덤 10개 추출
   - 시작 화면 → 퀴즈 화면 전환
   ============================================================ */
function startQuiz() {
  // 점수 초기화
  MORPHS.forEach(m => { scores[m.id] = 0; });

  // 일반 질문 랜덤 셔플 후 8개 추출
  const shuffledNormal = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5);
  const normalPick = shuffledNormal.slice(0, 8);

  // 개그 질문 랜덤 셔플 후 2개 추출
  // ※ FUNNY_QUESTIONS 배열에서 매번 랜덤 2개를 뽑아 3번~9번 위치(index 2~8) 사이에 삽입
  const shuffledFunny = [...FUNNY_QUESTIONS].sort(() => Math.random() - 0.5);
  const funnyPick = shuffledFunny.slice(0, 2);

  // 삽입 위치: index 2~8 중 겹치지 않는 2곳 랜덤 선택
  const insertPositions = [];
  while (insertPositions.length < 2) {
    const pos = Math.floor(Math.random() * 7) + 2; // 2~8
    if (!insertPositions.includes(pos)) insertPositions.push(pos);
  }
  insertPositions.sort((a, b) => a - b); // 오름차순 정렬

  // 8개 배열에 개그 질문 2개를 해당 위치에 끼워넣기
  const base = [...normalPick];
  base.splice(insertPositions[0], 0, funnyPick[0]);
  base.splice(insertPositions[1] + 1, 0, funnyPick[1]); // 앞에 하나 끼워서 +1 보정

  currentQuestions = base; // 최종 10개
  currentIndex = 0;

  // GA4: 테스트 시작 이벤트
  quizStartTime = Date.now();
  trackEvent('quiz_start');

  // 화면 전환
  document.getElementById('start-section').style.display = 'none';
  document.getElementById('quiz-section').style.display = 'block';

  renderQuestion();
}


/* ============================================================
   8. 질문 렌더
   currentIndex에 해당하는 질문을 화면에 표시
   - 답변 순서도 랜덤으로 섞어 매번 다르게
   ============================================================ */
function renderQuestion() {
  const q = currentQuestions[currentIndex];

  // 질문 번호 / 본문 / 진행도 텍스트 업데이트
  document.getElementById('q-num').textContent = `Q${currentIndex + 1}`;
  document.getElementById('q-text').textContent = q.text;
  document.getElementById('progress-count').textContent = `${currentIndex + 1} / 10`;

  // 프로그레스 바 너비 업데이트 (10% 단위)
  document.getElementById('progress-fill').style.width = `${(currentIndex + 1) * 10}%`;

  // 답변 옵션 랜덤 셔플
  const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
  const optionsEl = document.getElementById('q-options');
  optionsEl.innerHTML = '';

  // 답변 버튼 생성 및 이벤트 등록
  shuffledOptions.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.text;
    btn.addEventListener('click', () => selectOption(btn, opt.scores, optionsEl));
    optionsEl.appendChild(btn);
  });

  // 카드 등장 애니메이션 재트리거
  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  card.offsetHeight; // reflow 강제 (애니메이션 리셋용)
  card.style.animation = 'slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
}


/* ============================================================
   9. 답변 선택 처리
   - 선택된 답변의 scores를 누적
   - 350ms 후 다음 질문 또는 로딩 화면으로 이동
   ============================================================ */
function selectOption(btn, optionScores, container) {
  // 다른 버튼 선택 해제, 현재 버튼 선택 표시
  container.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  // 점수 누적
  Object.entries(optionScores).forEach(([morphId, val]) => {
    if (scores[morphId] !== undefined) {
      scores[morphId] += val;
    }
  });

  // 잠깐 선택 효과 보여준 후 다음 단계로
  setTimeout(() => {
    currentIndex++;
    if (currentIndex < 10) {
      renderQuestion();       // 다음 질문
    } else {
      showLoading();          // 10문항 완료 → 로딩
    }
  }, 350);
}


/* ============================================================
   10. 로딩 화면
   퀴즈 완료 후 2.2초간 "분석 중" 연출 → 결과 표시
   ============================================================ */
function showLoading() {
  // GA4: 10문항 완료 이벤트 (소요 시간 함께 기록)
  const elapsed = quizStartTime ? Math.round((Date.now() - quizStartTime) / 1000) : null;
  trackEvent('quiz_complete', {
    time_spent_sec: elapsed  // GA4 탐색 보고서에서 평균 소요시간 확인 가능
  });

  document.getElementById('quiz-section').style.display = 'none';
  document.getElementById('loading-section').style.display = 'block';
  setTimeout(showResult, 2200);
}


/* ============================================================
   11. 결과 화면
   - 가장 높은 점수의 모프를 결과로 선정
   - 모프별 배경색, 텍스트 색 적용
   - 결과 데이터 DOM에 삽입
   ============================================================ */
function showResult() {
  // 점수 최고인 모프 찾기
  const topMorphId = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])[0][0];
  const morph = MORPHS.find(m => m.id === topMorphId);

  // 화면 전환
  document.getElementById('loading-section').style.display = 'none';
  document.getElementById('result-section').style.display = 'block';

  // 모프별 결과 헤더 배경색 정의
  const bgColors = {
    normal:       '#F0F7EC',
    ringtail:     '#EEF0FF',
    pied:         '#F5F0FF',
    oreo:         '#F0F0F0',
    dalmatian:    '#FFF8E8',
    mask:         '#EEF4F0',
    'high-white': '#F8F8FF',
    lucistic:     '#FFF5E0',
    black:        '#2A2A2A'  // 블랙 모프는 다크 배경
  };

  // 다크 배경일 때 텍스트를 흰색으로
  const darkMorphs = { black: true };

  // 결과 헤더 배경 적용
  const header = document.getElementById('result-header');
  header.style.background = bgColors[morph.id] || '#FFF';

  // 블랙 모프 등 다크 배경일 때 텍스트 색 조정
  if (darkMorphs[morph.id]) {
    header.style.color = 'white';
    header.querySelector('.result-label').style.color = 'rgba(255,255,255,0.7)';
    header.querySelector('.result-name').style.color = 'white';
    header.querySelector('.result-name-en').style.color = 'rgba(255,255,255,0.6)';
  }

  // 결과 데이터 삽입
  document.getElementById('res-emoji').textContent    = morph.emoji;
  document.getElementById('res-name').textContent     = morph.name + ' 모프';
  document.getElementById('res-name-en').textContent  = morph.nameEn + ' Morph';
  document.getElementById('res-tagline').textContent  = morph.tagline;
  // 모프 이미지 렌더링
  // morph.image에 실제 사진 URL이 있을 경우 표시, 없으면 이모지 영역만 표시
  const imgEl = document.getElementById('res-image');
  if (imgEl) {
    if (morph.image) {
      imgEl.innerHTML = `
        <img src="${morph.image}"
             alt="${morph.name} 모프 이미지"
             onerror="this.parentElement.style.display='none'"
             loading="lazy">
        <div class="res-image-caption">${morph.name} 모프</div>
      `;
      // ↑ onerror: 이미지 로드 실패 시 영역 자동 숨김
    } else {
      imgEl.style.display = 'none';
    }
  }

  document.getElementById('res-desc').textContent     = morph.desc;
  document.getElementById('res-why').textContent      = morph.why;
  document.getElementById('res-compat').textContent   = morph.compat;

  // 특징 칩 렌더
  const traitsEl = document.getElementById('res-traits');
  traitsEl.innerHTML = morph.traits
    .map(t => `<span class="trait-chip">${t}</span>`)
    .join('');

  // GA4: 결과 모프 확인 이벤트 (어떤 모프가 많이 나오는지 파악 가능)
  trackEvent('result_view', {
    morph_name: morph.name,   // GA4 이벤트 파라미터로 모프별 집계 가능
    morph_id:   morph.id
  });

  // 공유 함수에서 사용할 수 있도록 전역에 저장
  window.currentMorph = morph;

  // 후킹 멘트 랜덤 렌더
  renderHookMessage();

  // 상단으로 스크롤
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



/* ============================================================
   11-1. 후킹 멘트 (결과 화면 하단 랜덤 출력)
   매 결과마다 6개 중 하나가 랜덤으로 표시됩니다.
   ============================================================ */
const HOOK_MESSAGES = [
  {
    text: "이 모프 실제로 어떻게 생겼는지 궁금하지 않아요?",
    sub: "텍스트로는 다 못 담아요. 실물은 인스타에서 확인하세요 📷",
    cta: "인스타 바로가기",
    link: "https://www.instagram.com/__dragon_train?igsh=MXc0ZGpla2RtbDAyOA==",
    type: "insta"
  },
  {
    text: "결과가 신기했다면, 진짜 피그미다람쥐는 더 신기해요",
    sub: "실물 영상이랑 사진 가득해요. 한번만 봐도 반해요 🐿",
    cta: "실물 구경하기",
    link: "https://www.instagram.com/__dragon_train?igsh=MXc0ZGpla2RtbDAyOA==",
    type: "insta"
  },
  {
    text: "구매 아니어도 괜찮아요. 궁금한 거 있으면 편하게 물어보세요 💬",
    sub: "가격, 사육 난이도, 모프 차이… 뭐든 물어볼 수 있어요",
    cta: "오픈채팅 입장하기",
    link: "https://open.kakao.com/o/g6KVWGzb",
    type: "kakao"
  },

  {
    text: "이 모프… 실제로 키우면 어떨까 상상해봤나요?",
    sub: "입양 전 궁금한 건 커뮤니티에서 경험자한테 바로 물어볼 수 있어요",
    cta: "입양 고민 나누기",
    link: "https://open.kakao.com/o/g6KVWGzb",
    type: "kakao"
  },
  {
    text: "텍스트로는 다 못 담아요. 실물은 인스타에서 확인하세요 📷",
    sub: "직접 보면 테스트 결과가 왜 나왔는지 더 실감나요",
    cta: "인스타 구경하기",
    link: "https://www.instagram.com/__dragon_train?igsh=MXc0ZGpla2RtbDAyOA==",
    type: "insta"
  }
];

/* 후킹 멘트 렌더 함수 */
function renderHookMessage() {
  const el = document.getElementById('hook-message');
  if (!el) return;

  // 6개 중 랜덤 1개 선택
  const msg = HOOK_MESSAGES[Math.floor(Math.random() * HOOK_MESSAGES.length)];

  // 타입별 색상 설정
  const isKakao = msg.type === 'kakao';
  const btnBg    = isKakao ? '#FEE500' : 'linear-gradient(135deg, #f09433, #dc2743)';
  const btnColor = isKakao ? '#3C1E1E' : 'white';
  const iconEl   = isKakao ? '💬' : '📷';

  el.innerHTML = `
    <div class="hook-icon">${iconEl}</div>
    <div class="hook-text">${msg.text}</div>
    <div class="hook-sub">${msg.sub}</div>
    <a href="${msg.link}" target="_blank" class="hook-btn"
       style="background:${btnBg}; color:${btnColor};"
       onclick="trackEvent('cta_click', { destination: 'hook_${msg.type}', label: '${msg.cta}' })">
      ${msg.cta} →
    </a>
  `;
}

/* ============================================================
   12. 카카오톡 공유
   Kakao.Share SDK 사용
   실패 시 링크 복사로 자동 폴백
   ※ 배포 전 'YOUR_APP_KEY'를 실제 카카오 앱 키로 교체하세요.
      https://developers.kakao.com 에서 발급 (무료)
   ============================================================ */
function shareKakao() {
  const morph = window.currentMorph;
  if (!morph) return;

  try {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('edf3f2cbccf129e4d64884c1aa4dff54'); // 카카오 JavaScript 키
    }

    // 모프별 이미지 URL 생성
    // ※ pygmytest.com 도메인 기준 절대경로로 변환 (카카오 크롤러는 절대경로 필요)
    const morphImageUrl = `https://pygmytest.com/${morph.image}`;

    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `나는 ${morph.name} 모프! ${morph.emoji}`,
        description: `${morph.tagline}\n피그미다람쥐 모프 테스트에서 결과 확인 👉`,
        imageUrl: morphImageUrl, // 모프별 실제 사진으로 표시
        link: {
          mobileWebUrl: 'https://pygmytest.com',
          webUrl: 'https://pygmytest.com',
        },
      },
      buttons: [
        {
          title: '나도 테스트하기',
          link: {
            mobileWebUrl: 'https://pygmytest.com',
            webUrl: 'https://pygmytest.com',
          },
        },
      ],
    });
  } catch (e) {
    // SDK 미로드 또는 오류 시 링크 복사로 대체
    console.warn('Kakao SDK 오류, 링크 복사로 대체:', e);
    copyLink();
  }
}


/* ============================================================
   13. 링크 복사
   결과 + URL을 텍스트로 클립보드에 복사
   navigator.clipboard 미지원 환경도 호환
   ============================================================ */
function copyLink() {
  const morph = window.currentMorph;

  // GA4: 링크 복사 이벤트
  trackEvent('share_link_copy', {
    morph_name: morph ? morph.name : 'unknown'
  });
  let text = `나는 피그미다람쥐 ${morph ? morph.name + ' 모프! ' + morph.emoji : ''}`;
  text += `\n${morph ? morph.tagline : ''}\n\n너도 테스트해봐 👉 https://pygmytest.com`;

  if (navigator.clipboard) {
    // 최신 브라우저 (Clipboard API)
    navigator.clipboard.writeText(text).then(() => {
      showToast('📋 공유 문구가 복사됐어요!');
    });
  } else {
    // 구형 브라우저 폴백 (execCommand)
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('📋 공유 문구가 복사됐어요!');
  }
}


/* ============================================================
   14. 다시 테스트
   점수 초기화 후 퀴즈 다시 시작 (매번 다른 10문항)
   ============================================================ */
function retryQuiz() {
  // GA4: 다시 테스트 이벤트
  trackEvent('quiz_retry', {
    morph_name: window.currentMorph ? window.currentMorph.name : 'unknown'
  });

  scores = {};
  document.getElementById('result-section').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  startQuiz();
}


/* ============================================================
   15. 토스트 알림
   하단에 잠깐 표시되는 피드백 메시지
   ============================================================ */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
