// v180 (2026-07-12): 2차 필수어휘 트랙 — lesson_ess.js 신규(교육부 2022 기본어휘 **표 교과서외 100단어). index lesson-btn '필수'(selectLesson('ess'))+LESSON_VERSIONS lesson_ess=ess-1.0. 신규 lesson=PRECACHE 미등재(network-first). CACHE_NAME v179->v180, APP_CACHE_NAME 동반.
// v179 (2026-07-12): 2학기 영어 단어트랙 — lesson5~8.js 신규(천재 Word List L5~L8+Special 187어, unit 태깅, 이미지판독 검증). index lesson-btn 5~8(기본 L5)+flex-wrap, LESSON_VERSIONS lesson5~8 등재. 신규 lesson 파일은 PRECACHE 미등재(network-first). index 버튼/기본진입 변경 전파 위해 CACHE_NAME v178->v179 범프. APP_CACHE_NAME 동반.
// v175 (2026-06-28): 영어 시험 수행(exam_perf) 갭 보강 — 기출 정합 점검=조건부 GO, 어휘의미·제목 유형 갭 보강. lesson2 +2(M-SYN-L2-01/02 어휘동의 match 선택형 4지)·lesson4 +4(M-SYN-L4-01/02 어휘동의 + Q-TITLE-L4-001/002 제목 short_reading 5지). 기존 audited 학습문항에 exam_perf_variants 부착(신규 작성 0). 전부 단일정답(correct=숫자, answer_indices 미사용). 풀 L2 16->18·L4 16->20. lesson2/4 PRECACHE 등재라 CACHE_NAME v174->v175 범프 필수. 영어 lesson은 LESSON_VERSIONS 미등재→APP_CACHE_NAME fallback 캐시버스팅. APP_CACHE_NAME v174->v175. 캐시 강제 갱신용.
// v174 (2026-06-27): 국어 시험 수행(exam_perf) 활성 — kor2 10문항(피동·인용·매체)·kor3 9문항(설명·논증·고쳐쓰기·요약) (〈보기〉ㄱㄴㄷ 조합형 5지선다 + 단일발문 4지→5지 변환; Codex P1 인용축·P2 요약 보강 반영). 실제 영동중 1학기 중간국어 형식(29문·100점·전부 5지선다·정답 2개 5문·보기 heavy) 반영. 복수정답형은 〈보기〉조합형 단일정답(correct=숫자)으로 변환, answer_indices 미사용(short_reading 단일채점 경로 정합). 모든 진술은 기존 audited exam_prep에서만 재조합(새 사실 0). lesson_kor2/3 PRECACHE 등재라 CACHE_NAME v173->v174 범프 필수. index LESSON_VERSIONS k2-1.6->1.7/k3-1.4->1.5 + APP_CACHE_NAME v173->v174. 캐시 강제 갱신용.
// v173 (2026-06-27): 사회 시험 수행(exam_perf) 활성 — soc3/soc4 exam_prep 기존 audited 문항에 exam_perf_variants 부착(단원당 8). 1학기 중간고사(사회) 형식 분석 필터: 단일발문 중심+짝짓기+〈보기〉조합형(비과비중)+순서, 5지선다 단일정답만. 신규 작성 0(재사용), correct=숫자(answer_indices/multi_answer 미사용 → checkStudyChoice Array.isArray 경로 정합). lesson_soc3/4 PRECACHE 등재라 CACHE_NAME v172->v173 범프 필수. index LESSON_VERSIONS soc3-1.1/soc4-1.1 추가 + APP_CACHE_NAME v172->v173. 캐시 강제 갱신용.
// v172 (2026-06-27): 과학 시험수행(exam_perf) 활성 — sci2/3/4 exam_prep에 〈보기〉ㄱㄴㄷ 조합형 4문항(옳은것/옳지않은것 조합, 모두 단일정답·5지선다)+기존문항 wrap 변형(단원별 exam_perf 풀 7/7/8). 신규 12문항 explanation 보강. 실제 앱 채점부(checkStudyChoice=Array.isArray(correct))에 맞춰 복수정답 직접마킹은 미사용. index.html LESSON_VERSIONS sci2-1.3/sci3-1.2/sci4-1.1 추가 + APP_CACHE_NAME/CACHE_NAME v171->v172 동반. 실제 영동중 기출 형식(보기조합형 지배) 반영. 캐시 강제 갱신용.
// v171 (2026-06-24): 국어 2-2 매체 헌혈 공익광고 텍스트 지문 세트 4문항(KOR2-E054~E057, passage_group P002) lesson_kor2.js 추가. E054 다중정답(answer_indices [0,1]). lesson_kor2 PRECACHE 대상이라 CACHE_NAME 범프로 갱신 전파(PRECACHE 목록 불변). index.html LESSON_VERSIONS k2-1.5->1.6 동반 범프(데이터 URL 캐시버스팅). APP_CACHE_NAME 동반 범프(v170->v171). 캐시 강제 갱신용.
// v170 (2026-06-22): '오늘의 한 장' 빈 화면 문구를 인덱스 잔여분 기준 3분기(내일/곧/준비되면)로 분기. index.html renderDailyQueueEmpty만 변경, 데이터·렌더러 불변.
// v176 (2026-07-03): '오늘의 한 장' → 문해력 카드 연계 CTA 배포. index.html에 MUNHAERAK_CARDS 날짜→파일 맵 + renderDailyToday 말미 CTA 버튼(📖 오늘의 문해력 한 장) + .daily-munhaerak-cta CSS 추가, BUILD_VERSION/APP_CACHE_NAME v175->v176. 문해력카드/*.html은 기본 fetch 핸들러(network-first)로 서빙 — PRECACHE 미등재(offline 미고정). 버튼 전파 위해 CACHE_NAME v175->v176 범프. 카드 HTML/lesson/daily 데이터 불변.
// v177 (2026-07-04): 문해력 카드 공용 렌더러 리팩터 — 카드마다 독립 HTML(01~07)을 렌더러 1개(문해력카드/card.html?d=날짜) + 데이터 1개(문해력카드/cards.js, window.MUNHAERAK_CARDS)로 통일. index.html 인라인 파일맵 제거→cards.js 정적 로드 + CTA href=card.html?d=날짜(hasMunhaerakCard/getMunhaerakCardHref 헬퍼). standalone 01~07 원본은 존치(404 방지). card.html·cards.js는 기본 network-first(PRECACHE 미등재). index.html BUILD_VERSION/APP_CACHE_NAME v176->v177 동반. CACHE_NAME v176->v177 범프.
// v178 (2026-07-12): 집중모드 UI — 홈 국·수·사·과 카드 + 영어 문장드릴/실전대비/모두고르기 숨김(주석·return, 삭제 아님). index.html 변경 전파용 CACHE_NAME v177->v178, APP_CACHE_NAME 동반. 데이터/lesson/daily 불변.
const CACHE_NAME = 'quiz-v180';
// v169 (2026-06-16): 국어 마인드맵 내용형 교체 — kor2 허브 kor_mindmap_kor2_v2.png, kor3 허브 kor_mindmap_kor3_v2.png(가지별 핵심 불릿 + ⚠함정). lesson_kor2/3 mindmap.img 동반 갱신. PRECACHE 2줄(v1→v2) 교체. APP_CACHE_NAME 동반 범프(v168->v169). 캐시 강제 갱신용.
// v168 (2026-06-16): 사회 마인드맵 내용형 교체 — soc3 허브 soc_mindmap_soc3_v2.png, soc4 허브 soc_mindmap_soc4_v3.png(가지별 핵심 불릿 + ⚠함정). lesson_soc3/4 mindmap.img 동반 갱신. PRECACHE 2줄(v1→v2 / v2→v3) 교체. APP_CACHE_NAME 동반 범프(v167->v168). 캐시 강제 갱신용.
// v167 (2026-06-12): 기말 총점검 보강 — 사회 soc4 환율 그래프 exam 4문항(S4-E040~E043, v1.0->1.1; img/soc_forex_shift_demand_v1.png Pillow 256색 FS 압축 -62% 배선) + 과학 sci2 형식 정합 4건(S2-E026 보기형 재설계·E032/E006 ㄱㄴㄷ 변환·E001 자구, v1.1->1.2). PRECACHE에 soc_forex_shift_demand_v1.png 등재. APP_CACHE_NAME 동반 범프(v166->v167). 캐시 강제 갱신용.
// v166 (2026-06-11): 영어 배치1 + 이미지 3장 — (배치1) lesson4 PC4-MATCH-002 지문 교과서 p.70 원문 복원·G016 already 어순 해설 정정·제목추론 2문항(Q-TITLE-L4-001/002, questions 배열) 추가; lesson2 P001 wrong_explanations 위치정합·'탑을 쌓을' 통일. (이미지) eng_present_perfect/eng_so_that/eng_rel_pronoun v1 PNG visual_img 배선(lesson4 18+13, lesson2 10) + index.html showWrongExplanation·showWrongExplanationMulti에 renderVisualMedia(q) 호출 + PRECACHE 3 PNG 등재(pngquant 미가용→Pillow 256색 Floyd-Steinberg 압축 -54~62%). lesson2 v3.20->3.21·lesson4 v1.13->1.14. APP_CACHE_NAME 동반 범프(v165->v166). 캐시 강제 갱신용.
// v165 (2026-06-10): 국어 배치1 + 카드 이미지 3장 배선 — cc-kor2-2(kor_passive_3ways_v1)·cc-kor2-3(kor_quote_convert_v1)·KC3-04(kor_expl_methods8_v1) visual_img + PRECACHE 3 PNG. lesson_kor2 1.5·kor3 1.4. APP_CACHE_NAME 동반 범프(v164->v165). 캐시 강제 갱신용.
// v164 (2026-06-10): 과학 3단원 배치1(문항 재작성·용어 병기·표현 정렬, lesson_sci2/3/4.js) + 배치2 카드 이미지 7장 배선 — CC-06(igneous_compare)·CC-07(sedimentary_classify)·CC-08(metamorphic_pairs)·PW-01(wave_vs_medium)·PW-04(sound_medium)·PC-02(photo_factors_graphs)·PC-06(starch_test_steps_v2) visual_img 추가 + PRECACHE 7 PNG 등재. APP_CACHE_NAME 동반 범프(index v161->v164). 캐시 강제 갱신용.
// v163 (2026-06-10): 사회 과학화 배치3 — 그림 9장 프리캐시 등재 + 배선. 카드 8(SC3-07 초과공급/SC3-11 대체·보완재/SC3-12·13 균형이동 매트릭스 공용/SC4-03·04 GDP 5체크 공용/SC4-06 인플레 3원인/SC4-08 물가안정 4주체/SC4-13 외화 수급) + 중립 문항 3(S3-E020·E037 수요곡선 우이동 공용/S3-E027 공급곡선 우이동). lesson_soc3/4 visual_img 배선, index.html showStudyChoice/renderVisualMedia 공용 경로(불변). ※v163 누적: v152~162 미배포분 포함(라이브 v161). 캐시 강제 갱신용.
// v162 (2026-06-10): 사회 과학화 마인드맵 허브 이미지 프리캐시 — soc3는 soc_mindmap_soc3_v1.png, soc4는 실업 4유형을 반영한 soc_mindmap_soc4_v2.png 등재. lesson_soc3/4 mindmap 메타와 파일명 일치. 캐시 강제 갱신용.
// v161 (2026-06-09): 국어 과학화 배치3 — lesson_kor2(6쌍)·lesson_kor3(14쌍) 개념카드 card_a/card_b에 easy_explanation(쉬운 풀이 2~3문장) 40면 추가(simple·example·exam_tip 유지). index.html showConceptCard에 easy_explanation 조건부 렌더(🟢, 마인드맵 가지뷰 포함). lesson_kor2 v1.4·kor3 v1.3, LESSON_VERSIONS k2-1.4·k3-1.3. PRECACHE 변경 없음. ※v161 누적: v152~160 미배포분 포함. 캐시 강제 갱신용.
// v160 (2026-06-09): 국어 과학화 배치1+2 — (배치1) lesson_kor3.js 보강 8문항(KOR3-E039~E046, 스트레스세트6·인과1·딥타임1, 38→46). (배치2) lesson_kor2/kor3 mindmap 메타 추가(국어 개념정리→마인드맵 허브, 가지6) + img/kor_mindmap_kor2_v1.png·kor_mindmap_kor3_v1.png 프리캐시 등재. index.html: 진입게이트(concept_card 블록 korean+mindmap 분기)+startMindmapBranch type 분기(국어 쌍카드=concept_card)+showConceptCard inBranch/가지완료 이식 + isNegativeFrame 정규식 보강(바르지 않/알맞지 않/아닌 것은·것을/해당하지 않/거리가 먼/보기 어려운; '수 없' 미추가)+하이라이트 정규식 일관. LESSON_VERSIONS k2-1.3·k3-1.2. ※v160 누적: v152~159 미배포분 포함. 캐시 강제 갱신용.
// v159 (2026-06-09): 과학 기말 보강 4문항 — 식물(sci4) exam_prep 10→12(S4-E011 낮밤 기체출입 A군 텍스트·linked PC-05 / S4-E012 산물확인실험 에탄올 처리 A군 텍스트·linked PC-06), 지권(sci2) exam_prep 52→54(S2-E053 암석순환 네트워크 해석 B군 visual_img=기존 sci_rock_cycle.png 재사용·linked CC-09 / S2-E054 토양단면 A~D 생성순서 D→C→A→B B군 인라인 SVG·linked CC-11). 신규 PNG·PRECACHE 변경 없음. ※v159 누적: v152~158 미배포분 포함 — 한 번 배포로 함께 반영. 캐시 강제 갱신용.
// v158 (2026-06-09): 과학 식물(sci4) 실전 2문항 보강 — lesson_sci4.js exam_prep 8→10(S4-E009 온도 그래프 B군 visual_img=sci_temp_photosynthesis_v1.png·linked PC-02 / S4-E010 광합성↔호흡 비교 A군 텍스트·linked PC-01·03·04). img/sci_temp_photosynthesis_v1.png 프리캐시 등재. ※v158 누적: v157(엽록소→엽록체 교정+마인드맵 허브) 미배포분 포함 — 한 번 배포로 함께 반영. 캐시 강제 갱신용.
// v157 (2026-06-09): 과학 식물(sci4) 교과서 표현 교정(PC-06·S4-E007 "엽록소"→"엽록체" 탈색, 5곳) + 마인드맵 허브 v1 — lesson_sci4.js에 "lesson":"sci4" 저장키 분리 필드 + mindmap 메타(가지6=PC-01~06) 추가, img/sci_mindmap_sikmul_v1.png 프리캐시 등재. 허브 로직(renderMindmapHub 등) 불변. 캐시 강제 갱신용.
// v156 (2026-06-09): 과학 파동(sci3) 실전 보강 6문항(L3-W18~23, 그림형 B군) 추가 — lesson_sci3.js exam_prep 47→53. W18~21 PNG(sci_pw_q18~21.png) 프리캐시 등재, W22~23은 인라인 SVG(파일 없음). 기존 W04·W17 세로축 라벨을 '위치'로 통일. 캐시 강제 갱신용.
// v155 (2026-06-08): 과학 파동(sci3) 마인드맵 허브 v1 — lesson_sci3.js에 mindmap 메타(가지6/카드PW-01~06) 추가, img/sci_mindmap_padong_v1.png 프리캐시 등재. index.html: 마인드맵 진행 저장키를 lesson별로 분리(pa_mm_done_<lesson>, sci2는 fallback으로 기존 키 보존). 허브 로직(renderMindmapHub 등) 불변. 캐시 강제 갱신용.
// v154 (2026-06-08): 지권 콘텐츠 사실오류 교정(이암→편암·엽리 단서·토양 교과서 프레임·암석순환 네트워크·백운모 제거) + 마인드맵 v4 교체(sci_mindmap_jigwon_v4.png, 암석순환 방향 정정). ※ 미배포 v153(sci_rock_cycle.png 네트워크 그림 교체 + CC-09·S2-E011 단방향 교정)도 본 배포에 함께 포함(라이브는 직전까지 v152였음).
// v153 (2026-06-08): sci_rock_cycle.png를 단방향 4단계 고리에서 교과서형 5노드·9경로 네트워크 그림으로 교체. lesson_sci2 CC-09·S2-E011의 단방향 설명과 중복정답 경로도 교정. 동일 파일명 이미지 갱신을 위한 캐시 강제 갱신용.
// v152 (2026-06-08): 과학 지권(sci2) 마인드맵 허브 v1 — lesson_sci2.js에 mindmap 메타(가지10/카드13) 추가, img/sci_mindmap_jigwon_v1.png 프리캐시 등재. index.html: 과학 개념정리 진입 시 마인드맵 허브 분기(currentSubject==='science'&&QUIZ_DATA.mindmap), 가지별 학습 세션(평일 5장 제한 우회)+미니맵+가지완료(localStorage pa_mm_done_sci2). limitConceptCards/scopedItems 불변, 타 과목 경로 불변. 캐시 강제 갱신용.
// v151 (2026-06-07): 기말 국어 3단원 신규 — lesson_kor3.js(개념14+문항38+해설3)·kor3_reader.js(PG3 원문 3편) 프리캐시 + img/kor_*.png 3종 등재. index.html korean FINALS_MODE 분기(kor3 기본)+getReaderTexts kor3+개념카드 visual 배선(renderVisualMedia). kor2 v1.2(피동/인용 교정+15문항). APP_CACHE_NAME 동반 범프(v149->v151 단일값). 캐시 강제 갱신용.
// v150 (2026-06-07): 기말 사회 3·4단원 신규 — lesson_soc3.js(개념 13+문항 35)·lesson_soc4.js(개념 14+문항 33) 프리캐시 추가 + img/soc_*.png 5종 등재. index.html social FINALS_MODE 분기(soc3/soc4). 데이터만, 렌더러 불변. 캐시 강제 갱신용.
// v149 (2026-06-06): 과학 개념카드 추가 그림 5개 배선 — CC-01(sci_earth_system)·CC-02(sci_earth_interior_card)·CC-16(sci_mineral_props)·CC-14(sci_plate_boundary)·PW-02(sci_wave_elements)에 visual_img 추가 + img/ PNG 5개 프리캐시 등재. (v148 헤더가 선기재돼 있었으나 실제 배선은 본 버전에서 완료.) 데이터만, 렌더러 불변. 캐시 강제 갱신용.
// v148 (2026-06-06): 기말 과학 v3 — 실적중 문항 17 추가(파동 L3-W09~17, 지권 S2-E045~052) + 그림(L3-W17/S2-E052 SVG, S2-E051 이미지) + 개념카드 이미지 5개(visual_img) + renderVisualMedia(img>svg>none). img/ PNG 5개 프리캐시. 캐시 강제 갱신용.
// v147 (2026-06-06): 기말 과학 콘텐츠 — sci2 지권 보강(CC-16/17·S2-E039~044) + sci3 파동 신규(PW·L3-W, 빛 scope_out) + sci4 식물 신규 단원. index.html FINALS_MODE 숨김 메커니즘 + visual_svg 렌더 + 셀렉터 분기. lesson_sci4.js 프리캐시 추가. 캐시 강제 갱신용.
// v146 (2026-06-05): 3차 갭팩 A(배열-N번째 선택형 Q-ARR-NTH-Lx-001~003, showPositionAsk word_bank 비파괴 분기)·E(문장삽입 Q-SENT-INS-Lx-001, 교과서 Reading verbatim). L2/L4 각 +4문항, skill_focus+exam_perf_variants(75s). lesson2 v3.20·lesson4 v1.13. 기존 P001~003·세션로직 불변. 캐시 강제 갱신용.
// v145 (2026-06-05): 2차 ①③④ — L2/L4 exam_perf_variants 부착(exam_perf 리허설 활성, D-7 자동승격) + multi_focus correct 풀 2→4(M-MULTI-OK-Lx-03/04) + polarity_miss_level 세분(진단 details, GAS 합산 불변) + lesson별 캐시버스팅(LESSON_VERSIONS). lesson2 v3.19·lesson4 v1.12. (GAS는 v15 별도 배포). 캐시 강제 갱신용.
// v144 (2026-06-05): lesson 데이터 캐시버스팅 재발방지 — loadLesson이 lesson*.js에 ?v=<version> 부착(데이터 갱신 즉시 반영). sw는 daily_v2처럼 쿼리 제거 bare 키로 정규화 저장/폴백(오프라인 유지). CSS/세션 로직·데이터 불변. 캐시 강제 갱신용.
// v143 (2026-06-05): '모두고르기 5분' 버튼 미노출 버그 수정 — #english-mode-selector를 2열 wrap(flex-wrap)로 변경. 모드 버튼 4개가 한 줄(nowrap, max-width 300px)에 안 들어가 4번째 버튼이 모바일 화면 밖으로 잘리던 문제. CSS만 수정, 로직·데이터·generateMultiFocusSession 불변. 캐시 강제 갱신용.
// v142 (2026-06-05): multi_focus 세션 mix 조정 — 예열1/awkward3/correct2(4-6번 내부 셔플로 polarity 위치 추측 차단). generateMultiFocusSession()만 수정, 데이터·GAS·로깅 불변. 캐시 강제 갱신용.
// v141 (2026-06-04): multi_focus("모두고르기 5분") 1차 — 평시 전용 얇은 모드 신설. 영어 L2/L4(기말범위)에서 D-day 무관 상시 노출. generateMultiFocusSession() 신규(generateExamPrepSession 불변), 기존 어법 다답형 8(Q-MULTI-AWK)에 focus_group/polarity 메타 부착 + positive polarity 신규 4(M-MULTI-OK, 옳은 것 모두 고르기). 다답 로깅 보강(count_mismatch/likely_polarity_miss → 조건읽기실수 컬럼 재활용, GAS 무수정). lesson2 v3.18·lesson4 v1.11. 캐시 강제 갱신용.
// v140 (2026-06-04): L4 어휘 영영풀이·영어동의어 유형 신설 — lesson4.js에 match 15문항 추가(standalone 8 + 문맥형 3 + 동의어 4 context형). L2(v139)와 대칭, 실제 시험(영영→영어) 형식 정렬. 렌더러 변경 없음, 데이터만. 캐시 강제 갱신용.
// v139 (2026-06-04): L2 어휘 영영풀이·영어동의어 유형 신설 — lesson2.js에 match 15문항 추가(standalone 8 + 문맥형 3 + 동의어 4). 실제 시험(영영→영어) 형식 정렬. 렌더러 변경 없음, 데이터만. 캐시 강제 갱신용.
// v138 (2026-06-04): 영어 기말 범위 정렬 — Lesson 1·3(중간범위) 버튼 숨김, 2·4만 노출. 과목카드 라벨 Lesson 2·4. index.html 정적+동적 셀렉터 동시 수정. 캐시 강제 갱신용.
// v138 (추가): 시험 절차 모달 하단 버튼 줄바꿈 개선 — word-break:keep-all + line-height + 너비 균형(1:1.25)으로 '않기' 단어 중간 잘림 제거.
// v137 (2026-06-03): 오늘의 한장 읽음 상태 기기 간 동기화(GAS 양방향) + 웹훅 ?wh= 링크 세팅. index.html이 markDailyAsRead POST + syncDailyReadFromServer(JSONP union 병합) + isValidWebhookUrl 검증 추가. 캐시 강제 갱신용.
// v136 (2026-05-24): STEP133 큐 모델 + 스킬화. index.html이 날짜 fallback 폐기 + 큐 1장씩 노출 + IntersectionObserver 읽음 처리 + 미열람 배지 + 탭 라벨 "한 장/지난 글"로 전환. 캐시 강제 갱신용.
// v135 (2026-05-24): daily 5/26 톱스타뉴스 순위표, 5/28 아주경제 광화문우산 추가. 매핑률 6/7 → 7/7 (100%).
// v134 (2026-05-24): daily 5/25,26,29 image_url 매핑 보강 (3/7 → 6/7). 주간경향·경인일보·국민일보 fair_use OG.
// v133 (2026-05-24): daily v2 — monthly bundle + normalised cache for daily_*.js & daily_index.js
// [Codex 2026-05-13 index-tail-restore] Force clients to replace the previously cached truncated index.html.
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './lesson1.js',
  './lesson2.js',
  './lesson3.js',
  './lesson4.js',
  './lesson_kor1.js',
  './lesson_kor2.js',
  './lesson_kor3.js',
  './kor1_reader.js',
  './kor2_reader.js',
  './kor3_reader.js',
  './lesson_math1.js',
  './lesson_math2.js',
  './lesson_math3.js',
  './lesson_soc1.js',
  './lesson_soc2.js',
  './lesson_soc3.js',
  './lesson_soc4.js',
  './lesson_sci1.js',
  './lesson_sci2.js',
  './lesson_sci3.js',
  './lesson_sci4.js',
  './img/sci_earth_interior.png',
  './img/sci_sound_three.png',
  './img/sci_photosynthesis.png',
  './img/sci_rock_cycle.png',
  './img/sci_photo_vs_resp.png',
  './img/sci_earth_system.png',
  './img/sci_earth_interior_card.png',
  './img/sci_mineral_props.png',
  './img/sci_plate_boundary.png',
  './img/sci_wave_elements.png',
  './img/sci_mindmap_jigwon_v4.png',
  './img/sci_mindmap_padong_v1.png',
  './img/sci_mindmap_sikmul_v1.png',
  './img/sci_temp_photosynthesis_v1.png',
  './img/sci_pw_q18.png',
  './img/sci_pw_q19.png',
  './img/sci_pw_q20.png',
  './img/sci_pw_q21.png',
  './img/sci_igneous_compare_v1.png',
  './img/sci_sedimentary_classify_v1.png',
  './img/sci_metamorphic_pairs_v1.png',
  './img/sci_wave_vs_medium_v1.png',
  './img/sci_sound_medium_v1.png',
  './img/sci_photo_factors_graphs_v1.png',
  './img/sci_starch_test_steps_v2.png',
  './img/soc_supply_demand_curve.png',
  './img/soc_curve_shift_vs_movement.png',
  './img/soc_price_change_mindmap.png',
  './img/soc_inflation_winners_losers.png',
  './img/soc_exchange_rate_effects.png',
  './img/soc_mindmap_soc3_v2.png',
  './img/soc_mindmap_soc4_v3.png',
  './img/soc_eq_shift_matrix_v1.png',
  './img/soc_excess_supply_demand_v1.png',
  './img/soc_demand_shift_right_v1.png',
  './img/soc_supply_shift_right_v1.png',
  './img/soc_gdp_5check_v1.png',
  './img/soc_inflation_3causes_v1.png',
  './img/soc_forex_demand_supply_v1.png',
  './img/soc_forex_shift_demand_v1.png',
  './img/soc_substitute_complement_v1.png',
  './img/soc_price_stability_4actors_v1.png',
  './img/kor_structure_intro_mid_end.png',
  './img/kor_reasoning_3types.png',
  './img/kor_writing_process_5steps.png',
  './img/kor_passive_3ways_v1.png',
  './img/kor_quote_convert_v1.png',
  './img/kor_expl_methods8_v1.png',
  './img/kor_mindmap_kor2_v2.png',
  './img/kor_mindmap_kor3_v2.png',
  './img/eng_present_perfect_v1.png',
  './img/eng_so_that_v1.png',
  './img/eng_rel_pronoun_v1.png'
];

