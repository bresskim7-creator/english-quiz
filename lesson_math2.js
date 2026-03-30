// lesson_math2.js — 문자와 식 (v1.0)
// JSONP wrapper
__loadLesson({
  "lesson": "math2",
  "subject": "math",
  "title": "수학 2단원: 문자와 식",
  "subtitle": "지수법칙 / 단항식의 곱셈과 나눗셈 / 다항식의 계산",
  "publisher": "교과서 기반",
  "grade": 2,
  "version": "1.0",
  "build_date": "2026-03-30",
  "build_note": "3모드: 개념카드(10장) + 절차연습(15문제) + 실전문제(33문항). 학생선수 맞춤. 함정 문제 다수.",
  "modes": [
    "concept_card",
    "procedure_drill",
    "exam_prep"
  ],
  "concept_cards": [
    {
      "id": "MC-01",
      "type": "math_concept_card",
      "title": "거듭제곱의 기본 개념",
      "front": "거듭제곱에서 '밑'과 '지수'가 뭐야?",
      "back_definition": "밑(base): 반복되는 수\n지수(exponent): 곱해지는 횟수\na^n에서 a는 밑, n은 지수",
      "back_easy": "쉽게 말하면, a³ = a × a × a 에서:\n- 밑 = a (곱해지는 수)\n- 지수 = 3 (몇 번 곱하는지)\n\n그리고 중요한 건, a²와 -a²는 다르다!\na² = a × a\n-a² = -(a × a)  ← 음수 기호가 곱해지는 게 아니야!",
      "back_example": "2⁴ = 2 × 2 × 2 × 2 = 16 (밑 2, 지수 4)\nx³ = x × x × x (밑 x, 지수 3)\n(-3)² = 9 (밑이 -3 전체)\n-3² = -9 (밑이 3, 음수 기호는 따로)",
      "exam_tip": "(-3)²와 -3², (2x)²와 2x²의 차이가 함정! 괄호가 있으면 괄호 안 전체가 밑이야."
    },
    {
      "id": "MC-02",
      "type": "math_concept_card",
      "title": "지수법칙 ① - 같은 밑의 곱셈",
      "front": "a² × a³을 어떻게 간단히 해?",
      "back_definition": "밑이 같은 거듭제곱의 곱셈: a^m × a^n = a^(m+n)\n(지수를 더한다!)",
      "back_easy": "쉽게 말하면:\na² × a³ = (a × a) × (a × a × a) = a⁵\n= a^(2+3)\n\n핵심: 밑이 같으면 지수끼리 더한다!\n주의: 밑이 다르면 못 더해! 2² × 3² ≠ 6⁴",
      "back_example": "2³ × 2⁴ = 2^(3+4) = 2⁷ = 128\nx² × x⁵ = x⁷\na⁴ × a × a³ = a^(4+1+3) = a⁸\n(주의: a^(4+3) = a⁷ 아님!)",
      "exam_tip": "밑이 같은지 반드시 확인! x² × y³ 같은 문제에서 실수하기 쉬워. 밑이 다르면 못 더한다!",
      "visual_svg": "<svg viewBox=\"0 0 360 220\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto\"><defs><style>.t{font-size:15px;font-weight:bold;text-anchor:middle;fill:#333}.lb{font-size:13px;text-anchor:middle;fill:#333}.sm{font-size:11px;text-anchor:middle;fill:#555}.bx{fill:#e3f2fd;stroke:#1976d2;stroke-width:2;rx:5}</style></defs><text x=\"180\" y=\"20\" class=\"t\">a² × a³ = a⁵</text><g><text x=\"50\" y=\"55\" class=\"lb\">a²</text><circle cx=\"35\" cy=\"70\" r=\"8\" fill=\"#fff9c4\" stroke=\"#f57f17\" stroke-width=\"1.5\"/><text x=\"35\" y=\"74\" class=\"sm\">a</text><circle cx=\"65\" cy=\"70\" r=\"8\" fill=\"#fff9c4\" stroke=\"#f57f17\" stroke-width=\"1.5\"/><text x=\"65\" y=\"74\" class=\"sm\">a</text></g><text x=\"110\" y=\"75\" class=\"lb\" style=\"font-size:16px\">×</text><g><text x=\"180\" y=\"55\" class=\"lb\">a³</text><circle cx=\"155\" cy=\"70\" r=\"8\" fill=\"#c8e6c9\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/><text x=\"155\" y=\"74\" class=\"sm\">a</text><circle cx=\"180\" cy=\"70\" r=\"8\" fill=\"#c8e6c9\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/><text x=\"180\" y=\"74\" class=\"sm\">a</text><circle cx=\"205\" cy=\"70\" r=\"8\" fill=\"#c8e6c9\" stroke=\"#2e7d32\" stroke-width=\"1.5\"/><text x=\"205\" y=\"74\" class=\"sm\">a</text></g><text x=\"280\" y=\"75\" class=\"lb\" style=\"font-size:16px\">=</text><g><text x=\"330\" y=\"55\" class=\"lb\">a⁵</text><circle cx=\"305\" cy=\"70\" r=\"8\" fill=\"#ffccbc\" stroke=\"#d84315\" stroke-width=\"1.5\"/><text x=\"305\" y=\"74\" class=\"sm\">a</text><circle cx=\"325\" cy=\"70\" r=\"8\" fill=\"#ffccbc\" stroke=\"#d84315\" stroke-width=\"1.5\"/><text x=\"325\" y=\"74\" class=\"sm\">a</text><circle cx=\"345\" cy=\"70\" r=\"8\" fill=\"#ffccbc\" stroke=\"#d84315\" stroke-width=\"1.5\"/><text x=\"345\" y=\"74\" class=\"sm\">a</text><circle cx=\"365\" cy=\"70\" r=\"8\" fill=\"#ffccbc\" stroke=\"#d84315\" stroke-width=\"1.5\" style=\"opacity:0\"/><circle cx=\"305\" cy=\"90\" r=\"8\" fill=\"#ffccbc\" stroke=\"#d84315\" stroke-width=\"1.5\"/><text x=\"305\" y=\"94\" class=\"sm\">a</text><circle cx=\"325\" cy=\"90\" r=\"8\" fill=\"#ffccbc\" stroke=\"#d84315\" stroke-width=\"1.5\"/><text x=\"325\" y=\"94\" class=\"sm\">a</text></g><rect x=\"70\" y=\"130\" width=\"220\" height=\"60\" fill=\"#fff9c4\" stroke=\"#f57f17\" stroke-width=\"2\" rx=\"5\"/><text x=\"180\" y=\"152\" class=\"lb\">지수법칙 ①</text><text x=\"180\" y=\"175\" class=\"sm\" style=\"font-size:12px\">a^m × a^n = a^(m+n)</text><text x=\"180\" y=\"195\" class=\"sm\">지수끼리 더한다!</text></svg>"
    },
    {
      "id": "MC-03",
      "type": "math_concept_card",
      "title": "지수법칙 ② - 거듭제곱의 거듭제곱",
      "front": "(a²)³ = a⁶이 되는 이유는?",
      "back_definition": "거듭제곱으로 나타낸 수의 거듭제곱: (a^m)^n = a^(mn)\n(지수를 곱한다!)",
      "back_easy": "쉽게 말하면:\n(a²)³ = a² × a² × a² = a^(2+2+2) = a⁶\n= a^(2×3)\n\n핵심: 괄호 밖 지수가 괄호 안 지수를 몇 번 곱하느냐!\n(a²)³ ≠ a^(2+3)",
      "back_example": "(2³)² = 2^(3×2) = 2⁶ = 64\n(x⁴)³ = x¹²\n(a²)⁵ = a¹⁰\n((x²)³)² = x^(2×3×2) = x¹²",
      "exam_tip": "함정! (a²)³ = a⁵처럼 지수를 더하면 틀려. 항상 곱해야 한다!"
    },
    {
      "id": "MC-04",
      "type": "math_concept_card",
      "title": "지수법칙 ③ - 같은 밑의 나눗셈",
      "front": "a⁵ ÷ a² = a³ 왜?",
      "back_definition": "밑이 같은 거듭제곱의 나눗셈:\n- m > n이면: a^m ÷ a^n = a^(m-n)\n- m = n이면: a^m ÷ a^m = 1\n- m < n이면: a^m ÷ a^n = 1/a^(n-m)",
      "back_easy": "쉽게 말하면:\na⁵ ÷ a² = (a×a×a×a×a) ÷ (a×a) = a³ = a^(5-2)\n\n지수를 빼는 거야!\n\n그런데 같은 수로 나누면?\na² ÷ a² = 1\n\n작은 지수로 나누면?\na² ÷ a⁵ = 1/a³ = 1/a^(5-2)",
      "back_example": "2⁶ ÷ 2³ = 2³ = 8\nx⁷ ÷ x⁴ = x³\na⁴ ÷ a⁴ = 1\na³ ÷ a⁸ = 1/a⁵\n\n혼합: a⁷ × a⁴ ÷ a⁵ = a^(7+4-5) = a⁶",
      "exam_tip": "가장 자주 틀리는 부분: a³ ÷ a⁵ = a^(-2) 아니야. 답은 1/a²이거나 a^(-2)로 쓰지 않고 1/a²로 써야 해!"
    },
    {
      "id": "MC-05",
      "type": "math_concept_card",
      "title": "지수법칙 ④ - 곱과 몫의 거듭제곱",
      "front": "(ab)² = a²b², (a/b)³ = a³/b³ 왜?",
      "back_definition": "(ab)^n = a^n × b^n\n(a/b)^n = a^n / b^n (단, b ≠ 0)",
      "back_easy": "쉽게 말하면:\n(ab)² = ab × ab = a×a×b×b = a²b²\n\n(a/b)³ = (a/b)×(a/b)×(a/b) = a³/b³\n\n곱셈 괄호 → 각 인수에 지수를 분배\n나눗셈 괄호 → 분자, 분모 따로 지수를 분배",
      "back_example": "(2x)³ = 2³ × x³ = 8x³\n(-3y)² = (-3)² × y² = 9y² (음수도 제곱되니까!)\n(x/2)⁴ = x⁴/2⁴ = x⁴/16\n({f:a:b})² = a²/b²",
      "exam_tip": "함정! (2x)³ = 2x³ 아니야! 답은 8x³. 괄호가 중요해!"
    },
    {
      "id": "MC-06",
      "type": "math_concept_card",
      "title": "단항식의 곱셈 방법",
      "front": "5a × 4b = 20ab 어떻게 계산해?",
      "back_definition": "단항식의 곱셈:\n(계수) × (계수) = 새로운 계수\n(같은 문자) → 지수법칙 적용\n(다른 문자) → 그냥 붙임",
      "back_easy": "쉽게 말하면 3단계:\n① 계수끼리 곱해\n② 같은 문자는 지수를 더해\n③ 다른 문자는 그냥 붙여\n\n예: 3a² × 2a³ = (3×2) × (a²×a³) = 6a⁵",
      "back_example": "5a × 4b = 20ab\n(-3x²) × 2x = -6x³\n2ab² × 3a²b = 6a³b³\nx² × y³ × x⁴ = x⁶y³\n\n혼합: 4a × (-2ab) × 3b² = -24a²b³",
      "exam_tip": "음수 기호 주의! (-2x) × 3x = -6x², (-2x) × (-3x) = 6x²"
    },
    {
      "id": "MC-07",
      "type": "math_concept_card",
      "title": "단항식의 나눗셈 방법",
      "front": "18ab ÷ 6a = 3b 어떻게 계산해?",
      "back_definition": "단항식의 나눗셈:\n방법① 나눗셈 → 곱셈으로 (역수 곱하기)\n방법② 분수 꼴로 나타낸 후 각 항 나누기\n결과: (계수 ÷ 계수), (같은 문자 지수 빼기)",
      "back_easy": "쉽게 말하면:\n18ab ÷ 6a = {f:18ab:6a} = {f:18:6} × {f:a:a} × b = 3 × 1 × b = 3b\n\n또는 역수로:\n18ab ÷ 6a = 18ab × {f:1:6a}\n\n핵심: 계수는 나누고, 같은 문자는 지수를 빼자!",
      "back_example": "12x³ ÷ 4x = 3x²\n(-15a²b) ÷ 3ab = -5a\n(6x²y³) ÷ ({f:2:3}x) = 9xy³\n\n혼합: 20a⁴ ÷ 5a² ÷ 2a = 2a",
      "exam_tip": "분모에 문자가 있으면 분자에서 지수를 빼야 해. 계산 실수 많으니 분수 꼴로 명확히 적자!"
    },
    {
      "id": "MC-08",
      "type": "math_concept_card",
      "title": "동류항이란?",
      "front": "3x와 5x는 동류항? 3x와 3x²는?",
      "back_definition": "동류항: 문자와 그 차수(지수)가 완전히 같은 항\n\n동류항이 아닌 경우: 문자가 다르거나, 같은 문자도 차수가 다르면 동류항 아님",
      "back_easy": "쉽게 말하면, 문자 부분이 정확히 같으면 동류항!\n- 3x와 5x → 둘 다 x¹ → 동류항 O\n- 3x와 3x² → x¹과 x² → 다른 문자 지수 → 동류항 X\n- 2xy와 3xy → 둘 다 xy → 동류항 O\n- 2xy와 2x → xy와 x → 다름 → 동류항 X",
      "back_example": "동류항: 2a와 5a, x²과 -3x², xy와 10xy\n동류항 아님: 2a와 2a², 3x와 3y, x와 x²\n\n2x + 3x = 5x (동류항끼리 모아서 덧셈)\n2x² + 3x = 정리 안 됨 (동류항 아니니까)",
      "exam_tip": "차수를 놓치기 쉬워! 3x와 3x²를 같다고 하면 틀려. 항상 '같은 문자 + 같은 차수'를 확인!"
    },
    {
      "id": "MC-09",
      "type": "math_concept_card",
      "title": "다항식의 덧셈과 뺄셈",
      "front": "(2a+3b) + (4a-b)를 어떻게 계산해?",
      "back_definition": "다항식의 덧셈/뺄셈:\n① 괄호를 푼다\n② 동류항끼리 모은다\n③ 동류항끼리 계산한다",
      "back_easy": "쉽게 말하면:\n(2a+3b) + (4a-b)\n= 2a + 3b + 4a - b (괄호 풀기)\n= (2a + 4a) + (3b - b) (동류항끼리 모으기)\n= 6a + 2b\n\n뺄셈할 때 주의:\n(2a+3b) - (4a+b)\n= 2a + 3b - 4a - b (괄호 앞에 -가 있으면 괄호 안 부호 바뀜!)\n= -2a + 2b",
      "back_example": "(3x² + 2x) + (x² - 4x) = 4x² - 2x\n(5a - 3b) - (2a + b) = 5a - 3b - 2a - b = 3a - 4b\n(x² + x + 1) - (x² - 2x + 3) = x + 1 + 2x - 3 = 3x - 2\n\n주의: -(a-b) = -a + b",
      "exam_tip": "괄호 앞에 마이너스! -(3x+2) = -3x - 2. 안에 있는 부호가 모두 바뀐다!"
    },
    {
      "id": "MC-10",
      "type": "math_concept_card",
      "title": "분배법칙과 혼합 연산",
      "front": "2(3a-4b) + 5(a+2b)는 어떻게 계산해?",
      "back_definition": "분배법칙: a(b+c) = ab + ac\n\n혼합 연산 순서:\n① 괄호 안 먼저\n② 곱셈/나눗셈 (왼쪽에서 오른쪽)\n③ 덧셈/뺄셈 (왼쪽에서 오른쪽)",
      "back_easy": "쉽게 말하면:\n2(3a-4b) + 5(a+2b)\n= 6a - 8b + 5a + 10b (각괄호에 분배)\n= 11a + 2b (동류항 정리)\n\n일반적으로:\n① 단항식 × 다항식은 분배법칙\n② 괄호 없애기\n③ 동류항 정리",
      "back_example": "3(2x + 1) = 6x + 3\n-2(a - 3b) = -2a + 6b\n4(x² - 2x + 3) = 4x² - 8x + 12\n\n혼합: 2(3x - 1) + 5(x + 2)\n= 6x - 2 + 5x + 10\n= 11x + 8",
      "exam_tip": "분배할 때 음수 기호 주의! -2(x+3) = -2x - 6 (모든 항에 -2를 곱한다!)"
    }
  ],
  "procedure_drills": [
    {
      "id": "PD-01",
      "type": "procedure_drill",
      "category": "지수법칙",
      "difficulty": "A",
      "problem": "2³ × 2⁴를 간단히 하시오.",
      "final_answer": "2⁷ 또는 128",
      "steps": [
        {
          "label": "Step 1: 밑 확인",
          "why": "지수법칙은 밑이 같아야 적용돼!",
          "question": "2³과 2⁴의 밑이 같아?",
          "input_type": "choice",
          "options": [
            "같다 (모두 2)",
            "다르다"
          ],
          "correct": [
            "같다 (모두 2)"
          ],
          "hint": "밑을 확인해봐",
          "wrong_feedback": "2³에서 밑은 2, 2⁴에서 밑은 2 → 같아!"
        },
        {
          "label": "Step 2: 지수법칙 ① 적용",
          "why": "밑이 같으면 지수를 더한다",
          "question": "2³ × 2⁴ = 2^?",
          "input_type": "text",
          "correct": [
            "3+4",
            "7"
          ],
          "hint": "지수들을 더해봐. 3 + 4 = ?",
          "wrong_feedback": "2³ × 2⁴ = 2^(3+4) = 2⁷ (지수를 곱하지 않아!)"
        },
        {
          "label": "Step 3: 계산",
          "why": "2⁷의 값을 구해",
          "question": "2⁷ = ?",
          "input_type": "text",
          "correct": [
            "128"
          ],
          "hint": "2 × 2 × 2 × 2 × 2 × 2 × 2 = ?",
          "wrong_feedback": "2⁷ = 128"
        }
      ]
    },
    {
      "id": "PD-02",
      "type": "procedure_drill",
      "category": "지수법칙",
      "difficulty": "A",
      "problem": "(x³)² × x를 간단히 하시오.",
      "final_answer": "x⁷",
      "steps": [
        {
          "label": "Step 1: 거듭제곱의 거듭제곱 처리",
          "why": "지수법칙 ②를 먼저 적용",
          "question": "(x³)² = x^?",
          "input_type": "text",
          "correct": [
            "6",
            "3×2"
          ],
          "hint": "지수를 곱해봐. 3 × 2 = ?",
          "wrong_feedback": "(x³)² = x^(3×2) = x⁶ (지수를 더하지 않아!)"
        },
        {
          "label": "Step 2: 남은 항과 합치기",
          "why": "이제 x⁶ × x를 계산",
          "question": "x = x^? 로 나타내면?",
          "input_type": "text",
          "correct": [
            "1"
          ],
          "hint": "x는 x¹과 같아",
          "wrong_feedback": "x = x¹"
        },
        {
          "label": "Step 3: 지수법칙 ① 적용",
          "why": "x⁶ × x¹",
          "question": "x⁶ × x¹ = x^?",
          "input_type": "text",
          "correct": [
            "7"
          ],
          "hint": "6 + 1 = ?",
          "wrong_feedback": "x⁶ × x¹ = x^(6+1) = x⁷"
        }
      ]
    },
    {
      "id": "PD-03",
      "type": "procedure_drill",
      "category": "지수법칙",
      "difficulty": "A",
      "problem": "a⁵ ÷ a²를 간단히 하시오.",
      "final_answer": "a³",
      "steps": [
        {
          "label": "Step 1: 밑 확인",
          "why": "나눗셈도 밑이 같아야 적용돼",
          "question": "밑이 같아?",
          "input_type": "choice",
          "options": [
            "같다 (모두 a)",
            "다르다"
          ],
          "correct": [
            "같다 (모두 a)"
          ],
          "hint": "밑을 확인해봐",
          "wrong_feedback": "a⁵에서 밑은 a, a²에서 밑은 a → 같아!"
        },
        {
          "label": "Step 2: 지수법칙 ③ 적용",
          "why": "밑이 같으면 지수를 뺀다",
          "question": "a⁵ ÷ a² = a^?",
          "input_type": "text",
          "correct": [
            "5-2",
            "3"
          ],
          "hint": "지수들을 빼봐. 5 - 2 = ?",
          "wrong_feedback": "a⁵ ÷ a² = a^(5-2) = a³ (지수를 나누지 않아!)"
        }
      ]
    },
    {
      "id": "PD-04",
      "type": "procedure_drill",
      "category": "지수법칙",
      "difficulty": "B",
      "problem": "a³ ÷ a⁵를 간단히 하시오.",
      "final_answer": "1/a² 또는 a^(-2)",
      "steps": [
        {
          "label": "Step 1: 지수 크기 비교",
          "why": "지수를 빼면 음수가 되는 경우",
          "question": "5 - 3은?",
          "input_type": "text",
          "correct": [
            "2"
          ],
          "hint": "5에서 3을 빼봐",
          "wrong_feedback": "5 - 3 = 2"
        },
        {
          "label": "Step 2: 지수법칙 적용",
          "why": "지수가 음수가 되면 역수로 표현",
          "question": "a³ ÷ a⁵ = a^?",
          "input_type": "text",
          "correct": [
            "-2"
          ],
          "hint": "m < n이면 a^m ÷ a^n = 1/a^(n-m) = a^(-(n-m))",
          "wrong_feedback": "a³ ÷ a⁵ = a^(3-5) = a^(-2)"
        },
        {
          "label": "Step 3: 분수로 표현",
          "why": "음수 지수는 분수로 표현하는 게 일반적",
          "question": "a^(-2) = ?",
          "input_type": "fraction",
          "correct": [
            "1/a²"
          ],
          "hint": "음수 지수는 역수를 의미해",
          "wrong_feedback": "a^(-2) = 1/a²"
        }
      ]
    },
    {
      "id": "PD-05",
      "type": "procedure_drill",
      "category": "지수법칙",
      "difficulty": "B",
      "problem": "(2x)³을 간단히 하시오.",
      "final_answer": "8x³",
      "steps": [
        {
          "label": "Step 1: 지수법칙 ④ 이해",
          "why": "곱셈의 거듭제곱 = 각 인수의 거듭제곱",
          "question": "(2x)³ = 2^? × x^?",
          "input_type": "text",
          "correct": [
            "3 3",
            "3,3"
          ],
          "hint": "괄호 안 각 항에 지수를 분배해",
          "wrong_feedback": "(2x)³ = 2³ × x³"
        },
        {
          "label": "Step 2: 계수 계산",
          "why": "2³ 계산",
          "question": "2³ = ?",
          "input_type": "text",
          "correct": [
            "8"
          ],
          "hint": "2 × 2 × 2 = ?",
          "wrong_feedback": "2³ = 8"
        },
        {
          "label": "Step 3: 최종 답",
          "why": "",
          "question": "(2x)³ = ?",
          "input_type": "text",
          "correct": [
            "8x³"
          ],
          "hint": "위의 결과를 모아",
          "wrong_feedback": "(2x)³ = 8x³ (2x³ 아니야!)"
        }
      ]
    },
    {
      "id": "PD-06",
      "type": "procedure_drill",
      "category": "단항식",
      "difficulty": "A",
      "problem": "3a² × 4a³를 계산하시오.",
      "final_answer": "12a⁵",
      "steps": [
        {
          "label": "Step 1: 계수끼리 곱하기",
          "why": "숫자는 숫자끼리",
          "question": "3 × 4 = ?",
          "input_type": "text",
          "correct": [
            "12"
          ],
          "hint": "3 곱하기 4",
          "wrong_feedback": "3 × 4 = 12"
        },
        {
          "label": "Step 2: 같은 문자 처리",
          "why": "a²과 a³ → 지수법칙 ①",
          "question": "a² × a³ = a^?",
          "input_type": "text",
          "correct": [
            "5"
          ],
          "hint": "지수를 더해. 2 + 3 = ?",
          "wrong_feedback": "a² × a³ = a^(2+3) = a⁵"
        },
        {
          "label": "Step 3: 결합",
          "why": "계수와 문자 부분을 합쳐",
          "question": "12 × a⁵ = ?",
          "input_type": "text",
          "correct": [
            "12a⁵"
          ],
          "hint": "위의 결과를 모아",
          "wrong_feedback": "3a² × 4a³ = 12a⁵"
        }
      ]
    },
    {
      "id": "PD-07",
      "type": "procedure_drill",
      "category": "단항식",
      "difficulty": "A",
      "problem": "(-3x)² × 2x를 계산하시오.",
      "final_answer": "18x³",
      "steps": [
        {
          "label": "Step 1: 제곱 먼저 계산",
          "why": "지수가 있는 부분부터",
          "question": "(-3x)² = ?",
          "input_type": "text",
          "correct": [
            "9x²"
          ],
          "hint": "(-3)² × x² = 9 × x²",
          "wrong_feedback": "(-3x)² = 9x² (음수의 제곱은 양수!)"
        },
        {
          "label": "Step 2: 계수 곱하기",
          "why": "9 × 2",
          "question": "9 × 2 = ?",
          "input_type": "text",
          "correct": [
            "18"
          ],
          "hint": "9 곱하기 2",
          "wrong_feedback": "9 × 2 = 18"
        },
        {
          "label": "Step 3: 같은 문자 지수 더하기",
          "why": "x² × x = x³",
          "question": "x² × x = x^?",
          "input_type": "text",
          "correct": [
            "3"
          ],
          "hint": "2 + 1 = ?",
          "wrong_feedback": "x² × x = x³"
        },
        {
          "label": "Step 4: 최종 답",
          "why": "",
          "question": "(-3x)² × 2x = ?",
          "input_type": "text",
          "correct": [
            "18x³"
          ],
          "hint": "위의 결과를 모아",
          "wrong_feedback": "18x³"
        }
      ]
    },
    {
      "id": "PD-08",
      "type": "procedure_drill",
      "category": "단항식",
      "difficulty": "A",
      "problem": "18ab ÷ 6a를 계산하시오.",
      "final_answer": "3b",
      "steps": [
        {
          "label": "Step 1: 분수 꼴로 표현",
          "why": "나눗셈을 명확히 보기 위해",
          "question": "18ab ÷ 6a = {f:18ab:6a}로 쓸 수 있어",
          "input_type": "choice",
          "options": [
            "맞다",
            "틀렸다"
          ],
          "correct": [
            "맞다"
          ],
          "hint": "나눗셈은 분수로 표현할 수 있어",
          "wrong_feedback": "나눗셈을 분수로 쓰면 명확해!"
        },
        {
          "label": "Step 2: 계수 나누기",
          "why": "분자 계수 ÷ 분모 계수",
          "question": "18 ÷ 6 = ?",
          "input_type": "text",
          "correct": [
            "3"
          ],
          "hint": "18을 6으로 나눠",
          "wrong_feedback": "18 ÷ 6 = 3"
        },
        {
          "label": "Step 3: 같은 문자 처리",
          "why": "a ÷ a = 1 (지수를 빼면 1이 되는 경우)",
          "question": "a ÷ a = ?",
          "input_type": "text",
          "correct": [
            "1"
          ],
          "hint": "같은 문자로 나누면?",
          "wrong_feedback": "a ÷ a = 1"
        },
        {
          "label": "Step 4: 결합",
          "why": "",
          "question": "3 × b × 1 = ?",
          "input_type": "text",
          "correct": [
            "3b"
          ],
          "hint": "위의 결과를 모아",
          "wrong_feedback": "18ab ÷ 6a = 3b"
        }
      ]
    },
    {
      "id": "PD-09",
      "type": "procedure_drill",
      "category": "다항식",
      "difficulty": "A",
      "problem": "(2a + 3b) + (4a - b)를 계산하시오.",
      "final_answer": "6a + 2b",
      "steps": [
        {
          "label": "Step 1: 괄호 풀기",
          "why": "덧셈은 괄호를 바로 풀어도 돼",
          "question": "(2a + 3b) + (4a - b) = ?",
          "input_type": "text",
          "correct": [
            "2a+3b+4a-b"
          ],
          "hint": "괄호를 없애봐",
          "wrong_feedback": "2a + 3b + 4a - b"
        },
        {
          "label": "Step 2: 동류항 찾기",
          "why": "a끼리, b끼리 모으기",
          "question": "a항: 2a와 4a / b항: 3b와 -b로 맞아?",
          "input_type": "choice",
          "options": [
            "맞다",
            "틀렸다"
          ],
          "correct": [
            "맞다"
          ],
          "hint": "같은 문자끼리 모아",
          "wrong_feedback": "a항은 2a + 4a, b항은 3b - b"
        },
        {
          "label": "Step 3: a항 계산",
          "why": "2a + 4a",
          "question": "2a + 4a = ?",
          "input_type": "text",
          "correct": [
            "6a"
          ],
          "hint": "2 + 4 = 6, 문자는 a",
          "wrong_feedback": "2a + 4a = 6a"
        },
        {
          "label": "Step 4: b항 계산",
          "why": "3b - b",
          "question": "3b - b = ?",
          "input_type": "text",
          "correct": [
            "2b"
          ],
          "hint": "3 - 1 = 2, 문자는 b",
          "wrong_feedback": "3b - b = 2b"
        },
        {
          "label": "Step 5: 최종 답",
          "why": "",
          "question": "6a + 2b가 최종 답이야?",
          "input_type": "choice",
          "options": [
            "맞다",
            "틀렸다"
          ],
          "correct": [
            "맞다"
          ],
          "hint": "더 정리할 동류항이 있어?",
          "wrong_feedback": "6a + 2b"
        }
      ]
    },
    {
      "id": "PD-10",
      "type": "procedure_drill",
      "category": "다항식",
      "difficulty": "B",
      "problem": "(3x + 2) - (x - 4)를 계산하시오.",
      "final_answer": "2x + 6",
      "steps": [
        {
          "label": "Step 1: 뺄셈 괄호 처리",
          "why": "괄호 앞에 -가 있으면 안에 부호가 바뀌어!",
          "question": "(3x + 2) - (x - 4) = 3x + 2 - ? - ?",
          "input_type": "text",
          "correct": [
            "x 4",
            "x,4",
            "x -4"
          ],
          "hint": "-(x - 4) = -x + 4",
          "wrong_feedback": "-(x - 4) = -x + 4"
        },
        {
          "label": "Step 2: 괄호 완전히 풀기",
          "why": "명확히 보기",
          "question": "3x + 2 - x + 4 = ?",
          "input_type": "text",
          "correct": [
            "3x-x+2+4"
          ],
          "hint": "동류항끼리 모아",
          "wrong_feedback": "3x - x + 2 + 4"
        },
        {
          "label": "Step 3: x항 계산",
          "why": "3x - x",
          "question": "3x - x = ?",
          "input_type": "text",
          "correct": [
            "2x"
          ],
          "hint": "3 - 1 = 2",
          "wrong_feedback": "3x - x = 2x"
        },
        {
          "label": "Step 4: 상수항 계산",
          "why": "2 + 4",
          "question": "2 + 4 = ?",
          "input_type": "text",
          "correct": [
            "6"
          ],
          "hint": "숫자를 더해",
          "wrong_feedback": "2 + 4 = 6"
        },
        {
          "label": "Step 5: 최종 답",
          "why": "",
          "question": "2x + 6이 최종 답이야?",
          "input_type": "choice",
          "options": [
            "맞다",
            "틀렸다"
          ],
          "correct": [
            "맞다"
          ],
          "hint": "더 정리할 게 있어?",
          "wrong_feedback": "2x + 6"
        }
      ]
    },
    {
      "id": "PD-11",
      "type": "procedure_drill",
      "category": "다항식",
      "difficulty": "B",
      "problem": "2(3x - 1) + 3(x + 2)를 계산하시오.",
      "final_answer": "9x + 4",
      "steps": [
        {
          "label": "Step 1: 첫 번째 분배",
          "why": "2(3x - 1)",
          "question": "2(3x - 1) = ?",
          "input_type": "text",
          "correct": [
            "6x-2"
          ],
          "hint": "2 × 3x = 6x, 2 × (-1) = -2",
          "wrong_feedback": "2(3x - 1) = 6x - 2"
        },
        {
          "label": "Step 2: 두 번째 분배",
          "why": "3(x + 2)",
          "question": "3(x + 2) = ?",
          "input_type": "text",
          "correct": [
            "3x+6"
          ],
          "hint": "3 × x = 3x, 3 × 2 = 6",
          "wrong_feedback": "3(x + 2) = 3x + 6"
        },
        {
          "label": "Step 3: 합치기",
          "why": "6x - 2 + 3x + 6",
          "question": "6x - 2 + 3x + 6을 정리하면?",
          "input_type": "text",
          "correct": [
            "6x+3x-2+6"
          ],
          "hint": "동류항끼리 모아",
          "wrong_feedback": "6x + 3x - 2 + 6"
        },
        {
          "label": "Step 4: x항 계산",
          "why": "6x + 3x",
          "question": "6x + 3x = ?",
          "input_type": "text",
          "correct": [
            "9x"
          ],
          "hint": "6 + 3 = 9",
          "wrong_feedback": "6x + 3x = 9x"
        },
        {
          "label": "Step 5: 상수항 계산",
          "why": "-2 + 6",
          "question": "-2 + 6 = ?",
          "input_type": "text",
          "correct": [
            "4"
          ],
          "hint": "음수 2를 더하기의 반대로",
          "wrong_feedback": "-2 + 6 = 4"
        },
        {
          "label": "Step 6: 최종 답",
          "why": "",
          "question": "9x + 4가 최종 답이야?",
          "input_type": "choice",
          "options": [
            "맞다",
            "틀렸다"
          ],
          "correct": [
            "맞다"
          ],
          "hint": "모두 정리했어?",
          "wrong_feedback": "9x + 4"
        }
      ]
    },
    {
      "id": "PD-12",
      "type": "procedure_drill",
      "category": "다항식",
      "difficulty": "B",
      "problem": "3x(2x - 1) - 2(x² + 3x)를 계산하시오.",
      "final_answer": "4x² - 9x",
      "steps": [
        {
          "label": "Step 1: 첫 번째 분배",
          "why": "3x(2x - 1)",
          "question": "3x(2x - 1) = ?",
          "input_type": "text",
          "correct": [
            "6x²-3x"
          ],
          "hint": "3x × 2x = 6x², 3x × (-1) = -3x",
          "wrong_feedback": "3x(2x - 1) = 6x² - 3x"
        },
        {
          "label": "Step 2: 두 번째 분배",
          "why": "-2(x² + 3x)",
          "question": "-2(x² + 3x) = ?",
          "input_type": "text",
          "correct": [
            "-2x²-6x"
          ],
          "hint": "음수 기호 주의! (-2) × x² = -2x², (-2) × 3x = -6x",
          "wrong_feedback": "-2(x² + 3x) = -2x² - 6x"
        },
        {
          "label": "Step 3: 합치기",
          "why": "6x² - 3x - 2x² - 6x",
          "question": "합치면 어떤 항들이 있어?",
          "input_type": "text",
          "correct": [
            "6x²-2x², -3x-6x"
          ],
          "hint": "x² 항끼리, x 항끼리 모아",
          "wrong_feedback": "x² 항: 6x² - 2x², x 항: -3x - 6x"
        },
        {
          "label": "Step 4: x² 항 계산",
          "why": "6x² - 2x²",
          "question": "6x² - 2x² = ?",
          "input_type": "text",
          "correct": [
            "4x²"
          ],
          "hint": "6 - 2 = 4",
          "wrong_feedback": "6x² - 2x² = 4x²"
        },
        {
          "label": "Step 5: x 항 계산",
          "why": "-3x - 6x",
          "question": "-3x - 6x = ?",
          "input_type": "text",
          "correct": [
            "-9x"
          ],
          "hint": "-3 - 6 = -9",
          "wrong_feedback": "-3x - 6x = -9x"
        },
        {
          "label": "Step 6: 최종 답",
          "why": "",
          "question": "4x² - 9x가 최종 답이야?",
          "input_type": "choice",
          "options": [
            "맞다",
            "틀렸다"
          ],
          "correct": [
            "맞다"
          ],
          "hint": "더 정리할 게 있어?",
          "wrong_feedback": "4x² - 9x"
        }
      ]
    },
    {
      "id": "PD-13",
      "type": "procedure_drill",
      "category": "다항식",
      "difficulty": "B",
      "problem": "(6a² + 4a) ÷ 2a를 계산하시오.",
      "final_answer": "3a + 2",
      "steps": [
        {
          "label": "Step 1: 분수 꼴로 표현",
          "why": "나눗셈을 명확히",
          "question": "(6a² + 4a) ÷ 2a = {f:6a²+4a:2a}",
          "input_type": "choice",
          "options": [
            "맞다",
            "틀렸다"
          ],
          "correct": [
            "맞다"
          ],
          "hint": "나눗셈은 분수",
          "wrong_feedback": "맞아!"
        },
        {
          "label": "Step 2: 각 항 나누기",
          "why": "{f:6a²+4a:2a} = {f:6a²:2a} + {f:4a:2a}",
          "question": "각 항을 분모로 나눌 수 있어?",
          "input_type": "choice",
          "options": [
            "맞다",
            "틀렸다"
          ],
          "correct": [
            "맞다"
          ],
          "hint": "분자의 각 항을 분모로",
          "wrong_feedback": "맞아!"
        },
        {
          "label": "Step 3: 첫 번째 항 계산",
          "why": "{f:6a²:2a}",
          "question": "{f:6a²:2a} = ?",
          "input_type": "text",
          "correct": [
            "3a"
          ],
          "hint": "계수: 6÷2 = 3, 문자: a²÷a = a",
          "wrong_feedback": "{f:6a²:2a} = 3a"
        },
        {
          "label": "Step 4: 두 번째 항 계산",
          "why": "{f:4a:2a}",
          "question": "{f:4a:2a} = ?",
          "input_type": "text",
          "correct": [
            "2"
          ],
          "hint": "계수: 4÷2 = 2, 문자: a÷a = 1",
          "wrong_feedback": "{f:4a:2a} = 2"
        },
        {
          "label": "Step 5: 최종 답",
          "why": "",
          "question": "3a + 2가 최종 답이야?",
          "input_type": "choice",
          "options": [
            "맞다",
            "틀렸다"
          ],
          "correct": [
            "맞다"
          ],
          "hint": "모두 계산했어?",
          "wrong_feedback": "3a + 2"
        }
      ]
    },
    {
      "id": "PD-14",
      "type": "procedure_drill",
      "category": "혼합",
      "difficulty": "B",
      "problem": "a⁷ × a⁴ ÷ a⁵를 계산하시오.",
      "final_answer": "a⁶",
      "steps": [
        {
          "label": "Step 1: 왼쪽부터 계산",
          "why": "곱셈과 나눗셈은 왼쪽에서 오른쪽",
          "question": "a⁷ × a⁴를 먼저 계산하면?",
          "input_type": "text",
          "correct": [
            "a¹¹"
          ],
          "hint": "지수를 더해. 7 + 4 = ?",
          "wrong_feedback": "a⁷ × a⁴ = a¹¹"
        },
        {
          "label": "Step 2: 나눗셈 계산",
          "why": "a¹¹ ÷ a⁵",
          "question": "a¹¹ ÷ a⁵ = ?",
          "input_type": "text",
          "correct": [
            "a⁶"
          ],
          "hint": "지수를 빼. 11 - 5 = ?",
          "wrong_feedback": "a¹¹ ÷ a⁵ = a⁶"
        }
      ]
    },
    {
      "id": "PD-15",
      "type": "procedure_drill",
      "category": "혼합",
      "difficulty": "B",
      "problem": "2(x² + 2x) - 3(x - 1)을 계산하시오.",
      "final_answer": "2x² + x + 3",
      "steps": [
        {
          "label": "Step 1: 첫 번째 분배",
          "why": "2(x² + 2x)",
          "question": "2(x² + 2x) = ?",
          "input_type": "text",
          "correct": [
            "2x²+4x"
          ],
          "hint": "2 × x² = 2x², 2 × 2x = 4x",
          "wrong_feedback": "2(x² + 2x) = 2x² + 4x"
        },
        {
          "label": "Step 2: 두 번째 분배",
          "why": "-3(x - 1)",
          "question": "-3(x - 1) = ?",
          "input_type": "text",
          "correct": [
            "-3x+3"
          ],
          "hint": "음수 기호 주의! (-3) × x = -3x, (-3) × (-1) = 3",
          "wrong_feedback": "-3(x - 1) = -3x + 3"
        },
        {
          "label": "Step 3: 합치기",
          "why": "2x² + 4x - 3x + 3",
          "question": "동류항끼리 모으면?",
          "input_type": "text",
          "correct": [
            "2x², 4x-3x, 3"
          ],
          "hint": "x² 항, x 항, 상수항",
          "wrong_feedback": "x² 항: 2x², x 항: 4x - 3x, 상수항: 3"
        },
        {
          "label": "Step 4: x 항 계산",
          "why": "4x - 3x",
          "question": "4x - 3x = ?",
          "input_type": "text",
          "correct": [
            "x"
          ],
          "hint": "4 - 3 = 1, 문자는 x",
          "wrong_feedback": "4x - 3x = x"
        },
        {
          "label": "Step 5: 최종 답",
          "why": "",
          "question": "2x² + x + 3이 최종 답이야?",
          "input_type": "choice",
          "options": [
            "맞다",
            "틀렸다"
          ],
          "correct": [
            "맞다"
          ],
          "hint": "모두 정리했어?",
          "wrong_feedback": "2x² + x + 3"
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
      "instruction": "2² × 2³ = ?",
      "sentence": "",
      "options": [
        "2⁵ (= 32)",
        "2⁶ (= 64)",
        "4⁵",
        "32²"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "지수를 곱했네. 같은 밑은 지수를 더해! 2² × 2³ = 2^(2+3) = 2⁵",
        "2": "밑이 같으면 지수를 더하지, 밑을 곱하지 않아. 2 × 2 = 4가 아니야!",
        "3": "2² × 2³ = 32는 맞지만 32²는 아니야. 단순 계산 실수!"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-02",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "(x²)³ × x = ?",
      "sentence": "",
      "options": [
        "x⁸",
        "x⁷",
        "x⁶",
        "x⁵"
      ],
      "correct": 1,
      "wrong_explanations": {
        "0": "(x²)³ = x⁶이고 x = x¹이니까 x⁶ × x¹ = x⁷이 맞아. 지수를 더하면 8이 나오는 실수!",
        "2": "(x²)³ 에서 지수를 더하면 x⁵ 되지만, × x까지 고려하면 x⁶ × x = x⁷",
        "3": "x⁶ ÷ x 로 착각했나? 아니야, 곱셈이야!"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-03",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "(-3x)² = ?",
      "sentence": "",
      "options": [
        "9x",
        "-9x²",
        "9x²",
        "-3x²"
      ],
      "correct": 2,
      "wrong_explanations": {
        "0": "(-3x)²에서 -3x 전체를 제곱하니까 음수 × 음수 = 양수야. -9x²가 아니야!",
        "1": "음수의 제곱은 양수! (-3)² = 9, x² = x², 따라서 (-3x)² = 9x²",
        "3": "x도 제곱해야지! (-3x)² = (-3)² × x² = 9x²"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-04",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "a⁶ ÷ a² = ?",
      "sentence": "",
      "options": [
        "{f:1:a⁴}",
        "a³",
        "a⁸",
        "a⁴"
      ],
      "correct": 3,
      "wrong_explanations": {
        "0": "나눗셈인데 지수를 더했네. 나눗셈은 뺀다!",
        "1": "지수를 빼는 거야! 6 - 2 = 4, 따라서 a⁴",
        "2": "6 - 2 = 3이 아니라 4야!"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-05",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "(2a)³ = ?",
      "sentence": "",
      "options": [
        "8a³",
        "6a³",
        "2a³",
        "8a"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "괄호 안 각 인수에 지수를 분배. 2³ = 8, a³ = a³, 따라서 8a³",
        "2": "2 × 3 = 6이 아니라 2³ = 8을 계산해야 해!",
        "3": "2a³이 아니라 (2a)³ = 8a³. 괄호 위치가 중요해!"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-06",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "3a × 2a² = ?",
      "sentence": "",
      "options": [
        "5a³",
        "6a³",
        "6a²",
        "3a³"
      ],
      "correct": 1,
      "wrong_explanations": {
        "0": "계수: 3 × 2 = 6, 문자: a¹ × a² = a³, 따라서 6a³",
        "2": "지수를 더하지 말고 계수를 곱해! 3 × 2 = 5 아니야",
        "3": "a¹과 a²의 지수를 더해야 해. a⁵÷2 아니라 1+2=3"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-07",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "12xy ÷ 3x = ?",
      "sentence": "",
      "options": [
        "4x²y",
        "4xy",
        "4y",
        "12y"
      ],
      "correct": 2,
      "wrong_explanations": {
        "0": "x ÷ x = 1이지, x가 남지 않아!",
        "1": "계수: 12 ÷ 3 = 4, x ÷ x = 1, y는 그대로, 따라서 4y",
        "3": "지수를 더하는 게 아니라 나누는 거야!"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-08",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "(2a + 3b) + (a - 2b) = ?",
      "sentence": "",
      "options": [
        "3a + 5b",
        "3a - b",
        "2a + b",
        "3a + b"
      ],
      "correct": 3,
      "wrong_explanations": {
        "0": "덧셈할 때 계수를 더해야 해! 2 + 1 = 3",
        "1": "동류항끼리 모아. a항: 2a + a = 3a, b항: 3b - 2b = b",
        "2": "3b와 -2b를 계산하면 b지, -b가 아니야!"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-09",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "(3x + 2) - (x - 3) = ?",
      "sentence": "",
      "options": [
        "2x + 5",
        "2x - 1",
        "3x + 5",
        "4x - 1"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "괄호 앞 -를 분배하면 -(x - 3) = -x + 3. 3x + 2 - x + 3 = 2x + 5",
        "2": "부호를 바꿔야 해! -(x - 3) = -x + 3",
        "3": "3x는 그대로고 -x를 더해야 해. 3x - x = 2x"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-10",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "2(x + 1) + 3(x - 2) = ?",
      "sentence": "",
      "options": [
        "5x + 4",
        "5x - 4",
        "5x - 2",
        "6x - 4"
      ],
      "correct": 1,
      "wrong_explanations": {
        "0": "2(x + 1) = 2x + 2, 3(x - 2) = 3x - 6. 합하면 5x - 4",
        "2": "-6과 +2를 더하면 -4야, +4가 아니야!",
        "3": "계수를 더하지 말고 분배해야 해!"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-11",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "3x(2 - x) = ?",
      "sentence": "",
      "options": [
        "6x + 3x²",
        "6x - x²",
        "6x - 3x²",
        "-x² + 6x"
      ],
      "correct": 2,
      "wrong_explanations": {
        "0": "3x × x = 3x²지, x²이 아니야!",
        "1": "3x × 2 = 6x, 3x × (-x) = -3x². 답: 6x - 3x²",
        "3": "음수를 곱했으니 -3x²가 돼. 순서를 바꾸려고 -x² + 6x라 써도 같지만, 보기에는 6x - 3x²가 있어"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-12",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "(8a² - 4a) ÷ 2a = ?",
      "sentence": "",
      "options": [
        "8a - 4",
        "4a² - 2a",
        "4a - 2a",
        "4a - 2"
      ],
      "correct": 3,
      "wrong_explanations": {
        "0": "지수를 뺌. a²-a = a, -4a ÷ 2a = -2. 다시 계산해!",
        "1": "각 항을 나누자. 8a² ÷ 2a = 4a, -4a ÷ 2a = -2. 합: 4a - 2",
        "2": "분모로 나눠야지, 그냥 두면 안 돼!"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-13",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "x⁵ ÷ x³ × x² = ?",
      "sentence": "",
      "options": [
        "x⁴",
        "x⁶",
        "x⁵",
        "x¹⁰"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "왼쪽부터: x⁵ ÷ x³ = x². 다음 x² × x² = x⁴",
        "2": "나눗셈과 곱셈을 섞었네. x⁵ ÷ x³ = x²이고 × x² = x⁴",
        "3": "지수를 다시 확인. 5 - 3 = 2, 2 + 2 = 4"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-14",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "(-2x)² × 3x = ?",
      "sentence": "",
      "options": [
        "6x³",
        "12x³",
        "-12x³",
        "-6x³"
      ],
      "correct": 1,
      "wrong_explanations": {
        "0": "(-2x)² = 4x², 4x² × 3x = 12x³",
        "2": "(-2)² = 4지, 2가 아니야!",
        "3": "음수를 제곱했으니 양수가 돼. 4x² × 3x = 12x³ (양수)"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-15",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "어느 항이 3x와 동류항일까?",
      "sentence": "",
      "options": [
        "3xy",
        "3x²",
        "5x",
        "3y"
      ],
      "correct": 2,
      "wrong_explanations": {
        "0": "3x²는 x²이고 3x는 x¹. 차수가 다르니까 동류항 아님",
        "1": "5x는 x¹이고 3x도 x¹. 문자와 차수가 같아! 동류항 O",
        "3": "3xy는 xy지, x만은 아니야. 문자가 달라!"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-16",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "a⁶ × (a²)³ = ?",
      "sentence": "",
      "options": [
        "a¹⁸",
        "a¹¹",
        "a⁹",
        "a¹²"
      ],
      "correct": 3,
      "wrong_explanations": {
        "0": "지수끼리 곱하지 말고, (a²)³ 먼저 계산해!",
        "1": "(a²)³ = a⁶. a⁶ × a⁶ = a¹²",
        "2": "지수를 다시 계산. 2 × 3 = 6, 6 + 6 = 12"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-17",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "2(3a - 1) - (a + 4) = ?",
      "sentence": "",
      "options": [
        "5a - 6",
        "5a - 2",
        "6a - 6",
        "5a + 2"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "2(3a - 1) = 6a - 2. -(a + 4) = -a - 4. 합: 6a - 2 - a - 4 = 5a - 6",
        "2": "-4를 빠뜨렸네! 6a - 2 - a - 4 = 5a - 6",
        "3": "괄호 앞 -를 분배했나? -(a + 4) = -a - 4"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-18",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "C",
      "instruction": "(x + 1)² = ?",
      "sentence": "",
      "options": [
        "x² + 1",
        "x² + 2x + 1",
        "x² + 2x",
        "x + 2x + 1"
      ],
      "correct": 1,
      "wrong_explanations": {
        "0": "(x + 1)² = (x + 1)(x + 1) = x² + x + x + 1 = x² + 2x + 1",
        "2": "중간항 2x를 빼먹지 마! (x+1)² ≠ x² + 1",
        "3": "마지막 상수항 1도 제곱돼! (x+1)² = x² + 2x + 1"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-19",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "2³ × 3² = ?",
      "sentence": "",
      "options": [
        "108",
        "6⁵",
        "72",
        "6³"
      ],
      "correct": 2,
      "wrong_explanations": {
        "0": "밑이 2와 3으로 다르면 6⁵로 못 합쳐!",
        "1": "밑이 다르니까 지수법칙을 못 써. 2³ = 8, 3² = 9, 8 × 9 = 72",
        "3": "2³ × 3² ≠ 6³. 각각 계산해야 해"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-20",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "3a² × 2ab = ?",
      "sentence": "",
      "options": [
        "6ab",
        "6a²b",
        "5a³b",
        "6a³b"
      ],
      "correct": 3,
      "wrong_explanations": {
        "0": "계수 3 + 2 = 5가 아니라 3 × 2 = 6",
        "1": "계수: 3 × 2 = 6. 문자: a² × a = a³, b = b. 답: 6a³b",
        "2": "a²과 a를 곱해야 해! a² × a = a³"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-21",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "a² ÷ a⁵ = ?",
      "sentence": "",
      "options": [
        "{f:1:a³}",
        "a³",
        "{f:a:5}",
        "a"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "m < n이면 a^m ÷ a^n = 1/a^(n-m). 따라서 1/a³",
        "2": "작은 수를 큰 수로 나누면 분수가 돼! a⁻³ = 1/a³",
        "3": "지수를 빼면 음수. 음수 지수는 역수!"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-22",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "(2xy)² = ?",
      "sentence": "",
      "options": [
        "4xy²",
        "4x²y²",
        "2x²y²",
        "4xy"
      ],
      "correct": 1,
      "wrong_explanations": {
        "0": "2² = 4, x² = x², y² = y². 답: 4x²y²",
        "2": "x도 제곱해야 해! (2xy)² = 2² × x² × y²",
        "3": "2² = 4지, 2가 아니야!"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-23",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "(4x² - 2x) ÷ 2x = ?",
      "sentence": "",
      "options": [
        "2x - x",
        "2x² - 1",
        "2x - 1",
        "4x - 2"
      ],
      "correct": 2,
      "wrong_explanations": {
        "0": "분모로 나눠야지, 두면 안 돼!",
        "1": "4x² ÷ 2x = 2x, -2x ÷ 2x = -1. 합: 2x - 1",
        "3": "2x ÷ 2 = x가 아니라 2x ÷ 2x = 1"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-24",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "다음 중 거짓인 것은?",
      "sentence": "",
      "options": [
        "3a × 2a = 6a²",
        "(x²)³ = x⁶",
        "x⁶ ÷ x² = x⁴",
        "2² × 2³ = 2⁶"
      ],
      "correct": 3,
      "wrong_explanations": {
        "0": "x⁶ ÷ x² = x⁴도 맞아. 6-2=4",
        "1": "2² × 2³ = 2⁵지, 2⁶이 아니야! 지수를 더하면 2+3=5",
        "2": "정답 있음. (x²)³ = x⁶는 맞아"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-25",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "4(2a - 1) - 2(a + 3) = ?",
      "sentence": "",
      "options": [
        "6a - 10",
        "6a - 4",
        "8a - 10",
        "6a - 2"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "4(2a - 1) = 8a - 4. -2(a + 3) = -2a - 6. 합: 8a - 4 - 2a - 6 = 6a - 10",
        "2": "-6을 빼먹었어! 8a - 4 - 2a - 6 = 6a - 10",
        "3": "4(2a - 1)에서 지수가 안 생겨. 항이다. 4 × 2a = 8a"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-26",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "C",
      "instruction": "a⁴ × a × a³ ÷ a² = ?",
      "sentence": "",
      "options": [
        "a⁵",
        "a⁶",
        "a⁸",
        "a⁴"
      ],
      "correct": 1,
      "wrong_explanations": {
        "0": "왼쪽부터: a⁴ × a = a⁵, a⁵ × a³ = a⁸, a⁸ ÷ a² = a⁶",
        "2": "마지막 나눗셈을 빼먹었어! a⁸ ÷ a² = a⁶",
        "3": "한 번에: 4 + 1 + 3 - 2 = 6"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-27",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "-2(3x - 2) = ?",
      "sentence": "",
      "options": [
        "6x + 4",
        "-6x - 4",
        "-6x + 4",
        "-6x + 2"
      ],
      "correct": 2,
      "wrong_explanations": {
        "0": "음수 × 음수 = 양수. (-2) × (-2) = 4",
        "1": "(-2) × 3x = -6x, (-2) × (-2) = 4. 답: -6x + 4",
        "3": "분배 후 부호까지 분배돼. (-2) × 3x = -6x, (-2) × (-2) = +4"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-28",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "(3a² + 6a) ÷ 3a = ?",
      "sentence": "",
      "options": [
        "3a + 2",
        "a² + 2",
        "a + 6",
        "a + 2"
      ],
      "correct": 3,
      "wrong_explanations": {
        "0": "6a ÷ 3a = 2지, 6",
        "1": "3a² ÷ 3a = a, 6a ÷ 3a = 2. 합: a + 2",
        "2": "분모로 나눠야 해! a² ÷ a = a, a²이 아니야"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-29",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "(-x)³ = ?",
      "sentence": "",
      "options": [
        "-x³",
        "x³",
        "-3x",
        "x"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "(-x) × (-x) × (-x) = -x³. 홀수 개 음수 곱 = 음수",
        "2": "세 개의 음수를 곱했어! (-) × (-) × (-) = (-)",
        "3": "지수가 있으니까 x³가 돼. 3을 곱하면 안 돼"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-30",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "C",
      "instruction": "2x(3x - 2) + x = ?",
      "sentence": "",
      "options": [
        "6x² - 4x + x",
        "6x² - 3x",
        "6x² - 2x",
        "5x² - 3x"
      ],
      "correct": 1,
      "wrong_explanations": {
        "0": "2x(3x - 2) = 6x² - 4x. 6x² - 4x + x = 6x² - 3x",
        "2": "동류항을 모아야 해! -4x + x = -3x",
        "3": "2x × 3x = 6x²지, 5x²이 아니야"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-31",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "C",
      "instruction": "(x³)² = x⁶이고, x⁶ ÷ x² = x⁴이면, (x³)² ÷ x² = ?",
      "sentence": "",
      "options": [
        "x³",
        "x⁵",
        "x⁴",
        "x⁶"
      ],
      "correct": 2,
      "wrong_explanations": {
        "0": "문제의 힌트를 활용했나? x⁶ ÷ x² = x⁴",
        "1": "(x³)² = x⁶, x⁶ ÷ x² = x⁴",
        "3": "x⁶에서 x²를 나누면 4가 남아!"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-32",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "B",
      "instruction": "3a × 4a - 2a²를 계산하면?",
      "sentence": "",
      "options": [
        "5a²",
        "12a²",
        "14a²",
        "10a²"
      ],
      "correct": 3,
      "wrong_explanations": {
        "0": "뺄셈을 빼먹지 마! 12a² - 2a² = 10a² (더하기 아님)",
        "1": "3a × 4a = 12a². 12a² - 2a² = 10a²",
        "2": "곱셈 먼저! 3a × 4a = 12a², 이후 12a² - 2a² = 10a²"
      },
      "hint": "",
      "source": "교과서 기반"
    },
    {
      "id": "Q-33",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "C",
      "instruction": "(a + b)(a - b) 같은 식의 전개는 이 단원 범위 밖이에요. 대신 6(2a + 1) - 2(3a - 2) = ?",
      "sentence": "",
      "options": [
        "6a + 10",
        "6a + 2",
        "12a + 6",
        "6a + 4"
      ],
      "correct": 0,
      "wrong_explanations": {
        "1": "6(2a + 1) = 12a + 6. -2(3a - 2) = -6a + 4. 합: 12a + 6 - 6a + 4 = 6a + 10",
        "2": "괄호를 다시 풀어봐. 6 × 1 = 6이고, -2 × (-2) = 4",
        "3": "6(2a + 1) = 12a + 6이 맞아. 12a + 6 - 6a + 4 = 6a + 10"
      },
      "hint": "",
      "source": "교과서 기반"
    }
  ]
});
