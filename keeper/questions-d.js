// allow: SIZE_OK - 순수 문항 데이터 표이며 실행 로직을 포함하지 않습니다.
export const QUESTIONS_D = [
  {
    id: 'midnight-roommate', category: 'fun', kicker: '한밤의 룸메이트',
    text: '자다 깼는데 피그미가 케이지 앞에서 빤히 보고 있다면?',
    hint: '가장 나다운 첫 반응을 골라주세요.',
    options: [
      { text: '왜 그러는지 잠시 가만히 눈을 맞추며 관찰한다.', scores: { observer: 3, companion: 2, naturalist: 1 } },
      { text: '작게 인사하고 간식 한 조각으로 야간 회담을 연다.', scores: { companion: 3, naturalist: 2, observer: 1 } },
      { text: '물과 온도, 주변 소음에 달라진 것이 없는지 확인한다.', scores: { architect: 3, observer: 2, strategist: 1 } },
      { text: '오늘따라 왜 나왔을지 몇 가지 가능성을 머릿속에 세운다.', scores: { strategist: 3, observer: 2, architect: 1 } }
    ]
  },
  {
    id: 'cage-concept', category: 'fun', kicker: '케이지 콘셉트',
    text: '피그미의 방을 취향대로 꾸민다면 가장 끌리는 콘셉트는?',
    hint: '안전 조건은 모두 충족했다고 가정합니다.',
    options: [
      { text: '움직임이 잘 보이는 깔끔한 관찰형 스튜디오', scores: { observer: 3, architect: 2, recorder: 1 } },
      { text: '숨고 오르고 탐색할 곳이 가득한 작은 숲', scores: { naturalist: 3, architect: 2, companion: 1 } },
      { text: '함께 놀기 편하고 사진도 예쁘게 나오는 아늑한 방', scores: { companion: 3, architect: 2, naturalist: 1 } },
      { text: '공간마다 목적과 동선이 또렷한 기능성 기지', scores: { strategist: 3, architect: 2, observer: 1 } }
    ]
  },
  {
    id: 'superpower', category: 'fun', kicker: '피그미 초능력',
    text: '우리 피그미에게 딱 하나의 초능력이 생긴다면 무엇이 좋을까?',
    hint: '정답 없이 취향대로 골라보세요.',
    options: [
      { text: '사람의 기분을 알아채고 먼저 다가오는 능력', scores: { companion: 3, observer: 2, naturalist: 1 } },
      { text: '어떤 미로든 순식간에 탈출하는 탐험 능력', scores: { naturalist: 3, strategist: 2, architect: 1 } },
      { text: '원하는 것을 표정으로 정확히 알려주는 능력', scores: { observer: 3, companion: 2, recorder: 1 } },
      { text: '자기 방을 스스로 완벽하게 정리하는 능력', scores: { architect: 3, strategist: 2, recorder: 1 } }
    ]
  },
  {
    id: 'ignored-toy', category: 'personality', kicker: '새 장난감',
    text: '큰맘 먹고 준비한 장난감을 피그미가 완전히 외면한다면?',
    hint: '실망한 뒤 실제로 할 법한 행동을 골라주세요.',
    options: [
      { text: '취향이 아닌가 보다 하고 어떤 놀이를 좋아하는지 다시 본다.', scores: { observer: 3, naturalist: 2, companion: 1 } },
      { text: '익숙해질 시간을 주고 위치나 높이를 조금씩 바꿔본다.', scores: { architect: 3, strategist: 2, observer: 1 } },
      { text: '간식과 함께 천천히 좋은 기억을 만들어준다.', scores: { companion: 3, naturalist: 2, strategist: 1 } },
      { text: '재료와 구조를 살펴보고 더 잘 맞는 대안을 찾아본다.', scores: { strategist: 3, architect: 2, observer: 1 } }
    ]
  },
  {
    id: 'friend-description', category: 'personality', kicker: '나의 집사 스타일',
    text: '친구가 “넌 어떤 집사야?”라고 묻는다면 가장 가까운 대답은?',
    hint: '되고 싶은 모습보다 지금 모습에 가깝게 골라주세요.',
    options: [
      { text: '말은 적어도 작은 변화는 누구보다 빨리 알아채는 집사', scores: { observer: 3, recorder: 2, companion: 1 } },
      { text: '불편한 건 못 참고 바로 환경부터 손보는 집사', scores: { architect: 3, strategist: 2, observer: 1 } },
      { text: '이름을 부르고 대화하며 가족처럼 지내는 집사', scores: { companion: 3, naturalist: 2, observer: 1 } },
      { text: '미리 찾아보고 다음 단계까지 준비해두는 집사', scores: { strategist: 3, recorder: 2, architect: 1 } }
    ]
  },
  {
    id: 'unexpected-mess', category: 'personality', kicker: '뜻밖의 대청소',
    text: '외출 직전 피그미가 케이지를 멋지게 어질러 놓았다면?',
    hint: '시간이 빠듯한 상황을 떠올려보세요.',
    options: [
      { text: '위험한 부분만 빠르게 정리하고 나머지는 돌아와서 한다.', scores: { strategist: 3, architect: 2, naturalist: 1 } },
      { text: '어떻게 어질렀는지 웃으며 보고 탐색 흔적은 조금 남겨둔다.', scores: { naturalist: 3, observer: 2, companion: 1 } },
      { text: '약속에 조금 늦더라도 원래 상태로 정돈하고 나간다.', scores: { architect: 3, recorder: 2, strategist: 1 } },
      { text: '범인을 한번 바라보고 말을 건 뒤 필요한 곳만 치운다.', scores: { companion: 3, observer: 2, strategist: 1 } }
    ]
  },
  {
    id: 'favorite-photo', category: 'fun', kicker: '최애 사진',
    text: '휴대폰 배경화면으로 고르고 싶은 피그미 사진은?',
    hint: '사진 실력보다 좋아하는 순간을 떠올려보세요.',
    options: [
      { text: '무슨 생각인지 궁금해지는 묘한 표정', scores: { observer: 3, recorder: 2, companion: 1 } },
      { text: '손 위에서 편안하게 쉬는 다정한 순간', scores: { companion: 3, naturalist: 2, observer: 1 } },
      { text: '나뭇가지를 타고 힘차게 움직이는 야생미 넘치는 모습', scores: { naturalist: 3, observer: 2, architect: 1 } },
      { text: '정성껏 꾸민 케이지가 한눈에 보이는 완벽한 한 장', scores: { architect: 3, strategist: 2, recorder: 1 } }
    ]
  },
  {
    id: 'free-evening', category: 'personality', kicker: '예상 밖의 여유',
    text: '갑자기 저녁 시간이 통째로 비었다면 피그미와 어떻게 보낼까?',
    hint: '가장 자연스럽게 손이 갈 행동을 골라주세요.',
    options: [
      { text: '불을 낮추고 평소처럼 움직이는 모습을 오래 바라본다.', scores: { observer: 3, naturalist: 2, recorder: 1 } },
      { text: '안전한 놀이 시간을 만들고 충분히 교감한다.', scores: { companion: 3, naturalist: 2, architect: 1 } },
      { text: '미뤄둔 구조물 배치나 동선을 더 편하게 손본다.', scores: { architect: 3, strategist: 2, naturalist: 1 } },
      { text: '다음 계절에 필요한 준비물을 찾아보고 계획한다.', scores: { strategist: 3, recorder: 2, architect: 1 } }
    ]
  },
  {
    id: 'lookalike', category: 'fun', kicker: '닮은 점 찾기',
    text: '우리 피그미가 나를 닮았다면 어떤 부분일 것 같아?',
    hint: '살짝 과몰입해서 골라도 좋습니다.',
    options: [
      { text: '낯선 곳에서는 조용히 분위기부터 살피는 점', scores: { observer: 3, strategist: 2, naturalist: 1 } },
      { text: '편한 사람에게는 애정 표현이 많아지는 점', scores: { companion: 3, observer: 2, naturalist: 1 } },
      { text: '내 공간은 내 방식대로 정돈되어야 마음 놓이는 점', scores: { architect: 3, recorder: 2, strategist: 1 } },
      { text: '호기심이 생기면 일단 가까이 가보는 점', scores: { naturalist: 3, observer: 2, companion: 1 } }
    ]
  },
  {
    id: 'tiny-adventure', category: 'personality', kicker: '작은 모험',
    text: '안전한 놀이 공간에서 피그미가 평소보다 멀리 탐색한다면?',
    hint: '당신의 거리 두기 방식을 골라주세요.',
    options: [
      { text: '개입하지 않고 어디까지 가는지 조용히 지켜본다.', scores: { observer: 3, naturalist: 2, strategist: 1 } },
      { text: '위험한 곳만 막고 스스로 탐색할 자유를 준다.', scores: { naturalist: 3, architect: 2, observer: 1 } },
      { text: '가까이 따라가며 부르면 돌아오는지 교감해본다.', scores: { companion: 3, observer: 2, naturalist: 1 } },
      { text: '돌아올 길과 예상 동선을 먼저 확보해둔다.', scores: { strategist: 3, architect: 2, companion: 1 } }
    ]
  }
];
