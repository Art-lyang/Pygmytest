export const QUESTIONS_A = [
  {
    "kicker": "낯선 행동",
    "text": "피그미가 평소와 다른 은신처에서 잠들어 있다면?",
    "hint": "가장 먼저 하게 될 행동을 골라주세요.",
    "options": [
      {"text":"바로 바꾸지 않고 며칠간 행동 패턴을 더 지켜본다.","scores":{"observer":3,"naturalist":2,"recorder":1}},
      {"text":"온도와 은신처 위치, 내부 구조를 먼저 점검한다.","scores":{"architect":3,"observer":2,"recorder":1}},
      {"text":"불편하지 않은지 가까이에서 반응을 살피고 안심시킨다.","scores":{"companion":3,"observer":2,"naturalist":1}},
      {"text":"날짜와 위치를 기록하고 이전 수면 기록과 비교한다.","scores":{"recorder":3,"observer":2,"architect":1}}
    ]
  },
  {
    "kicker":"먹이 관리",
    "text":"평소 좋아하던 먹이를 갑자기 남겼을 때 나는?",
    "hint":"한 번의 변화가 보였다고 가정해 보세요.",
    "options":[
      {"text":"먹은 양과 다른 행동을 함께 기록해 변화가 이어지는지 본다.","scores":{"recorder":3,"observer":2,"architect":1}},
      {"text":"온도, 급수, 먹이 상태처럼 환경 조건부터 차례로 확인한다.","scores":{"architect":3,"recorder":2,"observer":1}},
      {"text":"억지로 먹이지 않고 선호하는 보상으로 반응을 부드럽게 확인한다.","scores":{"companion":3,"naturalist":2,"observer":1}},
      {"text":"평소 활동과 배변, 은신 시간을 조용히 비교 관찰한다.","scores":{"observer":3,"recorder":2,"naturalist":1}}
    ]
  },
  {
    "kicker":"케이지 구성",
    "text":"새 케이지를 꾸밀 때 가장 먼저 생각하는 것은?",
    "hint":"예산은 충분하다고 가정합니다.",
    "options":[
      {"text":"온도 구배와 이동 동선, 은신처 배치를 먼저 그려본다.","scores":{"architect":3,"strategist":2,"recorder":1}},
      {"text":"가지와 은신처를 다양하게 둬 스스로 선택하게 한다.","scores":{"naturalist":3,"architect":2,"observer":1}},
      {"text":"사람과 안전하게 교감할 수 있는 접근 지점을 만든다.","scores":{"companion":3,"architect":2,"naturalist":1}},
      {"text":"관리하기 쉽게 급여·청소·온도 기록 위치를 정한다.","scores":{"recorder":3,"architect":2,"strategist":1}}
    ]
  },
  {
    "kicker":"야간 관찰",
    "text":"한밤중 피그미가 예상보다 오래 활동하고 있다면?",
    "hint":"건강 이상이 뚜렷하지 않은 상황입니다.",
    "options":[
      {"text":"무엇을 반복하는지 조용히 관찰하며 패턴을 찾는다.","scores":{"observer":3,"naturalist":2,"recorder":1}},
      {"text":"활동량과 시간대를 기록해 며칠간 비교한다.","scores":{"recorder":3,"observer":2,"architect":1}},
      {"text":"소음, 빛, 온도처럼 활동을 바꿀 환경 요인을 확인한다.","scores":{"architect":3,"observer":2,"naturalist":1}},
      {"text":"놀이나 탐색 욕구가 충족되도록 안전한 구조물을 더한다.","scores":{"naturalist":3,"companion":2,"architect":1}}
    ]
  },
  {
    "kicker":"교감 방식",
    "text":"새로 온 피그미와 친해질 때 가장 편한 방식은?",
    "hint":"개체가 아직 사람 손에 익숙하지 않습니다.",
    "options":[
      {"text":"손을 넣고 기다리며 스스로 다가올 때만 보상한다.","scores":{"companion":3,"naturalist":2,"observer":1}},
      {"text":"며칠간 사람의 움직임에 어떻게 반응하는지 먼저 본다.","scores":{"observer":3,"naturalist":2,"companion":1}},
      {"text":"교감 시도 시간과 반응을 기록하며 속도를 조절한다.","scores":{"recorder":3,"companion":2,"observer":1}},
      {"text":"은신처와 도피 공간을 충분히 마련한 뒤 접근한다.","scores":{"architect":3,"naturalist":2,"companion":1}}
    ]
  },
  {
    "kicker":"온도 변화",
    "text":"새벽에 케이지 온도가 평소보다 낮았다는 걸 발견했다면?",
    "hint":"즉시 위험한 수준은 아니지만 원인 확인이 필요합니다.",
    "options":[
      {"text":"열원 위치와 방 온도, 케이지 구역별 차이를 점검한다.","scores":{"architect":3,"recorder":2,"observer":1}},
      {"text":"최저 온도와 시간을 기록하고 다음 날 같은 시간과 비교한다.","scores":{"recorder":3,"architect":2,"observer":1}},
      {"text":"피그미의 자세와 활동, 은신 위치를 먼저 관찰한다.","scores":{"observer":3,"naturalist":2,"recorder":1}},
      {"text":"피할 수 있는 따뜻한 구역과 기존 은신처 선택지를 보강한다.","scores":{"naturalist":3,"architect":2,"companion":1}}
    ]
  },
  {
    "kicker":"정보 판단",
    "text":"서로 다른 사육 정보가 충돌할 때 나는?",
    "hint":"둘 다 그럴듯한 주장이라고 가정합니다.",
    "options":[
      {"text":"출처와 근거, 실제 관찰 조건을 비교한다.","scores":{"observer":3,"recorder":2,"strategist":1}},
      {"text":"내 개체 기록과 환경에서 어느 쪽이 맞는지 확인한다.","scores":{"recorder":3,"observer":2,"architect":1}},
      {"text":"안전 범위가 더 넓고 위험이 적은 방법부터 적용한다.","scores":{"architect":3,"naturalist":2,"observer":1}},
      {"text":"브리더·혈통·사육 조건 차이까지 나눠서 본다.","scores":{"strategist":3,"observer":2,"recorder":1}}
    ]
  },
  {
    "kicker":"사진 한 장",
    "text":"귀여운 순간을 발견했을 때 가장 먼저 하는 일은?",
    "hint":"당신다운 반응을 골라주세요.",
    "options":[
      {"text":"사진보다 먼저 행동을 방해하지 않는지 살핀다.","scores":{"naturalist":3,"observer":2,"companion":1}},
      {"text":"사진을 찍고 그날의 행동 메모와 함께 남긴다.","scores":{"recorder":3,"companion":2,"observer":1}},
      {"text":"조용히 말을 걸거나 작은 보상으로 함께 즐긴다.","scores":{"companion":3,"naturalist":2,"recorder":1}},
      {"text":"평소와 다른 포즈나 장소인지 자세히 관찰한다.","scores":{"observer":3,"recorder":2,"naturalist":1}}
    ]
  }
];