// v133: daily v2 — paths that must be cached under a query-stripped (normalised) key.
// daily_index.js and daily_YYYY-MM.js use ?v=<version_key> for cache-busting, but the
// service worker stores them under the bare path so offline fallback can find them.
function isDailyV2Path(pathname) {
  if (pathname.endsWith('/daily_index.js')) return true;
  return /\/daily_\d{4}-\d{2}\.js$/.test(pathname);
}

// v144: lesson 데이터(.js)는 ?v=<version>로 캐시버스팅 요청되므로, daily_v2와 동일하게
// 쿼리 제거한 bare 키로 정규화 저장/폴백한다(오프라인 시 PRECACHE bare 키와 일치 보장).
// daily_*는 위 isDailyV2Path로 먼저 분기되므로 여기서 겹치지 않는다.
function isLessonPath(pathname) {
  return /\/lesson[\w]*\.js$/.test(pathname);
}

function normalisedRequest(reqUrl, origRequest) {
  // Strip query string for cache key; preserve other Request properties.
  const cleanUrl = reqUrl.origin + reqUrl.pathname;
  return new Request(cleanUrl, {
    method: 'GET',
    headers: origRequest.headers,
    mode: 'same-origin',
    credentials: origRequest.credentials,
    redirect: 'follow'
  });
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // v128: non-GET requests must bypass Cache API. POST webhook requests cannot be cached.
  if (event.request.method !== 'GET') return;

  // v128: external origins such as Apps Script webhooks are never app-cache entries.
  const reqUrl = new URL(event.request.url);
  if (reqUrl.origin !== self.location.origin) return;

  // v133: daily v2 normalised-key branch.
  // Network-first; on success cache under query-less key. On failure serve normalised cache.
  if (isDailyV2Path(reqUrl.pathname)) {
    const cacheKey = normalisedRequest(reqUrl, event.request);
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(cacheKey, clone));
          }
          return response;
        })
        .catch(() => caches.match(cacheKey).then(hit => hit || caches.match(event.request)))
    );
    return;
  }

  // v144: lesson 데이터 normalised-key 분기. Network-first; 성공 시 쿼리 제거한 bare 키로 저장,
  // 실패(오프라인) 시 bare 키 캐시로 폴백.
  if (isLessonPath(reqUrl.pathname)) {
    const cacheKey = normalisedRequest(reqUrl, event.request);
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(cacheKey, clone));
          }
          return response;
        })
        .catch(() => caches.match(cacheKey).then(hit => hit || caches.match(event.request)))
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // v11: 성공 응답(2xx)만 캐싱 — 404 등 에러 응답 캐싱 방지
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
