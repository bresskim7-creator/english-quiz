__loadLesson({
  "lesson_id": "sci3",
  "subject": "science",
  "title": "3단원: 빛과 파동",
  "subtitle": "물체를 보는 과정, 반사와 굴절, 거울과 렌즈, 빛의 합성",
  "version": "1.1",
  "build_date": "2026-03-31",
  "concept_cards": [
    {
      "id": "LC-01",
      "term": "광원과 빛의 직진",
      "definition": "광원(스스로 빛을 내는 물체)에서 나온 빛은 장애물이 없으면 일직선으로 나아가는 현상",
      "easy_explanation": "태양이나 가로등처럼 스스로 빛을 내는 것을 광원이라고 해. 광원에서 나온 빛은 막혀있지 않으면 항상 일직선으로 쭉 나아가. 이걸 빛의 직진이라고 부르고, 이 덕분에 그림자가 생기는 거야.",
      "exam_tip": "시험에서는 '광원', '직진', '장애물이 없을 때'라는 세 가지가 다 들어갈 때가 많아. 이 셋을 묶어서 이해하면 헷갈리지 않아.",
      "related_terms": [
        "광원",
        "반사",
        "굴절"
      ],
      "scope_out": true
    },
    {
      "id": "LC-02",
      "term": "빛의 반사와 반사 법칙",
      "definition": "빛이 물체의 표면에 부딪혀 방향을 바꾸는 현상. 이때 입사각과 반사각이 같다는 법칙",
      "easy_explanation": "거울에 빛을 비추면 빛이 튕겨 나가지. 그때 비친 각도와 튕겨나가는 각도가 정확히 같아. 마치 방구르를 굴릴 때 벽에 부딪힌 각도와 나오는 각도가 같은 것처럼.",
      "exam_tip": "'입사각=반사각'은 반드시 외워야 하는 법칙이야. 수치 계산 문제에도 자주 나온다.",
      "related_terms": [
        "법선",
        "입사각",
        "반사각",
        "거울"
      ],
      "visual_svg": "<svg viewBox=\"0 0 340 240\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arrowBlue\" markerWidth=\"10\" markerHeight=\"10\" refX=\"9\" refY=\"3\" orient=\"auto\" markerUnits=\"strokeWidth\"><path d=\"M0,0 L0,6 L9,3 z\" fill=\"#2563eb\"/></marker><marker id=\"arrowRed\" markerWidth=\"10\" markerHeight=\"10\" refX=\"9\" refY=\"3\" orient=\"auto\" markerUnits=\"strokeWidth\"><path d=\"M0,0 L0,6 L9,3 z\" fill=\"#dc2626\"/></marker></defs><text x=\"170\" y=\"22\" font-size=\"16\" font-weight=\"bold\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">빛의 반사 법칙</text><rect x=\"30\" y=\"140\" width=\"280\" height=\"8\" fill=\"#9ca3af\" rx=\"2\"/><line x1=\"170\" y1=\"140\" x2=\"170\" y2=\"40\" stroke=\"#6b7280\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/><line x1=\"80\" y1=\"85\" x2=\"170\" y2=\"140\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arrowBlue)\"/><line x1=\"170\" y1=\"140\" x2=\"250\" y2=\"75\" stroke=\"#dc2626\" stroke-width=\"2.5\" marker-end=\"url(#arrowRed)\"/><circle cx=\"170\" cy=\"140\" r=\"3\" fill=\"#1f2937\"/><path d=\"M150,120 Q160,110 170,105\" stroke=\"#2563eb\" stroke-width=\"1.5\" fill=\"none\"/><text x=\"135\" y=\"118\" font-size=\"13\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"500\">입사각</text><path d=\"M170,105 Q180,110 190,120\" stroke=\"#dc2626\" stroke-width=\"1.5\" fill=\"none\"/><text x=\"200\" y=\"118\" font-size=\"13\" font-family=\"sans-serif\" fill=\"#dc2626\" font-weight=\"500\">반사각</text><rect x=\"60\" y=\"170\" width=\"220\" height=\"28\" fill=\"#fffbeb\" stroke=\"#f59e0b\" stroke-width=\"1.5\" rx=\"6\"/><text x=\"170\" y=\"190\" font-size=\"14\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\">입사각 = 반사각</text></svg>",
      "scope_out": true
    },
    {
      "id": "LC-03",
      "term": "법선·입사각·반사각",
      "definition": "법선은 표면에 수직인 가상의 선. 입사각은 입사 빛과 법선이 이루는 각. 반사각은 반사 빛과 법선이 이루는 각",
      "easy_explanation": "거울 표면에 수직 방향으로 그은 선을 법선이라고 해. 그리고 들어오는 빛이 이 법선과 이루는 각도를 입사각, 나가는 빛이 이루는 각도를 반사각이라고 불러. 반사 법칙에 따르면 이 두 각도가 항상 같아.",
      "exam_tip": "각도는 항상 '법선으로부터'의 각도를 측정한다는 게 중요해. 거울 표면이 아니라 법선을 기준으로 재야 해.",
      "related_terms": [
        "빛의 반사",
        "입사각",
        "반사각"
      ],
      "visual_svg": "<svg viewBox=\"0 0 360 280\" width=\"360\" height=\"280\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.title { font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; fill: #222; text-anchor: middle; } .label { font-family: Arial, sans-serif; font-size: 11px; fill: #333; font-weight: bold; } .angle-label { font-family: Arial, sans-serif; font-size: 10px; fill: #d32f2f; font-weight: bold; } .dashed-line { stroke: #999; stroke-width: 1; stroke-dasharray: 3,2; }</style></defs><rect width=\"360\" height=\"280\" fill=\"white\"/><text x=\"180\" y=\"20\" class=\"title\">반사 법칙: 입사각 = 반사각</text><g id=\"mirror\"><line x1=\"80\" y1=\"80\" x2=\"280\" y2=\"80\" stroke=\"#333\" stroke-width=\"3\"/><rect x=\"70\" y=\"75\" width=\"220\" height=\"10\" fill=\"#c0c0c0\" opacity=\"0.4\"/></g><g id=\"normal-line\"><line x1=\"180\" y1=\"80\" x2=\"180\" y2=\"240\" class=\"dashed-line\" stroke-width=\"2\"/><text x=\"185\" y=\"100\" class=\"label\">법선</text></g><g id=\"incident-ray\"><line x1=\"80\" y1=\"120\" x2=\"180\" y2=\"80\" stroke=\"#d32f2f\" stroke-width=\"2\"/><circle cx=\"85\" cy=\"115\" r=\"2\" fill=\"#d32f2f\"/><text x=\"110\" y=\"100\" class=\"label\">입사광</text></g><g id=\"reflected-ray\"><line x1=\"180\" y1=\"80\" x2=\"280\" y2=\"120\" stroke=\"#0066cc\" stroke-width=\"2\"/><circle cx=\"275\" cy=\"115\" r=\"2\" fill=\"#0066cc\"/><text x=\"230\" y=\"100\" class=\"label\">반사광</text></g><g id=\"incident-angle\"><path d=\"M 180 120 Q 175 105 170 95\" fill=\"none\" stroke=\"#d32f2f\" stroke-width=\"1.5\" stroke-dasharray=\"2,1\"/><text x=\"155\" y=\"110\" class=\"angle-label\">θ₁</text></g><g id=\"reflected-angle\"><path d=\"M 180 120 Q 185 105 190 95\" fill=\"none\" stroke=\"#0066cc\" stroke-width=\"1.5\" stroke-dasharray=\"2,1\"/><text x=\"195\" y=\"110\" class=\"angle-label\">θ₂</text></g><g id=\"note\"><rect x=\"80\" y=\"180\" width=\"200\" height=\"45\" fill=\"#fff3e0\" stroke=\"#ffa726\" stroke-width=\"1\" rx=\"3\"/><text x=\"90\" y=\"200\" class=\"label\" fill=\"#e65100\">★ θ₁ = θ₂</text><text x=\"90\" y=\"217\" font-family=\"Arial\" font-size=\"10\" fill=\"#333\">입사각과 반사각이 항상 같다!</text></g></svg>",
      "scope_out": true
    },
    {
      "id": "LC-04",
      "term": "빛의 굴절",
      "definition": "빛이 한 물질에서 다른 물질로 진행할 때 경계면에서 빛의 진행 방향이 꺾이는 현상",
      "easy_explanation": "물속에 빨대를 넣으면 꺾여 보이지? 그게 굴절이야. 공기에서 물로 들어갈 때 빛의 속도가 느려져서 방향이 꺾이는 거야. 그래서 물속 물체가 실제보다 얕은 곳에 있는 것처럼 보여.",
      "exam_tip": "반사는 같은 물질 내에서 일어나지만, 굴절은 두 물질의 경계에서 일어난다는 차이가 있어. 입사각이 커질수록 굴절각도 커진다는 것도 자주 나와.",
      "related_terms": [
        "굴절각",
        "매질",
        "입사각"
      ],
      "visual_svg": "<svg viewBox=\"0 0 340 260\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arrowBlue2\" markerWidth=\"10\" markerHeight=\"10\" refX=\"9\" refY=\"3\" orient=\"auto\" markerUnits=\"strokeWidth\"><path d=\"M0,0 L0,6 L9,3 z\" fill=\"#2563eb\"/></marker><marker id=\"arrowOrange\" markerWidth=\"10\" markerHeight=\"10\" refX=\"9\" refY=\"3\" orient=\"auto\" markerUnits=\"strokeWidth\"><path d=\"M0,0 L0,6 L9,3 z\" fill=\"#f97316\"/></marker></defs><text x=\"170\" y=\"22\" font-size=\"16\" font-weight=\"bold\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">빛의 굴절</text><rect x=\"20\" y=\"50\" width=\"300\" height=\"65\" fill=\"#dbeafe\" rx=\"4\"/><text x=\"35\" y=\"100\" font-size=\"13\" font-family=\"sans-serif\" fill=\"#1e40af\" font-weight=\"500\">공기</text><rect x=\"20\" y=\"115\" width=\"300\" height=\"120\" fill=\"#a7f3d0\" rx=\"4\"/><text x=\"35\" y=\"160\" font-size=\"13\" font-family=\"sans-serif\" fill=\"#065f46\" font-weight=\"500\">물</text><line x1=\"20\" y1=\"115\" x2=\"320\" y2=\"115\" stroke=\"#4b5563\" stroke-width=\"2.5\"/><line x1=\"170\" y1=\"115\" x2=\"170\" y2=\"30\" stroke=\"#6b7280\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/><line x1=\"70\" y1=\"60\" x2=\"170\" y2=\"115\" stroke=\"#2563eb\" stroke-width=\"2.5\" marker-end=\"url(#arrowBlue2)\"/><line x1=\"170\" y1=\"115\" x2=\"230\" y2=\"195\" stroke=\"#f97316\" stroke-width=\"2.5\" marker-end=\"url(#arrowOrange)\"/><circle cx=\"170\" cy=\"115\" r=\"3\" fill=\"#1f2937\"/><path d=\"M150,95 Q160,85 170,75\" stroke=\"#2563eb\" stroke-width=\"1.5\" fill=\"none\"/><text x=\"130\" y=\"88\" font-size=\"13\" font-family=\"sans-serif\" fill=\"#2563eb\" font-weight=\"500\">입사각</text><path d=\"M170,75 Q180,100 190,135\" stroke=\"#f97316\" stroke-width=\"1.5\" fill=\"none\"/><text x=\"205\" y=\"130\" font-size=\"13\" font-family=\"sans-serif\" fill=\"#f97316\" font-weight=\"500\">굴절각</text><rect x=\"50\" y=\"220\" width=\"240\" height=\"28\" fill=\"#fef3c7\" stroke=\"#f59e0b\" stroke-width=\"1.5\" rx=\"6\"/><text x=\"170\" y=\"240\" font-size=\"13\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\">공기→물: 입사각 > 굴절각</text></svg>",
      "scope_out": true
    },
    {
      "id": "LC-05",
      "term": "굴절각과 매질",
      "definition": "공기에서 물로 진행할 때 입사각이 항상 굴절각보다 크다. 이는 물에서 빛의 속도가 공기보다 느리기 때문",
      "easy_explanation": "같은 빛이라도 공기를 지날 때는 빨리 가고, 물을 지날 때는 느려져. 빛이 느려지니까 방향이 더 급하게 꺾여. 그래서 공기에서 물로 들어갈 때는 항상 입사각이 굴절각보다 커.",
      "exam_tip": "공기 → 물일 때 꺾이는 정도를 정확히 알아두면 좋아. 입사각 > 굴절각이 핵심 공식이나 다름없어.",
      "related_terms": [
        "굴절",
        "매질",
        "입사각"
      ],
      "scope_out": true
    },
    {
      "id": "LC-06",
      "term": "평면거울의 상",
      "definition": "평면거울에 생기는 상은 허상이며, 크기는 물체와 같고, 거울로부터의 거리도 물체와 같다",
      "easy_explanation": "욕실 거울에 비친 너의 모습을 생각해봐. 거울에서 30cm 떨어진 곳에 있으면 거울에 비친 상도 거울 뒤 30cm에 있는 것처럼 보여. 크기도 정확히 같고. 하지만 거울 뒤에 실제로 상이 있는 건 아니야. 그걸 허상이라고 불러.",
      "exam_tip": "평면거울의 상의 특징은 '허상(실제가 아님)', '크기 같음', '거리 같음', '좌우반전'의 네 가지야. 이 넷을 모두 외워야 해.",
      "related_terms": [
        "거울",
        "허상",
        "실상"
      ],
      "visual_svg": "<svg viewBox=\"0 0 340 240\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"170\" y=\"22\" font-size=\"16\" font-weight=\"bold\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#1f2937\">평면거울의 상</text><line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"200\" stroke=\"#4b5563\" stroke-width=\"5\"/><line x1=\"175\" y1=\"50\" x2=\"175\" y2=\"190\" stroke=\"#9ca3af\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/><line x1=\"165\" y1=\"50\" x2=\"165\" y2=\"190\" stroke=\"#9ca3af\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/><g><circle cx=\"85\" cy=\"110\" r=\"12\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\"/><text x=\"85\" y=\"150\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#2563eb\" font-weight=\"500\">물체</text><line x1=\"85\" y1=\"50\" x2=\"85\" y2=\"55\" stroke=\"#7c3aed\" stroke-width=\"2\"/><line x1=\"80\" y1=\"55\" x2=\"90\" y2=\"55\" stroke=\"#7c3aed\" stroke-width=\"2\"/><text x=\"75\" y=\"65\" font-size=\"12\" font-family=\"sans-serif\" fill=\"#7c3aed\" font-weight=\"bold\">d</text><line x1=\"85\" y1=\"50\" x2=\"170\" y2=\"50\" stroke=\"#7c3aed\" stroke-width=\"1\" stroke-dasharray=\"3,3\"/></g><g><circle cx=\"255\" cy=\"110\" r=\"12\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-dasharray=\"3,3\"/><text x=\"255\" y=\"150\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#dc2626\" font-weight=\"500\">상(허상)</text><line x1=\"255\" y1=\"50\" x2=\"255\" y2=\"55\" stroke=\"#7c3aed\" stroke-width=\"2\"/><line x1=\"250\" y1=\"55\" x2=\"260\" y2=\"55\" stroke=\"#7c3aed\" stroke-width=\"2\"/><text x=\"265\" y=\"65\" font-size=\"12\" font-family=\"sans-serif\" fill=\"#7c3aed\" font-weight=\"bold\">d</text><line x1=\"170\" y1=\"50\" x2=\"255\" y2=\"50\" stroke=\"#7c3aed\" stroke-width=\"1\" stroke-dasharray=\"3,3\"/></g><line x1=\"85\" y1=\"110\" x2=\"170\" y2=\"110\" stroke=\"#6b7280\" stroke-width=\"1\" stroke-dasharray=\"3,3\" opacity=\"0.6\"/><line x1=\"170\" y1=\"110\" x2=\"255\" y2=\"110\" stroke=\"#6b7280\" stroke-width=\"1\" stroke-dasharray=\"3,3\" opacity=\"0.6\"/><rect x=\"40\" y=\"175\" width=\"260\" height=\"48\" fill=\"#f0fdf4\" stroke=\"#22c55e\" stroke-width=\"1.5\" rx=\"6\"/><text x=\"170\" y=\"195\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#166534\" font-weight=\"bold\">크기 같음 | 거리 같음</text><text x=\"170\" y=\"212\" font-size=\"12\" font-family=\"sans-serif\" text-anchor=\"middle\" fill=\"#166534\" font-weight=\"bold\">좌우 반전 | 허상</text></svg>",
      "scope_out": true
    },
    {
      "id": "LC-07",
      "term": "오목거울",
      "definition": "안쪽이 오목하게 들어간 거울. 거리에 따라 크고 바로 선 허상 또는 크고 거꾸로 선 실상을 만든다",
      "easy_explanation": "화장할 때 쓰는 확대 거울이 오목거울이야. 가까이 대면 크고 바로 선 상이 보여. 멀리 대면 어느 순간부터는 거꾸로 뒤집힌 상이 보여. 그리고 멀어질수록 상이 작아져.",
      "exam_tip": "오목거울의 핵심은 거리에 따라 상이 바뀐다는 거야. 가까울 때(허상) vs 멀 때(실상)를 비교하는 문제가 자주 나와.",
      "related_terms": [
        "거울",
        "렌즈",
        "실상",
        "허상"
      ],
      "scope_out": true
    },
    {
      "id": "LC-08",
      "term": "볼록거울",
      "definition": "바깥쪽이 볼록하게 튀어나온 거울. 거리와 관계없이 항상 작고 바로 선 허상을 만든다",
      "easy_explanation": "자동차 측면거울이 볼록거울이야. 이 거울에 대면 물체가 항상 작게 보여. 아무리 가까이 대도 작고, 멀리 대도 작아. 그리고 항상 바로 서 있는 상이 보여.",
      "exam_tip": "볼록거울은 '항상' 작고 바로 선 상만 만든다는 게 가장 중요해. 거리에 따라 변하지 않는다는 게 특징이야.",
      "related_terms": [
        "거울",
        "오목거울",
        "허상"
      ],
      "scope_out": true
    },
    {
      "id": "LC-09",
      "term": "볼록렌즈",
      "definition": "가운데 부분이 가장자리보다 두꺼운 렌즈. 거리에 따라 크고 바로 선 허상 또는 크고 거꾸로 선 실상을 만든다",
      "easy_explanation": "돋보기가 볼록렌즈야. 뭔가를 가까이 갖다 대면 크고 바로 보여. 멀리 갖다 대면 어느 순간부터는 거꾸로 뒤집힌 상이 보여. 그게 바로 영사기 원리야.",
      "exam_tip": "볼록렌즈는 오목거울과 똑같이 동작한다는 게 시험 팁이야. 거리에 따라 상이 변하고, 멀 때는 실상을 만들어.",
      "related_terms": [
        "렌즈",
        "오목렌즈",
        "실상",
        "허상"
      ],
      "scope_out": true
    },
    {
      "id": "LC-10",
      "term": "오목렌즈",
      "definition": "가운데 부분이 가장자리보다 얇은 렌즈. 거리와 관계없이 항상 작고 바로 선 허상을 만든다",
      "easy_explanation": "근시용 안경 렌즈가 오목렌즈야. 이 렌즈로 뭘 봐도 항상 작게 보여. 멀리 있는 물체를 일반 안경 없이 봤을 때처럼 작게 느껴져. 그래서 멀리 봐야 하는 근시인이 오목렌즈를 쓰면 안경 뒤쪽이 더 작게 보이는 거야.",
      "exam_tip": "오목렌즈는 '항상' 작고 바로 선 상만 만든다는 게 가장 중요해. 볼록거울과 같은 특징이야.",
      "related_terms": [
        "렌즈",
        "볼록렌즈",
        "허상"
      ],
      "scope_out": true
    },
    {
      "id": "LC-11",
      "term": "거울과 렌즈 비교 정리",
      "definition": "오목거울과 볼록렌즈는 비슷한 상을 만들고, 볼록거울과 오목렌즈는 비슷한 상을 만든다",
      "easy_explanation": "거울과 렌즈는 완전히 다르지만 만드는 상의 특징은 비슷해. 오목거울(화장 거울) ≈ 볼록렌즈(돋보기), 그리고 볼록거울(자동차 거울) ≈ 오목렌즈(근시 안경). 이 비교를 외워두면 둘 다 한번에 기억할 수 있어.",
      "exam_tip": "시험에서는 '어떤 거울과 어떤 렌즈가 같은 상을 만드나?'라는 비교 문제가 자주 나와. 이 네 가지 조합을 확실히 이해해야 해.",
      "related_terms": [
        "오목거울",
        "볼록거울",
        "볼록렌즈",
        "오목렌즈"
      ],
      "visual_svg": "<svg viewBox=\"0 0 380 280\" width=\"380\" height=\"280\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.title { font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; fill: #222; text-anchor: middle; } .group-label { font-family: Arial, sans-serif; font-size: 11px; font-weight: bold; fill: #fff; text-anchor: middle; } .box-label { font-family: Arial, sans-serif; font-size: 9px; fill: #333; text-anchor: middle; } .result { font-family: Arial, sans-serif; font-size: 10px; fill: #333; text-anchor: middle; }</style></defs><rect width=\"380\" height=\"280\" fill=\"white\"/><text x=\"190\" y=\"20\" class=\"title\">거울과 렌즈의 상 비교</text><g id=\"group1\"><rect x=\"30\" y=\"50\" width=\"150\" height=\"200\" fill=\"#e3f2fd\" stroke=\"#1976d2\" stroke-width=\"2\" rx=\"5\"/><text x=\"105\" y=\"70\" class=\"group-label\" fill=\"#1976d2\" style=\"font-size:12px\">같은 상을 만든다</text><rect x=\"45\" y=\"90\" width=\"60\" height=\"50\" fill=\"#1976d2\" rx=\"3\"/><text x=\"75\" y=\"110\" class=\"group-label\">오목거울</text><text x=\"75\" y=\"135\" class=\"result\">(화장거울)</text><rect x=\"120\" y=\"90\" width=\"60\" height=\"50\" fill=\"#1976d2\" rx=\"3\"/><text x=\"150\" y=\"110\" class=\"group-label\">볼록렌즈</text><text x=\"150\" y=\"135\" class=\"result\">(돋보기)</text><path d=\"M 105 145 L 105 165\" stroke=\"#1976d2\" stroke-width=\"2\" marker-end=\"url(#arrow-blue)\"/><text x=\"105\" y=\"185\" class=\"result\" style=\"font-weight:bold\">거리에 따라</text><text x=\"105\" y=\"198\" class=\"result\" style=\"font-weight:bold\">상이 변함!</text></g><g id=\"group2\"><rect x=\"200\" y=\"50\" width=\"150\" height=\"200\" fill=\"#f3e5f5\" stroke=\"#7b1fa2\" stroke-width=\"2\" rx=\"5\"/><text x=\"275\" y=\"70\" class=\"group-label\" fill=\"#7b1fa2\" style=\"font-size:12px\">같은 상을 만든다</text><rect x=\"215\" y=\"90\" width=\"60\" height=\"50\" fill=\"#7b1fa2\" rx=\"3\"/><text x=\"245\" y=\"110\" class=\"group-label\">볼록거울</text><text x=\"245\" y=\"135\" class=\"result\">(자동차거울)</text><rect x=\"290\" y=\"90\" width=\"60\" height=\"50\" fill=\"#7b1fa2\" rx=\"3\"/><text x=\"320\" y=\"110\" class=\"group-label\">오목렌즈</text><text x=\"320\" y=\"135\" class=\"result\">(근시안경)</text><path d=\"M 275 145 L 275 165\" stroke=\"#7b1fa2\" stroke-width=\"2\" marker-end=\"url(#arrow-purple)\"/><text x=\"275\" y=\"185\" class=\"result\" style=\"font-weight:bold\">항상 같은 상</text><text x=\"275\" y=\"198\" class=\"result\" style=\"font-weight:bold\">(작고 바로)</text></g><defs><marker id=\"arrow-blue\" markerWidth=\"10\" markerHeight=\"10\" refX=\"5\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0, 10 3, 0 6\" fill=\"#1976d2\"/></marker><marker id=\"arrow-purple\" markerWidth=\"10\" markerHeight=\"10\" refX=\"5\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0, 10 3, 0 6\" fill=\"#7b1fa2\"/></marker></defs></svg>",
      "scope_out": true
    },
    {
      "id": "LC-12",
      "term": "실상과 허상",
      "definition": "실상은 빛이 실제로 모여서 생기는 상(거꾸로, 스크린에 비침). 허상은 빛을 연장했을 때 만나는 상(바로, 스크린에 안 비침)",
      "easy_explanation": "영사기로 영화를 본다고 해봐. 스크린에 비치는 상이 바뀌어 있지? 그게 실상이야. 거울에 비친 너의 모습처럼 거울 뒤쪽에 있는 것처럼 보이는 상이 허상이야. 허상은 눈으로는 보이지만 스크린에 비출 수 없어.",
      "exam_tip": "실상(실제 → 거꾸로 → 스크린O) vs 허상(가상 → 바로 → 스크린X). 이 세 가지 차이를 모두 이해해야 해.",
      "related_terms": [
        "거울",
        "렌즈",
        "오목거울",
        "볼록렌즈"
      ],
      "scope_out": true
    },
    {
      "id": "LC-13",
      "term": "빛의 삼원색",
      "definition": "빨간색(R), 초록색(G), 파란색(B) 빛을 섞으면 모든 색을 만들 수 있으며, 세 색을 모두 섞으면 흰색이 된다",
      "easy_explanation": "텔레비전이나 컴퓨터 화면을 현미경으로 보면 아주 작은 빨간색, 초록색, 파란색 점들이 보여. 이 세 색을 섞는 밝기를 조절해서 모든 색을 만드는 거야. 세 색을 모두 최대로 밝히면 하얀색이 되어.",
      "exam_tip": "삼원색은 '빛의 삼원색'이라고 반드시 명시해야 해. 물감의 삼원색(빨강·노랑·파랑)과 혼동하면 안 돼.",
      "related_terms": [
        "빛의 합성",
        "물체의 색"
      ],
      "visual_svg": "<svg viewBox=\"0 0 340 260\" width=\"340\" height=\"260\" xmlns=\"http://www.w3.org/2000/svg\"><defs><style>.title { font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; fill: #222; text-anchor: middle; } .color-label { font-family: Arial, sans-serif; font-size: 10px; font-weight: bold; fill: #fff; text-anchor: middle; } .result-label { font-family: Arial, sans-serif; font-size: 11px; fill: #333; text-anchor: middle; font-weight: bold; }</style></defs><rect width=\"340\" height=\"260\" fill=\"white\"/><text x=\"170\" y=\"20\" class=\"title\">빛의 삼원색 혼합</text><g id=\"circles\"><circle cx=\"90\" cy=\"120\" r=\"50\" fill=\"#ff0000\" opacity=\"0.6\"/><text x=\"90\" y=\"125\" class=\"color-label\">빨강</text><circle cx=\"170\" cy=\"120\" r=\"50\" fill=\"#00ff00\" opacity=\"0.6\"/><text x=\"170\" y=\"125\" class=\"color-label\">초록</text><circle cx=\"250\" cy=\"120\" r=\"50\" fill=\"#0000ff\" opacity=\"0.6\"/><text x=\"250\" y=\"125\" class=\"color-label\">파랑</text></g><g id=\"overlaps\"><circle cx=\"130\" cy=\"80\" r=\"30\" fill=\"#ffff00\" opacity=\"0.7\"/><text x=\"130\" y=\"85\" class=\"color-label\" style=\"font-size:9px\">노랑</text><circle cx=\"210\" cy=\"80\" r=\"30\" fill=\"#ff00ff\" opacity=\"0.7\"/><text x=\"210\" y=\"85\" class=\"color-label\" style=\"font-size:9px\">자홍</text><circle cx=\"170\" cy=\"60\" r=\"30\" fill=\"#00ffff\" opacity=\"0.7\"/><text x=\"170\" y=\"65\" class=\"color-label\" style=\"font-size:9px\">청록</text><circle cx=\"170\" cy=\"110\" r=\"35\" fill=\"#ffffff\" stroke=\"#999\" stroke-width=\"1\" opacity=\"0.9\"/><text x=\"170\" y=\"115\" class=\"color-label\" fill=\"#333\">흰색</text></g><g id=\"examples\"><rect x=\"40\" y=\"190\" width=\"260\" height=\"50\" fill=\"#fff3e0\" stroke=\"#ff9800\" stroke-width=\"1\" rx=\"3\"/><text x=\"170\" y=\"210\" class=\"result-label\" fill=\"#e65100\">★ 모니터, TV 화면은 RGB 화소로 이루어짐</text><text x=\"170\" y=\"228\" font-family=\"Arial\" font-size=\"9\" fill=\"#333\" text-anchor=\"middle\">이 세 색의 밝기를 조절해서 원하는 색을 표현한다</text></g></svg>",
      "scope_out": true
    },
    {
      "id": "LC-14",
      "term": "물체의 색",
      "definition": "물체가 반사하는 빛의 색. 백색광(모든 색 포함)에서 물체는 특정 색만 반사하고 나머지는 흡수한다",
      "easy_explanation": "딸기가 빨간색으로 보이는 건 딸기가 빨간 빛만 반사하기 때문이야. 다른 색 빛은 모두 흡수해. 딸기 위의 초록색 꼭지는 초록 빛만 반사하는 거고. 검은색 물체는 모든 색을 흡수해서 빛이 거의 반사되지 않아.",
      "exam_tip": "물체의 색은 '반사하는 빛의 색'이라는 정의가 가장 중요해. 조명의 색이 바뀌면 같은 물체도 다르게 보일 수 있어.",
      "related_terms": [
        "빛의 반사",
        "흡수",
        "백색광"
      ],
      "scope_out": true
    },
    {
      "id": "LC-15",
      "term": "빛의 합성과 물감의 혼합 차이",
      "definition": "빛을 섞으면 밝아지고(가산 혼합), 물감을 섞으면 어두워진다(감산 혼합). 빛은 RGB가 삼원색, 물감은 CMY(또는 RYB)가 삼원색",
      "easy_explanation": "손전등 세 개에 빨강, 초록, 파랑 셀로판지를 붙여서 한 곳에 비추면 흰색이 되지. 그런데 빨강, 노랑, 파랑 물감을 섞으면 갈색(어두운색)이 되어. 이 차이가 핵심이야. 빛은 섞을수록 밝아지고, 물감은 섞을수록 어두워져.",
      "exam_tip": "합성은 '빛'이고 혼합은 '물감'이라는 구분이 중요해. 시험에서 헷갈리게 출제하니까 주의해.",
      "related_terms": [
        "빛의 합성",
        "빛의 삼원색",
        "물감의 삼원색"
      ],
      "scope_out": true
    },
    {
      "id": "PW-01",
      "term": "파동과 매질",
      "definition": "한곳에서 생긴 진동이 주위로 퍼져 나가는 현상이 파동이다. 파동을 전달하는 물질을 매질이라 하며, 매질은 제자리에서 진동할 뿐 파동과 함께 이동하지 않는다.",
      "easy_explanation": "잔잔한 물에 돌을 던지면 물결이 둥글게 퍼지지? 그게 파동이야. 이때 물(매질)은 제자리에서 위아래로만 출렁일 뿐, 물 자체가 가장자리로 흘러가는 게 아니야. 물 위 나뭇잎이 제자리에서 까딱까딱하는 것만 봐도 알 수 있어. 파동이 전달하는 건 물질이 아니라 에너지와 정보야. 물결파의 매질은 물, 소리는 공기, 지진파는 땅이야.",
      "exam_tip": "함정: '매질이 파동과 함께 이동한다'는 틀려 — 매질은 제자리 진동만! 전달되는 건 에너지·정보. 빛은 매질 없이도 전달돼. 전류(전기 현상)와 대류(물질이 직접 이동)는 파동이 아니야. 부력으로 뜨는 것도 파동과 무관.",
      "related_terms": [
        "매질",
        "물결파",
        "에너지",
        "진동"
      ]
    },
    {
      "id": "PW-02",
      "term": "파동의 요소",
      "definition": "마루=파동의 가장 높은 곳, 골=가장 낮은 곳. 파장=이웃한 마루에서 마루까지(또는 골에서 골까지)의 거리. 진폭=진동 중심에서 마루(또는 골)까지의 거리.",
      "easy_explanation": "파동 그래프에서 봉우리가 마루, 골짜기가 골이야. 파장은 같은 위치끼리의 거리 — 마루에서 다음 마루까지(또는 골에서 다음 골까지). 진폭은 가운데(진동 중심)에서 마루 꼭대기까지의 높이야.",
      "exam_tip": "함정: 파장을 '마루에서 골까지'로 착각 금지(그건 파장의 절반). 진폭은 마루~마루가 아니라 중심~마루!",
      "related_terms": [
        "마루",
        "골",
        "파장",
        "진폭"
      ],
      "visual_img": "img/sci_wave_elements.png"
    },
    {
      "id": "PW-03",
      "term": "진동수와 주기",
      "definition": "진동수=매질이 1초 동안 진동하는 횟수, 단위 Hz(헤르츠). 주기=매질이 한 번 진동하는 데 걸리는 시간.",
      "easy_explanation": "1초에 두 번 출렁이면 진동수가 2 Hz야. 주기는 한 번 출렁이는 데 걸리는 시간이라서, 1초에 2번이면 주기는 0.5초야. 진동수가 클수록 빠르게 떨리고 높은 소리가 나.",
      "exam_tip": "진동수 단위는 Hz. 진동수가 클수록 파장은 짧고 소리는 높아져. (주기 = 1 ÷ 진동수)",
      "related_terms": [
        "진동수",
        "주기",
        "Hz"
      ]
    },
    {
      "id": "PW-04",
      "term": "소리의 발생과 전달",
      "definition": "소리(음파)는 물체의 진동으로 발생하며, 기체·액체·고체 같은 매질을 통해 전달된다. 매질이 없는 진공에서는 전달되지 않는다.",
      "easy_explanation": "스피커 앞에 손을 대면 떨림이 느껴지지? 물체가 떨리면 주변 공기가 떨리고, 그 떨림이 귀까지 와서 소리로 들려. 공기뿐 아니라 물·금속 같은 액체·고체로도 전달돼. 하지만 공기가 없는 우주(진공)에서는 소리가 전달되지 않아.",
      "exam_tip": "함정: '진공에서도 소리가 들린다'는 틀려. 소리는 매질이 있어야 전달돼(빛은 매질 없이 전달).",
      "related_terms": [
        "음파",
        "진동",
        "매질",
        "진공"
      ]
    },
    {
      "id": "PW-05",
      "term": "소리의 3요소",
      "definition": "소리의 세기(크기)는 진폭, 높낮이는 진동수, 음색(맵시)은 파형에 따라 결정된다.",
      "easy_explanation": "큰 소리/작은 소리는 진폭(얼마나 크게 흔들리나)으로 정해져. 높은 소리/낮은 소리는 진동수(얼마나 빠르게 흔들리나)로 정해지고. 같은 '도' 음을 피아노와 바이올린이 내도 다르게 들리는 건 파형(소리의 모양)이 달라서야 — 그게 음색이야.",
      "exam_tip": "세기=진폭, 높낮이=진동수, 음색=파형. 함정: 높낮이를 진폭으로, 세기를 진동수로 바꿔치기. 진폭·진동수가 같아도 파형 다르면 음색이 달라.",
      "related_terms": [
        "진폭",
        "진동수",
        "파형",
        "음색"
      ],
      "visual_img": "img/sci_sound_three.png"
    },
    {
      "id": "PW-06",
      "term": "파동의 이용",
      "definition": "파동은 에너지를 전달하기도 하고(전자레인지, 초음파 치료, 파력 발전), 정보를 전달하기도 한다(교통카드, 초음파 검사, 방송).",
      "easy_explanation": "파동은 두 가지로 쓰여. 에너지를 전달하는 쪽은 전자레인지로 음식을 데우거나 초음파로 결석을 깨는 것. 정보를 전달하는 쪽은 교통카드를 찍거나 초음파로 배 속 아기를 보는 것, 라디오·TV 방송 같은 거야.",
      "exam_tip": "에너지 전달(데우기·치료·발전) vs 정보 전달(카드·검사·방송) 구분 문제가 자주 나와.",
      "related_terms": [
        "에너지",
        "정보",
        "초음파"
      ]
    }
  ],
  "exam_prep": [
    {
      "id": "L3-E001",
      "type": "choice",
      "instruction": "다음 중 광원을 바르게 설명한 것을 고르시오.",
      "question": "광원의 정의",
      "options": [
        "달은 스스로 빛을 내는 광원이다",
        "가로등은 광원이지만 태양은 광원이 아니다",
        "스스로 빛을 내는 물체를 광원이라고 한다",
        "모든 물체는 광원이다"
      ],
      "correct": 2,
      "score_group": "A",
      "linked_concept": [
        "LC-01"
      ],
      "explanation": "💡 밤에 보이는 물체 중에서 실제로 자기가 빛을 내는 것과 다른 물체의 빛을 반사하는 것을 구분해봐.\n📖 광원은 스스로 빛을 내는 물체를 뜻해. 태양, 불, 전구, 가로등처럼 에너지를 써서 빛을 만드는 것들이야.\n🔬 달은 태양빛을 반사할 뿐 자체적으로 빛을 내지 않으므로 광원이 아니다.",
      "wrong_explanations": {
        "0": "💡 밤에 달이 보이니까 광원일 것 같지? 하지만 달은 태양빛을 반사할 뿐이야.\n📖 달은 스스로 빛을 내지 않으므로 광원이 아니야. 광원의 정의를 다시 읽어봐.\n🔬 달은 이차 광원(반사하는 물체)이고, 태양은 일차 광원(스스로 빛을 냄)이다.",
        "1": "💡 가로등은 전기로 빛을 내니까 광원이 맞아. 그런데 태양도 스스로 빛을 내잖아?\n📖 태양은 핵융합으로 빛을 내는 대표적인 광원이야. 가로등만 광원이라고 하면 틀려.\n🔬 태양, 전구, 가로등 모두 스스로 빛을 내므로 전부 광원이다.",
        "3": "💡 모든 물체가 광원이면 어두운 곳에서도 다 빛나야 하잖아. 그렇지 않지?\n📖 광원은 '스스로 빛을 내는' 물체만 해당해. 책상이나 벽은 빛을 반사할 뿐이야.\n🔬 대부분의 물체는 다른 광원의 빛을 반사하는 것이지, 스스로 빛을 내지 않는다."
      },
      "hint": "광원은 스스로 빛을 내야 해. 달은 빛을 내는 걸까, 반사하는 걸까?",
      "scope_out": true
    },
    {
      "id": "L3-E002",
      "type": "choice",
      "instruction": "빛이 거울에 반사할 때 입사각과 반사각의 관계를 설명한 것으로 옳은 것을 고르시오.",
      "question": "반사 법칙",
      "options": [
        "입사각이 반사각보다 항상 크다",
        "입사각과 반사각은 항상 같다",
        "거울의 밝기에 따라 반사각이 달라진다",
        "반사각이 입사각보다 항상 크다"
      ],
      "correct": 1,
      "score_group": "A",
      "linked_concept": [
        "LC-02"
      ],
      "explanation": "💡 공을 벽에 던지면 들어올 때의 각도와 튀어나올 때의 각도가 같지?\n📖 빛의 반사 법칙은 입사각 = 반사각이야. 이건 거울의 각도나 빛의 밝기와 관계없이 항상 성립해.\n🔬 이것은 거울의 반사 특성이므로 항상 일정하며, 수학적으로도 증명되는 법칙이다.",
      "wrong_explanations": {
        "0": "💡 입사각과 반사각이 다르면 공이 튀어나올 때와 들어올 때가 다르다는 뜻이야.\n📖 반사 법칙은 두 각도가 같다고 했어. 다시 확인해봐.\n🔬 만약 입사각 > 반사각이면, 같은 각도의 빛을 반대로 비춰도 달라진다는 모순이 생긴다.",
        "2": "💡 거울의 밝기는 반사각과 아무 관계가 없어!\n📖 반사 법칙은 입사각 = 반사각이야. 거울이 밝든 어둡든 각도는 변하지 않아.\n🔬 반사각은 오직 입사각에 의해서만 결정된다. 밝기, 색, 재질은 반사각에 영향을 주지 않아.",
        "3": "💡 반사각이 입사각보다 항상 크다면, 빛이 반사될 때마다 각도가 커진다는 뜻이야.\n📖 반사 법칭은 두 각이 같다고 했어. 크기 관계가 아니라 같다는 거야.\n🔬 실제 실험에서도 입사각과 반사각은 항상 동일하게 측정된다."
      },
      "hint": "공이 벽에 부딪혀 튀어나올 때를 생각해봐. 들어가는 각도와 나오는 각도가 같을까, 다를까?",
      "scope_out": true
    },
    {
      "id": "L3-E003",
      "type": "choice",
      "instruction": "다음 중 굴절을 바르게 설명한 것을 고르시오.",
      "question": "빛의 굴절",
      "options": [
        "굴절은 같은 물질 내에서만 일어난다",
        "공기에서 물로 들어갈 때 빛의 방향이 꺾인다",
        "굴절각은 항상 입사각보다 크다",
        "굴절은 반사와 같은 현상이다"
      ],
      "correct": 1,
      "score_group": "A",
      "linked_concept": [
        "LC-04"
      ],
      "explanation": "💡 물속에 빨대가 꺾여 보이지? 그게 굴절이야. 공기라는 다른 물질로 들어갈 때 빛의 방향이 꺾이는 거야.\n📖 굴절은 두 물질의 경계에서 일어나고, 빛이 속도를 바꾸면서 방향도 꺾여.\n🔬 공기(빛이 빠름) → 물(빛이 느림)일 때 빛의 경로가 법선 쪽으로 꺾인다.",
      "wrong_explanations": {
        "0": "💡 굴절은 오직 다른 물질의 경계에서만 일어나. 같은 물질 내에서는 굴절이 아니라 직진이야.\n📖 굴절의 정의를 다시 읽어봐. '한 물질에서 다른 물질로'가 핵심이야.\n🔬 같은 물질 내에서의 빛의 변화는 다른 현상들로 설명된다.",
        "2": "💡 굴절각이 항상 입사각보다 클까? 공기에서 물로 가면 오히려 굴절각이 작아져.\n📖 굴절각의 크기는 두 물질의 종류에 따라 달라져. '항상'이라는 말이 들어가면 의심해봐.\n🔬 공기→물일 때는 굴절각 < 입사각이고, 물→공기일 때는 굴절각 > 입사각이다.",
        "3": "💡 굴절과 반사는 완전히 다른 현상이야. 반사는 빛이 튕겨 나가는 거고, 굴절은 꺾이면서 통과하는 거야.\n📖 반사: 빛이 같은 물질로 되돌아감. 굴절: 빛이 다른 물질로 들어가면서 방향이 꺾임.\n🔬 하나의 경계면에서 반사와 굴절이 동시에 일어날 수 있지만, 서로 다른 현상이다."
      },
      "hint": "굴절은 어디에서 일어날까? 같은 물질 내? 아니면 두 물질이 만나는 곳?",
      "scope_out": true
    },
    {
      "id": "L3-E004",
      "type": "choice",
      "instruction": "공기에서 물로 진행하는 빛에 대한 설명으로 옳은 것을 고르시오.",
      "question": "공기-물 경계에서의 굴절",
      "options": [
        "입사각이 굴절각과 같다",
        "입사각이 굴절각보다 항상 크다",
        "굴절각이 입사각보다 항상 크다",
        "입사각과 굴절각의 크기는 물의 온도에 따라 달라진다"
      ],
      "correct": 1,
      "score_group": "A",
      "linked_concept": [
        "LC-05"
      ],
      "explanation": "💡 물이 공기보다 더 촘촘해서 빛이 느려져. 빛이 느려지니까 법선 쪽으로 꺾이고, 입사각 > 굴절각이야.\n📖 공기 → 물: 빛이 느려지므로 입사각이 굴절각보다 항상 커. 이건 물리 법칙이야.\n🔬 굴절의 정도는 두 물질의 굴절률 차이로 결정되고, 온도 같은 외부 조건에는 거의 영향받지 않아.",
      "wrong_explanations": {
        "0": "💡 입사각과 굴절각이 같으면 빛이 안 꺾이는 거잖아. 근데 물에 넣은 젓가락이 꺾여 보이잖아?\n📖 공기→물은 빛이 느려지면서 법선 쪽으로 꺾여. 그래서 입사각 > 굴절각이야. 같을 수가 없어.\n🔬 입사각=굴절각이 되려면 같은 물질 안에서 직진할 때뿐이야.",
        "2": "💡 거꾸로 생각했어! 굴절각이 더 크려면 빛이 빨라져야 하는데, 물은 공기보다 느리잖아.\n📖 공기→물: 빛이 느려짐 → 법선 쪽으로 꺾임 → 굴절각 < 입사각. 반대로 물→공기일 때 굴절각이 더 커져.\n🔬 \"느려지면 법선 쪽으로\" 이것만 외우면 방향 절대 안 헷갈려.",
        "3": "💡 온도에 따라 달라진다? 그건 아니야. 굴절은 두 물질의 종류로 결정돼.\n📖 굴절각은 두 물질의 굴절률 차이로 정해져. 물의 온도가 살짝 바뀌어도 굴절률은 거의 변하지 않아.\n🔬 시험에서 \"온도\", \"습도\" 같은 조건을 넣어서 헷갈리게 하는 함정 선택지야. 속지 마."
      },
      "hint": "물에서 빛이 공기보다 빠를까, 느릴까? 느리면 꺾이는 정도가 클까, 작을까?",
      "scope_out": true
    },
    {
      "id": "L3-E005",
      "type": "choice",
      "instruction": "평면거울에서 생기는 상에 대한 설명으로 옳은 것을 고르시오.",
      "question": "평면거울의 상의 특징",
      "options": [
        "상의 크기는 물체보다 작다",
        "상은 거울 앞쪽에 생긴다",
        "상에서 거울까지의 거리는 물체에서 거울까지의 거리와 같다",
        "상은 물체보다 선명하게 보인다"
      ],
      "correct": 2,
      "score_group": "A",
      "linked_concept": [
        "LC-06"
      ],
      "explanation": "💡 거울 앞에 서서 봐. 30cm 떨어져 있으면 거울 속 너도 거울 뒤 30cm에 있는 것처럼 보여.\n📖 평면거울의 상: 크기 같음, 거리 같음, 좌우반전, 거울 뒤에 생기는 허상.\n🔬 \"상에서 거울까지 거리 = 물체에서 거울까지 거리\" 이게 시험에 가장 자주 나오는 포인트야.",
      "wrong_explanations": {
        "0": "💡 평면거울에서 상이 작아 보여? 화장실 거울 앞에 서봐. 네 얼굴이 작아졌어?\n📖 평면거울은 확대도 축소도 안 해. 상의 크기 = 물체의 크기. 이건 오목/볼록거울이랑 다른 핵심 특징이야.\n🔬 크기가 달라지는 건 오목거울(확대)이나 볼록거울(축소)이야.",
        "1": "💡 거울 앞쪽에 상이 생긴다고? 그러면 손으로 잡을 수 있어야 하는데 잡히나?\n📖 평면거울의 상은 거울 뒤쪽(안쪽)에 생기는 허상이야. 실제로 빛이 모이는 게 아니라 거울 뒤에 있는 것처럼 보이는 거야.\n🔬 \"거울 앞=실상, 거울 뒤=허상\" 이 구분이 시험에 자주 나와.",
        "3": "💡 \"선명하게\"라는 건 거울의 특징이 아니야. 깨끗한 거울이면 선명하고 더러우면 흐리잖아.\n📖 평면거울의 핵심 특징은: 같은 크기, 같은 거리, 좌우반전, 허상. \"선명함\"은 거울의 과학적 성질이 아니야.\n🔬 시험에서 \"선명\", \"뚜렷\"은 과학 용어가 아닌 함정 표현이야."
      },
      "hint": "거울에 비친 너의 모습은 너의 실제 크기와 같을까, 작을까?",
      "scope_out": true
    },
    {
      "id": "L3-E006",
      "type": "choice",
      "instruction": "오목거울에 대한 설명으로 옳은 것을 고르시오.",
      "question": "오목거울의 특징",
      "options": [
        "항상 작은 상을 만든다",
        "물체가 가까울 때는 크고 바로 선 상을 만든다",
        "모든 거리에서 같은 크기의 상을 만든다",
        "물체가 멀 때 만드는 상은 허상이다"
      ],
      "correct": 1,
      "score_group": "A",
      "linked_concept": [
        "LC-07"
      ],
      "explanation": "💡 화장 확대거울(오목거울)을 가까이 대면 크게 보이잖아. 그게 바로 이 원리야.\n📖 오목거울: 초점 안쪽(가까이) → 크고 바로 선 허상. 초점 바깥(멀리) → 작고 거꾸로 된 실상.\n🔬 물체를 가까이 두면 확대된 바로 선 상 → 화장거울, 치과거울에 이용.",
      "wrong_explanations": {
        "0": "💡 오목거울이 항상 작은 상을 만든다고? 그러면 화장 확대거울은 뭘로 만들었을까?\n📖 오목거울은 거리에 따라 상이 달라져. 가까우면 크고, 멀면 작아질 수 있어. \"항상\"이 틀렸어.\n🔬 \"항상\"이라는 단어가 보이면 의심해. 오목거울은 거리에 따라 변하거든.",
        "2": "💡 모든 거리에서 같은 크기? 그건 평면거울이지, 오목거울이 아니야.\n📖 오목거울은 초점 안쪽(가까이)이면 확대, 초점 바깥(멀리)이면 축소. 거리마다 상이 달라지는 게 핵심이야.\n🔬 평면거울=크기 불변, 오목거울=거리에 따라 변함. 이 차이를 기억해.",
        "3": "💡 물체가 멀 때(초점 바깥) 오목거울은 실상을 만들어. 허상이 아니야!\n📖 오목거울에서 물체가 초점보다 멀면 → 실상(거꾸로, 스크린에 비침). 초점보다 가까우면 → 허상(바로 선, 확대).\n🔬 \"멀면 실상, 가까우면 허상\" — 이 공식이 오목거울의 핵심이야."
      },
      "hint": "화장할 때 쓰는 확대 거울이 오목거울이야. 가까이 대면 어떻게 보일까?",
      "scope_out": true
    },
    {
      "id": "L3-E007",
      "type": "choice",
      "instruction": "볼록거울에 대한 설명으로 옳은 것을 고르시오.",
      "question": "볼록거울의 상",
      "options": [
        "거리에 따라 상의 크기가 달라진다",
        "물체가 가까울 때는 거꾸로 된 상을 만든다",
        "항상 작고 바로 선 상을 만든다",
        "멀리 있는 물체는 보여 주지 않는다"
      ],
      "correct": 2,
      "score_group": "A",
      "linked_concept": [
        "LC-08"
      ],
      "explanation": "💡 자동차 측면거울(볼록거울)을 봐. 항상 작게 보이지만 넓은 범위가 보이잖아.\n📖 볼록거울은 물체 거리에 관계없이 항상 작고, 바로 서 있는 허상을 만들어.\n🔬 볼록거울의 3가지 \"항상\": 항상 작음, 항상 바로 섬(정립), 항상 허상.",
      "wrong_explanations": {
        "0": "💡 볼록거울은 거리에 상관없이 항상 같은 종류의 상을 만들어. 달라지지 않아.\n📖 볼록거울은 어디서든 작고 바로 선 허상만 만들어. 거리에 따라 약간 크기 차이는 있지만 종류는 항상 같아.\n🔬 \"항상 같다\"가 볼록거울의 특징. 그래서 자동차 측면거울로 쓰는 거야.",
        "1": "💡 볼록거울에서 거꾸로 된 상? 절대 안 생겨. 볼록거울은 항상 바로 서 있는 상만 만들어.\n📖 거꾸로 된 상(도립상)은 오목거울이나 볼록렌즈에서 나와. 볼록거울은 항상 정립(바로 선) 허상이야.\n🔬 거꾸로=오목거울/볼록렌즈, 바로 선=볼록거울/오목렌즈. 짝을 외워.",
        "3": "💡 볼록거울이 멀리 있는 물체를 안 보여준다고? 자동차 측면거울을 봐. 멀리 있는 차도 보이잖아.\n📖 볼록거울은 넓은 범위를 작게 보여주는 거야. 그래서 도로 안전거울, 측면거울에 쓰여.\n🔬 볼록거울의 장점: 넓은 시야. 단점: 작게 보임. \"멀리 못 봄\"은 완전 틀려."
      },
      "hint": "자동차 거울은 왜 항상 작게 보여? 그게 장점일까, 단점일까?",
      "scope_out": true
    },
    {
      "id": "L3-E008",
      "type": "choice",
      "instruction": "다음 중 볼록렌즈에 대한 설명으로 옳은 것을 고르시오.",
      "question": "볼록렌즈의 상",
      "options": [
        "항상 작고 바로 선 상을 만든다",
        "거리에 따라 상의 특징이 변한다",
        "물체가 멀 때는 허상을 만든다",
        "상의 크기는 거리와 관계없이 항상 같다"
      ],
      "correct": 1,
      "score_group": "A",
      "linked_concept": [
        "LC-09"
      ],
      "explanation": "💡 돋보기(볼록렌즈)로 물체를 봐. 가까이 대면 크게 보이는데 멀리 대면 거꾸로 뒤집혀 보여. 거리에 따라 달라져.\n📖 볼록렌즈는 오목거울과 같은 특징이야. 거리에 따라 상이 변하는 게 핵심이야.\n🔬 영사기 원리: 물체가 렌즈 바깥쪽에 있을 때 실상(거꾸로)을 만든다.",
      "wrong_explanations": {
        "0": "💡 볼록렌즈(돋보기)로 가까이 보면 크게 보이는데, 멀리 보면 거꾸로 뒤집혀 보여. 항상 작지 않아.\n📖 '항상 작고 바로 선 상'은 오목렌즈의 특징이야. 볼록렌즈와 헷갈리지 마.\n🔬 볼록렌즈는 거리에 따라 실상/허상이 달라지므로 '항상'이라는 표현이 맞지 않는다.",
        "2": "💡 물체가 멀 때 볼록렌즈는 실상(거꾸로 뒤집힌 상)을 만들어. 허상이 아니야.\n📖 볼록렌즈에서 허상은 물체가 초점보다 가까울 때만 생겨.\n🔬 물체가 초점 바깥에 있으면 실상, 초점 안쪽에 있으면 허상이 생긴다.",
        "3": "💡 돋보기로 가까이 보면 크게, 멀리 보면 작게 보이잖아. 크기가 달라져.\n📖 볼록렌즈는 물체와의 거리에 따라 상의 크기가 변해. '항상 같다'는 틀려.\n🔬 볼록렌즈의 배율은 물체 거리에 따라 달라진다."
      },
      "hint": "돋보기(볼록렌즈)로 물체를 봤을 때 가까이일 때와 멀 때 어떻게 다르게 보일까?",
      "scope_out": true
    },
    {
      "id": "L3-E009",
      "type": "choice",
      "instruction": "오목렌즈에 대한 설명으로 옳은 것을 고르시오.",
      "question": "오목렌즈의 상",
      "options": [
        "물체가 가까울 때 크고 바로 선 상을 만든다",
        "항상 작고 바로 선 허상을 만든다",
        "거리에 따라 상의 모양이 달라진다",
        "실상을 만들 수 있다"
      ],
      "correct": 1,
      "score_group": "A",
      "linked_concept": [
        "LC-10"
      ],
      "explanation": "💡 근시 안경 렌즈가 오목렌즈야. 이 안경을 쓰고 바깥을 봐. 뭐가 보여도 항상 작게 보여. 거리가 얼마든 상관없어.\n📖 오목렌즈는 항상 같은 상을 만드는 거야. 작고 바로 선 허상만. 이건 볼록거울과 같은 특징이야.\n🔬 오목렌즈의 핵심: 항상 작고 바로 선 허상. 거리에 관계없이 일정하다.",
      "wrong_explanations": {
        "0": "💡 오목렌즈는 항상 같은 상만 만들어. 거리에 따라 바뀌지 않아. 다시 생각해봐.\n📖 가까울 때 크고 바로 선 상을 만드는 건 볼록렌즈야. 오목렌즈가 아니야.\n🔬 볼록렌즈(거리에 따라 변함) ≠ 오목렌즈(항상 같음)",
        "2": "💡 오목렌즈는 거리에 관계없이 항상 같은 특징의 상을 만들어. 달라지지 않아.\n📖 거리에 따라 상이 달라지는 건 볼록렌즈(돋보기)야. 오목렌즈와 헷갈리지 마.\n🔬 오목렌즈는 물체 거리와 무관하게 항상 작고 바로 선 허상만 만든다.",
        "3": "💡 오목렌즈는 실상을 만들 수 없어. 항상 허상만 만들어.\n📖 실상을 만들 수 있는 건 볼록렌즈야. 오목렌즈는 빛을 퍼지게 하니까 실상이 안 생겨.\n🔬 오목렌즈는 빛을 발산시키므로 빛이 한 점에 모이지 않아 실상을 형성할 수 없다."
      },
      "hint": "근시 안경으로 봤을 때 물체의 크기가 거리에 따라 달라질까, 항상 같을까?",
      "scope_out": true
    },
    {
      "id": "L3-E010",
      "type": "choice",
      "instruction": "거울과 렌즈의 관계를 설명한 것으로 옳은 것을 고르시오.",
      "question": "거울과 렌즈 비교",
      "options": [
        "오목거울과 오목렌즈는 같은 상을 만든다",
        "볼록거울과 볼록렌즈는 같은 상을 만든다",
        "오목거울과 볼록렌즈는 거리에 따라 같은 상을 만든다",
        "모든 거울과 렌즈는 같은 상을 만든다"
      ],
      "correct": 2,
      "score_group": "A",
      "linked_concept": [
        "LC-11"
      ],
      "explanation": "💡 화장거울(오목)과 돋보기(볼록렌즈)를 생각해봐. 둘 다 물체를 크게 봐. 거리에 따라 상이 달라지고, 때론 거꾸로 뒤집혀. 같은 특징이야.\n📖 비교: 오목거울 ≈ 볼록렌즈, 볼록거울 ≈ 오목렌즈. 이 두 조합은 같은 상을 만들어.\n🔬 이 비교는 시험에 자주 나오므로 꼭 외워두기.",
      "wrong_explanations": {
        "0": "💡 오목거울(화장거울)과 오목렌즈(근시안경)를 비교해봐. 다르지 않나?\n📖 오목거울은 거리에 따라 상이 변하지만, 오목렌즈는 항상 바로 선 축소된 허상만 만들어. 서로 다른 거야.\n🔬 오목거울 ≈ 볼록렌즈, 오목렌즈 ≈ 볼록거울이 맞는 짝이야.",
        "1": "💡 볼록거울(자동차 사이드미러)과 볼록렌즈(돋보기)를 비교해봐.\n📖 볼록거울은 항상 축소된 허상만 만들지만, 볼록렌즈는 거리에 따라 실상·허상 모두 가능해. 서로 다른 거야.\n🔬 볼록거울 ≈ 오목렌즈가 맞는 짝이야.",
        "3": "💡 '모든' 거울과 렌즈가 같은 건 아니야!\n📖 오목거울 ≈ 볼록렌즈, 볼록거울 ≈ 오목렌즈 이렇게 특정 조합만 같은 상을 만들어.\n🔬 '모든'이라는 표현에 주의! 시험에서 자주 나오는 함정이야."
      },
      "hint": "화장거울은 오목거울, 돋보기는 볼록렌즈야. 이 둘이 비슷하게 동작할까?",
      "scope_out": true
    },
    {
      "id": "L3-E011",
      "type": "choice",
      "instruction": "실상과 허상의 차이를 바르게 설명한 것을 고르시오.",
      "question": "실상과 허상의 차이",
      "options": [
        "실상은 항상 크고, 허상은 항상 작다",
        "실상은 스크린에 비치지만 허상은 비치지 않는다",
        "허상은 거울에서만 생기고 렌즈에서는 생기지 않는다",
        "실상은 물체보다 항상 멀고 허상은 물체보다 항상 가깝다"
      ],
      "correct": 1,
      "score_group": "A",
      "linked_concept": [
        "LC-12"
      ],
      "explanation": "💡 영사기로 영화를 본다고 해봐. 스크린에 보이는 상(영화 화면)이 실상이야. 거울에 비친 너의 모습은 허상이고, 스크린에는 비치지 않아.\n📖 실상(거꾸로 → 스크린O) vs 허상(바로 → 스크린X). 이 차이가 가장 중요해.\n🔬 실상은 빛이 실제로 모여서 만들어지는 상이고, 허상은 눈에만 보이는 상이다.",
      "wrong_explanations": {
        "2": "💡 허상이 거울에서만 생긴다고? 오목렌즈도 허상을 만들어.\n📖 볼록거울, 평면거울, 오목렌즈 모두 허상을 만들 수 있어. \"거울에서만\"이라는 한정이 틀렸어.\n🔬 허상을 만드는 것: 평면거울, 볼록거울, 오목렌즈 + 오목거울(초점 안). 거울과 렌즈 둘 다 가능.",
        "3": "💡 실상이 항상 물체보다 멀다? 그건 상황에 따라 달라져.\n📖 실상과 허상의 핵심 차이는 \"스크린에 비치느냐\"야. 거리가 아니야. 실상은 빛이 실제로 모이고, 허상은 모이는 것처럼 보이기만 해.\n🔬 실상=스크린에 맺힘(빛이 모임), 허상=스크린에 안 맺힘(눈으로만 보임).",
        "0": "💡 실상이 항상 크고 허상이 항상 작을까? 오목거울의 가까운 경우를 생각해봐. 허상도 크잖아.\n📖 크기로 구분하는 게 아니야. 스크린에 비치는지, 아닌지로 구분해야 해.\n🔬 실상과 허상의 크기는 다양할 수 있어. 크기가 아니라 '스크린에 맺히느냐'로 구분해."
      },
      "hint": "영사기로 영화를 본다고 했을 때, 스크린에 비치는 상이 실상일까, 허상일까?",
      "scope_out": true
    },
    {
      "id": "L3-E012",
      "type": "choice",
      "instruction": "빛의 삼원색에 대한 설명으로 옳은 것을 고르시오.",
      "question": "빛의 삼원색",
      "options": [
        "빨강, 노랑, 파랑이 삼원색이다",
        "빛의 삼원색을 섞으면 검은색이 된다",
        "빨강, 초록, 파랑이 빛의 삼원색이다",
        "모니터 화면은 물감 삼원색으로 이루어져 있다"
      ],
      "correct": 2,
      "score_group": "A",
      "linked_concept": [
        "LC-13"
      ],
      "explanation": "💡 텔레비전 화면을 현미경으로 보면 빨간색, 초록색, 파란색 점들이 보여. 이 세 색을 섞는 밝기를 조절해서 모든 색을 만드는 거야.\n📖 빛의 삼원색: R(빨강) + G(초록) + B(파랑). 이 세 색을 모두 섞으면 흰색이 돼. 밝아지는 거야.\n🔬 RGB 삼원색은 빛 자체의 성질이므로 '빛의 삼원색'이라고 명시해야 한다.",
      "wrong_explanations": {
        "0": "💡 빨강, 노랑, 파랑은 '물감의 삼원색'이야. 빛의 삼원색이 아니야. 혼동하지 마.\n📖 빛에서는 초록색이 포함되고, 물감에서는 노랑색이 포함돼. 다른 거야.\n🔬 '빛의 삼원색' vs '물감의 삼원색'을 구분하는 것이 중요하다.",
        "1": "💡 빛의 삼원색을 모두 섞으면 검은색이 될까? 손전등 세 개를 한 곳에 비추면 오히려 밝아져.\n📖 빛은 섞을수록 밝아져(가산 혼합). 삼원색을 모두 합치면 흰색이 돼, 검은색이 아니야.\n🔬 RGB를 모두 더하면 흰색(White)이 된다. 검은색은 빛이 없는 상태이다.",
        "3": "💡 모니터 화면은 물감이 아니라 빛으로 색을 만들어. TV 화면을 확대해봐.\n📖 모니터는 빛의 삼원색(RGB)으로 색을 표현해. 물감의 삼원색이 아니야.\n🔬 LCD/OLED 모두 R, G, B 서브픽셀로 색을 구성한다."
      },
      "hint": "모니터 화면을 현미경으로 봤을 때 어떤 색의 점들이 보일까?",
      "scope_out": true
    },
    {
      "id": "L3-E013",
      "type": "choice",
      "instruction": "빛의 삼원색을 섞는 것에 대한 설명으로 옳은 것을 고르시오.",
      "question": "빛의 삼원색 혼합",
      "options": [
        "빨강 + 초록 = 파랑",
        "빨강 + 초록 = 노랑",
        "빨강 + 초록 + 파랑 = 검은색",
        "빨강 + 파랑 = 초록"
      ],
      "correct": 1,
      "score_group": "B",
      "linked_concept": [
        "LC-13"
      ],
      "explanation": "💡 손전등 세 개에 셀로판지를 붙여서 한 곳에 비춰봐. 빨강과 초록을 합치면 노란색으로 보여.\n📖 빛은 섞을수록 밝아져. 그래서 더 밝은 색이 나온다고 생각하면 돼. 빨강 + 초록 → 노랑(더 밝은색).\n🔬 RGB 혼합: R+G=Y(노랑), R+B=M(자홍), G+B=C(청록), R+G+B=W(흰색).",
      "wrong_explanations": {
        "2": "💡 빨+초+파=검은색? 그건 물감(색의 삼원색)이야! 빛은 반대야.\n📖 빛의 삼원색을 전부 섞으면 밝아져서 흰색이 돼. 물감은 섞으면 어두워지지만, 빛은 섞으면 밝아져.\n🔬 빛의 합성=가산혼합(섞을수록 밝아짐), 물감=감산혼합(섞을수록 어두워짐). 시험 단골!",
        "3": "💡 빨+파=초록? 아니야. 빨+파=마젠타(보라 계열)야.\n📖 빛의 삼원색 조합: 빨+초=노랑, 빨+파=마젠타, 초+파=시안, 빨+초+파=흰색.\n🔬 이 조합을 외우는 게 시험에서 가장 확실한 방법이야. 헷갈리면 \"빨초=노\" 먼저 외워.",
        "0": "💡 빨강+초록=파랑? 아니야. 빨강과 초록을 섞으면 오히려 밝은 노랑이 돼.\n📖 빛은 섞을수록 밝아져. 파랑 같은 어두운 색이 나올 리가 없어.\n🔬 빨+초=노랑, 빨+파=마젠타, 초+파=시안. 이 세 조합을 외워두면 시험에서 바로 풀려."
      },
      "hint": "빛을 섞으면 밝아질까, 어두워질까? 그럼 빨강과 초록을 섞으면 더 밝은 무슨 색이 될까?",
      "scope_out": true
    },
    {
      "id": "L3-E014",
      "type": "choice",
      "instruction": "물체의 색에 대한 설명으로 옳은 것을 고르시오.",
      "question": "물체의 색과 반사",
      "options": [
        "물체의 색은 그 물체의 고유한 색깔이다",
        "물체가 반사하는 빛의 색이 물체의 색이다",
        "검은색 물체는 검은색 빛을 반사한다",
        "물체의 색은 광원의 색과 무관하다"
      ],
      "correct": 1,
      "score_group": "B",
      "linked_concept": [
        "LC-14"
      ],
      "explanation": "💡 딸기가 빨간색으로 보이는 건 왜? 딸기가 빨간 빛만 반사하기 때문이야. 초록색 조명 아래에서는 초록 빛을 반사해야 보이니까 초록색으로 보여.\n📖 물체의 색은 그 물체의 고유한 성질이 아니야. 반사하는 빛의 색이 물체의 색이야.\n🔬 같은 물체도 조명의 색이 바뀌면 다른 색으로 보인다. 이게 핵심 개념이다.",
      "wrong_explanations": {
        "0": "💡 물체에 \"고유한 색깔\"이 있다고? 그러면 왜 빨간 조명 아래에서 흰 종이가 빨갛게 보일까?\n📖 물체의 색은 고유한 게 아니라, 반사하는 빛에 의해 결정돼. 조명이 바뀌면 물체 색도 바뀌어.\n🔬 교과서 핵심: \"물체의 색 = 반사되어 눈에 들어온 빛의 색\". 이게 정의야.",
        "2": "💡 \"검은색 빛\"이라는 게 존재할까? 빛이 없는 상태가 검은색이야.\n📖 검은색 물체는 빛을 거의 다 흡수해서 반사하는 빛이 없어. 그래서 검게 보여. \"검은색 빛을 반사\"하는 게 아니야.\n🔬 검은색=빛 흡수, 흰색=모든 빛 반사. 이 대비를 기억해.",
        "3": "💡 \"광원의 색과 무관\"? 파란 조명 아래에서 빨간 물체가 검게 보이는 거 배웠잖아.\n📖 물체의 색은 광원의 색에 따라 달라져. 백색광이면 제 색으로 보이지만, 다른 색 조명이면 달라져.\n🔬 교과서 예시: 초록 조명 → 초록 물체는 초록, 빨간 물체는 검게 보임."
      },
      "hint": "같은 딸기도 빨간 조명 아래와 파란 조명 아래에서 색이 다르게 보일까, 같을까?",
      "scope_out": true
    },
    {
      "id": "L3-E015",
      "type": "choice",
      "instruction": "검은색 물체의 색이 보이는 원리를 올바르게 설명한 것을 고르시오.",
      "question": "검은색의 원리",
      "options": [
        "검은색 물체가 검은색 빛을 반사해서",
        "검은색 물체가 모든 색의 빛을 흡수해서",
        "검은색 물체가 다른 색 빛을 흡수해서",
        "빛이 검은색 물체를 투과하지 못해서"
      ],
      "correct": 1,
      "score_group": "B",
      "linked_concept": [
        "LC-14"
      ],
      "explanation": "💡 검은 옷을 봐. 이 옷에 모든 색 빛이 들어오는데 다 흡수해버려. 반사되는 빛이 거의 없어서 어둡게 보여. 그걸 검은색이라고 부르는 거야.\n📖 검은색은 색이 아니라 '빛이 없는 상태'라고 생각해야 해. 모든 빛을 흡수하니까.\n🔬 검은색 빛이라는 게 존재하지 않는다. 검은색은 빛의 부재(absence)를 나타낸다.",
      "wrong_explanations": {
        "0": "💡 \"검은색 빛\"은 없어! 빛이 없는 상태가 곧 검은색이야.\n📖 검은색 물체는 빛을 반사하는 게 아니라 흡수해서 검게 보이는 거야. 반사할 빛이 없으니까 어두운 거야.\n🔬 빛의 색은 빨주노초파남보. \"검은색 빛\"은 물리적으로 존재하지 않아.",
        "2": "💡 \"다른 색 빛을 흡수\"면 어떤 색은 반사한다는 뜻인데, 그러면 검은색이 아니잖아.\n📖 검은색은 \"모든\" 색의 빛을 흡수하는 거야. 일부만 흡수하면 나머지 색이 반사돼서 그 색으로 보여.\n🔬 빨간 물체=빨간 빛 반사+나머지 흡수. 검은색 물체=모든 빛 흡수. 차이를 구분해.",
        "3": "💡 빛이 투과하지 못해서 검은색이라고? 투명하지 않은 물체는 다 그런데, 다 검은색은 아니잖아.\n📖 불투명한 물체에서 색이 결정되는 건 \"반사\"와 \"흡수\"야. 투과 여부가 아니야. 검은색은 모든 빛을 흡수하기 때문이야.\n🔬 투과=유리처럼 빛이 통과. 검은색의 원리와는 다른 개념이야."
      },
      "hint": "검은 물체에 모든 색 빛이 들어올 때 어떻게 될까? 반사될까, 흡수될까?",
      "scope_out": true
    },
    {
      "id": "L3-E016",
      "type": "choice",
      "instruction": "빛의 합성과 물감의 혼합 차이에 대한 설명으로 옳은 것을 고르시오.",
      "question": "빛의 합성 vs 물감의 혼합",
      "options": [
        "둘 다 섞을수록 밝아진다",
        "빛을 섞으면 밝아지고 물감을 섞으면 어두워진다",
        "빛의 삼원색과 물감의 삼원색은 같다",
        "둘 다 섞을수록 어두워진다"
      ],
      "correct": 1,
      "score_group": "A",
      "linked_concept": [
        "LC-15"
      ],
      "explanation": "💡 손전등으로 빛 세 개를 섞으면 하얀색(밝아짐)이 돼. 그런데 빨강, 노랑, 파랑 물감을 섞으면 어두운 갈색이 돼(어두워짐). 완전히 반대야.\n📖 빛은 더하면(가산) 밝아지고, 물감은 섞으면(감산) 어두워져. 이게 핵심이야.\n🔬 빛(RGB) ≠ 물감(CMY 또는 RYB). 삼원색도 다르고 혼합 방식도 다르다.",
      "wrong_explanations": {
        "0": "💡 물감을 섞으면 밝아질까? 실제로 해봐봐. 어두워져.\n📖 빛과 물감은 완전히 반대의 특성을 가져. 섞을수록 밝아지는 게 빛이고 어두워지는 게 물감이야.\n🔬 이 원리는 가산 혼합(색 더하기) vs 감산 혼합(색 빼기)의 차이로 이해해야 한다.",
        "2": "💡 빛의 삼원색은 빨강·초록·파랑(RGB)이고, 물감의 삼원색은 빨강·노랑·파랑(RYB)이야. 같지 않아.\n📖 빛과 물감은 삼원색 자체가 다르고, 혼합 방식도 반대야. 이 둘을 구분하는 게 핵심이야.\n🔬 빛: RGB(가산), 물감: CMY 또는 RYB(감산). 삼원색과 혼합 결과 모두 다르다.",
        "3": "💡 손전등 세 개를 한 곳에 비추면 밝아지잖아. 빛은 섞으면 밝아져, 어두워지지 않아.\n📖 둘 다 어두워진다면 빛도 물감처럼 동작한다는 뜻인데, 실제로는 반대야.\n🔬 빛의 합성은 가산 혼합(밝아짐)이다. 빛과 물감의 차이를 구분하는 것이 핵심이다."
      },
      "hint": "손전등 세 개(빨강, 초록, 파랑)를 한 곳에 비추면 무슨 색이 될까? 밝아질까, 어두워질까?",
      "scope_out": true
    },
    {
      "id": "L3-E017",
      "type": "choice",
      "instruction": "모니터 화면에서 색을 표현하는 방식을 설명한 것으로 옳은 것을 고르시오.",
      "question": "모니터의 색 표현",
      "options": [
        "모니터는 물감으로 색을 만든다",
        "모니터는 물감의 삼원색으로 색을 만든다",
        "모니터는 빛의 삼원색 화소의 밝기를 조절해서 색을 만든다",
        "모니터는 기계적으로 색을 만든다"
      ],
      "correct": 2,
      "score_group": "B",
      "linked_concept": [
        "LC-13"
      ],
      "explanation": "💡 모니터 화면을 현미경으로 보면 빨강, 초록, 파랑 점(화소)들이 보여. 이 화소들의 밝기를 조절해서 다양한 색을 만드는 거야.\n📖 RGB 화소가 모두 최대 밝기면 흰색, 모두 꺼져 있으면 검은색. 밝기를 조절해서 원하는 색을 만들어.\n🔬 모니터는 빛의 삼원색을 이용한 가산 혼합 방식이므로 물감과는 완전히 다르다.",
      "wrong_explanations": {
        "1": "💡 \"물감의 삼원색\"으로 모니터가 색을 만든다고? 모니터는 빛을 내는 장치야.\n📖 물감의 삼원색(시안·마젠타·노랑)은 인쇄할 때 써. 모니터는 빛의 삼원색(빨·초·파=RGB)을 쓰지.\n🔬 모니터=빛=RGB(가산혼합), 프린터=물감=CMY(감산혼합). 이 구분이 시험에 나와.",
        "3": "💡 \"기계적으로\" 색을 만든다? 그건 너무 막연해. 구체적 원리가 있어.\n📖 모니터는 아주 작은 빨·초·파 화소(픽셀)의 밝기를 조절해서 색을 표현해. 이게 RGB 방식이야.\n🔬 모니터를 확대경으로 보면 빨·초·파 점 세 개가 반복되는 게 보여. 그게 화소야.",
        "0": "💡 모니터가 물감으로 색을 만든다고? 모니터는 빛을 내는 장치야. 물감을 쓸 리가 없잖아.\n📖 모니터는 전자기기로 빛을 발생시켜. 물감처럼 반사하는 게 아니라 스스로 빛나는 거야.\n🔬 모니터=자체 발광(빛의 삼원색 RGB), 인쇄=물감 반사(색의 삼원색 CMY)."
      },
      "hint": "모니터는 물감처럼 색을 표현할까, 빛처럼 색을 표현할까?",
      "scope_out": true
    },
    {
      "id": "L3-E018",
      "type": "choice",
      "instruction": "다음 중 빛의 직진을 잘 보여주는 예를 고르시오.",
      "question": "빛의 직진의 예",
      "options": [
        "거울에 비친 상",
        "물속의 물체가 실제보다 얕은 곳에 있는 것처럼 보임",
        "그림자가 생기는 것",
        "렌즈로 본 물체가 크게 보이는 것"
      ],
      "correct": 2,
      "score_group": "B",
      "linked_concept": [
        "LC-01"
      ],
      "explanation": "💡 빛이 직진하니까 물체 뒤에 빛이 못 가서 어두운 부분이 생겨. 그게 그림자야.\n📖 그림자는 빛의 직진의 가장 대표적인 예시. 빛이 꺾이거나 퍼지면 그림자가 또렷하게 안 생겨.\n🔬 직진=그림자, 반사=거울, 굴절=렌즈/물속 꺾임. 이 세 가지 연결고리를 외워.",
      "wrong_explanations": {
        "0": "💡 거울에 비친 상은 \"반사\"를 보여주는 예시야. 직진이 아니야.\n📖 빛의 직진: 빛이 꺾이거나 튕기지 않고 쭉 나아가는 것. 거울은 빛이 튕기는(반사) 현상이야.\n🔬 직진=그림자, 반사=거울, 굴절=렌즈/물속. 이 세 가지를 구분하는 게 핵심.",
        "1": "💡 물속에서 물체가 얕아 보이는 건 빛이 꺾이는 \"굴절\"이야.\n📖 빛이 물→공기로 나올 때 꺾이면서 실제보다 위에 있는 것처럼 보여. 이건 굴절 현상이야.\n🔬 직진=직선으로 나아감, 굴절=다른 물질 만나서 꺾임. 완전히 다른 개념.",
        "3": "💡 렌즈로 크게 보이는 건 \"굴절\"이야. 빛이 렌즈를 통과하면서 꺾여서 확대되는 거야.\n📖 볼록렌즈가 빛을 모아서 크게 보이게 하는 건 굴절이지, 직진이 아니야.\n🔬 그림자=직진의 증거. 빛이 직진하니까 물체 뒤에 어두운 부분이 생기는 거야."
      },
      "hint": "빛이 일직선으로 나아갈 때 생기는 가장 일상적인 현상은 뭘까?",
      "scope_out": true
    },
    {
      "id": "L3-E019",
      "type": "choice",
      "instruction": "다음 상황에서 광원의 역할을 설명한 것으로 옳은 것을 고르시오.",
      "question": "어두운 방에서 물체를 볼 때",
      "options": [
        "광원이 없어도 물체를 볼 수 있다",
        "광원에서 나온 빛이 물체에서 반사되어 눈에 들어와야 물체를 볼 수 있다",
        "물체가 스스로 빛을 내야 한다",
        "눈 자체가 빛을 내서 본다"
      ],
      "correct": 1,
      "score_group": "B",
      "linked_concept": [
        "LC-01"
      ],
      "explanation": "💡 어두운 방에서 왜 아무것도 안 보일까? 광원의 빛이 물체에 부딪혀 반사되어야 눈에 들어오거든.\n📖 우리가 물체를 보는 과정: 광원에서 빛 나옴 → 물체에 부딪혀 반사 → 반사된 빛이 눈에 도착.\n🔬 광원 없이는 어떤 물체도 볼 수 없어. 스스로 빛을 내는 물체(광원)만 빛 없이도 보여.",
      "wrong_explanations": {
        "0": "💡 어두운 방에서 물체가 보여? 안 보이잖아. 빛이 있어야 볼 수 있어.\n📖 광원이 없으면 물체에서 반사할 빛 자체가 없어. 그래서 캄캄한 방에서는 아무것도 안 보여.\n🔬 물체를 보려면: 광원 → 빛이 물체에 닿음 → 반사 → 눈으로 들어옴. 이 과정이 필수.",
        "2": "💡 물체가 스스로 빛을 내야 보인다고? 그러면 책상, 의자, 연필은 영원히 못 보겠네.\n📖 대부분의 물체는 스스로 빛을 내지 않아. 광원의 빛을 반사해서 우리 눈에 들어오는 거야.\n🔬 스스로 빛을 내는 건 \"광원\"(태양, 전구)뿐. 나머지는 다 반사로 보이는 거야.",
        "3": "💡 눈이 빛을 낸다고? 눈은 빛을 받아들이는 기관이지 내보내는 기관이 아니야.\n📖 고대 그리스에서 \"눈에서 빛이 나와서 본다\"고 했는데 이건 틀린 이론이야. 실제로는 외부 빛이 눈에 들어오는 거야.\n🔬 빛의 경로: 광원 → 물체(반사) → 눈(수용). 눈은 빛을 감지하는 역할만 해."
      },
      "hint": "밤중에 손전등 없이 어두운 숲을 걸을 때 물체가 보일까?",
      "scope_out": true
    },
    {
      "id": "L3-E020",
      "type": "choice",
      "instruction": "빛이 물의 표면에서 일어나는 현상을 설명한 것으로 옳은 것을 고르시오.",
      "question": "물 표면에서의 빛",
      "options": [
        "모든 빛이 물로 들어간다",
        "모든 빛이 반사된다",
        "일부는 반사되고 일부는 물로 진행한다",
        "빛이 사라진다"
      ],
      "correct": 2,
      "score_group": "C",
      "linked_concept": [
        "LC-02",
        "LC-04"
      ],
      "explanation": "💡 호수에 하늘이 비치면서(반사) 동시에 물속 물고기도 보이잖아(굴절). 두 가지가 동시에 일어나.\n📖 빛이 물 표면에 닿으면 일부는 반사되고 일부는 굴절하여 물속으로 진행해.\n🔬 경계면에서는 반사와 굴절이 항상 동시에 발생. \"모든 빛\"이 한쪽으로만 가진 않아.",
      "wrong_explanations": {
        "0": "💡 모든 빛이 다 물로 들어간다고? 그러면 수면에서 반짝이는 건 뭐야? 반사된 빛이잖아.\n📖 물 표면에서 빛의 일부는 반사되고 일부는 굴절해서 물 속으로 들어가. \"모든 빛\"이 아니야.\n🔬 경계면에서는 항상 반사+굴절이 동시에 일어나. 100% 투과는 불가능해.",
        "1": "💡 모든 빛이 반사된다면 물속을 볼 수 없어야 하는데, 실제로는 보이잖아.\n📖 물 표면에서 일부는 반사, 일부는 물로 들어가(굴절). \"모든\"이 틀렸어.\n🔬 전반사(모든 빛이 반사)는 특수한 조건(물→공기, 임계각 이상)에서만 일어나.",
        "3": "💡 빛이 사라진다고? 빛은 에너지야. 에너지는 사라지지 않아.\n📖 빛은 반사·굴절·흡수 중 하나는 해. 사라지는 건 없어. 에너지 보존 법칙이야.\n🔬 물 표면: 일부 반사 + 일부 굴절(투과). 흡수도 약간 있지만, \"사라짐\"은 없어."
      },
      "hint": "호수에 비친 구름도 보이고, 물속도 보인다는 게 뭘 의미할까?",
      "scope_out": true
    },
    {
      "id": "L3-E021",
      "type": "choice",
      "instruction": "다음 중 실상을 가진 거울 또는 렌즈를 모두 고르시오.",
      "question": "실상을 만드는 것",
      "options": [
        "평면거울, 오목거울",
        "오목거울, 볼록렌즈",
        "볼록거울, 오목렌즈",
        "평면거울, 볼록렌즈"
      ],
      "correct": 1,
      "score_group": "B",
      "linked_concept": [
        "LC-07",
        "LC-09",
        "LC-12"
      ],
      "explanation": "💡 오목거울(화장거울)을 멀리서 봐. 어느 순간부터 상이 거꾸로 뒤집혀 보여. 그게 실상이야. 볼록렌즈(돋보기)도 멀 때는 거꾸로 된 상을 만들어. 그게 영사기 원리야.\n📖 실상은 거꾸로 된 상이고 스크린에 비칠 수 있어. 오목거울과 볼록렌즈만 특정 거리에서 실상을 만들어.\n🔬 실상을 만들 수 있는 거울/렌즈: 오목거울(가능), 볼록거울(불가), 볼록렌즈(가능), 오목렌즈(불가).",
      "wrong_explanations": {
        "2": "💡 볼록거울과 오목렌즈? 이 둘은 실상을 못 만들어. 둘 다 허상만 만들어.\n📖 볼록거울=항상 허상, 오목렌즈=항상 허상. 실상을 만드는 건 오목거울과 볼록렌즈야.\n🔬 실상 가능: 오목거울+볼록렌즈 / 허상만: 볼록거울+오목렌즈+평면거울. 이 짝을 외워.",
        "3": "💡 평면거울이 실상을 만든다고? 평면거울은 항상 허상만 만들어.\n📖 평면거울의 상은 거울 뒤에 생기는 허상이야. 스크린에 비칠 수 없어.\n🔬 실상을 만드는 것: 오목거울(초점 밖), 볼록렌즈(초점 밖). 평면거울은 불가.",
        "0": "💡 평면거울이 실상을 만든다고? 거울 뒤에 손을 넣어봐. 아무것도 없잖아. 그게 허상이야.\n📖 평면거울은 항상 허상만 만들어. 거울 뒤에 있는 것처럼 보이지만 실제 빛이 모이지 않아.\n🔬 실상 가능: 오목거울(초점 밖) + 볼록렌즈(초점 밖). 평면거울은 불가."
      },
      "hint": "영사기(프로젝터)로 화면에 영상을 비칠 때 뭐가 사용될까? 거울일까, 렌즈일까? 그리고 어떤 종류?",
      "scope_out": true
    },
    {
      "id": "L3-E022",
      "type": "choice",
      "instruction": "파란 조명 아래에서 초록색 물체와 빨간색 물체가 보이는 색을 설명한 것으로 옳은 것을 고르시오.",
      "question": "파란 조명 아래의 물체 색",
      "options": [
        "초록색 물체는 초록색, 빨간색 물체는 빨간색으로 보인다",
        "초록색 물체는 검게, 빨간색 물체도 검게 보인다",
        "초록색 물체는 검게, 빨간색 물체는 파란색으로 보인다",
        "초록색 물체는 파란색, 빨간색 물체는 초록색으로 보인다"
      ],
      "correct": 1,
      "score_group": "B",
      "linked_concept": [
        "LC-14"
      ],
      "explanation": "💡 초록색 물체는 초록 빛을 반사하는데, 파란 조명 아래에서는 초록 빛이 없어. 그래서 반사할 게 없어서 검게 보여. 빨간색 물체는 빨강을 반사하는데, 파란 조명이니까 역시 반사할 게 없어서 검게 보여.\n📖 물체의 색 = 반사하는 빛의 색. 조명에 그 색이 없으면 물체는 검게 보여.\n🔬 같은 물체도 조명의 색에 따라 완전히 다르게 보인다는 게 빛의 중요성을 보여준다.",
      "wrong_explanations": {
        "2": "💡 초록 물체가 검고, 빨간 물체가 파란색? 빨간 물체는 파란 빛을 반사 못 해.\n📖 빨간 물체는 빨간 빛만 반사하는데, 파란 조명에는 빨간 빛이 없어. 반사할 빛이 없으니 검게 보여.\n🔬 핵심: 물체가 반사할 수 있는 색이 조명에 없으면 → 검은색으로 보임.",
        "3": "💡 초록 물체가 파란색, 빨간 물체가 초록색? 아예 다 틀렸어.\n📖 파란 조명 아래: 초록 물체는 파란 빛 반사 못 함 → 검게. 빨간 물체도 파란 빛 반사 못 함 → 검게.\n🔬 파란 조명=파란 빛만 있음. 초록·빨간 물체는 둘 다 파란 빛을 흡수 → 둘 다 검게 보임.",
        "0": "💡 파란 조명 아래에서 초록색 물체가 초록색으로 보인다고? 초록 빛이 없으면 반사할 게 없어.\n📖 파란 조명에는 파란 빛만 있어. 초록 물체는 초록 빛만 반사하는데 초록 빛이 없으니까 검게 보여.\n🔬 핵심: 조명에 포함된 색만 반사 가능. 없는 색은 반사 불가 → 검게 보임."
      },
      "hint": "초록색 물체가 초록 빛을 반사해야 초록색으로 보이는데, 파란 조명 아래에 초록 빛이 있을까?",
      "scope_out": true
    },
    {
      "id": "L3-E023",
      "type": "choice",
      "instruction": "빛의 합성에 대한 설명으로 옳은 것을 고르시오.",
      "question": "빛의 합성 현상",
      "options": [
        "빛의 합성은 빛이 반사할 때만 일어난다",
        "영상 장치의 화면은 RGB 화소를 섞어서 색을 표현한다",
        "빛을 섞으면 어두워진다",
        "빛의 합성은 과학적으로 증명되지 않았다"
      ],
      "correct": 1,
      "score_group": "B",
      "linked_concept": [
        "LC-13",
        "LC-15"
      ],
      "explanation": "💡 TV, 모니터, 스마트폰 화면이 다 이 원리야. 빨·초·파 빛을 섞어서 모든 색을 만들어.\n📖 영상 장치는 RGB(빨강·초록·파랑) 화소의 밝기를 조절해서 수백만 가지 색을 표현해.\n🔬 빛의 합성(가산혼합): 빨+초=노랑, 빨+파=마젠타, 초+파=시안, 전부=흰색.",
      "wrong_explanations": {
        "0": "💡 빛의 합성이 반사할 때만 일어난다고? TV 화면은 반사가 아니라 발광인데 색이 합성되잖아.\n📖 빛의 합성은 여러 빛이 동시에 눈에 들어올 때 일어나. 반사든, 발광이든, 투과든 상관없어.\n🔬 빛의 합성 예: 무대조명(발광), RGB 모니터(발광), 프리즘 후 재합성(굴절). 반사에만 한정 안 돼.",
        "2": "💡 빛을 섞으면 어두워진다고? 그건 물감이야! 빛은 섞을수록 밝아져.\n📖 빛의 합성=가산혼합. 빨+초+파=흰색(가장 밝음). 물감의 혼합=감산혼합(섞으면 어두워짐).\n🔬 빛 vs 물감 혼합을 구분하는 게 이 단원의 핵심. \"빛=밝아짐, 물감=어두워짐\".",
        "3": "💡 빛의 합성이 증명 안 됐다고? 뉴턴이 프리즘으로 이미 400년 전에 증명했어.\n📖 빛의 합성은 물리학의 기본 원리야. 프리즘으로 분해한 빛을 다시 모으면 흰색이 되는 걸로 확인됐어.\n🔬 이런 선택지는 \"과학적으로 증명 안 됨\" 패턴의 함정이야. 교과서에 나온 건 다 증명된 거야."
      },
      "hint": "텔레비전 화면이 모든 색을 표현하려면 어떤 색들을 섞어야 할까?",
      "scope_out": true
    },
    {
      "id": "L3-E024",
      "type": "choice",
      "instruction": "다음 중 렌즈를 사용하는 실제 사례를 고르시오.",
      "question": "렌즈의 실제 사용",
      "options": [
        "현미경의 목적은 물체를 크게 보기 위함이므로 오목렌즈가 사용된다",
        "영사기는 물체의 상을 스크린에 크게 비치기 위해 볼록렌즈를 사용한다",
        "근시용 안경에는 볼록렌즈가 사용된다",
        "모든 광학 기기는 평면렌즈를 사용한다"
      ],
      "correct": 1,
      "score_group": "B",
      "linked_concept": [
        "LC-09",
        "LC-10"
      ],
      "explanation": "💡 영사기(프로젝터)가 어떻게 작은 사진을 큰 스크린에 비칠까? 필름(물체)의 실상을 렌즈로 만들어서 스크린에 비치는 거야. 그때 렌즈는 볼록렌즈야. 볼록렌즈만이 실상을 만들 수 있거든.\n📖 영사기 원리: 필름(물체) → 볼록렌즈(실상 형성) → 스크린(실상 투사).\n🔬 볼록렌즈는 현미경, 망원경, 카메라, 영사기 등에 널리 사용되는 가장 중요한 렌즈다.",
      "wrong_explanations": {
        "0": "💡 현미경이 물체를 크게 보려고 오목렌즈를 쓸까? 오목렌즈는 항상 작게 보여.\n📖 현미경은 물체를 크게 봐야 하니까 볼록렌즈를 써야 해. 근시 안경과 착각하지 마.\n🔬 현미경은 여러 개의 볼록렌즈 조합으로 만들어진다.",
        "2": "💡 근시용 안경에는 오목렌즈가 쓰여. 다시 생각해봐.\n📖 보기: 근시 = 가까운 것만 잘 봄 = 오목렌즈 (작게 봄).\n🔬 볼록렌즈는 원시(먼 것을 잘 못 봄)에 사용된다.",
        "3": "💡 평면렌즈? 그건 렌즈가 아니야. 렌즈는 오목이거나 볼록해야 해.\n📖 광학 기기들은 오목 또는 볼록렌즈를 사용해. 평면렌즈는 없어.\n🔬 모든 렌즈는 렌즈 면의 곡률에 의해 빛을 굴절시킨다."
      },
      "hint": "영사기로 영화를 본다고 했을 때 작은 필름이 큰 화면에 비쳐. 뭐가 사용될까? 작게 보이는 렌즈? 크게 보이는 렌즈?",
      "scope_out": true
    },
    {
      "id": "L3-E025",
      "type": "choice",
      "instruction": "빛과 관련된 일상의 현상을 설명한 것으로 옳은 것을 고르시오.",
      "question": "빛의 성질의 활용",
      "options": [
        "안경은 빛의 반사를 이용해서 시력을 교정한다",
        "자동차 측면거울은 볼록거울로 넓은 범위를 작게 볼 수 있게 한다",
        "조명 LED는 빛의 굴절을 이용해서 다양한 색을 만든다",
        "프리즘은 빛의 흡수를 이용해서 분산시킨다"
      ],
      "correct": 1,
      "score_group": "C",
      "linked_concept": [
        "LC-08",
        "LC-11"
      ],
      "explanation": "💡 자동차의 옆거울을 봐. 이 거울은 작게 보여서 뒤의 넓은 범위를 다 볼 수 있어. 이게 바로 볼록거울이야. 넓은 범위를 관찰해야 하는 자동차 안전을 위해 쓰여.\n📖 볼록거울의 특징: 항상 작고 바로 선 상. 이 덕분에 넓은 범위를 한 거울에 담을 수 있어.\n🔬 도로 안전거울, 슈퍼마켓 천장 거울 등도 모두 볼록거울이 사용되는 이유다.",
      "wrong_explanations": {
        "0": "💡 안경이 반사를 이용한다고? 안경은 빛이 통과하면서 꺾이는 거야. 반사가 아니라 굴절이야.\n📖 안경은 렌즈(볼록/오목)로 빛의 굴절을 이용해서 초점을 맞춰주는 도구야.\n🔬 안경=굴절, 거울=반사. 둘을 구분하는 게 기본이야.",
        "2": "💡 LED가 굴절로 색을 만든다고? 아니야. LED는 빛의 합성(RGB)을 이용해서 다양한 색을 만드는 거야.\n📖 빨강(R), 초록(G), 파랑(B) 세 가지 빛을 섞어서 원하는 색을 만들어. 굴절과는 관계없어.\n🔬 빛의 합성(RGB) ≠ 빛의 굴절. LED는 전기 에너지를 빛으로 바꾸는 반도체 소자야.",
        "3": "💡 프리즘이 흡수로 분산시킨다고? 아니야. 프리즘은 빛을 굴절시켜서 색을 분리하는 거야.\n📖 백색광이 프리즘을 통과하면 파장에 따라 굴절되는 정도가 달라서 무지개색으로 나뉘어.\n🔬 프리즘=굴절에 의한 분산. 흡수는 검은색 물체에서 일어나는 거야."
      },
      "hint": "자동차의 옆거울로 뒤를 봤을 때 실제보다 작게 보여. 이게 어떤 거울의 특징일까?",
      "scope_out": true
    },
    {
      "id": "L3-E026",
      "type": "choice",
      "instruction": "다음 현상의 원인으로 알맞은 것을 고르시오.",
      "question": "굴절에 의한 일상 현상",
      "options": [
        "물속에 넣은 젓가락이 꺾여 보이는 것은 빛의 반사 때문이다",
        "물속에 넣은 젓가락이 꺾여 보이는 것은 빛의 굴절 때문이다",
        "물속에 넣은 젓가락이 꺾여 보이는 것은 빛의 흡수 때문이다",
        "물속에 넣은 젓가락이 꺾여 보이는 것은 빛의 분산 때문이다"
      ],
      "correct": 1,
      "score_group": "A",
      "linked_concept": [
        "LC-05"
      ],
      "explanation": "💡 물과 공기의 경계에서 빛이 꺾이니까 젓가락도 꺾여 보여!\n📖 굴절: 빛이 서로 다른 물질의 경계를 지날 때 방향이 바뀌는 현상.\n🔬 수영장 바닥이 실제보다 얕아 보이는 것도 같은 원리야.",
      "wrong_explanations": {
        "0": "💡 반사는 거울처럼 빛이 튕겨 나가는 거야. 꺾여 보이는 건 굴절!\n📖 반사 = 빛이 되돌아옴. 굴절 = 빛이 꺾임. 다른 현상이야.",
        "2": "💡 흡수는 빛이 물질에 빨려 들어가는 거야. 젓가락이 사라지나? 아니잖아!\n📖 흡수되면 어두워지지, 꺾여 보이진 않아.",
        "3": "💡 분산은 프리즘처럼 색이 나뉘는 거야. 젓가락에서 무지개 보여? 아니잖아!\n📖 분산 = 백색광이 여러 색으로 나뉘는 현상. 꺾여 보이는 것과는 달라."
      },
      "hint": "물과 공기의 경계에서 빛의 방향이 바뀌는 현상이 뭐였지?",
      "scope_out": true
    },
    {
      "id": "L3-E027",
      "type": "choice",
      "instruction": "법선에 대한 설명으로 옳은 것을 고르시오.",
      "question": "법선의 개념과 각도 측정",
      "options": [
        "법선은 거울 표면과 나란한 선이다",
        "법선은 빛의 진행 방향과 항상 나란한 선이다",
        "법선은 두 물질의 경계면에 수직인 가상의 선이다",
        "법선은 빛이 반사된 후의 경로를 말한다"
      ],
      "correct": 2,
      "score_group": "A",
      "linked_concept": [
        "LC-04",
        "LC-05"
      ],
      "explanation": "💡 법선 = 경계면(거울면, 물 표면 등)에 수직으로 세운 가상의 선. 모든 각도는 이 법선을 기준으로 재!\n📖 입사각 = 입사광선과 법선 사이의 각도. 굴절각 = 굴절광선과 법선 사이의 각도.\n🔬 법선은 실제로 존재하는 선이 아니라 각도를 재기 위한 기준선이야.",
      "wrong_explanations": {
        "0": "💡 거울 표면과 나란한 건 법선이 아니야! 법선은 거울 표면에 수직이야.\n📖 법선과 거울면은 90°를 이뤄.",
        "1": "💡 법선은 빛과 나란한 게 아니라 경계면에 수직인 선이야! 빛의 방향과는 각도를 이루지.\n📖 입사각 = 입사광선과 법선이 이루는 각도.",
        "3": "💡 그건 반사광선이야! 법선은 빛의 경로가 아니라 각도를 재는 기준선이야.\n📖 법선 = 경계면에 수직인 가상의 기준선."
      },
      "hint": "법선 = 경계면에 '수직'인 선. 입사각과 굴절각은 모두 이 법선을 기준으로 잰다.",
      "scope_out": true
    },
    {
      "id": "L3-E028",
      "type": "choice",
      "instruction": "프리즘과 빛의 분산에 대한 설명으로 옳은 것을 고르시오.",
      "question": "프리즘을 통한 빛의 분산",
      "options": [
        "백색광이 프리즘을 통과하면 더 밝은 백색광이 된다",
        "프리즘은 빛을 흡수하여 열로 바꾼다",
        "백색광이 프리즘을 통과하면 여러 가지 색의 빛으로 나뉜다",
        "프리즘은 한 가지 색의 빛만 통과시킨다"
      ],
      "correct": 2,
      "score_group": "B",
      "linked_concept": [
        "LC-09"
      ],
      "explanation": "💡 백색광(햇빛) = 여러 가지 색의 빛이 합쳐진 것. 프리즘에 넣으면 각 색이 꺾이는 정도가 달라서 나뉘어 나와!\n📖 이것을 '빛의 분산'이라고 해. 무지개도 같은 원리야.\n🔬 프리즘 실험: 햇빛 → 프리즘 → 빨주노초파남보 스펙트럼!",
      "wrong_explanations": {
        "0": "💡 프리즘을 통과하면 더 밝아지는 게 아니라 여러 색으로 나뉘어! 에너지가 추가되지 않아.\n📖 프리즘은 빛을 분산시키는 거지, 증폭하는 게 아니야.",
        "1": "💡 프리즘은 빛을 흡수하지 않아! 빛을 통과시키면서 색별로 분리하는 거야.\n📖 투명한 유리 프리즘은 빛을 대부분 통과시켜.",
        "3": "💡 프리즘은 특정 색만 통과시키는 필터가 아니야! 모든 색을 각각 다른 각도로 꺾어서 분리해.\n📖 빛의 분산 = 여러 색의 빛이 각각 다른 정도로 굴절."
      },
      "hint": "햇빛(백색광)을 프리즘에 통과시키면 무지개처럼 여러 색이 나타나.",
      "scope_out": true
    },
    {
      "id": "L3-E029",
      "type": "choice",
      "instruction": "빛의 삼원색에 대한 설명으로 옳은 것을 고르시오.",
      "question": "빛의 삼원색과 합성",
      "options": [
        "빛의 삼원색은 빨간색, 초록색, 파란색이다",
        "빨간색 빛과 초록색 빛을 합하면 파란색이 된다",
        "빛의 삼원색은 빨간색, 노란색, 파란색이다",
        "빛의 삼원색을 모두 합하면 검은색이 된다"
      ],
      "correct": 0,
      "score_group": "A",
      "linked_concept": [
        "LC-11"
      ],
      "explanation": "💡 빛의 삼원색 = 빨강(R) + 초록(G) + 파랑(B). TV나 스마트폰 화면이 이 세 가지 빛으로 모든 색을 만들어!\n📖 빨강+초록=노랑, 빨강+파랑=자홍, 초록+파랑=청록. 셋 다 합하면=백색!\n🔬 주의! 물감의 삼원색(빨강, 노랑, 파랑)과 빛의 삼원색(빨강, 초록, 파랑)은 달라!",
      "wrong_explanations": {
        "1": "💡 빨강+초록=노란색이야! 파란색이 아니야.\n📖 빨강+초록=노랑, 빨강+파랑=자홍, 초록+파랑=청록.",
        "2": "💡 빨강-노랑-파랑은 물감(색료)의 삼원색이야! 빛의 삼원색은 빨강-초록-파랑이야.\n📖 빛의 합성과 물감의 혼합은 다른 원리야!",
        "3": "💡 빛의 삼원색을 모두 합하면 '백색(흰색)'이 돼! 검은색은 빛이 없는 상태야.\n📖 빛의 합성: 색을 합할수록 밝아져(가산 혼합). 물감은 반대로 어두워져(감산 혼합)."
      },
      "hint": "TV 화면 = R(빨강) + G(초록) + B(파랑). 빛은 합치면 밝아져!",
      "scope_out": true
    },
    {
      "id": "L3-E030",
      "type": "choice",
      "instruction": "빛의 합성과 물감의 혼합에 대한 설명으로 옳은 것을 고르시오.",
      "question": "빛의 합성과 물감 혼합의 차이",
      "options": [
        "빛의 삼원색을 모두 합하면 검은색이 된다",
        "물감의 삼원색을 모두 섞으면 흰색이 된다",
        "빛은 합할수록 밝아지고, 물감은 섞을수록 어두워진다",
        "빛의 합성과 물감의 혼합은 같은 원리이다"
      ],
      "correct": 2,
      "score_group": "B",
      "linked_concept": [
        "LC-11"
      ],
      "explanation": "💡 빛은 합치면 밝아지고(가산 혼합), 물감은 섞으면 어두워져(감산 혼합). 정반대야!\n📖 빛 R+G+B = 백색(밝아짐). 물감 빨+노+파 = 거의 검정(어두워짐).\n🔬 TV는 빛의 합성(가산), 미술 시간 물감은 감산 혼합이야.",
      "wrong_explanations": {
        "0": "💡 거꾸로야! 빛의 삼원색을 합하면 '백색(흰색)'이야. 검은색은 빛이 없는 상태!\n📖 빛 = 합칠수록 밝아짐. 검은색은 빛의 합성이 아니라 빛의 부재.",
        "1": "💡 반대야! 물감을 다 섞으면 '거의 검정'이야. 흰색이 아니거든!\n📖 물감은 섞을수록 어두워져. 미술 시간에 물감 다 섞어본 적 있잖아?",
        "3": "💡 정반대 원리야! 빛 = 가산(합치면 밝아짐), 물감 = 감산(섞으면 어두워짐).\n📖 시험에서 가장 자주 틀리는 포인트! 빛과 물감은 다르다고 외워."
      },
      "hint": "빛은 합칠수록 밝아지고, 물감은 섞을수록 어두워진다.",
      "scope_out": true
    },
    {
      "id": "L3-W01",
      "type": "choice",
      "instruction": "파동과 매질의 성질.",
      "question": "파동에 대한 설명으로 옳은 것은?",
      "options": [
        "파동이 전달될 때 매질은 제자리에서 진동하며 함께 이동하지 않는다",
        "파동이 전달되면 매질도 파동을 따라 함께 이동한다",
        "파동은 매질만 이동시키고 에너지는 전달하지 않는다",
        "물결파의 매질은 공기이다"
      ],
      "correct": 0,
      "score_group": "A",
      "linked_concept": [
        "PW-01"
      ],
      "explanation": "💡 매질은 제자리에서 진동만 하고, 전달되는 것은 에너지·정보야.\n📖 물결파의 매질은 물, 소리는 공기, 지진파는 땅.\n🔑 '매질이 함께 이동한다'는 대표 함정!",
      "wrong_explanations": {
        "1": "매질은 제자리 진동만 해. 함께 이동하지 않아.",
        "2": "파동이 전달하는 것은 에너지와 정보야.",
        "3": "물결파의 매질은 물이야."
      },
      "hint": "물 위 나뭇잎은 제자리에서 까딱까딱."
    },
    {
      "id": "L3-W02",
      "type": "choice",
      "instruction": "파동의 요소 정의.",
      "question": "파동의 요소에 대한 설명으로 옳은 것은?",
      "options": [
        "파장은 이웃한 마루에서 마루까지(또는 골에서 골까지)의 거리이다",
        "파장은 마루에서 골까지의 거리이다",
        "진폭은 마루에서 이웃한 마루까지의 거리이다",
        "마루는 파동의 가장 낮은 곳이다"
      ],
      "correct": 0,
      "score_group": "A",
      "linked_concept": [
        "PW-02"
      ],
      "explanation": "💡 파장은 같은 위치끼리(마루~마루, 골~골)의 거리야.\n📖 진폭은 진동 중심에서 마루(또는 골)까지의 거리.\n🔑 마루~골은 파장의 절반!",
      "wrong_explanations": {
        "1": "마루에서 골까지는 파장의 절반이야.",
        "2": "마루~마루 거리는 진폭이 아니라 파장이야.",
        "3": "마루는 가장 높은 곳, 골이 가장 낮은 곳."
      },
      "hint": "같은 위치끼리 재는 게 파장."
    },
    {
      "id": "L3-W03",
      "type": "choice",
      "instruction": "진동수와 주기 계산.",
      "question": "어떤 파동이 1초 동안 2번 진동했다. 이 파동에 대한 설명으로 옳은 것은?",
      "options": [
        "진동수는 2 Hz이고 주기는 0.5초이다",
        "진동수는 0.5 Hz이고 주기는 2초이다",
        "진동수는 2 Hz이고 주기는 2초이다",
        "진동수의 단위는 m이다"
      ],
      "correct": 0,
      "score_group": "B",
      "linked_concept": [
        "PW-03"
      ],
      "explanation": "💡 진동수=1초당 진동 횟수=2 Hz.\n📖 주기=한 번 진동에 걸리는 시간=1÷2=0.5초.\n🔑 진동수와 주기는 서로 역수 관계.",
      "wrong_explanations": {
        "1": "1초에 2번이면 진동수는 2 Hz야.",
        "2": "주기는 1÷진동수=0.5초.",
        "3": "진동수의 단위는 Hz(헤르츠)야."
      },
      "hint": "1초에 몇 번? 그리고 그 역수."
    },
    {
      "id": "L3-W04",
      "type": "choice",
      "instruction": "파동 그래프에서 진폭·파장 읽기.",
      "question": "위 그래프에서 이 파동의 진폭과 파장으로 옳은 것은?",
      "sentence": "가로축은 거리(cm), 세로축은 변위(cm)이다.",
      "visual_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 200\" width=\"360\" height=\"200\"><line x1=\"45\" y1=\"40\" x2=\"45\" y2=\"170\" stroke=\"#555\" stroke-width=\"1.5\"/><line x1=\"45\" y1=\"100\" x2=\"305\" y2=\"100\" stroke=\"#555\" stroke-width=\"1.5\"/><line x1=\"75\" y1=\"97\" x2=\"75\" y2=\"103\" stroke=\"#bbb\" stroke-width=\"1\"/><line x1=\"105\" y1=\"97\" x2=\"105\" y2=\"103\" stroke=\"#bbb\" stroke-width=\"1\"/><text x=\"105\" y=\"115\" font-size=\"10\" fill=\"#888\" text-anchor=\"middle\">2</text><line x1=\"135\" y1=\"97\" x2=\"135\" y2=\"103\" stroke=\"#bbb\" stroke-width=\"1\"/><line x1=\"165\" y1=\"97\" x2=\"165\" y2=\"103\" stroke=\"#bbb\" stroke-width=\"1\"/><text x=\"165\" y=\"115\" font-size=\"10\" fill=\"#888\" text-anchor=\"middle\">4</text><line x1=\"195\" y1=\"97\" x2=\"195\" y2=\"103\" stroke=\"#bbb\" stroke-width=\"1\"/><line x1=\"225\" y1=\"97\" x2=\"225\" y2=\"103\" stroke=\"#bbb\" stroke-width=\"1\"/><text x=\"225\" y=\"115\" font-size=\"10\" fill=\"#888\" text-anchor=\"middle\">6</text><line x1=\"255\" y1=\"97\" x2=\"255\" y2=\"103\" stroke=\"#bbb\" stroke-width=\"1\"/><line x1=\"285\" y1=\"97\" x2=\"285\" y2=\"103\" stroke=\"#bbb\" stroke-width=\"1\"/><text x=\"285\" y=\"115\" font-size=\"10\" fill=\"#888\" text-anchor=\"middle\">8</text><line x1=\"42\" y1=\"60\" x2=\"48\" y2=\"60\" stroke=\"#bbb\" stroke-width=\"1\"/><text x=\"39\" y=\"64\" font-size=\"10\" fill=\"#888\" text-anchor=\"end\">2</text><line x1=\"42\" y1=\"140\" x2=\"48\" y2=\"140\" stroke=\"#bbb\" stroke-width=\"1\"/><text x=\"39\" y=\"144\" font-size=\"10\" fill=\"#888\" text-anchor=\"end\">-2</text><path d=\"M 45.0,100.0 L 48.0,93.7 L 51.0,87.6 L 54.0,81.8 L 57.0,76.5 L 60.0,71.7 L 63.0,67.6 L 66.0,64.4 L 69.0,62.0 L 72.0,60.5 L 75.0,60.0 L 78.0,60.5 L 81.0,62.0 L 84.0,64.4 L 87.0,67.6 L 90.0,71.7 L 93.0,76.5 L 96.0,81.8 L 99.0,87.6 L 102.0,93.7 L 105.0,100.0 L 108.0,106.3 L 111.0,112.4 L 114.0,118.2 L 117.0,123.5 L 120.0,128.3 L 123.0,132.4 L 126.0,135.6 L 129.0,138.0 L 132.0,139.5 L 135.0,140.0 L 138.0,139.5 L 141.0,138.0 L 144.0,135.6 L 147.0,132.4 L 150.0,128.3 L 153.0,123.5 L 156.0,118.2 L 159.0,112.4 L 162.0,106.3 L 165.0,100.0 L 168.0,93.7 L 171.0,87.6 L 174.0,81.8 L 177.0,76.5 L 180.0,71.7 L 183.0,67.6 L 186.0,64.4 L 189.0,62.0 L 192.0,60.5 L 195.0,60.0 L 198.0,60.5 L 201.0,62.0 L 204.0,64.4 L 207.0,67.6 L 210.0,71.7 L 213.0,76.5 L 216.0,81.8 L 219.0,87.6 L 222.0,93.7 L 225.0,100.0 L 228.0,106.3 L 231.0,112.4 L 234.0,118.2 L 237.0,123.5 L 240.0,128.3 L 243.0,132.4 L 246.0,135.6 L 249.0,138.0 L 252.0,139.5 L 255.0,140.0 L 258.0,139.5 L 261.0,138.0 L 264.0,135.6 L 267.0,132.4 L 270.0,128.3 L 273.0,123.5 L 276.0,118.2 L 279.0,112.4 L 282.0,106.3 L 285.0,100.0\" fill=\"none\" stroke=\"#1565C0\" stroke-width=\"2.5\"/><text x=\"300\" y=\"130\" font-size=\"11\" fill=\"#555\" text-anchor=\"end\">거리(cm)</text><text x=\"45\" y=\"34\" font-size=\"11\" fill=\"#555\" text-anchor=\"middle\">변위(cm)</text></svg>",
      "options": [
        "진폭 2 cm, 파장 4 cm",
        "진폭 4 cm, 파장 2 cm",
        "진폭 2 cm, 파장 2 cm",
        "진폭 4 cm, 파장 4 cm"
      ],
      "correct": 0,
      "score_group": "B",
      "linked_concept": [
        "PW-02"
      ],
      "explanation": "💡 진폭=진동 중심에서 마루까지=2 cm.\n📖 파장=이웃한 마루에서 마루까지=4 cm.\n🔑 가로축이 '거리'이므로 마루 간격이 파장. (시간축이면 주기)",
      "wrong_explanations": {
        "1": "진폭과 파장이 바뀌었어.",
        "2": "파장은 마루~마루=4 cm야.",
        "3": "진폭은 중심에서 마루까지=2 cm야."
      },
      "hint": "진폭=중심에서 마루, 파장=마루에서 마루."
    },
    {
      "id": "L3-W05",
      "type": "choice",
      "instruction": "소리의 3요소 매칭.",
      "question": "소리의 3요소와 그것을 결정하는 요인을 옳게 짝지은 것은?",
      "options": [
        "소리의 세기 — 진폭",
        "소리의 높낮이 — 진폭",
        "소리의 세기 — 진동수",
        "음색 — 진동수"
      ],
      "correct": 0,
      "score_group": "A",
      "linked_concept": [
        "PW-05"
      ],
      "explanation": "💡 세기는 진폭, 높낮이는 진동수, 음색은 파형으로 정해져.\n📖 진폭이 클수록 큰 소리, 진동수가 클수록 높은 소리.\n🔑 진폭·진동수가 같아도 파형 다르면 음색이 달라.",
      "wrong_explanations": {
        "1": "높낮이는 진동수로 정해져.",
        "2": "세기는 진폭으로 정해져.",
        "3": "음색은 파형으로 정해져."
      },
      "hint": "큰 소리=크게 흔들림(진폭)."
    },
    {
      "id": "L3-W06",
      "type": "choice",
      "instruction": "소리의 전달.",
      "question": "소리(음파)에 대한 설명으로 옳은 것은?",
      "options": [
        "소리는 매질이 없는 진공에서는 전달되지 않는다",
        "소리는 진공에서 방해물이 없어 더 크게 들린다",
        "소리는 고체에서는 전달되지 않는다",
        "소리는 물체의 진동 없이도 발생한다"
      ],
      "correct": 0,
      "score_group": "A",
      "linked_concept": [
        "PW-04"
      ],
      "explanation": "💡 소리는 기체·액체·고체 같은 매질을 통해 전달돼.\n📖 매질이 없는 진공에서는 전달되지 않아.\n🔑 소리는 물체의 진동으로 발생!",
      "wrong_explanations": {
        "1": "진공에서는 소리가 전달 자체가 안 돼.",
        "2": "고체에서도 소리는 잘 전달돼.",
        "3": "소리는 물체의 진동으로 발생해."
      },
      "hint": "우주(진공)에선 소리가 안 들려."
    },
    {
      "id": "L3-W07",
      "type": "choice",
      "instruction": "줄의 조건과 소리의 높낮이.",
      "question": "기타 줄을 더 팽팽하고 짧게 하여 소리를 냈다. 이 소리에 대한 설명으로 옳은 것은?",
      "options": [
        "진동수가 커져 높은 소리가 난다",
        "진동수가 작아져 낮은 소리가 난다",
        "진폭이 커져 큰 소리가 난다",
        "음색만 달라지고 높낮이는 같다"
      ],
      "correct": 0,
      "score_group": "B",
      "linked_concept": [
        "PW-03",
        "PW-05"
      ],
      "explanation": "💡 줄이 팽팽하고 짧으면 빠르게 진동(진동수↑) → 높은 소리.\n📖 진동수가 클수록 높은 소리, 파장은 짧아져.\n🔑 높낮이는 진동수가 결정.",
      "wrong_explanations": {
        "1": "팽팽·짧으면 진동수가 커져(높은 소리).",
        "2": "세기(진폭)는 줄을 튕기는 세기로 정해져.",
        "3": "높낮이(진동수)가 달라져."
      },
      "hint": "가늘고 팽팽한 줄=높은 음."
    },
    {
      "id": "L3-W08",
      "type": "choice",
      "instruction": "파동의 이용 구분.",
      "question": "파동의 이용을 '에너지 전달'과 '정보 전달'로 구분할 때, 주로 에너지를 전달하는 예로 옳은 것은?",
      "options": [
        "전자레인지로 음식을 데운다",
        "교통카드를 단말기에 인식시킨다",
        "초음파로 배 속 아기를 검사한다",
        "라디오 방송을 듣는다"
      ],
      "correct": 0,
      "score_group": "B",
      "linked_concept": [
        "PW-06"
      ],
      "explanation": "💡 에너지 전달 예=전자레인지·초음파 치료·파력 발전.\n📖 정보 전달 예=교통카드·초음파 검사·방송.\n🔑 '데운다/깬다/발전'은 에너지, '인식/검사/방송'은 정보.",
      "wrong_explanations": {
        "1": "교통카드는 정보 전달이야.",
        "2": "초음파 검사는 정보 전달(치료는 에너지).",
        "3": "방송은 정보 전달이야."
      },
      "hint": "데우는 건 에너지."
    },
    {
      "id": "L3-W09",
      "type": "choice",
      "instruction": "파동의 예 판별.",
      "question": "다음 중 파동의 예에 해당하는 것만을 옳게 고른 것은?",
      "sentence": "ㄱ. 지진파에 의해 건물이 흔들린다\nㄴ. 와이파이로 동영상을 본다\nㄷ. 형광등 스위치를 켜자 불이 들어온다\nㄹ. 물을 끓이면 주전자 속 물이 위로 올라간다",
      "options": [
        "ㄱ, ㄴ",
        "ㄱ, ㄷ",
        "ㄴ, ㄷ",
        "ㄴ, ㄹ",
        "ㄷ, ㄹ"
      ],
      "correct": 0,
      "score_group": "B",
      "linked_concept": [
        "PW-01"
      ],
      "explanation": "💡 파동은 진동이 퍼져 나가는 현상 — 지진파·와이파이(전파)는 파동이야.\n📖 ㄷ 전류는 전기 현상, ㄹ 물 분자가 직접 이동하는 대류 — 둘 다 파동이 아니야.\n🔑 전류·대류는 파동이 아니다(함정).",
      "wrong_explanations": {
        "1": "ㄷ 전류는 파동이 아니야.",
        "2": "ㄹ 대류는 물 분자가 직접 이동 — 파동이 아니야.",
        "3": "ㄴ만 파동, ㄹ 대류는 아니야.",
        "4": "ㄷ 전류·ㄹ 대류 모두 파동이 아니야."
      },
      "hint": "전류와 대류는 파동이 아니야."
    },
    {
      "id": "L3-W10",
      "type": "choice",
      "instruction": "파동의 이용 판별.",
      "question": "다음 중 파동을 이용한 예로 보기 어려운 것은?",
      "options": [
        "튜브를 이용해 바다 위에 떠 있는다",
        "초음파로 물고기 떼의 위치를 알아낸다",
        "무선 인터넷 신호로 자료를 주고받는다",
        "지진파의 에너지로 건물이 무너진다",
        "전파 망원경으로 먼 천체를 관측한다"
      ],
      "correct": 0,
      "score_group": "B",
      "linked_concept": [
        "PW-06"
      ],
      "explanation": "💡 튜브로 물에 뜨는 것은 부력을 이용한 것 — 파동과 무관해.\n📖 나머지는 초음파·전파·지진파 등 파동의 이용이야.\n🔑 부력 ≠ 파동.",
      "wrong_explanations": {
        "1": "초음파(파동)로 위치를 탐지해.",
        "2": "무선 신호는 전파(파동)야.",
        "3": "지진파는 파동의 에너지 전달이야.",
        "4": "전파(파동)로 천체를 관측해."
      },
      "hint": "물에 뜨는 건 부력이야."
    },
    {
      "id": "L3-W11",
      "type": "choice",
      "instruction": "파동의 성질(틀린 것 고르기).",
      "question": "파동에 대한 설명으로 옳지 않은 것은?",
      "options": [
        "파동이 전파되려면 반드시 매질이 필요하다",
        "한곳의 떨림이 주위로 퍼져 나가는 현상이다",
        "파동을 전달하는 물질을 매질이라고 한다",
        "파동이 전달될 때 매질은 제자리에서 진동한다",
        "파동이 전달될 때 이동하는 것은 에너지이다"
      ],
      "correct": 0,
      "score_group": "B",
      "linked_concept": [
        "PW-01",
        "PW-04"
      ],
      "explanation": "💡 빛(전자기파)은 매질이 없어도 전파돼 — '반드시 매질이 필요'는 틀려.\n📖 소리는 매질이 필요하지만 빛은 진공에서도 전달돼.\n🔑 매질 없이 전달되는 파동도 있다(빛).",
      "wrong_explanations": {
        "1": "파동의 정의로 옳은 설명이야.",
        "2": "매질의 정의로 옳은 설명이야.",
        "3": "매질은 제자리 진동 — 옳은 설명이야.",
        "4": "전달되는 것은 에너지 — 옳은 설명이야."
      },
      "hint": "빛은 우주(진공)도 지나오잖아."
    },
    {
      "id": "L3-W12",
      "type": "choice",
      "instruction": "파동과 매질의 연결(틀린 것 고르기).",
      "question": "파동과 그 매질의 연결로 옳지 않은 것은?",
      "options": [
        "소리 — 진공",
        "물결파 — 물",
        "지진파 — 땅(지각)",
        "용수철 파동 — 용수철",
        "빛 — 매질이 필요 없음"
      ],
      "correct": 0,
      "score_group": "A",
      "linked_concept": [
        "PW-04"
      ],
      "explanation": "💡 소리의 매질은 기체·액체·고체야. 진공은 매질이 아니라서 소리가 전달 안 돼.\n📖 물결파=물, 지진파=땅, 빛=매질 불필요.\n🔑 '소리 — 진공' 연결이 틀림.",
      "wrong_explanations": {
        "1": "물결파의 매질은 물 — 옳아.",
        "2": "지진파는 땅을 통해 전달 — 옳아.",
        "3": "용수철 파동의 매질은 용수철 — 옳아.",
        "4": "빛은 매질 없이 전달 — 옳아."
      },
      "hint": "진공은 매질이 아니야."
    },
    {
      "id": "L3-W13",
      "type": "choice",
      "instruction": "소리가 다른 원인(다른 하나 찾기).",
      "question": "소리가 다르게 들리는 원인이 나머지 넷과 다른 하나는?",
      "options": [
        "실로폰의 '도'와 피아노의 '도'가 다르게 들린다",
        "남자 목소리가 여자 목소리보다 낮다",
        "가는 기타 줄일수록 진동수가 커진다",
        "피아노 오른쪽 건반이 왼쪽보다 높은 소리가 난다",
        "유리잔에 물이 많을수록 낮은 소리가 난다"
      ],
      "correct": 0,
      "score_group": "B",
      "linked_concept": [
        "PW-05"
      ],
      "explanation": "💡 실로폰·피아노의 같은 '도'가 다르게 들리는 건 음색(파형) 차이야.\n📖 나머지는 모두 높낮이(진동수) 차이.\n🔑 음색=파형, 높낮이=진동수.",
      "wrong_explanations": {
        "1": "이건 높낮이(진동수) 차이야.",
        "2": "줄 굵기에 따른 높낮이(진동수) 차이야.",
        "3": "건반 위치에 따른 높낮이(진동수) 차이야.",
        "4": "물 양에 따른 높낮이(진동수) 차이야."
      },
      "hint": "같은 음이 악기마다 다른 이유는?"
    },
    {
      "id": "L3-W14",
      "type": "choice",
      "instruction": "소리의 세기와 진폭.",
      "question": "스피커의 볼륨을 줄이면 소리가 작아지는 까닭으로 옳은 것은?",
      "options": [
        "소리의 진폭이 작아지기 때문",
        "소리의 진폭이 커지기 때문",
        "소리의 진동수가 작아지기 때문",
        "소리의 음색이 달라지기 때문",
        "진폭이 작아지고 진동수도 커지기 때문"
      ],
      "correct": 0,
      "score_group": "A",
      "linked_concept": [
        "PW-05"
      ],
      "explanation": "💡 소리의 세기(크기)는 진폭이 결정해 — 볼륨을 줄이면 진폭이 작아져.\n📖 이때 진동수(높낮이)는 변하지 않아.\n🔑 세기=진폭.",
      "wrong_explanations": {
        "1": "진폭이 커지면 더 큰 소리가 나.",
        "2": "진동수는 높낮이를 결정해(크기와 무관).",
        "3": "음색은 소리의 맵시야(크기와 무관).",
        "4": "진동수는 변하지 않아."
      },
      "hint": "큰 소리 = 크게 흔들림."
    },
    {
      "id": "L3-W15",
      "type": "choice",
      "instruction": "진동수와 진폭의 독립성.",
      "question": "피아노에서 낮은 '도'부터 높은 '도'까지 같은 세기로 차례로 눌렀다. 진동수와 진폭의 변화로 옳은 것은?",
      "options": [
        "진동수는 커지고, 진폭은 변하지 않는다",
        "진동수는 작아지고, 진폭은 커진다",
        "진동수와 진폭이 모두 커진다",
        "진동수는 변하지 않고, 진폭만 커진다",
        "진동수는 커지고, 진폭은 작아진다"
      ],
      "correct": 0,
      "score_group": "B",
      "linked_concept": [
        "PW-03",
        "PW-05"
      ],
      "explanation": "💡 낮은 음→높은 음은 진동수가 커지는 거야.\n📖 '같은 세기'로 눌렀으니 진폭(세기)은 변하지 않아.\n🔑 높낮이=진동수, 세기=진폭은 서로 독립.",
      "wrong_explanations": {
        "1": "높은 음일수록 진동수는 커져.",
        "2": "같은 세기라 진폭은 그대로야.",
        "3": "진폭은 세기로 정해져 — 같은 세기면 불변.",
        "4": "진동수가 커지고 진폭은 불변이야."
      },
      "hint": "음 높이는 진동수, 세기는 진폭(따로)."
    },
    {
      "id": "L3-W16",
      "type": "choice",
      "instruction": "소리의 전달과 매질(실생활).",
      "question": "층간 소음을 줄이는 방법으로 옳은 것만을 고른 것은?",
      "sentence": "ㄱ. 집 안 온도를 더 높인다\nㄴ. 바닥에 두꺼운 매트를 깐다\nㄷ. 실내에서 슬리퍼를 신는다",
      "options": [
        "ㄴ, ㄷ",
        "ㄱ, ㄴ",
        "ㄱ, ㄷ",
        "ㄱ, ㄴ, ㄷ",
        "ㄴ만"
      ],
      "correct": 0,
      "score_group": "B",
      "linked_concept": [
        "PW-04"
      ],
      "explanation": "💡 두꺼운 매트·슬리퍼는 바닥의 진동(소리) 전달을 줄여줘.\n📖 ㄱ 집 안 온도를 높이는 것은 층간소음을 줄이는 방법이 아니야.\n🔑 소음을 줄이려면 진동 전달을 막아야 해.",
      "wrong_explanations": {
        "1": "ㄱ 온도 높이기는 층간소음 저감과 관계없어.",
        "2": "ㄱ이 포함되어 틀려.",
        "3": "ㄱ이 포함되어 틀려.",
        "4": "ㄷ 슬리퍼도 효과가 있어(ㄴ만으로는 부족)."
      },
      "hint": "온도 높이기는 소음 해결책이 아니야."
    },
    {
      "id": "L3-W17",
      "type": "choice",
      "instruction": "두 소리의 파형 비교.",
      "question": "그림은 두 소리 (가), (나)의 파형이다. 이에 대한 설명으로 옳은 것은?",
      "sentence": "가로축은 시간, 세로축은 변위이다.",
      "visual_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 225\" width=\"360\" height=\"225\"><line x1=\"60\" y1=\"65\" x2=\"330\" y2=\"65\" stroke=\"#ccc\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><line x1=\"60\" y1=\"165\" x2=\"330\" y2=\"165\" stroke=\"#ccc\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><path d=\"M 60.0,65.0 L 61.5,63.0 L 63.0,61.1 L 64.5,59.2 L 66.0,57.3 L 67.5,55.4 L 69.0,53.6 L 70.5,51.9 L 72.0,50.2 L 73.5,48.5 L 75.0,47.0 L 76.5,45.5 L 78.0,44.2 L 79.5,42.9 L 81.0,41.8 L 82.5,40.8 L 84.0,39.8 L 85.5,39.0 L 87.0,38.4 L 88.5,37.8 L 90.0,37.4 L 91.5,37.2 L 93.0,37.0 L 94.5,37.0 L 96.0,37.2 L 97.5,37.4 L 99.0,37.8 L 100.5,38.4 L 102.0,39.0 L 103.5,39.8 L 105.0,40.8 L 106.5,41.8 L 108.0,42.9 L 109.5,44.2 L 111.0,45.5 L 112.5,47.0 L 114.0,48.5 L 115.5,50.2 L 117.0,51.9 L 118.5,53.6 L 120.0,55.4 L 121.5,57.3 L 123.0,59.2 L 124.5,61.1 L 126.0,63.0 L 127.5,65.0 L 129.0,67.0 L 130.5,68.9 L 132.0,70.8 L 133.5,72.7 L 135.0,74.6 L 136.5,76.4 L 138.0,78.1 L 139.5,79.8 L 141.0,81.5 L 142.5,83.0 L 144.0,84.5 L 145.5,85.8 L 147.0,87.1 L 148.5,88.2 L 150.0,89.2 L 151.5,90.2 L 153.0,91.0 L 154.5,91.6 L 156.0,92.2 L 157.5,92.6 L 159.0,92.8 L 160.5,93.0 L 162.0,93.0 L 163.5,92.8 L 165.0,92.6 L 166.5,92.2 L 168.0,91.6 L 169.5,91.0 L 171.0,90.2 L 172.5,89.2 L 174.0,88.2 L 175.5,87.1 L 177.0,85.8 L 178.5,84.5 L 180.0,83.0 L 181.5,81.5 L 183.0,79.8 L 184.5,78.1 L 186.0,76.4 L 187.5,74.6 L 189.0,72.7 L 190.5,70.8 L 192.0,68.9 L 193.5,67.0 L 195.0,65.0 L 196.5,63.0 L 198.0,61.1 L 199.5,59.2 L 201.0,57.3 L 202.5,55.4 L 204.0,53.6 L 205.5,51.9 L 207.0,50.2 L 208.5,48.5 L 210.0,47.0 L 211.5,45.5 L 213.0,44.2 L 214.5,42.9 L 216.0,41.8 L 217.5,40.8 L 219.0,39.8 L 220.5,39.0 L 222.0,38.4 L 223.5,37.8 L 225.0,37.4 L 226.5,37.2 L 228.0,37.0 L 229.5,37.0 L 231.0,37.2 L 232.5,37.4 L 234.0,37.8 L 235.5,38.4 L 237.0,39.0 L 238.5,39.8 L 240.0,40.8 L 241.5,41.8 L 243.0,42.9 L 244.5,44.2 L 246.0,45.5 L 247.5,47.0 L 249.0,48.5 L 250.5,50.2 L 252.0,51.9 L 253.5,53.6 L 255.0,55.4 L 256.5,57.3 L 258.0,59.2 L 259.5,61.1 L 261.0,63.0 L 262.5,65.0 L 264.0,67.0 L 265.5,68.9 L 267.0,70.8 L 268.5,72.7 L 270.0,74.6 L 271.5,76.4 L 273.0,78.1 L 274.5,79.8 L 276.0,81.5 L 277.5,83.0 L 279.0,84.5 L 280.5,85.8 L 282.0,87.1 L 283.5,88.2 L 285.0,89.2 L 286.5,90.2 L 288.0,91.0 L 289.5,91.6 L 291.0,92.2 L 292.5,92.6 L 294.0,92.8 L 295.5,93.0 L 297.0,93.0 L 298.5,92.8 L 300.0,92.6 L 301.5,92.2 L 303.0,91.6 L 304.5,91.0 L 306.0,90.2 L 307.5,89.2 L 309.0,88.2 L 310.5,87.1 L 312.0,85.8 L 313.5,84.5 L 315.0,83.0 L 316.5,81.5 L 318.0,79.8 L 319.5,78.1 L 321.0,76.4 L 322.5,74.6 L 324.0,72.7 L 325.5,70.8 L 327.0,68.9 L 328.5,67.0 L 330.0,65.0\" fill=\"none\" stroke=\"#1565C0\" stroke-width=\"2.5\"/><path d=\"M 60.0,165.0 L 61.5,161.1 L 63.0,157.3 L 64.5,153.6 L 66.0,150.2 L 67.5,147.0 L 69.0,144.2 L 70.5,141.8 L 72.0,139.8 L 73.5,138.4 L 75.0,137.4 L 76.5,137.0 L 78.0,137.2 L 79.5,137.8 L 81.0,139.0 L 82.5,140.8 L 84.0,142.9 L 85.5,145.5 L 87.0,148.5 L 88.5,151.9 L 90.0,155.4 L 91.5,159.2 L 93.0,163.0 L 94.5,167.0 L 96.0,170.8 L 97.5,174.6 L 99.0,178.1 L 100.5,181.5 L 102.0,184.5 L 103.5,187.1 L 105.0,189.2 L 106.5,191.0 L 108.0,192.2 L 109.5,192.8 L 111.0,193.0 L 112.5,192.6 L 114.0,191.6 L 115.5,190.2 L 117.0,188.2 L 118.5,185.8 L 120.0,183.0 L 121.5,179.8 L 123.0,176.4 L 124.5,172.7 L 126.0,168.9 L 127.5,165.0 L 129.0,161.1 L 130.5,157.3 L 132.0,153.6 L 133.5,150.2 L 135.0,147.0 L 136.5,144.2 L 138.0,141.8 L 139.5,139.8 L 141.0,138.4 L 142.5,137.4 L 144.0,137.0 L 145.5,137.2 L 147.0,137.8 L 148.5,139.0 L 150.0,140.8 L 151.5,142.9 L 153.0,145.5 L 154.5,148.5 L 156.0,151.9 L 157.5,155.4 L 159.0,159.2 L 160.5,163.0 L 162.0,167.0 L 163.5,170.8 L 165.0,174.6 L 166.5,178.1 L 168.0,181.5 L 169.5,184.5 L 171.0,187.1 L 172.5,189.2 L 174.0,191.0 L 175.5,192.2 L 177.0,192.8 L 178.5,193.0 L 180.0,192.6 L 181.5,191.6 L 183.0,190.2 L 184.5,188.2 L 186.0,185.8 L 187.5,183.0 L 189.0,179.8 L 190.5,176.4 L 192.0,172.7 L 193.5,168.9 L 195.0,165.0 L 196.5,161.1 L 198.0,157.3 L 199.5,153.6 L 201.0,150.2 L 202.5,147.0 L 204.0,144.2 L 205.5,141.8 L 207.0,139.8 L 208.5,138.4 L 210.0,137.4 L 211.5,137.0 L 213.0,137.2 L 214.5,137.8 L 216.0,139.0 L 217.5,140.8 L 219.0,142.9 L 220.5,145.5 L 222.0,148.5 L 223.5,151.9 L 225.0,155.4 L 226.5,159.2 L 228.0,163.0 L 229.5,167.0 L 231.0,170.8 L 232.5,174.6 L 234.0,178.1 L 235.5,181.5 L 237.0,184.5 L 238.5,187.1 L 240.0,189.2 L 241.5,191.0 L 243.0,192.2 L 244.5,192.8 L 246.0,193.0 L 247.5,192.6 L 249.0,191.6 L 250.5,190.2 L 252.0,188.2 L 253.5,185.8 L 255.0,183.0 L 256.5,179.8 L 258.0,176.4 L 259.5,172.7 L 261.0,168.9 L 262.5,165.0 L 264.0,161.1 L 265.5,157.3 L 267.0,153.6 L 268.5,150.2 L 270.0,147.0 L 271.5,144.2 L 273.0,141.8 L 274.5,139.8 L 276.0,138.4 L 277.5,137.4 L 279.0,137.0 L 280.5,137.2 L 282.0,137.8 L 283.5,139.0 L 285.0,140.8 L 286.5,142.9 L 288.0,145.5 L 289.5,148.5 L 291.0,151.9 L 292.5,155.4 L 294.0,159.2 L 295.5,163.0 L 297.0,167.0 L 298.5,170.8 L 300.0,174.6 L 301.5,178.1 L 303.0,181.5 L 304.5,184.5 L 306.0,187.1 L 307.5,189.2 L 309.0,191.0 L 310.5,192.2 L 312.0,192.8 L 313.5,193.0 L 315.0,192.6 L 316.5,191.6 L 318.0,190.2 L 319.5,188.2 L 321.0,185.8 L 322.5,183.0 L 324.0,179.8 L 325.5,176.4 L 327.0,172.7 L 328.5,168.9 L 330.0,165.0\" fill=\"none\" stroke=\"#E65100\" stroke-width=\"2.5\"/><text x=\"28\" y=\"70\" font-size=\"15\" fill=\"#1565C0\" font-weight=\"bold\" text-anchor=\"middle\">(가)</text><text x=\"28\" y=\"170\" font-size=\"15\" fill=\"#E65100\" font-weight=\"bold\" text-anchor=\"middle\">(나)</text><text x=\"195\" y=\"215\" font-size=\"12\" fill=\"#555\" text-anchor=\"middle\">시간 →</text></svg>",
      "options": [
        "(나)가 (가)보다 높은 소리이다",
        "(가)가 (나)보다 높은 소리이다",
        "(나)가 (가)보다 큰 소리이다",
        "(가)가 (나)보다 큰 소리이다"
      ],
      "correct": 0,
      "score_group": "B",
      "linked_concept": [
        "PW-05"
      ],
      "explanation": "💡 (나)는 같은 시간에 더 많이 진동 → 진동수가 커 높은 소리.\n📖 두 파형의 진폭이 같으므로 소리의 크기(세기)는 같아.\n🔑 높낮이=진동수(파형의 촘촘함), 크기=진폭(높이).",
      "wrong_explanations": {
        "1": "마루가 더 촘촘한 (나)가 높은 소리야.",
        "2": "진폭이 같아 크기는 같아(높낮이가 다른 것).",
        "3": "진폭이 같으니 크기도 같아."
      },
      "hint": "촘촘할수록(진동수↑) 높은 소리."
    }
  ],
  "lesson": "sci3"
});
