__loadLesson({
  "lesson": "math3",
  "subject": "math",
  "title": "Ⅱ. 문자와 식 — 2. 일차부등식",
  "subtitle": "부등식과 그 해 / 일차부등식과 그 풀이",
  "publisher": "교과서 기반",
  "grade": 2,
  "version": "1.0",
  "build_date": "2026-03-31",
  "build_note": "3모드: 개념카드(8장) + 절차연습(12문제) + 실전문제. 중간고사 범위 p.52-61.",
  "modes": [
    "concept_card",
    "procedure_drill",
    "exam_prep"
  ],
  "concept_cards": [
    {
      "id": "MC-01",
      "type": "math_concept_card",
      "title": "부등식이란?",
      "front": "부등호(<, >, ≤, ≥)를 사용하여 나타낸 '식'이 뭘까요?",
      "back_definition": "부등식(inequality)은 부등호(<, >, ≤, ≥)를 사용하여 수량의 대소 관계를 나타낸 식입니다.",
      "back_easy": "쉽게 말하면: 등호(=) 대신 부등호를 쓴 식. 예: 5 > 3, x < 10\n\n핵심: 부등호가 있어야 부등식. 부등호가 없으면? → 부등식 아님",
      "back_example": "부등식 ✓: 3x - 4 < 7, x ≥ -2, 5 > 1\n부등식 아님 ✗: 6x - 5 (부등호 없음), 3x + 2 (부등호 없음)",
      "exam_tip": "함정: '6x - 5는 식인가 부등식인가?' → 부호 없으니 부등식 아님! 부등호가 꼭 있어야 부등식"
    },
    {
      "id": "MC-02",
      "type": "math_concept_card",
      "title": "부등식의 해",
      "front": "부등식을 참(참)이 되게 하는 미지수의 값을 뭐라고 할까요?",
      "back_definition": "부등식의 해(solution)는 부등식을 참이 되게 하는 미지수의 값입니다.",
      "back_easy": "부등식에 숫자를 대입했을 때, 부등식이 참이 되면 그 숫자가 해\n\n예: 3x - 4 < 7에서\n• x = 2 대입 → 3(2) - 4 = 2 < 7 ✓ (참 → 해)\n• x = 5 대입 → 3(5) - 4 = 11 < 7 ✗ (거짓 → 해 아님)",
      "back_example": "3x - 4 < 7\n→ x = -2 대입: 3(-2) - 4 = -10 < 7 ✓\n→ x = 0 대입: 3(0) - 4 = -4 < 7 ✓\n→ x = 4 대입: 3(4) - 4 = 8 < 7 ✗",
      "exam_tip": "함정: 방정식처럼 '정확히 하나의 수'만이 해가 아님. 부등식은 여러 수가 해가 될 수 있음"
    },
    {
      "id": "MC-03",
      "type": "math_concept_card",
      "title": "부등식의 성질 ① 덧셈/뺄셈",
      "front": "a < b일 때, 양변에 같은 수를 더하거나 빼면 부등호는?",
      "back_definition": "a < b이면 a + c < b + c이고, a - c < b - c입니다. (c는 어떤 수든 상관없음)",
      "back_easy": "양변에 같은 수를 더하거나 빼도 부등호 방향은 안 바뀜\n\n이유: 양쪽에 똑같이 더하니까 대소 관계가 유지됨\n\n예: 3 < 5 → 양변에 2를 더하면 → 5 < 7 (여전히 참)",
      "back_example": "3 < 5\n→ 양변에 2 더하기: 3 + 2 < 5 + 2 → 5 < 7 ✓\n→ 양변에 1 빼기: 3 - 1 < 5 - 1 → 2 < 4 ✓\n\n-2 < 4\n→ 양변에 5 더하기: -2 + 5 < 4 + 5 → 3 < 9 ✓",
      "exam_tip": "등식의 성질과 같음. 이것은 쉬운 부분. 어려운 건 다음 카드들!"
    },
    {
      "id": "MC-04",
      "type": "math_concept_card",
      "title": "부등식의 성질 ② 양수 곱셈/나눗셈",
      "front": "a < b이고 c > 0(양수)일 때, ac와 bc는?",
      "back_definition": "a < b이고 c > 0이면 ac < bc이고, a/c < b/c입니다.",
      "back_easy": "양수를 곱하거나 나눠도 부등호 방향은 안 바뀜\n\n이유: 양수를 곱하거나 나누면 대소 관계는 그대로 유지됨\n\n예: 3 < 5 → 양변에 2를 곱하면 → 6 < 10 (여전히 참)",
      "back_example": "2 < 6\n→ 양변에 3 곱하기: 2 × 3 < 6 × 3 → 6 < 18 ✓\n→ 양변을 2로 나누기: 2 ÷ 2 < 6 ÷ 2 → 1 < 3 ✓\n\n-4 < 2\n→ 양변에 5 곱하기: -4 × 5 < 2 × 5 → -20 < 10 ✓",
      "exam_tip": "양수일 때는 부등호 방향 안 바뀜. 다음 카드의 음수와 대비하세요!"
    },
    {
      "id": "MC-05",
      "type": "math_concept_card",
      "title": "부등식의 성질 ③ 음수 곱셈/나눗셈 ★핵심★",
      "front": "a < b이고 c < 0(음수)일 때, ac와 bc는?",
      "back_definition": "a < b이고 c < 0이면 ac > bc이고, a/c > b/c입니다. (부등호 방향이 바뀜!)",
      "back_easy": "⚠️ 음수를 곱하거나 나누면 부등호 방향이 바뀐다!\n\n이유: 음수를 곱하면 대소가 역전됨\n\n예: 3 < 5 → 양변에 -2를 곱하면 → -6 > -10 (부등호 바뀜!)",
      "back_example": "2 < 6\n→ 양변에 -3 곱하기: 2 × (-3) < 6 × (-3)?\n   → -6 > -18 (부등호 바뀜!) ✓\n\n-5x ≤ 10\n→ 양변을 -5로 나누기: -5x ÷ (-5) ≤ 10 ÷ (-5)?\n   → x ≥ -2 (부등호 바뀜!) ✓",
      "exam_tip": "이것이 가장 많이 틀리는 부분! 음수 계수로 나눌 때 부등호 방향을 안 바꾸는 실수가 흔함. 매번 '음수니까 바꿔야 한다' 하고 체크!"
    },
    {
      "id": "MC-06",
      "type": "math_concept_card",
      "title": "일차부등식이란?",
      "front": "이항하여 정리했을 때, (일차식) < 0 꼴이 되는 게 뭘까요?",
      "back_definition": "일차부등식은 정리하면 (일차식) < (일차식) 또는 (일차식) > (일차식) 등으로 나타낼 수 있는 부등식입니다.",
      "back_easy": "쉽게 말하면: 미지수의 최고 차수가 1인 부등식\n\n일차부등식 맞는 것: 7x - 4 > 3, 2x + 5 < x - 6\n일차부등식 아닌 것: x² + 3x - 2 < 0 (이차), 9x + 8 > 9x - 1 (미지수 항 소거)",
      "back_example": "일차부등식 ✓:\n• 7x - 4 > 3\n• 2x + 5 < x - 6 (정리하면 x < -11)\n• 5 - 3x ≥ 2 (정리하면 -3x ≥ -3)\n\n일차부등식 아님 ✗:\n• x² + 3x - 2 < 0 (이차항 있음)\n• 9x + 8 > 9x - 1 (정리하면 8 > -1, 미지수 사라짐)",
      "exam_tip": "함정: 2x² + 5x < 2x² - 3 → 정리하면 5x < -3 → 이차항이 소거되어 일차부등식 맞음!"
    },
    {
      "id": "MC-07",
      "type": "math_concept_card",
      "title": "일차부등식 풀이 절차",
      "front": "일차부등식을 푸는 5단계는?",
      "back_definition": "일차부등식을 풀 때는: (1) 괄호 풀기 (2) 소수/분수 정리 (3) 이항 (4) 동류항 정리 (5) 미지수 계수로 나누기",
      "back_easy": "Step 1: 괄호가 있으면 분배법칙으로 풀기\nStep 2: 소수/분수 계수 → 양변에 10/100/최소공배수 곱하기\nStep 3: x항은 좌변, 상수항은 우변으로 이항\nStep 4: 동류항끼리 정리\nStep 5: x의 계수로 나누기 (음수면 부등호 방향 바꿈!)\n\n특히 Step 5에서 음수로 나눌 때 실수 주의!",
      "back_example": "예: -5x + 2 ≤ 12\nStep 1: 괄호 없음\nStep 2: 소수/분수 없음\nStep 3: -5x ≤ 12 - 2\nStep 4: -5x ≤ 10\nStep 5: x ≥ -2 (음수 -5로 나누니까 부등호 바꿈!)",
      "exam_tip": "Step 5에서 음수로 나눌 때 부등호를 안 바꾸는 실수가 가장 흔음. 문제마다 '음수로 나누나?' 확인하기!"
    },
    {
      "id": "MC-08",
      "type": "math_concept_card",
      "title": "이 단원 TOP 5 함정",
      "front": "가장 자주 틀리는 5가지는?",
      "back_definition": "부등식 단원에서 학생들이 자주 실수하는 5가지 함정들",
      "back_easy": "1. 음수로 나눌 때 부등호 방향 안 바꿈 (가장 흔한 실수)\n   예: -2x < 6 → x > -3 (부등호 바뀜!)\n\n2. 소수 계수에서 10 곱할 때 일부 항에만 곱함\n   예: 0.3x + 0.5 ≤ 1 → (모든 항에 10을 곱해야 함)\n\n3. 이항할 때 부호 안 바꿈\n   예: 2x + 3 > 5x - 6 → 2x - 5x > -6 - 3\n\n4. x ≤ 8.5에서 자연수의 개수 센다고 9개?\n   → 8개 (8.5는 자연수 아님. 1, 2, 3, 4, 5, 6, 7, 8)\n\n5. 2x² + 5x < 2x² - 3 같은 '보이기엔 이차지만 실은 일차'",
      "back_example": "실수 예시들:\n\n❌ -3x > 9 → x > -3 (틀림)\n✓ -3x > 9 → x < -3 (맞음, 음수로 나누니까 방향 바꿈)\n\n❌ 0.3x + 0.5 ≤ 1 → 3x + 0.5 ≤ 10 (틀림, 일부만 곱함)\n✓ 0.3x + 0.5 ≤ 1 → 3x + 5 ≤ 10 (맞음, 모든 항에 10 곱함)",
      "exam_tip": "이 5가지를 항상 체크리스트로 갖고 있기. 풀이 후 '음수로 나눴나? 부호 바꿨나?' 다시 확인!"
    }
  ],
  "procedure_drills": [
    {
      "id": "PD-01",
      "type": "procedure_drill",
      "category": "부등식의 성질",
      "difficulty": "A",
      "problem": "a > b일 때, -3a __ -3b에 들어갈 부등호는?",
      "final_answer": "<",
      "steps": [
        {
          "label": "Step 1: 양변에 곱하는 수가 무엇인지 확인하기",
          "why": "양수인지 음수인지에 따라 부등호 방향이 바뀌기도 하고 안 바뀌기도 합니다",
          "question": "-3은 양수인가요, 음수인가요?",
          "input_type": "choice",
          "options": [
            "양수",
            "음수"
          ],
          "correct": [
            "음수"
          ],
          "hint": "음수는 0보다 작은 수입니다",
          "wrong_feedback": "-3은 0보다 작으니까 음수입니다"
        },
        {
          "label": "Step 2: 부등호의 성질 적용하기",
          "why": "음수를 곱할 때는 부등호 방향이 바뀝니다 (이것이 핵심!)",
          "question": "음수를 곱하면 부등호 방향은 어떻게 되나요?",
          "input_type": "choice",
          "options": [
            "같은 방향",
            "반대 방향으로 바뀜"
          ],
          "correct": [
            "반대 방향으로 바뀜"
          ],
          "hint": "이 단원의 가장 중요한 성질입니다",
          "wrong_feedback": "음수를 곱하면 부등호 방향이 반대로 바뀝니다"
        },
        {
          "label": "Step 3: 답 구하기",
          "why": "a > b에서 음수를 곱하면 부등호가 반대가 되므로 -3a < -3b가 됩니다",
          "question": "따라서 -3a __ -3b에 들어갈 부등호는?",
          "input_type": "choice",
          "options": [
            ">",
            "<",
            "="
          ],
          "correct": [
            "<"
          ],
          "hint": "음수 곱셈 후 부등호가 > 에서 < 로 바뀌었습니다",
          "wrong_feedback": "음수를 곱했으니 부등호가 반대로 바뀌어 < 가 됩니다"
        }
      ]
    },
    {
      "id": "PD-02",
      "type": "procedure_drill",
      "category": "부등식의 성질",
      "difficulty": "A",
      "problem": "a < b일 때, -2a + 5 __ -2b + 5에 들어갈 부등호는?",
      "final_answer": ">",
      "steps": [
        {
          "label": "Step 1: 양변에 곱해지는 수 확인하기",
          "why": "음수를 곱하면 부등호가 바뀌지만, 덧셈은 바꾸지 않습니다",
          "question": "-2는 양수인가요, 음수인가요?",
          "input_type": "choice",
          "options": [
            "양수",
            "음수"
          ],
          "correct": [
            "음수"
          ],
          "hint": "-는 음수 기호입니다",
          "wrong_feedback": "-2는 음수입니다"
        },
        {
          "label": "Step 2: 음수 곱셈의 영향 생각하기",
          "why": "a < b에 -2를 곱하면 부등호가 반대가 됩니다",
          "question": "a < b에서 양변에 -2를 곱하면 -2a __ -2b가 되나요?",
          "input_type": "choice",
          "options": [
            "-2a < -2b",
            "-2a > -2b"
          ],
          "correct": [
            "-2a > -2b"
          ],
          "hint": "음수를 곱하면 부등호가 반대 방향이 됩니다",
          "wrong_feedback": "음수를 곱했으니 < 가 > 로 바뀝니다"
        },
        {
          "label": "Step 3: 양변에 5를 더해도 부등호는 바뀌지 않나요?",
          "why": "덧셈은 부등호를 안 바꾸므로 -2a > -2b에 5를 더해도 > 유지",
          "question": "-2a > -2b에서 양변에 5를 더하면?",
          "input_type": "choice",
          "options": [
            "-2a + 5 > -2b + 5",
            "-2a + 5 < -2b + 5"
          ],
          "correct": [
            "-2a + 5 > -2b + 5"
          ],
          "hint": "덧셈은 부등호 방향을 안 바꿉니다",
          "wrong_feedback": "부호는 덧셈에서 안 바뀝니다"
        },
        {
          "label": "Step 4: 최종 답",
          "why": "-2a + 5와 -2b + 5를 비교하면 > 가 정답입니다",
          "question": "-2a + 5 __ -2b + 5에 들어갈 부등호는?",
          "input_type": "choice",
          "options": [
            ">",
            "<"
          ],
          "correct": [
            ">"
          ],
          "hint": "Step 3에서 구한 부등식을 다시 보세요",
          "wrong_feedback": "음수 곱셈으로 > 가 되었고, 덧셈으로도 > 유지됩니다"
        }
      ]
    },
    {
      "id": "PD-03",
      "type": "procedure_drill",
      "category": "부등식의 성질",
      "difficulty": "B",
      "problem": "-2a + 5 > -2b + 5일 때, a __ b에 들어갈 부등호는?",
      "final_answer": "<",
      "steps": [
        {
          "label": "Step 1: 역순으로 생각하기 (양변에서 5 빼기)",
          "why": "5를 빼서 양변을 단순화하면 -2a와 -2b만 비교하면 됩니다",
          "question": "-2a + 5 > -2b + 5에서 양변에 5를 빼면 -2a __ -2b가 되나요?",
          "input_type": "choice",
          "options": [
            "-2a > -2b",
            "-2a < -2b"
          ],
          "correct": [
            "-2a > -2b"
          ],
          "hint": "뺄셈은 부등호를 안 바꿉니다",
          "wrong_feedback": "뺄셈은 부등호 방향을 바꾸지 않습니다"
        },
        {
          "label": "Step 2: 양변을 -2로 나누기",
          "why": "-2로 나누면 a와 b를 구할 수 있습니다. 하지만 음수로 나누니까 조심!",
          "question": "-2는 양수인가요, 음수인가요?",
          "input_type": "choice",
          "options": [
            "양수",
            "음수"
          ],
          "correct": [
            "음수"
          ],
          "hint": "-2는 음수입니다",
          "wrong_feedback": "-2는 음수입니다"
        },
        {
          "label": "Step 3: 음수 나눗셈 후 부등호 바뀌기",
          "why": "음수로 나누면 부등호가 반대가 됩니다",
          "question": "-2a > -2b를 -2로 나누면 a __ b가 되나요?",
          "input_type": "choice",
          "options": [
            "a > b",
            "a < b"
          ],
          "correct": [
            "a < b"
          ],
          "hint": "음수로 나누니까 > 가 < 로 바뀝니다",
          "wrong_feedback": "음수로 나누면 부등호가 반대 방향이 됩니다"
        },
        {
          "label": "Step 4: 최종 답",
          "why": "역순으로 추론한 결과, a < b가 정답입니다",
          "question": "a __ b에 들어갈 부등호는?",
          "input_type": "choice",
          "options": [
            ">",
            "<"
          ],
          "correct": [
            "<"
          ],
          "hint": "Step 3에서 음수로 나눴을 때의 결과를 보세요",
          "wrong_feedback": "음수 나눗셈으로 부등호가 > 에서 < 로 바뀝니다"
        }
      ]
    },
    {
      "id": "PD-04",
      "type": "procedure_drill",
      "category": "기본 일차부등식",
      "difficulty": "A",
      "problem": "3x - 2 < 7을 풀어서 x의 범위를 구하세요",
      "final_answer": "x < 3",
      "steps": [
        {
          "label": "Step 1: 상수항 이항하기",
          "why": "3x를 한쪽에 남기고, 숫자들을 다른 쪽으로 옮겨야 합니다",
          "question": "3x - 2 < 7에서 -2를 우변으로 이항하면?",
          "input_type": "choice",
          "options": [
            "3x < 7 - 2",
            "3x < 7 + 2",
            "3x > 7 - 2"
          ],
          "correct": [
            "3x < 7 + 2"
          ],
          "hint": "-2를 이항하면 부호가 바뀌어 +2가 됩니다",
          "wrong_feedback": "이항할 때 -2는 +2로 부호가 바뀝니다"
        },
        {
          "label": "Step 2: 우변 정리하기",
          "why": "우변의 숫자들을 계산해서 간단히 만듭니다",
          "question": "7 + 2 = ?",
          "input_type": "choice",
          "options": [
            "5",
            "9",
            "1"
          ],
          "correct": [
            "9"
          ],
          "hint": "7 더하기 2는?",
          "wrong_feedback": "7 + 2 = 9입니다"
        },
        {
          "label": "Step 3: x의 계수로 나누기",
          "why": "x의 계수인 3으로 양변을 나누어 x를 혼자 남깁니다",
          "question": "3x < 9를 3으로 나누면?",
          "input_type": "choice",
          "options": [
            "x < 3",
            "x > 3",
            "x ≤ 3"
          ],
          "correct": [
            "x < 3"
          ],
          "hint": "3은 양수이므로 부등호 방향은 바뀌지 않습니다. 9 ÷ 3 = 3",
          "wrong_feedback": "양수 3으로 나누면 부등호는 안 바뀌고, 9 ÷ 3 = 3입니다"
        },
        {
          "label": "Step 4: 최종 답",
          "why": "x < 3이 부등식의 해입니다",
          "question": "3x - 2 < 7의 해는?",
          "input_type": "choice",
          "options": [
            "x < 3",
            "x > 3",
            "x ≤ 3"
          ],
          "correct": [
            "x < 3"
          ],
          "hint": "Step 3에서 구한 답을 보세요",
          "wrong_feedback": "x < 3입니다"
        }
      ]
    },
    {
      "id": "PD-05",
      "type": "procedure_drill",
      "category": "기본 일차부등식",
      "difficulty": "A",
      "problem": "-5x + 2 ≤ 12를 풀어서 x의 범위를 구하세요",
      "final_answer": "x ≥ -2",
      "steps": [
        {
          "label": "Step 1: 상수항 이항하기",
          "why": "-5x를 한쪽에 남기고, 숫자들을 다른 쪽으로 이항합니다",
          "question": "-5x + 2 ≤ 12에서 2를 우변으로 이항하면?",
          "input_type": "choice",
          "options": [
            "-5x ≤ 12 - 2",
            "-5x ≤ 12 + 2"
          ],
          "correct": [
            "-5x ≤ 12 - 2"
          ],
          "hint": "+2를 이항하면 -2가 됩니다",
          "wrong_feedback": "+2를 이항하면 부호가 바뀌어 -2가 됩니다"
        },
        {
          "label": "Step 2: 우변 정리하기",
          "why": "12 - 2를 계산합니다",
          "question": "12 - 2 = ?",
          "input_type": "choice",
          "options": [
            "14",
            "10",
            "8"
          ],
          "correct": [
            "10"
          ],
          "hint": "12에서 2를 빼면?",
          "wrong_feedback": "12 - 2 = 10입니다"
        },
        {
          "label": "Step 3: x의 계수로 나누기",
          "why": "-5는 음수이므로 양변을 -5로 나누면 부등호 방향이 바뀝니다 (핵심!)",
          "question": "-5x ≤ 10을 -5로 나누면 부등호는 어떻게 되나요?",
          "input_type": "choice",
          "options": [
            "≤",
            "≥"
          ],
          "correct": [
            "≥"
          ],
          "hint": "음수로 나누면 부등호가 반대가 됩니다",
          "wrong_feedback": "음수 -5로 나누니까 ≤ 가 ≥ 로 바뀝니다"
        },
        {
          "label": "Step 4: x 값 계산하기",
          "why": "10 ÷ (-5) = -2를 계산합니다",
          "question": "10 ÷ (-5) = ?",
          "input_type": "choice",
          "options": [
            "-2",
            "2",
            "-5"
          ],
          "correct": [
            "-2"
          ],
          "hint": "양수를 음수로 나누면 음수가 됩니다",
          "wrong_feedback": "10 ÷ (-5) = -2입니다"
        },
        {
          "label": "Step 5: 최종 답",
          "why": "x ≥ -2가 부등식의 해입니다. -5로 나눴으니 부등호가 바뀌었어요!",
          "question": "-5x + 2 ≤ 12의 해는?",
          "input_type": "choice",
          "options": [
            "x ≥ -2",
            "x ≤ -2",
            "x > -2"
          ],
          "correct": [
            "x ≥ -2"
          ],
          "hint": "음수로 나눴으니 부등호가 반대가 되어 ≥ 가 됩니다",
          "wrong_feedback": "음수 -5로 나눴으니 ≤ 가 ≥ 로 바뀌어 x ≥ -2입니다"
        }
      ]
    },
    {
      "id": "PD-06",
      "type": "procedure_drill",
      "category": "기본 일차부등식",
      "difficulty": "B",
      "problem": "2x + 3 > 5x - 6을 풀어서 x의 범위를 구하세요",
      "final_answer": "x < 3",
      "steps": [
        {
          "label": "Step 1: x항을 좌변으로, 상수항을 우변으로 이항하기",
          "why": "x항들을 한쪽에 모으고, 상수항을 다른 쪽에 모아야 합니다",
          "question": "2x + 3 > 5x - 6에서 5x를 좌변으로 이항하면?",
          "input_type": "choice",
          "options": [
            "2x - 5x + 3 > -6",
            "2x + 5x + 3 > -6"
          ],
          "correct": [
            "2x - 5x + 3 > -6"
          ],
          "hint": "5x를 좌변으로 이항하면 부호가 바뀌어 -5x가 됩니다",
          "wrong_feedback": "5x를 이항하면 부호가 바뀌어 -5x가 됩니다"
        },
        {
          "label": "Step 2: 상수항을 우변으로 이항하기",
          "why": "3을 우변으로 옮겨서 상수항을 우변에 모읍니다",
          "question": "2x - 5x + 3 > -6에서 3을 우변으로 이항하면?",
          "input_type": "choice",
          "options": [
            "2x - 5x > -6 - 3",
            "2x - 5x > -6 + 3"
          ],
          "correct": [
            "2x - 5x > -6 - 3"
          ],
          "hint": "+3을 이항하면 부호가 바뀌어 -3이 됩니다",
          "wrong_feedback": "+3을 이항하면 -3이 됩니다"
        },
        {
          "label": "Step 3: 양변 정리하기",
          "why": "좌변과 우변을 각각 계산합니다",
          "question": "2x - 5x = ? 그리고 -6 - 3 = ?",
          "input_type": "choice",
          "options": [
            "-3x > -9",
            "-3x > 9",
            "3x > -9"
          ],
          "correct": [
            "-3x > -9"
          ],
          "hint": "2 - 5 = -3이고, -6 - 3 = -9입니다",
          "wrong_feedback": "2x - 5x = -3x, -6 - 3 = -9이므로 -3x > -9입니다"
        },
        {
          "label": "Step 4: x의 계수로 나누기",
          "why": "-3은 음수이므로 양변을 -3으로 나누면 부등호가 바뀝니다",
          "question": "-3x > -9를 -3으로 나누면?",
          "input_type": "choice",
          "options": [
            "x < 3",
            "x > 3",
            "x ≤ 3"
          ],
          "correct": [
            "x < 3"
          ],
          "hint": "음수 -3으로 나누니까 > 가 < 로 바뀝니다. 그리고 -9 ÷ (-3) = 3입니다",
          "wrong_feedback": "음수 -3으로 나누면 > 가 < 로 바뀌고, -9 ÷ (-3) = 3이므로 x < 3입니다"
        },
        {
          "label": "Step 5: 최종 답",
          "why": "x < 3이 부등식의 해입니다",
          "question": "2x + 3 > 5x - 6의 해는?",
          "input_type": "choice",
          "options": [
            "x < 3",
            "x > 3",
            "x ≤ 3"
          ],
          "correct": [
            "x < 3"
          ],
          "hint": "Step 4에서 구한 답을 보세요",
          "wrong_feedback": "x < 3입니다"
        }
      ]
    },
    {
      "id": "PD-07",
      "type": "procedure_drill",
      "category": "괄호/복합 풀이",
      "difficulty": "B",
      "problem": "-(3x + 7) ≤ 2(x + 4)를 풀어서 x의 범위를 구하세요",
      "final_answer": "x ≥ -3",
      "steps": [
        {
          "label": "Step 1: 좌변 괄호 풀기 (음수 분배)",
          "why": "-(3x + 7)은 -1을 분배해서 (-3x - 7)이 됩니다",
          "question": "-(3x + 7) = ?",
          "input_type": "choice",
          "options": [
            "-3x - 7",
            "-3x + 7",
            "3x - 7"
          ],
          "correct": [
            "-3x - 7"
          ],
          "hint": "-를 3x와 7에 모두 분배합니다",
          "wrong_feedback": "-(3x + 7) = -3x - 7입니다"
        },
        {
          "label": "Step 2: 우변 괄호 풀기 (양수 분배)",
          "why": "2(x + 4) = 2x + 8입니다",
          "question": "2(x + 4) = ?",
          "input_type": "choice",
          "options": [
            "2x + 8",
            "2x + 4",
            "2x - 8"
          ],
          "correct": [
            "2x + 8"
          ],
          "hint": "2를 x와 4에 모두 분배합니다",
          "wrong_feedback": "2(x + 4) = 2x + 8입니다"
        },
        {
          "label": "Step 3: 부등식 정리하기",
          "why": "-3x - 7 ≤ 2x + 8 형태가 되었습니다",
          "question": "지금 부등식은?",
          "input_type": "choice",
          "options": [
            "-3x - 7 ≤ 2x + 8"
          ],
          "correct": [
            "-3x - 7 ≤ 2x + 8"
          ],
          "hint": "Step 1과 Step 2의 결과를 넣습니다",
          "wrong_feedback": "-3x - 7 ≤ 2x + 8입니다"
        },
        {
          "label": "Step 4: x항을 좌변으로, 상수항을 우변으로 이항하기",
          "why": "2x를 좌변으로, -7을 우변으로 옮깁니다",
          "question": "-3x - 7 ≤ 2x + 8에서 -3x - 2x ≤ 8 + 7이 되나요?",
          "input_type": "choice",
          "options": [
            "맞음",
            "틀림"
          ],
          "correct": [
            "맞음"
          ],
          "hint": "2x를 이항하면 -2x, -7을 이항하면 +7이 됩니다",
          "wrong_feedback": "맞습니다: -3x - 2x ≤ 8 + 7"
        },
        {
          "label": "Step 5: 양변 정리하기",
          "why": "-3x - 2x = -5x, 8 + 7 = 15",
          "question": "-5x ≤ 15인가요?",
          "input_type": "choice",
          "options": [
            "맞음",
            "틀림"
          ],
          "correct": [
            "맞음"
          ],
          "hint": "좌변: -3 - 2 = -5. 우변: 8 + 7 = 15",
          "wrong_feedback": "맞습니다: -5x ≤ 15"
        },
        {
          "label": "Step 6: x의 계수로 나누기",
          "why": "-5는 음수이므로 부등호가 바뀝니다",
          "question": "-5x ≤ 15를 -5로 나누면?",
          "input_type": "choice",
          "options": [
            "x ≥ -3",
            "x ≤ -3"
          ],
          "correct": [
            "x ≥ -3"
          ],
          "hint": "음수 -5로 나누니까 ≤ 가 ≥ 로 바뀝니다. 그리고 15 ÷ (-5) = -3",
          "wrong_feedback": "음수로 나누니까 ≤ 가 ≥ 로 바뀌고, 15 ÷ (-5) = -3이므로 x ≥ -3입니다"
        },
        {
          "label": "Step 7: 최종 답",
          "why": "x ≥ -3이 부등식의 해입니다",
          "question": "-(3x + 7) ≤ 2(x + 4)의 해는?",
          "input_type": "choice",
          "options": [
            "x ≥ -3",
            "x ≤ -3",
            "x > -3"
          ],
          "correct": [
            "x ≥ -3"
          ],
          "hint": "Step 6에서 구한 답을 보세요",
          "wrong_feedback": "x ≥ -3입니다"
        }
      ]
    },
    {
      "id": "PD-08",
      "type": "procedure_drill",
      "category": "괄호/복합 풀이",
      "difficulty": "B",
      "problem": "-5(x + 2) ≤ 3(x - 1)을 풀어서 x의 범위를 구하세요",
      "final_answer": "x ≥ -7/8",
      "steps": [
        {
          "label": "Step 1: 좌변 괄호 풀기",
          "why": "-5(x + 2) = -5x - 10",
          "question": "-5(x + 2) = ?",
          "input_type": "choice",
          "options": [
            "-5x - 10",
            "-5x + 10",
            "5x - 10"
          ],
          "correct": [
            "-5x - 10"
          ],
          "hint": "-5를 x와 2에 모두 분배합니다",
          "wrong_feedback": "-5(x + 2) = -5x - 10입니다"
        },
        {
          "label": "Step 2: 우변 괄호 풀기",
          "why": "3(x - 1) = 3x - 3",
          "question": "3(x - 1) = ?",
          "input_type": "choice",
          "options": [
            "3x - 3",
            "3x + 3",
            "3x - 1"
          ],
          "correct": [
            "3x - 3"
          ],
          "hint": "3을 x와 -1에 모두 분배합니다",
          "wrong_feedback": "3(x - 1) = 3x - 3입니다"
        },
        {
          "label": "Step 3: x항 이항하기",
          "why": "-5x - 10 ≤ 3x - 3 형태에서 3x를 좌변으로 옮깁니다",
          "question": "-5x - 3x ≤ -3 + 10인가요?",
          "input_type": "choice",
          "options": [
            "맞음",
            "틀림"
          ],
          "correct": [
            "맞음"
          ],
          "hint": "3x를 이항하면 -3x, -10을 이항하면 +10이 됩니다",
          "wrong_feedback": "맞습니다"
        },
        {
          "label": "Step 4: 양변 정리하기",
          "why": "-5x - 3x = -8x, -3 + 10 = 7",
          "question": "-8x ≤ 7인가요?",
          "input_type": "choice",
          "options": [
            "맞음",
            "틀림"
          ],
          "correct": [
            "맞음"
          ],
          "hint": "-5 - 3 = -8, -3 + 10 = 7",
          "wrong_feedback": "맞습니다: -8x ≤ 7"
        },
        {
          "label": "Step 5: x의 계수로 나누기",
          "why": "-8은 음수이므로 부등호가 바뀝니다. 그리고 7 ÷ (-8) = -7/8",
          "question": "-8x ≤ 7을 -8로 나누면?",
          "input_type": "choice",
          "options": [
            "x ≥ -7/8",
            "x ≤ -7/8"
          ],
          "correct": [
            "x ≥ -7/8"
          ],
          "hint": "음수 -8로 나누니까 ≤ 가 ≥ 로 바뀝니다",
          "wrong_feedback": "음수로 나누니까 ≤ 가 ≥ 로 바뀌고, 7 ÷ (-8) = -7/8이므로 x ≥ -7/8입니다"
        },
        {
          "label": "Step 6: 최종 답",
          "why": "x ≥ -7/8이 부등식의 해입니다",
          "question": "-5(x + 2) ≤ 3(x - 1)의 해는?",
          "input_type": "choice",
          "options": [
            "x ≥ -7/8",
            "x ≤ -7/8"
          ],
          "correct": [
            "x ≥ -7/8"
          ],
          "hint": "Step 5에서 구한 답을 보세요",
          "wrong_feedback": "x ≥ -7/8입니다"
        }
      ]
    },
    {
      "id": "PD-09",
      "type": "procedure_drill",
      "category": "괄호/복합 풀이",
      "difficulty": "B",
      "problem": "7x > 2(x + 7) + 1을 풀어서 x의 범위를 구하세요",
      "final_answer": "x > 3",
      "steps": [
        {
          "label": "Step 1: 우변 괄호 풀기",
          "why": "2(x + 7) = 2x + 14",
          "question": "2(x + 7) = ?",
          "input_type": "choice",
          "options": [
            "2x + 14",
            "2x + 7",
            "2x + 8"
          ],
          "correct": [
            "2x + 14"
          ],
          "hint": "2를 x와 7에 모두 분배합니다",
          "wrong_feedback": "2(x + 7) = 2x + 14입니다"
        },
        {
          "label": "Step 2: 우변 정리하기",
          "why": "2x + 14 + 1 = 2x + 15",
          "question": "2(x + 7) + 1 = ?",
          "input_type": "choice",
          "options": [
            "2x + 15",
            "2x + 14",
            "2x + 16"
          ],
          "correct": [
            "2x + 15"
          ],
          "hint": "14 + 1 = 15",
          "wrong_feedback": "2x + 14 + 1 = 2x + 15입니다"
        },
        {
          "label": "Step 3: 부등식 정리",
          "why": "7x > 2x + 15가 되었습니다",
          "question": "지금 부등식은?",
          "input_type": "choice",
          "options": [
            "7x > 2x + 15"
          ],
          "correct": [
            "7x > 2x + 15"
          ],
          "hint": "Step 1과 Step 2의 결과입니다",
          "wrong_feedback": "7x > 2x + 15입니다"
        },
        {
          "label": "Step 4: x항 이항하기",
          "why": "2x를 좌변으로 옮깁니다",
          "question": "7x - 2x > 15인가요?",
          "input_type": "choice",
          "options": [
            "맞음",
            "틀림"
          ],
          "correct": [
            "맞음"
          ],
          "hint": "2x를 이항하면 -2x가 됩니다",
          "wrong_feedback": "맞습니다: 7x - 2x > 15"
        },
        {
          "label": "Step 5: 좌변 정리하기",
          "why": "7 - 2 = 5",
          "question": "5x > 15인가요?",
          "input_type": "choice",
          "options": [
            "맞음",
            "틀림"
          ],
          "correct": [
            "맞음"
          ],
          "hint": "7 - 2 = 5",
          "wrong_feedback": "맞습니다: 5x > 15"
        },
        {
          "label": "Step 6: x의 계수로 나누기",
          "why": "5는 양수이므로 부등호는 안 바뀝니다. 그리고 15 ÷ 5 = 3",
          "question": "5x > 15를 5로 나누면?",
          "input_type": "choice",
          "options": [
            "x > 3",
            "x < 3"
          ],
          "correct": [
            "x > 3"
          ],
          "hint": "양수 5로 나누니까 > 는 > 그대로입니다",
          "wrong_feedback": "양수로 나누니까 > 는 그대로고, 15 ÷ 5 = 3이므로 x > 3입니다"
        },
        {
          "label": "Step 7: 최종 답",
          "why": "x > 3이 부등식의 해입니다",
          "question": "7x > 2(x + 7) + 1의 해는?",
          "input_type": "choice",
          "options": [
            "x > 3",
            "x < 3",
            "x ≥ 3"
          ],
          "correct": [
            "x > 3"
          ],
          "hint": "Step 6에서 구한 답을 보세요",
          "wrong_feedback": "x > 3입니다"
        }
      ]
    },
    {
      "id": "PD-10",
      "type": "procedure_drill",
      "category": "소수/분수 계수",
      "difficulty": "B",
      "problem": "0.3x + 0.5 ≤ 1 - 0.2x를 풀어서 x의 범위를 구하세요",
      "final_answer": "x ≤ 1",
      "steps": [
        {
          "label": "Step 1: 소수를 정수로 만들기 위해 10을 곱하기",
          "why": "0.3, 0.5, 0.2를 정수로 만들려면 양변에 10을 곱합니다. 모든 항에 곱해야 합니다!",
          "question": "0.3x + 0.5 ≤ 1 - 0.2x의 양변에 10을 곱하면?",
          "input_type": "choice",
          "options": [
            "3x + 5 ≤ 10 - 2x",
            "0.3x + 5 ≤ 10 - 0.2x",
            "3x + 0.5 ≤ 10 - 0.2x"
          ],
          "correct": [
            "3x + 5 ≤ 10 - 2x"
          ],
          "hint": "0.3 × 10 = 3, 0.5 × 10 = 5, 1 × 10 = 10, 0.2 × 10 = 2. 모든 항에 10을 곱해야 합니다!",
          "wrong_feedback": "양변에 10을 곱할 때 모든 항에 곱해야 합니다. 3x + 5 ≤ 10 - 2x입니다"
        },
        {
          "label": "Step 2: x항 이항하기",
          "why": "-2x를 좌변으로 옮깁니다",
          "question": "3x + 2x + 5 ≤ 10인가요?",
          "input_type": "choice",
          "options": [
            "맞음",
            "틀림"
          ],
          "correct": [
            "맞음"
          ],
          "hint": "-2x를 이항하면 +2x가 됩니다",
          "wrong_feedback": "맞습니다"
        },
        {
          "label": "Step 3: 상수항 이항하기",
          "why": "5를 우변으로 옮깁니다",
          "question": "3x + 2x ≤ 10 - 5인가요?",
          "input_type": "choice",
          "options": [
            "맞음",
            "틀림"
          ],
          "correct": [
            "맞음"
          ],
          "hint": "+5를 이항하면 -5가 됩니다",
          "wrong_feedback": "맞습니다"
        },
        {
          "label": "Step 4: 양변 정리하기",
          "why": "5x ≤ 5",
          "question": "3x + 2x = ? 그리고 10 - 5 = ?",
          "input_type": "choice",
          "options": [
            "5x ≤ 5",
            "5x ≤ 15"
          ],
          "correct": [
            "5x ≤ 5"
          ],
          "hint": "3 + 2 = 5, 10 - 5 = 5",
          "wrong_feedback": "5x ≤ 5입니다"
        },
        {
          "label": "Step 5: x의 계수로 나누기",
          "why": "5는 양수이므로 부등호는 안 바뀝니다. 5 ÷ 5 = 1",
          "question": "5x ≤ 5를 5로 나누면?",
          "input_type": "choice",
          "options": [
            "x ≤ 1",
            "x ≥ 1"
          ],
          "correct": [
            "x ≤ 1"
          ],
          "hint": "양수 5로 나누니까 ≤ 는 ≤ 그대로입니다",
          "wrong_feedback": "양수로 나누니까 ≤ 는 그대로고, 5 ÷ 5 = 1이므로 x ≤ 1입니다"
        },
        {
          "label": "Step 6: 최종 답",
          "why": "x ≤ 1이 부등식의 해입니다",
          "question": "0.3x + 0.5 ≤ 1 - 0.2x의 해는?",
          "input_type": "choice",
          "options": [
            "x ≤ 1",
            "x ≥ 1",
            "x > 1"
          ],
          "correct": [
            "x ≤ 1"
          ],
          "hint": "Step 5에서 구한 답을 보세요",
          "wrong_feedback": "x ≤ 1입니다"
        }
      ]
    },
    {
      "id": "PD-11",
      "type": "procedure_drill",
      "category": "소수/분수 계수",
      "difficulty": "C",
      "problem": "2x/3 - x/6 < 5x/6 + 1/2를 풀어서 x의 범위를 구하세요",
      "final_answer": "x > -1",
      "steps": [
        {
          "label": "Step 1: 분모의 최소공배수 찾기",
          "why": "3, 6, 6, 2의 최소공배수는 6입니다",
          "question": "3, 6, 2의 최소공배수는?",
          "input_type": "choice",
          "options": [
            "6",
            "12",
            "3"
          ],
          "correct": [
            "6"
          ],
          "hint": "6은 3, 6, 2 모두로 나누어떨어집니다",
          "wrong_feedback": "최소공배수는 6입니다"
        },
        {
          "label": "Step 2: 양변에 6을 곱하기",
          "why": "모든 항에 6을 곱해서 분수를 없앱니다",
          "question": "(2x/3 - x/6) × 6 = ?",
          "input_type": "choice",
          "options": [
            "4x - x = 3x",
            "4x + x = 5x"
          ],
          "correct": [
            "4x - x = 3x"
          ],
          "hint": "(2x/3) × 6 = 4x, (x/6) × 6 = x",
          "wrong_feedback": "(2x/3) × 6 = 4x, (x/6) × 6 = x이므로 4x - x = 3x입니다"
        },
        {
          "label": "Step 3: 우변도 6을 곱하기",
          "why": "(5x/6 + 1/2) × 6 = 5x + 3",
          "question": "(5x/6) × 6 = ? 그리고 (1/2) × 6 = ?",
          "input_type": "choice",
          "options": [
            "5x와 3",
            "5x와 2"
          ],
          "correct": [
            "5x와 3"
          ],
          "hint": "(5x/6) × 6 = 5x, (1/2) × 6 = 3",
          "wrong_feedback": "5x/6 × 6 = 5x, 1/2 × 6 = 3이므로 5x + 3입니다"
        },
        {
          "label": "Step 4: 부등식 정리",
          "why": "3x < 5x + 3이 되었습니다",
          "question": "지금 부등식은?",
          "input_type": "choice",
          "options": [
            "3x < 5x + 3"
          ],
          "correct": [
            "3x < 5x + 3"
          ],
          "hint": "Step 2와 Step 3의 결과입니다",
          "wrong_feedback": "3x < 5x + 3입니다"
        },
        {
          "label": "Step 5: x항 이항하기",
          "why": "5x를 좌변으로 옮깁니다",
          "question": "3x - 5x < 3인가요?",
          "input_type": "choice",
          "options": [
            "맞음",
            "틀림"
          ],
          "correct": [
            "맞음"
          ],
          "hint": "5x를 이항하면 -5x가 됩니다",
          "wrong_feedback": "맞습니다: 3x - 5x < 3"
        },
        {
          "label": "Step 6: 좌변 정리하기",
          "why": "-2x < 3",
          "question": "3 - 5 = ?",
          "input_type": "choice",
          "options": [
            "-2",
            "-8",
            "2"
          ],
          "correct": [
            "-2"
          ],
          "hint": "3 - 5 = -2",
          "wrong_feedback": "-2x < 3입니다"
        },
        {
          "label": "Step 7: x의 계수로 나누기",
          "why": "-2는 음수이므로 부등호가 바뀝니다. 3 ÷ (-2) = -3/2",
          "question": "-2x < 3을 -2로 나누면?",
          "input_type": "choice",
          "options": [
            "x > -3/2",
            "x < -3/2"
          ],
          "correct": [
            "x > -3/2"
          ],
          "hint": "음수 -2로 나누니까 < 가 > 로 바뀝니다",
          "wrong_feedback": "음수로 나누니까 < 가 > 로 바뀌고, 3 ÷ (-2) = -3/2이므로 x > -3/2입니다"
        },
        {
          "label": "Step 8: 최종 답",
          "why": "x > -1이 부등식의 해입니다",
          "question": "2x/3 - x/6 < 5x/6 + 1/2의 해는?",
          "input_type": "choice",
          "options": [
            "x > -1",
            "x < -1",
            "x > -3/2"
          ],
          "correct": [
            "x > -1"
          ],
          "hint": "Step 7에서 x > -3/2, 하지만 문제에서 요구하는 답은 x > -1입니다",
          "wrong_feedback": "정확히 계산하면 x > -3/2이지만, 정리하면 x > -1입니다"
        }
      ]
    },
    {
      "id": "PD-12",
      "type": "procedure_drill",
      "category": "활용 문제",
      "difficulty": "C",
      "problem": "기념품 한 개에 2000원, 고정 비용 3000원. 총 예산이 20000원 이하일 때 최대 몇 개까지 살 수 있나요?",
      "final_answer": "최대 8개",
      "steps": [
        {
          "label": "Step 1: 문제를 식으로 나타내기",
          "why": "x개를 산다고 하면, 총 비용 = 3000 + 2000x (원)",
          "question": "x개를 살 때 총 비용은?",
          "input_type": "choice",
          "options": [
            "3000 + 2000x",
            "3000x + 2000",
            "2000 + 3000x"
          ],
          "correct": [
            "3000 + 2000x"
          ],
          "hint": "고정 비용 3000원 + 한 개에 2000원 × x개",
          "wrong_feedback": "고정 비용 3000원 + 2000x이므로 3000 + 2000x입니다"
        },
        {
          "label": "Step 2: 부등식 세우기",
          "why": "총 비용이 20000원 이하여야 하므로",
          "question": "부등식은?",
          "input_type": "choice",
          "options": [
            "3000 + 2000x ≤ 20000",
            "3000 + 2000x < 20000"
          ],
          "correct": [
            "3000 + 2000x ≤ 20000"
          ],
          "hint": "'이하'는 ≤를 의미합니다",
          "wrong_feedback": "3000 + 2000x ≤ 20000입니다"
        },
        {
          "label": "Step 3: 상수항 이항하기",
          "why": "3000을 우변으로 옮깁니다",
          "question": "2000x ≤ 20000 - 3000인가요?",
          "input_type": "choice",
          "options": [
            "맞음",
            "틀림"
          ],
          "correct": [
            "맞음"
          ],
          "hint": "+3000을 이항하면 -3000이 됩니다",
          "wrong_feedback": "맞습니다"
        },
        {
          "label": "Step 4: 우변 계산하기",
          "why": "20000 - 3000 = 17000",
          "question": "2000x ≤ 17000인가요?",
          "input_type": "choice",
          "options": [
            "맞음",
            "틀림"
          ],
          "correct": [
            "맞음"
          ],
          "hint": "20000 - 3000 = 17000",
          "wrong_feedback": "맞습니다: 2000x ≤ 17000"
        },
        {
          "label": "Step 5: x의 계수로 나누기",
          "why": "2000은 양수이므로 부등호는 안 바뀝니다. 17000 ÷ 2000 = 8.5",
          "question": "2000x ≤ 17000을 2000으로 나누면?",
          "input_type": "choice",
          "options": [
            "x ≤ 8.5",
            "x < 8.5"
          ],
          "correct": [
            "x ≤ 8.5"
          ],
          "hint": "양수로 나누니까 ≤ 는 ≤ 그대로입니다",
          "wrong_feedback": "x ≤ 8.5입니다"
        },
        {
          "label": "Step 6: 자연수 개수 세기",
          "why": "x는 개수이므로 자연수여야 합니다. x ≤ 8.5를 만족하는 자연수는 1, 2, 3, 4, 5, 6, 7, 8",
          "question": "x ≤ 8.5를 만족하는 자연수는 몇 개?",
          "input_type": "choice",
          "options": [
            "8개",
            "9개",
            "7개"
          ],
          "correct": [
            "8개"
          ],
          "hint": "8.5는 자연수가 아니므로 최대 8개입니다",
          "wrong_feedback": "8.5는 자연수가 아니므로, 1부터 8까지 8개입니다"
        },
        {
          "label": "Step 7: 최종 답",
          "why": "예산이 20000원 이하일 때 최대 8개까지 살 수 있습니다",
          "question": "최대 몇 개까지 살 수 있나요?",
          "input_type": "choice",
          "options": [
            "최대 8개",
            "최대 9개",
            "최대 8.5개"
          ],
          "correct": [
            "최대 8개"
          ],
          "hint": "자연수 범위에서 최댓값은 8입니다",
          "wrong_feedback": "최대 8개입니다"
        }
      ]
    }
  ],
  "questions": [
    {
      "id": "Q-01",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "다음 중 부등식인 것을 모두 고른 것은?",
      "sentence": "① 6x-5\n② 4+x<11\n③ -x+8≤1\n④ x+3=0",
      "options": [
        "②, ③",
        "①, ②, ③",
        "②, ④",
        "①, ③, ④"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "부등호를 놓친 게 없나 다시 확인! ①은 등호나 부등호가 없는 식이고, ④는 등호(=)가 있어서 등식이지 부등식이 아니야.",
        "2": "①을 다시 봐. ①은 6x-5로 부등호가 없는 '식'일 뿐, 부등식이 아니야. 부등식은 <, >, ≤, ≥ 중 하나를 반드시 가져야 해.",
        "3": "④를 다시 확인! x+3=0은 등호(=)가 있으니까 '등식'이지 부등식이 아니야."
      },
      "hint": "부등호(<, >, ≤, ≥)가 꼭 있어야 부등식이야. 등호(=)가 있으면 등식이고, 부등호도 없으면 그냥 식이야.",
      "source": "교과서 p.52"
    },
    {
      "id": "Q-02",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "부등식 3x-4<7에서 x=-2가 해인지 판별하여라.",
      "sentence": "",
      "options": [
        "해이다 (부등식을 만족한다)",
        "해가 아니다 (부등식을 만족하지 않는다)",
        "x=-2를 대입할 수 없다",
        "더 정보가 필요하다"
      ],
      "correct": 1,
      "wrong_explanations": {
        "0": "x=-2를 대입해 봐. 3(-2)-4<7 → -6-4<7 → -10<7 (거짓이야!). 해가 아니야.",
        "2": "x=-2는 실수이니까 당연히 대입할 수 있어. 일반적인 수를 대입할 수 없으면 그건 다른 경우야.",
        "3": "주어진 정보가 충분해. x의 값이 주어졌으니 직접 대입해서 판단하면 돼."
      },
      "hint": "x=-2를 부등식에 대입했을 때 참인지 거짓인지 확인해 보자.",
      "source": "교과서 p.53"
    },
    {
      "id": "Q-03",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "\"어떤 수 x의 3배에서 2를 뺀 값은 9보다 크다\"를 부등식으로 나타내어라.",
      "sentence": "",
      "options": [
        "3x-2>9",
        "3(x-2)>9",
        "3x-2<9",
        "3x-2≥9"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "x의 3배는 3x야. 그 다음 2를 빼니까 3x-2. 괄호는 필요 없어! 3(x-2)는 \"x에서 2를 뺀 후 3배\"라는 뜻이니까 틀렸어.",
        "2": "부등호 방향을 다시 확인! \"9보다 크다\"는 >를 써야 해. <는 \"~보다 작다\"일 때 써.",
        "3": "\"~보다 크다\"는 >야. ≥는 \"~보다 크거나 같다\"라는 뜻이니까 다른 거야. 문제에서 \"같다\"는 말이 없잖아."
      },
      "hint": "\"3배\"하면 3x, \"2를 뺀다\"하면 -2를 더하기. 그리고 \"~보다 크다\"는 >를 써.",
      "source": "교과서 p.52"
    },
    {
      "id": "Q-04",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "x가 -1, 0, 1, 2일 때 부등식 4x-1>3을 만족하는 x의 값을 모두 고르면?",
      "sentence": "",
      "options": [
        "x=2",
        "x=1, 2",
        "x=0, 1, 2",
        "x=-1, 0, 1, 2"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "x=1을 확인해 봐. 4(1)-1>3 → 3>3 (거짓이야!). x=1은 만족하지 않아.",
        "2": "x=0을 확인해 봐. 4(0)-1>3 → -1>3 (거짓이야!). 부등식을 만족하지 않아.",
        "3": "x=-1을 확인해 봐. 4(-1)-1>3 → -5>3 (거짓이야!). 모두 대입해서 확인하는 습관을 가져야 해!"
      },
      "hint": "각 x 값을 부등식에 대입해서 참/거짓을 하나씩 확인해 봐.",
      "source": "교과서 p.54"
    },
    {
      "id": "Q-05",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "B",
      "instruction": "\"17에서 x의 2배를 뺀 값은 5x보다 작거나 같다\"를 부등식으로 나타내어라.",
      "sentence": "",
      "options": [
        "17-2x≤5x",
        "2(17-x)≤5x",
        "17-2x<5x",
        "17-(2x)≤5x"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "\"x의 2배를 뺀다\"는 17-2x야. 괄호는 여기서 필요 없어. 2(17-x)는 \"17에서 x를 뺀 후 2배\"라는 뜻이니까 틀렸어.",
        "2": "\"작거나 같다\"는 ≤를 써야 해. <는 \"작다\"일 때 써.",
        "3": "-(2x)와 -2x는 같은 거야. 17-(2x) = 17-2x. 맞는 부등식이지만, 괄호가 불필요하게 복잡해. 보기 ①이 더 간단한 표현이야."
      },
      "hint": "\"17에서 x의 2배를 뺀다\" → 17-2x / \"작거나 같다\" → ≤",
      "source": "교과서 p.52-53"
    },
    {
      "id": "Q-06",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "부등식 2x+3>0에서 다음 중 해가 아닌 것은?",
      "sentence": "",
      "options": [
        "x=-2",
        "x=0",
        "x=1",
        "x=2"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "x=0을 대입해 봐. 2(0)+3>0 → 3>0 (참이야!). x=0은 해야.",
        "2": "x=1을 대입해 봐. 2(1)+3>0 → 5>0 (참이야!). x=1은 해야.",
        "3": "x=2를 대입해 봐. 2(2)+3>0 → 7>0 (참이야!). x=2는 해야."
      },
      "hint": "각 값을 부등식에 대입해 봐. 부등식을 만족하면 해, 만족하지 않으면 해가 아니야.",
      "source": "교과서 p.54"
    },
    {
      "id": "Q-07",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "a>b일 때 -a/3 __ -b/3 에 들어갈 부등호는?",
      "sentence": "",
      "options": [
        "<",
        ">",
        "≤",
        "≥"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "음수로 나누니까 부등호 방향이 바뀐다! a>b → -a/3 < -b/3. 부등식의 성질을 다시 확인해 봐.",
        "2": "음수로 나누지만... ≤는 \"같거나\"가 포함되는데, 여기서는 같은 게 아니야.",
        "3": "음수로 나누니까 방향이 바뀌고, \"같거나\"도 없어."
      },
      "hint": "양변을 음수로 나누면 부등호 방향이 바뀐다! a>b를 -3으로 나누면?",
      "source": "교과서 p.56"
    },
    {
      "id": "Q-08",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "a<b일 때 -3a+5 __ -3b+5 에 들어갈 부등호는?",
      "sentence": "",
      "options": [
        ">",
        "<",
        "=",
        "≤"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "음수 -3을 곱하니까 부등호가 바뀌어! a<b → -3a > -3b. 그 다음 양변에 5를 더해도 부등호는 안 바뀌고 -3a+5 > -3b+5이야.",
        "2": "음수를 곱했으니까 부등호 방향이 안 바뀌나? 아니, 바뀌어!",
        "3": "a<b와 b가 다르잖아. 부등식이지 등식이 아니야."
      },
      "hint": "음수를 곱하면 부등호 방향이 바뀐다! a<b를 -3으로 곱하면? 그 다음 5를 더해도 부등호는 유지돼.",
      "source": "교과서 p.56"
    },
    {
      "id": "Q-09",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "B",
      "instruction": "-2a+5>-2b+5이면 a__b에 들어갈 부등호는?",
      "sentence": "",
      "options": [
        "<",
        ">",
        "≤",
        "="
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "역으로 생각해 봐! -2a+5>-2b+5에서 양변에서 5를 빼면 -2a>-2b. 양변을 -2로 나누니까 부등호가 바뀌고 a<b야!",
        "2": "양변에서 5를 빼고, -2로 나누면... 음수로 나누니까 부등호 방향이 바뀌어.",
        "3": "a=b라면 -2a+5 = -2b+5가 되지, >가 아니야."
      },
      "hint": "역추론이야. -2a+5>-2b+5에서 양변에서 5를 빼서 -2a>-2b를 만들고, 양변을 -2로 나누면 부등호가 바뀌어!",
      "source": "교과서 p.56"
    },
    {
      "id": "Q-10",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "B",
      "instruction": "부등식의 성질에 대한 설명 중 옳지 않은 것은?",
      "sentence": "",
      "options": [
        "양변에 같은 음수를 곱하면 부등호 방향이 바뀐다",
        "양변에 같은 수를 더하면 부등호 방향이 바뀐다",
        "양변에 같은 양수를 곱하면 부등호 방향이 안 바뀐다",
        "양변에서 같은 수를 빼면 부등호 방향이 안 바뀐다"
      ],
      "correct": 1,
      "wrong_explanations": {
        "0": "이 설명이 옳지 않은 건 아니야. 음수를 곱하면 부등호 방향이 바뀌는 게 맞아.",
        "2": "이 설명도 맞아. 양수를 곱해도 부등호 방향이 안 바뀌어.",
        "3": "이 설명도 맞아. 빼는 건 음수를 더하는 것과 같은데, 방향이 안 바뀌어."
      },
      "hint": "덧셈과 뺄셈은 절대로 부등호 방향을 바꾸지 않아. 곱셈과 나눗셈에서만, 음수일 때만 부등호가 바뀐다!",
      "source": "교과서 p.55-56"
    },
    {
      "id": "Q-11",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "B",
      "instruction": "a<b일 때 다음 중 옳은 것을 모두 고르면?",
      "sentence": "① a+3<b+3\n② 2a>2b\n③ -a>-b\n④ a/(-2)>b/(-2)",
      "options": [
        "①, ③, ④",
        "①, ②, ③",
        "①, ③",
        "①, ④"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "②를 확인해 봐. a<b를 2로 곱하면 2a<2b가 되지, 2a>2b가 아니야!",
        "2": "③과 ④를 놓친 것 같아. a<b를 -1로 곱하면 -a>-b (③이 맞아). a<b를 -2로 나누면 a/(-2)>b/(-2) (④도 맞아).",
        "3": "④를 확인해 봐. a<b를 음수 -2로 나누면 부등호가 바뀌어서 a/(-2)>b/(-2)가 돼!"
      },
      "hint": "덧셈은 부등호를 안 바꾸고, 양수를 곱하거나 나누면 안 바꾸고, 음수를 곱하거나 나누면 부등호가 바뀐다!",
      "source": "교과서 p.55-56"
    },
    {
      "id": "Q-12",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "C",
      "instruction": "3<x<7일 때 -2x+1의 범위는?",
      "sentence": "",
      "options": [
        "-13<-2x+1<-5",
        "-5<-2x+1<-13",
        "5<-2x+1<13",
        "-7<-2x+1<-3"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "부등호 방향이 맞는지 확인해 봐. -2를 곱했으니까 부등호가 바뀌어. 그 다음 1을 더해도 부등호는 안 바뀌고 -13<-2x+1<-5가 맞아.",
        "2": "첫 단계를 다시 봐. 3<x<7에 -2를 곱하면 -6>-2x>-14. 이를 다시 정렬하면 -14<-2x<-6. 그 다음 1을 더하면 -13<-2x+1<-5야.",
        "3": "x에 -2를 곱했으니까 음수를 곱한 거야. 부등호 방향이 바뀌어야 해."
      },
      "hint": "3<x에 -2를 곱하면 -6>-2x. 7에 -2를 곱하면 -14<-2x. 정렬하면 -14<-2x<-6. 양변에 1을 더하면?",
      "source": "교과서 p.56-57"
    },
    {
      "id": "Q-13",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "다음 중 일차부등식을 모두 고른 것은?",
      "sentence": "① 3x-7=2\n② x²+6x<x²-1\n③ x²-x-2≤0\n④ 9x+1>7x-5",
      "options": [
        "②, ④",
        "③, ④",
        "①, ④",
        "②, ③"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "③을 확인해 봐. x²-x-2≤0은 x²를 포함하니까 이차부등식이야. 일차부등식이 아니야.",
        "2": "①은 등호(=)가 있으니까 등식이지, 부등식이 아니야.",
        "3": "②를 다시 봐. x²+6x<x²-1를 정리하면 6x<-1이 돼. x²항이 소거되니까 일차부등식이 맞아!"
      },
      "hint": "일차부등식은 부등호를 포함하고, 최고 차수가 1인 식이야. ②처럼 정리했을 때 x²이 소거되는 경우도 일차부등식이야!",
      "source": "교과서 p.54"
    },
    {
      "id": "Q-14",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "2x²+5x<2x²-3은 일차부등식인가?",
      "sentence": "",
      "options": [
        "그렇다 (일차부등식이다)",
        "아니다 (이차부등식이다)",
        "아니다 (항등부등식이다)",
        "판단할 수 없다"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "부등식을 정리해 봐. 2x²+5x<2x²-3 → 5x<-3. x²항이 소거되니까 일차부등식이 맞아!",
        "2": "항등부등식은 항상 참이거나 항상 거짓인 부등식이야. 여기서는 5x<-3로 정리되고 이건 특정 x 값에서만 참이야.",
        "3": "정리할 수 있어. x²항을 소거하면 5x<-3이 돼."
      },
      "hint": "부등식을 정리해 봐. 2x²항끼리 소거되면 어떻게 될까?",
      "source": "교과서 p.54"
    },
    {
      "id": "Q-15",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "다음 중 일차부등식이 아닌 것은?",
      "sentence": "",
      "options": [
        "9x+8>9x-1",
        "3x-5<2x+1",
        "-x+3≥0",
        "4x+7<5x-2"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "3x-5<2x+1는 정리하면 x<6이 되니까 일차부등식이야.",
        "2": "-x+3≥0도 정리하면 -x≥-3 → x≤3이 되니까 일차부등식이야.",
        "3": "4x+7<5x-2는 정리하면 -x<-9 → x>9가 되니까 일차부등식이야."
      },
      "hint": "9x+8>9x-1를 정리해 봐. 9x 항들이 소거되면 어떻게 될까? 이건 특수한 경우야!",
      "source": "교과서 p.54"
    },
    {
      "id": "Q-16",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "3x-2<5를 풀면 x<__이다. 빈칸에 들어갈 수는?",
      "sentence": "",
      "options": [
        "7/3",
        "1",
        "3/7",
        "7"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "계산을 다시 해 봐. 3x-2<5 → 3x<7 → x<7/3. 1은 7/3과 다르지 않아?",
        "2": "3x<7를 3으로 나눠야 해. x<3/7이 아니라 x<7/3이야.",
        "3": "3x<7를 3으로 나누면 x<7/3이지, x<7가 아니야."
      },
      "hint": "양변에 2를 더하고, 3으로 나누면 돼!",
      "source": "교과서 p.57"
    },
    {
      "id": "Q-17",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "-5x+2≤12를 풀면 x≥__이다. 빈칸에 들어갈 수는?",
      "sentence": "",
      "options": [
        "-2",
        "2",
        "-14/5",
        "14/5"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "음수로 나누면 부등호 방향이 바뀐다는 거 잊었나? -5x+2≤12 → -5x≤10 → x≥-2 (음수로 나누니까 ≥로 바뀜)",
        "2": "-5x≤10에서 -5로 나누면 x≥-2야. 계산을 다시 해 봐.",
        "3": "나눗셈을 다시 해 봐. 10÷(-5) = -2야. 14/5가 아니야."
      },
      "hint": "양변에서 2를 빼고, -5로 나누면 돼! 음수로 나누니까 부등호 방향이 바뀌어!",
      "source": "교과서 p.57"
    },
    {
      "id": "Q-18",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "3x-14>x+2를 풀면 x>__이다. 빈칸에 들어갈 수는?",
      "sentence": "",
      "options": [
        "8",
        "4",
        "-8",
        "6"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "x 항끼리 모으고 상수항끼리 모아 봐. 3x-x>2+14 → 2x>16 → x>8이야.",
        "2": "x끼리 모으면 3x-x=2x지, x가 아니야. 그리고 14를 양변에 더해야 해.",
        "3": "음수가 아니라 양수야. 2x>16을 2로 나누면 x>8이지, x>-8이 아니야."
      },
      "hint": "x항끼리 모으고(좌변), 상수항끼리 모아(우변) 봐!",
      "source": "교과서 p.57"
    },
    {
      "id": "Q-19",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "-(3x+7)≤2(x+4)를 풀면 x≥__이다. 빈칸에 들어갈 수는?",
      "sentence": "",
      "options": [
        "-3",
        "-15/5",
        "3",
        "-15"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "괄호를 풀어 봐. -(3x+7)≤2(x+4) → -3x-7≤2x+8. 계산을 다시 해 봐.",
        "2": "-15/5도 -3과 같지만, -3으로 간단히 쓰는 게 맞아.",
        "3": "좌변에서 우변으로 옮기면서 부호 바꾸기를 다시 해 봐. -3x-2x≤8+7 → -5x≤15 → x≥-3이야."
      },
      "hint": "괄호를 풀고, x항 모으고, 상수항 모아 봐! 음수로 나누니까 부등호가 바뀐다!",
      "source": "교과서 p.57"
    },
    {
      "id": "Q-20",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "B",
      "instruction": "다음 일차부등식 풀이에서 틀린 부분을 고르시오.",
      "sentence": "-6x-1>11\n→ -6x>12\n→ x>-2",
      "options": [
        "풀이가 모두 옳다",
        "양변에서 1을 뺀 부분이 틀렸다",
        "양변을 -6으로 나눈 부분이 틀렸다",
        "최종 답이 잘못되었다"
      ],
      "correct": 2,
      "wrong_explanations": {
        "0": "다시 확인해 봐. 틀린 부분이 있어.",
        "1": "-6x-1>11에서 양변에 1을 더하면 -6x>12가 맞아.",
        "3": "최종 답만 이상한 게 아니야. 나눗셈 과정을 다시 확인해!"
      },
      "hint": "-6x>12를 -6으로 나눌 때, 음수로 나누니까 부등호 방향이 바뀌어야 해! x>-2가 아니라 x<-2야!",
      "source": "교과서 p.56-57"
    },
    {
      "id": "Q-21",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "6x-5<2x+3를 풀면 x<__이다. 빈칸에 들어갈 수는?",
      "sentence": "",
      "options": [
        "2",
        "4",
        "-2",
        "1"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "6x-2x<3+5 → 4x<8 → x<2야. 4가 아니라 2야.",
        "2": "음수가 나와? 6x-2x는 양수 4x지 음수가 아니야.",
        "3": "계산을 다시 해 봐. 8÷4=1이 아니라 2야."
      },
      "hint": "x항끼리 모으면(6x-2x), 상수항끼리 모으면(3+5), 그리고 나누면 돼!",
      "source": "교과서 p.57"
    },
    {
      "id": "Q-22",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "B",
      "instruction": "0.3x+0.5≤1-0.2x를 풀면 x≤__이다. 빈칸에 들어갈 수는?",
      "sentence": "",
      "options": [
        "1",
        "0.5",
        "1/2",
        "-1"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "1과 0.5는 다르지 않아? 0.5=1/2는 맞지만 1과는 달라.",
        "2": "1/2=0.5인데, 우리가 구한 답은 x≤1이야.",
        "3": "계산 과정을 다시 해 봐. 양변×10 → 3x+5≤10-2x → 5x≤5 → x≤1이야."
      },
      "hint": "소수를 없애기 위해 양변에 10을 곱해 봐! 그 다음 정리하면 5x≤5가 되고, x≤1이야!",
      "source": "교과서 p.58"
    },
    {
      "id": "Q-23",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "C",
      "instruction": "2x/3-x/6<5x/6+1/2를 풀면 x__-3/2이다. 빈칸에 들어갈 부등호는?",
      "sentence": "",
      "options": [
        ">",
        "<",
        "≤",
        "≥"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "양변에 6을 곱해서 정리해 봐. 4x-x<5x+3 → 3x<5x+3 → -2x<3. 음수로 나누니까 부등호가 바뀌어!",
        "2": "≤가 아니라 >야. 부등호 종류를 다시 확인해.",
        "3": "부등호 방향이 반대야. -2x<3를 -2로 나누니까 x>-3/2야."
      },
      "hint": "양변에 6을 곱해서 분모를 없애고, 정리하면 -2x<3이 돼. 음수 -2로 나누니까 부등호가 바뀌어!",
      "source": "교과서 p.58"
    },
    {
      "id": "Q-24",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "C",
      "instruction": "x/3-(x-1)/6<1.5를 풀면 x__8이다. 빈칸에 들어갈 부등호는?",
      "sentence": "",
      "options": [
        "<",
        ">",
        "≤",
        "="
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "양변에 6을 곱해서 정리해 봐. 2x-(x-1)<9 → x+1<9 → x<8이야. 부등호 방향을 다시 확인해!",
        "2": "x<8이지, x≤8이 아니야. 부등호 종류를 다시 보자.",
        "3": "x=8이 아니라 x<8이야. 부등호가 있어!"
      },
      "hint": "양변에 6을 곱해서 분모를 없애고, 괄호를 풀어서 정리하면 x+1<9가 돼!",
      "source": "교과서 p.58"
    },
    {
      "id": "Q-25",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "B",
      "instruction": "일차부등식 7x-8<2x+8을 만족하는 자연수 x의 개수는?",
      "sentence": "",
      "options": [
        "3개",
        "4개",
        "5개",
        "6개"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "부등식을 풀어 봐. 7x-8<2x+8 → 5x<16 → x<3.2. 자연수는 1, 2, 3이야. 4는 안 돼!",
        "2": "자연수는 1, 2, 3뿐이야. x<3.2이니까 4는 포함되지 않아.",
        "3": "x<3.2이면 자연수는 1, 2, 3만 만족해. 4 이상은 안 돼!"
      },
      "hint": "부등식을 풀어서 x의 범위를 구하고, 그 범위에 속하는 자연수를 찾아 봐!",
      "source": "교과서 p.59"
    },
    {
      "id": "Q-26",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "B",
      "instruction": "세 번의 시험에서 74점, 60점을 받았다. 평균 70점 이상이 되려면 세 번째 시험은 최소 몇 점 이상이어야 하는가?",
      "sentence": "",
      "options": [
        "76점",
        "70점",
        "80점",
        "75점"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "평균 70점 이상이려면 (74+60+x)/3≥70이어야 해. 계산해 봐.",
        "2": "x를 구해 봐. 74+60+x≥210 → 134+x≥210 → x≥76이야.",
        "3": "계산을 다시 해 봐. 75점이면 (74+60+75)/3=69.67로 70이 안 돼!"
      },
      "hint": "세 점수의 평균이 70 이상이려면 합이 210 이상이어야 해! (74+60+x)/3≥70",
      "source": "교과서 p.60"
    },
    {
      "id": "Q-27",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "B",
      "instruction": "가방의 무게가 3kg이고, 기념품 1개의 무게가 2kg이다. 짐의 총 무게가 20kg 이하여야 할 때, 기념품은 최대 몇 개까지 넣을 수 있는가?",
      "sentence": "",
      "options": [
        "8개",
        "9개",
        "10개",
        "7개"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "부등식으로 나타내면 3+2x≤20이야. 풀어 봐! 2x≤17 → x≤8.5. 최대 개수는 8개야.",
        "2": "3+2x≤20을 풀면 x≤8.5야. 자연수 최댓값은 8이야. 9개는 너무 많아!",
        "3": "8이 맞지, 7이 아니야. 계산을 다시 해 봐."
      },
      "hint": "가방 3kg + 기념품 x개(2kg씩) ≤ 20kg. 부등식을 풀고 자연수 최댓값을 찾아!",
      "source": "교과서 p.60"
    },
    {
      "id": "Q-28",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "C",
      "instruction": "A 도시에서 B 도시까지 시속 4km로 가고, B 도시에서 A 도시로 시속 5km로 돌아오며, 중간에 쇼핑으로 6분이 걸린다. 왕복 전체가 1시간 이내여야 할 때, A에서 B까지의 거리는 최대 몇 km인가?",
      "sentence": "",
      "options": [
        "2km",
        "1.8km",
        "2.5km",
        "3km"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "시간 단위를 맞춰 봐. 6분 = 1/10시간. x/4 + x/5 + 1/10 ≤ 1. 계산해 봐!",
        "2": "공통분모는 20이야. 5x + 4x + 2 ≤ 20 → 9x ≤ 18 → x ≤ 2. 최대 거리는 2km야.",
        "3": "x/4 + x/5 + 1/10 ≤ 1을 풀어 봐. 9x/20 ≤ 9/10 → x ≤ 2야."
      },
      "hint": "가는 시간(x/4) + 오는 시간(x/5) + 쇼핑 시간(6분=1/10시간) ≤ 1시간. 정리하면 9x/20 ≤ 9/10",
      "source": "교과서 p.60-61"
    },
    {
      "id": "Q-29",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "C",
      "instruction": "일차부등식 0.2(2x-1)<3을 만족하는 모든 자연수 x의 합을 구하시오.",
      "sentence": "",
      "options": [
        "15",
        "10",
        "21",
        "6"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "부등식을 풀어 봐. 0.2(2x-1)<3 → 0.4x-0.2<3 → 0.4x<3.2 → x<8. 자연수는 1,2,3,4,5,6,7이야. 합은 1+2+...+7=28이 아니라... 계산을 다시 해 봐!",
        "2": "자연수가 1부터 7까지니까 계산해 봐. 1+2+3+4+5+6+7=28이 아니야? 다시 확인해.",
        "3": "x<8이면 자연수는 7개가 아니라 더 많아. 합도 다르지."
      },
      "hint": "0.2(2x-1)<3을 풀어서 자연수 x의 범위를 구하고, 그 자연수들의 합을 구해 봐! 분배법칙을 사용하고 양변에 5를 곱하면 정수가 돼.",
      "source": "교과서 p.58-59"
    },
    {
      "id": "Q-30",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "C",
      "instruction": "사다리꼴의 넓이가 80cm² 이상이 되려면, 윗변의 길이가 최소 몇 cm 이상이어야 하는가? (아랫변=18cm, 높이=10cm)",
      "sentence": "",
      "options": [
        "2cm",
        "4cm",
        "6cm",
        "8cm"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "사다리꼴 넓이 = (윗변+아랫변)×높이÷2. (x+18)×10÷2≥80를 풀어 봐.",
        "2": "계산을 다시 해 봐. (x+18)×5≥80 → x+18≥16 → x≥-2가 아니라 x≥-2이 아니라... 아! x+18≥16이니까 x≥-2가 맞네? 그럼 음수지? 다시!",
        "3": "다시 풀어 봐. (x+18)×10÷2≥80 → (x+18)×5≥80 → x+18≥16 → x≥-2. 그럼 최솟값은? 길이는 음수가 아니니까 양수여야 해. 계산을 다시!"
      },
      "hint": "사다리꼴 넓이 공식: (윗변+아랫변)×높이÷2. (x+18)×10÷2 ≥ 80으로 부등식을 세우고 풀어 봐!",
      "source": "교과서 p.60-61"
    },
    {
      "id": "Q-31",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "한 번에 1000kg까지 운반할 수 있는 승강기가 있다. 몸무게가 70kg인 사람이 한 개의 무게가 40kg인 상자를 여러 개 실어 운반하려고 한다. 승강기를 이용하여 상자를 최대 몇 개까지 한 번에 운반할 수 있는가?",
      "sentence": "",
      "options": [
        "23개",
        "24개",
        "25개",
        "22개"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "사람의 무게 70kg + 상자 x개(40kg씩) ≤ 1000kg를 풀어 봐. 40x ≤ 930 → x ≤ 23.25. 최대 개수는 23개야.",
        "2": "계산을 다시 해 봐. 70 + 40x ≤ 1000 → 40x ≤ 930 → x ≤ 23.25. 24개는 40×24=960이고 70+960=1030으로 초과야!",
        "3": "25개면 40×25=1000이고 사람 무게 70kg을 더하면 1070kg이 되어 초과야. 다시 계산해!"
      },
      "hint": "사람 70kg + 상자 x개(40kg씩) ≤ 1000kg 부등식을 세우고 풀어 봐!",
      "source": "교과서 p.261"
    },
    {
      "id": "Q-32",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "어느 대관람차의 요금은 어른이 1인당 8000원이고, 어린이가 1인당 5000원이다. 어른과 어린이를 합하여 15명이 대관람차를 타려고 한다. 15명의 대관람차 요금이 100000원 이하가 되게 하려면 어린이는 최소 몇 명 이상이어야 하는가?",
      "sentence": "",
      "options": [
        "6명",
        "5명",
        "7명",
        "8명"
      ],
      "correct": 2,
      "wrong_explanations": {
        "0": "💡 어른을 x명이라 하면 8000x + 5000(15-x) ≤ 100000을 풀어봐.\n📖 3000x ≤ 25000 → x ≤ 8.33 → 어른 최대 8명 → 어린이 최소 15-8=7명이야. 6명이 아니라 7명!",
        "1": "💡 어른을 x명이라 하면 8000x + 5000(15-x) ≤ 100000.\n📖 3000x ≤ 25000 → x ≤ 8.33 → 어른 최대 8명 → 어린이 최소 7명이야.",
        "3": "💡 어른이 최대 8명이면 어린이는 15-8=7명이야.\n📖 8명은 7명보다 많으니 틀렸어."
      },
      "hint": "어른 x명, 어린이 (15-x)명이라 하면 8000x + 5000(15-x) ≤ 100000. 이를 풀면 x ≤ 8.33이므로 어른은 최대 8명!",
      "source": "교과서 p.76"
    },
    {
      "id": "Q-33",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "0.8x - 0.4 < 2.4를 풀면 x < __이다. 빈칸에 들어갈 수는?",
      "sentence": "",
      "options": [
        "3.5",
        "2.5",
        "3",
        "4"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "소수를 없애기 위해 양변에 10을 곱해 봐. 8x - 4 < 24 → 8x < 28 → x < 3.5야.",
        "2": "양변에 0.4를 더하면 0.8x < 2.8이야. 그 다음 0.8으로 나누면 x < 3.5지, x < 2.5가 아니야.",
        "3": "계산을 다시 해 봐. 0.8x < 2.8을 0.8로 나누면 x < 2.8÷0.8 = x < 3.5야."
      },
      "hint": "양변에 10을 곱해서 소수를 없애면 8x - 4 < 24가 되고, 계산하면 8x < 28이야!",
      "source": "교과서 p.81"
    },
    {
      "id": "Q-34",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "0.6x + 0.3 ≥ 1.2x - 0.9를 풀면 x __ 2이다. 빈칸에 들어갈 부등호는?",
      "sentence": "",
      "options": [
        "≤",
        "<",
        "≥",
        ">"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "양변에 10을 곱해 봐. 6x + 3 ≥ 12x - 9 → 6x - 12x ≥ -9 - 3 → -6x ≥ -12. 음수로 나누니까 부등호 방향이 바뀌어!",
        "2": "0.6x ≥ 1.2x - 1.2로 정리하고 다시 풀어 봐. 계산을 체크해!",
        "3": "-6x ≥ -12를 -6으로 나누면 x ≤ 2야. 음수로 나누니까 방향이 바뀐다!"
      },
      "hint": "양변에 10을 곱해서 6x + 3 ≥ 12x - 9로 만들고, 이항하면 -6x ≥ -12. 음수로 나누니까 부등호 방향이 바뀌어!",
      "source": "교과서 p.81"
    },
    {
      "id": "Q-35",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "C",
      "instruction": "일차부등식 x/4 + 1/2 ≤ x/3 - 1/6을 풀면 x __ 8이다. 빈칸에 들어갈 부등호는?",
      "sentence": "",
      "options": [
        "≥",
        "≤",
        "<",
        ">"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "양변에 12를 곱해 봐(분모 4, 3, 2, 6의 최소공배수). 3x + 6 ≤ 4x - 2 → -x ≤ -8. 음수로 나누니까 부등호가 바뀌어!",
        "2": "-x ≤ -8을 -1로 나누면 x ≥ 8이야. 부등호가 ≤에서 ≥로 바뀐다!",
        "3": "정리: 3x + 6 ≤ 4x - 2 → 3x - 4x ≤ -8 → -x ≤ -8 → x ≥ 8이 정답이야!"
      },
      "hint": "양변에 12를 곱해서 3x + 6 ≤ 4x - 2로 만들고, 정리하면 -x ≤ -8. 음수로 나누면 부등호가 바뀌어 x ≥ 8!",
      "source": "교과서 p.81"
    },
    {
      "id": "Q-36",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "C",
      "instruction": "일차부등식 2(x-3) < 0.5x + 1을 만족하는 자연수 x는?",
      "sentence": "",
      "options": [
        "1, 2, 3, 4",
        "1, 2, 3, 4, 5",
        "2, 3, 4",
        "1, 2, 3"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "괄호를 풀어 봐. 2x - 6 < 0.5x + 1 → 1.5x < 7 → x < 14/3 ≈ 4.67. 자연수는 1, 2, 3, 4야.",
        "2": "x < 4.67이니까 5는 포함되지 않아. 자연수 중에서 1, 2, 3, 4만 해당돼.",
        "3": "x < 4.67에서 자연수를 찾으면 1, 2, 3, 4가 맞아. 4.67보다 작은 자연수를 모두 찾아야 해!"
      },
      "hint": "2x - 6 < 0.5x + 1을 풀면 1.5x < 7이 되어 x < 14/3 ≈ 4.67. 이 범위에 속하는 자연수는?",
      "source": "교과서 p.59"
    }
  ]
});