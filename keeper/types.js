export const TYPE_ORDER = ['observer', 'architect', 'companion', 'recorder', 'naturalist', 'strategist'];

export const ICONS = {
  observer: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 4.5 4.5"/><path d="M8.2 10.6h4.6M10.5 8.3v4.6"/></svg>`,
  architect: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 11.2 12 4l8.5 7.2"/><path d="M5.5 10.2V20h13v-9.8"/><path d="M9.5 20v-5.5h5V20"/><path d="M17.8 4.5v3.2"/></svg>`,
  companion: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.2S4.5 16 4.5 9.7A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 7.5 2.7C19.5 16 12 20.2 12 20.2Z"/><path d="M9 10.5h6"/></svg>`,
  recorder: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M9 3.5v-1h6v1M8.5 9h7M8.5 13h5M8.5 17h7"/></svg>`,
  naturalist: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 4.5C12 4.8 6.5 8.3 6.5 14.4c0 2.9 2 5.1 5 5.1 6.1 0 8.1-7.5 8-15Z"/><path d="M4.5 20c2.4-5.6 6.4-9.3 11.8-11.4"/></svg>`,
  strategist: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M12 6.5v5M12 11.5H6V17M12 11.5h6V17"/></svg>`
};

export const TYPES = {
  observer: {
    index: '01', name: '관찰형 연구자 집사', short: '관찰형', en: 'THE OBSERVER',
    tagline: '작은 변화도 놓치지 않는 조용한 탐구자',
    summary: '먼저 보고, 비교하고, 이유를 찾는 집사',
    description: '당신은 피그미의 행동을 바로 단정하기보다 충분히 지켜보고 맥락을 파악하는 편입니다. 활동 시간, 은신처 선택, 먹이 반응처럼 작아 보이는 변화에서도 단서를 발견하며, 개체마다 다른 패턴을 존중합니다.',
    traits: ['세밀한 관찰', '원인 탐색', '신중한 판단', '개체 차이 존중'],
    strengths: ['평소와 다른 행동을 비교적 빠르게 알아차립니다.', '성급한 환경 변경보다 관찰 근거를 먼저 모읍니다.', '개체별 행동 차이를 데이터처럼 축적하는 데 강합니다.'],
    watchouts: ['관찰만 길어져 필요한 조치가 늦어지지 않도록 기준을 정해두세요.', '모든 행동에 의미를 부여하기보다 평범한 변동도 함께 고려하세요.'],
    routine: '오늘 5분만 같은 시간대에 관찰하고, 평소와 달랐던 행동 하나와 그대로였던 행동 하나를 함께 기록해 보세요.',
    fit: '낯선 환경에 천천히 적응하거나 행동 패턴이 뚜렷한 신중한 개체와 잘 맞습니다.',
    secondaryCopy: '관찰 결과를 실제 환경 개선으로 연결할 때 당신의 강점이 더 커집니다.',
    accent: '#628a55', soft: '#edf5e9', image: '/lab/img/behavior.webp', profile: [30, 18, 12, 22, 21, 9]
  },
  architect: {
    index: '02', name: '환경설계형 집사', short: '환경형', en: 'THE ARCHITECT',
    tagline: '좋은 돌봄은 좋은 공간에서 시작된다고 믿는 사람',
    summary: '온도와 구조를 먼저 정리하는 환경 설계자',
    description: '당신은 문제를 개체 탓으로 돌리기보다 케이지 구조, 온도, 은신처, 동선처럼 환경에서 원인을 찾습니다. 피그미가 스스로 선택하고 피할 수 있는 공간을 만드는 데 관심이 많고, 안정적인 사육 조건을 유지하는 데 강합니다.',
    traits: ['환경 우선', '구조적 사고', '예방 중심', '안정성 추구'],
    strengths: ['온도·은신처·동선을 함께 보며 전체 환경을 점검합니다.', '문제가 생기기 전에 위험 요소를 줄이는 데 능합니다.', '개체가 선택할 수 있는 다양한 공간을 마련합니다.'],
    watchouts: ['환경을 자주 완벽하게 바꾸면 오히려 개체가 적응하기 어려울 수 있습니다.', '장비 수치뿐 아니라 실제 개체 반응도 같은 비중으로 보세요.'],
    routine: '케이지를 위·중간·아래 세 구역으로 나눠 온도, 은신처, 이동 동선을 한 번씩 점검해 보세요.',
    fit: '환경 변화에 민감하거나 은신처와 동선 선택이 분명한 개체와 안정적인 관계를 만들기 좋습니다.',
    secondaryCopy: '잘 설계한 공간을 꾸준히 기록하면 사육 안정성이 더욱 높아집니다.',
    accent: '#d47731', soft: '#fff0df', image: '/lab/img/readiness.webp', profile: [18, 31, 10, 21, 18, 14]
  },
  companion: {
    index: '03', name: '다정한 교감형 집사', short: '교감형', en: 'THE COMPANION',
    tagline: '기다림과 보상으로 신뢰를 쌓는 따뜻한 동반자',
    summary: '피그미의 속도에 맞춰 관계를 만드는 집사',
    description: '당신은 피그미와의 관계에서 친밀감과 신뢰를 중요하게 생각합니다. 억지로 만지기보다 간식과 기다림으로 긍정적인 경험을 만들며, 작은 반응에도 기쁨을 느끼는 따뜻한 집사입니다.',
    traits: ['다정한 접근', '신뢰 형성', '보상 중심', '감정 공감'],
    strengths: ['개체가 불편해하는 신호를 존중하며 천천히 접근합니다.', '교감 과정 자체를 즐겨 꾸준히 관계를 쌓습니다.', '긍정적 보상을 활용해 안정감을 만들어 줍니다.'],
    watchouts: ['사람과의 교감을 모든 피그미가 좋아할 것이라고 기대하지 마세요.', '귀여움 때문에 간식이나 핸들링 횟수가 과해지지 않도록 기준을 세우세요.'],
    routine: '오늘은 손을 먼저 대지 말고, 같은 위치에서 조용히 기다린 뒤 개체가 스스로 다가오면 작은 보상을 주세요.',
    fit: '사람에게 호기심을 보이거나 보상 학습에 빠르게 반응하는 개체와 좋은 케미를 만들기 쉽습니다.',
    secondaryCopy: '다정함에 관찰과 환경 기준을 더하면 더 안전한 교감이 됩니다.',
    accent: '#cc6f79', soft: '#fdecef', image: '/lab/img/compatibility.webp', profile: [15, 11, 31, 14, 23, 7]
  },
  recorder: {
    index: '04', name: '기록형 데이터 집사', short: '기록형', en: 'THE RECORDER',
    tagline: '기억보다 기록을 믿는 꾸준한 관리 실무자',
    summary: '매일의 작은 정보를 관리 자산으로 만드는 집사',
    description: '당신은 먹이, 체중, 활동, 온도처럼 반복되는 정보를 남기고 비교하는 데 익숙합니다. 느낌만으로 판단하기보다 지난 기록을 확인하고, 변화가 누적되는 과정을 통해 관리 기준을 세웁니다.',
    traits: ['꾸준한 기록', '변화 비교', '루틴 관리', '근거 중심'],
    strengths: ['장기적인 변화를 놓치지 않고 확인할 수 있습니다.', '문제가 생겼을 때 이전 상태와 비교할 자료가 남습니다.', '복수 개체나 반복되는 관리 업무를 체계적으로 운영합니다.'],
    watchouts: ['모든 항목을 기록하려다 지치지 않도록 핵심 항목을 정하세요.', '숫자에 나타나지 않는 행동과 분위기도 함께 메모해 두세요.'],
    routine: '먹이, 활동, 환경 중 가장 중요한 세 항목만 골라 오늘부터 동일한 형식으로 기록해 보세요.',
    fit: '활동량이나 체중 변화가 뚜렷하고 장기 관찰이 필요한 개체를 안정적으로 관리하는 데 강합니다.',
    secondaryCopy: '기록을 관찰과 연결하면 숫자 뒤에 있는 행동까지 이해할 수 있습니다.',
    accent: '#5b8fa3', soft: '#e8f2f5', image: '/lab/img/keeper.webp', profile: [23, 20, 12, 32, 14, 16]
  },
  naturalist: {
    index: '05', name: '자연주의형 집사', short: '자율형', en: 'THE NATURALIST',
    tagline: '개체의 선택과 본래 행동을 가장 먼저 존중하는 사람',
    summary: '덜 개입하고 더 선택하게 해주는 집사',
    description: '당신은 피그미가 자신의 속도와 방식으로 움직일 수 있도록 충분한 공간과 선택지를 주는 편입니다. 직접 통제하기보다 본래 행동이 나타날 수 있는 환경을 만들고, 불필요한 간섭을 줄이는 것을 중요하게 생각합니다.',
    traits: ['자율성 존중', '본래 행동', '낮은 개입', '선택지 제공'],
    strengths: ['개체의 거절과 회피 신호를 자연스럽게 받아들입니다.', '탐색·은신·둥지 행동이 나타날 여지를 충분히 줍니다.', '사람 중심이 아닌 개체 중심으로 환경을 바라봅니다.'],
    watchouts: ['자율성을 존중하더라도 건강 확인과 안전 점검은 미루지 마세요.', '방치와 낮은 개입은 다릅니다. 정기적인 관찰 기준을 유지하세요.'],
    routine: '은신처, 먹이 위치, 이동 경로 중 하나를 개체가 선택할 수 있도록 두 가지 옵션으로 준비해 보세요.',
    fit: '독립적이고 새로운 구조물을 천천히 탐색하는 개체, 사람보다 환경과의 상호작용을 즐기는 개체와 잘 맞습니다.',
    secondaryCopy: '자율성을 유지하면서 기록 기준을 정하면 방치 없이 자연스러운 돌봄이 가능합니다.',
    accent: '#718b62', soft: '#edf2e8', image: '/lab/img/personality.webp', profile: [20, 17, 22, 12, 32, 8]
  },
  strategist: {
    index: '06', name: '브리딩 전략가 집사', short: '전략형', en: 'THE STRATEGIST',
    tagline: '현재의 돌봄과 다음 세대까지 함께 설계하는 기획자',
    summary: '유전과 혈통, 장기 계획을 함께 보는 집사',
    description: '당신은 개체 한 마리의 현재 상태뿐 아니라 혈통, 모프, 번식 시기, 후대 기록까지 길게 바라봅니다. 계획을 세우고 결과를 비교하는 일을 좋아하며, 브리딩 과정의 책임과 기록을 중요하게 생각합니다.',
    traits: ['장기 계획', '혈통 관리', '유전 관심', '책임 브리딩'],
    strengths: ['번식 전 건강·환경·기록 조건을 함께 고려합니다.', '개체와 후대의 이력을 장기적으로 관리하려 합니다.', '감에 의존하지 않고 조합과 결과를 비교하는 데 익숙합니다.'],
    watchouts: ['모프나 결과보다 개체의 건강과 복지를 항상 우선하세요.', '계획과 다르게 나온 결과도 가치 있는 데이터로 남기세요.'],
    routine: '브리딩 후보의 건강, 연령, 혈통, 과거 기록을 한 표에 모아 아직 확인되지 않은 항목을 표시해 보세요.',
    fit: '건강·혈통 기록이 충분하고 장기적인 계획 아래 관리되는 개체와 가장 잘 맞습니다.',
    secondaryCopy: '전략에 환경과 관찰 기준을 더하면 책임 있는 브리딩 계획이 완성됩니다.',
    accent: '#806aa9', soft: '#f0ebf8', image: '/lab/img/morph.webp', profile: [17, 20, 8, 23, 9, 33]
  }
};

