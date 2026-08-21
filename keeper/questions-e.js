export const QUESTIONS_E = [
  {
    id: 'secret-nickname', category: 'fun', kicker: '비밀 애칭', text: '아무도 없을 때 피그미를 부르는 나만의 애칭 스타일은?', hint: '평소 말투와 가장 가까운 것을 골라주세요.',
    options: [
      { text: '행동이나 표정에서 따온 관찰형 별명', scores: { observer: 3, recorder: 2, companion: 1 } },
      { text: '매일 달라지는 귀엽고 다정한 애칭', scores: { companion: 3, naturalist: 2, observer: 1 } },
      { text: '짧고 알아듣기 쉬운 한 가지 이름', scores: { architect: 3, strategist: 2, companion: 1 } },
      { text: '모프나 특징을 살린 의미 있는 이름', scores: { strategist: 3, recorder: 2, observer: 1 } }
    ]
  },
  {
    id: 'late-night-snack', category: 'personality', kicker: '야식의 유혹', text: '피그미가 간식통 소리에만 번개처럼 나타난다면 나는?', hint: '귀여움과 원칙 사이에서 골라보세요.',
    options: [
      { text: '반응 속도가 신기해서 몇 번 더 조용히 확인해본다.', scores: { observer: 3, recorder: 2, naturalist: 1 } },
      { text: '오늘 몫 안에서 아주 작은 간식을 건넨다.', scores: { companion: 3, strategist: 2, observer: 1 } },
      { text: '간식통 위치를 바꿔 소리만으로 기대하지 않게 한다.', scores: { architect: 3, strategist: 2, naturalist: 1 } },
      { text: '스스로 찾아 먹을 수 있는 탐색 놀이로 바꿔준다.', scores: { naturalist: 3, architect: 2, companion: 1 } }
    ]
  },
  {
    id: 'weekend-vlog', category: 'fun', kicker: '피그미 브이로그', text: '우리 피그미가 하루 브이로그를 찍는다면 가장 많이 나올 장면은?', hint: '실제 일상과 상상을 섞어 골라도 좋아요.',
    options: [
      { text: '구석구석 냄새 맡으며 집안을 순찰하는 장면', scores: { observer: 3, naturalist: 2, strategist: 1 } },
      { text: '집사 손과 간식 사이에서 행복해하는 장면', scores: { companion: 3, observer: 2, naturalist: 1 } },
      { text: '완벽한 동선으로 은신처를 오가는 장면', scores: { architect: 3, strategist: 2, observer: 1 } },
      { text: '아무도 예상 못 한 곳을 개척하는 장면', scores: { naturalist: 3, strategist: 2, companion: 1 } }
    ]
  },
  {
    id: 'tiny-complaint', category: 'personality', kicker: '작은 항의', text: '청소 후 피그미가 바뀐 배치를 못마땅해하는 것 같다면?', hint: '표정만 살짝 시무룩한 상황입니다.',
    options: [
      { text: '어느 지점에서 망설이는지 먼저 지켜본다.', scores: { observer: 3, naturalist: 2, recorder: 1 } },
      { text: '익숙한 물건을 가까이 두고 부드럽게 안심시킨다.', scores: { companion: 3, architect: 2, observer: 1 } },
      { text: '기존 동선과 비슷하게 핵심 구조를 다시 조정한다.', scores: { architect: 3, strategist: 2, naturalist: 1 } },
      { text: '안전하다면 새 배치를 탐색할 시간을 충분히 준다.', scores: { naturalist: 3, observer: 2, companion: 1 } }
    ]
  },
  {
    id: 'keeper-movie', category: 'fun', kicker: '한 편의 영화', text: '피그미와 나의 일상을 영화로 만든다면 어울리는 장르는?', hint: '가장 보고 싶은 분위기를 골라주세요.',
    options: [
      { text: '작은 단서를 따라가는 관찰 다큐멘터리', scores: { observer: 3, recorder: 2, strategist: 1 } },
      { text: '매일 마음이 따뜻해지는 가족 코미디', scores: { companion: 3, naturalist: 2, observer: 1 } },
      { text: '완벽한 집을 만들어가는 리모델링 예능', scores: { architect: 3, strategist: 2, companion: 1 } },
      { text: '새로운 길을 찾아 나서는 숲속 모험물', scores: { naturalist: 3, observer: 2, strategist: 1 } }
    ]
  },
  {
    id: 'surprise-visitor', category: 'personality', kicker: '갑작스러운 손님', text: '친한 친구가 피그미를 보고 싶다며 갑자기 찾아온다면?', hint: '친구는 조심스럽게 행동할 사람입니다.',
    options: [
      { text: '피그미 반응을 보며 멀리서 조용히 소개한다.', scores: { observer: 3, naturalist: 2, companion: 1 } },
      { text: '주의사항을 알려주고 편안한 분위기에서 함께 본다.', scores: { companion: 3, strategist: 2, observer: 1 } },
      { text: '케이지 주변을 정돈하고 안전한 관찰 위치를 정한다.', scores: { architect: 3, strategist: 2, recorder: 1 } },
      { text: '숨고 싶어 하면 오늘은 보여주지 않는 편을 택한다.', scores: { naturalist: 3, observer: 2, companion: 1 } }
    ]
  },
  {
    id: 'dream-gift', category: 'fun', kicker: '선물 고르기', text: '피그미가 집사에게 선물을 줄 수 있다면 받고 싶은 것은?', hint: '현실성은 잠시 내려놓으세요.',
    options: [
      { text: '오늘 무엇을 했는지 알 수 있는 작은 단서 하나', scores: { observer: 3, recorder: 2, strategist: 1 } },
      { text: '먼저 손 위에 올라와 주는 다정한 10초', scores: { companion: 3, observer: 2, naturalist: 1 } },
      { text: '제자리에 곱게 놓아둔 케이지 소품', scores: { architect: 3, recorder: 2, companion: 1 } },
      { text: '숲에서 발견한 신기한 나뭇조각', scores: { naturalist: 3, strategist: 2, observer: 1 } }
    ]
  },
  {
    id: 'lost-treat', category: 'personality', kicker: '사라진 간식', text: '분명 넣어둔 간식이 순식간에 사라졌다면 가장 먼저 드는 생각은?', hint: '피그미는 태연한 얼굴을 하고 있습니다.',
    options: [
      { text: '어디에 숨겼는지 행동을 따라가 보고 싶다.', scores: { observer: 3, naturalist: 2, recorder: 1 } },
      { text: '잘 먹었으면 됐지 싶어 귀엽게 바라본다.', scores: { companion: 3, naturalist: 2, observer: 1 } },
      { text: '끼일 만한 틈이나 위험한 저장 장소부터 확인한다.', scores: { architect: 3, strategist: 2, observer: 1 } },
      { text: '나중에 찾을 가능성까지 생각해 다음 급여량을 조절한다.', scores: { strategist: 3, recorder: 2, architect: 1 } }
    ]
  },
  {
    id: 'rainy-day', category: 'fun', kicker: '비 오는 날', text: '창밖에 비가 오는 조용한 밤, 가장 어울리는 피그미 시간은?', hint: '기분에 맞는 장면을 골라주세요.',
    options: [
      { text: '작은 움직임과 빗소리를 함께 오래 바라보기', scores: { observer: 3, naturalist: 2, companion: 1 } },
      { text: '낮은 목소리로 말을 걸며 간식 나누기', scores: { companion: 3, observer: 2, naturalist: 1 } },
      { text: '포근한 은신처와 온도를 다시 한번 살펴보기', scores: { architect: 3, recorder: 2, companion: 1 } },
      { text: '새 탐색 코스를 만들어 자유롭게 놀게 하기', scores: { naturalist: 3, architect: 2, strategist: 1 } }
    ]
  },
  {
    id: 'one-word', category: 'personality', kicker: '한 단어 소개', text: '우리 피그미를 딱 한 단어로 소개한다면 무엇에 가까울까?', hint: '개체의 실제 모습이나 나의 시선을 골라주세요.',
    options: [
      { text: '수수께끼', scores: { observer: 3, recorder: 2, strategist: 1 } },
      { text: '가족', scores: { companion: 3, observer: 2, naturalist: 1 } },
      { text: '완벽주의자', scores: { architect: 3, strategist: 2, recorder: 1 } },
      { text: '탐험가', scores: { naturalist: 3, observer: 2, companion: 1 } }
    ]
  }
];
