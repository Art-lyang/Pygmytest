export const QUESTIONS_F = [
  {
    id: 'morning-message', category: 'fun', kicker: '아침 메시지', text: '아침마다 피그미가 문자 한 통을 보낸다면 가장 자주 올 내용은?', hint: '피그미의 시점으로 상상해보세요.',
    options: [
      { text: '어젯밤에 내가 뭘 발견했는지 궁금하지?', scores: { observer: 3, recorder: 2, naturalist: 1 } },
      { text: '일어났어? 오늘도 같이 놀자!', scores: { companion: 3, observer: 2, naturalist: 1 } },
      { text: '내 방 구조가 어제와 2cm 달라졌어.', scores: { architect: 3, recorder: 2, strategist: 1 } },
      { text: '오늘 밤에는 저쪽 끝까지 가볼 거야.', scores: { naturalist: 3, strategist: 2, observer: 1 } }
    ]
  },
  {
    id: 'failed-photo', category: 'personality', kicker: '사진 실패', text: '완벽한 순간에 찍은 사진이 전부 흔들렸다면 나는?', hint: '사진보다 기억이 더 선명한 상황입니다.',
    options: [
      { text: '어떤 움직임 때문에 흔들렸는지 사진을 다시 본다.', scores: { observer: 3, recorder: 2, strategist: 1 } },
      { text: '사진은 없어도 함께 본 순간이면 충분하다고 생각한다.', scores: { companion: 3, naturalist: 2, observer: 1 } },
      { text: '다음에는 조명과 촬영 위치를 미리 준비한다.', scores: { architect: 3, strategist: 2, recorder: 1 } },
      { text: '방해하지 않았으니 오히려 잘됐다고 웃어넘긴다.', scores: { naturalist: 3, companion: 2, observer: 1 } }
    ]
  },
  {
    id: 'cage-cafe', category: 'fun', kicker: '피그미 카페', text: '피그미가 작은 카페를 연다면 내가 맡고 싶은 역할은?', hint: '능력보다 취향으로 골라주세요.',
    options: [
      { text: '손님들의 취향을 알아채는 조용한 매니저', scores: { observer: 3, recorder: 2, companion: 1 } },
      { text: '모두를 반갑게 맞는 다정한 홀 담당', scores: { companion: 3, observer: 2, naturalist: 1 } },
      { text: '좁은 공간도 완벽하게 쓰는 인테리어 담당', scores: { architect: 3, strategist: 2, companion: 1 } },
      { text: '계절마다 새로운 메뉴를 찾는 탐험 담당', scores: { naturalist: 3, strategist: 2, observer: 1 } }
    ]
  },
  {
    id: 'sudden-freeze', category: 'personality', kicker: '갑자기 얼음', text: '놀던 피그미가 갑자기 멈춰 한 곳을 바라본다면?', hint: '위험 신호는 보이지 않는 상황입니다.',
    options: [
      { text: '시선 방향과 귀 움직임을 따라 조용히 살핀다.', scores: { observer: 3, naturalist: 2, recorder: 1 } },
      { text: '놀라지 않게 익숙한 목소리로 천천히 부른다.', scores: { companion: 3, observer: 2, naturalist: 1 } },
      { text: '빛이나 소리처럼 자극이 생긴 지점을 확인한다.', scores: { architect: 3, strategist: 2, observer: 1 } },
      { text: '스스로 다시 움직일 때까지 거리를 두고 기다린다.', scores: { naturalist: 3, observer: 2, companion: 1 } }
    ]
  },
  {
    id: 'keeper-award', category: 'fun', kicker: '집사 시상식', text: '연말 집사 시상식에서 받고 싶은 상은?', hint: '조금 자랑스러워해도 괜찮아요.',
    options: [
      { text: '작은 변화도 놓치지 않는 매의 눈 상', scores: { observer: 3, recorder: 2, strategist: 1 } },
      { text: '피그미 마음을 가장 잘 녹인 교감왕 상', scores: { companion: 3, observer: 2, naturalist: 1 } },
      { text: '가장 살기 좋은 방을 만든 금손 상', scores: { architect: 3, strategist: 2, companion: 1 } },
      { text: '본능과 자유를 존중한 자연주의 상', scores: { naturalist: 3, observer: 2, architect: 1 } }
    ]
  },
  {
    id: 'new-route', category: 'personality', kicker: '새로운 길', text: '피그미가 늘 다니던 길 대신 새로운 길을 고른다면?', hint: '안전한 케이지 안에서 벌어진 일입니다.',
    options: [
      { text: '새 길을 몇 번이나 선택하는지 흥미롭게 지켜본다.', scores: { observer: 3, recorder: 2, naturalist: 1 } },
      { text: '탐색이 즐거워 보이면 응원하듯 말을 건다.', scores: { companion: 3, naturalist: 2, observer: 1 } },
      { text: '두 길 모두 막힘없이 안전한지 다시 점검한다.', scores: { architect: 3, strategist: 2, observer: 1 } },
      { text: '더 다양한 경로를 스스로 고를 수 있게 열어준다.', scores: { naturalist: 3, architect: 2, strategist: 1 } }
    ]
  },
  {
    id: 'tiny-interview', category: 'fun', kicker: '단독 인터뷰', text: '피그미에게 질문 하나만 할 수 있다면 무엇을 묻고 싶어?', hint: '가장 궁금한 마음을 골라주세요.',
    options: [
      { text: '밤마다 혼자 있을 때 무슨 생각을 해?', scores: { observer: 3, recorder: 2, companion: 1 } },
      { text: '나와 있을 때 편하고 즐거워?', scores: { companion: 3, observer: 2, naturalist: 1 } },
      { text: '네 방에서 가장 불편한 곳은 어디야?', scores: { architect: 3, strategist: 2, companion: 1 } },
      { text: '마음대로 갈 수 있다면 어디를 탐험할래?', scores: { naturalist: 3, strategist: 2, observer: 1 } }
    ]
  },
  {
    id: 'busy-evening', category: 'personality', kicker: '정신없는 저녁', text: '유난히 바쁜 날에도 꼭 챙기고 싶은 나만의 순간은?', hint: '기본적인 급여와 안전 점검은 마친 상태입니다.',
    options: [
      { text: '평소와 다른 행동이 없는지 잠깐 지켜보는 시간', scores: { observer: 3, recorder: 2, strategist: 1 } },
      { text: '이름을 부르고 눈을 맞추며 인사하는 시간', scores: { companion: 3, observer: 2, naturalist: 1 } },
      { text: '은신처와 이동 공간을 가지런히 정돈하는 시간', scores: { architect: 3, strategist: 2, recorder: 1 } },
      { text: '방해하지 않고 자유롭게 활동하게 두는 시간', scores: { naturalist: 3, observer: 2, companion: 1 } }
    ]
  },
  {
    id: 'personality-color', category: 'fun', kicker: '성격의 색', text: '우리 피그미의 성격을 색으로 표현한다면?', hint: '모프 색이 아니라 분위기를 떠올려보세요.',
    options: [
      { text: '속을 알 수 없는 깊은 남색', scores: { observer: 3, recorder: 2, strategist: 1 } },
      { text: '보기만 해도 따뜻한 살구색', scores: { companion: 3, naturalist: 2, observer: 1 } },
      { text: '깔끔하고 안정적인 초록색', scores: { architect: 3, strategist: 2, recorder: 1 } },
      { text: '호기심이 반짝이는 노란색', scores: { naturalist: 3, observer: 2, companion: 1 } }
    ]
  },
  {
    id: 'best-compliment', category: 'personality', kicker: '최고의 칭찬', text: '다른 집사에게 들었을 때 가장 기분 좋을 칭찬은?', hint: '내가 중요하게 여기는 가치와 가까운 답을 골라주세요.',
    options: [
      { text: '개체의 작은 신호를 정말 잘 알아보시네요.', scores: { observer: 3, recorder: 2, companion: 1 } },
      { text: '피그미가 당신을 정말 편안해하는 것 같아요.', scores: { companion: 3, observer: 2, naturalist: 1 } },
      { text: '환경이 안전하면서도 정말 잘 구성되어 있어요.', scores: { architect: 3, strategist: 2, recorder: 1 } },
      { text: '피그미답게 행동할 여지가 충분해 보여요.', scores: { naturalist: 3, architect: 2, observer: 1 } }
    ]
  }
];
