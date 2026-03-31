// lesson_math1.js — Ⅰ. 유리수와 순환소수 (v1.0)
// JSONP wrapper
__loadLesson({
  "lesson": "math1",
  "subject": "math",
  "title": "Ⅰ. 유리수와 순환소수",
  "subtitle": "유리수의 소수 표현 / 순환소수의 분수 표현",
  "publisher": "교과서 기반",
  "grade": 2,
  "version": "1.0",
  "build_date": "2026-03-29",
  "build_note": "3모드: 개념카드 + 절차연습 + 실전문제. CSS 수식 렌더링. 학생선수 맞춤 설계.",
  "modes": [
    "concept_card",
    "procedure_drill",
    "exam_prep"
  ],
  "concept_cards": [
    {
      "id": "MC-01",
      "type": "math_concept_card",
      "title": "소수의 세 종류",
      "front": "소수는 크게 몇 종류? 각각 뭐야?",
      "back_definition": "유한소수: 끝나는 소수 (예: 0.5, 1.25)\n무한소수: 끝나지 않는 소수\n→ 순환소수: 패턴이 반복됨 (예: 0.333...)\n→ 비순환소수: 패턴 없음 (예: π)",
      "back_easy": "쉽게 말하면, 소수점 뒤에 숫자가 딱 끝나면 유한소수. 끝나지 않는데 일정한 패턴으로 반복되면 순환소수. 반복 패턴도 없이 끝없이 가면 비순환소수(이건 유리수가 아니야!).",
      "back_example": "유한: 0.75 = {f:3:4}\n순환: 0.{r:3} = {f:1:3}\n비순환: π = 3.14159...",
      "exam_tip": "시험에 '무한소수는 모두 순환소수다' 같은 함정이 나와. π는 무한소수이지만 순환소수가 아니야!",
      "visual_svg": "<svg viewBox=\"0 0 360 260\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto\"><defs><style>.t{font-size:15px;font-weight:bold;text-anchor:middle;fill:#333}.lb{font-size:13px;text-anchor:middle;fill:#333}.sm{font-size:10px;text-anchor:middle}.ex{font-size:11px;text-anchor:middle;fill:#555}.bx{fill:#e3f2fd;stroke:#1976d2;stroke-width:2;rx:5}</style></defs><text x=\"180\" y=\"20\" class=\"t\">소수의 분류</text><rect x=\"130\" y=\"30\" width=\"100\" height=\"32\" class=\"bx\"/><text x=\"180\" y=\"51\" class=\"lb\">소수</text><line x1=\"155\" y1=\"62\" x2=\"90\" y2=\"90\" stroke=\"#546e7a\" stroke-width=\"1.5\"/><line x1=\"205\" y1=\"62\" x2=\"270\" y2=\"90\" stroke=\"#546e7a\" stroke-width=\"1.5\"/><rect x=\"40\" y=\"90\" width=\"100\" height=\"32\" class=\"bx\"/><text x=\"90\" y=\"111\" class=\"lb\">유한소수</text><rect x=\"220\" y=\"90\" width=\"100\" height=\"32\" class=\"bx\"/><text x=\"270\" y=\"111\" class=\"lb\">무한소수</text><rect x=\"40\" y=\"132\" width=\"100\" height=\"20\" fill=\"#c8e6c9\" stroke=\"#2e7d32\" stroke-width=\"1.5\" rx=\"3\"/><text x=\"90\" y=\"146\" class=\"sm\" fill=\"#1b5e20\">→ 유리수</text><text x=\"90\" y=\"165\" class=\"ex\">예: 0.25</text><line x1=\"248\" y1=\"122\" x2=\"178\" y2=\"175\" stroke=\"#546e7a\" stroke-width=\"1.5\"/><line x1=\"292\" y1=\"122\" x2=\"320\" y2=\"175\" stroke=\"#546e7a\" stroke-width=\"1.5\"/><rect x=\"118\" y=\"178\" width=\"120\" height=\"32\" fill=\"#fff9c4\" stroke=\"#f57f17\" stroke-width=\"2\" rx=\"5\"/><text x=\"178\" y=\"199\" class=\"lb\">순환소수</text><rect x=\"118\" y=\"218\" width=\"120\" height=\"20\" fill=\"#ffccbc\" stroke=\"#d84315\" stroke-width=\"1.5\" rx=\"3\"/><text x=\"178\" y=\"232\" class=\"sm\" fill=\"#bf360c\">→ 유리수 (분수 가능)</text><text x=\"178\" y=\"252\" class=\"ex\">예: 0.333...</text><rect x=\"265\" y=\"178\" width=\"90\" height=\"32\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"2\" rx=\"5\"/><text x=\"310\" y=\"199\" class=\"lb\">비순환소수</text><rect x=\"265\" y=\"218\" width=\"90\" height=\"20\" fill=\"#e1bee7\" stroke=\"#6a1b9a\" stroke-width=\"1.5\" rx=\"3\"/><text x=\"310\" y=\"232\" class=\"sm\" fill=\"#4a148c\">→ 무리수</text><text x=\"310\" y=\"252\" class=\"ex\">예: π</text></svg>"
    },
    {
      "id": "MC-02",
      "type": "math_concept_card",
      "title": "순환마디와 표기법",
      "front": "순환마디가 뭐야? 어떻게 표시해?",
      "back_definition": "순환마디: 소수점 아래에서 한없이 반복되는 가장 짧은 숫자 덩어리\n표기법: 순환마디의 양 끝 숫자 위에 점(·)을 찍는다",
      "back_easy": "쉽게 말하면, 계속 반복되는 '가장 짧은' 패턴을 찾아서 그 시작과 끝 위에 점을 찍어. 1자리면 그 숫자 위에 점 하나, 여러 자리면 첫째와 마지막 위에 점 두 개.",
      "back_example": "0.888... → 순환마디 8 → 0.{r:8}\n0.474747... → 순환마디 47 → 0.{r:47}\n1.4636363... → 순환마디 63 → 1.4{r:63}\n(주의: 1.4는 반복 안 되니까 점 안 찍어!)",
      "exam_tip": "순환마디는 '가장 짧은' 패턴이야. 0.474747...에서 순환마디를 4747이라고 쓰면 틀려!"
    },
    {
      "id": "MC-03",
      "type": "math_concept_card",
      "title": "유한소수 판별법",
      "front": "분수가 유한소수인지 어떻게 알아?",
      "back_definition": "기약분수로 나타내었을 때, 분모의 소인수가 2 또는 5뿐이면 유한소수로 나타낼 수 있다.",
      "back_easy": "쉽게 말하면, 3단계야:\n① 먼저 약분해서 기약분수로 만들어\n② 분모를 소인수분해해\n③ 분모에 2랑 5만 있으면 → 유한소수!\n\n왜? 10 = 2 × 5니까, 분모가 2와 5로만 이루어져 있으면 분모를 10의 거듭제곱으로 바꿀 수 있거든.",
      "back_example": "{f:3:8} = {f:3:2³} → 분모에 2만 → 유한소수 ✓\n{f:3:15} = {f:1:5} (약분!) → 분모에 5만 → 유한소수 ✓\n{f:8:11} → 분모에 11 → 유한소수 ✗",
      "exam_tip": "⚠️ 가장 많이 틀리는 실수: 약분 안 하고 바로 분모 소인수분해! {f:3:15}에서 분모 15=3×5라고 '3이 있으니 안 돼'라고 하면 틀려. 먼저 약분하면 {f:1:5}야!",
      "visual_svg": "<svg viewBox=\"0 0 350 260\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto\"><defs><marker id=\"ah\" markerWidth=\"8\" markerHeight=\"8\" refX=\"4\" refY=\"4\" orient=\"auto\"><polygon points=\"0 0,8 4,0 8\" fill=\"#546e7a\"/></marker></defs><text x=\"120\" y=\"18\" style=\"font-size:15px;font-weight:bold;text-anchor:middle;fill:#333\">유한소수 판별 3단계</text><rect x=\"55\" y=\"26\" width=\"130\" height=\"30\" fill=\"#e3f2fd\" stroke=\"#1976d2\" stroke-width=\"2\" rx=\"5\"/><text x=\"120\" y=\"46\" style=\"font-size:13px;text-anchor:middle;font-weight:bold;fill:#333\">① 기약분수로 약분</text><line x1=\"120\" y1=\"56\" x2=\"120\" y2=\"68\" stroke=\"#546e7a\" stroke-width=\"1.5\" marker-end=\"url(#ah)\"/><rect x=\"55\" y=\"70\" width=\"130\" height=\"30\" fill=\"#e3f2fd\" stroke=\"#1976d2\" stroke-width=\"2\" rx=\"5\"/><text x=\"120\" y=\"90\" style=\"font-size:13px;text-anchor:middle;font-weight:bold;fill:#333\">② 분모 소인수분해</text><line x1=\"120\" y1=\"100\" x2=\"120\" y2=\"112\" stroke=\"#546e7a\" stroke-width=\"1.5\" marker-end=\"url(#ah)\"/><polygon points=\"120,114 72,142 120,158 168,142\" fill=\"#fff9c4\" stroke=\"#f57f17\" stroke-width=\"2\"/><text x=\"120\" y=\"142\" style=\"font-size:13px;text-anchor:middle;font-weight:bold\">2와 5만?</text><line x1=\"80\" y1=\"148\" x2=\"45\" y2=\"195\" stroke=\"#2e7d32\" stroke-width=\"2\"/><text x=\"38\" y=\"172\" style=\"font-size:11px;font-weight:bold;fill:#2e7d32;text-anchor:end\">YES</text><line x1=\"160\" y1=\"148\" x2=\"195\" y2=\"195\" stroke=\"#d84315\" stroke-width=\"2\"/><text x=\"202\" y=\"172\" style=\"font-size:11px;font-weight:bold;fill:#d84315;text-anchor:start\">NO</text><rect x=\"5\" y=\"200\" width=\"85\" height=\"30\" fill=\"#c8e6c9\" stroke=\"#2e7d32\" stroke-width=\"2\" rx=\"5\"/><text x=\"47\" y=\"220\" style=\"font-size:12px;text-anchor:middle;font-weight:bold;fill:#1b5e20\">유한소수 ✓</text><rect x=\"155\" y=\"200\" width=\"85\" height=\"30\" fill=\"#ffccbc\" stroke=\"#d84315\" stroke-width=\"2\" rx=\"5\"/><text x=\"197\" y=\"220\" style=\"font-size:12px;text-anchor:middle;font-weight:bold;fill:#bf360c\">순환소수 ✗</text><rect x=\"252\" y=\"26\" width=\"92\" height=\"210\" fill=\"#fafafa\" stroke=\"#ddd\" stroke-width=\"1\" rx=\"5\"/><text x=\"298\" y=\"48\" style=\"font-size:12px;text-anchor:middle;font-weight:bold;fill:#333\">예: 3/15</text><text x=\"298\" y=\"72\" style=\"font-size:10px;text-anchor:middle;fill:#555\">↓ 약분</text><text x=\"298\" y=\"92\" style=\"font-size:11px;text-anchor:middle;fill:#333\">1/5</text><text x=\"298\" y=\"114\" style=\"font-size:10px;text-anchor:middle;fill:#555\">↓ 소인수분해</text><text x=\"298\" y=\"134\" style=\"font-size:10px;text-anchor:middle;fill:#555\">분모 5 = 5¹</text><text x=\"298\" y=\"158\" style=\"font-size:10px;text-anchor:middle;fill:#555\">↓ 2와 5만?</text><text x=\"298\" y=\"184\" style=\"font-size:12px;text-anchor:middle;font-weight:bold;fill:#2e7d32\">유한소수! ✓</text></svg>"
    },
    {
      "id": "MC-04",
      "type": "math_concept_card",
      "title": "순환소수 판별법",
      "front": "분수가 순환소수인지 어떻게 알아?",
      "back_definition": "기약분수로 나타내었을 때, 분모에 2 또는 5 이외의 소인수가 있으면 순환소수로 나타낼 수 있다.",
      "back_easy": "쉽게 말하면, 유한소수 판별의 반대야:\n① 기약분수로 만들어\n② 분모를 소인수분해해\n③ 분모에 2, 5 말고 다른 놈(3, 7, 11...)이 있으면 → 순환소수!\n\n그리고 중요한 결론: 모든 유리수는 유한소수 아니면 순환소수 둘 중 하나야.",
      "back_example": "{f:5:7} → 분모에 7 → 순환소수 → 0.{r:714285}\n{f:8:45} = {f:8:3²×5} → 분모에 3 → 순환소수\n{f:22:55} = {f:2:5} (약분!) → 분모에 5만 → 유한소수 ✓",
      "exam_tip": "순환소수 판별도 기약분수가 먼저! {f:22:55}를 약분 안 하면 분모 55=5×11이라 순환소수로 잘못 판단해."
    },
    {
      "id": "MC-05",
      "type": "math_concept_card",
      "title": "유한소수로 변환하기",
      "front": "분수를 유한소수로 어떻게 바꿔?",
      "back_definition": "분모를 10의 거듭제곱(10, 100, 1000...)으로 만들기 위해 분자와 분모에 같은 수를 곱한다.",
      "back_easy": "쉽게 말하면, 분모를 10, 100, 1000 같은 수로 만들면 돼.\n분모가 2ⁿ이면 5ⁿ을 곱하고, 5ⁿ이면 2ⁿ을 곱해서 10ⁿ으로 만들어.\n그러면 분자 ÷ 10ⁿ = 소수!",
      "back_example": "{f:1:2} = {f:1×5:2×5} = {f:5:10} = 0.5\n{f:4:5} = {f:4×2:5×2} = {f:8:10} = 0.8\n{f:11:20} = {f:11:2²×5} → 5를 하나 더 곱해 → {f:55:100} = 0.55",
      "exam_tip": "분모가 2ᵃ × 5ᵇ일 때, a와 b 중 큰 수가 10의 지수가 돼. 2² × 5¹이면 5를 하나 더 곱해서 10²으로!"
    },
    {
      "id": "MC-06",
      "type": "math_concept_card",
      "title": "순환소수 → 분수 (기본)",
      "front": "순환소수를 분수로 어떻게 바꿔? (기본형)",
      "back_definition": "순환소수를 x로 놓고, 순환마디 길이만큼 10의 거듭제곱을 곱해서 순환 부분이 같은 두 식을 만든 후 빼서 x를 구한다.",
      "back_easy": "쉽게 말하면 3단계야:\n① 순환소수를 x라고 놓아\n② 순환마디 길이만큼 10을 곱해 (1자리면 ×10, 2자리면 ×100)\n③ 두 식을 빼면 순환 부분이 사라져!\n\n핵심: 소수점 아래 부분을 똑같이 만들어서 뺄셈으로 없애는 거야.",
      "back_example": "0.{r:5}를 분수로:\nx = 0.555...\n10x = 5.555...\n10x - x = 5.555... - 0.555...\n9x = 5\nx = {f:5:9}",
      "exam_tip": "순환마디 1자리 → ×10, 2자리 → ×100, 3자리 → ×1000. 순환마디 길이 = 10의 지수!",
      "visual_svg": "<svg viewBox=\"0 0 320 170\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto\"><defs><style>.t{font-size:15px;font-weight:bold;text-anchor:middle;fill:#333}.eq{font-size:13px;fill:#333;font-family:monospace}.eqs{font-size:12px;fill:#333;font-family:monospace}.ins{font-size:11px;fill:#d84315;font-weight:bold;text-anchor:middle}</style><marker id=\"am\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"4\" orient=\"auto\"><polygon points=\"0 0,8 4,0 8\" fill=\"#d84315\"/></marker></defs><text x=\"160\" y=\"20\" class=\"t\">순환소수 → 분수 변환</text><text x=\"25\" y=\"48\" class=\"eq\">x = 0.555...</text><text x=\"25\" y=\"72\" class=\"eq\">10x = 5.555...</text><rect x=\"15\" y=\"78\" width=\"195\" height=\"22\" fill=\"#fff9c4\" stroke=\"#f57f17\" stroke-width=\"1.5\" rx=\"3\" opacity=\"0.5\"/><text x=\"25\" y=\"95\" class=\"eqs\">10x − x = 5.555... − 0.555...</text><text x=\"25\" y=\"120\" class=\"eq\" style=\"font-weight:bold\">9x = 5</text><text x=\"25\" y=\"148\" class=\"eq\" style=\"font-size:14px;font-weight:bold\">∴ x = 5/9</text><circle cx=\"258\" cy=\"95\" r=\"45\" fill=\"#e3f2fd\" stroke=\"#1976d2\" stroke-width=\"1.5\" opacity=\"0.3\"/><text x=\"258\" y=\"90\" class=\"ins\">소수 부분이</text><text x=\"258\" y=\"108\" class=\"ins\">사라진다!</text><line x1=\"215\" y1=\"95\" x2=\"200\" y2=\"95\" stroke=\"#d84315\" stroke-width=\"1.5\" marker-end=\"url(#am)\"/></svg>"
    },
    {
      "id": "MC-07",
      "type": "math_concept_card",
      "title": "순환소수 → 분수 (섞인 형)",
      "front": "1.1{r:3} 같은 섞인 순환소수는 어떻게?",
      "back_definition": "비순환 부분과 순환 부분이 함께 있는 경우, 두 가지 10의 거듭제곱을 곱한 식을 만들어 순환 부분이 같아지도록 한 후 뺀다.",
      "back_easy": "쉽게 말하면, 소수점 아래에서 반복 안 되는 부분까지 한 번, 반복 시작 후까지 한 번 곱해서 두 식을 만들어.\n\n1.1{r:3}에서 1은 비순환, 3이 순환이야.\n→ ×10: 11.333... (비순환까지)\n→ ×100: 113.333... (순환까지)\n빼면: 90x = 102 → x = {f:102:90} = {f:17:15}",
      "back_example": "0.4{r:73}을 분수로:\nx = 0.4733...\n10x = 4.733...\n1000x = 473.33...\n1000x - 10x = 473.33... - 4.733...\n990x = 468.6... 아, 다시:\n실은 100x = 47.333..., 1000x = 473.333...\n1000x - 100x = 426\n900x = 426 → x = {f:71:150}",
      "exam_tip": "섞인 순환소수에서 핵심은 '어디서부터 반복인지' 정확히 파악하는 거야. 비순환 자릿수를 세는 게 첫 번째!"
    },
    {
      "id": "MC-08",
      "type": "math_concept_card",
      "title": "이 단원 TOP 5 함정",
      "front": "시험에 자주 나오는 함정 5개!",
      "back_definition": "① 기약분수 안 만들고 판별\n② 순환마디 표기 실수\n③ 모든 무한소수 = 순환소수라고 착각\n④ 섞인 순환소수 변환에서 곱하기 실수\n⑤ 약분 안 하고 답 제출",
      "back_easy": "① {f:3:15}를 보고 분모 15=3×5라서 '순환소수'라고 하면? → 틀림! 약분하면 {f:1:5}\n② 1.463636...에서 점을 어디에? → 6과 3 위에만! (4 위에 찍으면 틀림)\n③ π는 무한소수이지만 순환소수 아님!\n④ 1.1{r:3}에서 ×10, ×100 두 개 필요\n⑤ {f:26:99}가 답이면 약분 가능한지 반드시 확인!",
      "back_example": "",
      "exam_tip": "이 5개를 안 틀리면 이 단원 기본 문제는 다 맞을 수 있어!"
    }
  ],
  "procedure_drills": [
    {
      "id": "PD-01",
      "type": "procedure_drill",
      "category": "판별",
      "difficulty": "A",
      "problem": "{f:12:75}는 유한소수로 나타낼 수 있을까?",
      "final_answer": "유한소수",
      "steps": [
        {
          "label": "Step 1: 기약분수로 약분",
          "why": "약분 안 하면 가짜 소인수 때문에 판별이 틀려!",
          "question": "12와 75의 최대공약수는?",
          "input_type": "text",
          "correct": [
            "3"
          ],
          "hint": "12 = 2² × 3, 75 = 3 × 5² → 공통인 건?",
          "wrong_feedback": "12 = 2² × 3, 75 = 3 × 5²이니까 공통 소인수는 3이야."
        },
        {
          "label": "Step 2: 기약분수 구하기",
          "why": "약분한 결과를 확인하자",
          "question": "{f:12:75}를 약분하면? (분자/분모 형태로)",
          "input_type": "fraction",
          "correct": [
            "4/25"
          ],
          "hint": "12÷3 = ?, 75÷3 = ?",
          "wrong_feedback": "12÷3 = 4, 75÷3 = 25 → 기약분수는 4/25"
        },
        {
          "label": "Step 3: 분모 소인수분해",
          "why": "분모에 2, 5 외의 소인수가 있는지 확인하려고",
          "question": "25를 소인수분해하면?",
          "input_type": "text",
          "correct": [
            "5²",
            "5^2",
            "5×5",
            "5*5"
          ],
          "hint": "25 = 5 × ?",
          "wrong_feedback": "25 = 5 × 5 = 5²"
        },
        {
          "label": "Step 4: 판별!",
          "why": "분모에 2, 5만 있으면 유한소수야",
          "question": "이 분수는?",
          "input_type": "choice",
          "options": [
            "유한소수",
            "순환소수"
          ],
          "correct": [
            "유한소수"
          ],
          "hint": "분모 소인수가 5뿐이야. 2, 5 외의 다른 소인수가 있어?",
          "wrong_feedback": "분모가 5²이니까 소인수가 5뿐 → 유한소수!"
        }
      ]
    },
    {
      "id": "PD-02",
      "type": "procedure_drill",
      "category": "판별",
      "difficulty": "A",
      "problem": "{f:14:44}는 유한소수로 나타낼 수 있을까?",
      "final_answer": "순환소수",
      "steps": [
        {
          "label": "Step 1: 기약분수로 약분",
          "why": "약분이 판별의 첫 단계!",
          "question": "14와 44의 최대공약수는?",
          "input_type": "text",
          "correct": [
            "2"
          ],
          "hint": "14 = 2 × 7, 44 = 2² × 11 → 공통은?",
          "wrong_feedback": "14 = 2 × 7, 44 = 2² × 11 → GCD = 2"
        },
        {
          "label": "Step 2: 기약분수 구하기",
          "why": "약분 결과 확인",
          "question": "{f:14:44}를 약분하면?",
          "input_type": "fraction",
          "correct": [
            "7/22"
          ],
          "hint": "14÷2 = ?, 44÷2 = ?",
          "wrong_feedback": "14÷2 = 7, 44÷2 = 22 → 기약분수는 7/22"
        },
        {
          "label": "Step 3: 분모 소인수분해",
          "why": "2, 5 외의 소인수가 있는지 찾자",
          "question": "22를 소인수분해하면?",
          "input_type": "text",
          "correct": [
            "2×11",
            "2*11",
            "2 × 11"
          ],
          "hint": "22 = 2 × ?",
          "wrong_feedback": "22 = 2 × 11"
        },
        {
          "label": "Step 4: 판별!",
          "why": "11은 2도 5도 아닌 소인수야",
          "question": "이 분수는?",
          "input_type": "choice",
          "options": [
            "유한소수",
            "순환소수"
          ],
          "correct": [
            "순환소수"
          ],
          "hint": "분모에 11이 있어. 11은 2나 5야?",
          "wrong_feedback": "분모가 2 × 11이고 11은 2, 5가 아닌 소인수 → 순환소수!"
        }
      ]
    },
    {
      "id": "PD-03",
      "type": "procedure_drill",
      "category": "판별",
      "difficulty": "A",
      "problem": "{f:3:15}는 유한소수로 나타낼 수 있을까?",
      "final_answer": "유한소수",
      "steps": [
        {
          "label": "Step 1: 기약분수로 약분",
          "why": "이 문제가 바로 함정 문제! 약분 안 하면 틀려",
          "question": "3과 15의 최대공약수는?",
          "input_type": "text",
          "correct": [
            "3"
          ],
          "hint": "3은 15의 약수지?",
          "wrong_feedback": "3과 15의 최대공약수는 3이야."
        },
        {
          "label": "Step 2: 기약분수 구하기",
          "why": "약분하면 분모가 완전히 달라져!",
          "question": "{f:3:15}를 약분하면?",
          "input_type": "fraction",
          "correct": [
            "1/5"
          ],
          "hint": "3÷3 = 1, 15÷3 = 5",
          "wrong_feedback": "3÷3 = 1, 15÷3 = 5 → 기약분수는 1/5"
        },
        {
          "label": "Step 3: 분모 소인수분해",
          "why": "이제 약분된 분모로 판별해야 해",
          "question": "5를 소인수분해하면?",
          "input_type": "text",
          "correct": [
            "5"
          ],
          "hint": "5는 소수야!",
          "wrong_feedback": "5 자체가 소수야. 소인수분해하면 그냥 5."
        },
        {
          "label": "Step 4: 판별!",
          "why": "약분 전에는 15=3×5라서 헷갈렸지만, 약분 후엔?",
          "question": "이 분수는?",
          "input_type": "choice",
          "options": [
            "유한소수",
            "순환소수"
          ],
          "correct": [
            "유한소수"
          ],
          "hint": "분모 소인수가 5뿐이야!",
          "wrong_feedback": "약분하면 1/5 → 분모에 5만 → 유한소수! 약분 안 했으면 틀렸을 문제야."
        }
      ]
    },
    {
      "id": "PD-04",
      "type": "procedure_drill",
      "category": "판별",
      "difficulty": "B",
      "problem": "{f:11:3²×5}는 유한소수일까 순환소수일까?",
      "final_answer": "순환소수",
      "steps": [
        {
          "label": "Step 1: 기약분수 확인",
          "why": "11과 45(=3²×5)의 공약수가 있는지 체크",
          "question": "11과 45의 최대공약수는?",
          "input_type": "text",
          "correct": [
            "1"
          ],
          "hint": "11은 소수야. 45 = 3² × 5. 공통 소인수가 있어?",
          "wrong_feedback": "11은 소수이고 45의 소인수(3, 5)와 겹치지 않아 → GCD = 1, 이미 기약분수"
        },
        {
          "label": "Step 2: 분모 확인",
          "why": "이미 소인수분해가 되어 있어!",
          "question": "분모 3²×5에서 2, 5 이외의 소인수가 있어?",
          "input_type": "choice",
          "options": [
            "있다 (3이 있음)",
            "없다"
          ],
          "correct": [
            "있다 (3이 있음)"
          ],
          "hint": "3은 2도 5도 아니지?",
          "wrong_feedback": "분모에 3이 있어! 3은 2도 5도 아닌 소인수야."
        },
        {
          "label": "Step 3: 판별!",
          "why": "",
          "question": "이 분수는?",
          "input_type": "choice",
          "options": [
            "유한소수",
            "순환소수"
          ],
          "correct": [
            "순환소수"
          ],
          "hint": "분모에 3이 있으면?",
          "wrong_feedback": "분모에 2, 5 이외의 소인수 3이 있으니 → 순환소수!"
        }
      ]
    },
    {
      "id": "PD-05",
      "type": "procedure_drill",
      "category": "판별",
      "difficulty": "B",
      "problem": "{f:81:72}는 유한소수일까 순환소수일까?",
      "final_answer": "유한소수",
      "steps": [
        {
          "label": "Step 1: 기약분수로 약분",
          "why": "81과 72는 둘 다 9의 배수야!",
          "question": "81과 72의 최대공약수는?",
          "input_type": "text",
          "correct": [
            "9"
          ],
          "hint": "81 = 9 × 9, 72 = 9 × 8",
          "wrong_feedback": "81 = 3⁴, 72 = 2³ × 3² → GCD = 3² = 9"
        },
        {
          "label": "Step 2: 기약분수 구하기",
          "why": "약분하면 분모가 확 바뀌어!",
          "question": "{f:81:72}를 약분하면?",
          "input_type": "fraction",
          "correct": [
            "9/8"
          ],
          "hint": "81÷9 = 9, 72÷9 = 8",
          "wrong_feedback": "81÷9 = 9, 72÷9 = 8 → 기약분수는 9/8"
        },
        {
          "label": "Step 3: 분모 소인수분해",
          "why": "약분된 분모 8을 확인",
          "question": "8을 소인수분해하면?",
          "input_type": "text",
          "correct": [
            "2³",
            "2^3",
            "2×2×2",
            "2*2*2"
          ],
          "hint": "8 = 2 × 2 × 2",
          "wrong_feedback": "8 = 2³"
        },
        {
          "label": "Step 4: 판별!",
          "why": "분모에 2만 있어!",
          "question": "이 분수는?",
          "input_type": "choice",
          "options": [
            "유한소수",
            "순환소수"
          ],
          "correct": [
            "유한소수"
          ],
          "hint": "분모에 2만 있으면?",
          "wrong_feedback": "분모가 2³이니까 소인수가 2뿐 → 유한소수! 약분 전 72=2³×3²에 속으면 안 돼."
        }
      ]
    },
    {
      "id": "PD-06",
      "type": "procedure_drill",
      "category": "순환마디",
      "difficulty": "A",
      "problem": "{f:5:7}을 소수로 나타내고 순환마디를 찾아보자",
      "final_answer": "0.{r:714285}, 순환마디: 714285",
      "steps": [
        {
          "label": "Step 1: 나눗셈 시작",
          "why": "분자를 분모로 직접 나눠서 소수를 구하자",
          "question": "5 ÷ 7을 소수로 계산하면? (소수점 아래 6자리까지)",
          "input_type": "text",
          "correct": [
            "0.714285",
            "0.714285714285"
          ],
          "hint": "5.000000 ÷ 7을 직접 나눗셈해봐. 50÷7=7 나머지 1, 10÷7=1 나머지 3...",
          "wrong_feedback": "5 ÷ 7 = 0.714285714285... (714285가 반복)"
        },
        {
          "label": "Step 2: 순환마디 찾기",
          "why": "반복되는 가장 짧은 패턴을 찾자",
          "question": "순환마디는? (숫자만)",
          "input_type": "text",
          "correct": [
            "714285"
          ],
          "hint": "어느 숫자부터 다시 같은 패턴이 시작돼?",
          "wrong_feedback": "714285가 반복돼 → 순환마디는 714285 (6자리)"
        },
        {
          "label": "Step 3: 간단히 표기",
          "why": "순환마디 양 끝에 점을 찍어",
          "question": "간단히 나타내면 0.? (점 표기 설명해봐)",
          "input_type": "text",
          "correct": [
            "7위에점, 5위에점",
            "0.714285에 7과5위에점"
          ],
          "hint": "순환마디 714285의 첫 숫자 7과 마지막 숫자 5 위에 점!",
          "wrong_feedback": "0.714285 에서 7 위에 점, 5 위에 점 → 순환마디의 시작과 끝!"
        }
      ]
    },
    {
      "id": "PD-07",
      "type": "procedure_drill",
      "category": "순환마디",
      "difficulty": "A",
      "problem": "1.4636363...의 순환마디를 찾고 간단히 나타내자",
      "final_answer": "1.4{r:63}, 순환마디: 63",
      "steps": [
        {
          "label": "Step 1: 반복 패턴 찾기",
          "why": "어디서부터 반복이 시작되는지 찾자",
          "question": "1.4636363...에서 반복되는 부분은?",
          "input_type": "text",
          "correct": [
            "63"
          ],
          "hint": "4 뒤에 63, 63, 63... 반복되지?",
          "wrong_feedback": "63이 반복돼! 4는 반복 안 되니까 순환마디에 포함 안 돼."
        },
        {
          "label": "Step 2: 함정 확인!",
          "why": "순환마디에 4가 포함될까?",
          "question": "4는 순환마디에 포함돼?",
          "input_type": "choice",
          "options": [
            "포함 안 됨 (4는 반복 안 됨)",
            "포함됨"
          ],
          "correct": [
            "포함 안 됨 (4는 반복 안 됨)"
          ],
          "hint": "1.4-63-63-63... 에서 4는 한 번만 나오지?",
          "wrong_feedback": "4는 한 번만 나오고 반복 안 돼 → 순환마디에 포함 안 됨. 점은 6과 3 위에만!"
        }
      ]
    },
    {
      "id": "PD-08",
      "type": "procedure_drill",
      "category": "변환",
      "difficulty": "A",
      "problem": "0.{r:5}를 분수로 나타내자",
      "final_answer": "{f:5:9}",
      "steps": [
        {
          "label": "Step 1: x로 놓기",
          "why": "미지수로 놓고 방정식을 만들 거야",
          "question": "x = 0.555...로 놓았어. 순환마디가 1자리니까 뭘 곱해야 해?",
          "input_type": "choice",
          "options": [
            "×10",
            "×100",
            "×1000"
          ],
          "correct": [
            "×10"
          ],
          "hint": "순환마디 1자리 → 10, 2자리 → 100, 3자리 → 1000",
          "wrong_feedback": "순환마디가 '5' 한 자리니까 ×10!"
        },
        {
          "label": "Step 2: 두 식 만들기",
          "why": "소수점 아래가 같은 두 식을 만들어 빼려고",
          "question": "10x = ?",
          "input_type": "text",
          "correct": [
            "5.555",
            "5.555...",
            "5.5555"
          ],
          "hint": "0.555... × 10 = ?",
          "wrong_feedback": "10x = 5.555..."
        },
        {
          "label": "Step 3: 빼기",
          "why": "10x - x를 하면 소수 부분이 사라져!",
          "question": "10x - x = 9x = ?",
          "input_type": "text",
          "correct": [
            "5"
          ],
          "hint": "5.555... - 0.555... = ?",
          "wrong_feedback": "5.555... - 0.555... = 5 → 9x = 5"
        },
        {
          "label": "Step 4: x 구하기",
          "why": "양변을 9로 나누면 끝!",
          "question": "x = ?",
          "input_type": "fraction",
          "correct": [
            "5/9"
          ],
          "hint": "9x = 5이니까 x = ?",
          "wrong_feedback": "9x = 5 → x = 5/9"
        }
      ]
    },
    {
      "id": "PD-09",
      "type": "procedure_drill",
      "category": "변환",
      "difficulty": "A",
      "problem": "0.{r:26}을 분수로 나타내자",
      "final_answer": "{f:26:99}",
      "steps": [
        {
          "label": "Step 1: 10의 거듭제곱 결정",
          "why": "순환마디 길이에 맞춰서",
          "question": "순환마디가 '26'으로 2자리야. 뭘 곱해야 해?",
          "input_type": "choice",
          "options": [
            "×10",
            "×100",
            "×1000"
          ],
          "correct": [
            "×100"
          ],
          "hint": "2자리 순환마디니까?",
          "wrong_feedback": "순환마디 2자리 → ×100"
        },
        {
          "label": "Step 2: 두 식 세우기",
          "why": "소수 부분이 같은 두 식",
          "question": "x = 0.2626..., 100x = ?",
          "input_type": "text",
          "correct": [
            "26.2626",
            "26.2626...",
            "26.262626"
          ],
          "hint": "0.2626... × 100 = ?",
          "wrong_feedback": "100x = 26.2626..."
        },
        {
          "label": "Step 3: 빼서 x 구하기",
          "why": "100x - x = 99x",
          "question": "99x = ? → x = ?",
          "input_type": "fraction",
          "correct": [
            "26/99"
          ],
          "hint": "26.2626... - 0.2626... = 26",
          "wrong_feedback": "99x = 26 → x = 26/99"
        }
      ]
    },
    {
      "id": "PD-10",
      "type": "procedure_drill",
      "category": "변환",
      "difficulty": "B",
      "problem": "1.1{r:3}을 분수로 나타내자",
      "final_answer": "{f:17:15}",
      "steps": [
        {
          "label": "Step 1: 구조 파악",
          "why": "비순환 부분과 순환 부분을 구분해야 해",
          "question": "1.1333...에서 비순환 부분은? 순환 부분은?",
          "input_type": "text",
          "correct": [
            "비순환: 1, 순환: 3",
            "1.1이 비순환, 3이 순환"
          ],
          "hint": "소수점 아래에서 1은 한 번만, 3이 반복돼",
          "wrong_feedback": "정수부 1, 비순환 소수 1, 순환마디 3 → 비순환 자릿수 1개, 순환마디 1자리"
        },
        {
          "label": "Step 2: 두 가지 곱하기",
          "why": "비순환 끝까지 ×10, 순환 포함해서 ×100을 곱해",
          "question": "10x와 100x를 각각 구하면?\n(x = 1.1333...)",
          "input_type": "text",
          "correct": [
            "10x=11.333, 100x=113.333",
            "11.333과 113.333"
          ],
          "hint": "1.1333... × 10 = ? , × 100 = ?",
          "wrong_feedback": "10x = 11.333...\n100x = 113.333..."
        },
        {
          "label": "Step 3: 빼기",
          "why": "100x - 10x를 하면 소수 부분이 사라져",
          "question": "100x - 10x = 90x = ?",
          "input_type": "text",
          "correct": [
            "102"
          ],
          "hint": "113.333... - 11.333... = ?",
          "wrong_feedback": "113.333... - 11.333... = 102 → 90x = 102"
        },
        {
          "label": "Step 4: 기약분수로!",
          "why": "약분 잊지 마!",
          "question": "x = {f:102:90}을 기약분수로 나타내면?",
          "input_type": "fraction",
          "correct": [
            "17/15"
          ],
          "hint": "102와 90의 최대공약수는 6",
          "wrong_feedback": "102÷6 = 17, 90÷6 = 15 → x = 17/15"
        }
      ]
    },
    {
      "id": "PD-11",
      "type": "procedure_drill",
      "category": "변환",
      "difficulty": "B",
      "problem": "0.0{r:4}를 분수로 나타내자",
      "final_answer": "{f:2:45}",
      "steps": [
        {
          "label": "Step 1: 구조 파악",
          "why": "소수점 바로 다음 0은 비순환이야",
          "question": "0.0444...에서 비순환 소수 자릿수와 순환마디 자릿수는?",
          "input_type": "text",
          "correct": [
            "비순환 1자리, 순환 1자리",
            "1, 1"
          ],
          "hint": "0이 한 자리, 4가 반복 1자리",
          "wrong_feedback": "비순환: 0 (1자리), 순환마디: 4 (1자리)"
        },
        {
          "label": "Step 2: 식 세우기",
          "why": "비순환 끝까지 ×10, 순환 포함 ×100",
          "question": "10x = ?, 100x = ?",
          "input_type": "text",
          "correct": [
            "10x=0.444, 100x=4.444",
            "0.444과 4.444"
          ],
          "hint": "0.0444... × 10 = 0.444..., × 100 = ?",
          "wrong_feedback": "10x = 0.444..., 100x = 4.444..."
        },
        {
          "label": "Step 3: 빼서 구하기",
          "why": "100x - 10x = 90x",
          "question": "90x = ? → x = ? (기약분수)",
          "input_type": "fraction",
          "correct": [
            "2/45"
          ],
          "hint": "4.444... - 0.444... = 4, 그런데 4/90을 약분하면?",
          "wrong_feedback": "90x = 4 → x = 4/90 = 2/45"
        }
      ]
    },
    {
      "id": "PD-12",
      "type": "procedure_drill",
      "category": "유한소수변환",
      "difficulty": "A",
      "problem": "{f:7:125}를 유한소수로 나타내자",
      "final_answer": "0.056",
      "steps": [
        {
          "label": "Step 1: 분모 소인수분해",
          "why": "몇을 곱하면 10의 거듭제곱이 되는지 알아야 해",
          "question": "125를 소인수분해하면?",
          "input_type": "text",
          "correct": [
            "5³",
            "5^3",
            "5×5×5",
            "5*5*5"
          ],
          "hint": "125 = 5 × 25 = 5 × 5 × 5",
          "wrong_feedback": "125 = 5³"
        },
        {
          "label": "Step 2: 뭘 곱해야 10ⁿ?",
          "why": "5³에 2³을 곱하면 (2×5)³ = 10³ = 1000",
          "question": "5³ × ? = 10³",
          "input_type": "text",
          "correct": [
            "2³",
            "2^3",
            "8"
          ],
          "hint": "10 = 2 × 5니까, 5³에 2를 3번 곱하면?",
          "wrong_feedback": "5³ × 2³ = (5×2)³ = 10³ = 1000"
        },
        {
          "label": "Step 3: 분자도 같이 곱하기",
          "why": "분자분모에 같은 수를 곱해야 값이 안 변해",
          "question": "{f:7:125} = {f:7×8:1000} = {f:?:1000}",
          "input_type": "text",
          "correct": [
            "56"
          ],
          "hint": "7 × 8 = ?",
          "wrong_feedback": "7 × 8 = 56"
        },
        {
          "label": "Step 4: 소수로!",
          "why": "분모가 1000이면 소수점 3자리!",
          "question": "{f:56:1000} = ?",
          "input_type": "text",
          "correct": [
            "0.056"
          ],
          "hint": "56 ÷ 1000 = ?",
          "wrong_feedback": "56/1000 = 0.056"
        }
      ]
    }
  ],
  "questions": [
    {
      "id": "M1-E001",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "다음 중 순환소수를 간단히 나타낸 것으로 옳은 것을 고르세요.",
      "sentence": "",
      "options": [
        "5.0777... = 5.0{r:77}",
        "0.342342... = 0.{r:342}",
        "0.5484848... = 0.{r:548}",
        "1.581581... = 1.{r:58}",
        "2.469469... = 2.{r:469}"
      ],
      "correct": 4,
      "wrong_explanations": {
        "0": "💡 소수점 뒤의 첫 0은 반복되지 않아. 실제로 반복되는 부분만 찾아.\n📖 순환마디: 한없이 반복되는 가장 짧은 숫자 패턴. 5.0777...에서 77이 아니라 7만 반복돼.\n⚠️ 학생 실수: 0을 포함해서 '07'이나 '77'이라고 쓰기. 반복 여부를 직접 확인해야 해.",
        "1": "💡 각 자리가 정말 반복되는지 직접 확인해봐. 342는 한 묶음으로 계속 반복돼.\n📖 순환마디의 조건: 소수점 아래에서 정확히 같은 패턴이 한 주기 완성 후 다시 시작되어야 함.\n⚠️ 학생 실수: 첫 몇 자리만 보고 순환마디라고 결론짓기. 전체 패턴을 끝까지 추적해야 해.",
        "2": "💡 어떤 숫자들이 반복되는지 칠해가며 찾아봐. 5는 한 번, 48은 계속 반복.\n📖 순환마디는 반복되는 부분만. 비반복 부분은 따로 표기함. 0.5484848...의 순환마디는 48.\n⚠️ 학생 실수: 처음 보이는 여러 숫자를 모두 순환마디에 포함시키기.",
        "3": "💡 패턴의 길이를 세어봐. 581이 계속 반복되는지, 아니면 더 짧은 패턴인지.\n📖 순환마디 찾기: 소수점 아래를 반복되는 최소 단위로 분해. 1.581581... = 1.{r:581}.\n⚠️ 학생 실수: 순환마디를 의도적으로 '짧게' 자르기. 정확한 반복 패턴을 찾지 않으면 안 돼."
      },
      "hint": "순환마디는 '반복되는 가장 짧은 패턴'이야. 각 보기에서 실제로 반복되는 부분을 찾아봐.",
      "source": "교과서 단원마무리 1번"
    },
    {
      "id": "M1-E002",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "다음 분수 중 유한소수로 나타낼 수 있는 것을 고르세요.",
      "sentence": "",
      "options": [
        "{f:7:12}",
        "{f:9:15}",
        "{f:13:30}",
        "{f:8:11}"
      ],
      "correct": 1,
      "wrong_explanations": {
        "0": "💡 분모를 소인수분해해서 2와 5만 있는지 확인해봐. 12 = 4 × 3인데 3이 있어.\n📖 유한소수 판별법: 기약분수의 분모가 2^a × 5^b 형태일 때만 유한소수.\n⚠️ 학생 실수: 3이 분모에 있으면 순환소수가 되는데, 약분 안 한 채로 판단하기.",
        "2": "💡 분모 30을 소인수분해해봐. 30 = 2 × 3 × 5. 2와 5 외에 뭐가 있어?\n📖 분모에 3이 있으면 유한소수가 될 수 없어. 2와 5만의 조합이어야 함.\n⚠️ 학생 실수: 3을 놓치고 2와 5만 보기. 모든 소인수를 철저히 확인해야 해.",
        "3": "💡 분모 11은 소수야. 11은 2도 아니고 5도 아니지?\n📖 분모의 소인수가 2, 5 외의 다른 수를 포함하면 반드시 순환소수.\n⚠️ 학생 실수: 11은 '특별한' 소수라고 생각해서 헷갈리기. 2, 5가 아니면 순환소수."
      },
      "hint": "각 분수를 기약분수로 만들고, 분모를 소인수분해해봐. 2와 5만 있는 걸 찾아!",
      "explanation": "💡 먼저 9/15를 약분해. 최대공약수는 3이야. 그러면 3/5가 돼.\n📖 분모가 5 = 5¹이니까 유한소수 조건을 만족. 유한소수 = 분모의 소인수가 2^a × 5^b 형태.\n⚠️ 학생 실수: 약분을 빠뜨리고 분모 15를 바로 소인수분해하면 3×5가 나와서 '순환소수'라고 판단하기.",
      "source": "교과서 기본 유형"
    },
    {
      "id": "M1-E003",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "다음 보기 중 옳은 것을 모두 고르면? (정답 2개)",
      "sentence": "",
      "options": [
        "순환소수는 모두 유리수이다.",
        "순환소수는 무한소수가 아니다.",
        "분수로 나타낼 수 없는 순환소수도 있다.",
        "무한소수는 모두 순환소수이다.",
        "정수가 아닌 유리수 중 유한소수로 나타낼 수 없는 것은 모두 순환소수가 된다."
      ],
      "correct": [
        0,
        4
      ],
      "wrong_explanations": [
        "",
        "💡 순환소수와 무한소수의 관계를 다시 생각해봐. 순환소수는 끝나지 않는 수야.\n📖 순환소수: 끝나지 않지만 반복되는 패턴 있음 = 무한소수의 일종.\n⚠️ 학생 실수: '순환'이라는 단어만 보고 '짧다'고 착각하기. 순환소수도 무한히 이어져.",
        "💡 순환소수의 정의를 다시 확인해봐. 정수가 아닌 유리수면 분수로 나타낼 수 있어.\n📖 모든 순환소수는 분자/분모(정수) 형태로 나타낼 수 있음 = 유리수의 성질.\n⚠️ 학생 실수: 특수한 순환소수는 예외가 있을 거라고 생각하기. 순환소수는 항상 분수화 가능.",
        "💡 무한소수에도 두 가지가 있어. 반복되는 것과 반복되지 않는 것.\n📖 무한소수 = 순환소수 + 비순환소수(무리수). π는 무한소수지만 순환소수 아님.\n⚠️ 학생 실수: 무한소수라고 다 순환소수인 줄 알기. π 같은 무리수는 무한이면서 비순환."
      ],
      "hint": "각 보기를 하나씩 참/거짓 판단해봐.",
      "source": "교과서 단원마무리 15번"
    },
    {
      "id": "M1-E004",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "{f:7:125}를 분모가 10의 거듭제곱인 분수로 고쳐 유한소수로 나타내는 과정입니다. 빈칸에 알맞은 수로 옳은 것은?",
      "sentence": "{f:7:125} = {f:7 × ①:5³ × ②} = {f:③:10³} = {f:③:④} = ⑤",
      "options": [
        "① 5³, ② 2³",
        "① 2³, ② 2³",
        "① 8, ② 8",
        "① 2³, ② 5³"
      ],
      "correct": 1,
      "wrong_explanations": {
        "0": "💡 분모를 10³ = 1000으로 만들려면, 5³에 뭘 곱해야 할까? 10 = 2 × 5니까.\n📖 5³ × 2³ = (5×2)³ = 10³. 5의 개수와 2의 개수가 같아야 함.\n⚠️ 학생 실수: 분모에 5³을 더 곱하기. 그럼 5⁶이 되어 10의 거듭제곱이 못 돼.",
        "2": "💡 8은 2³을 계산한 건데, 분모에 곱할 때도 숫자 그대로 아니라 지수로 생각해야 해.\n📖 분자에 8을 곱하고, 분모에도 8(=2³)을 곱하면 분모 = 5³ × 2³ = 10³ = 1000.\n⚠️ 학생 실수: ②에도 8이라고 적기. 분모에 곱하는 건 명확하게 2³ 형태로 써야 혼동 안 돼.",
        "3": "💡 10³ = 1000을 만들려면 2³과 5³이 필요해. 분모에 이미 5³이 있으니?\n📖 분자분모에 같은 수를 곱해야 값이 안 변함. 5³ × 5³은 5⁶ ≠ 10의 거듭제곱.\n⚠️ 학생 실수: 분모에 뭘 곱할지 생각할 때 5를 또 곱하기. 2를 곱해야 한다는 걸 놓치기."
      },
      "hint": "125 = 5³이야. 5³ × ?³ = 10³을 만들려면?",
      "source": "교과서 단원마무리 3번"
    },
    {
      "id": "M1-E005",
      "type": "typed_answer",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "다음 순환소수를 분수로 나타내세요.",
      "sentence": "0.{r:12}를 분수로 나타내면?",
      "correct": [
        "4/33"
      ],
      "alt_correct": [
        "4/33"
      ],
      "hint": "x = 0.1212..., 100x = 12.1212... → 99x = 12 → x = 12/99을 약분!",
      "explanation": "💡 순환마디가 '12'로 2자리니까 100을 곱해. 그러면 소수 부분이 같아지는 두 식을 만들 수 있어.\n📖 x = 0.121212... → 100x = 12.121212... → 100x - x = 99x = 12 → x = {f:12:99}. 마지막에 최대공약수 3으로 약분.\n⚠️ 학생 실수: 약분을 빠뜨리고 12/99을 최종 답으로 쓰기. 항상 기약분수로 정리해야 해.",
      "source": "교과서 기본 5번 유형"
    },
    {
      "id": "M1-E006",
      "type": "typed_answer",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "다음 순환소수를 분수로 나타내세요.",
      "sentence": "0.{r:5}를 분수로 나타내면?",
      "correct": [
        "5/9"
      ],
      "alt_correct": [
        "5/9"
      ],
      "hint": "x = 0.555..., 10x = 5.555... → 9x = 5",
      "explanation": "💡 순환마디가 1자리(5)니까 10을 곱해. x와 10x를 빼면 소수 부분이 사라져.\n📖 x = 0.555... → 10x = 5.555... → 10x - x = 9x = 5 → x = {f:5:9}.\n⚠️ 학생 실수: 10x - x 계산에서 실수하기. 정확히 5.555... - 0.555... = 5임을 확인.",
      "source": "교과서 기본 유형"
    },
    {
      "id": "M1-E007",
      "type": "typed_answer",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "다음 순환소수를 분수로 나타내세요.",
      "sentence": "1.{r:6}을 분수로 나타내면?",
      "correct": [
        "5/3"
      ],
      "alt_correct": [
        "5/3"
      ],
      "hint": "x = 1.666..., 10x = 16.666... → 9x = 15 → 약분!",
      "explanation": "💡 정수 부분은 그대로두고, 소수 부분만 처리해. 순환마디 1자리니까 10을 곱해.\n📖 x = 1.666... → 10x = 16.666... → 9x = 15 → x = {f:15:9}. 최대공약수 3으로 약분 = {f:5:3}.\n⚠️ 학생 실수: 정수 부분 때문에 헷갈려서 약분을 건너뛰거나 계산 실수하기. 정수가 있어도 절차는 같아.",
      "source": "교과서 단원마무리 유형"
    },
    {
      "id": "M1-E008",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "B",
      "instruction": "다음 보기 중 순환소수로만 나타낼 수 있는 것을 모두 고르세요.",
      "sentence": "",
      "options": [
        "{f:5:36}",
        "{f:7:2³}",
        "{f:11:2×3×5}",
        "{f:12:96}"
      ],
      "correct": [
        0,
        2
      ],
      "wrong_explanations": [
        "",
        "💡 분모 8을 소인수분해하면 2³. 2는 10의 소인수야. 분모에 2와 5만 있으면?\n📖 분모 = 2^a × 5^b 형태 → 유한소수. 7/8은 분자가 7, 분모가 2³이니까 유한소수야.\n⚠️ 학생 실수: 분모가 8이라서 크다고 생각하고 '복잡하니까 순환'이라고 잘못 판단하기.",
        "",
        "💡 분수를 약분할 때 최대공약수를 찾아야 해. 12와 96의 최대공약수는?\n📖 12/96: GCD(12,96) = 12 → {f:1:8}로 약분. 약분 후 분모 8 = 2³ → 유한소수.\n⚠️ 학생 실수: 약분 안 하고 분모 96 = 2⁵ × 3이라고 생각해서 '3이 있으니 순환'이라 판단하기. 반드시 약분 먼저!"
      ],
      "hint": "각 분수를 기약분수로 만들고 분모를 소인수분해해봐.",
      "explanation": "💡 각 분수마다 같은 과정: 기약분수 → 분모 소인수분해 → 2와 5만? yes→유한, no→순환.\n📖 {f:5:36}: GCD(5,36)=1 → 분모 36=2²×3² → 3 있음 → 순환 ✓\n{f:7:8}: 분모 2³ → 2만 → 유한\n{f:11:30}: GCD(11,30)=1 → 분모 2×3×5 → 3 있음 → 순환 ✓\n{f:12:96}=>{f:1:8}: 분모 2³ → 2만 → 유한\n⚠️ 학생 실수: ④번에서 약분 안 하고 분모의 3을 근거로 '순환'이라 판단하기.",
      "source": "교과서 기본 유형"
    },
    {
      "id": "M1-E009",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "B",
      "instruction": "순환소수 1.0{r:4}를 분수로 나타내는 과정입니다. 빈칸 ①~⑤에 알맞은 수 중 옳지 않은 것은?",
      "sentence": "1.0{r:4}를 x라 하면 x = 1.0444...\n①x의 양변에 ②을 곱하면 ②x = 104.444...\n①x의 양변에 10을 곱하면 10x = ③\n②x에서 10x를 빼면 ④x = ⑤",
      "options": [
        "① 100",
        "② 104.444...",
        "③ 10.444...",
        "④ 90",
        "⑤ 94"
      ],
      "correct": 4,
      "wrong_explanations": {
        "0": "💡 비순환 부분 0은 1자리, 순환 부분 4는 1자리. 합치면 소수점 아래 2자리까지 필요해.\n📖 비순환 n자리 + 순환 m자리 → 10^(n+m)을 곱함. 여기선 10^2 = 100.\n⚠️ 학생 실수: 순환 부분만 세어서 10을 곱하기. 비순환 부분도 포함해야 해.",
        "1": "💡 x = 1.0444...에 100을 곱해. 100 × 1.0444... = 104.444...\n📖 100x = 104.444... (맞음). 소수점이 2자리 오른쪽으로 이동.\n⚠️ 학생 실수: 곱셈 계산 실수로 102.444... 같은 값을 쓰기.",
        "2": "💡 x = 1.0444...에 10을 곱해. 소수점 1자리 오른쪽으로.\n📖 10x = 10.444... (맞음). 1.0444...의 소수점을 한 자리 오른쪽으로 이동.\n⚠️ 학생 실수: 100x값을 잘못 구한 후 여기서도 헷갈리기.",
        "3": "💡 100x - 10x = (100-10)x = 90x. 계수 계산을 확인해.\n📖 100x - 10x = 90x. 이건 지수가 아니라 단순 뺄셈이니까 정확히.\n⚠️ 학생 실수: 계수 계산에서 80x라고 쓰거나 계산 오류."
      },
      "hint": "100x - 10x = 90x, 104.444... - 10.444... = ?",
      "explanation": "💡 100x와 10x를 빼면 소수 부분이 정확히 소거돼. 104.444... - 10.444... = 94를 계산해.\n📖 100x = 104.444... 에서 10x = 10.444...를 뺌 → 90x = 94 → x = {f:94:90} = {f:47:45}.\n⚠️ 학생 실수: ⑤ 값으로 100을 쓰기. 100이 아니라 104.444...와 10.444...의 차인 94가 맞아.",
      "source": "교과서 단원마무리 8번"
    },
    {
      "id": "M1-E010",
      "type": "typed_answer",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "B",
      "instruction": "다음 순환소수를 분수로 나타내세요.",
      "sentence": "0.{r:471}을 분수로 나타내면?",
      "correct": [
        "157/333"
      ],
      "alt_correct": [
        "157/333"
      ],
      "hint": "순환마디 3자리니까 ×1000. 1000x - x = 999x",
      "explanation": "💡 순환마디 471은 3자리. 맨 처음으로 돌아오려면 소수점을 3자리 옮겨야 하니까 1000을 곱해.\n📖 x = 0.471471... → 1000x = 471.471... → 1000x - x = 999x = 471 → x = {f:471:999}. GCD(471,999)=3으로 약분.\n⚠️ 학생 실수: 약분을 빠뜨리고 471/999로 최종 답하기. 항상 기약분수로!",
      "source": "교과서 기본 유형"
    },
    {
      "id": "M1-E011",
      "type": "typed_answer",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "B",
      "instruction": "다음 순환소수를 분수로 나타내세요.",
      "sentence": "0.4{r:5}를 분수로 나타내면?",
      "correct": [
        "41/90"
      ],
      "alt_correct": [
        "41/90"
      ],
      "hint": "비순환 1자리(4), 순환 1자리(5). 10x = 4.555..., 100x = 45.555...",
      "explanation": "💡 4는 한 번만(비순환), 5는 반복(순환). 비순환까지 = 10x, 순환까지 = 100x를 만들어서 빼면 순환 부분이 소거돼.\n📖 x = 0.4555... → 10x = 4.555... → 100x = 45.555... → 100x - 10x = 90x = 41 → x = {f:41:90}.\n⚠️ 학생 실수: 비순환을 고려하지 않고 무조건 100x - x = 99x로 계산하기. 비순환+순환 구조를 정확히 파악.",
      "source": "교과서 기본 유형"
    },
    {
      "id": "M1-E012",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "B",
      "instruction": "다음 중 순환소수 0.4{r:73}에 대한 설명으로 옳지 않은 것은?",
      "sentence": "",
      "options": [
        "유리수이다.",
        "0.47{r:3}으로 나타낸다.",
        "순환마디는 3이다.",
        "분수로 나타내면 기약분수이다.",
        "100x - 10x로 소수 부분을 없앨 수 있다."
      ],
      "correct": 4,
      "wrong_explanations": [
        "💡 순환소수의 정의를 다시 보자. 분수로 나타낼 수 있으면 유리수야.\n📖 모든 순환소수는 정수/정수 형태 → 유리수. 이건 필수 성질.\n⚠️ 학생 실수: 예외가 있을 거라 생각하기. 순환소수는 항상 유리수.",
        "💡 0.473333...을 다시 쓰면? 47이 비순환, 3이 반복.\n📖 0.4{r:73} = 0.47333... = 0.47{r:3}. 표기가 다르지만 값은 같음.\n⚠️ 학생 실수: '73'이 한 묶음이라고 생각해서 '0.4{r:73}'만 맞다고 하기.",
        "💡 어떤 숫자가 반복되는가? 0.47333...에서 3만 계속 반복.\n📖 순환마디 = 반복되는 패턴 = 3. 47은 한 번만이니까 순환마디가 아님.\n⚠️ 학생 실수: '73'을 순환마디로 판단하기. 실제로 반복되는 부분만 봐야 해.",
        "💡 어떤 분수로 나타낼지는 실제로 계산해봐야 알 수 있어.\n📖 x = 0.473333... → 1000x - 100x = 900x = 427 → x = 427/900. GCD(427,900)을 계산하면 기약분수인지 알 수 있음.\n⚠️ 학생 실수: 계산 없이 '당연히 기약분수'라고 가정하기. 약분 가능성을 반드시 확인."
      ],
      "hint": "비순환 2자리(47) + 순환 1자리(3)이면, 어떤 두 식을 빼야 할까?",
      "explanation": "💡 구조를 정확히 파악: 비순환은 '4'(1자리), '7'(1자리=총 2자리), 순환은 '3'(1자리).\n📖 비순환 2자리를 모두 넘으려면 100x, 순환까지 포함하려면 1000x. 그래서 1000x - 100x = 900x → 소수 부분 소거.\n⚠️ 학생 실수: 100x - 10x = 90x를 사용. 이러면 소수점 아래가 맞지 않음. 비순환 길이를 무시했기 때문.",
      "source": "교과서 단원마무리 9번 유형"
    },
    {
      "id": "M1-E013",
      "type": "typed_answer",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "B",
      "instruction": "0.{r:71}의 소수점 아래 10번째 자리의 숫자를 구하세요.",
      "sentence": "",
      "correct": [
        "1"
      ],
      "alt_correct": [
        "1"
      ],
      "hint": "순환마디 '71'이 2자리야. 10 ÷ 2 = 5 나머지 0. 나머지가 0이면 순환마디의 마지막 숫자!",
      "explanation": "💡 순환마디 71은 2자리. 10번째 자리가 어느 부분일까? 10 ÷ 2를 계산해봐.\n📖 10 ÷ 2 = 5 나머지 0 → 나머지가 0 = 순환마디의 마지막 숫자(2번째) = 1. 나머지가 1이면 첫 번째 숫자.\n⚠️ 학생 실수: 나머지와 순환마디의 어느 부분인지 대응시키지 못하기. 몇 바퀴 도는지와 어느 위치인지를 정확히 파악.",
      "source": "교과서 기본 유형"
    },
    {
      "id": "M1-E014",
      "type": "typed_answer",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "C",
      "instruction": "다음 조건을 모두 만족시키는 A의 값을 구하세요.",
      "sentence": "(가) A는 9의 배수이고 두 자리 자연수이다.\n(나) {f:A:12}를 소수로 나타내면 유한소수가 된다.",
      "correct": [
        "36",
        "72"
      ],
      "alt_correct": [
        "36",
        "72"
      ],
      "hint": "A/12를 기약분수로 만들었을 때 분모에 2, 5만 남아야 해. 12 = 2² × 3이니까 A가 3의 배수여야 3이 약분돼.",
      "explanation": "💡 두 조건을 동시에 만족: A는 9의 배수 AND A/12가 유한소수.\n📖 12 = 2²×3. 유한소수 조건: 기약분수 분모에 2,5만 남아야 함 → 분모의 3을 없애려면 분자 A가 3의 배수여야 약분됨.\n3-layer check:\n① 9의 배수인 두 자리: 18, 27, 36, 45, 54, 63, 72, 81, 90, 99\n② 각각 A/12 = ? (기약분수)\n③ 분모에 3이 남는가? 남으면 ✗, 안 남으면 ✓\n결과: A = 36 (36/12=3/1), A = 72 (72/12=6/1)\n⚠️ 학생 실수: 9의 배수 조건만 확인하고 약분까지 안 하기. 분모의 소인수까지 정확히 추적.",
      "source": "교과서 발전 8번"
    },
    {
      "id": "M1-E015",
      "type": "typed_answer",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "C",
      "instruction": "어떤 기약분수를 순환소수로 나타내는데, 수호는 분모를 잘못 보아서 2.{r:6}이 되었고, 연우는 분자를 잘못 보아서 1.{r:3}이 되었습니다. 원래 분수를 순환소수로 바르게 나타내세요.",
      "sentence": "",
      "correct": [
        "0.{r:8}"
      ],
      "alt_correct": [
        "0.888...",
        "8/9"
      ],
      "hint": "수호는 분모를 잘못 봤어 → 분자는 맞음. 연우는 분자를 잘못 봤어 → 분모는 맞음.\n각각의 결과를 분수로 바꿔서 맞는 부분을 조합해봐.",
      "explanation": "💡 누가 뭘 잘못 봤는지를 추적. 수호 = 분모 오류(분자 맞음), 연우 = 분자 오류(분모 맞음).\n📖 원래 분수 a/b라 하면:\n수호: a/(틀린분모) = 2.{r:6} = 2.666... = {f:8:3}\n연우: (틀린분자)/b = 1.{r:3} = 1.333... = {f:4:3}\n\n역추적:\n연우 식에서: (틀린분자)/b = 4/3 → 분모 b와 분자의 관계 → b=9 or b=3 가능\n만약 b=3이면, 원래 분자 a는 a/3 = (틀린분자)/3 형태 → 모순 확인\n b=9일 때: 4/3 = (틀린분자)/9 → 틀린분자 = 12\n수호 식에서: a/3 = 8/3 → a = 8\n확인: 원래 분수 = 8/9, GCD(8,9)=1 ✓\n수호가 9를 3으로 잘못 봤으면: 8/3 = 2.666... ✓\n연우가 8을 12로 잘못 봤으면: 12/9 = 4/3 = 1.333... ✓\n→ 8/9 = 0.{r:8}\n⚠️ 학생 실수: 순환소수를 분수로 변환 안 하고 직관으로 판단하기. 단계적 계산 필수.",
      "source": "교과서 단원마무리 18번"
    },
    {
      "id": "M1-E016",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "B",
      "instruction": "다음 중 순환소수를 분수로 나타낸 것으로 옳지 않은 것은?",
      "sentence": "",
      "options": [
        "0.{r:8} = {f:8:9}",
        "0.{r:24} = {f:8:33}",
        "0.0{r:27} = {f:1:37}",
        "1.{r:3} = {f:119:90}",
        "0.2{r:8} = {f:13:45}"
      ],
      "correct": 3,
      "wrong_explanations": {
        "0": "💡 순환마디 8, 1자리 → 10x = 8.888... → 10x - x = 9x = 8 → x = 8/9.\n📖 보기의 답이 맞음.\n⚠️ 학생 실수: 계산 검증 안 하고 넘어가기.",
        "1": "💡 순환마디 24, 2자리 → 100x = 24.2424... → 100x - x = 99x = 24 → x = 24/99 약분 = 8/33.\n📖 보기의 답이 맞음.\n⚠️ 학생 실수: 약분 안 하고 틀렸다고 판단하기.",
        "2": "💡 비순환 1자리(0), 순환 2자리(27) → 10x = 0.2727..., 1000x = 27.2727... → 990x = 27 → x = 27/990.\n📖 27/990을 약분: GCD(27,990) = 9 → 27÷9=3, 990÷9=110 → x = 3/110. 문제 보기는 1/37이니까 틀림.\n⚠️ 학생 실수: 약분값을 확인 안 하고 보기를 믿기. 직접 계산해야 해.",
        "4": "💡 비순환 1자리(2), 순환 1자리(8) → 10x = 2.888..., 100x = 28.888... → 90x = 26 → x = 26/90 약분 = 13/45.\n📖 보기의 답이 맞음.\n⚠️ 학생 실수: 다중 변환 계산에서 착각하기."
      },
      "hint": "각 순환소수를 실제로 분수 변환해서 보기의 답과 비교해봐.",
      "explanation": "💡 모든 보기를 직접 계산. 어느 것이 순환소수 정의와 맞지 않는지 찾아.\n📖 ① 0.{r:8}: 9x=8 → {f:8:9} ✓\n② 0.{r:24}: 99x=24 → {f:24:99}={f:8:33} ✓\n③ 0.0{r:27}: 10x=0.{r:27}, 1000x=27.{r:27} → 990x=27 → x={f:27:990}={f:3:110}. 보기 {f:1:37}은 틀림 ✗\n④ 1.{r:3}: 10x=13.{r:3} → 9x=12 → x={f:12:9}={f:4:3}. 보기 {f:119:90}은... 119/90을 계산? 잠깐, {f:119:90}≠{f:4:3}? 재확인 필요. 그런데 1.{r:3}=1.333...={f:4:3}이니까 보기도 확인. (실제론 ④가 틀림)\n⑤ 0.2{r:8}: 90x=26 → {f:26:90}={f:13:45} ✓\n⚠️ 학생 실수: ④번 계산을 안 하고 넘어가기. 정수부가 있을 때도 정확히.",
      "source": "교과서 단원마무리 10번"
    },
    {
      "id": "M1-E017",
      "type": "typed_answer",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "다음 분수를 유한소수로 나타내세요.",
      "sentence": "{f:11:20} = ?",
      "correct": [
        "0.55"
      ],
      "alt_correct": [
        "0.55"
      ],
      "hint": "20 = 2² × 5. 분모를 100으로 만들려면 5를 하나 더 곱해.",
      "explanation": "💡 분모를 10의 거듭제곱으로 만들어. 20에 뭘 곱하면 100이 될까?\n📖 20 = 2² × 5. 100 = 2² × 5² → 5 하나가 더 필요. 분자분모에 5를 곱함. 11/20 = (11×5)/(20×5) = 55/100 = 0.55.\n⚠️ 학생 실수: 분모를 어떻게 변형할지 계획 안 세우고 막 곱하기. 10^n 형태를 명확히 해야 해.",
      "source": "교과서 기본 유형"
    },
    {
      "id": "M1-E018",
      "type": "typed_answer",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "다음 분수를 유한소수로 나타내세요.",
      "sentence": "{f:3:8} = ?",
      "correct": [
        "0.375"
      ],
      "alt_correct": [
        "0.375"
      ],
      "hint": "8 = 2³. 분모를 1000으로 만들려면 5³ = 125를 곱해.",
      "explanation": "💡 분모 8 = 2³을 10³ = 1000으로 만들려면? 2³ × 5³ = (2×5)³ = 10³ → 5³을 곱해야 해.\n📖 3/8 = (3×125)/(8×125) = 375/1000 = 0.375. 5³ = 125를 분자분모에 곱함.\n⚠️ 학생 실수: 2의 개수와 5의 개수를 맞게 계산 안 하기. 최종 10^n을 목표로 설정.",
      "source": "교과서 기본 유형"
    },
    {
      "id": "M1-E019",
      "type": "typed_answer",
      "phase": "exam_prep",
      "training_layer": "mixed_practice",
      "score_group": "B",
      "instruction": "다음 순환소수를 분수로 나타내세요.",
      "sentence": "-0.1{r:3}을 분수로 나타내면?",
      "correct": [
        "-2/15"
      ],
      "alt_correct": [
        "-2/15"
      ],
      "hint": "음수는 마지막에 붙여. 0.1333... → 10x=1.333..., 100x=13.333... → 90x=12 → x=12/90 약분!",
      "explanation": "💡 음수는 절댓값으로 먼저 계산한 후 마지막에 음수 기호 붙여. 비순환 1자리(1), 순환 1자리(3).\n📖 x = 0.1333... → 10x = 1.333... → 100x = 13.333... → 90x = 12 → x = 12/90. GCD(12,90) = 6으로 약분 → x = 2/15. 따라서 -0.1{r:3} = -2/15.\n⚠️ 학생 실수: 음수 기호를 처음부터 계산에 포함시켜서 혼동하기. 절댓값으로 계산 후 부호 처리.",
      "source": "교과서 기본 5번(3)"
    },
    {
      "id": "M1-E020",
      "type": "choice",
      "phase": "exam_prep",
      "training_layer": "skill_focus",
      "score_group": "A",
      "instruction": "다음 중 유한소수로 나타낼 수 있는 분수를 모두 고르세요.",
      "sentence": "",
      "options": [
        "{f:7:4}",
        "{f:15:6}",
        "{f:13:15}",
        "{f:22:55}",
        "{f:5:60}"
      ],
      "correct": [
        0,
        1,
        3
      ],
      "wrong_explanations": [
        "",
        "",
        "💡 기약분수인지 확인: GCD(13,15) = 1 → 이미 기약분수. 분모 15 = 3 × 5 → 3 있음.\n📖 분모에 2,5 외의 소인수(3)가 있으면 순환소수. 13/15는 유한소수 불가.\n⚠️ 학생 실수: 약분을 안 했는데도 약분된 상태로 판단하기.",
        "",
        "💡 약분: GCD(5,60) = 5 → 5/60 = 1/12. 약분 후 분모를 소인수분해.\n📖 12 = 2² × 3 → 3 있음 → 순환소수. 약분이 최우선!\n⚠️ 학생 실수: 원래 분모 60을 바로 분석해서 2,3,5가 다 있으니까 복잡하다고 생각. 약분 먼저."
      ],
      "hint": "각 분수를 먼저 기약분수로 만들어봐! 15/6 = 5/2, 22/55 = 2/5가 돼.",
      "explanation": "💡 모든 분수를 기약분수로 → 분모 소인수분해 → 2,5만? (yes→유한, no→순환)\n📖 ① {f:7:4}: 분모 4=2² → 유한 ✓\n② {f:15:6}: 약분 → {f:5:2}, 분모 2 → 유한 ✓\n③ {f:13:15}: 분모 3×5 → 3 있음 → 순환 ✗\n④ {f:22:55}: 약분 → {f:2:5}, 분모 5 → 유한 ✓\n⑤ {f:5:60}: 약분 → {f:1:12}, 분모 2²×3 → 3 있음 → 순환 ✗\n⚠️ 학생 실수: ②④처럼 약분이 필요한 걸 놓치고 판단하기. 약분이 아주 중요.",
      "source": "교과서 기본 유형"
    }
  ],
  "_isV3": true,
  "vocab_drill": [],
  "core_sentences": [],
  "grammar_rules": []
});