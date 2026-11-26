/* 2026-11 기말 영어 E1 — 지각동사 "누가 무엇을 하는 걸 봤다·들었다" (Cowork STEP315, 원고 E1_원고_v4.2 · 기준 원고 첫묶음_원고_v2.1 · 시안 화면시안_E1_v3.1)
   - 홈 영어 카드가 이 흐름을 연다(JH 11/17 GO). 중간 영어(pa_english_2026_midterm_v1·english_exam.js)는 건드리지 않는다.
   - 진도는 E1 고유 순서(SEQ)의 위치(ptr)로만 센다 — 중간 영어 학습일 번호(launch_days·completion_day)를 쓰지 않는다(JH 기준 1).
   - 하루 = 학습일. 5분 예산은 E1 화면이 보이는 동안의 시간만 더하고, 화면(문장)을 다 마친 뒤 사이에서만 멈춘다. 다음 학습일은 첫 미완료 화면부터(JH 기준 2).
   - 기록 4층(섞지 않음): A 당일 도움 없이(S5) / B 다른 날 혼자(S6·실패 문장 재시도) / C 처음 보는 문장 첫 시도(S7C·S8C·S8W) / D 시간이 지난 뒤 시험 형식(S9 ①만).
   - 기기 간 공유: 기존 개념 기록(concept 'eng_fin-E1', last_questions 토큰)만 쓴다 — 서버(GAS v23) 무변경. 같은 시점엔 한 기기에서 진행한다고 보고 '최근 기록'을 쓴다.
   - 결과 로그: quiz_logs_eng_fin_e1(session_type english_final) — 앉은 자리(시작~멈춤·나가기)마다 한 줄.
   - 앞 화면 다시 보기 버튼은 두지 않는다(확인 문제 중 시연을 다시 볼 길이 없음 → 층 기록이 섞이지 않음).
   r2(Cowork STEP316, Codex 11/18 HOLD 5건 + JH 결정 반영, 원고 v4.3):
   - 일정: 실패한 날에는 새 C 배열만 건너뛰고(이월) 연습은 계속한다. S8W는 S8 쓰기 연습(S8a)을 마친 다음 학습일의 첫 문항(B보다 먼저).
     S8W 뒤에는 E2가 먼저다(E2가 연결되면 그 앞에 둔다). 이월한 C 배열은 S8W 다음 날부터 하루 하나, 실패한 날은 쉼, C 배열 2(S8C)는 12/6부터.
   - 첫 시도 결과(맞음·틀림)는 '확인'을 누른 순간 기록·저장·전송 대기열에 넣는다. S9 ①도 그 자리에서 기록 → 다른 기기에서는 ②부터.
   - 시간: 화면이 숨겨질 때·나갈 때 저장하고 공유한다. 풀던 화면은 5분이 지나도 그날 다시 열어 끝까지(새 화면만 막음).
   - 날짜: 결과 기록·화면 끝·다시 보일 때 실제 날짜(서울)를 확인 → 바뀌었으면 전날 앉은 자리를 닫고 새 날짜로 기록.
   - 저장·전송: 상태 저장이 실패하면 다음 화면으로 넘어가지 않는다. 전송은 '마지막으로 대기열에 넣은 기록'과 비교해 다시 넣고(앱을 열 때·홈·다시 보일 때),
     기록하지 못한 결과 로그는 지우지 않고 보관했다가 다시 쓴다.
   r3(Cowork STEP317, Codex 11/18 r2 HOLD 3건):
   - 첫 시도 결과 저장이 실패하면 '저장 안 됨'으로 두고, 모든 화면 전환(아래 큰 버튼)에서 먼저 다시 저장 → 저장되기 전에는 넘어가지 않는다(S9 ①→② 포함).
   - 날짜가 바뀐 채 화면으로 돌아오면 앱을 새로 열 때처럼 그날 배정을 다시 계산한다(S8W 먼저 등). 같은 화면이면 이어 간다.
   - 열린 문항과 시작 날짜(open)를 공유 기록에 싣는다 → 다른 기기에서도 그날 연 미완료 문항이면 5분이 지나도 다시 연다.
   r4(Cowork STEP318, Codex 11/18 r3 HOLD 3경로 + r4 인계 검토 보완 2건):
   - 이동·제출 경로 전부에 같은 규칙: 아래 큰 버튼(먼저 저장 확인 → 날짜 배정) · 홈으로(저장 안 되면 멈춤, 이동 안 함) · 새 화면(배정과 열린 문항을
     함께 저장, 실패면 새 화면 대신 멈춤) · 하루 끝(저장 실패면 끝 화면 대신 멈춤) · 화면 다시 보임(날짜 배정 + 저장 확인). 저장 실패는 늘 '저장 안 됨'.
   - 날짜가 바뀌는 순간에는 열린 문항의 날짜를 미리 바꾸지 않는다(배정 확정 뒤에만). 그날 배정이 같은 화면이면 그 제출을 새 날짜로 처리하고,
     다른 화면이면 그 화면으로 간다(그 제출은 처리하지 않음 — 앱을 다시 열 때와 같은 규칙).
   - 처음 보는 문장(C 배열)을 열었다가 제출 없이 다른 화면으로 밀리면 '노출됨·미채점'(res <id>x = C-seen)으로 남긴다. 그 문장이 다시 나오면
     (12/6 이월 등) C층이 아니라 연습으로 기록한다(오답으로 세지 않음, 재확인 예약 없음). 원고 v4.3 §2 "한 번 쓰면 소진".
   r5(Cowork STEP319, Codex 11/18 r4 HOLD 4건 + JH 11/18 결정 + Codex 착수 검토 1건):
   - 새 화면을 여는 저장이 실패하면 풀던 화면·열린 문항·노출 표시를 모두 저장 전으로 되돌린다(열지 못한 문항은 '본 적 있음'이 아님).
   - 날짜 기준 = 답을 제출해 채점된 시점. 날짜가 바뀐 뒤 첫 조작(버튼·보기)·다시 보임·앱 열기(다른 기기 포함) 때, 이미 채점한 열린 문항은
     채점한 날로 한 번만 마감하고 새 날 배정으로(남은 연습은 닫음). S9 ③을 풀지 않았으면 미실시(정답률 분모 제외).
   - S9 ②(-ing 빈칸)·③(어법 고르기)도 채점한 순간 기록·저장·전송 대기열에 → '다음' 전에 꺼져도 다른 기기에서 그대로(Codex 착수 검토).
     앱을 열 때 하는 마감의 결과 로그는 '날짜+문항'으로 같은 id → 두 기기가 모두 마감해도 서버에는 한 번.
   - 하위 화면 전환(S9 ①→②→③, S8 배열→쓰기)도 저장되기 전에는 넘어가지 않는다. S9 ③ 보기·S4 고르기·P0 '모르겠어요'도 아래 큰 버튼과 같은 관문.
   - 날짜가 바뀌어 다른 문항으로 옮길 때만 새 화면 위에 "날이 바뀌어서 오늘 첫 문장부터 시작해요." 한 줄(확인 버튼 없음).
   r6(Cowork STEP323, Codex 11/19 r5 HOLD 4건 + JH 11/19 결정 1·4, 서버 GAS v25 후보와 짝):
   - 채점한 날 마감은 한 경로(settleClose·settleStored): 상태 마감 → 결과 로그(id '날짜+문항', 앉은 자리 로그와 따로)를 진도와 함께 먼저
     저장(held) → 저장 성공 뒤에만 로그 쓰기·전송. 저장 실패면 마감 전으로 되돌리고 멈춘다. 열린 화면(날짜가 바뀐 뒤 첫 조작·다시 보임)·
     홈으로·앱 열기·홈 카드가 모두 이 경로만 쓴다. 홈 카드는 사본이 아니라 실제 마감·저장한 상태로 문구를 고른다.
   - 공유 기록 받기(adopt): 더 최근 서버 기록을 쓸 때 이 기기에만 있는 결과 키(열린 문항·정상 완료 문항 모두)를 보존한다. 서버 기록이 그
     문항을 이미 마감했으면 이 기기 몫의 마감 로그를 보낸다 — 서버(GAS v25)가 같은 결과 키를 한 행으로 합친다. 서버 기록과 판정이 부딪히는
     키(예: 서버엔 S8Cx 노출됨, 이 기기엔 S8C 채점)는 보태지 않는다(서버 진도 그대로).
   - 앉은 자리 닫기도 같은 순서(held 먼저 → 저장 → 로그·전송, 실패면 되돌림). 화면이 다시 보이면 저장 확인이 먼저 — 실패면 멈춤만
     (날짜 넘기기·마감·전송 없음).
   v212(Cowork 2026-11-22, 배포 점검 v3 §3-1 S9① A/B · Codex 계획확인 1번·v3 확인 · JH 시안 v1 승인):
   - 5일차 혼자 쓰기(S8W) 채점 뒤 '다음' → '본문 문장 보기'(교과서 106쪽 원문·덩어리·우리말, 채점 없음) → '다 봤어요'로 S8W를 마친다.
     SEQ는 그대로(st.ptr가 번호라 끼우지 않는다). 이 장면이 처음 화면에 뜬 날을 결과 키 S9v('v-날짜')로 남긴다(S8W 완료로 추정하지 않는다 —
     채점 뒤 '다음' 전에 닫으면 다음 날 S8W는 전날 완료로 마감되지만 S9v는 없다).
   - S9 ① 발문은 처음 보여 줄 때 A/B를 정해 결과 키 S9m('m-A'·'m-B')으로 고정·공유한다(다시 열거나 기기를 바꿔도 그대로).
     앞선 학습일에 본문 문장을 본 기록(S9v 날짜 < 오늘)이 있으면 A(본문 문장 그대로), 없으면 B(앞뒤 조건을 주고 배열 → ① 제출이 끝난 뒤
     본문 문장 보기 → ②). 공유 기록 합치기에서는 B가 이긴다(조건 단서를 본 기기가 하나라도 있으면 B).
   - A의 첫 오답이 after school 위치만 다르면 "뜻은 맞아요. 본문에서는 after school이 어디에 있었는지 떠올려 봐요." 그 밖의 안내·채점(정답 1개)·기록 규칙은 그대로.
   - 로그: S9a[…;m=A|B](B = 제시된 조건으로 추가 힌트 없이 배열함) · S8W[…;orig=본 날짜]. GAS v25 행 합치기는 하위 값을 그대로 더한다(서버 무변경).
   v212 r2(Cowork 2026-11-22, Codex 검토 HOLD 4건 · JH: 앱 r2 + GAS v26 별도 후보):
   - ① 발문(B 단서)은 S9m 저장이 확인된 뒤에만 그린다. 저장 실패면 메모리 값도 되돌리고 단서 없는 멈춤 화면('다시 저장'으로 다시).
   - B 이력 보존: 서버 기록이 이 기기보다 오래돼도 S9m=m-B는 받는다(takeB — 더 새 기록만 합치는 adopt 밖의 경로). 복구 로그는 합친 A/B(B 우선).
   - B 노출은 실제 학습진도에 담아 공유한다. E1 결과 로그는 실제 풀이로만 만든다.
   - A 첫 오답 '뜻은 맞아요'는 검토된 다른 어순(Last Friday, after school I saw my brother playing basketball.)에만. 다른 자리는 기존 안내.
   - B ① 정답: "주어진 시작과 끝에 맞춰 문장을 완성했어요." + 같은 화면에 본문 문장(닫았다가 다음 날 마감돼도 이미 봤다) → '다음' → ②.
   E2 r7(Cowork 2026-11-24b) = r6 + Codex r6 검토(HOLD 1건)·Codex 회차 복원 수정(11/23)·Cowork/Codex 보강(11/24): 받은 기록의 재확인 화면을 같은 날 다시 열 때 회차 = 그 화면을 연 회차
     (bRound2 — '다음'만 눌러도 다음 회차 오답이 생기던 것) · 예약 합치기(mergeB2)는 마감한 실패 회차를 번호로 세고, 한쪽이 마지막 회차 또는 정답(미확인 아님)으로 마감했으면
     다른 기기의 '다음' 전 화면이 예약을 되살리지 않음 · 받는 쪽(adopt2)은 이어 가지 않는 이 기기 첫 제출을 그 답을 낸 날짜로 한 번 남김(같은 문항·회차라도 다른 날 연 화면 포함, 행은 합친 결과 — 미확인 표시) ·
     이 기기가 답한 재확인 회차가 다른 기기의 열린 화면에 밀리고 받은 기록에 그 회차 결과가 없으면 그 답을 낸 날로 마감(행·실패일·독립일을 남기고 회차를 한 번만 셈).
   E2 r6(Cowork 2026-11-23g) = r5 + Codex r5 검토(HOLD) 네 경우 수정: T14 ①을 다른 기기에서 이미 마쳤으면 이 기기의 틀린 어순 대신 교과서 정답 어순을 보여 줌 ·
     재확인은 화면을 연 회차로 찾고(open.n·예약 마지막 날), 두 기기의 엇갈린 첫 답(미확인) 회차는 대표값 B-fail = 쓴 회차로 세어 '홈'과 '다음'이 같은 예약·다음 학습일 배정을 만듦 ·
     재확인 실패일(noc)을 공통 수신기·이 기기가 더 새 쪽 합치기에서도 합집합 · 받은 기록도 같은 시도를 채점했을 때 이 기기의 첫 제출·입력을 보존, 첫 제출 없는 미확인 행은 분모에서 뺌.
   E2 r5(Cowork 2026-11-23f) = r4 + Codex r4 검토(HOLD) 두 경로 수정: 재확인(지난 문장 다시 쓰기·놓기)은 화면을 연 회차로 한 번만 마감 — 다른 기기가 먼저 마친 회차를 다시 차감하지 않고,
     그날 회차를 마친 재확인은 같은 날 다시 열지 않음 · 첫 제출을 확정하기 전에 이 기기가 이미 받은 기록을 화면·채점·로그에 함께 적용(T10·T9·이월 T9·T11·T5·T6·재확인·T14 ① —
     다른 기기의 첫 정답 → 그 기록 화면, 앞선 열람 → 연습, 정답 공개 → 따라 놓기) · 미확인 행은 대표값 대신 이 기기의 첫 제출(없으면 채점에서 뺌), 미확인으로 독립일을 세지 않음.
   E2 r4(Cowork 2026-11-23e) = r3 + Codex r3 검토(HOLD) 네 경로 수정: C 문장 합치기를 두 기록만 보고 다시 판정(같은 날 엇갈린 첫 답 뒤 더 이른 열람이 오면 노출됨 — 받는 순서와 무관) ·
     index 수신기도 재확인 예약을 두 기록에서 합침(첫 오답으로 잡힌 다음 학습일 '지난 문장 다시 쓰기' 보존) · T10 제출 직전에 이 기기가 받은 기록과 대조(정답 공개 뒤 도움 후 완성 없음) ·
     잠긴 정답 칸에는 채점을 통과한 문장만(아니면 정답 예문), 다른 기기에서 이미 맞힌 연습은 '다음'으로.
   E2 r3(Cowork 2026-11-23d) = r2 + Codex r2 검토(HOLD) 세 경로 수정: C 문장 첫 노출일을 공유해 다른 기기에서 전날 본 문장은 다음 날 맞혀도 노출됨(날짜로 선후를 알 수 없을 때만 미확인) ·
     받은 첫 답과 단계(정답 공개·도움 후 완성·따라 놓기 마침)는 더 새 기록에 없어도 남김(받는 쪽·이 기기가 더 새 쪽·index 수신기 모두 같은 합치기) ·
     정답을 본 뒤에는 도움 후 완성을 새로 만들지 않음 · 미확인 문장은 '혼자 맞혔어요'라고 하지 않음. T10 로그 tries = 공유된 단계로 확정되는 전체 제출 수(갈라지면 '-').
   E2 r2(Cowork 2026-11-23b) = r1 + Codex r1 검토(HOLD) 네 경로 수정: 어제·다른 기기에서 열고 제출하지 않은 C 문장은 노출됨(연습) ·
     T10 첫 오답과 재확인 예약을 함께 저장, 고쳐 맞힌 뒤 재개하면 다시 제출 없이 '다음' · 받은 두 기록의 엇갈린 첫 답은 index 수신 단계에서도 미확인 ·
     T10·T14 ①의 오답 단계와 따라 놓기를 공유 기록으로 복원. T10 로그 tries = 실제 제출 수.
   E2 r1(Cowork 2026-11-23, 원고 E2_원고_v1.3 · 시안 화면시안_E2_v1.1 · 대응표 E2_구현_대응표_v1 · JH 승인 '후보 제작과 검증까지' + Codex 착수 의견 3건):
   - 둘째 묶음 E2(want·tell·ask + 사람 + to + 할 일)를 같은 파일에 따로 둔다: 순서표 SEQ2(T1~T14)·진도 st2·저장 키 pa_english_2026_final_e2_v1·
     공유 기록 eng_fin-E2(서버 무변경, 일반 개념 병합)·결과 로그 quiz_logs_eng_fin_e2. E1 순서표·진도·결과 키·채점·공유 규칙은 그대로.
   - 하루 배정 planJ: E2가 열리기 전(S8W 화면 끝 전)에는 E1 plan0 그대로. 열린 뒤에는 원고 §6 순서(T10 → S9 → T14 → 재확인 E1→E2 → E2 순서 → 이월 C E2→E1),
     300초는 두 묶음이 함께 쓴다. S8W를 마친 날 남은 시간이 있으면 끝 화면 없이 T1로 이어 간다. 하루 끝 문구 '오늘 영어는 여기까지예요.'(E1만 한 날 포함).
   - Codex 착수 의견: ① 재확인 문장 id는 't-' 접두(':'는 공유 기록 구분 기호) ② T14는 '다음에 풀 문항'(경계 건너뜀)으로 열고 ①만 하고 나가면 첫 답을 보존한 채 ②부터
     ③ 첫 시도 결과는 저장이 확인된 뒤에만 안내를 보이고, 두 키는 '풀던 화면 없는 쪽 → 있는 쪽' 순서로 써서 둘째 저장 실패 뒤 앱을 닫아도 화면과 채점 기록이 같다.
     두 기기의 같은 첫 시도가 서로 다르면 '미확인'(<문항>_u).
   - 고르기 화면(T12·T13·T14 ②)은 고른 뒤 다시 고르기만 막고 보기 글자는 진하게(r3c와 같은 .e1-opt:disabled), 해설이 아래 버튼에 가리면 보이게 스크롤.
     T14 ① 정답 저장 뒤 그 화면에서만 타일판을 숨긴다(공통 배열 함수 그대로).
   E4·E5 r3(Cowork 2026-11-25, 원고 E4E5_원고_v1.2 · 시안 화면시안_E4E5_v1(GO) · 대응표 E4E5_구현_대응표_v1 · JH 2026-11-25 '바로 시작', 발문 '덩어리' 확정 · Codex r1 검토 HOLD 필수 네 경로 · Codex r2 검토 대조표):
   - 셋째 묶음 E4(-thing + 꾸미는 말, U1~U12)·넷째 묶음 E5(목적격 관계대명사, V1~V14). E2 엔진(r7b)을 묶음 정의(C4·C5)만 바꿔 쓰는 공장 mkX — 묶음마다
     순서표·진도·저장 키(pa_english_2026_final_e4_v1·…e5_v1)·공유 기록(eng_fin-E4·eng_fin-E5, 서버 무변경)·결과 로그(quiz_logs_eng_fin_e4·…e5). E1·E2 순서표·진도·결과 키·채점 그대로.
   - 하루 배정 planK: E4가 열리기 전(E2 T13 전)에는 planJ 그대로. 열린 뒤 원고 §6(쓰기 C T10→U10→V10 하나 · S9 · 시험처럼 T14→U12→V14 하루 하나 · 재확인 E1→E2→E4→E5 ·
     지금 묶음 순서 · 이월 C E5→E4→E2→E1), 300초 공유. 시연 위 줄 순서·③·④ 줄은 문장 데이터(koOrder·demo3·demo4 — 없으면 E1·E2 모양), 배열 도움은 hh.
   - V10: 허용 답과 don't 한 낱말 표기만 다른 답 = 정답 + 한 줄(첫 제출·화면 복원 같은 함수, 이 문장에만) · 낱말을 더하지 않은 문장 처음 한 번 전용 안내 · who 안내.
   - 시험처럼 ①: 덩어리 타일 · 발문 '덩어리' · 도움 자리 zones · 첫 제출 뒤 이름 줄. U12는 ①만. 하루 끝 E4·E5 완료 = '오늘 영어는 여기까지예요.' + 줄 바꿈 + 묶음 완료 문장.
   - r2(Codex r1 필수): ① 열린 화면이 받은 기록의 재확인 실패일(noc)도 합침 ② (r3로 대신함)
     ③ 연습 쓰기(U8·V8) 결과·입력을 저장한 뒤 안내 — 다시 열어도 같은 화면·같은 결과 ④ V10 안내는 이 기기에서 방금 낸 답을 먼저 판정(다른 기기 오답은 횟수로). 모두 공장 안(E1·E2 코드 무변경).
   - r3(Codex r2 대조표): 시험처럼 U12·V14는 문항마다 이 기기에서 직접 낸 첫 답만 한 번 채점(맞음 1·틀림 0, 다른 기기 기록을 받은 뒤에도 유지),
     결과·해설만 본 문항은 분모·취약 제외. 화면·공유 성취·완료 상태는 그대로.
   E1·E2 후속 r1(v215 후보, Cowork 2026-11-25 · JH 지시 'E1 S8a부터, 같은 방식으로 E2 T8 · T10 열린 화면 noc · T14 ②만 직접 푼 기기에 ① 점수 없음' —
     E4·E5 공장에 들어간 r2 필수 1·3, r3 기기별 채점을 E1·E2 자리로 옮김. 순서표·하루 배정·공유 기록 형식·서버(GAS v26 r2) 그대로):
   - E1 S8a·E2 T8 연습 쓰기: 결과(맞음 ok · 도움 뒤 맞음 help · 정답 공개 fail)와 입력을 저장한 뒤 안내 — 홈·앱 재실행 뒤에도 같은 입력·안내·잠긴 칸·'다음',
     쓰기 결과는 처음 정해진 그대로 한 번. 첫 오답 뒤 나갔으면 그 입력·안내·'다시 제출'로 이어 감.
   - E2 T10: 열린 화면이 제출 직전에 받은 기록을 합칠 때(sync2) 재확인 실패일(noc)도 합침 → 다른 기기의 그날 재확인 실패를 받으면 그날 T11은 다음 학습일.
   - E2 T14: ①·②는 문항마다 이 기기에서 직접 낸 첫 답(st2.mine — 기기에만, 공유 기록에는 없음)만 한 번 채점(맞음 1·틀림 0),
     결과·해설만 본 문항은 ;seen=1로 분모·취약 제외(둘 다면 행 분모 0). D=·p=는 합친 성취 그대로, 이 기기 첫 답과 다르면 ;own=. 화면·공유 성취·완료 상태는 그대로.
   E1·E2 후속 r2(같은 v215 후보, Cowork 2026-11-25 · Codex r1 검토 HOLD 세 경우 · JH 'S8a·T8·U8·V8 함께, 경우 2·3은 E1·E2 범위대로'):
   - 연습 쓰기(E1 S8a·E2 T8·E4 U8·E5 V8): 이 기기에서 쓰기 결과를 본 뒤 '다음' 전에 나간 사이 다른 기기가 그 문항을 먼저 마치면, 그 기록을 받을 때
     이 기기 쓰기 결과를 그 화면을 연 날로 한 번 남긴다(마감 행 id = 날짜+문항). 첫 오답만 내고 나갔으면 남기지 않는다. 공장은 이 한 자리만.
   - v214에서 넘어온 채점 도중 상태: S8a·T8 두 번 틀려 정답을 본 채(cur.w2>=2) → 정답 공개·잠긴 칸·'다음'(쓰기 결과 fail) ·
     T14 → 풀던 화면에 남은 직접 제출 근거(① 이 기기 오답 흔적 cur.t·이 기기가 정한 cur.own.T14a, ② 고른 번호 cur.sel.T14b)로 이 기기 첫 답 칸(st2.mine)을 한 번 채움.
   E1·E2 후속 r3(같은 판 후보, Cowork 2026-11-25 · Codex r2 검토 HOLD 1건 · JH '남은 쓰기 기록 문제 한 건만'): 연습 쓰기(S8a·T8·U8·V8)를 쓰던 기기가
     '다음' 전에 나간 사이 다른 기기의 중간 기록(같은 문항을 풀고 있음)을 받아도, 합친 기록에서 같은 문항이 열려 있고 아직 끝나지 않았으면 이 기기 쓰기 화면
     (입력·'맞아요'·'다음'·오답 수)을 그대로 둔다. 그 뒤 다른 기기가 먼저 마치면 r2 규칙대로 이 기기 결과를 한 번 남긴다.
   E1·E2 후속 r4(같은 판 후보, Cowork 2026-11-25 · Codex r3 검토 HOLD 1건): 연습 쓰기 결과가 정해질 때 그 화면을 연 날(cur.wd)을 결과와 함께 남기고,
     다른 기기가 먼저 마친 기록으로 이 기기 결과를 남길 때 행 날짜·id를 그 날짜로 만든다. r3는 열린 날짜를 써서, 다음 날 다른 기기의 중간 기록을 받거나
     화면을 다시 열면 전날 낸 결과가 다음 날 행으로 남았다. 날짜 칸 없이 넘어온 결과(v214)는 읽을 때 저장된 같은 문항의 열린 날짜로 채운다. */
const PA_ENGLISH_FINAL=(()=>{
  'use strict';
  const KEY='pa_english_2026_final_v1',LOG_KEY='quiz_logs_eng_fin_e1',CONCEPT='eng_fin-E1',BUDGET=300,B_MAX=3,S9_GAP=7,C2_FROM='2026-12-06';
  // 문장(전부 교과서 L6 — 본문 p.106~107, FOCUS ON LANGUAGE p.110, PLAY p.111). ko(우리말)·ko4(우리말 덩어리: 누가/봤어요/누구를/뭐 하는 걸) 중 tom·phone·violin은 Cowork 작성(Codex 검토 대상).
  const S={
    base:{en:['I','saw','my brother','playing basketball'],ko:'나는 남동생이 농구하는 걸 봤어요.',ko4:['나는','봤어요','남동생이','농구하는 걸'],ing:'play → playing',mix:[3,0,2,1]},
    dad:{en:['We','heard','Dad','singing in the kitchen'],ko:'우리는 아빠가 부엌에서 노래하는 걸 들었어요.',mean:['우리는','들었어요','아빠','부엌에서 노래하는 것'],mix:[3,0,2,1]},
    phone:{en:['I','just heard','my phone','ringing again'],ko:'나는 방금 내 휴대폰이 또 울리는 걸 들었어요.',ko4:['나는','방금 들었어요','내 휴대폰이','또 울리는 걸'],ing:'ring → ringing',mix:[2,3,0,1]},
    violin:{en:['I','heard','him','playing the violin'],ko:'나는 그가 바이올린을 연주하는 걸 들었어요.',ko4:['나는','들었어요','그가','바이올린을 연주하는 걸'],ing:'play → playing',mix:[3,1,2,0]},
    michael:{en:['They','saw','Michael','dancing on the floor'],ko:'그들은 마이클이 바닥에서 춤추는 걸 봤어요.',ko4:['그들은','봤어요','마이클이','바닥에서 춤추는 걸'],ing:'dance → dancing',mix:[2,3,1,0]},
    tom:{en:['Tom','saw','his sister','running down the street'],ko:'톰은 여동생이 길을 따라 달려가는 걸 봤어요.',ko4:['톰은','봤어요','여동생이','길을 따라 달려가는 걸'],ing:'run → running',mix:[3,2,0,1],
      accept:['tom saw his sister running down the street','tom saw his sister run down the street']},
    jack:{en:['I','saw','Jack','dancing on the stage'],ko:'나는 잭이 무대에서 춤추는 걸 봤어요.',ko4:['나는','봤어요','잭이','무대에서 춤추는 걸'],ing:'dance → dancing',mix:[1,3,2,0]},
    cats:{ko:'그는 밤에 그의 고양이들이 우는 걸 들었어요.',given:['cry','he','at night','hear','his cats'],
      accept:['he heard his cats crying at night','he heard his cats cry at night','at night he heard his cats crying','at night he heard his cats cry'],
      answer:'He heard his cats crying at night.'},
    exam:{words:['Last','Friday,','I','saw','my','brother','playing','basketball','after','school'],mix:[5,8,2,6,1,9,3,0,7,4],
      ko:'지난 금요일, 나는 남동생이 방과 후에 농구하는 걸 봤어요.',answer:'Last Friday, I saw my brother playing basketball after school.',
      orig:['Last Friday,','I saw my brother playing basketball','after school']}   // v212: 본문 문장 보기 덩어리(교과서 p.106)
  };
  const ROLE=['who','saw','whom','doing'];
  // 순서. break = 학습일 경계(그날 다른 화면을 했다면 그날은 여기서 끝). track = P0 출발(①단어 돕기 ②짧은 문장 돕기 ③바로).
  const SEQ=[
    {id:'P0',kind:'probe',title:'오늘 시작할 곳 찾기'},
    {id:'S0',kind:'words',track:[1],title:'단어 먼저 보기'},
    {id:'S1',kind:'scene',title:'그림 보기'},
    {id:'S15',kind:'pair',track:[2],title:'둘만 붙여 보기'},
    {id:'S2',kind:'link',sent:'base',title:'문장과 뜻 연결'},
    {id:'S3',kind:'demo',sent:'base',title:'덩어리 옮기기'},
    {id:'brk1',kind:'break'},
    {id:'S4',kind:'blank',title:'한 덩어리만 놓기'},
    {id:'S5',kind:'arrange',sent:'base',layer:'A',title:'혼자 놓아 보기'},
    {id:'brk2',kind:'break'},
    {id:'S6',kind:'check',sent:'base',layer:'B',title:'다른 날 혼자 놓기'},
    {id:'S7a',kind:'practice',sent:'phone',title:'들은 문장 연습'},
    {id:'S7b',kind:'practice',sent:'violin',title:'들은 문장 연습'},
    {id:'S7C',kind:'arrange',sent:'michael',layer:'C',title:'처음 보는 문장'},
    {id:'brk3',kind:'break'},
    {id:'S8a',kind:'practice',sent:'tom',write:true,title:'문장 연습'},
    {id:'S8C',kind:'arrange',sent:'jack',layer:'C',title:'처음 보는 문장'},
    {id:'brk4',kind:'break'},
    {id:'S8W',kind:'write',sent:'cats',layer:'C',firstOfDay:true,title:'혼자 문장 쓰기'},
    {id:'brk5',kind:'break'},
    {id:'S9',kind:'exam',title:'시험처럼 풀기'},
    {id:'END',kind:'end'}
  ];
  const IDX=Object.fromEntries(SEQ.map((s,i)=>[s.id,i]));
  const D=86400000,n=s=>Date.UTC(+s.slice(0,4),+s.slice(5,7)-1,+s.slice(8,10))/D;
  const gap=(a,b)=>n(b)-n(a);
  const add=(s,k)=>new Date((n(s)+k)*D).toISOString().slice(0,10);
  const DAY=/^\d{4}-\d{2}-\d{2}$/;
  const copy=x=>JSON.parse(JSON.stringify(x));
  const uniq=a=>[...new Set(a)].sort();
  function fresh(){return {v:1,ptr:0,track:0,res:{},b:[],days:[],done:[],noc:[],ok:[],sec:{date:'',n:0},s5:'',s8a:'',s8w:'',def:[],dcd:'',sd:'',open:null,evidence_at:'',event_id:''};}
  const active=(st,date)=>st.days.includes(date);
  const secOf=(st,date)=>st.sec.date===date?st.sec.n:0;
  const examReady=(st,date)=>!!st.s5&&gap(st.s5,date)>=S9_GAP&&!!st.s8w&&st.s8w<date;
  const later=(a,b)=>a>b?a:b;
  // S8W: S8 쓰기 연습(S8a)을 마친 다음 학습일의 첫 문항(JH 11/18 — 5분 때문에 S8a를 못 끝냈으면 끝낸 다음 학습일).
  //  (첫 시도를 이미 기록했어도 화면을 끝내지 않았으면 — ptr가 S8W 앞 — 다시 연다.)
  const writeDue=(st,date)=>st.ptr<=IDX.S8W&&!!st.s8a&&st.s8a<date;
  // 이월한 C 배열: S8W 다음 날부터, 하루 하나, 실패한 날(noc)은 쉼, 각자 정해진 날(from, S8C는 12/6) 이후.
  const defDue=(st,date)=>!!st.s8w&&st.s8w<date&&st.dcd!==date&&!st.noc.includes(date)?st.def.find(x=>x.from<=date)||null:null;
  // 다음에 할 것(순수 함수): {type:'step',idx} | {type:'b',sid} | {type:'dc',id} | {type:'skip',idx} | {type:'stop',reason}
  //  - 오늘 이미 끝냄(done) → stop. 오늘 화면을 하나라도 했고 5분을 넘겼으면 → stop(budget) — 화면 사이에서만 판단.
  //  - S8W는 오늘 아무것도 안 했을 때만, 다시 확인(B)보다 먼저.
  //  - 다시 확인(B, 이전 날 실패한 문장) → 순서(ptr). 실패한 날 새 C 배열을 만나면 skip(이월하고 다음 연습으로).
  //  - 순서에서 할 것이 없으면(S9 대기·끝) 이월한 C 배열. (E2가 연결되면 E2를 이월 C보다 먼저 둔다.)
  function plan0(st,date){
    if(st.done.includes(date))return {type:'stop',reason:'done'};
    const act=active(st,date);
    if(act&&secOf(st,date)>=BUDGET)return {type:'stop',reason:'budget'};
    if(!act&&writeDue(st,date))return {type:'step',idx:IDX.S8W};
    const due=st.b.filter(x=>x.last<date);
    if(due.length)return {type:'b',sid:due[0].sid};
    const noc=st.noc.includes(date);
    for(let i=st.ptr;i<SEQ.length;i++){
      const s=SEQ[i];
      // 학습일 경계: 오늘 순서 화면(새 묶음)을 했을 때만 여기서 끝. 다시 확인(B)·이월 C만 한 날은 다음 묶음으로 이어 간다.
      if(s.kind==='break'){if(st.sd===date)return {type:'stop',reason:'break'};continue;}
      if(s.track&&!s.track.includes(st.track))continue;
      if(s.kind==='write')return {type:'stop',reason:act?'break':'wait'};   // S8W는 위(writeDue)에서만 연다
      if(s.layer==='C'){if(noc)return {type:'skip',idx:i};return {type:'step',idx:i};}
      if(s.kind==='exam'&&examReady(st,date))return {type:'step',idx:i};
      if(s.kind==='exam'||s.kind==='end')break;
      return {type:'step',idx:i};
    }
    const dc=defDue(st,date);
    if(dc)return {type:'dc',id:dc.id};
    const fin=st.ptr>=IDX.END&&!st.def.length&&!st.b.length;
    return {type:'stop',reason:act?'break':fin?'end':'wait'};
  }
  // 실패한 날 만난 새 C 배열을 이월(순수 함수). 처음 보는 문장 그대로 남는다(보여 준 적 없음).
  function pushDef(st,id,date){if(!st.def.some(x=>x.id===id)){st.def.push({id,from:id==='S8C'?later(add(date,1),C2_FROM):add(date,1)});st.def.sort((x,y)=>IDX[x.id]-IDX[y.id]);}}
  function deferAt(st0,idx,date){const st=copy(st0);pushDef(st,SEQ[idx].id,date);st.ptr=Math.max(st.ptr,idx+1);return st;}
  // 오늘 할 것 + skip을 반영한 상태(순수 함수). 화면을 여는 쪽은 st를 이것으로 바꿔 저장한다.
  function advance(st,date){for(let k=0;k<SEQ.length+2;k++){const p=plan0(st,date);if(p.type!=='skip')return {st,p};st=deferAt(st,p.idx,date);}return {st,p:{type:'stop',reason:'wait'}};}
  function plan(st,date){return advance(st,date).p;}
  // 풀던 화면(그날 시작해 아직 안 끝난 것) — 5분이 지나도 그날은 다시 열어 끝까지(새 화면만 막는다).
  // r3: 이 기기 화면 정보가 아니라 공유 기록의 open(문항·시작 날짜)으로 판정 → 다른 기기에서도 같다.
  const keyOf=it=>it.type==='b'?'b:'+it.sid:it.type==='dc'?'dc:'+it.id:SEQ[it.idx].id;
  function itemOf(key){
    if(/^b:/.test(key))return S[key.slice(2)]?{type:'b',sid:key.slice(2)}:null;
    if(/^dc:/.test(key)){const id=key.slice(3);return IDX[id]!==undefined&&SEQ[IDX[id]].layer==='C'?{type:'dc',id}:null;}
    return IDX[key]!==undefined?{type:'step',idx:IDX[key]}:null;
  }
  function resumable(st,date){
    const o=st.open;if(!o||o.date!==date||st.done.includes(date))return null;
    const it=itemOf(o.key);if(!it)return null;
    if(it.type==='step'){
      if(!(it.idx>=st.ptr&&SEQ[it.idx]&&SEQ[it.idx].kind!=='break'))return null;
      // 지금 자리여야 한다: ptr와 그 문항 사이는 경계·출발 제외 화면뿐(S8W는 앞의 C 배열을 건너뛰고 열리므로 C도 허용).
      for(let j=st.ptr;j<it.idx;j++){const x=SEQ[j];if(x.kind==='break'||(x.track&&!x.track.includes(st.track))||(SEQ[it.idx].kind==='write'&&x.layer==='C'))continue;return null;}
      return it;
    }
    if(it.type==='b')return st.b.some(x=>x.sid===it.sid)?it:null;
    if(it.type==='dc')return st.def.some(x=>x.id===it.id)?it:null;
    return null;
  }
  // 첫 시도 결과는 그 자리에서 고정한다(나갔다 와도 다시 '첫 시도'가 되지 않게).
  function fix(st,key,val){if(!st.res[key])st.res[key]=val;return st;}
  // r4: 노출됨·미채점 — 처음 보는 문장(C 배열)을 열었다가 첫 제출 없이 다른 화면으로 밀린 경우. 이후 그 문장은 연습으로만 기록한다.
  const seenOnly=(st,id)=>!st.res[id]&&st.res[id+'x']==='C-seen';
  // 열린 문항(fromKey)이 다른 화면(toKey)으로 바뀔 때 부른다. 표시했으면 true.
  function seenTarget(st,fromKey,toKey){
    if(!fromKey||fromKey===toKey)return null;
    const it=itemOf(fromKey);if(!it)return null;
    const s=it.type==='dc'?SEQ[IDX[it.id]]:it.type==='step'?SEQ[it.idx]:null;
    if(!s||s.kind!=='arrange'||s.layer!=='C'||st.res[s.id]||st.res[s.id+'x'])return null;
    return s.id;
  }
  function markSeen(st,fromKey,toKey){const id=seenTarget(st,fromKey,toKey);if(!id)return false;st.res[id+'x']='C-seen';return true;}
  // r5: 이미 채점한 채 아직 끝나지 않은 열린 문항(순수 함수) → {item, r} | null. 날짜가 바뀌면 이 결과로 채점한 날(open.date)에 마감한다.
  //  첫 시도 결과가 있어야 대상: b = 그 차례 재확인 결과 · dc = C 결과(노출 연습 dc는 채점 때 기록하지 않으므로 아님) · S5 = A 결과(S5w 오답 표시만이면 아님)
  //  · S6 = B 결과 · C 배열·S8W = C 결과 · S9 = ① D 결과(②·③은 채점했으면 그 결과, 아니면 없음 = 미실시). 이미 끝난 화면(ptr 뒤)은 아님.
  function gradedOpen(st){
    const o=st&&st.open;if(!o)return null;
    const it=itemOf(o.key);if(!it)return null;
    const v=k=>String(st.res[k]||''),pv=k=>/^p-(ok|help|fail)$/.test(v(k))?v(k).slice(2):undefined;
    const got=(re,k)=>re.test(v(k))?{item:it,r:{code:v(k).split('-')[1]}}:null;
    if(it.type==='b'){const x=st.b.find(y=>y.sid===it.sid);if(!x)return null;const k='B.'+it.sid+'.'+(x.tries+1),g=got(/^B-(ok|fail)$/,k);if(g)g.r.bkey=k;return g;}   // r6: bkey
    if(it.type==='dc')return st.def.some(x=>x.id===it.id)?got(/^C-(ok|fail)$/,it.id):null;
    if(it.idx<st.ptr)return null;
    const s=SEQ[it.idx];
    switch(s.kind){
      case 'arrange':return s.layer==='A'?got(/^A-(ok|help|fail)$/,s.id):got(/^C-(ok|fail)$/,s.id);
      case 'check':return got(/^B-(ok|fail)$/,s.id);
      case 'write':return got(/^C-(ok|fail)$/,s.id);
      case 'exam':{const d=v('S9a');if(!/^D-(ok|help|fail)$/.test(d))return null;return {item:it,r:{d:d.slice(2),b:pv('S9b'),c:pv('S9c')}};}
      default:return null;
    }
  }
  // 마감 사본(순수 함수): 날짜(date)가 열린 문항의 날짜와 다르고 채점한 문항이면 그 날짜로 마감한 상태. 아니면 그대로.
  function closeStale(st,date){const g=st&&st.open&&st.open.date!==date?gradedOpen(st):null;if(!g)return st;const s=complete(st,st.open.date,g.item,g.r);s.open=null;return s;}
  // r6 마감 로그(앉은 자리 로그와 따로): id = '날짜+문항' — 어느 기기·어느 경로(열린 화면·홈으로·앱 열기·홈 카드)에서 마감해도 같은 사건ID.
  const closeId=(date,key)=>'e1-'+date.replace(/-/g,'')+'-close-'+key.replace(/[^A-Za-z0-9]/g,'');
  function closeLogOf(s,date,key,tk){return {id:closeId(date,key),date,items:[tk],sec:0,reason:'recovered',track:s.track,ptrId:(SEQ[s.ptr]||{}).id};}
  // 같은 기기 화면 정보(c = 풀던 화면)로 결과 보충 — 다른 기기에서 마감하면 '-'(r5 closeGraded와 같음)
  function fillFromCur(g,c){
    const r={...g.r};
    if(c&&c.key===keyOf(g.item)){
      const s=g.item.type==='step'?SEQ[g.item.idx]:null;
      if(s&&s.kind==='arrange'&&s.layer==='A')r.w=c.w||0;
      if(s&&s.kind==='write'){const t=c.typed||[];r.w=Math.max(0,t.length-1);r.typed=t.join(' / ');}
      if(s&&s.kind==='exam'){const x=c.r||{};if(x.dw!==undefined)r.dw=x.dw;if(r.c&&x.sel!==undefined)r.sel=x.sel;}
    }
    return r;
  }
  // r6 마감(순수 함수): s0의 열린 문항(채점함 = g)을 채점한 날(open.date)로 마감 → {st 마감한 상태, log 마감 로그}
  function closeOne(s0,g,c){const date=s0.open.date,r=fillFromCur(g,c),s=complete(s0,date,g.item,r);s.open=null;return {st:s,log:closeLogOf(s,date,keyOf(g.item),token(g.item,r,s))};}
  // r6 결과 키(기기에 저장되는 채점 결과 — 학습자당 한 번만 채점): 공유 기록을 받을 때 서버 기록에 없으면 보존한다.
  const RES_KEY=/^(S9a0?|S9b|S9c|S9v|S9vl|S9m|S5w?|S6|S7C|S8C|S8W|B\.[a-z]+\.\d+)$/;   // v212: S9v(본문 문장을 본 날)·S9m(S9 ① A/B)
  // 충돌(보태지 않음, 서버 진도 그대로 — README): 서버 기록은 그 C 문장을 '노출됨·미채점'(<id>x)으로, 이 기기는 독립 채점(C-ok·C-fail)으로 판정.
  //  이 기기 값이 노출 뒤 연습(p-*)이면 양쪽이 노출에 동의한 것이라 충돌이 아니다 → 보존(Codex 11/20 조기 대조).
  const clash=(m,k,v)=>/^S[78]C$/.test(k)&&!!m.res[k+'x']&&/^C-(ok|fail)$/.test(v);
  const SEEN_KEY=/^S[78]Cx$/;
  // 받은 기록(m)에서 그 문항이 아직 할 차례·대기인지(열린 문항으로 둘 수 있는지)
  function pendingIn(m,it){if(it.type==='step')return m.ptr<=it.idx;if(it.type==='b')return m.b.some(x=>x.sid===it.sid);if(it.type==='dc')return m.def.some(x=>x.id===it.id);return false;}
  // r6c 날 사실 합치기(Codex 11/20): 학습일·끝낸 날·실패한 날·독립일은 어느 기기에서 생겼든 실제 기록 → 합집합. 첫 날짜 표시(s5·s8a·s8w)는 이른 쪽,
  //  마지막 날짜 표시(sd·dcd)는 늦은 쪽, 그날 시간(sec)은 같은 날이면 큰 쪽. 받은 기록에 바뀐 것이 있으면 true.
  //  독립일은 공유 기록에 최근 8개만 실리므로(encode) 그 범위가 바뀔 때만 바뀐 것으로 센다(두 기기가 서로 다시 보내기를 반복하지 않게).
  function mergeFacts(m,loc){
    let f=false;
    for(const k of ['days','done','noc']){const u=uniq([...m[k],...loc[k]]);if(u.length!==m[k].length)f=true;m[k]=u;}
    const ok0=uniq(m.ok).slice(-8).join(),ou=uniq([...m.ok,...loc.ok]);m.ok=ou;if(ou.slice(-8).join()!==ok0)f=true;
    for(const k of ['s5','s8a','s8w'])if(loc[k]&&(!m[k]||loc[k]<m[k])){m[k]=loc[k];f=true;}
    for(const k of ['sd','dcd'])if(loc[k]&&loc[k]>m[k]){m[k]=loc[k];f=true;}
    if(loc.sec&&loc.sec.date&&(loc.sec.date>m.sec.date||(loc.sec.date===m.sec.date&&loc.sec.n>m.sec.n))){m.sec={date:loc.sec.date,n:loc.sec.n};f=true;}
    if(!m.track&&loc.track){m.track=loc.track;f=true;}
    return f;
  }
  // r6c 재확인(B) 예약 합치기: 합친 결과에 그 문장의 B-ok가 있으면 끝, 시도 수는 큰 쪽(기록된 B-fail 수 포함), 마지막 날은 늦은 쪽, B_MAX면 끝.
  //  r6d: skip = 채점만 하고 아직 마감하지 않은 열린 시도의 결과 키(이 기기·받은 기록의 열린 재확인) — 끝낸 재확인으로 세지 않는다.
  //   그 시도는 열린 문항으로 남아 채점한 날로 closeOne이 한 번 마감한다(독립일·실패한 날·예약일·로그가 그날로).
  function mergeB(m,loc,skip){
    const out=[],sids=[...new Set([...m.b.map(x=>x.sid),...loc.b.map(x=>x.sid)])];
    for(const sid of sids){
      const ks=Object.keys(m.res).filter(k=>k.startsWith('B.'+sid+'.')&&!(skip&&skip.has(k)));if(ks.some(k=>m.res[k]==='B-ok'))continue;
      const y=m.b.find(x=>x.sid===sid),x=loc.b.find(z=>z.sid===sid);
      const tries=Math.max(y?y.tries:0,x?x.tries:0,ks.filter(k=>m.res[k]==='B-fail').length);if(tries>=B_MAX)continue;
      out.push({sid,tries,last:later(y?y.last:'',x?x.last:'')});
    }
    if(JSON.stringify(out)===JSON.stringify(m.b))return false;
    m.b=out;return true;
  }
  // 받은 기록(m)에서 그 문항이 이미 끝났는지(다른 기기가 마감·완료) — 이 기기 몫 마감 로그를 보낼지 판단
  function itemDone(m,it,bkey){
    if(it.type==='step')return m.ptr>it.idx;
    if(it.type==='dc')return !m.def.some(x=>x.id===it.id)&&!!(m.res[it.id]||m.res[it.id+'x']);
    if(it.type==='b')return !!bkey&&!!m.res[bkey];
    return false;
  }
  // r6 공유 기록 받기(순수 함수, 지적 3·결정 4): 더 최근 서버 기록(rem)을 쓰되 이 기기(loc)에만 있는 실제 기록은 보존한다.
  //  ① 결과 키 fix-if-absent(노출 표시 포함, 독립 채점 충돌은 제외) ② 날 사실·재확인 예약·이월 목록 합치기(r6c) ③ 진도 위치는 더 나아간 쪽
  //  ④ 열린 문항: 합친 기록에서 이미 끝난 문항이면 닫음. 받은 기록의 열린 문항이 채점되지 않았고(다른 기기는 열기만 함) 이 기기에 채점한
  //     열린 문항이 있으면 이 기기 것(채점한 날 그대로) — 결과가 열기만 한 날짜에 붙어 그날 마감·독립일이 생기지 않게(Codex 11/20).
  //  ⑤ 이 기기의 열린 채점 문항을 서버 기록이 이미 마감했으면 이 기기 몫의 마감 로그(같은 '날짜+문항' id) → 서버(GAS v25)가 한 행으로 합침.
  // r2: 로그용 사본 — 합친 기록(m)이 B면 이 기기 상태(s)의 S9m만 B로(다른 값은 s 그대로). 단서를 본 기기가 있으면 이 기기 로그도 m=B.
  const s9Field = /^r:(S9m|S9v|S9vl):/;
  function s9Evidence(tokens) {
    const dates = [];
    for (const token of tokens) {
      const m = /^r:S9v(?:l)?:v-(\d{4}-\d{2}-\d{2})$/.exec(token);
      if (!m) continue;
      const time = Date.parse(m[1] + 'T00:00:00Z');
      if (Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === m[1]) dates.push(m[1]);
    }
    dates.sort();
    const result = {};
    if (tokens.includes('r:S9m:m-B')) result.S9m = 'm-B';
    else if (tokens.includes('r:S9m:m-A')) result.S9m = 'm-A';
    if (dates.length) {
      result.S9v = 'v-' + dates[0];
      if (dates[0] !== dates[dates.length - 1]) result.S9vl = 'v-' + dates[dates.length - 1];
    }
    return result;
  }
  function s9Tokens(res) {
    return ['S9m', 'S9v', 'S9vl'].filter(k => res[k]).map(k => 'r:' + k + ':' + res[k]);
  }
  const withMode=(s,m)=>s.res.S9u!=='u-legacy'&&s.res.S9m==='m-A'&&m?.res.S9m==='m-B'?{...s,res:{...s.res,S9m:'m-B'}}:s;
  function mergeS9Facts(primary, other, gradeSource=primary) {
    const facts = s9Evidence(s9Tokens(primary).concat(s9Tokens(other)));
    // Keep the account's cue fact separate from the version that produced the first answer.
    const oldAnswer = (gradeSource.S9a || gradeSource.S9a0) &&
      (gradeSource.S9u==='u-legacy' || !/^m-[AB]$/.test(gradeSource.S9m||''));
    if (oldAnswer && facts.S9m) facts.S9u='u-legacy';
    const changed = [];
    for (const key of ['S9m','S9v','S9vl','S9u']) {
      if (primary[key] === facts[key]) continue;
      if (facts[key]) primary[key] = facts[key];
      else delete primary[key];
      changed.push(key);
    }
    return changed;
  }
  // An older or equal remote revision can contribute evidence, never other progress or a result log.
  function takeS9Facts(loc,rem) {
    if (!rem?.res) return null;
    const res = {...loc.res};
    return mergeS9Facts(res, rem.res).length ? {st:{...loc,res}} : null;
  }
  function readEnglishRemote() {
    const c = PA_PROGRESS.englishFinalRemote?.();
    const actual = c ? decode(c) : null;
    if (!PA_PROGRESS.englishFinalHasCue?.()) return actual;
    // A cue-only query has no score, exercise pointer, completed day or timestamp. It is not a concept record.
    if (!actual) return {res:{S9m:'m-B'}};
    mergeS9Facts(actual.res, {S9m:'m-B'});
    return actual;
  }
  function adopt(loc,rem,c,date){
    const m=copy(rem),added=[],clashes=[],logs=[];
    const gl=loc.open?gradedOpen(loc):null,gkey=gl?keyOf(gl.item):'';
    const doneThere=gl?itemDone(rem,gl.item,gl.r.bkey):false,rg=rem.open?gradedOpen(rem):null,remGraded=!!rg;
    const skip=new Set([gl&&gl.r.bkey,rg&&rg.r.bkey].filter(Boolean));   // r6d: 채점만 한 열린 재확인 시도
    // 같은 열린 문항인지 — 재확인은 같은 차례(시도 번호)까지 같아야 같은 것
    const sameOpen=x=>!!(gl&&x.open&&x.open.key===gkey&&(gl.item.type!=='b'||bKey(x,gl.item.sid)===gl.r.bkey));
    for(const [k,v] of Object.entries(loc.res)){
      if(SEEN_KEY.test(k)){if(!m.res[k]&&!m.res[k.slice(0,-1)]){m.res[k]=v;added.push(k);}continue;}
      if(s9Field.test('r:'+k+':')||!RES_KEY.test(k)||m.res[k])continue;
      if(clash(m,k,v)){clashes.push(k);continue;}
      m.res[k]=v;added.push(k);
    }
    // v212: S9 ① A/B — 어느 기기든 B(앞뒤 조건 단서)를 보여 줬으면 B. 단서를 본 뒤의 정답이 A('본문을 혼자 떠올림')로 남지 않게.
    const gradeSource=rem.res.S9a?rem.res:loc.res.S9a?loc.res:rem.res.S9a0?rem.res:loc.res;
    added.push(...mergeS9Facts(m.res,loc.res,gradeSource));
    let f=mergeFacts(m,loc);
    // 이월 C: 이 기기에서 끝낸 것(결과 있음·이 기기 이월 목록에 없음)은 빼고, 이 기기에만 있는 대기(결과 없음)는 더한다
    for(const id of ['S7C','S8C'])if(m.res[id]&&loc.res[id]&&!loc.def.some(x=>x.id===id)&&m.def.some(x=>x.id===id)){m.def=m.def.filter(x=>x.id!==id);f=true;}
    for(const x of loc.def)if(!m.def.some(y=>y.id===x.id)&&!m.res[x.id]){m.def.push({id:x.id,from:x.from});f=true;}
    m.def.sort((x,y)=>IDX[x.id]-IDX[y.id]);
    if(mergeB(m,loc,skip))f=true;
    if(loc.ptr>m.ptr){m.ptr=loc.ptr;f=true;}
    const ro=m.open,rit=ro?itemOf(ro.key):null;
    if(ro&&(!rit||!pendingIn(m,rit))){m.open=null;f=true;}
    if(gl&&!remGraded&&pendingIn(m,gl.item)&&!(sameOpen(m)&&m.open.date===loc.open.date)){
      const cand={...m,open:{key:gkey,date:loc.open.date}};
      if(gradedOpen(cand)){if(m.open&&m.open.key!==gkey)markSeen(m,m.open.key,gkey);m.open=cand.open;f=true;}
    }
    // r2: 복구 로그의 A/B는 합친 값(B 우선)
    if(gl&&doneThere&&!sameOpen(m))logs.push(closeLogOf(loc,loc.open.date,gkey,token(gl.item,fillFromCur(gl,c),withMode(loc,m))));
    // 후속 r2(Codex r1 경우 1 · JH 2026-11-25 'S8a·T8·U8·V8 함께'): 연습 쓰기를 이 기기에서 끝내고(결과 cur.wres — v214에서 넘어온 두 번 오답 cur.w2>=2는 정답 공개)
    //  '다음' 전에 나간 사이 받은 기록에서 그 문항이 이미 끝났으면(이 기기에 다시 열 화면이 없음) 이 기기 쓰기 결과를 그 화면을 연 날로 한 번 남긴다
    //  (마감 행 id = 날짜+문항 — 다시 받아도 같은 행). 첫 오답만 내고 나갔으면(결과 없음) 남기지 않는다. v214까지는 쓰기 결과가 '다음'에서만 행이 되어 이 경우 사라졌다.
    //  후속 r4(Codex r3 검토): 행 날짜·id = 이 기기 결과가 정해진 화면을 연 날(c.wd). 날짜 칸이 없을 때만 열린 날짜(읽을 때 wdFill이 채움).
    {const pw=c&&c.phase==='write'&&(c.wres||(c.w2>=2?'fail':'')),pi=c&&c.item;
      if(pw&&pi&&pi.type==='step'&&loc.open&&loc.open.key===c.key&&loc.ptr<=pi.idx&&rem.ptr>pi.idx&&SEQ[pi.idx]&&SEQ[pi.idx].kind==='practice'&&SEQ[pi.idx].write)
        logs.push(closeLogOf(loc,c.wd||loc.open.date,c.key,token(pi,{code:c.code||'ok',w:c.w||0,write:pw},m)));}
    // 후속 r3(Codex r2 검토 · JH 2026-11-25): 연습 쓰기 화면(쓰기 단계 cur)이 합친 기록에서도 같은 문항으로 열려 있고 아직 끝나지 않았으면(다른 기기의 중간 기록)
    //  이 기기 쓰기 화면(입력·결과·오답 수)을 그대로 둔다. r2는 버려서 첫 배열 화면으로 돌아갔고, 뒤에 그 기기가 먼저 마쳐도 이 기기 결과가 남지 않았다.
    //  E1 S8a는 문항 자리가 15여도 진행 위치가 14일 수 있어 위치가 같은지 대신 '지나지 않았는지'(m.ptr<=자리)로 본다.
    const wk=c&&c.phase==='write'&&c.item,keepW=!!(wk&&wk.type==='step'&&m.open&&m.open.key===c.key&&m.ptr<=wk.idx&&SEQ[wk.idx]&&SEQ[wk.idx].kind==='practice'&&SEQ[wk.idx].write);
    // r6e: 합친 기록의 열린 문항이 이 기기에서 채점한 그 시도(문항·날짜·재확인 차례 같음)이고 받은 기록은 채점하지 않았을 때만 이 기기 화면 상세(cur)를 그대로 쓴다.
    //  받은 기록이 그 문항을 채점했거나 다른 화면이면 섞지 않는다(cur 버림).
    const keepCur=!!(gl&&!remGraded&&m.open&&sameOpen(m)&&m.open.date===loc.open.date);
    return {st:m,added,clashes,logs,keepCur:keepCur||keepW,stamp:added.length>0||f,changed:added.length>0||logs.length>0||f};
  }
  const bKey=(st,sid)=>{const x=st.b.find(y=>y.sid===sid);return 'B.'+sid+'.'+((x?x.tries:0)+1);};
  function schedule(st,sid,date){if(!st.b.some(x=>x.sid===sid))st.b.push({sid,tries:0,last:date});if(!st.noc.includes(date))st.noc.push(date);}
  // 화면 하나를 마친 결과 반영(순수 함수). r = 화면이 돌려준 결과.
  function complete(st0,date,item,r){
    const st=copy(st0);r=r||{};
    if(!st.days.includes(date))st.days.push(date);
    if(item.type==='b'){
      const sid=item.sid,x=st.b.find(y=>y.sid===sid);if(!x)return st;
      const key='B.'+sid+'.'+(x.tries+1);fix(st,key,'B-'+(r.code==='ok'?'ok':'fail'));
      if(st.res[key]==='B-ok'){st.b=st.b.filter(y=>y.sid!==sid);if(!st.ok.includes(date))st.ok.push(date);}
      else{x.tries++;x.last=date;if(x.tries>=B_MAX)st.b=st.b.filter(y=>y.sid!==sid);if(!st.noc.includes(date))st.noc.push(date);}
      return st;
    }
    if(item.type==='dc'){
      const id=item.id,s=SEQ[IDX[id]];if(!s||!st.def.some(x=>x.id===id))return st;
      if(seenOnly(st,id)||/^p-/.test(st.res[id]||'')){fix(st,id,'p-'+(r.code||'ok'));st.def=st.def.filter(x=>x.id!==id);st.dcd=date;return st;}   // r4: 노출됨 → 연습(r6: 이미 연습 결과가 있어도)
      fix(st,id,'C-'+(r.code==='ok'?'ok':'fail'));st.def=st.def.filter(x=>x.id!==id);st.dcd=date;
      if(st.res[id]==='C-ok'){if(!st.ok.includes(date))st.ok.push(date);}else schedule(st,s.sent,date);
      return st;
    }
    const s=SEQ[item.idx];st.ptr=Math.max(st.ptr,item.idx+1);st.sd=date;
    if(s.kind==='write'){
      // S8W를 마치면 그 앞에서 아직 안 한 C 배열(5분 때문에 S8a 뒤 못 한 S8C 등)은 이월. 이미 첫 시도를 한 것은 그 결과로 마감.
      for(let i=st0.ptr;i<item.idx;i++){const c=SEQ[i];if(c.layer!=='C')continue;
        if(!st.res[c.id])pushDef(st,c.id,date);
        else if(st.res[c.id]==='C-ok'){if(!st.ok.includes(date))st.ok.push(date);}
        else if(!st.b.some(x=>x.sid===c.sent))st.b.push({sid:c.sent,tries:0,last:date});}
    }
    switch(s.kind){
      case 'probe':st.track=r.probe;fix(st,'P0','probe-'+r.probe+'-'+r.stage);break;
      case 'blank':fix(st,'S4','m-'+(r.memo||'solo'));break;
      case 'arrange':
        if(s.layer==='A'){fix(st,s.id,'A-'+(st.res[s.id+'w']&&r.code==='ok'?'help':r.code));st.s5=st.s5||date;if(st.res[s.id]==='A-ok'&&!st.ok.includes(date))st.ok.push(date);}
        else if(seenOnly(st,s.id)||/^p-/.test(st.res[s.id]||''))fix(st,s.id,'p-'+(r.code||'ok'));   // r4: 노출됨 → 연습(r6: 이미 연습 결과가 있어도)
        else{fix(st,s.id,'C-'+(r.code==='ok'?'ok':'fail'));if(st.res[s.id]==='C-ok'){if(!st.ok.includes(date))st.ok.push(date);}else schedule(st,s.sent,date);}
        break;
      case 'check':fix(st,s.id,'B-'+(r.code==='ok'?'ok':'fail'));if(st.res[s.id]==='B-ok'){if(!st.ok.includes(date))st.ok.push(date);}else schedule(st,'base',date);break;
      case 'write':fix(st,s.id,'C-'+(r.code==='ok'?'ok':'fail'));st.s8w=st.s8w||date;if(st.res[s.id]==='C-ok'){if(!st.ok.includes(date))st.ok.push(date);}else schedule(st,'cats',date);break;
      case 'practice':fix(st,s.id,'p-'+(r.code||'ok'));if(s.write)st.s8a=st.s8a||date;break;
      // r5: ②·③은 푼 것만 기록(채점 전에 날짜가 바뀌어 마감하면 미실시 — 기록 없음)
      case 'exam':if(!st.res.S9a&&r.d)fix(st,'S9a','D-'+(st.res.S9a0&&r.d==='ok'?'help':r.d));if(r.b)fix(st,'S9b','p-'+r.b);if(r.c)fix(st,'S9c','p-'+r.c);if(st.res.S9a==='D-ok'&&!st.ok.includes(date))st.ok.push(date);break;
      default:fix(st,s.id,'seen');
    }
    return st;
  }
  // 오늘 멈춤 표시(그날 화면을 하나라도 했을 때만)
  function stopDay(st0,date){const st=copy(st0);if(active(st,date)&&!st.done.includes(date))st.done.push(date);return st;}
  function addSec(st0,date,sec){const st=copy(st0);const base=secOf(st,date);st.sec={date,n:Math.max(0,Math.round(base+sec))};return st;}
  // ── 기기 간 공유: 개념 기록 하나(eng_fin-E1)에 상태를 토큰으로 싣는다. 서버 형식 ^[A-Za-z0-9][A-Za-z0-9_.:-]{0,255}$, 순서는 서버가 정렬하므로 접두어로만 읽는다.
  const TOKEN=/^[A-Za-z0-9][A-Za-z0-9_.:-]{0,255}$/;
  function encode(st){
    const q=['e1v:1','ptr:'+SEQ[Math.min(st.ptr,SEQ.length-1)].id+':'+st.ptr,'trk:'+st.track];
    for(const [k,v] of Object.entries(st.res))q.push('r:'+k+':'+v);
    for(const x of st.b)q.push('b:'+x.sid+':'+x.tries+':'+x.last);
    for(const d of st.days)q.push('day:'+d);for(const d of st.done)q.push('done:'+d);for(const d of st.noc)q.push('noc:'+d);
    if(st.sec.date)q.push('sec:'+st.sec.date+':'+st.sec.n);if(st.s5)q.push('s5:'+st.s5);if(st.s8a)q.push('s8a:'+st.s8a);if(st.s8w)q.push('s8w:'+st.s8w);
    for(const x of st.def)q.push('dc:'+x.id+':'+x.from);if(st.dcd)q.push('dcd:'+st.dcd);if(st.sd)q.push('sd:'+st.sd);if(st.open)q.push('op:'+st.open.key+':'+st.open.date);
    const days=uniq(st.days),last=days[days.length-1];
    const graded=Object.entries(st.res).filter(([,v])=>/^(A|B|C|D)-(ok|help|fail)$/.test(v));
    const lastV=graded.length?graded[graded.length-1][1]:'';
    return {v:1,last_day:last,due:add(last,1),last_ok:/-ok$/.test(lastV),introduced:true,error_days:graded.filter(([,v])=>/-(fail)$/.test(v)).length,
      last_status:!lastV?'assisted':/-ok$/.test(lastV)?'independent':/-help$/.test(lastV)?'assisted':'incorrect',
      last_questions:uniq(q).filter(t=>TOKEN.test(t)),independent_days:uniq(st.ok).slice(-8),evidence_at:st.evidence_at,event_id:st.event_id};
  }
  function decode(c){
    if(!c||!Array.isArray(c.last_questions)||!c.last_questions.includes('e1v:1'))return null;
    const st=fresh();
    for(const t of c.last_questions){
      const p=String(t).split(':');
      if(p[0]==='ptr'&&IDX[p[1]]!==undefined)st.ptr=IDX[p[1]];
      else if(p[0]==='trk')st.track=+p[1]||0;
      else if(p[0]==='r'&&p.length===3)st.res[p[1]]=p[2];
      else if(p[0]==='b'&&p.length===4&&DAY.test(p[3]))st.b.push({sid:p[1],tries:+p[2]||0,last:p[3]});
      else if(p[0]==='day'&&DAY.test(p[1]))st.days.push(p[1]);
      else if(p[0]==='done'&&DAY.test(p[1]))st.done.push(p[1]);
      else if(p[0]==='noc'&&DAY.test(p[1]))st.noc.push(p[1]);
      else if(p[0]==='sec'&&DAY.test(p[1]))st.sec={date:p[1],n:+p[2]||0};
      else if(p[0]==='s5'&&DAY.test(p[1]))st.s5=p[1];
      else if(p[0]==='s8w'&&DAY.test(p[1]))st.s8w=p[1];
      else if(p[0]==='s8a'&&DAY.test(p[1]))st.s8a=p[1];
      else if(p[0]==='dcd'&&DAY.test(p[1]))st.dcd=p[1];
      else if(p[0]==='sd'&&DAY.test(p[1]))st.sd=p[1];
      else if(p[0]==='op'&&p.length>=3&&DAY.test(p[p.length-1])&&itemOf(p.slice(1,-1).join(':')))st.open={key:p.slice(1,-1).join(':'),date:p[p.length-1]};
      else if(p[0]==='dc'&&p.length===3&&IDX[p[1]]!==undefined&&SEQ[IDX[p[1]]].layer==='C'&&DAY.test(p[2]))st.def.push({id:p[1],from:p[2]});
    }
    for(const k of ['S9m','S9v','S9vl'])delete st.res[k];
    Object.assign(st.res,s9Evidence(c.last_questions));
    st.ok=(c.independent_days||[]).filter(d=>DAY.test(d));st.days.sort();st.done.sort();st.noc.sort();st.def.sort((x,y)=>IDX[x.id]-IDX[y.id]);
    st.evidence_at=c.evidence_at||'';st.event_id=c.event_id||'';
    return st;
  }
  const newer=(a,b)=>!!a&&(!b||Date.parse(a.evidence_at||0)>Date.parse(b.evidence_at||0)||(a.evidence_at===b.evidence_at&&String(a.event_id)>String(b.event_id)));
  // ── 채점(E1 쓰기 전용 — exam_support.js gradeWriting은 그대로): 대소문자·끝 문장부호·쉼표는 보지 않고 형태·어순은 본다.
  const norm=s=>String(s??'').toLowerCase().replace(/[’']/g,"'").replace(/,/g,' ').replace(/[.!?]+\s*$/,'').replace(/\s+/g,' ').trim();
  function gradeWrite(accept,typed){const t=norm(typed);return !!t&&accept.some(a=>norm(a)===t);}

  // ═══════════════ E2 둘째 묶음 "누가 + 원했어요·말했어요·부탁했어요 + 그 일을 할 사람 + to 할 일" — 순수 함수 ═══════════════
  //  원고 E2_원고_v1.3 · 시안 화면시안_E2_v1.1 · 대응표 E2_구현_대응표_v1 + Codex 구현 착수 의견(2026-11-23) 3건.
  //  r2(Codex r1 검토 HOLD 4건): ① 어제·다른 기기에서 열고 제출하지 않은 C 문장 = 노출됨(adopt2·render) ② T10 고쳐 맞힌 뒤 재개·첫 오답과 재확인 예약 함께 저장
  //  ③ 받은 두 기록의 엇갈린 첫 답 = 미확인(mergeQuestions2 — index 수신기) ④ T10·T14 ① 오답 단계·따라 놓기를 공유 기록으로 복원 + T10 제출 횟수(tries) = 실제 제출 수.
  //  r3(Codex r2 검토 HOLD 3건): ① C 문장 첫 노출일(T9o·T10o·T11o)을 공유해, 다른 기기에서 전날 본 문장을 다음 날 맞히면 노출됨·미채점(날짜로 선후를 알 수 없을 때만 미확인)
  //  ② 받은 첫 답·단계(정답 공개·도움 후 완성·따라 놓기 마침)는 더 새 기록에 없어도 버리지 않는다 — 합치기 한 곳(mergeRes2)을 받는 쪽·이 기기가 더 새 쪽·index 수신기가 함께 쓴다
  //  ③ 정답을 본 뒤에는 '도움 후 완성'을 새로 만들지 않는다 · 미확인 문장은 '혼자 맞혔어요'라고 하지 않는다 ④ T10 제출 횟수 = 공유된 단계로 확정되는 수(갈라지면 '-').
  //  r4(Codex r3 검토 HOLD 4건): ① C 문장 합치기를 두 기록만 보고 다시 판정 — 같은 날 엇갈림(미확인) 뒤에 더 이른 열람이 와도 노출됨·미채점으로(받는 순서와 무관)
  //  ② index 수신기도 재확인 예약(b:)을 두 기록에서 합침 ③ T10 제출 직전에 이 기기가 이미 받은 기록과 대조(정답 공개 뒤 도움 후 완성 없음)
  //  ④ 잠긴 정답 칸에는 채점을 통과하는 문장만(아니면 정답 예문) · 이미 맞힌 연습은 '다음'으로.
  //  r5(Codex r4 검토 HOLD 2건): ① 재확인은 화면을 연 회차(r.bkey)로 한 번만 마감 — 다른 기기가 이미 마친 회차를 다시 차감하지 않고, 그날 회차를 마친 재확인은 같은 날 다시 열지 않음
  //  ② 첫 제출을 확정하기 전에 이 기기가 이미 받은 기록을 함께 본다(화면 쪽) — 결과 로그는 미확인이면 대표값 대신 이 기기의 첫 제출(r.own, 없으면 채점에서 뺌)을,
  //  다른 기기의 첫 정답 뒤 이 기기 입력은 typed가 아닌 late로 남긴다. 미확인 결과로는 독립일을 세지 않는다.
  //  E1 순서표·진도·결과 키는 그대로 두고, E2는 자기 순서표(SEQ2)·진도(st2)·저장 키·공유 기록(eng_fin-E2)·결과 로그를 따로 쓴다.
  //  하루 배정만 planJ가 두 묶음을 함께 본다(E2가 열리기 전에는 E1 plan0 그대로).
  const KEY2='pa_english_2026_final_e2_v1',LOG_KEY2='quiz_logs_eng_fin_e2',CONCEPT2='eng_fin-E2',T14_FROM='2026-12-13',T14_GAP=7;
  const E2_FORMULA="교과서에서는 이런 문장을 'want/tell/ask … to부정사'라고 불러요. want·tell·ask + 사람 + to + 할 일.";
  // 문장(교과서 L6 p.106·107·110·114·115). 재확인 문장 id = 't-' 접두(Codex 착수 의견 1: ':'는 공유 기록을 나누는 기호라 쓰지 않는다).
  //  h2 = 도움 1의 '누가 ○○?' · to = 옮기기 마지막 줄 · linkMsg = 뜻 연결을 다 탭한 뒤 한 줄. 우리말은 Cowork 작성(원고 §10 표).
  const S2={
    't-base':{en:['My brother','wanted','me','to delete the picture'],ko:'남동생은 내가 그 사진을 지우기를 원했어요.',ko4:['남동생은','원했어요','내가','그 사진을 지우기를'],h2:'원했나요',
      to:'delete → to delete',toPlus:"지우는 사람은 바로 앞의 '내가(me)'예요.",mix:[3,0,2,1],linkMsg:"영어는 '원했어요'가 둘째에 와요. 그다음 '그 일을 할 사람', 그다음 'to + 할 일'."},
    't-mia':{en:['Daniel','asked','Mia','to catch the spider in his room'],ko:'대니얼은 미아에게 대니얼의 방에 있는 거미를 잡아 달라고 부탁했어요.',ko4:['대니얼은','부탁했어요','미아에게','대니얼의 방에 있는 거미를 잡아 달라고'],h2:'부탁했나요',
      to:'catch → to catch',mix:[2,3,0,1],linkMsg:'거미를 잡는 사람은 미아예요.'},
    't-luke':{en:['Luke','told','us','to be careful'],ko:'루크는 우리에게 조심하라고 말했어요.',ko4:['루크는','말했어요','우리에게','조심하라고'],h2:'말했나요',to:'be → to be',mix:[1,3,0,2],
      accept:['luke told us to be careful']},
    't-sophia':{en:['Sophia','wanted','her brother','to play soccer with her'],ko:'소피아는 남동생이 자기와 축구를 하기를 원했어요.',ko4:['소피아는','원했어요','남동생이','자기와 축구를 하기를'],h2:'원했나요',
      to:'play → to play',mix:[2,3,1,0],linkMsg:"영어는 '원했어요'가 둘째에 와요. 그다음 '그 일을 할 사람', 그다음 'to + 할 일'."},
    't-amelia':{ko:'나는 아멜리아에게 같이 산책하자고 부탁했어요.',given:['go for a walk together','I','ask','Amelia'],accept:['i asked amelia to go for a walk together'],
      answer:'I asked Amelia to go for a walk together.'},
    't-grand':{en:['My grandfather','always tells','me','to be brave'],ko:'할아버지는 늘 나에게 용감하라고 말씀하세요.',ko4:['할아버지는','늘 말씀하세요','나에게','용감하라고'],h2:'말씀하세요',
      to:'be → to be',mix:[2,0,3,1],linkMsg:"영어는 '늘 말씀하세요'가 둘째에 와요. 그다음 '그 일을 할 사람', 그다음 'to + 할 일'."},
    exam:{words:['My','brother','wanted','me','to','delete','the','picture','of','him'],mix:[7,4,0,8,2,9,5,1,6,3],ko:'남동생은 자기가 나온 그 사진을 내가 지워 주길 원했어요.',
      answer:'My brother wanted me to delete the picture of him.'}
  };
  // E2 순서. break = E2 경계(그날 E2 순서 화면을 했으면 그날은 여기서 끝). T10은 하루 첫 문항 자리(planJ 2), T14는 열림 조건 자리(planJ 4)에서만 연다.
  const SEQ2=[
    {id:'T1',kind:'scene',title:'장면'},
    {id:'T2',kind:'link',sent:'t-base',title:'문장과 뜻 연결'},
    {id:'T3',kind:'demo',sent:'t-base',title:'덩어리 옮기기'},
    {id:'T4',kind:'blank',title:'빈칸 하나 고르기'},
    {id:'T5',kind:'arrange',sent:'t-base',layer:'A',title:'혼자 놓아 보기'},
    {id:'brk1',kind:'break'},
    {id:'T6',kind:'check',sent:'t-base',layer:'B',title:'다른 날 혼자 놓기'},
    {id:'T7',kind:'practice',sent:'t-mia',noDemo:true,title:'부탁한 문장 연습'},
    {id:'T8',kind:'practice',sent:'t-luke',write:true,title:'말한 문장 연습'},
    {id:'T9',kind:'arrange',sent:'t-sophia',layer:'C',title:'처음 보는 문장'},
    {id:'brk2',kind:'break'},
    {id:'T10',kind:'write',sent:'t-amelia',layer:'C',firstOfDay:true,title:'혼자 문장 쓰기'},
    {id:'T11',kind:'arrange',sent:'t-grand',layer:'C',title:'처음 보는 문장'},
    {id:'T12',kind:'choose',title:'본문에서 찾기'},
    {id:'T13',kind:'choose',title:'알맞은 말 고르기'},
    {id:'brk3',kind:'break'},
    {id:'T14',kind:'exam',title:'시험처럼 풀기'},
    {id:'END',kind:'end'}
  ];
  const IDX2=Object.fromEntries(SEQ2.map((s,i)=>[s.id,i]));
  function fresh2(){return {v:1,ptr:0,res:{},b:[],days:[],done:[],noc:[],ok:[],sec:{date:'',n:0},t5:'',t8a:'',t10:'',t13:'',def:[],dcd:'',sd:'',open:null,evidence_at:'',event_id:''};}
  // E2가 열림 = E1 S8W 화면(뒤의 본문 장면 '다 봤어요'까지)을 마침. S8W가 틀려도 연다(원고 §6).
  const e2Open=st1=>!!st1&&!!st1.s8w&&st1.ptr>IDX.S8W;
  const e1Fin=st1=>st1.ptr>=IDX.END&&!st1.def.length&&!st1.b.length;
  const e2Fin=st=>st.ptr>=IDX2.END&&!st.def.length&&!st.b.length;
  // '다음에 풀 문항'(경계 건너뜀). Codex 착수 의견 2: T13을 마친 직후 진행 위치는 T14 앞 경계(brk3)라 위치 == T14로 비교하면 시험이 열리지 않는다.
  const nextStep2=st=>{let i=st.ptr;while(i<SEQ2.length&&SEQ2[i].kind==='break')i++;return i;};
  const writeDue2=(st,date)=>st.ptr<=IDX2.T10&&!!st.t8a&&st.t8a<date;
  const defDue2=(st,date)=>!!st.t10&&st.t10<date&&st.dcd!==date&&!st.noc.includes(date)?st.def.find(x=>x.from<=date)||null:null;
  // T14: T5(A) 7일 뒤 이후(7일 뒤가 12/13을 넘으면 12/13) + E2 순서(T13)를 마친 다음 날 이후. 날짜는 실제 날짜.
  const t14Due=(st,date)=>nextStep2(st)===IDX2.T14&&!!st.t5&&!!st.t13&&st.t13<date&&(gap(st.t5,date)>=T14_GAP||date>=T14_FROM);
  // E1 S9가 남음(S8W 뒤 진행 위치는 brk5 또는 S9) · S9를 오늘 열었거나 마쳤거나 오늘 열 수 있음 → 그날 T14는 쉼(원고 §6, S9 ③ 해설이 T14 ②를 미리 알려 주지 않게).
  const s9Pending=st1=>st1.ptr<=IDX.S9;
  const s9Day=(st1,date)=>(!!st1.open&&st1.open.key==='S9'&&st1.open.date===date)||(st1.ptr>IDX.S9&&st1.sd===date)||(s9Pending(st1)&&examReady(st1,date));
  // E2 순서 부분(planJ 6): 경계에서 그날 E2 순서 화면을 했으면 멈춤. 실패한 날(st2.noc — 묶음별) 새 C 배열은 skip(이월).
  function seq2(st,date){
    const noc=st.noc.includes(date);
    for(let i=st.ptr;i<SEQ2.length;i++){
      const s=SEQ2[i];
      if(s.kind==='break'){if(st.sd===date)return {type:'stop',reason:'break'};continue;}
      if(s.kind==='write'||s.kind==='exam'||s.kind==='end')return null;
      if(s.layer==='C')return noc?{type:'skip',idx:i,track:2}:{type:'step',idx:i,track:2};
      return {type:'step',idx:i,track:2};
    }
    return null;
  }
  // 하루 배정(순수 함수, 원고 §6 하루 순서): 1 S8W(E2 전) · 2 T10(그날 아무것도 하기 전) · 3 E1 S9 · 4 T14 · 5 재확인 E1→E2 · 6 E2 순서 · 7 이월 C E2→E1.
  //  300초는 E1·E2가 함께 쓴다(화면 사이에서만 멈춤). 반환 항목: E1은 지금 모양 그대로, E2는 track:2.
  function planJ(st1,st2,date){
    if(!e2Open(st1))return plan0(st1,date);
    if(st1.done.includes(date)||st2.done.includes(date))return {type:'stop',reason:'done'};
    const act=active(st1,date)||active(st2,date);
    if(act&&secOf(st1,date)+secOf(st2,date)>=BUDGET)return {type:'stop',reason:'budget'};
    if(!act&&writeDue2(st2,date))return {type:'step',idx:IDX2.T10,track:2};
    if(s9Pending(st1)&&examReady(st1,date))return {type:'step',idx:IDX.S9};
    if(t14Due(st2,date)&&!s9Day(st1,date))return {type:'step',idx:IDX2.T14,track:2};
    const d1=st1.b.filter(x=>x.last<date);if(d1.length)return {type:'b',sid:d1[0].sid};
    const d2=st2.b.filter(x=>x.last<date);if(d2.length)return {type:'b',sid:d2[0].sid,track:2};
    const q=seq2(st2,date);if(q)return q;
    const c2=defDue2(st2,date);if(c2)return {type:'dc',id:c2.id,track:2};
    const c1=defDue(st1,date);if(c1)return {type:'dc',id:c1.id};
    return {type:'stop',reason:act?'break':e1Fin(st1)&&e2Fin(st2)?'end':'wait'};
  }
  function pushDef2(st,id,date){if(!st.def.some(x=>x.id===id)){st.def.push({id,from:add(date,1)});st.def.sort((x,y)=>IDX2[x.id]-IDX2[y.id]);}}
  function deferAt2(st0,idx,date){const st=copy(st0);pushDef2(st,SEQ2[idx].id,date);st.ptr=Math.max(st.ptr,idx+1);return st;}
  function advanceJ(st1,st2,date){
    for(let k=0;k<SEQ.length+SEQ2.length+4;k++){
      const p=planJ(st1,st2,date);if(p.type!=='skip')return {st1,st2,p};
      if(p.track===2)st2=deferAt2(st2,p.idx,date);else st1=deferAt(st1,p.idx,date);
    }
    return {st1,st2,p:{type:'stop',reason:'wait'}};
  }
  const keyOf2=it=>it.type==='b'?'b:'+it.sid:it.type==='dc'?'dc:'+it.id:SEQ2[it.idx].id;
  function itemOf2(key){
    if(/^b:t-/.test(key))return S2[key.slice(2)]?{type:'b',sid:key.slice(2),track:2}:null;
    if(/^dc:T/.test(key)){const id=key.slice(3),s=SEQ2[IDX2[id]];return s&&s.layer==='C'&&s.kind==='arrange'?{type:'dc',id,track:2}:null;}
    return IDX2[key]!==undefined?{type:'step',idx:IDX2[key],track:2}:null;
  }
  function resumable2(st,date){
    const o=st.open;if(!o||o.date!==date||st.done.includes(date))return null;
    const it=itemOf2(o.key);if(!it)return null;
    if(it.type==='step'){
      if(!(it.idx>=st.ptr&&SEQ2[it.idx].kind!=='break'))return null;
      for(let j=st.ptr;j<it.idx;j++){const x=SEQ2[j];if(x.kind==='break'||(SEQ2[it.idx].kind==='write'&&x.layer==='C'))continue;return null;}
      return it;
    }
    if(it.type==='b')return st.b.some(x=>x.sid===it.sid&&x.last<date)?it:null;   // r5: 그날 회차를 이미 마친 재확인(다른 기기 포함)은 같은 날 다시 열지 않음(원고 §7 '다음 학습일에 한 번')
    if(it.type==='dc')return st.def.some(x=>x.id===it.id)?it:null;
    return null;
  }
  // 두 묶음의 풀던 화면(그날 연 미완료 문항) — E1 먼저.
  function resumableJ(st1,st2,date){if(st1.done.includes(date)||st2.done.includes(date))return null;return resumable(st1,date)||resumable2(st2,date);}
  // 노출됨·미채점: 처음 보는 문장(T9·T11 배열, T10 쓰기 — 원고 §7-5)을 열었다가 첫 제출 없이 다른 화면으로 밀림.
  function seenTarget2(st,fromKey,toKey){
    if(!fromKey||fromKey===toKey)return null;
    const it=itemOf2(fromKey);if(!it)return null;
    const s=it.type==='dc'?SEQ2[IDX2[it.id]]:it.type==='step'?SEQ2[it.idx]:null;
    if(!s||s.layer!=='C'||(s.kind!=='arrange'&&s.kind!=='write')||st.res[s.id]||st.res[s.id+'x'])return null;
    return s.id;
  }
  function markSeen2(st,fromKey,toKey){const id=seenTarget2(st,fromKey,toKey);if(!id)return false;st.res[id+'x']='C-seen';return true;}
  // 화면 하나를 마친 결과 반영(순수 함수) — E1 complete와 같은 규칙을 E2 순서표로.
  function complete2(st0,date,item,r){
    const st=copy(st0);r=r||{};
    if(!st.days.includes(date))st.days.push(date);
    const okDay=()=>{if(!st.ok.includes(date))st.ok.push(date);},okIf=k=>{if(!st.res[k+'_u'])okDay();};   // r5: 미확인(엇갈린 첫 답)의 대표값으로는 독립일을 세지 않음
    if(item.type==='b'){
      // r5(Codex r4 지적 1): 마감하는 회차 = 화면을 연 회차(r.bkey). 다른 기기가 이미 마친 회차면 시도 수를 다시 올리지 않는다(남은 기회 보존).
      const sid=item.sid,x=st.b.find(y=>y.sid===sid),bm=/^B\.(t-[a-z]+)\.(\d+)$/.exec(r.bkey||''),n=bm&&bm[1]===sid?+bm[2]:0;if(!x)return st;
      const key=n?r.bkey:'B.'+sid+'.'+(x.tries+1);fix(st,key,'B-'+(r.code==='ok'?'ok':'fail'));
      if(st.res[key]==='B-ok'){st.b=st.b.filter(y=>y.sid!==sid);okIf(key);}
      else{x.tries=Math.max(x.tries,n||x.tries+1);x.last=date;if(x.tries>=B_MAX)st.b=st.b.filter(y=>y.sid!==sid);if(!st.noc.includes(date))st.noc.push(date);}
      return st;
    }
    if(item.type==='dc'){
      const id=item.id,s=SEQ2[IDX2[id]];if(!s||!st.def.some(x=>x.id===id))return st;
      if(seen2(st,id)||/^p-/.test(st.res[id]||'')){fix(st,id,'p-'+(r.code||'ok'));st.def=st.def.filter(x=>x.id!==id);st.dcd=date;return st;}
      fix(st,id,'C-'+(r.code==='ok'?'ok':'fail'));st.def=st.def.filter(x=>x.id!==id);st.dcd=date;
      if(st.res[id]==='C-ok')okIf(id);else schedule(st,s.sent,date);
      return st;
    }
    const s=SEQ2[item.idx];st.ptr=Math.max(st.ptr,item.idx+1);st.sd=date;
    switch(s.kind){
      case 'blank':fix(st,s.id,'m-'+(r.memo||'solo'));break;
      case 'arrange':
        if(s.layer==='A'){fix(st,s.id,'A-'+(st.res[s.id+'w']&&r.code==='ok'?'help':r.code));st.t5=st.t5||date;if(st.res[s.id]==='A-ok')okIf(s.id);}
        else if(seen2(st,s.id)||/^p-/.test(st.res[s.id]||''))fix(st,s.id,'p-'+(r.code||'ok'));
        else{fix(st,s.id,'C-'+(r.code==='ok'?'ok':'fail'));if(st.res[s.id]==='C-ok')okIf(s.id);else schedule(st,s.sent,date);}
        break;
      case 'check':fix(st,s.id,'B-'+(r.code==='ok'?'ok':'fail'));if(st.res[s.id]==='B-ok')okIf(s.id);else schedule(st,s.sent,date);break;
      case 'practice':fix(st,s.id,'p-'+(r.code||'ok'));if(s.write)st.t8a=st.t8a||date;break;
      case 'write':
        // T10을 마치면 그 앞의 결과 없는 C 배열(시간 때문에 못 연 T9 = 미노출 C, 또는 노출됨)은 이월. 첫 시도를 한 것은 그 결과로 마감(E1 S8W와 같은 규칙).
        for(let i=st0.ptr;i<item.idx;i++){const c=SEQ2[i];if(c.layer!=='C'||c.kind!=='arrange')continue;
          if(!st.res[c.id])pushDef2(st,c.id,date);
          else if(st.res[c.id]==='C-ok')okIf(c.id);
          else if(st.res[c.id]==='C-fail'&&!st.b.some(x=>x.sid===c.sent))st.b.push({sid:c.sent,tries:0,last:date});}
        if(seen2(st,s.id)||/^p-/.test(st.res[s.id]||''))fix(st,s.id,'p-'+(r.code||'ok'));
        else{fix(st,s.id,'C-'+(r.code==='ok'?'ok':'fail'));if(st.res[s.id]==='C-ok')okIf(s.id);else schedule(st,s.sent,date);}
        st.t10=st.t10||date;break;
      case 'choose':for(const [k,v] of Object.entries(r.res||{}))if(/^(ok|fail)$/.test(v))fix(st,k,'p-'+v);if(s.id==='T13')st.t13=st.t13||date;break;
      case 'exam':if(!st.res.T14a&&r.d)fix(st,'T14a','D-'+(st.res.T14a0&&r.d==='ok'?'help':r.d));if(r.b)fix(st,'T14b','p-'+r.b);if(st.res.T14a==='D-ok')okIf('T14a');break;
      default:fix(st,s.id,'seen');
    }
    return st;
  }
  // 채점한 채 끝나지 않은 열린 문항(→ 채점한 날로 마감). T14(①만 하고 나감)·고르기·연습은 마감하지 않고 다음에 이어 간다
  //  (Codex 착수 의견 2 · 원고 v1.3 §6 '①만 하고 나간 날은 ①의 남은 도움·② 연습이 남은 것').
  // r6(Codex r5 지적 2): 재확인은 화면을 연 회차로 찾는다(제출·'다음'·당일 종료·다음 날 복구 모두). 이 기기가 연 화면 = open.n(render가 남김),
  //  받은 기록의 열린 화면 = 예약의 마지막 날로 판정 — 그날 마감된 회차가 있으면 그 회차(재확인은 하루 한 회차만 열림), 없으면 다음 회차. r5는 늘 '예약 횟수+1'이라
  //  다른 기기가 같은 회차를 마쳐 횟수가 오르면 이 기기가 채점한 회차를 찾지 못했다(마감·로그 없음).
  function bRound2(st,sid){const o=st&&st.open,x=st&&st.b.find(y=>y.sid===sid),mine=!!(o&&o.key==='b:'+sid);
    if(mine&&o.n>0)return o.n;if(!x)return 0;return mine&&x.tries>0&&x.last===o.date?x.tries:x.tries+1;}
  function gradedOpen2(st){
    const o=st&&st.open;if(!o)return null;const it=itemOf2(o.key);if(!it)return null;
    const v=k=>String(st.res[k]||''),got=(re,k)=>re.test(v(k))?{item:it,r:{code:v(k).split('-')[1]}}:null;
    if(it.type==='b'){const n=bRound2(st,it.sid);if(!n)return null;const k='B.'+it.sid+'.'+n,g=got(/^B-(ok|fail)$/,k);if(g)g.r.bkey=k;return g;}
    if(it.type==='dc')return st.def.some(x=>x.id===it.id)?got(/^C-(ok|fail)$/,it.id):null;
    if(it.idx<st.ptr)return null;
    const s=SEQ2[it.idx];
    if(s.kind==='arrange')return s.layer==='A'?got(/^A-(ok|help|fail)$/,s.id):got(/^C-(ok|fail)$/,s.id);
    if(s.kind==='check')return got(/^B-(ok|fail)$/,s.id);
    if(s.kind==='write')return got(/^C-(ok|fail)$/,s.id);
    return null;
  }
  const closeId2=(date,key)=>'e2-'+date.replace(/-/g,'')+'-close-'+key.replace(/[^A-Za-z0-9]/g,'');
  function closeLogOf2(s,date,key,tk){return {id:closeId2(date,key),date,items:[tk],sec:0,reason:'recovered',ptrId:(SEQ2[s.ptr]||{}).id};}
  function fillFromCur2(g,c){
    const r={...g.r};
    if(c&&c.key===keyOf2(g.item)){const s=g.item.type==='step'?SEQ2[g.item.idx]:null;
      if(s&&s.kind==='arrange'&&s.layer==='A')r.w=c.w||0;
      if(s&&s.kind==='write'){const t=c.typed||[];r.w=c.w!==undefined?c.w:Math.max(0,t.length-1);r.n=t.length;r.typed=t.join(' / ');if(c.late&&c.late.length)r.late=c.late.join(' / ');}
      if(c.own)r.own=c.own;}
    return r;
  }
  function closeOne2(s0,g,c){const date=s0.open.date,r=fillFromCur2(g,c),s=complete2(s0,date,g.item,r);s.open=null;return {st:s,log:closeLogOf2(s,date,keyOf2(g.item),token2(g.item,r,s))};}
  // 결과 로그 토큰(원고 §10 기록 칸: C ✔ · C ✗ · 도움 후 완성(help=ok) · 노출됨·미채점(seen=1) · 미노출 이월(def=1)).
  // r5(Codex r4 README ②): 미확인(<키>_u)이면 합친 대표값으로 새 점수를 만들지 않는다 — 이 기기가 낸 첫 제출(r.own)이 있으면 그 값으로, 없으면 채점에서 뺀다(g:false). 둘 다 u=mixed 표시.
  //  r6(Codex r5 지적 4): 이 기기 첫 제출이 없으면 nd(분모 제외) — 행 합계가 비어도 문항 수로 채우지 않는다(logRecord2).
  function uTok2(RS,r,k,v,fmt){const own=r.own&&r.own[k],w=own||v;return {t:fmt(w,';u=mixed'),g:!!own,ok:!!own&&/-ok$/.test(own),...(own?{}:{nd:true})};}
  function token2(item,r,S0){
    const RS=S0.res;r=r||{};
    if(item.type==='b'){const t=r.bkey&&RS[r.bkey]?r.bkey:Object.keys(RS).filter(k=>k.startsWith('B.'+item.sid+'.')&&!/_u$/.test(k)).sort().pop();
      if(RS[t+'_u'])return uTok2(RS,r,t,RS[t],(w,u)=>`${t}[${w}${u}]`);return {t:`${t}[${RS[t]}]`,g:true,ok:RS[t]==='B-ok'};}
    if(item.type==='dc'){const v=RS[item.id]||'C-fail';if(/^p-/.test(v))return {t:`${item.id}[${v.replace('-','=')};def=1;seen=1]`,g:true,ok:v==='p-ok'};
      if(RS[item.id+'_u'])return uTok2(RS,r,item.id,v,(w,u)=>`${item.id}[${w.replace('-','=')}${u};def=1]`);return {t:`${item.id}[${v.replace('-','=')};def=1]`,g:true,ok:v==='C-ok'};}
    const s=SEQ2[item.idx],v=RS[s.id]||'',pv=k=>/^p-(ok|fail)$/.test(RS[k]||'')?RS[k].slice(2):'',U=RS[s.id+'_u'];
    const tries=r.w===undefined?'-':(r.w||0)+1;
    switch(s.kind){
      case 'blank':return {t:`${s.id}[memo=${r.memo}]`,g:true,ok:r.memo==='solo'};
      case 'arrange':if(/^p-/.test(v))return {t:`${s.id}[${v.replace('-','=')};seen=1]`,g:true,ok:v==='p-ok'};{const aw=s.layer==='A'?';w='+(r.w===undefined?'-':r.w):'';
        if(U)return uTok2(RS,r,s.id,v,(w,u)=>`${s.id}[${w.replace('-','=')}${u}${aw}]`);return {t:`${s.id}[${v.replace('-','=')}${aw}]`,g:true,ok:/-ok$/.test(v)};}
      case 'check':if(U)return uTok2(RS,r,s.id,v,(w,u)=>`${s.id}[${w.replace('-','=')}${u}]`);return {t:`${s.id}[${v.replace('-','=')}]`,g:true,ok:v==='B-ok'};
      case 'write':{const loc=r.n!==undefined?r.n:tries;   // r2: 이 기기의 실제 제출 수(세 번 틀려 정답을 본 경우 3 — r1은 w+1 = 4)
        if(/^p-/.test(v))return {t:`${s.id}[${v.replace('-','=')};seen=1;tries=${loc}]`,g:true,ok:v==='p-ok'};
        // r3(Codex r2): 기기를 바꿔도 공유된 단계(첫 답·T10w2·T10w3·T10h)로 확정되는 전체 제출 수. 갈라진 기록(미확인·정답 공개와 도움 후 완성이 함께)은 '-'.
        const sh=triesT10(RS),tn=sh==='-'?'-':sh===null?loc:Math.max(sh,typeof loc==='number'?loc:0);
        // r5: late = 다른 기기의 첫 정답을 받은 뒤 이 기기에서 쓴 문장(첫 시도 이력 typed와 섞지 않음)
        const tail=w=>`${RS.T10h==='h-ok'?';help=ok':''};typed=${encodeURIComponent(r.typed||'')}${r.late?';late='+encodeURIComponent(r.late):''}`;
        if(U)return uTok2(RS,r,s.id,v,(w,u)=>`${s.id}[${w.replace('-','=')}${u};tries=${tn}${tail(w)}]`);
        return {t:`${s.id}[${v.replace('-','=')};tries=${tn}${tail(v)}]`,g:true,ok:v==='C-ok'};}
      case 'practice':return {t:`${s.id}[p=${r.code};w=${r.w||0}${r.write?';write='+r.write:''}]`,g:true,ok:r.code==='ok'};
      case 'choose':{const ks=s.id==='T12'?['T12a','T12b','T12c']:['T13a','T13b'],f=ks.map(pv),sel=r.sel||{};
        return {t:ks.map((k,i)=>`${k}[p=${f[i]||'-'}${f[i]?';sel='+(sel[k]===undefined?'-':sel[k]):''}]`).join(', '),g:true,ok:f[0]==='ok',extra:f.slice(1).filter(Boolean).map(x=>x==='ok')};}
      case 'exam':{const own=RS.T14a_u?(r.own&&r.own.T14a)||'':'',d=RS.T14a_u?own||RS.T14a||'D-'+r.d:RS.T14a||'D-'+r.d;   // r5: 미확인이면 이 기기 첫 제출, 없으면 정답으로 세지 않음
        // 후속 r1(v215 — E4·E5 r3와 같은 규칙): ①·②는 문항마다 이 기기에서 직접 낸 첫 답(S0.mine)만 한 번 채점 — 맞으면 1, 틀리면 0.
        //  결과·해설만 보고 '다음'을 누른 문항은 ;seen=1 · 분모·취약 제외(둘 다 아니면 행 nd). D=·p=는 합친 성취 그대로, 이 기기 첫 답과 맞음 여부가 다르면 ;own=ok|fail.
        //  v214까지는 ①을 늘 채점해, 다른 기기에서 ①을 마친 뒤 이 기기에서 ②만 푼 행에도 ① 점수가 붙었다.
        const M=S0.mine||{},m1=M.T14a,m2=M.T14b;
        const t1=`T14a[${d.replace('-','=')}${RS.T14a_u?';u=mixed':''}${m1?((m1==='ok')!==(d==='D-ok')?';own='+m1:''):';seen=1'};w=${r.dw===undefined?'-':r.dw}]`,
          t2=`T14b[p=${r.b?r.b+';sel='+(r.sel===undefined?'-':r.sel):'-'}${m2?(m2!==r.b?';own='+m2:''):';seen=1'}]`;
        if(m1)return {t:t1+', '+t2,g:true,ok:m1==='ok',extra:m2?[m2==='ok']:[]};
        if(m2)return {t:t2+', '+t1,g:true,ok:m2==='ok',extra:[]};   // ②만 직접 골랐으면 ②만(취약 이름이 ②가 되게 앞에)
        return {t:t1+', '+t2,g:false,ok:false,nd:true};}
      default:return {t:`${s.id}[seen]`,g:false};
    }
  }
  // 기기 간 공유: 개념 기록 하나(eng_fin-E2, 토큰 형식은 E1과 같음 — 표지 e2v:1). 서버는 일반 개념 병합(더 새 기록) — GAS 무변경(원고 §10 (b)).
  function encode2(st){
    const q=['e2v:1','ptr:'+SEQ2[Math.min(st.ptr,SEQ2.length-1)].id+':'+st.ptr];
    for(const [k,v] of Object.entries(st.res))q.push('r:'+k+':'+v);
    for(const x of st.b)q.push('b:'+x.sid+':'+x.tries+':'+x.last);
    for(const d of st.days)q.push('day:'+d);for(const d of st.done)q.push('done:'+d);for(const d of st.noc)q.push('noc:'+d);
    if(st.sec.date)q.push('sec:'+st.sec.date+':'+st.sec.n);
    for(const k of ['t5','t8a','t10','t13'])if(st[k])q.push(k+':'+st[k]);
    for(const x of st.def)q.push('dc:'+x.id+':'+x.from);if(st.dcd)q.push('dcd:'+st.dcd);if(st.sd)q.push('sd:'+st.sd);if(st.open)q.push('op:'+st.open.key+':'+st.open.date);
    const days=uniq(st.days),last=days[days.length-1];
    const graded=Object.entries(st.res).filter(([,v])=>/^(A|B|C|D)-(ok|help|fail)$/.test(v));
    const lastV=graded.length?graded[graded.length-1][1]:'';
    return {v:1,last_day:last,due:add(last,1),last_ok:/-ok$/.test(lastV),introduced:true,error_days:graded.filter(([,v])=>/-(fail)$/.test(v)).length,
      last_status:!lastV?'assisted':/-ok$/.test(lastV)?'independent':/-help$/.test(lastV)?'assisted':'incorrect',
      last_questions:uniq(q).filter(t=>TOKEN.test(t)),independent_days:uniq(st.ok).slice(-8),evidence_at:st.evidence_at,event_id:st.event_id};
  }
  function decode2(c){
    if(!c||!Array.isArray(c.last_questions)||!c.last_questions.includes('e2v:1'))return null;
    const st=fresh2();
    for(const t of c.last_questions){
      const p=String(t).split(':');
      if(p[0]==='ptr'&&IDX2[p[1]]!==undefined)st.ptr=IDX2[p[1]];
      else if(p[0]==='r'&&p.length===3)st.res[p[1]]=p[2];
      else if(p[0]==='b'&&p.length===4&&S2[p[1]]&&DAY.test(p[3]))st.b.push({sid:p[1],tries:+p[2]||0,last:p[3]});
      else if(p[0]==='day'&&DAY.test(p[1]))st.days.push(p[1]);
      else if(p[0]==='done'&&DAY.test(p[1]))st.done.push(p[1]);
      else if(p[0]==='noc'&&DAY.test(p[1]))st.noc.push(p[1]);
      else if(p[0]==='sec'&&DAY.test(p[1]))st.sec={date:p[1],n:+p[2]||0};
      else if(['t5','t8a','t10','t13'].includes(p[0])&&DAY.test(p[1]))st[p[0]]=p[1];
      else if(p[0]==='dcd'&&DAY.test(p[1]))st.dcd=p[1];
      else if(p[0]==='sd'&&DAY.test(p[1]))st.sd=p[1];
      else if(p[0]==='op'&&p.length>=3&&DAY.test(p[p.length-1])&&itemOf2(p.slice(1,-1).join(':')))st.open={key:p.slice(1,-1).join(':'),date:p[p.length-1]};
      else if(p[0]==='dc'&&p.length===3&&itemOf2('dc:'+p[1])&&DAY.test(p[2]))st.def.push({id:p[1],from:p[2]});
    }
    st.ok=(c.independent_days||[]).filter(d=>DAY.test(d));st.days.sort();st.done.sort();st.noc.sort();st.def.sort((x,y)=>IDX2[x.id]-IDX2[y.id]);
    st.evidence_at=c.evidence_at||'';st.event_id=c.event_id||'';
    return st;
  }
  // 받을 때 보존하는 결과 키(학습자당 한 번만 채점) · 노출 표시 · 미확인 표시.
  //  r2: T10w2·T10w3(T10 둘째·셋째 오답 — 다른 기기에서 남은 도움 단계 복원) · T14a1(T14 ① 둘째 오답) · T14af(셋째 오답 뒤 따라 놓기 마침).
  const RES_KEY2=/^(T5w?|T6|T9|T10(h|w2|w3)?|T11|T12[abc]|T13[ab]|T14a[01f]?|T14b|B\.t-[a-z]+\.\d+)$/;
  const SEEN_KEY2=/^T(9|10|11)x$/;
  const UNSURE2=/^(T5|T6|T9|T10|T11|T14a|B\.t-[a-z]+\.\d+)_u$/;
  // Codex 착수 의견 3: 같은 첫 시도가 두 기기에 서로 다르게 남아 선후를 입증할 수 없으면 '미확인'(<문항>_u = u-mixed, 원고 §10).
  //  첫 시도의 모양: A·D는 첫 오답 표시(T5w·T14a0)가 있으면 'wrong', C는 노출됨(Tnx·노출 뒤 연습 p-*)이면 'seen'.
  function first2(res,k){
    if(k==='T5')return res.T5w?'wrong':res.T5==='A-ok'?'ok':res.T5||'';
    if(k==='T14a')return res.T14a0?'wrong':res.T14a==='D-ok'?'ok':res.T14a||'';
    if(/^T(9|10|11)$/.test(k))return /^p-/.test(res[k]||'')||(!res[k]&&res[k+'x'])?'seen':res[k]||'';
    return res[k]||'';
  }
  // r3: 두 결과의 엇갈린 첫 시도 = mergeRes2가 새로 붙이는 미확인 표시(C 문장은 첫 노출일로 판정).
  function unsure2(a,b){const m=mergeRes2(a,b);return Object.keys(m).filter(k=>/_u$/.test(k)&&!a[k]&&!b[k]).map(k=>k.slice(0,-2));}
  // ── r3 C 문장 첫 노출일(Codex r2 HOLD 1) ──
  //  Tno = 'o-YYYY-MM-DD' = 그 C 문장(T9·T10·T11)이 첫 시도 화면으로 처음 열린 날(어느 기기든 가장 이른 날). 화면을 열 때 남기고(render) 공유·합칠 때 이른 날을 남긴다.
  //  첫 시도 화면은 첫 노출일 당일에만 열리므로(그 뒤 날은 연습), 첫 답이 있는 기록의 Tno = 그 첫 답을 낸 날이다.
  //  노출 표시(Tnx): C-seen = 노출됨·미채점(날짜가 지나 다시 열림·다른 기기가 넘어감·늦은 답) · C-push = 같은 날 한 기기에서 제출 없이 다른 화면으로 밀림
  //  (같은 날 다른 기기의 첫 답과 선후를 알 수 없는 경우는 이것뿐이다).
  const CK2=['T9','T10','T11'],O_KEY2=/^T(9|10|11)o$/,CU_KEY2=/^T(9|10|11)_u$/,J2=x=>JSON.stringify(x&&typeof x==='object'&&!Array.isArray(x)?Object.keys(x).sort().map(k=>[k,x[k]]):x);   // r4: 키 순서와 무관하게 비교
  const oDay2=(r,k)=>{const v=String((r&&r[k+'o'])||'');return /^o-\d{4}-\d{2}-\d{2}$/.test(v)?v.slice(2):'';};
  const ans2=(r,k)=>/^C-(ok|fail)$/.test(r[k]||'')&&!r[k+'x']?r[k]:'';
  const seen2=(st,id)=>!st.res[id]&&!!st.res[id+'x'];
  function cBase2(key){const it=itemOf2(key);if(!it)return null;const s=it.type==='dc'?SEQ2[IDX2[it.id]]:it.type==='step'?SEQ2[it.idx]:null;
    return s&&s.layer==='C'&&(s.kind==='arrange'||s.kind==='write')?s.id:null;}
  // 열린 첫 시도 화면(제출 전)도 노출 — 첫 노출일 표시가 없으면 열린 날로 채운 사본.
  function withOpen2(res,open){
    const k=open&&cBase2(open.key);if(!k||res[k]||res[k+'x']||!DAY.test(open.date||''))return res;
    const o=oDay2(res,k);if(o&&o<=open.date)return res;
    return {...res,[k+'o']:'o-'+open.date};
  }
  // C 문장 하나 합치기 — r4(Codex r3 지적 4): 두 기록만 보고 처음부터 다시 판정한다(a·b 대칭, 받는 순서와 무관 — 결과를 다시 합쳐도 같음).
  //  · 첫 노출일 E = 두 기록 중 이른 날. 첫 시도 화면은 첫 노출일 당일에만 열리므로, 기록의 첫 답은 그 기록의 첫 노출일에 낸 답이다.
  //  · 날짜가 있는 미확인(u-mixed)은 '그 기록의 첫 노출일에 두 첫 답(또는 화면 밀림과 첫 답)이 엇갈림'이라는 뜻이다. 더 이른 노출이 오면(E < 그 날)
  //    엇갈린 답은 모두 늦은 답 = 연습이 되어 미확인이 풀린다. 같은 날이면 그대로 미확인. r3는 미확인을 한 번 붙이면 다시 판정하지 않아 순서에 따라 갈렸다.
  //  · 첫 노출일 없는 기록(r2 형식)이 엇갈림에 끼면 날짜로 풀 수 없으므로 미확인을 남기고 첫 노출일도 붙이지 않는다(뒤에 와도 풀리지 않게).
  //  · 남길 값이 둘이면 정한 순서로 고른다(C-ok > C-fail > p-ok > p-help > p-fail) — 어느 기록이 남길(더 새) 기록이든 같게.
  const RANK2={'C-ok':5,'C-fail':4,'p-ok':3,'p-help':2,'p-fail':1};
  const pick2=(...vs)=>vs.filter(v=>RANK2[v]).sort((x,y)=>RANK2[y]-RANK2[x])[0]||'';
  function cMerge2(out,a,b,k){
    const da=oDay2(a,k),db=oDay2(b,k),E=[da,db].filter(Boolean).sort()[0]||'';
    for(const s of ['','x','_u','o'])delete out[k+s];
    const has=r=>!!(r[k]||r[k+'x']||r[k+'_u']);
    if((has(a)&&!da)||(has(b)&&!db)){                                            // 첫 노출일 없는 기록 = r2 규칙(날짜로 풀지 않음)
      const v=pick2(a[k],b[k]),x=first2(a,k),y=first2(b,k);
      if(v)out[k]=v;else if(a[k+'x']||b[k+'x'])out[k+'x']=a[k+'x']==='C-push'||b[k+'x']==='C-push'?'C-push':'C-seen';
      if(a[k+'_u']||b[k+'_u']||(x&&y&&x!==y)){out[k+'_u']='u-mixed';return;}
      if(E)out[k+'o']='o-'+E;return;}
    if(E)out[k+'o']='o-'+E;
    const uOn=(r,d)=>!!r[k+'_u']&&d===E;                                           // 날짜 있는 미확인: 그 기록의 첫 노출일 = E일 때만 유효
    if(uOn(a,da)||uOn(b,db)){out[k+'_u']='u-mixed';const v=pick2(a[k],b[k]);if(v)out[k]=v;return;}
    const Aa=ans2(a,k),Ab=ans2(b,k),onA=!!Aa&&da===E,onB=!!Ab&&db===E;            // 첫 노출일에 낸 첫 답만 첫 시도
    const pushed=(r,d)=>!ans2(r,k)&&!r[k+'_u']&&r[k+'x']==='C-push'&&d===E;
    if((onA&&onB&&Aa!==Ab)||(onA&&!onB&&pushed(b,db))||(onB&&!onA&&pushed(a,da))){out[k+'_u']='u-mixed';out[k]=pick2(Aa,Ab);return;}
    if(onA||onB){out[k]=onA?Aa:Ab;return;}
    // 첫 노출일에 낸 첫 답이 없음: 늦은 답(다른 날 답·풀린 미확인의 답)과 연습 값은 연습으로, 노출 표시만 남은 경우는 C-push(첫 노출일에 밀림) 또는 C-seen.
    const late=[a[k],b[k]].filter(v=>RANK2[v]).map(v=>'p-'+v.split('-')[1]);
    if(late.length){out[k]=pick2(...late);out[k+'x']=pushed(a,da)||pushed(b,db)?'C-push':'C-seen';return;}   // 첫 노출일의 화면 밀림은 연습 값과 함께도 남김(뒤에 오는 같은 날 첫 답과 비교)
    // 첫 답 없이 노출만: 첫 노출일에 밀림 = C-push · 그 밖 노출 표시가 있거나 어느 기록의 첫 노출일이 E보다 늦음(= 그 기기가 더 늦은 날 다시 봄) = C-seen.
    //  뒤의 규칙 덕분에 '첫 시도 화면을 d일에 연 기기가 더 이른 첫 노출일을 받으면' 그 자리에서 노출됨이 되어(화면 중 받는 r4 제출 전 대조 포함), 이어 쓴 답이 이른 날의 첫 시도로 잘못 기록되지 않는다.
    if(pushed(a,da)||pushed(b,db))out[k+'x']='C-push';else if(a[k+'x']||b[k+'x']||(da&&da>E)||(db&&db>E))out[k+'x']='C-seen';
  }
  // 결과 합치기(순수 함수) — a = 남길 기록의 결과, b = 다른 기록의 결과. 첫 답·단계·미확인 표시는 a에 없으면 b에서(학습자당 한 번만 채점),
  //  C 문장은 cMerge2, 그 밖 첫 시도(T5·T6·T14a·재확인 회차)는 서로 다르면 미확인.
  function mergeRes2(a,b){
    const out={...a};
    for(const [k,v] of Object.entries(b||{})){
      if(SEEN_KEY2.test(k)||O_KEY2.test(k)||CK2.includes(k)||CU_KEY2.test(k))continue;   // r4: C 문장의 미확인 표시도 cMerge2가 다시 판정
      if(UNSURE2.test(k)||RES_KEY2.test(k)){if(!out[k])out[k]=v;}
    }
    for(const k of CK2)cMerge2(out,a,b||{},k);
    const bk=o=>Object.keys(o).filter(k=>/^B\.t-[a-z]+\.\d+$/.test(k));
    for(const k of uniq(['T5','T6','T14a',...bk(a),...bk(b||{})])){const x=first2(a,k),y=first2(b||{},k);if(x&&y&&x!==y&&!out[k+'_u'])out[k+'_u']='u-mixed';}
    // r6(Codex r5 지적 2): 미확인 재확인 회차의 대표값은 받는 순서와 무관하게 'B-fail' = 독립 정답이 확인되지 않은 회차. 한 번 쓴 회차로 세고 예약은 이어 간다
    //  (남은 기회는 다음 학습일). r5는 남길 기록 쪽 값이라, 다른 기기의 B-ok가 대표값이 되면 '홈'으로 나간 기기만 그 값으로 마감해 다음 날 복습이 사라졌다.
    for(const k of Object.keys(out))if(/^B\.t-[a-z]+\.\d+$/.test(k)&&out[k+'_u'])out[k]='B-fail';
    return out;
  }
  // r6(Codex r5 지적 2): E2 재확인 예약 합치기 = E1 mergeB + 미확인 회차는 쓴 회차. 채점만 하고 마감 전인 열린 시도(skip)라도 미확인이면 이미 두 기기에서 답한 회차라
  //  시도 수에 넣고, 그 회차를 연 화면(opens = 두 기록의 열린 재확인 화면과 그 회차 — openK2)의 날을 마지막 날로 둔다(같은 날 새 회차를 열지 않음).
  //  다른 회차를 연 화면의 날은 쓰지 않는다. 그 기기가 나중에 마감해도 회차 = 화면을 연 회차라 두 번 세지 않는다.
  const openK2=st=>{const o=st&&st.open,it=o&&itemOf2(o.key);return it&&it.type==='b'?{key:o.key,date:o.date,k:'B.'+it.sid+'.'+bRound2(st,it.sid)}:null;};
  function mergeB2(m,loc,skip,opens,primaryRes){
    const out=[],sids=[...new Set([...m.b.map(x=>x.sid),...loc.b.map(x=>x.sid)])];
    const rn=k=>+k.split('.').pop();
    for(const sid of sids){
      const all=Object.keys(m.res).filter(k=>/^B\.t-[a-z]+\.\d+$/.test(k)&&k.startsWith('B.'+sid+'.')),ks=all.filter(k=>!(skip&&skip.has(k)));
      if(ks.some(k=>m.res[k]==='B-ok'&&!m.res[k+'_u']))continue;
      const y=m.b.find(x=>x.sid===sid),x=loc.b.find(z=>z.sid===sid),uks=all.filter(k=>m.res[k+'_u']),un=Math.max(0,...uks.map(rn));
      // 한쪽이 마지막 회차까지 마감했으면 다른 기기의 열린 화면이 예약을 되살릴 수 없다.
      const finalKey='B.'+sid+'.'+B_MAX;
      if((!y&&primaryRes[finalKey])||(!x&&loc.res[finalKey]))continue;
      // r7: 정답으로 마감한 쪽도 같다 — 예약이 없는 쪽 기록에 그 문장의 정답(미확인 아님)이 있으면, 같은 회차를 채점만 하고 '다음' 전인 다른 기기의 열린 화면이 예약을 되살릴 수 없다.
      const okDone=r=>all.some(k=>r[k]==='B-ok'&&!m.res[k+'_u']);
      if((!y&&okDone(primaryRes))||(!x&&okDone(loc.res)))continue;
      // 옛 기기의 열린 1회차를 빼더라도 마감한 2·3회차의 번호는 그대로다.
      const closedFailures=ks.filter(k=>m.res[k]==='B-fail').map(rn);
      const tries=Math.max(y?y.tries:0,x?x.tries:0,un,...closedFailures);if(tries>=B_MAX)continue;
      let last=later(y?y.last:'',x?x.last:'');
      if(un)for(const o of opens||[])if(o&&o.key==='b:'+sid&&uks.includes(o.k)&&DAY.test(o.date||''))last=later(last,o.date);
      out.push({sid,tries,last});
    }
    if(JSON.stringify(out)===JSON.stringify(m.b))return false;
    m.b=out;return true;
  }
  // T10 전체 제출 수(공유된 단계로 확정): 첫 정답 1 · 고쳐 맞힘 = 오답 수 + 1 · 정답 공개 3 · 그 밖 마감 = 오답 수. 갈라진 기록이면 '-', C 첫 답이 없으면 null.
  function triesT10(RS){
    if(RS.T10_u)return '-';const v=RS.T10||'';if(v==='C-ok')return 1;if(v!=='C-fail')return null;
    if(RS.T10h==='h-ok')return RS.T10w3?'-':(RS.T10w2?2:1)+1;
    return RS.T10w3?3:RS.T10w2?2:1;
  }
  function pendingIn2(m,it){if(it.type==='step')return m.ptr<=it.idx;if(it.type==='b')return m.b.some(x=>x.sid===it.sid);if(it.type==='dc')return m.def.some(x=>x.id===it.id);return false;}
  function itemDone2(m,it,bkey){
    if(it.type==='step')return m.ptr>it.idx;
    if(it.type==='dc')return !m.def.some(x=>x.id===it.id)&&!!(m.res[it.id]||m.res[it.id+'x']);
    if(it.type==='b')return !!bkey&&!!m.res[bkey];
    return false;
  }
  function mergeFacts2(m,loc){
    let f=false;
    for(const k of ['days','done','noc']){const u=uniq([...m[k],...loc[k]]);if(u.length!==m[k].length)f=true;m[k]=u;}
    const ok0=uniq(m.ok).slice(-8).join(),ou=uniq([...m.ok,...loc.ok]);m.ok=ou;if(ou.slice(-8).join()!==ok0)f=true;
    for(const k of ['t5','t8a','t10','t13'])if(loc[k]&&(!m[k]||loc[k]<m[k])){m[k]=loc[k];f=true;}
    for(const k of ['sd','dcd'])if(loc[k]&&loc[k]>m[k]){m[k]=loc[k];f=true;}
    if(loc.sec&&loc.sec.date&&(loc.sec.date>m.sec.date||(loc.sec.date===m.sec.date&&loc.sec.n>m.sec.n))){m.sec={date:loc.sec.date,n:loc.sec.n};f=true;}
    return f;
  }
  // 공유 기록 받기(순수 함수) = E1 adopt(r6)에서 S9 사실 처리를 뺀 것 + '미확인'. 더 최근 서버 기록(rem)을 쓰되 이 기기(loc)에만 있는 실제 기록은 보존한다.
  function adopt2(loc,rem,c,date){
    const m=copy(rem),added=[],logs=[];
    if(loc.mine)m.mine=copy(loc.mine);   // 후속 r1: 이 기기에서 직접 낸 T14 첫 답(기기에만 두는 칸) — 받은 기록에는 없다
    const gl=loc.open?gradedOpen2(loc):null,gkey=gl?keyOf2(gl.item):'';
    // r2(Codex r1 HOLD 1): 이 기기에서 열었지만 첫 제출 전인 C 문장(T9·T10·T11). 받은 기록에 이 열린 화면이 없으면 노출이 사라지므로 아래에서 보존한다.
    const ls=!gl&&loc.open?seenTarget2(loc,loc.open.key,null):null;
    const doneThere=gl?itemDone2(rem,gl.item,gl.r.bkey):false,rg=rem.open?gradedOpen2(rem):null,remGraded=!!rg;
    const skip=new Set([gl&&gl.r.bkey,rg&&rg.r.bkey].filter(Boolean));
    const sameOpen=x=>!!(gl&&x.open&&x.open.key===gkey&&(gl.item.type!=='b'||'B.'+gl.item.sid+'.'+bRound2(x,gl.item.sid)===gl.r.bkey));   // r6: 연 회차로 비교
    // r3(Codex r2 HOLD 1·2·3): 결과 합치기는 mergeRes2 한 곳 — 이 기기에만 있는 첫 답·단계 보존, C 문장은 첫 노출일로 선후 판정, 선후를 알 수 없는 첫 답만 미확인.
    const r0=m.res;m.res=mergeRes2(withOpen2(rem.res,rem.open),withOpen2(loc.res,loc.open));
    for(const k of uniq([...Object.keys(r0),...Object.keys(m.res)]))if(r0[k]!==m.res[k])added.push(k);
    let f=mergeFacts2(m,loc);
    for(const id of ['T9','T11'])if(m.res[id]&&loc.res[id]&&!loc.def.some(x=>x.id===id)&&m.def.some(x=>x.id===id)){m.def=m.def.filter(x=>x.id!==id);f=true;}
    for(const x of loc.def)if(!m.def.some(y=>y.id===x.id)&&!m.res[x.id]){m.def.push({id:x.id,from:x.from});f=true;}
    m.def.sort((x,y)=>IDX2[x.id]-IDX2[y.id]);
    if(mergeB2(m,loc,skip,[openK2(loc),openK2(rem)],rem.res))f=true;
    if(loc.ptr>m.ptr){m.ptr=loc.ptr;f=true;}
    const ro=m.open,rit=ro?itemOf2(ro.key):null;
    if(ro&&(!rit||!pendingIn2(m,rit))){m.open=null;f=true;}
    if(gl&&!remGraded&&pendingIn2(m,gl.item)&&!(sameOpen(m)&&m.open.date===loc.open.date)){
      const cand={...m,open:{key:gkey,date:loc.open.date,...(gl.item.type==='b'?{n:+gl.r.bkey.split('.').pop()}:{})}};   // r6: 재확인은 연 회차를 함께
      if(gradedOpen2(cand)){if(m.open&&m.open.key!==gkey)markSeen2(m,m.open.key,gkey);m.open=cand.open;f=true;}
    }
    // r2: 받은 기록에서도 같은 화면(같은 날)이 열려 있으면 그대로. 받은 기록에 열린 화면이 없고 그 문장이 아직 남아 있으면 열린 화면을 되살린다
    //  (같은 날이면 첫 시도로 이어 풀고, 날짜가 지났으면 화면을 열 때 노출됨으로). 그 밖(다른 기기가 이월·진행·다른 화면) = 노출됨·미채점.
    if(ls&&!m.res[ls]&&!m.res[ls+'x']&&!(m.open&&m.open.key===loc.open.key&&m.open.date===loc.open.date)){
      const lit=itemOf2(loc.open.key);
      if(!m.open&&lit&&pendingIn2(m,lit)){m.open={key:loc.open.key,date:loc.open.date};f=true;}
      else{m.res[ls+'x']='C-seen';added.push(ls+'x');}
    }
    // r6(Codex r5 지적 4): 합친 기록의 열린 화면이 이 기기에서 채점한 그 시도(문항·날짜·재확인 회차 같음)이면, 받은 기록도 같은 시도를 채점했더라도 이 기기 화면 상세(cur)를 둔다.
    //  이 기기가 실제로 낸 첫 제출(own)과 입력(typed)이 미확인 행의 근거라서다. r5는 받은 기록이 채점했으면 버려, 같은 날 다시 열고 마감한 행이 'C=ok;typed='(대표값)로 남았다.
    const keepCur=!!(gl&&m.open&&sameOpen(m)&&m.open.date===loc.open.date);
    // r7(Codex 11/24): 이 기기가 채점한 시도를 합친 기록에서 이어 가지 않으면(화면 상세 cur를 버리는 모든 경우 — 닫힘·다른 화면, 같은 문항·회차라도 다른 날 연 화면)
    //  받은 기록에 그 문항 결과가 있을 때 이 기기의 첫 제출을 그 답을 낸 날짜(loc.open.date)로 한 번 남긴다. r6는 문항·회차만 같으면 건너뛰어, 다른 날 같은 회차를 푼 기기의
    //  기록을 받으면 이 기기 첫 답의 행이 사라졌다. 행은 합친 결과로 만든다 — 미확인이면 u=mixed 표시와 함께 이 기기 첫 제출(own)만 채점(없으면 분모 제외). 마감으로 남기는 행과 같은 규칙.
    if(gl&&doneThere&&!keepCur)logs.push(closeLogOf2(loc,loc.open.date,gkey,token2(gl.item,fillFromCur2(gl,c),(gl.item.type==='b'||m.res[(gl.item.id||gkey)+'_u'])?{...loc,res:m.res}:loc)));
    // r7: 이 기기가 답을 낸 재확인 회차(own)가 받은 기록의 다른 열린 화면에 밀려 이어지지 않고 받은 기록에 그 회차 결과도 없으면(두 기기가 한 회차 어긋난 경우 등) 그 답을 낸 날로 마감한다
    //  — 날짜가 지나 복구 마감하는 것(closeOne2)과 같은 규칙. 두지 않으면 열린 화면이 사라진 채점 결과를 다음 합치기가 '마감한 회차'로 세어, 이 기기의 행·독립일 없이 회차만 쓰인다.
    //  예약의 마지막 날은 뒤로 가지 않게 늦은 쪽. 다른 기기 답만 받은 열린 화면(own 없음)은 그 기기가 스스로 마감하므로 여기서 닫지 않는다.
    if(gl&&gl.item.type==='b'&&!keepCur&&!doneThere&&c&&c.key===gkey&&c.own&&c.own[gl.r.bkey]&&pendingIn2(m,gl.item)){
      const r=fillFromCur2(gl,c),sidB=gl.item.sid,last0=(m.b.find(x=>x.sid===sidB)||{}).last||'',s=complete2(m,loc.open.date,gl.item,r),x=s.b.find(z=>z.sid===sidB);
      if(x)x.last=later(last0,x.last);
      m.res=s.res;m.b=s.b;m.days=s.days.slice().sort();m.ok=s.ok.slice().sort();m.noc=s.noc.slice().sort();f=true;
      logs.push(closeLogOf2(loc,loc.open.date,gkey,token2(gl.item,r,s)));
    }
    // 후속 r1(E4·E5 r3 경우 6과 같음): T14를 이 기기에서 직접 풀다 '다음' 전에 나갔고, 받은 기록에서는 T14가 이미 끝났으면(이 기기에 다시 열 화면이 없음)
    //  직접 낸 첫 답을 그 화면을 연 날로 한 번 남긴다(마감 행 id = 날짜+문항 — 다시 받아도 같은 행).
    if(loc.open&&loc.open.key==='T14'&&loc.ptr<=IDX2.T14&&m.ptr>IDX2.T14&&loc.mine&&(loc.mine.T14a||loc.mine.T14b)){
      const R=m.res,r={d:(R.T14a||'').slice(2),dw:R.T14a==='D-fail'?3:R.T14a1?2:R.T14a0?1:0,b:(R.T14b||'').slice(2)||undefined,sel:c&&c.sel?c.sel.T14b:undefined,...(c&&c.own?{own:c.own}:{})};
      logs.push(closeLogOf2(loc,loc.open.date,'T14',token2({type:'step',idx:IDX2.T14,track:2},r,m)));
    }
    // 후속 r2(Codex r1 경우 1 · JH 2026-11-25 'S8a·T8·U8·V8 함께'): 연습 쓰기를 이 기기에서 끝내고(결과 cur.wres — v214에서 넘어온 두 번 오답 cur.w2>=2는 정답 공개)
    //  '다음' 전에 나간 사이 받은 기록에서 그 문항이 이미 끝났으면(이 기기에 다시 열 화면이 없음) 이 기기 쓰기 결과를 그 화면을 연 날로 한 번 남긴다
    //  (마감 행 id = 날짜+문항 — 다시 받아도 같은 행). 첫 오답만 내고 나갔으면(결과 없음) 남기지 않는다. v214까지는 쓰기 결과가 '다음'에서만 행이 되어 이 경우 사라졌다.
    //  후속 r4(Codex r3 검토): 행 날짜·id = 이 기기 결과가 정해진 화면을 연 날(c.wd). 날짜 칸이 없을 때만 열린 날짜(읽을 때 wdFill이 채움).
    {const pw=c&&c.phase==='write'&&(c.wres||(c.w2>=2?'fail':'')),pi=c&&c.item;
      if(pw&&pi&&pi.type==='step'&&loc.open&&loc.open.key===c.key&&loc.ptr<=pi.idx&&rem.ptr>pi.idx&&SEQ2[pi.idx]&&SEQ2[pi.idx].kind==='practice'&&SEQ2[pi.idx].write)
        logs.push(closeLogOf2(loc,c.wd||loc.open.date,c.key,token2(pi,{code:c.code||'ok',w:c.w||0,write:pw},m)));}
    // 후속 r3(Codex r2 검토 · JH 2026-11-25): 연습 쓰기 화면(쓰기 단계 cur)이 합친 기록에서도 같은 문항으로 열려 있고 아직 끝나지 않았으면(다른 기기의 중간 기록)
    //  이 기기 쓰기 화면(입력·결과·오답 수)을 그대로 둔다. r2는 버려서 첫 배열 화면으로 돌아갔고, 뒤에 그 기기가 먼저 마쳐도 이 기기 결과가 남지 않았다.
    //  E1 S8a는 문항 자리가 15여도 진행 위치가 14일 수 있어 위치가 같은지 대신 '지나지 않았는지'(m.ptr<=자리)로 본다.
    const wk=c&&c.phase==='write'&&c.item,keepW=!!(wk&&wk.type==='step'&&m.open&&m.open.key===c.key&&m.ptr<=wk.idx&&SEQ2[wk.idx]&&SEQ2[wk.idx].kind==='practice'&&SEQ2[wk.idx].write);
    return {st:m,added,logs,keepCur:keepCur||keepW,stamp:added.length>0||f,changed:added.length>0||logs.length>0||f};
  }
  // r2(Codex r1 HOLD 3)·r3(Codex r2 HOLD 2·3): index 수신기(PA_PROGRESS.mergeConcept)가 eng_fin-E2 두 기록을 합칠 때 부른다. primary = 남길(더 새) 기록의 토큰, other = 버려질 기록의 토큰.
  //  결과 토큰(r:)은 mergeRes2로 합친다 — 버려질 기록에만 있는 첫 답·단계(정답 공개·따라 놓기 마침 등)·첫 노출일·미확인 표시를 남기고, C 문장은 첫 노출일로 판정한다.
  //  그래서 중간에 그 문항이 없는 기록이 끼어도 이미 받은 첫 답이 사라지지 않는다(도착·기록 시각 순서와 무관). 결과 밖 토큰(진행 위치·예약·날 등)은 primary 그대로.
  function tokensRes2(q){const o={};for(const t of q){const p=String(t).split(':');if(p[0]==='r'&&p.length===3)o[p[1]]=p[2];}return o;}
  function tokensOpen2(q){for(const t of q){const p=String(t).split(':');if(p[0]==='op'&&p.length>=3&&DAY.test(p[p.length-1]))return {key:p.slice(1,-1).join(':'),date:p[p.length-1]};}return null;}
  //  r4(Codex r3 지적 3): 재확인 예약(b:)도 두 기록에서 합친다 — 앱의 mergeB와 같은 규칙(합친 결과에 그 문장의 B-ok가 있으면 끝, 시도 수는 큰 쪽,
  //  정한 횟수면 끝, 마지막 날은 늦은 쪽, 채점만 하고 마감 전인 열린 재확인 결과는 끝낸 것으로 세지 않음). 첫 오답으로 잡힌 다음 학습일 '지난 문장 다시 쓰기'가
  //  더 새 기록에 없다는 이유로 사라지지 않게. 그 밖 토큰(진행 위치·날·이월 등)은 r3와 같이 primary 그대로.
  function mergeQuestions2(primary,other){
    const A=Array.isArray(primary)?primary.slice():[],B=Array.isArray(other)?other:[];
    if(!A.includes('e2v:1')||!B.includes('e2v:1'))return A;
    const res=mergeRes2(withOpen2(tokensRes2(A),tokensOpen2(A)),withOpen2(tokensRes2(B),tokensOpen2(B)));
    const P=decode2({last_questions:A}),O=decode2({last_questions:B}),m={...P,res};
    const gP=P.open?gradedOpen2(P):null,gO=O.open?gradedOpen2(O):null;
    mergeB2(m,O,new Set([gP&&gP.r.bkey,gO&&gO.r.bkey].filter(Boolean)),[openK2(P),openK2(O)],P.res);
    // r6(Codex r5 지적 3): 재확인에 실패한 날(noc)은 어느 기기에서 생겼든 실제 기록 — 두 기록의 합집합(그날 새 C 배열 이월과 다음 학습일 배정이 한 기기에서 풀었을 때와 같게).
    const noc=uniq([...P.noc,...O.noc]).sort();
    const rest=A.filter(t=>{const p=String(t).split(':');return !((p[0]==='r'&&p.length===3)||(p[0]==='b'&&p.length===4)||(p[0]==='noc'&&p.length===2));});
    return uniq([...rest,...Object.entries(res).map(([k,v])=>'r:'+k+':'+v),...m.b.map(x=>'b:'+x.sid+':'+x.tries+':'+x.last),...noc.map(d=>'noc:'+d)]).filter(t=>TOKEN.test(t));
  }
  // 이 기기 기록이 더 새 경우(받지 않음): r3 — 받은(옛) 기록에만 있는 첫 답·단계·첫 노출일·미확인 표시와 재확인 예약도 이 기기에 합친다(mergeRes2·mergeB).
  //  진행 위치·열린 문항·이월 목록은 이 기기 것 그대로. 바뀐 것이 없으면 null.
  function reconcile2(loc,rem){
    if(!rem||!rem.res)return null;
    const s=copy(loc);s.res=mergeRes2(withOpen2(loc.res,loc.open),withOpen2(rem.res,rem.open));
    const gl=loc.open?gradedOpen2(loc):null,rg=rem.open?gradedOpen2(rem):null;
    mergeB2(s,{...rem,b:Array.isArray(rem.b)?rem.b:[]},new Set([gl&&gl.r.bkey,rg&&rg.r.bkey].filter(Boolean)),[openK2(loc),openK2(rem)],loc.res);
    // r6(Codex r5 지적 3): 받은(옛) 기록의 재확인 실패일도 합친다(합집합). r5는 이 기기 것만 남겨, 같은 날 다시 열면 이월해야 할 새 C 배열(T11)이 열렸다.
    s.noc=uniq([...loc.noc,...(Array.isArray(rem.noc)?rem.noc:[])]).sort();
    if(J2(s.res)===J2(loc.res)&&J2(s.b)===J2(loc.b)&&J2(s.noc)===J2(loc.noc))return null;
    return s;
  }
  // E2 성취(원고 §10) — 확인된 첫 시도만(로그 행 수·정답률로 다시 세지 않음). 미확인 = 기기 기록이 엇갈려 선후를 입증할 수 없음.
  function achieve2(st){
    const R=st.res,lab=(k,v)=>R[k+'_u']?'미확인':v,o={};
    o.A=lab('T5',R.T5==='A-ok'?'✔':R.T5||R.T5w?'✗':'');
    o.B=lab('T6',R.T6==='B-ok'?'✔':R.T6==='B-fail'?'✗':'');
    for(const k of ['T9','T10','T11'])o[k]=lab(k,R[k]==='C-ok'?'C ✔':R[k]==='C-fail'?(k==='T10'&&R.T10h==='h-ok'?'C ✗ · 도움 후 완성':'C ✗'):/^p-/.test(R[k]||'')||R[k+'x']?'노출됨·미채점':st.def.some(x=>x.id===k)?'미노출 이월':'');
    o.D=lab('T14a',R.T14a==='D-ok'?'✔':R.T14a||R.T14a0?'✗':'');
    o.B2=Object.keys(R).filter(k=>/^B\.t-[a-z]+\.\d+$/.test(k)).sort().map(k=>k+' '+lab(k,R[k]==='B-ok'?'✔':'✗'));
    return o;
  }

  // ───────────────────────── 화면 ─────────────────────────

  // ═══════════════ E4·E5 셋째·넷째 묶음 — E2 엔진(r7b)을 묶음 정의(C)만 바꿔 쓰는 공장 mkX(C) ═══════════════
  //  원고 E4E5_원고_v1.2 §10 · 대응표 E4E5_구현_대응표_v1. 이 공장의 함수는 E2 조각(app_e2_r7b/tools/e2_engine.js·e2_screens.js)을
  //  build_e4e5.py가 정해진 자리만 바꿔 만든 것이다(r1~r7b의 기기 간 합치기·미확인·마감 규칙을 그대로 받는다). E2 자체(S2·SEQ2·st2…)는 바꾸지 않는다.
  //  바꾼 자리: 문항 번호(T5·T6·T9·T11·T10·T13·T14 → C.A·C.B·C.CA·C.W·C.LAST·C.XM) · 문장 접두('t-' → C.PX) · 저장 키·공유 기록·결과 로그·표지(e2v:1 → C.MARK)·
  //  묶음 번호(track 2 → C.TR). E4는 둘째 C 배열·시험처럼 ②가 없고 고르기 화면이 하나다 — 목록(C.CA·C.CH)과 C.XB로 처리한다.
  //  화면 쪽 새 규칙(원고 v1.2): V10 낱말을 더하지 않은 문장·who·작은따옴표(don't 한 낱말) 판정, 시험처럼 ① 덩어리 타일·도움 자리(zones)·이름 줄, 장면 자막만(V1).
  function mkX(C){
    const KEY2=C.KEY,LOG_KEY2=C.LOG,CONCEPT2=C.CONCEPT,T14_FROM='2026-12-13',T14_GAP=7,TR=C.TR,PX=C.PX;
    const S2=C.S,SEQ2=C.SEQ;
    const A_=C.A,B_=C.B,W_=C.W,WS=C.WS,CA=C.CA,LAST=C.LAST,XM=C.XM,XA=C.XM+'a',XB=!!C.XB,CHK=C.CH;   // CHK = {고르기 화면 id: [문항 키…]}
    const RBK=new RegExp('^B\\.'+PX+'-[a-z]+\\.\\d+$'),RBN=new RegExp('^B\\.('+PX+'-[a-z]+)\\.(\\d+)$');
    // 이 묶음의 진도·앉은 자리·전송 표시·미기록 로그·마지막으로 쓴 저장 묶음(E2의 st2·sit2·shared2·held2·w2last에 해당)
    const H={st:null,sit:null,shared:'',held:[],wlast:''};
  const IDX2=Object.fromEntries(SEQ2.map((s,i)=>[s.id,i]));
  function fresh2(){return {v:1,ptr:0,res:{},b:[],days:[],done:[],noc:[],ok:[],sec:{date:'',n:0},t5:'',t8a:'',t10:'',t13:'',def:[],dcd:'',sd:'',open:null,evidence_at:'',event_id:''};}
  const e2Fin=st=>st.ptr>=IDX2.END&&!st.def.length&&!st.b.length;
  // '다음에 풀 문항'(경계 건너뜀). Codex 착수 의견 2: T13을 마친 직후 진행 위치는 T14 앞 경계(brk3)라 위치 == T14로 비교하면 시험이 열리지 않는다.
  const nextStep2=st=>{let i=st.ptr;while(i<SEQ2.length&&SEQ2[i].kind==='break')i++;return i;};
  const writeDue2=(st,date)=>st.ptr<=IDX2[W_]&&!!st.t8a&&st.t8a<date;
  const defDue2=(st,date)=>!!st.t10&&st.t10<date&&st.dcd!==date&&!st.noc.includes(date)?st.def.find(x=>x.from<=date)||null:null;
  // T14: T5(A) 7일 뒤 이후(7일 뒤가 12/13을 넘으면 12/13) + E2 순서(T13)를 마친 다음 날 이후. 날짜는 실제 날짜.
  const t14Due=(st,date)=>nextStep2(st)===IDX2[XM]&&!!st.t5&&!!st.t13&&st.t13<date&&(gap(st.t5,date)>=T14_GAP||date>=T14_FROM);
  // 시험처럼(XM)을 오늘 열었거나 마쳤거나 오늘 열 수 있음 → 그날 뒤 묶음의 시험처럼은 쉼(원고 E4E5 §6 '시험처럼 풀기는 하루 하나, 앞 묶음 먼저').
  const xDay=(st,date)=>(!!st.open&&st.open.key===XM&&st.open.date===date)||(st.ptr>IDX2[XM]&&st.sd===date)||t14Due(st,date);
  // E2 순서 부분(planJ 6): 경계에서 그날 E2 순서 화면을 했으면 멈춤. 실패한 날(st2.noc — 묶음별) 새 C 배열은 skip(이월).
  function seq2(st,date){
    const noc=st.noc.includes(date);
    for(let i=st.ptr;i<SEQ2.length;i++){
      const s=SEQ2[i];
      if(s.kind==='break'){if(st.sd===date)return {type:'stop',reason:'break'};continue;}
      if(s.kind==='write'||s.kind==='exam'||s.kind==='end')return null;
      if(s.layer==='C')return noc?{type:'skip',idx:i,track:TR}:{type:'step',idx:i,track:TR};
      return {type:'step',idx:i,track:TR};
    }
    return null;
  }
  function pushDef2(st,id,date){if(!st.def.some(x=>x.id===id)){st.def.push({id,from:add(date,1)});st.def.sort((x,y)=>IDX2[x.id]-IDX2[y.id]);}}
  function deferAt2(st0,idx,date){const st=copy(st0);pushDef2(st,SEQ2[idx].id,date);st.ptr=Math.max(st.ptr,idx+1);return st;}
  const keyOf2=it=>it.type==='b'?'b:'+it.sid:it.type==='dc'?'dc:'+it.id:SEQ2[it.idx].id;
  function itemOf2(key){
    if(key.startsWith('b:'+PX+'-'))return S2[key.slice(2)]?{type:'b',sid:key.slice(2),track:TR}:null;
    if(key.startsWith('dc:'+C.L)){const id=key.slice(3),s=SEQ2[IDX2[id]];return s&&s.layer==='C'&&s.kind==='arrange'?{type:'dc',id,track:TR}:null;}
    return IDX2[key]!==undefined?{type:'step',idx:IDX2[key],track:TR}:null;
  }
  function resumable2(st,date){
    const o=st.open;if(!o||o.date!==date||st.done.includes(date))return null;
    const it=itemOf2(o.key);if(!it)return null;
    if(it.type==='step'){
      if(!(it.idx>=st.ptr&&SEQ2[it.idx].kind!=='break'))return null;
      for(let j=st.ptr;j<it.idx;j++){const x=SEQ2[j];if(x.kind==='break'||(SEQ2[it.idx].kind==='write'&&x.layer==='C'))continue;return null;}
      return it;
    }
    if(it.type==='b')return st.b.some(x=>x.sid===it.sid&&x.last<date)?it:null;   // r5: 그날 회차를 이미 마친 재확인(다른 기기 포함)은 같은 날 다시 열지 않음(원고 §7 '다음 학습일에 한 번')
    if(it.type==='dc')return st.def.some(x=>x.id===it.id)?it:null;
    return null;
  }
  // 노출됨·미채점: 처음 보는 문장(T9·T11 배열, T10 쓰기 — 원고 §7-5)을 열었다가 첫 제출 없이 다른 화면으로 밀림.
  function seenTarget2(st,fromKey,toKey){
    if(!fromKey||fromKey===toKey)return null;
    const it=itemOf2(fromKey);if(!it)return null;
    const s=it.type==='dc'?SEQ2[IDX2[it.id]]:it.type==='step'?SEQ2[it.idx]:null;
    if(!s||s.layer!=='C'||(s.kind!=='arrange'&&s.kind!=='write')||st.res[s.id]||st.res[s.id+'x'])return null;
    return s.id;
  }
  function markSeen2(st,fromKey,toKey){const id=seenTarget2(st,fromKey,toKey);if(!id)return false;st.res[id+'x']='C-seen';return true;}
  // 화면 하나를 마친 결과 반영(순수 함수) — E1 complete와 같은 규칙을 E2 순서표로.
  function complete2(st0,date,item,r){
    const st=copy(st0);r=r||{};
    if(!st.days.includes(date))st.days.push(date);
    const okDay=()=>{if(!st.ok.includes(date))st.ok.push(date);},okIf=k=>{if(!st.res[k+'_u'])okDay();};   // r5: 미확인(엇갈린 첫 답)의 대표값으로는 독립일을 세지 않음
    if(item.type==='b'){
      // r5(Codex r4 지적 1): 마감하는 회차 = 화면을 연 회차(r.bkey). 다른 기기가 이미 마친 회차면 시도 수를 다시 올리지 않는다(남은 기회 보존).
      const sid=item.sid,x=st.b.find(y=>y.sid===sid),bm=RBN.exec(r.bkey||''),n=bm&&bm[1]===sid?+bm[2]:0;if(!x)return st;
      const key=n?r.bkey:'B.'+sid+'.'+(x.tries+1);fix(st,key,'B-'+(r.code==='ok'?'ok':'fail'));
      if(st.res[key]==='B-ok'){st.b=st.b.filter(y=>y.sid!==sid);okIf(key);}
      else{x.tries=Math.max(x.tries,n||x.tries+1);x.last=date;if(x.tries>=B_MAX)st.b=st.b.filter(y=>y.sid!==sid);if(!st.noc.includes(date))st.noc.push(date);}
      return st;
    }
    if(item.type==='dc'){
      const id=item.id,s=SEQ2[IDX2[id]];if(!s||!st.def.some(x=>x.id===id))return st;
      if(seen2(st,id)||/^p-/.test(st.res[id]||'')){fix(st,id,'p-'+(r.code||'ok'));st.def=st.def.filter(x=>x.id!==id);st.dcd=date;return st;}
      fix(st,id,'C-'+(r.code==='ok'?'ok':'fail'));st.def=st.def.filter(x=>x.id!==id);st.dcd=date;
      if(st.res[id]==='C-ok')okIf(id);else schedule(st,s.sent,date);
      return st;
    }
    const s=SEQ2[item.idx];st.ptr=Math.max(st.ptr,item.idx+1);st.sd=date;
    switch(s.kind){
      case 'blank':fix(st,s.id,'m-'+(r.memo||'solo'));break;
      case 'arrange':
        if(s.layer==='A'){fix(st,s.id,'A-'+(st.res[s.id+'w']&&r.code==='ok'?'help':r.code));st.t5=st.t5||date;if(st.res[s.id]==='A-ok')okIf(s.id);}
        else if(seen2(st,s.id)||/^p-/.test(st.res[s.id]||''))fix(st,s.id,'p-'+(r.code||'ok'));
        else{fix(st,s.id,'C-'+(r.code==='ok'?'ok':'fail'));if(st.res[s.id]==='C-ok')okIf(s.id);else schedule(st,s.sent,date);}
        break;
      case 'check':fix(st,s.id,'B-'+(r.code==='ok'?'ok':'fail'));if(st.res[s.id]==='B-ok')okIf(s.id);else schedule(st,s.sent,date);break;
      case 'practice':fix(st,s.id,'p-'+(r.code||'ok'));if(s.write)st.t8a=st.t8a||date;break;
      case 'write':
        // T10을 마치면 그 앞의 결과 없는 C 배열(시간 때문에 못 연 T9 = 미노출 C, 또는 노출됨)은 이월. 첫 시도를 한 것은 그 결과로 마감(E1 S8W와 같은 규칙).
        for(let i=st0.ptr;i<item.idx;i++){const c=SEQ2[i];if(c.layer!=='C'||c.kind!=='arrange')continue;
          if(!st.res[c.id])pushDef2(st,c.id,date);
          else if(st.res[c.id]==='C-ok')okIf(c.id);
          else if(st.res[c.id]==='C-fail'&&!st.b.some(x=>x.sid===c.sent))st.b.push({sid:c.sent,tries:0,last:date});}
        if(seen2(st,s.id)||/^p-/.test(st.res[s.id]||''))fix(st,s.id,'p-'+(r.code||'ok'));
        else{fix(st,s.id,'C-'+(r.code==='ok'?'ok':'fail'));if(st.res[s.id]==='C-ok')okIf(s.id);else schedule(st,s.sent,date);}
        st.t10=st.t10||date;break;
      case 'choose':for(const [k,v] of Object.entries(r.res||{}))if(/^(ok|fail)$/.test(v))fix(st,k,'p-'+v);if(s.id===LAST)st.t13=st.t13||date;break;
      case 'exam':if(!st.res[XA]&&r.d)fix(st,XA,'D-'+(st.res[XA+'0']&&r.d==='ok'?'help':r.d));if(XB&&r.b)fix(st,XM+'b','p-'+r.b);if(st.res[XA]==='D-ok')okIf(XA);break;
      default:fix(st,s.id,'seen');
    }
    return st;
  }
  // 채점한 채 끝나지 않은 열린 문항(→ 채점한 날로 마감). T14(①만 하고 나감)·고르기·연습은 마감하지 않고 다음에 이어 간다
  //  (Codex 착수 의견 2 · 원고 v1.3 §6 '①만 하고 나간 날은 ①의 남은 도움·② 연습이 남은 것').
  // r6(Codex r5 지적 2): 재확인은 화면을 연 회차로 찾는다(제출·'다음'·당일 종료·다음 날 복구 모두). 이 기기가 연 화면 = open.n(render가 남김),
  //  받은 기록의 열린 화면 = 예약의 마지막 날로 판정 — 그날 마감된 회차가 있으면 그 회차(재확인은 하루 한 회차만 열림), 없으면 다음 회차. r5는 늘 '예약 횟수+1'이라
  //  다른 기기가 같은 회차를 마쳐 횟수가 오르면 이 기기가 채점한 회차를 찾지 못했다(마감·로그 없음).
  function bRound2(st,sid){const o=st&&st.open,x=st&&st.b.find(y=>y.sid===sid),mine=!!(o&&o.key==='b:'+sid);
    if(mine&&o.n>0)return o.n;if(!x)return 0;return mine&&x.tries>0&&x.last===o.date?x.tries:x.tries+1;}
  function gradedOpen2(st){
    const o=st&&st.open;if(!o)return null;const it=itemOf2(o.key);if(!it)return null;
    const v=k=>String(st.res[k]||''),got=(re,k)=>re.test(v(k))?{item:it,r:{code:v(k).split('-')[1]}}:null;
    if(it.type==='b'){const n=bRound2(st,it.sid);if(!n)return null;const k='B.'+it.sid+'.'+n,g=got(/^B-(ok|fail)$/,k);if(g)g.r.bkey=k;return g;}
    if(it.type==='dc')return st.def.some(x=>x.id===it.id)?got(/^C-(ok|fail)$/,it.id):null;
    if(it.idx<st.ptr)return null;
    const s=SEQ2[it.idx];
    if(s.kind==='arrange')return s.layer==='A'?got(/^A-(ok|help|fail)$/,s.id):got(/^C-(ok|fail)$/,s.id);
    if(s.kind==='check')return got(/^B-(ok|fail)$/,s.id);
    if(s.kind==='write')return got(/^C-(ok|fail)$/,s.id);
    return null;
  }
  const closeId2=(date,key)=>C.tagl+'-'+date.replace(/-/g,'')+'-close-'+key.replace(/[^A-Za-z0-9]/g,'');
  function closeLogOf2(s,date,key,tk){return {id:closeId2(date,key),date,items:[tk],sec:0,reason:'recovered',ptrId:(SEQ2[s.ptr]||{}).id};}
  function fillFromCur2(g,c){
    const r={...g.r};
    if(c&&c.key===keyOf2(g.item)){const s=g.item.type==='step'?SEQ2[g.item.idx]:null;
      if(s&&s.kind==='arrange'&&s.layer==='A')r.w=c.w||0;
      if(s&&s.kind==='write'){const t=c.typed||[];r.w=c.w!==undefined?c.w:Math.max(0,t.length-1);r.n=t.length;r.typed=t.join(' / ');if(c.late&&c.late.length)r.late=c.late.join(' / ');}
      if(c.own)r.own=c.own;}
    return r;
  }
  function closeOne2(s0,g,c){const date=s0.open.date,r=fillFromCur2(g,c),s=complete2(s0,date,g.item,r);s.open=null;return {st:s,log:closeLogOf2(s,date,keyOf2(g.item),token2(g.item,r,s))};}
  // 결과 로그 토큰(원고 §10 기록 칸: C ✔ · C ✗ · 도움 후 완성(help=ok) · 노출됨·미채점(seen=1) · 미노출 이월(def=1)).
  // r5(Codex r4 README ②): 미확인(<키>_u)이면 합친 대표값으로 새 점수를 만들지 않는다 — 이 기기가 낸 첫 제출(r.own)이 있으면 그 값으로, 없으면 채점에서 뺀다(g:false). 둘 다 u=mixed 표시.
  //  r6(Codex r5 지적 4): 이 기기 첫 제출이 없으면 nd(분모 제외) — 행 합계가 비어도 문항 수로 채우지 않는다(logRecord2).
  function uTok2(RS,r,k,v,fmt){const own=r.own&&r.own[k],w=own||v;return {t:fmt(w,';u=mixed'),g:!!own,ok:!!own&&/-ok$/.test(own),...(own?{}:{nd:true})};}
  function token2(item,r,S0){
    const RS=S0.res;r=r||{};
    if(item.type==='b'){const t=r.bkey&&RS[r.bkey]?r.bkey:Object.keys(RS).filter(k=>k.startsWith('B.'+item.sid+'.')&&!/_u$/.test(k)).sort().pop();
      if(RS[t+'_u'])return uTok2(RS,r,t,RS[t],(w,u)=>`${t}[${w}${u}]`);return {t:`${t}[${RS[t]}]`,g:true,ok:RS[t]==='B-ok'};}
    if(item.type==='dc'){const v=RS[item.id]||'C-fail';if(/^p-/.test(v))return {t:`${item.id}[${v.replace('-','=')};def=1;seen=1]`,g:true,ok:v==='p-ok'};
      if(RS[item.id+'_u'])return uTok2(RS,r,item.id,v,(w,u)=>`${item.id}[${w.replace('-','=')}${u};def=1]`);return {t:`${item.id}[${v.replace('-','=')};def=1]`,g:true,ok:v==='C-ok'};}
    const s=SEQ2[item.idx],v=RS[s.id]||'',pv=k=>/^p-(ok|fail)$/.test(RS[k]||'')?RS[k].slice(2):'',U=RS[s.id+'_u'];
    const tries=r.w===undefined?'-':(r.w||0)+1;
    switch(s.kind){
      case 'blank':return {t:`${s.id}[memo=${r.memo}]`,g:true,ok:r.memo==='solo'};
      case 'arrange':if(/^p-/.test(v))return {t:`${s.id}[${v.replace('-','=')};seen=1]`,g:true,ok:v==='p-ok'};{const aw=s.layer==='A'?';w='+(r.w===undefined?'-':r.w):'';
        if(U)return uTok2(RS,r,s.id,v,(w,u)=>`${s.id}[${w.replace('-','=')}${u}${aw}]`);return {t:`${s.id}[${v.replace('-','=')}${aw}]`,g:true,ok:/-ok$/.test(v)};}
      case 'check':if(U)return uTok2(RS,r,s.id,v,(w,u)=>`${s.id}[${w.replace('-','=')}${u}]`);return {t:`${s.id}[${v.replace('-','=')}]`,g:true,ok:v==='B-ok'};
      case 'write':{const loc=r.n!==undefined?r.n:tries;   // r2: 이 기기의 실제 제출 수(세 번 틀려 정답을 본 경우 3 — r1은 w+1 = 4)
        if(/^p-/.test(v))return {t:`${s.id}[${v.replace('-','=')};seen=1;tries=${loc}]`,g:true,ok:v==='p-ok'};
        // r3(Codex r2): 기기를 바꿔도 공유된 단계(첫 답·T10w2·T10w3·T10h)로 확정되는 전체 제출 수. 갈라진 기록(미확인·정답 공개와 도움 후 완성이 함께)은 '-'.
        const sh=triesT10(RS),tn=sh==='-'?'-':sh===null?loc:Math.max(sh,typeof loc==='number'?loc:0);
        // r5: late = 다른 기기의 첫 정답을 받은 뒤 이 기기에서 쓴 문장(첫 시도 이력 typed와 섞지 않음)
        const tail=w=>`${RS[W_+'h']==='h-ok'?';help=ok':''};typed=${encodeURIComponent(r.typed||'')}${r.late?';late='+encodeURIComponent(r.late):''}`;
        if(U)return uTok2(RS,r,s.id,v,(w,u)=>`${s.id}[${w.replace('-','=')}${u};tries=${tn}${tail(w)}]`);
        return {t:`${s.id}[${v.replace('-','=')};tries=${tn}${tail(v)}]`,g:true,ok:v==='C-ok'};}
      case 'practice':return {t:`${s.id}[p=${r.code};w=${r.w||0}${r.write?';write='+r.write:''}]`,g:true,ok:r.code==='ok'};
      case 'choose':{const ks=CHK[s.id],f=ks.map(pv),sel=r.sel||{};
        return {t:ks.map((k,i)=>`${k}[p=${f[i]||'-'}${f[i]?';sel='+(sel[k]===undefined?'-':sel[k]):''}]`).join(', '),g:true,ok:f[0]==='ok',extra:f.slice(1).filter(Boolean).map(x=>x==='ok')};}
      case 'exam':{const U=RS[XA+'_u'],own=U?(r.own&&r.own[XA])||'':'',d=U?own||RS[XA]||'D-'+r.d:RS[XA]||'D-'+r.d;   // r5: 미확인이면 이 기기 첫 제출, 없으면 정답으로 세지 않음
        const M=S0.mine||{},m1=M[XA],m2=XB?M[XM+'b']:undefined;   // r3: 이 기기에서 직접 낸 첫 답(①·②)
        const t1=`${XA}[${d.replace('-','=')}${U?';u=mixed':''}${m1?((m1==='ok')!==(d==='D-ok')?';own='+m1:''):';seen=1'};w=${r.dw===undefined?'-':r.dw}]`,
          t2=XB?`${XM}b[p=${r.b?r.b+';sel='+(r.sel===undefined?'-':r.sel):'-'}${m2?(m2!==r.b?';own='+m2:''):';seen=1'}]`:'';
        // r3(Codex r2 대조표): ①을 직접 냈으면 ①(+직접 고른 ②), ②만 직접 골랐으면 ②만(취약 이름이 ②가 되게 앞에), 둘 다 결과·해설만 봤으면 행 분모 0.
        if(m1)return {t:t1+(t2?', '+t2:''),g:true,ok:m1==='ok',extra:m2?[m2==='ok']:[]};
        if(m2)return {t:t2+', '+t1,g:true,ok:m2==='ok',extra:[]};
        return {t:t1+(t2?', '+t2:''),g:false,ok:false,nd:true};}
      default:return {t:`${s.id}[seen]`,g:false};
    }
  }
  // 기기 간 공유: 개념 기록 하나(eng_fin-E2, 토큰 형식은 E1과 같음 — 표지 e2v:1). 서버는 일반 개념 병합(더 새 기록) — GAS 무변경(원고 §10 (b)).
  function encode2(st){
    const q=[C.MARK,'ptr:'+SEQ2[Math.min(st.ptr,SEQ2.length-1)].id+':'+st.ptr];
    for(const [k,v] of Object.entries(st.res))q.push('r:'+k+':'+v);
    for(const x of st.b)q.push('b:'+x.sid+':'+x.tries+':'+x.last);
    for(const d of st.days)q.push('day:'+d);for(const d of st.done)q.push('done:'+d);for(const d of st.noc)q.push('noc:'+d);
    if(st.sec.date)q.push('sec:'+st.sec.date+':'+st.sec.n);
    for(const k of ['t5','t8a','t10','t13'])if(st[k])q.push(k+':'+st[k]);
    for(const x of st.def)q.push('dc:'+x.id+':'+x.from);if(st.dcd)q.push('dcd:'+st.dcd);if(st.sd)q.push('sd:'+st.sd);if(st.open)q.push('op:'+st.open.key+':'+st.open.date);
    const days=uniq(st.days),last=days[days.length-1];
    const graded=Object.entries(st.res).filter(([,v])=>/^(A|B|C|D)-(ok|help|fail)$/.test(v));
    const lastV=graded.length?graded[graded.length-1][1]:'';
    return {v:1,last_day:last,due:add(last,1),last_ok:/-ok$/.test(lastV),introduced:true,error_days:graded.filter(([,v])=>/-(fail)$/.test(v)).length,
      last_status:!lastV?'assisted':/-ok$/.test(lastV)?'independent':/-help$/.test(lastV)?'assisted':'incorrect',
      last_questions:uniq(q).filter(t=>TOKEN.test(t)),independent_days:uniq(st.ok).slice(-8),evidence_at:st.evidence_at,event_id:st.event_id};
  }
  function decode2(c){
    if(!c||!Array.isArray(c.last_questions)||!c.last_questions.includes(C.MARK))return null;
    const st=fresh2();
    for(const t of c.last_questions){
      const p=String(t).split(':');
      if(p[0]==='ptr'&&IDX2[p[1]]!==undefined)st.ptr=IDX2[p[1]];
      else if(p[0]==='r'&&p.length===3)st.res[p[1]]=p[2];
      else if(p[0]==='b'&&p.length===4&&S2[p[1]]&&DAY.test(p[3]))st.b.push({sid:p[1],tries:+p[2]||0,last:p[3]});
      else if(p[0]==='day'&&DAY.test(p[1]))st.days.push(p[1]);
      else if(p[0]==='done'&&DAY.test(p[1]))st.done.push(p[1]);
      else if(p[0]==='noc'&&DAY.test(p[1]))st.noc.push(p[1]);
      else if(p[0]==='sec'&&DAY.test(p[1]))st.sec={date:p[1],n:+p[2]||0};
      else if(['t5','t8a','t10','t13'].includes(p[0])&&DAY.test(p[1]))st[p[0]]=p[1];
      else if(p[0]==='dcd'&&DAY.test(p[1]))st.dcd=p[1];
      else if(p[0]==='sd'&&DAY.test(p[1]))st.sd=p[1];
      else if(p[0]==='op'&&p.length>=3&&DAY.test(p[p.length-1])&&itemOf2(p.slice(1,-1).join(':')))st.open={key:p.slice(1,-1).join(':'),date:p[p.length-1]};
      else if(p[0]==='dc'&&p.length===3&&itemOf2('dc:'+p[1])&&DAY.test(p[2]))st.def.push({id:p[1],from:p[2]});
    }
    st.ok=(c.independent_days||[]).filter(d=>DAY.test(d));st.days.sort();st.done.sort();st.noc.sort();st.def.sort((x,y)=>IDX2[x.id]-IDX2[y.id]);
    st.evidence_at=c.evidence_at||'';st.event_id=c.event_id||'';
    return st;
  }
  // 받을 때 보존하는 결과 키(학습자당 한 번만 채점) · 노출 표시 · 미확인 표시.
  //  r2: T10w2·T10w3(T10 둘째·셋째 오답 — 다른 기기에서 남은 도움 단계 복원) · T14a1(T14 ① 둘째 오답) · T14af(셋째 오답 뒤 따라 놓기 마침).
  const CK2=SEQ2.filter(s=>s.layer==='C'&&(s.kind==='arrange'||s.kind==='write')).map(s=>s.id),BKS='B\\.'+PX+'-[a-z]+\\.\\d+';   // C 문장(첫 시도 화면) = CA + W
  const RES_KEY2=new RegExp('^('+[A_+'w?',B_,...CA,W_+'(h|w2|w3)?',...Object.values(CHK).flat(),XA+'[01f]?',...(XB?[XM+'b']:[]),BKS].join('|')+')$');
  const SEEN_KEY2=new RegExp('^('+CK2.join('|')+')x$');
  const UNSURE2=new RegExp('^('+[A_,B_,...CK2,XA,BKS].join('|')+')_u$');
  // Codex 착수 의견 3: 같은 첫 시도가 두 기기에 서로 다르게 남아 선후를 입증할 수 없으면 '미확인'(<문항>_u = u-mixed, 원고 §10).
  //  첫 시도의 모양: A·D는 첫 오답 표시(T5w·T14a0)가 있으면 'wrong', C는 노출됨(Tnx·노출 뒤 연습 p-*)이면 'seen'.
  function first2(res,k){
    if(k===A_)return res[A_+'w']?'wrong':res[A_]==='A-ok'?'ok':res[A_]||'';
    if(k===XA)return res[XA+'0']?'wrong':res[XA]==='D-ok'?'ok':res[XA]||'';
    if(CK2.includes(k))return /^p-/.test(res[k]||'')||(!res[k]&&res[k+'x'])?'seen':res[k]||'';
    return res[k]||'';
  }
  // r3: 두 결과의 엇갈린 첫 시도 = mergeRes2가 새로 붙이는 미확인 표시(C 문장은 첫 노출일로 판정).
  function unsure2(a,b){const m=mergeRes2(a,b);return Object.keys(m).filter(k=>/_u$/.test(k)&&!a[k]&&!b[k]).map(k=>k.slice(0,-2));}
  // ── r3 C 문장 첫 노출일(Codex r2 HOLD 1) ──
  //  Tno = 'o-YYYY-MM-DD' = 그 C 문장(T9·T10·T11)이 첫 시도 화면으로 처음 열린 날(어느 기기든 가장 이른 날). 화면을 열 때 남기고(render) 공유·합칠 때 이른 날을 남긴다.
  //  첫 시도 화면은 첫 노출일 당일에만 열리므로(그 뒤 날은 연습), 첫 답이 있는 기록의 Tno = 그 첫 답을 낸 날이다.
  //  노출 표시(Tnx): C-seen = 노출됨·미채점(날짜가 지나 다시 열림·다른 기기가 넘어감·늦은 답) · C-push = 같은 날 한 기기에서 제출 없이 다른 화면으로 밀림
  //  (같은 날 다른 기기의 첫 답과 선후를 알 수 없는 경우는 이것뿐이다).
  const O_KEY2=new RegExp('^('+CK2.join('|')+')o$'),CU_KEY2=new RegExp('^('+CK2.join('|')+')_u$'),J2=x=>JSON.stringify(x&&typeof x==='object'&&!Array.isArray(x)?Object.keys(x).sort().map(k=>[k,x[k]]):x);   // r4: 키 순서와 무관하게 비교
  const oDay2=(r,k)=>{const v=String((r&&r[k+'o'])||'');return /^o-\d{4}-\d{2}-\d{2}$/.test(v)?v.slice(2):'';};
  const ans2=(r,k)=>/^C-(ok|fail)$/.test(r[k]||'')&&!r[k+'x']?r[k]:'';
  const seen2=(st,id)=>!st.res[id]&&!!st.res[id+'x'];
  function cBase2(key){const it=itemOf2(key);if(!it)return null;const s=it.type==='dc'?SEQ2[IDX2[it.id]]:it.type==='step'?SEQ2[it.idx]:null;
    return s&&s.layer==='C'&&(s.kind==='arrange'||s.kind==='write')?s.id:null;}
  // 열린 첫 시도 화면(제출 전)도 노출 — 첫 노출일 표시가 없으면 열린 날로 채운 사본.
  function withOpen2(res,open){
    const k=open&&cBase2(open.key);if(!k||res[k]||res[k+'x']||!DAY.test(open.date||''))return res;
    const o=oDay2(res,k);if(o&&o<=open.date)return res;
    return {...res,[k+'o']:'o-'+open.date};
  }
  // C 문장 하나 합치기 — r4(Codex r3 지적 4): 두 기록만 보고 처음부터 다시 판정한다(a·b 대칭, 받는 순서와 무관 — 결과를 다시 합쳐도 같음).
  //  · 첫 노출일 E = 두 기록 중 이른 날. 첫 시도 화면은 첫 노출일 당일에만 열리므로, 기록의 첫 답은 그 기록의 첫 노출일에 낸 답이다.
  //  · 날짜가 있는 미확인(u-mixed)은 '그 기록의 첫 노출일에 두 첫 답(또는 화면 밀림과 첫 답)이 엇갈림'이라는 뜻이다. 더 이른 노출이 오면(E < 그 날)
  //    엇갈린 답은 모두 늦은 답 = 연습이 되어 미확인이 풀린다. 같은 날이면 그대로 미확인. r3는 미확인을 한 번 붙이면 다시 판정하지 않아 순서에 따라 갈렸다.
  //  · 첫 노출일 없는 기록(r2 형식)이 엇갈림에 끼면 날짜로 풀 수 없으므로 미확인을 남기고 첫 노출일도 붙이지 않는다(뒤에 와도 풀리지 않게).
  //  · 남길 값이 둘이면 정한 순서로 고른다(C-ok > C-fail > p-ok > p-help > p-fail) — 어느 기록이 남길(더 새) 기록이든 같게.
  const RANK2={'C-ok':5,'C-fail':4,'p-ok':3,'p-help':2,'p-fail':1};
  const pick2=(...vs)=>vs.filter(v=>RANK2[v]).sort((x,y)=>RANK2[y]-RANK2[x])[0]||'';
  function cMerge2(out,a,b,k){
    const da=oDay2(a,k),db=oDay2(b,k),E=[da,db].filter(Boolean).sort()[0]||'';
    for(const s of ['','x','_u','o'])delete out[k+s];
    const has=r=>!!(r[k]||r[k+'x']||r[k+'_u']);
    if((has(a)&&!da)||(has(b)&&!db)){                                            // 첫 노출일 없는 기록 = r2 규칙(날짜로 풀지 않음)
      const v=pick2(a[k],b[k]),x=first2(a,k),y=first2(b,k);
      if(v)out[k]=v;else if(a[k+'x']||b[k+'x'])out[k+'x']=a[k+'x']==='C-push'||b[k+'x']==='C-push'?'C-push':'C-seen';
      if(a[k+'_u']||b[k+'_u']||(x&&y&&x!==y)){out[k+'_u']='u-mixed';return;}
      if(E)out[k+'o']='o-'+E;return;}
    if(E)out[k+'o']='o-'+E;
    const uOn=(r,d)=>!!r[k+'_u']&&d===E;                                           // 날짜 있는 미확인: 그 기록의 첫 노출일 = E일 때만 유효
    if(uOn(a,da)||uOn(b,db)){out[k+'_u']='u-mixed';const v=pick2(a[k],b[k]);if(v)out[k]=v;return;}
    const Aa=ans2(a,k),Ab=ans2(b,k),onA=!!Aa&&da===E,onB=!!Ab&&db===E;            // 첫 노출일에 낸 첫 답만 첫 시도
    const pushed=(r,d)=>!ans2(r,k)&&!r[k+'_u']&&r[k+'x']==='C-push'&&d===E;
    if((onA&&onB&&Aa!==Ab)||(onA&&!onB&&pushed(b,db))||(onB&&!onA&&pushed(a,da))){out[k+'_u']='u-mixed';out[k]=pick2(Aa,Ab);return;}
    if(onA||onB){out[k]=onA?Aa:Ab;return;}
    // 첫 노출일에 낸 첫 답이 없음: 늦은 답(다른 날 답·풀린 미확인의 답)과 연습 값은 연습으로, 노출 표시만 남은 경우는 C-push(첫 노출일에 밀림) 또는 C-seen.
    const late=[a[k],b[k]].filter(v=>RANK2[v]).map(v=>'p-'+v.split('-')[1]);
    if(late.length){out[k]=pick2(...late);out[k+'x']=pushed(a,da)||pushed(b,db)?'C-push':'C-seen';return;}   // 첫 노출일의 화면 밀림은 연습 값과 함께도 남김(뒤에 오는 같은 날 첫 답과 비교)
    // 첫 답 없이 노출만: 첫 노출일에 밀림 = C-push · 그 밖 노출 표시가 있거나 어느 기록의 첫 노출일이 E보다 늦음(= 그 기기가 더 늦은 날 다시 봄) = C-seen.
    //  뒤의 규칙 덕분에 '첫 시도 화면을 d일에 연 기기가 더 이른 첫 노출일을 받으면' 그 자리에서 노출됨이 되어(화면 중 받는 r4 제출 전 대조 포함), 이어 쓴 답이 이른 날의 첫 시도로 잘못 기록되지 않는다.
    if(pushed(a,da)||pushed(b,db))out[k+'x']='C-push';else if(a[k+'x']||b[k+'x']||(da&&da>E)||(db&&db>E))out[k+'x']='C-seen';
  }
  // 결과 합치기(순수 함수) — a = 남길 기록의 결과, b = 다른 기록의 결과. 첫 답·단계·미확인 표시는 a에 없으면 b에서(학습자당 한 번만 채점),
  //  C 문장은 cMerge2, 그 밖 첫 시도(T5·T6·T14a·재확인 회차)는 서로 다르면 미확인.
  function mergeRes2(a,b){
    const out={...a};
    for(const [k,v] of Object.entries(b||{})){
      if(SEEN_KEY2.test(k)||O_KEY2.test(k)||CK2.includes(k)||CU_KEY2.test(k))continue;   // r4: C 문장의 미확인 표시도 cMerge2가 다시 판정
      if(UNSURE2.test(k)||RES_KEY2.test(k)){if(!out[k])out[k]=v;}
    }
    for(const k of CK2)cMerge2(out,a,b||{},k);
    const bk=o=>Object.keys(o).filter(k=>RBK.test(k));
    for(const k of uniq([A_,B_,XA,...bk(a),...bk(b||{})])){const x=first2(a,k),y=first2(b||{},k);if(x&&y&&x!==y&&!out[k+'_u'])out[k+'_u']='u-mixed';}
    // r6(Codex r5 지적 2): 미확인 재확인 회차의 대표값은 받는 순서와 무관하게 'B-fail' = 독립 정답이 확인되지 않은 회차. 한 번 쓴 회차로 세고 예약은 이어 간다
    //  (남은 기회는 다음 학습일). r5는 남길 기록 쪽 값이라, 다른 기기의 B-ok가 대표값이 되면 '홈'으로 나간 기기만 그 값으로 마감해 다음 날 복습이 사라졌다.
    for(const k of Object.keys(out))if(RBK.test(k)&&out[k+'_u'])out[k]='B-fail';
    return out;
  }
  // r6(Codex r5 지적 2): E2 재확인 예약 합치기 = E1 mergeB + 미확인 회차는 쓴 회차. 채점만 하고 마감 전인 열린 시도(skip)라도 미확인이면 이미 두 기기에서 답한 회차라
  //  시도 수에 넣고, 그 회차를 연 화면(opens = 두 기록의 열린 재확인 화면과 그 회차 — openK2)의 날을 마지막 날로 둔다(같은 날 새 회차를 열지 않음).
  //  다른 회차를 연 화면의 날은 쓰지 않는다. 그 기기가 나중에 마감해도 회차 = 화면을 연 회차라 두 번 세지 않는다.
  const openK2=st=>{const o=st&&st.open,it=o&&itemOf2(o.key);return it&&it.type==='b'?{key:o.key,date:o.date,k:'B.'+it.sid+'.'+bRound2(st,it.sid)}:null;};
  function mergeB2(m,loc,skip,opens,primaryRes){
    const out=[],sids=[...new Set([...m.b.map(x=>x.sid),...loc.b.map(x=>x.sid)])];
    const rn=k=>+k.split('.').pop();
    for(const sid of sids){
      const all=Object.keys(m.res).filter(k=>RBK.test(k)&&k.startsWith('B.'+sid+'.')),ks=all.filter(k=>!(skip&&skip.has(k)));
      if(ks.some(k=>m.res[k]==='B-ok'&&!m.res[k+'_u']))continue;
      const y=m.b.find(x=>x.sid===sid),x=loc.b.find(z=>z.sid===sid),uks=all.filter(k=>m.res[k+'_u']),un=Math.max(0,...uks.map(rn));
      // 한쪽이 마지막 회차까지 마감했으면 다른 기기의 열린 화면이 예약을 되살릴 수 없다.
      const finalKey='B.'+sid+'.'+B_MAX;
      if((!y&&primaryRes[finalKey])||(!x&&loc.res[finalKey]))continue;
      // r7: 정답으로 마감한 쪽도 같다 — 예약이 없는 쪽 기록에 그 문장의 정답(미확인 아님)이 있으면, 같은 회차를 채점만 하고 '다음' 전인 다른 기기의 열린 화면이 예약을 되살릴 수 없다.
      const okDone=r=>all.some(k=>r[k]==='B-ok'&&!m.res[k+'_u']);
      if((!y&&okDone(primaryRes))||(!x&&okDone(loc.res)))continue;
      // 옛 기기의 열린 1회차를 빼더라도 마감한 2·3회차의 번호는 그대로다.
      const closedFailures=ks.filter(k=>m.res[k]==='B-fail').map(rn);
      const tries=Math.max(y?y.tries:0,x?x.tries:0,un,...closedFailures);if(tries>=B_MAX)continue;
      let last=later(y?y.last:'',x?x.last:'');
      if(un)for(const o of opens||[])if(o&&o.key==='b:'+sid&&uks.includes(o.k)&&DAY.test(o.date||''))last=later(last,o.date);
      out.push({sid,tries,last});
    }
    if(JSON.stringify(out)===JSON.stringify(m.b))return false;
    m.b=out;return true;
  }
  // T10 전체 제출 수(공유된 단계로 확정): 첫 정답 1 · 고쳐 맞힘 = 오답 수 + 1 · 정답 공개 3 · 그 밖 마감 = 오답 수. 갈라진 기록이면 '-', C 첫 답이 없으면 null.
  function triesT10(RS){
    if(RS[W_+'_u'])return '-';const v=RS[W_]||'';if(v==='C-ok')return 1;if(v!=='C-fail')return null;
    if(RS[W_+'h']==='h-ok')return RS[W_+'w3']?'-':(RS[W_+'w2']?2:1)+1;
    return RS[W_+'w3']?3:RS[W_+'w2']?2:1;
  }
  function pendingIn2(m,it){if(it.type==='step')return m.ptr<=it.idx;if(it.type==='b')return m.b.some(x=>x.sid===it.sid);if(it.type==='dc')return m.def.some(x=>x.id===it.id);return false;}
  function itemDone2(m,it,bkey){
    if(it.type==='step')return m.ptr>it.idx;
    if(it.type==='dc')return !m.def.some(x=>x.id===it.id)&&!!(m.res[it.id]||m.res[it.id+'x']);
    if(it.type==='b')return !!bkey&&!!m.res[bkey];
    return false;
  }
  function mergeFacts2(m,loc){
    let f=false;
    for(const k of ['days','done','noc']){const u=uniq([...m[k],...loc[k]]);if(u.length!==m[k].length)f=true;m[k]=u;}
    const ok0=uniq(m.ok).slice(-8).join(),ou=uniq([...m.ok,...loc.ok]);m.ok=ou;if(ou.slice(-8).join()!==ok0)f=true;
    for(const k of ['t5','t8a','t10','t13'])if(loc[k]&&(!m[k]||loc[k]<m[k])){m[k]=loc[k];f=true;}
    for(const k of ['sd','dcd'])if(loc[k]&&loc[k]>m[k]){m[k]=loc[k];f=true;}
    if(loc.sec&&loc.sec.date&&(loc.sec.date>m.sec.date||(loc.sec.date===m.sec.date&&loc.sec.n>m.sec.n))){m.sec={date:loc.sec.date,n:loc.sec.n};f=true;}
    return f;
  }
  // 공유 기록 받기(순수 함수) = E1 adopt(r6)에서 S9 사실 처리를 뺀 것 + '미확인'. 더 최근 서버 기록(rem)을 쓰되 이 기기(loc)에만 있는 실제 기록은 보존한다.
  function adopt2(loc,rem,c,date){
    const m=copy(rem),added=[],logs=[];
    if(loc.mine)m.mine=copy(loc.mine);   // r3(Codex r2 대조표 1): 이 기기에서 직접 낸 시험처럼 첫 답(기기에만 두는 칸) — 받은 기록에는 없다
    const gl=loc.open?gradedOpen2(loc):null,gkey=gl?keyOf2(gl.item):'';
    // r2(Codex r1 HOLD 1): 이 기기에서 열었지만 첫 제출 전인 C 문장(T9·T10·T11). 받은 기록에 이 열린 화면이 없으면 노출이 사라지므로 아래에서 보존한다.
    const ls=!gl&&loc.open?seenTarget2(loc,loc.open.key,null):null;
    const doneThere=gl?itemDone2(rem,gl.item,gl.r.bkey):false,rg=rem.open?gradedOpen2(rem):null,remGraded=!!rg;
    const skip=new Set([gl&&gl.r.bkey,rg&&rg.r.bkey].filter(Boolean));
    const sameOpen=x=>!!(gl&&x.open&&x.open.key===gkey&&(gl.item.type!=='b'||'B.'+gl.item.sid+'.'+bRound2(x,gl.item.sid)===gl.r.bkey));   // r6: 연 회차로 비교
    // r3(Codex r2 HOLD 1·2·3): 결과 합치기는 mergeRes2 한 곳 — 이 기기에만 있는 첫 답·단계 보존, C 문장은 첫 노출일로 선후 판정, 선후를 알 수 없는 첫 답만 미확인.
    const r0=m.res;m.res=mergeRes2(withOpen2(rem.res,rem.open),withOpen2(loc.res,loc.open));
    for(const k of uniq([...Object.keys(r0),...Object.keys(m.res)]))if(r0[k]!==m.res[k])added.push(k);
    let f=mergeFacts2(m,loc);
    for(const id of CA)if(m.res[id]&&loc.res[id]&&!loc.def.some(x=>x.id===id)&&m.def.some(x=>x.id===id)){m.def=m.def.filter(x=>x.id!==id);f=true;}
    for(const x of loc.def)if(!m.def.some(y=>y.id===x.id)&&!m.res[x.id]){m.def.push({id:x.id,from:x.from});f=true;}
    m.def.sort((x,y)=>IDX2[x.id]-IDX2[y.id]);
    if(mergeB2(m,loc,skip,[openK2(loc),openK2(rem)],rem.res))f=true;
    if(loc.ptr>m.ptr){m.ptr=loc.ptr;f=true;}
    const ro=m.open,rit=ro?itemOf2(ro.key):null;
    if(ro&&(!rit||!pendingIn2(m,rit))){m.open=null;f=true;}
    if(gl&&!remGraded&&pendingIn2(m,gl.item)&&!(sameOpen(m)&&m.open.date===loc.open.date)){
      const cand={...m,open:{key:gkey,date:loc.open.date,...(gl.item.type==='b'?{n:+gl.r.bkey.split('.').pop()}:{})}};   // r6: 재확인은 연 회차를 함께
      if(gradedOpen2(cand)){if(m.open&&m.open.key!==gkey)markSeen2(m,m.open.key,gkey);m.open=cand.open;f=true;}
    }
    // r2: 받은 기록에서도 같은 화면(같은 날)이 열려 있으면 그대로. 받은 기록에 열린 화면이 없고 그 문장이 아직 남아 있으면 열린 화면을 되살린다
    //  (같은 날이면 첫 시도로 이어 풀고, 날짜가 지났으면 화면을 열 때 노출됨으로). 그 밖(다른 기기가 이월·진행·다른 화면) = 노출됨·미채점.
    if(ls&&!m.res[ls]&&!m.res[ls+'x']&&!(m.open&&m.open.key===loc.open.key&&m.open.date===loc.open.date)){
      const lit=itemOf2(loc.open.key);
      if(!m.open&&lit&&pendingIn2(m,lit)){m.open={key:loc.open.key,date:loc.open.date};f=true;}
      else{m.res[ls+'x']='C-seen';added.push(ls+'x');}
    }
    // r6(Codex r5 지적 4): 합친 기록의 열린 화면이 이 기기에서 채점한 그 시도(문항·날짜·재확인 회차 같음)이면, 받은 기록도 같은 시도를 채점했더라도 이 기기 화면 상세(cur)를 둔다.
    //  이 기기가 실제로 낸 첫 제출(own)과 입력(typed)이 미확인 행의 근거라서다. r5는 받은 기록이 채점했으면 버려, 같은 날 다시 열고 마감한 행이 'C=ok;typed='(대표값)로 남았다.
    const keepCur=!!(gl&&m.open&&sameOpen(m)&&m.open.date===loc.open.date);
    // r7(Codex 11/24): 이 기기가 채점한 시도를 합친 기록에서 이어 가지 않으면(화면 상세 cur를 버리는 모든 경우 — 닫힘·다른 화면, 같은 문항·회차라도 다른 날 연 화면)
    //  받은 기록에 그 문항 결과가 있을 때 이 기기의 첫 제출을 그 답을 낸 날짜(loc.open.date)로 한 번 남긴다. r6는 문항·회차만 같으면 건너뛰어, 다른 날 같은 회차를 푼 기기의
    //  기록을 받으면 이 기기 첫 답의 행이 사라졌다. 행은 합친 결과로 만든다 — 미확인이면 u=mixed 표시와 함께 이 기기 첫 제출(own)만 채점(없으면 분모 제외). 마감으로 남기는 행과 같은 규칙.
    if(gl&&doneThere&&!keepCur)logs.push(closeLogOf2(loc,loc.open.date,gkey,token2(gl.item,fillFromCur2(gl,c),(gl.item.type==='b'||m.res[(gl.item.id||gkey)+'_u'])?{...loc,res:m.res}:loc)));
    // r7: 이 기기가 답을 낸 재확인 회차(own)가 받은 기록의 다른 열린 화면에 밀려 이어지지 않고 받은 기록에 그 회차 결과도 없으면(두 기기가 한 회차 어긋난 경우 등) 그 답을 낸 날로 마감한다
    //  — 날짜가 지나 복구 마감하는 것(closeOne2)과 같은 규칙. 두지 않으면 열린 화면이 사라진 채점 결과를 다음 합치기가 '마감한 회차'로 세어, 이 기기의 행·독립일 없이 회차만 쓰인다.
    //  예약의 마지막 날은 뒤로 가지 않게 늦은 쪽. 다른 기기 답만 받은 열린 화면(own 없음)은 그 기기가 스스로 마감하므로 여기서 닫지 않는다.
    if(gl&&gl.item.type==='b'&&!keepCur&&!doneThere&&c&&c.key===gkey&&c.own&&c.own[gl.r.bkey]&&pendingIn2(m,gl.item)){
      const r=fillFromCur2(gl,c),sidB=gl.item.sid,last0=(m.b.find(x=>x.sid===sidB)||{}).last||'',s=complete2(m,loc.open.date,gl.item,r),x=s.b.find(z=>z.sid===sidB);
      if(x)x.last=later(last0,x.last);
      m.res=s.res;m.b=s.b;m.days=s.days.slice().sort();m.ok=s.ok.slice().sort();m.noc=s.noc.slice().sort();f=true;
      logs.push(closeLogOf2(loc,loc.open.date,gkey,token2(gl.item,r,s)));
    }
    // r3: 시험처럼을 이 기기에서 직접 풀다 '다음' 전에 나갔고, 받은 기록에서는 그 시험처럼이 이미 끝났으면(이 기기에 다시 열 화면이 없음) 직접 낸 첫 답을 그 화면을 연 날로 한 번 남긴다.
    if(loc.open&&loc.open.key===XM&&loc.ptr<=IDX2[XM]&&m.ptr>IDX2[XM]&&loc.mine&&(loc.mine[XA]||(XB&&loc.mine[XM+'b']))){
      const R=m.res,r={d:(R[XA]||'').slice(2),dw:R[XA]==='D-fail'?3:R[XA+'1']?2:R[XA+'0']?1:0,b:XB?(R[XM+'b']||'').slice(2)||undefined:undefined,sel:XB&&c&&c.sel?c.sel[XM+'b']:undefined,...(c&&c.own?{own:c.own}:{})};
      logs.push(closeLogOf2(loc,loc.open.date,XM,token2({type:'step',idx:IDX2[XM],track:TR},r,m)));
    }
    // 후속 r2(Codex r1 경우 1 · JH 2026-11-25 'S8a·T8·U8·V8 함께'): 연습 쓰기를 이 기기에서 끝내고(결과 cur.wres — v214에서 넘어온 두 번 오답 cur.w2>=2는 정답 공개)
    //  '다음' 전에 나간 사이 받은 기록에서 그 문항이 이미 끝났으면(이 기기에 다시 열 화면이 없음) 이 기기 쓰기 결과를 그 화면을 연 날로 한 번 남긴다
    //  (마감 행 id = 날짜+문항 — 다시 받아도 같은 행). 첫 오답만 내고 나갔으면(결과 없음) 남기지 않는다. v214까지는 쓰기 결과가 '다음'에서만 행이 되어 이 경우 사라졌다.
    //  후속 r4(Codex r3 검토): 행 날짜·id = 이 기기 결과가 정해진 화면을 연 날(c.wd). 날짜 칸이 없을 때만 열린 날짜(읽을 때 wdFill이 채움).
    {const pw=c&&c.phase==='write'&&(c.wres||(c.w2>=2?'fail':'')),pi=c&&c.item;
      if(pw&&pi&&pi.type==='step'&&loc.open&&loc.open.key===c.key&&loc.ptr<=pi.idx&&rem.ptr>pi.idx&&SEQ2[pi.idx]&&SEQ2[pi.idx].kind==='practice'&&SEQ2[pi.idx].write)
        logs.push(closeLogOf2(loc,c.wd||loc.open.date,c.key,token2(pi,{code:c.code||'ok',w:c.w||0,write:pw},m)));}
    // 후속 r3(Codex r2 검토 · JH 2026-11-25): 연습 쓰기 화면(쓰기 단계 cur)이 합친 기록에서도 같은 문항으로 열려 있고 아직 끝나지 않았으면(다른 기기의 중간 기록)
    //  이 기기 쓰기 화면(입력·결과·오답 수)을 그대로 둔다. r2는 버려서 첫 배열 화면으로 돌아갔고, 뒤에 그 기기가 먼저 마쳐도 이 기기 결과가 남지 않았다.
    //  E1 S8a는 문항 자리가 15여도 진행 위치가 14일 수 있어 위치가 같은지 대신 '지나지 않았는지'(m.ptr<=자리)로 본다.
    const wk=c&&c.phase==='write'&&c.item,keepW=!!(wk&&wk.type==='step'&&m.open&&m.open.key===c.key&&m.ptr<=wk.idx&&SEQ2[wk.idx]&&SEQ2[wk.idx].kind==='practice'&&SEQ2[wk.idx].write);
    return {st:m,added,logs,keepCur:keepCur||keepW,stamp:added.length>0||f,changed:added.length>0||logs.length>0||f};
  }
  // r2(Codex r1 HOLD 3)·r3(Codex r2 HOLD 2·3): index 수신기(PA_PROGRESS.mergeConcept)가 eng_fin-E2 두 기록을 합칠 때 부른다. primary = 남길(더 새) 기록의 토큰, other = 버려질 기록의 토큰.
  //  결과 토큰(r:)은 mergeRes2로 합친다 — 버려질 기록에만 있는 첫 답·단계(정답 공개·따라 놓기 마침 등)·첫 노출일·미확인 표시를 남기고, C 문장은 첫 노출일로 판정한다.
  //  그래서 중간에 그 문항이 없는 기록이 끼어도 이미 받은 첫 답이 사라지지 않는다(도착·기록 시각 순서와 무관). 결과 밖 토큰(진행 위치·예약·날 등)은 primary 그대로.
  function tokensRes2(q){const o={};for(const t of q){const p=String(t).split(':');if(p[0]==='r'&&p.length===3)o[p[1]]=p[2];}return o;}
  function tokensOpen2(q){for(const t of q){const p=String(t).split(':');if(p[0]==='op'&&p.length>=3&&DAY.test(p[p.length-1]))return {key:p.slice(1,-1).join(':'),date:p[p.length-1]};}return null;}
  //  r4(Codex r3 지적 3): 재확인 예약(b:)도 두 기록에서 합친다 — 앱의 mergeB와 같은 규칙(합친 결과에 그 문장의 B-ok가 있으면 끝, 시도 수는 큰 쪽,
  //  정한 횟수면 끝, 마지막 날은 늦은 쪽, 채점만 하고 마감 전인 열린 재확인 결과는 끝낸 것으로 세지 않음). 첫 오답으로 잡힌 다음 학습일 '지난 문장 다시 쓰기'가
  //  더 새 기록에 없다는 이유로 사라지지 않게. 그 밖 토큰(진행 위치·날·이월 등)은 r3와 같이 primary 그대로.
  function mergeQuestions2(primary,other){
    const A=Array.isArray(primary)?primary.slice():[],B=Array.isArray(other)?other:[];
    if(!A.includes(C.MARK)||!B.includes(C.MARK))return A;
    const res=mergeRes2(withOpen2(tokensRes2(A),tokensOpen2(A)),withOpen2(tokensRes2(B),tokensOpen2(B)));
    const P=decode2({last_questions:A}),O=decode2({last_questions:B}),m={...P,res};
    const gP=P.open?gradedOpen2(P):null,gO=O.open?gradedOpen2(O):null;
    mergeB2(m,O,new Set([gP&&gP.r.bkey,gO&&gO.r.bkey].filter(Boolean)),[openK2(P),openK2(O)],P.res);
    // r6(Codex r5 지적 3): 재확인에 실패한 날(noc)은 어느 기기에서 생겼든 실제 기록 — 두 기록의 합집합(그날 새 C 배열 이월과 다음 학습일 배정이 한 기기에서 풀었을 때와 같게).
    const noc=uniq([...P.noc,...O.noc]).sort();
    const rest=A.filter(t=>{const p=String(t).split(':');return !((p[0]==='r'&&p.length===3)||(p[0]==='b'&&p.length===4)||(p[0]==='noc'&&p.length===2));});
    return uniq([...rest,...Object.entries(res).map(([k,v])=>'r:'+k+':'+v),...m.b.map(x=>'b:'+x.sid+':'+x.tries+':'+x.last),...noc.map(d=>'noc:'+d)]).filter(t=>TOKEN.test(t));
  }
  // 이 기기 기록이 더 새 경우(받지 않음): r3 — 받은(옛) 기록에만 있는 첫 답·단계·첫 노출일·미확인 표시와 재확인 예약도 이 기기에 합친다(mergeRes2·mergeB).
  //  진행 위치·열린 문항·이월 목록은 이 기기 것 그대로. 바뀐 것이 없으면 null.
  function reconcile2(loc,rem){
    if(!rem||!rem.res)return null;
    const s=copy(loc);s.res=mergeRes2(withOpen2(loc.res,loc.open),withOpen2(rem.res,rem.open));
    const gl=loc.open?gradedOpen2(loc):null,rg=rem.open?gradedOpen2(rem):null;
    mergeB2(s,{...rem,b:Array.isArray(rem.b)?rem.b:[]},new Set([gl&&gl.r.bkey,rg&&rg.r.bkey].filter(Boolean)),[openK2(loc),openK2(rem)],loc.res);
    // r6(Codex r5 지적 3): 받은(옛) 기록의 재확인 실패일도 합친다(합집합). r5는 이 기기 것만 남겨, 같은 날 다시 열면 이월해야 할 새 C 배열(T11)이 열렸다.
    s.noc=uniq([...loc.noc,...(Array.isArray(rem.noc)?rem.noc:[])]).sort();
    if(J2(s.res)===J2(loc.res)&&J2(s.b)===J2(loc.b)&&J2(s.noc)===J2(loc.noc))return null;
    return s;
  }
  // E2 성취(원고 §10) — 확인된 첫 시도만(로그 행 수·정답률로 다시 세지 않음). 미확인 = 기기 기록이 엇갈려 선후를 입증할 수 없음.
  function achieve2(st){
    const R=st.res,lab=(k,v)=>R[k+'_u']?'미확인':v,o={};
    o.A=lab(A_,R[A_]==='A-ok'?'✔':R[A_]||R[A_+'w']?'✗':'');
    o.B=lab(B_,R[B_]==='B-ok'?'✔':R[B_]==='B-fail'?'✗':'');
    for(const k of CK2)o[k]=lab(k,R[k]==='C-ok'?'C ✔':R[k]==='C-fail'?(k===W_&&R[W_+'h']==='h-ok'?'C ✗ · 도움 후 완성':'C ✗'):/^p-/.test(R[k]||'')||R[k+'x']?'노출됨·미채점':st.def.some(x=>x.id===k)?'미노출 이월':'');
    o.D=lab(XA,R[XA]==='D-ok'?'✔':R[XA]||R[XA+'0']?'✗':'');
    o.B2=Object.keys(R).filter(k=>RBK.test(k)).sort().map(k=>k+' '+lab(k,R[k]==='B-ok'?'✔':'✗'));
    return o;
  }


  // ───── E4·E5 화면 = E2 화면(r7b) + 묶음 데이터(C). 첫 시도 결과는 저장이 확인된 뒤에만 안내(Codex E2 착수 의견 3 그대로). ─────
  // Codex 착수 의견 3: 첫 시도 결과(·그 화면의 오답 수)는 저장이 확인된 뒤에만 안내·정답·다음 화면을 보인다.
  //  저장이 안 되면 그 자리에서 멈추고 '다시 저장'(앱을 닫으면 아무것도 보지 않은 첫 시도로 남는다 — 화면과 채점 기록이 늘 같다).
  const TA2='<textarea class="e1-write" placeholder="여기에 영어 문장을 써요" autocapitalize="sentences" autocomplete="off" spellcheck="false"></textarea>';
  const LEAD10=S2[WS].prompt;   // 발문(원고 부록 A writeC prompt — HTML 기호 없음, build가 확인)
  function persist2(){rollDay();stamp2();const ok=save();if(ok)share();return ok;}
  function keep2(f,show){if(persist2())return show();hold(f.body);f.main('다시 저장',true,show);}
  // 도움 있는 배열(A층·연습). persist면 결과·오답 수를 저장한 뒤에만 안내(A층 T5). 연습은 E1처럼 저장만 해 둔다.
  function helped2(f,sent,o,finish){
    let w=o.w||0;const tips=sent.hh||helpTexts(sent);
    const a=arrange(f,{chunks:sent.en,mix:sent.mix,roles:ROLE,colored:w>0||o.colored,
      onCheck:ok=>{
        if(o.pre&&sync2()&&o.pre(ok,a))return;   // r5: 결과를 확정하기 전에 이 기기가 받은 기록과 합침(T5) — 다른 기기 결과가 있으면 그 기록 화면으로
        if(ok){o.onRight&&o.onRight(w);a.lock();
          const show=()=>{a.note(w===0&&o.soloText&&(!o.isSolo||o.isSolo())?o.soloText:'맞아요.','ok');f.main('다음',true,()=>finish(w===0?'ok':'help',w));};   // r5: 받은 첫 오답이 있으면 '혼자'라고 하지 않음
          return o.persist?keep2(f,show):(save(),show());}
        w++;cur.w=w;o.onWrong&&o.onWrong(w);
        const show=()=>{if(w>=3){a.color(true);a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');return;}a.unlock();a.reset();a.color(true);a.note(tips[w-1]);};
        if(o.persist){a.lock();return keep2(f,show);}
        save();show();},
      onFollowed:()=>{a.note(o.failText||'괜찮아요. 다음에 다시 혼자 해 봐요.','info');f.main('다음',true,()=>finish('fail',w));}});
    if(w>=3){a.color(true);a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');}else if(w>0)a.note(tips[Math.min(w,2)-1]);
    return a;
  }
  // r5(Codex r4 지적 2): 첫 시도 결과 키를 이 기기가 처음 정할 때만 cur.own에 남긴다 — 미확인 행에서 대표값 대신 이 기기의 첫 제출로 쓴다(token2).
  function fixMine(k,v){if(H.st.res[k])return;fix(H.st,k,v);if(cur)cur.own={...(cur.own||{}),[k]:v};}
  // 도움 없는 한 번(B·C 첫 시도): 결과를 고정·저장한 뒤에만 맞음/틀림 안내.
  //  r5(Codex r4 지적 2): 고정하기 전에 이 기기가 이미 받은 기록과 합친다(sync2 — 서버 접속 없음). 다른 기기의 첫 답·노출이 먼저 와 있으면 화면 쪽(o.pre)이
  //  화면을 열기 전에 받았을 때와 같게 처리한다(첫 답 → 그 기록 화면, 노출 → 이번 답은 연습). 통신 전에 서로 낸 첫 답이 엇갈린 경우만 미확인(mergeRes2).
  function once2(f,sent,o){
    const a=arrange(f,{chunks:sent.en,mix:sent.mix,onFollowed:o.onFollowed,onCheck:ok=>{
      a.lock();if(!H.st.res[o.key]&&sync2()&&o.pre&&o.pre(ok,a))return;
      fixMine(o.key,ok?o.good:o.bad);
      keep2(f,()=>{if(H.st.res[o.key]===o.good){a.note(o.okText,'ok');f.main('다음',true,()=>o.onOk());}else o.onBad(a);});}});
    return a;
  }
  const R2={};
  R2.scene=(s,done)=>{const sc=C.scene,f=frame(s.title,'');
    if(sc.img){const img=f.add(`<img class="e1-illus" src="${esc(sc.img)}" width="1500" height="900" alt="${esc(sc.alt)}">`);img.onerror=()=>{img.hidden=true;img.style.display='none';};}   // 그림을 못 불러와도 자막으로 진행(원고 §3 U1) — .e1-illus의 display:block이 hidden을 이기므로 style로
    else f.body.classList.add('e1-mid');   // V1: 그림 없이 자막만 — 자막을 화면 세로 가운데에(원고 v1.2, 글자·크기 그대로)
    f.add(`<p class="e1-cap">${esc(sc.cap)}</p>`);f.main('다음',true,()=>done({}));};
  R2.link=(s,done)=>linkScreen(s,S2[s.sent],s.title,esc(C.kid['link.lead']),()=>done({}));
  R2.demo=(s,done)=>demoX(S2[s.sent],s.title,()=>done({}));
  // U4·V4 빈칸 하나 고르기(4층 밖 메모): 타일 2개 — 오답 1회 = 그 타일 안내, 남은 타일이 정답(원고 §3: 오답 2회 문구 없음).
  R2.blank=(s,done)=>{
    const b=C.blank,f=frame(s.title,'');let w=cur.w||0;const opts=b.tiles,ai=opts.indexOf(b.answer),wi=opts.findIndex((o,i)=>i!==ai);
    f.add(`<p class="e1-ko">${esc(S2[b.sent].ko)}</p>`);
    const sent=f.add(`<p class="e1-sent">${esc(b.stem).replace('［　　］','<span class="e1-blank">&nbsp;</span>')}</p>`);
    f.add(`<p class="e1-lead" style="text-align:center">${esc(b.prompt)}</p>`);
    const t=f.add('<div class="e1-tiles"></div>'),fb=f.add('<p class="e1-note" hidden></p>');
    const draw=()=>{t.innerHTML=opts.map((o,i)=>`<button type="button" class="e1-tile" data-i="${i}" ${w>=1&&i!==ai?'disabled':''}>${esc(o)}</button>`).join('');
      t.querySelectorAll('button').forEach(x=>x.onclick=()=>gate(()=>pick(+x.dataset.i),f.body));};
    const pick=i=>{
      if(i===ai){sent.querySelector('.e1-blank').textContent=b.answer;t.innerHTML='';note(f,fb,b.ok,'ok');f.main('다음',true,()=>done({memo:w===0?'solo':'help'+Math.min(w,2)}));return;}
      w++;cur.w=w;save();note(f,fb,b.fb[opts[i]]);draw();};
    draw();f.main('다음',false);
    if(w>=1)note(f,fb,b.fb[opts[wi]]);
  };
  R2.arrange=(s,done)=>{
    const sent=S2[s.sent];
    if(s.layer==='A'){
      const v=H.st.res[s.id];
      if(v&&!(cur.w>=3&&v==='A-fail'))return recorded(s.title,v==='A-fail'?'지난번에 순서를 같이 살펴본 문장이에요. 다음에 다시 혼자 해 봐요.':'이 문장은 이미 놓았어요.',sent.en,()=>done({code:v.slice(2),w:cur.w||0}));
      const f=frame(s.title,'');f.add('<p class="e1-lead">이번엔 혼자 순서대로 놓아요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      helped2(f,sent,{w:cur.w||(H.st.res[s.id+'w']?1:0),persist:true,soloText:'맞아요. 오늘 혼자 놓았어요.',failText:'오늘은 여기까지. 다음에 다시 혼자 해 봐요.',
        pre:(ok,a)=>{if(!H.st.res[s.id])return false;a.lock();keep2(f,()=>R2.arrange(s,done));return true;},   // r5: 다른 기기에서 이미 끝낸 T5 → 그 기록 화면
        isSolo:()=>!H.st.res[s.id+'w'],   // r5: 다른 기기의 첫 오답(T5w)을 받았으면 정답이어도 도움 후 완성(A-help) — 안내도 '맞아요.'
        onWrong:w=>{fix(H.st,s.id+'w','A-wrong');if(w>=3)fixMine(s.id,'A-fail');},
        onRight:w=>fixMine(s.id,w>0||H.st.res[s.id+'w']?'A-help':'A-ok')},(code,w)=>done({code,w}));
      return;
    }
    // C 배열(T9·T11): 우리말만, 첫 시도. 틀리면 C ✗(저장 확인 뒤) → 그 자리에서 뜻 연결 → 시연 → 도움 있는 배열(연습). E1 S7C 규칙 그대로.
    const remedial=()=>linkScreen(s,sent,s.title,'괜찮아요. 이 문장을 같이 살펴봐요. 덩어리를 탭하면 뜻이 켜져요.',()=>demoX(sent,s.title,()=>{
      const f=frame(s.title,'');f.add('<p class="e1-lead">이제 다시 놓아 봐요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      helped2(f,sent,{w:0,colored:true},()=>done({code:'fail'}));}));
    if(H.st.res[s.id]==='C-fail')return remedial();
    if(H.st.res[s.id]==='C-ok')return recorded(s.title,H.st.res[s.id+'_u']?'이 문장은 이미 놓았어요.':'이 문장은 처음 볼 때 혼자 놓았어요.',sent.en,()=>done({code:'ok'}));   // r3: 미확인이면 혼자 했다고 단정하지 않음
    if(/^p-(ok|help|fail)$/.test(H.st.res[s.id]||''))return recorded('본 적 있는 문장','이 문장은 전에 연습했어요.',sent.en,()=>done({code:H.st.res[s.id].slice(2)}));
    if(seen2(H.st,s.id)){   // 노출됨·미채점 → 연습(원고 §7-5)
      const f=frame('본 적 있는 문장','');f.add('<p class="e1-lead">전에 한 번 본 문장이에요. 순서대로 놓아 봐요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      helped2(f,sent,{w:cur.w||0},(code,w)=>done({code,w}));return;
    }
    const f=frame(s.title,'1/1');f.add('<p class="e1-lead">처음 보는 문장이에요. <b>우리말만 보고</b> 놓아 보세요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
    once2(f,sent,{key:s.id,good:'C-ok',bad:'C-fail',okText:'맞아요! 처음 보는 문장도 혼자 놓았어요.',onOk:()=>done({code:'ok'}),
      onBad:a=>{a.note('괜찮아요. 이 문장을 같이 살펴봐요.','info');f.main('다음',true,remedial);},
      // r5(Codex r4 지적 2 — T9·이월 T9·T11): 첫 제출 전에 받은 기록. 다른 기기의 첫 답·연습 → 그 기록 화면(정답 = 기록, 오답 = 같이 살펴보기, 연습 = 본 적 있는 문장).
      //  다른 기기가 더 이른 날 본 문장 → 이번 답은 연습(맞으면 '맞아요.'·p-ok, 틀리면 연습 화면 도움 1부터) — 열기 전에 받았을 때와 같은 기록·다음 날 배정.
      pre:(ok,a)=>{
        if(H.st.res[s.id]){keep2(f,()=>R2.arrange(s,done));return true;}
        if(!seen2(H.st,s.id))return false;
        if(!ok){cur.w=1;keep2(f,()=>R2.arrange(s,done));return true;}
        keep2(f,()=>{document.querySelector('.header-title').textContent='영어 · 본 적 있는 문장';const c=f.body.querySelector('.e1-count');if(c)c.textContent='';
          const l=f.body.querySelector('.e1-lead');if(l)l.textContent='전에 한 번 본 문장이에요. 순서대로 놓아 봐요.';   // 연습 화면과 같은 제목·안내
          a.note('맞아요.','ok');f.main('다음',true,()=>done({code:'ok',w:0}));});return true;}});
  };
  // T6 다른 날 혼자(B층): T5와 같은 화면, 도움 문구 없이 한 번. 틀리면 따라 놓기 → 시연 → 도움 있는 배열(연습). E1 S6 규칙 그대로.
  R2.check=(s,done)=>{
    const sent=S2[s.sent];
    const remedial=()=>demoX(sent,s.title,()=>{const f=frame(s.title,'');f.add('<p class="e1-lead">이제 다시 놓아 봐요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      helped2(f,sent,{w:0,colored:true},()=>done({code:'fail'}));});
    if(H.st.res[s.id]==='B-fail')return remedial();
    if(H.st.res[s.id]==='B-ok')return recorded(s.title,H.st.res[s.id+'_u']?'이 문장은 이미 놓았어요.':'이 문장은 다른 날에도 혼자 놓았어요.',sent.en,()=>done({code:'ok'}));
    const f=frame(s.title,'');f.add('<p class="e1-lead">이번엔 혼자 순서대로 놓아요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
    once2(f,sent,{key:s.id,good:'B-ok',bad:'B-fail',okText:'맞아요. 다른 날에도 혼자 놓았어요.',onOk:()=>done({code:'ok'}),onFollowed:remedial,
      onBad:a=>a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.'),pre:()=>{if(!H.st.res[s.id])return false;keep2(f,()=>R2.check(s,done));return true;}});   // r5: 다른 기기의 T6 결과 → 그 기록 화면
  };
  // T7 뜻 연결 → 배열(시연 생략) · T8 배열 → 쓰기 연습. 기록은 연습.
  R2.practice=(s,done)=>{
    const sent=S2[s.sent];
    const arr=()=>{const f=frame(s.title,'');f.add(`<p class="e1-lead">${s.write?esc(C.kid[s.id+'.lead']):'순서대로 놓아 봐요.'}</p>`);f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      helped2(f,sent,{w:cur.w||0},(code,w)=>{if(!s.write)return done({code,w});subStep({phase:'write',code,w2:0},()=>wr(code,w));});};
    // r2(Codex r1 필수 3): 쓰기 결과(맞음 ok · 도움 뒤 맞음 help · 정답 공개 fail)와 입력(cur.wtx)을 저장한 뒤 안내(저장이 안 되면 그 자리에서 멈춤 — subStep).
    //  r1은 결과를 '다음' 버튼에만 두어, 홈·앱 재실행 뒤 빈 입력칸·'제출'로 돌아가 결과가 바뀌었다(fail → help, ok → fail). 결과 로그의 쓰기 칸은 '다음' 한 번에 한 번.
    const wr=(code,w)=>{
      const f=frame(s.title,'');let w2=cur.w2||0;
      f.add('<p class="e1-lead">이번엔 같은 문장을 직접 써 봐요. 덩어리를 보고 순서대로 쓰면 돼요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      f.add(`<div class="e1-given">${sent.mix.map(i=>`<span>${esc(sent.en[i])}</span>`).join('')}</div>`);
      const ta=f.add(TA2),fb=f.add('<p class="e1-note" hidden></p>');
      const shut=res=>{if(!ta.value)ta.value=cur.wtx||'';ta.readOnly=true;
        if(res==='fail')note(f,fb,'정답은 이래요: '+sent.en.join(' ')+'.','info');else{ta.classList.add('ok');note(f,fb,'맞아요.','ok');}
        f.main('다음',true,()=>done({code,w,write:res}));};
      const again=()=>{ta.readOnly=false;note(f,fb,sent.wfb1);f.main('다시 제출',!!ta.value.trim(),submit);};
      const submit=()=>{const v=ta.value.slice(0,200);
        if(gradeWrite(sent.accept,ta.value))return subStep({wres:w2===0?'ok':'help',wtx:v,wd:wDay(H.st)},()=>shut(cur.wres));   // 후속 r4: 결과와 그 화면을 연 날을 함께
        const n=w2+1;subStep(n>=2?{w2:n,wres:'fail',wtx:v,wd:wDay(H.st)}:{w2:n,wtx:v},()=>{w2=n;if(n>=2)shut('fail');else again();});};
      ta.oninput=()=>f.enable(!!ta.value.trim()&&!ta.readOnly);f.main('제출',false,submit);
      if(cur.wres)shut(cur.wres);else if(w2>0){ta.value=cur.wtx||'';again();}
    };
    if(cur.phase==='write')return wr(cur.code||'ok',cur.w||0);
    if(s.noDemo)return linkScreen(s,sent,s.title,esc(C.kid[s.id+'.lead']),arr);
    return arr();
  };
  // T10 혼자 쓰기(C층)·그 재확인(B층)·노출 뒤 연습: 첫 제출 하나로 결과(key가 있을 때, 저장 확인 뒤 안내). 틀려도 입력칸은 열어 둔다(원고 v1.3).
  //  안내 1·2 → 3번째에 정답. C층에서 안내 뒤 맞히면 '도움 후 완성'(help 키). done({right,w,typed,n}).
  //  o = {key 첫 시도 결과 키, good, bad, help '도움 후 완성' 키, sched 첫 오답 때 함께 예약할 재확인 문장, stage 오답 단계 공유 키 앞부분}
  //  r2(Codex r1 HOLD 2): ① 첫 오답(C ✗)과 다음 학습일 재확인 예약을 한 번의 저장에(원고 §3 T10) ② 고쳐 맞힌 뒤 '다음' 전에 나갔다 오면
  //  맞힌 문장·잠긴 입력칸·'다음'으로(다시 제출 없음) ③ 둘째·셋째 오답(T10w2·T10w3)을 저장해 다른 기기에서도 남은 도움 단계부터.
  //  r3(Codex r2 HOLD 3): 정답을 공개한 사실(T10w3)이 있으면 그 뒤 맞힌 답으로 '도움 후 완성'(T10h)을 새로 만들지 않는다.
  //  r5(Codex r4 지적 1·2): 재확인은 화면을 연 회차로 마감(R2.bretry bkey) · 다른 기기의 첫 정답을 받은 뒤의 첫 제출은 그 기록 화면으로(o.redo, 입력은 late).
  //  r4(Codex r3 지적 1·2): ① 잠긴 정답 칸에 되살리는 문장도 실제 채점(gradeWrite)을 통과해야 한다 — 이 기기 입력 중 통과한 마지막 것, 없으면 정답 예문.
  //  ② 제출 직전에 이 기기가 이미 받은 기록(readRemote2)을 합쳐 대조한다(서버 접속 없음). 다른 기기에서 정답이 공개됐으면 정답 확인 화면으로(도움 후 완성 없음),
  //  이미 고쳐 맞혔으면 맞힌 상태로, 다른 기기가 더 이른 날 본 문장이면 이번 답은 연습으로 기록한다. ③ o.solved = 이미 정답을 낸 연습('다음'으로 이어 감).
  // r2(Codex r1 필수 1): 받은 기록의 재확인 실패일(noc)도 합친다(reconcile2가 합집합). r1은 성취·예약만 받아, V10을 연 채 다른 기기의 그날 재확인 실패를 받으면 그날 V11이 열렸다.
  function sync2(){const r=readRemote2();if(!r)return false;const rc=reconcile2(H.st,r);if(!rc)return false;H.st.res=rc.res;H.st.b=rc.b;H.st.noc=rc.noc;return true;}
  function writeScreen2(title,lead,o,done){
    const c=S2[WS],f=frame(title,'1/1'),good=o.good,bad=o.bad,RS=H.st.res;let key=o.key,help=o.help;
    // 채점 = 지금 채점(gradeWrite) 먼저, 아니면 이 문장(V10)에만 don't 한 낱말 표기 판정(aposOk) — 첫 제출·화면 복원·잠긴 칸이 같은 함수(원고 v1.2 §10).
    const judge=t=>gradeWrite(c.accept,t)||aposOk(c,t),aposOnly=t=>!gradeWrite(c.accept,t)&&aposOk(c,t);
    const stageOf=R=>key&&R[key]===bad?(o.stage&&R[o.stage+'w3']?3:o.stage&&R[o.stage+'w2']?2:1):0;
    let w=Math.max(cur.w||0,stageOf(RS));if(w)cur.w=w;
    const solved=!!cur.solved||!!o.solved||(!!help&&!!key&&RS[key]===bad&&RS[help]==='h-ok');
    const okTyped=()=>(cur.typed||[]).slice().reverse().find(t=>judge(t))||'';
    f.add(`<p class="e1-lead">${lead}</p>`);f.add(`<p class="e1-ko">${esc(c.ko)}</p>`);
    f.add('<p class="e1-lead" style="font-size:14px;color:#5b6575;margin-bottom:-8px">주어진 말</p>');
    f.add(`<div class="e1-given">${c.given.map(g=>`<span>${esc(g)}</span>`).join('')}</div>`);
    const ta=f.add(TA2),fb=f.add('<p class="e1-note" hidden></p>');
    // 오답 안내 고르기(원고 §3 V10 — 위에서부터 맞는 것 하나): 3번째 = 정답 제시(answer) · 더하지 않은 문장을 처음 냄 = 전용 안내 · 꾸밈받는 덩어리 바로 뒤 who(c.who) = who 안내 ·
    //  그 밖 첫째 ① · 둘째 ②. U10은 늘 오답 횟수로(E2와 같음).
    const TIPS=[c.fb1,c.fb2];
    // r2(Codex r1 필수 4): 이 기기에서 방금 낸 답을 먼저 판정한다 — 다른 기기에서 횟수만 받은 오답(w − 이 기기 오답 수)은 일반 오답으로 세고, 이 기기 입력은 그 문장으로(첫 생략 = 전용 안내 · who).
    //  cur.ws = 이 기기가 마지막으로 낸 오답 때의 오답 수. 다시 연 화면에서 그 뒤 다른 기기 오답이 더 들어왔으면(ws ≠ w) 횟수로. ws가 없는 옛 기록은 r1과 같이(이 기기 오답 수 ≠ w면 횟수로).
    const tipNow=()=>{const L=(cur.typed||[]).filter(t=>!judge(t));
      if(!c.fbOmit||!L.length||(cur.ws!==undefined?cur.ws!==w:L.length!==w))return TIPS[Math.min(w,2)-1];
      let g=Math.max(0,w-L.length),om=false,tx='';for(const x of L){const nx=norm(x);if(nx===norm(c.omit)&&!om){om=true;tx=c.fbOmit;continue;}if((' '+nx+' ').includes(c.who)){tx=c.fbWho;continue;}g++;tx=TIPS[Math.min(g,2)-1];}return tx;};
    const fin=right=>done({right,w,typed:(cur.typed||[]).join(' / '),n:(cur.typed||[]).length});
    const right=()=>{ta.classList.add('ok');ta.readOnly=true;const v=ta.value;
      if(aposOnly(v))note(f,fb,'','ok',esc(c.ok)+'<br>'+esc(c.apos.line));else note(f,fb,c.ok,'ok');   // 작은따옴표만 다른 답: 맞음 문구 뒤 한 줄
      f.main('다음',true,()=>fin(true));};
    const answer=()=>{ta.readOnly=true;note(f,fb,'정답은 이래요: '+c.answer,'info');f.main('다음',true,()=>fin(false));};
    const tip=()=>{ta.readOnly=false;note(f,fb,tipNow());f.main('다시 제출',!!ta.value.trim(),submit);};
    const submit=()=>{
      const typed=ta.value,ok=judge(typed);cur.typed=(cur.typed||[]).concat([typed.slice(0,120)]);
      const had=!!key&&!!H.st.res[key],synced=!!key&&sync2();
      if(synced){
        if(o.stage&&(seen2(H.st,key)||/^p-/.test(H.st.res[key]||''))){key=null;help=null;}   // 다른 기기가 더 이른 날 본 문장 → 이번 답부터 연습
        // r5(Codex r4 지적 2-T10): 이 기기가 첫 답을 내기 전에 다른 기기의 첫 정답(C ✔·재확인 B ✔)을 받았으면 같은 문장을 다시 요구하지 않고 그 기록 화면으로.
        //  이 입력은 첫 시도 이력(typed)이 아니라 late로 남긴다. 다른 기기의 첫 오답이면 그 단계부터 이어 간다(아래).
        else if(!had&&o.redo&&H.st.res[key]===good){cur.late=(cur.late||[]).concat(cur.typed.splice(-1));ta.readOnly=true;return keep2(f,o.redo);}
        else{const s=stageOf(H.st.res);if(s>w){w=s;cur.w=w;}
          if(o.stage&&H.st.res[key]===bad&&H.st.res[o.stage+'w3']){ta.readOnly=true;return keep2(f,answer);}                        // 이미 정답 공개 → 정답 확인
          if(help&&H.st.res[key]===bad&&H.st.res[help]==='h-ok'){ta.readOnly=true;cur.solved=true;if(!ok)ta.value=c.answer;return keep2(f,right);}}}   // 이미 고쳐 맞힘
      const first=!!key&&!H.st.res[key];
      if(ok){ta.readOnly=true;cur.solved=true;if(first)fixMine(key,good);else if(help&&key&&H.st.res[key]===bad&&!(o.stage&&H.st.res[o.stage+'w3']))fix(H.st,help,'h-ok');return (first||help||synced)?keep2(f,right):(save(),right());}
      w++;cur.w=w;cur.ws=w;
      if(first){fixMine(key,bad);if(o.sched)schedule(H.st,o.sched,today);ta.readOnly=true;return keep2(f,w>=3?answer:tip);}   // 첫 답(C ✗·B ✗)과 재확인 예약은 저장 확인 뒤에만 안내
      if(o.stage&&key&&H.st.res[key]===bad){if(w>=2)fix(H.st,o.stage+'w2','w-2');if(w>=3)fix(H.st,o.stage+'w3','w-3');ta.readOnly=true;return keep2(f,w>=3?answer:tip);}
      if(synced){ta.readOnly=true;return keep2(f,w>=3?answer:tip);}
      save();if(w>=3)answer();else tip();};
    ta.oninput=()=>f.enable(!!ta.value.trim()&&!ta.readOnly);f.main('제출',false,submit);
    const last=(cur.typed||[]).slice(-1)[0];
    if(solved){ta.value=okTyped()||c.answer;right();}   // 맞힌 뒤 재개: 채점을 통과한 이 기기 문장, 없으면(다른 기기에서 맞힘) 정답 예문 — 잠긴 칸·'다음'
    else if(w>=3){if(last)ta.value=last;answer();}else if(w>0){if(last)ta.value=last;tip();}
    return f;
  }
  R2.write=(s,done)=>{
    const k=s.id,c=S2[s.sent];
    const late=()=>(cur.late||[]).join(' / ')||undefined;   // r5: 다른 기기의 첫 정답 뒤 이 기기 입력
    const mine=!H.st.res[k+'_u']&&(cur.typed||[]).some(t=>gradeWrite(c.accept,t)||aposOk(c,t));   // E4·E5: 이 기기에서 맞힌 입력(작은따옴표 판정 포함)
    if(H.st.res[k]==='C-ok'&&mine)return writeScreen2(s.title,LEAD10,{key:k,good:'C-ok',bad:'C-fail',help:W_+'h',sched:s.sent,stage:W_,solved:true,redo:()=>R2.write(s,done)},
      r=>done({code:'ok',w:r.w,typed:r.typed,n:r.n,late:late()}));
    if(H.st.res[k]==='C-ok')return recorded(s.title,H.st.res[k+'_u']?'이 문장은 이미 썼어요.':'이 문장은 처음 쓸 때 혼자 맞혔어요.',[c.answer],()=>done({code:'ok',w:0,typed:(cur.typed||[]).join(' / '),late:late()}));   // r3(Codex r2): 미확인이면 혼자 맞혔다고 단정하지 않음
    const isPr=()=>seen2(H.st,k)||/^p-/.test(H.st.res[k]||''),practice=isPr();   // 노출됨·미채점 → 연습(첫 노출 성취로 세지 않음, 재확인 예약 없음)
    // r4(Codex r3 지적 1): 다른 기기에서 이미 정답을 낸 연습(p-ok·p-help, '다음' 전에 멈춤)은 같은 문장을 다시 쓰게 하지 않고 '다음'으로. 보기만 한 연습은 직접 쓴다.
    //  끝낼 때의 연습 여부는 그때의 기록으로 다시 본다(화면을 연 뒤 받은 기록으로 연습이 된 경우 — writeScreen2 ②).
    writeScreen2(practice?'본 적 있는 문장':s.title,practice?'전에 한 번 본 문장이에요. '+LEAD10:LEAD10,
      practice?{key:null,solved:/^p-(ok|help)$/.test(H.st.res[k]||'')}:{key:k,good:'C-ok',bad:'C-fail',help:W_+'h',sched:s.sent,stage:W_,redo:()=>R2.write(s,done)},
      r=>{const pr=isPr();done({code:pr?(r.right?(r.w===0?'ok':'help'):'fail'):(H.st.res[k]==='C-ok'?'ok':'fail'),w:r.w,typed:r.typed,n:r.n,late:late()});});
  };
  // 재확인(B): 이전 날 틀린 E2 문장을 도움 없이 한 번(T6·C 배열 = 배열, T10 = 같은 쓰기 화면 — 대응표 §11-6).
  //  r5(Codex r4 지적 1): 마감하는 회차 = 화면을 연 회차(bkey) — 화면 중 다른 기기가 그 회차를 먼저 마쳐 예약 횟수가 올라가도 '다음'이 새 회차를 만들지 않는다.
  //   다른 기기가 그 회차를 정답(B ✔)으로 마쳤으면 그 기록 화면, 오답이면 그 회차 안에서 이어 간다(남은 기회는 다음 학습일).
  R2.bretry=(sid,done,k0)=>{
    const o2=H.st.open,key=k0||(o2&&o2.key==='b:'+sid&&o2.n>0?'B.'+sid+'.'+o2.n:bKey(H.st,sid)),fin=code=>done({code,bkey:key});   // r6: 연 회차(open.n)
    if(sid===WS){
      if(H.st.res[key]==='B-ok'&&!H.st.res[key+'_u']&&(cur.typed||[]).some(t=>gradeWrite(S2[sid].accept,t)||aposOk(S2[sid],t)))   // E4·E5: 이 기기에서 맞힌 입력이면 그대로
        return writeScreen2('지난 문장 다시 쓰기','지난번 문장을 이번엔 혼자 한 번 써 봐요. '+LEAD10,{key,good:'B-ok',bad:'B-fail',solved:true,redo:()=>R2.bretry(sid,done,key)},()=>fin('ok'));
      if(H.st.res[key]==='B-ok')return recorded('지난 문장 다시 쓰기',H.st.res[key+'_u']?'이 문장은 이미 썼어요.':'이 문장은 다른 날 혼자 맞혔어요.',[S2[sid].answer],()=>fin('ok'));
      return writeScreen2('지난 문장 다시 쓰기','지난번 문장을 이번엔 혼자 한 번 써 봐요. '+LEAD10,{key,good:'B-ok',bad:'B-fail',redo:()=>R2.bretry(sid,done,key)},()=>fin(H.st.res[key]==='B-ok'?'ok':'fail'));
    }
    const sent=S2[sid];
    if(H.st.res[key]==='B-ok')return recorded('지난 문장 다시 놓기',H.st.res[key+'_u']?'이 문장은 이미 놓았어요.':'이 문장은 다른 날 혼자 맞혔어요.',sent.en,()=>fin('ok'));
    const f=frame('지난 문장 다시 놓기','1/1');
    f.add('<p class="e1-lead">지난번에 살펴본 문장이에요. 이번엔 도움 없이 한 번 놓아 봐요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
    const a=once2(f,sent,{key,good:'B-ok',bad:'B-fail',okText:'맞아요. 다른 날에도 혼자 놓았어요.',onOk:()=>fin('ok'),onFollowed:()=>fin('fail'),
      onBad:x=>x.follow('순서는 이래요. 눌러서 따라 놓아 봐요.'),pre:()=>{if(!H.st.res[key])return false;keep2(f,()=>R2.bretry(sid,done,key));return true;}});
    if(H.st.res[key]==='B-fail')a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');
  };
  // 고르기(E1 S9 ③ 일반화) — 보기 2~5개·번호 표시 여부·질문/지문 줄. 고른 뒤에는 다시 고르기만 막고 글자는 진하게(.e1-opt:disabled).
  //  첫 선택은 그 자리에서 기록(p-ok/p-fail)·저장 확인 뒤 해설. 해설이 아래 버튼에 가리면 보이게 스크롤.
  function chooseScreen(title,q,onNext){
    const f=frame(title,q.count);f.add(q.top);
    const box=f.add('<div></div>'),fb=f.add('<p class="e1-note" hidden></p>');
    box.innerHTML=q.opts.map((o,i)=>`<button type="button" class="e1-opt" data-i="${i}">${q.num?'①②③④⑤'[i]+' ':''}${esc(o)}</button>`).join('');
    const show=i=>{box.querySelectorAll('button').forEach(x=>x.disabled=true);box.children[q.ans].classList.add('ok');
      if(i>=0&&i!==q.ans)box.children[i].classList.add('no');
      note(f,fb,q.ex,i===q.ans?'ok':'info');f.main('다음',true,onNext);reveal(fb);};
    const was=H.st.res[q.key];
    if(/^p-(ok|fail)$/.test(was||''))return show(was==='p-ok'?q.ans:((cur.sel||{})[q.key]?cur.sel[q.key]-1:-1));
    box.querySelectorAll('button').forEach(b=>b.onclick=()=>gate(()=>{
      if(H.st.res[q.key])return;const i=+b.dataset.i;cur.sel={...(cur.sel||{}),[q.key]:i+1};
      fix(H.st,q.key,'p-'+(i===q.ans?'ok':'fail'));if(q.mine)q.mine(i===q.ans);box.querySelectorAll('button').forEach(x=>x.disabled=true);
      keep2(f,()=>show(i));},f.body));
    f.main('다음',false);
  }
  let QS0=null;const QS=()=>QS0||(QS0=Object.fromEntries(Object.entries(CHK).map(([sid,ks])=>[sid,ks.map((k,i)=>qOf(k,C.Q[k],(i+1)+'/'+ks.length))])));   // 처음 열 때 만듦(esc는 공장 뒤에 정의)
  // T12 본문에서 찾기(3문항)·T13 알맞은 말(2문항). cur.phase = 지금 문항 번호. 다른 기기·나갔다 오면 아직 안 고른 문항부터.
  R2.choose=(s,done)=>{
    const Q=QS()[s.id];
    const resOf=()=>Object.fromEntries(Q.map(q=>[q.key,(H.st.res[q.key]||'').slice(2)]));
    const go=i=>chooseScreen(Q[i].title||s.title,Q[i],()=>i+1<Q.length?subStep({phase:i+1},()=>go(i+1)):done({res:resOf(),sel:{...(cur.sel||{})}}));
    let i=typeof cur.phase==='number'?cur.phase:Q.findIndex(q=>!H.st.res[q.key]);if(i<0)i=Q.length-1;
    go(i);
  };
  // U12·V14 시험처럼: ① 덩어리 배열(D층 — 첫 제출만) → (V14만) ② 어법 고르기(연습). ①만 하고 나갔으면 다음에 첫 답을 보존한 채 ②부터(E2 T14와 같음).
  //  원고 v1.2: 타일 = 덩어리 섞음(같은 글자 타일 없음) · 발문 '덩어리' · 빈 답칸은 앱의 덩어리 안내 · 도움 = 처음 어긋난 자리(zones) · 첫 제출 뒤 이름 줄 · 정답 저장 뒤 타일판 숨김.
  //  U12는 ①뿐 — ①을 마친 뒤 다시 열면 기록된 ①(정답 어순) 화면 한 장에서 '다음'만(가상의 ②·새 채점 없음).
  const wrong14=()=>H.st.res[XA]==='D-fail'?3:H.st.res[XA+'1']?2:H.st.res[XA+'0']?1:0;
  // r3(Codex r2 대조표): 이 기기에서 직접 낸 첫 답(시험처럼 ①·②) — 문항마다 처음 한 번만. 진도(st)에 두되 공유 기록(encode2)에는 넣지 않고, 받은 기록으로 진도를 바꿔도(adopt2) 이어 받는다.
  const mine1=(k,ok)=>{const M=H.st.mine||(H.st.mine={});if(!M[k])M[k]=ok?'ok':'fail';};
  R2.exam=(s,done)=>{
    cur.r=cur.r||{};
    const e=C.exam,chunks=e.answer,mix=e.tiles.map(t=>chunks.indexOf(t));
    const fin=()=>done({d:cur.r.d||(H.st.res[XA]||'').slice(2),dw:cur.r.dw!==undefined?cur.r.dw:wrong14(),b:XB?(H.st.res[XM+'b']||'').slice(2)||undefined:undefined,sel:XB?(cur.sel||{})[XM+'b']:undefined});
    const toB=()=>XB?subStep({phase:'b'},B):fin();
    const B=()=>chooseScreen(s.title,{...qOf(XM+'b',C.Q[XM+'b'],'2/2'),mine:ok=>mine1(XM+'b',ok)},fin);   // r3: ②도 이 기기 첫 선택을 기기별 점수로
    const A=()=>{
      const f=frame(s.title,XB?'1/2':'1/1');f.add(`<p class="e1-lead">${esc(e.prompt)}</p>`);f.add(`<p class="e1-ko">${esc(e.ko)}</p>`);
      let w=Math.max(cur.w||0,wrong14());
      const TIPS=e.hints;
      // 낸 답이 처음 어긋난 자리로 도움을 고른다(원고 §4 zones — 1부터 센 자리 [처음, 끝])
      const tipOf=order=>{const k=order.findIndex((v,j)=>v!==j)+1,z=e.zones.findIndex(([a,b])=>k>=a&&k<=b);return z<0?TIPS.length-1:z;};
      let fl=null;const formula=()=>{if(fl)return;const t=f.body.querySelector('.e1-tiles');fl=document.createElement('p');fl.className='e1-note info';fl.textContent=e.nameLine;t.after(fl);};   // ① 첫 제출 뒤 첫 줄
      const a=arrange(f,{chunks,mix,
        onCheck:(ok,order)=>{
          a.lock();
          mine1(XA,ok);   // r3(Codex r2 대조표 4): 받은 기록을 읽기 전에 — 제출 직후 '이미 놓았어요'가 떠도 이 기기 첫 배열의 정오는 이 기기 점수
          if(!H.st.res[XA]&&sync2()){const d=H.st.res[XA],sw=wrong14();
            if(d==='D-ok'||d==='D-help'||(d==='D-fail'&&H.st.res[XA+'f']))return keep2(f,()=>{formula();const t=f.body.querySelector('.e1-tiles');if(t){t.hidden=true;t.style.display='none';}
              a.solved();
              const n=a.note('이 문장은 이미 놓았어요.','ok');f.main('다음',true,toB);reveal(n);});
            if(d==='D-fail'){w=Math.max(w,3);cur.w=w;cur.r.d='fail';cur.r.dw=w;return keep2(f,()=>{formula();a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');});}
            if(sw>w){w=sw;cur.w=w;}}
          if(ok){cur.r.d=w===0&&!H.st.res[XA+'0']?'ok':'help';cur.r.dw=w;fixMine(XA,'D-'+cur.r.d);}
          else{w++;cur.w=w;cur.t=tipOf(order||[]);fix(H.st,XA+'0','D-wrong');if(w>=2)fix(H.st,XA+'1','D-wrong');if(w>=3){cur.r.d='fail';cur.r.dw=w;fixMine(XA,'D-fail');}}
          keep2(f,()=>{formula();
            if(ok){const t=f.body.querySelector('.e1-tiles');if(t){t.hidden=true;t.style.display='none';}   // 정답 저장 뒤 타일판 숨김 — 시험처럼 ① 화면만. hidden만으로는 CSS(display:flex)에 져서 보였다(v213 E2 T14 ①과 같은 증상) → style.display도
              const n=a.note(cur.r.d==='ok'?e.okFirst:e.okHelp,'ok');f.main('다음',true,toB);reveal(n);return;}
            if(w>=3){a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');return;}
            a.unlock();a.reset();a.note(TIPS[cur.t|0]);});},
        onFollowed:()=>{cur.r.d='fail';cur.r.dw=w;fix(H.st,XA+'f','f-ok');keep2(f,toB);}});
      if(w>=3){formula();a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');}else if(w>0){formula();if(cur.t!==undefined)a.note(TIPS[cur.t]);}
    };
    // ①을 마친 뒤 다시 연 화면: U12 = 기록된 ① 한 장('다음' = 마침), V14 = ②부터.
    const doneA=()=>{const f=frame(s.title,XB?'1/2':'1/1');f.add(`<p class="e1-ko">${esc(e.ko)}</p>`);const a=arrange(f,{chunks,mix,onCheck:()=>{}});a.solved();
      const t=f.body.querySelector('.e1-tiles');if(t){t.hidden=true;t.style.display='none';}const n=a.note('이 문장은 이미 놓았어요.','ok');f.main('다음',true,toB);reveal(n);};
    if(XB&&(cur.phase==='b'||H.st.res[XM+'b']))return B();
    const a14=H.st.res[XA];
    if(a14==='D-ok'||a14==='D-help'||(a14==='D-fail'&&H.st.res[XA+'f']))return XB?B():doneA();   // D-fail이고 따라 놓기 전이면 ①의 따라 놓기부터
    A();
  };
  R2.end=(s,done)=>done({});
    // 덩어리 이동 시연(E1·E2 demoScreen과 같은 화면) — 위 줄 순서·③·④ 줄을 문장 데이터로(원고 §10: koOrder [0,3,2,1] · demo3 · demo4). ② 줄은 같은 틀.
    function demoX(sent,title,done){
      const f=frame(title,'');let k=0;const koOrder=sent.koOrder;
      f.add('<p class="e1-lead">탭할 때마다 하나씩 옮겨요. 어떤 게 먼저 가는지 보세요.</p>');
      const top=f.add('<div class="e1-tiles"></div>'),slots=f.add('<div class="e1-slots"></div>'),cap=f.add('<p class="e1-note info" hidden></p>');
      const draw=()=>{top.innerHTML=koOrder.map(i=>`<span class="e1-tile c-${ROLE[i]}" style="cursor:default;${i<k?'opacity:.3':''}">${esc(sent.ko4[i])}</span>`).join('');
        slots.innerHTML=[0,1,2,3].map(i=>`<div class="e1-slot" style="${i<k?`color:var(--${ROLE[i]});border-style:solid;border-color:var(--${ROLE[i]})`:''}">${i<k?esc(sent.en[i]):''}</div>`).join('');
        if(k===2){cap.hidden=false;cap.textContent=`'${sent.ko4[1]}'가 앞으로 나와요.`;}
        if(k===3&&sent.demo3){cap.hidden=false;cap.textContent=sent.demo3;}
        if(k===4){cap.hidden=false;cap.textContent=sent.demo4;}
        if(k<4)f.main('옮기기',true,()=>{k++;draw();});else f.main('다음',true,()=>done());};
      draw();
    }
    // V10(원고 v1.2 §3·§10): 허용 답과 don't 한 낱말의 표기만 다른 답 = 정답. 다른 낱말·낱말 수는 norm 뒤 글자 그대로 같아야 한다. apos 없는 문장(그 밖 쓰기)은 늘 false.
    function aposOk(c,t){const a=c&&c.apos;if(!a)return false;const T=norm(t).split(' ');
      return c.accept.some(x=>{const X=norm(x).split(' ');return X.length===T.length&&X.every((w,i)=>w===T[i]||(w===a.word&&a.forms.includes(T[i])));});}
    // 고르기 문항(원고 부록 A choices · exam V14b → E2 chooseScreen 모양). 보기 두 개인 어법 문항은 번호 없음(E2 v1.3).
    function qOf(k,d,count){
      const lead=`<p class="e1-lead">${esc(d.lead)}</p>`,blank=s=>esc(s).replace('______','<span class="e1-blank sm">&nbsp;</span>');
      let top;
      if(d.kind==='text')top=lead+`<p class="e1-sent" style="font-size:18px">${esc(d.q)}</p>`+(d.gloss?`<p class="e1-ko" style="font-size:16px;font-weight:600">${esc(d.gloss)}</p>`:'');
      else if(d.kind==='meaning')top=lead+`<p class="e1-sent" style="font-size:17px">${esc(d.sent)}</p><p class="e1-lead" style="text-align:center">${esc(d.q)}</p>`;
      else if(d.kind==='grammar')top=lead+`<p class="e1-sent" style="font-size:18px">${blank(d.q)}</p>`;
      else top=lead+`<div class="e1-dlg box"><p class="bx">〈보기〉</p>${Object.entries(d.items).map(([x,v])=>`<p>(${x}) ${esc(v.s)}</p>`).join('')}</div>`;
      const opts=d.kind==='box'?d.options.map(o=>o.map(x=>'('+x+')').join(', ')):d.opts;
      return {key:k,count,num:d.kind!=='grammar',ans:d.answer-1,top,opts,ex:d.expl,title:d.title};
    }
    // ── 실행 쪽(E2 runtime_a·runtime_b의 E2 몫을 이 묶음 저장 키·공유 기록·결과 로그로) ──
    H.st=fresh2();
    function load2(){
      try{const raw=PA_STORAGE.getItem(KEY2);if(!raw)return {st:fresh2(),sit:null,cur:null,shared:'',held:[]};const o=JSON.parse(raw);
        if(!o||!o.st||o.st.v!==1)throw Error('bad');
        const s={...fresh2(),...o.st},c=o.cur||null;wdFill(s,c);   // 후속 r4: 날짜 칸 없이 넘어온 연습 쓰기 결과(v214 U8·V8 cur.wres) — 같은 문항의 열린 날짜로
        return {st:s,sit:o.sit||null,cur:c,shared:typeof o.shared==='string'?o.shared:'',held:Array.isArray(o.held)?o.held:[]};}
      catch(_){throw Error('영어 기록을 읽지 못했어요. 기록을 보존한 채 어른에게 알려 주세요.');}
    }
    function w2raw(v){return typeof safeSetItem==='function'?safeSetItem(KEY2,v)===true:(PA_STORAGE.setItem(KEY2,v),true);}
    function write2(o){return w2raw(JSON.stringify(o));}
    const bundle=c=>({st:H.st,sit:H.sit,cur:c&&c.track===TR?c:null,shared:H.shared,held:H.held});
    function stampOn2(s){s.evidence_at=new Date().toISOString();s.event_id=(typeof PA_CURRICULUM!=='undefined'?PA_CURRICULUM:'pa')+':english:'+C.tagl+':'+(crypto.randomUUID?crypto.randomUUID():Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join(''));}
    function stamp2(){stampOn2(H.st);}
    function shareState2(s,sh){
      if(!s||!s.evidence_at||shareKey(s)===sh||!s.days.length)return sh;
      try{if(PA_PROGRESS.enqueueEnglishFinalX&&PA_PROGRESS.enqueueEnglishFinalX(CONCEPT2,encode2(s))===true)return shareKey(s);}catch(e){console.warn('['+C.tagl+'-progress]',e&&e.message);}
      return sh;
    }
    function readRemote2(){try{const c=PA_PROGRESS.englishFinalRemoteX?.(CONCEPT2);return c?decode2(c):null;}catch(_){return null;}}
    function newSit2(){return {id:C.tagl+'-'+new Date().toISOString().replace(/[^0-9TZ]/g,''),date:today,items:[],sec:0};}
    function s2(){if(!H.sit)H.sit=newSit2();return H.sit;}
    // E2 ownOpen2와 같음(이 기기가 그 회차에 첫 제출을 낸 채 나간 재확인 화면은 같은 날 다시 열면 그 화면으로).
    function ownOpen2(s2st,c,date){const o=s2st&&s2st.open;if(!o||o.date!==date||!c||c.key!==o.key||!c.own||(s2st.done||[]).includes(date))return null;
      const it=itemOf2(o.key);if(!it||it.type!=='b')return null;const g=gradedOpen2(s2st);return g&&c.own[g.r.bkey]?it:null;}
    // 결과 로그(quiz_logs_eng_fin_e4·e5, lesson eng_fin_e4·e5) = 일반 로그(E2 logRecord2와 같은 계산).
    function logRecord2(s){
      const log=logRecord({...s,track:0});
      const items=s.items,graded=items.filter(x=>x.g),flags=graded.flatMap(x=>[x.ok,...(x.extra||[])]),total=flags.length,correct=flags.filter(Boolean).length;
      return {...log,total:total||items.filter(x=>!x.nd).length,lesson:C.LESSON,type_breakdown:C.TAG+':'+correct+'/'+total,details:`[${C.TAG};stop=${s.reason};ptr=${s.ptrId}] `+items.map(x=>x.t).join(', ')};
    }
    function writeLog2(s){
      const logs=JSON.parse(PA_STORAGE.getItem(LOG_KEY2)||'[]');if(!Array.isArray(logs))throw Error('invalid-logs');
      if(logs.some(x=>x&&x.support_session_id===s.id))return;
      const log=logRecord2(s);logs.push(log);
      const ok=typeof storeRecordValue==='function'?storeRecordValue(LOG_KEY2,JSON.stringify(logs)):(PA_STORAGE.setItem(LOG_KEY2,JSON.stringify(logs)),true);
      if(!ok)throw Error('storage');
    }
    const tryLog2=s=>{try{writeLog2(s);return true;}catch(e){console.warn('['+C.tagl+'-log]',e&&e.message);return false;}};
    // E2 settleStored2와 같음: 더 최근 서버 기록이면 adopt2, 이 기기가 더 새면 미확인 표시·예약만 받는다(reconcile2). 지난 날 채점한 열린 문항은 채점한 날로 마감.
    function settleStored2(date,dry){
      const o=load2(),r=readRemote2();
      let s=o.st,a=null,rc=null;const useRemote=!!r?.evidence_at&&newer(r,o.st);
      if(useRemote){a=adopt2(o.st,r,o.cur,date);s=a.st;}else if(r){rc=reconcile2(o.st,r);if(rc)s=rc;}
      const g=s.open&&s.open.date!==date?gradedOpen2(s):null,c=useRemote?(a.keepCur?o.cur:null):o.cur;
      if(dry)return {o,s:g?closeOne2(s,g,c).st:s,useRemote};
      if(!g&&!(a&&a.changed)&&!rc)return {o,s,useRemote};
      const n={st:s,sit:o.sit,cur:o.cur,shared:o.shared,held:o.held.slice()};
      const keep=l=>{if(!n.held.some(x=>x.id===l.id))n.held.push(l);};
      if(a){n.cur=a.keepCur?o.cur:null;n.shared=shareKey(r);a.logs.forEach(keep);}
      if(g){const x=closeOne2(n.st,g,c);n.st=x.st;n.cur=null;keep(x.log);}
      if(g||(a&&a.stamp)||rc)stampOn2(n.st);
      if(!write2(n))return {o,s,useRemote,blocked:true};
      n.held=n.held.filter(x=>!tryLog2(x));n.shared=shareState2(n.st,n.shared);
      try{write2(n);}catch(_){}
      kick();
      return {o,s:n.st,useRemote,settled:true};
    }
    return Object.freeze({TR,TAG:C.TAG,name:C.name,done:C.done,L:C.L,S:S2,SEQ:SEQ2,IDX:IDX2,KEY:KEY2,LOG_KEY:LOG_KEY2,CONCEPT:CONCEPT2,MARK:C.MARK,A:A_,B:B_,W:W_,WS,CA,CK:CK2,LAST,XM,XB,RES_KEY:RES_KEY2,T14_FROM,
      H,fresh:fresh2,nextStep:nextStep2,writeDue:writeDue2,defDue:defDue2,examDue:t14Due,xDay,seq:seq2,pushDef:pushDef2,deferAt:deferAt2,keyOf:keyOf2,itemOf:itemOf2,resumable:resumable2,
      seenTarget:seenTarget2,markSeen:markSeen2,complete:complete2,bRound:bRound2,gradedOpen:gradedOpen2,closeOne:closeOne2,closeId:closeId2,token:token2,encode:encode2,decode:decode2,
      mergeRes:mergeRes2,mergeB:mergeB2,mergeFacts:mergeFacts2,adopt:adopt2,reconcile:reconcile2,mergeQuestions:mergeQuestions2,withOpen:withOpen2,cBase:cBase2,oDay:oDay2,triesW:triesT10,
      achieve:achieve2,unsure:unsure2,fin:e2Fin,aposOk,qOf,R:R2,load:load2,write:write2,wraw:w2raw,bundle,stamp:stamp2,stampOn:stampOn2,shareState:shareState2,readRemote:readRemote2,
      newSit:newSit2,sitOf:s2,ownOpen:ownOpen2,logRecord:logRecord2,writeLog:writeLog2,tryLog:tryLog2,settleStored:settleStored2});
  }
  // ── E4·E5 묶음 정의(원고 E4E5_원고_v1.2 부록 A에서 build_e4e5.py가 기계로 옮김 — 손으로 고치지 않는다) ──
  const C4={"TR":4,"TAG":"E4","tagl":"e4","name":"셋째","done":"셋째 묶음을 모두 마쳤어요.","L":"U","PX":"u","KEY":"pa_english_2026_final_e4_v1","LOG":"quiz_logs_eng_fin_e4","CONCEPT":"eng_fin-E4","LESSON":"eng_fin_e4","MARK":"e4v:1","S":{"u-base":{"en":["The sparrows","were wearing","something","warm"],"ko":"참새들은 따뜻한 무언가를 신고 있었어요.","ko4":["참새들은","신고 있었어요","무언가를","따뜻한"],"koOrder":[0,3,2,1],"mix":[3,0,2,1],"linkMsg":"우리말은 '따뜻한 무언가', 영어는 something 뒤에 warm이 와요.","demo3":"영어에서는 something이 먼저 와요.","demo4":"'따뜻한'은 something 뒤에 붙어요. something warm.","hh":["누가 신고 있었나요? '참새들은'부터 찾아봐요.","다음은 '신고 있었어요'(were wearing). 그다음 무언가, 그다음 어떤 것인지."]},"u-funny":{"en":["I","want","something","funny"],"ko":"나는 재미있는 무언가를 원해요.","ko4":["나는","원해요","무언가를","재미있는"],"koOrder":[0,3,2,1],"mix":[3,1,0,2],"linkMsg":"funny도 something 뒤에 붙어요.","hh":["누가 원하나요? '나는'부터 찾아봐요.","다음은 '원해요'(want). 그다음 무언가, 그다음 어떤 것인지."]},"u-woman":{"en":["The woman","is drinking","something","cold"],"ko":"그 여자는 차가운 무언가를 마시고 있어요.","ko4":["그 여자는","마시고 있어요","무언가를","차가운"],"koOrder":[0,3,2,1],"mix":[2,1,3,0],"accept":["The woman is drinking something cold."],"wfb1":"덩어리 순서대로 써 봐요: 그 여자는 → 마시고 있어요 → 무언가를 → 차가운.","hh":["누가 마시고 있나요? '그 여자는'부터 찾아봐요.","다음은 '마시고 있어요'(is drinking). 그다음 무언가, 그다음 어떤 것인지."]},"u-alex":{"en":["Alex","found","something","shiny in the water"],"ko":"알렉스는 물속에서 반짝이는 무언가를 찾았어요.","ko4":["알렉스는","찾았어요","무언가를","물속에서 반짝이는"],"koOrder":[0,3,2,1],"mix":[1,3,0,2],"linkMsg":"something 바로 뒤에 shiny가 와요. in the water는 장소를 알려 줘요.","demo3":"영어에서는 something이 먼저 와요.","demo4":"shiny는 something 바로 뒤에 붙어요. in the water는 장소를 알려 줘요.","hh":["누가 찾았나요? '알렉스는'부터 찾아봐요.","다음은 '찾았어요'(found). 그다음 무언가, 그다음 어떤 것인지."]},"u-loud":{"ko":"나는 밖에서 시끄러운 무언가를 들었어요.","given":["loud","outside","I","heard"],"accept":["I heard something loud outside.","Outside, I heard something loud."],"prompt":"주어진 말을 모두 쓰고, 낱말 하나만 더해 한 문장으로 쓰세요.","fb1":"누가 → 하는 일 → 무언가 → 어떤 것인지 순서예요.","fb2":"'무언가'는 something이에요. something 뒤에 loud를 붙여 보세요.","ok":"맞았어요! something 뒤에 loud를 붙였어요.","answer":"I heard something loud outside."}},"SEQ":[{"id":"U1","kind":"scene","title":"장면"},{"id":"U2","kind":"link","title":"문장과 뜻 연결","sent":"u-base"},{"id":"U3","kind":"demo","title":"덩어리 옮기기","sent":"u-base"},{"id":"U4","kind":"blank","title":"빈칸 하나 고르기"},{"id":"U5","kind":"arrange","layer":"A","title":"혼자 놓아 보기","sent":"u-base"},{"id":"brk1","kind":"break"},{"id":"U6","kind":"check","layer":"B","title":"다른 날 혼자 놓기","sent":"u-base"},{"id":"U7","kind":"practice","noDemo":true,"title":"원하는 문장 연습","sent":"u-funny"},{"id":"U8","kind":"practice","write":true,"title":"마시는 문장 연습","sent":"u-woman"},{"id":"U9","kind":"arrange","layer":"C","title":"처음 보는 문장","sent":"u-alex"},{"id":"brk2","kind":"break"},{"id":"U10","kind":"write","layer":"C","firstOfDay":true,"title":"혼자 문장 쓰기","sent":"u-loud"},{"id":"U11","kind":"choose","title":"본문에서 찾기"},{"id":"brk3","kind":"break"},{"id":"U12","kind":"exam","title":"시험처럼 풀기"},{"id":"END","kind":"end"}],"A":"U5","B":"U6","W":"U10","WS":"u-loud","CA":["U9"],"LAST":"U11","XM":"U12","XB":false,"CH":{"U11":["U11a","U11b"]},"Q":{"U11a":{"lead":"앵거스 이야기의 끝부분이에요. 질문의 답이 들어 있는 문장을 고르세요.","q":"What are the villagers all wearing now?","opts":["Just then, people rushed into the store.","The store was crowded with customers.","Now the villagers are all wearing warm socks with red stripes.","Oh, dogs and cats are, too!"],"answer":3,"expl":"③이에요. 질문은 지금 마을 사람들이 신고 있는 것을 물어요. ④는 개와 고양이도 그렇다는 말이에요. warm은 socks 앞에 와요(warm socks). something에는 warm이 뒤에 붙어요(something warm).","kind":"text","title":"본문에서 찾기","gloss":"마을 사람들은 지금 모두 무엇을 신고 있나요?"},"U11b":{"lead":"어법에 맞는 것을 고르세요.","q":"The teacher said ______ in the class.","opts":["interesting something","something interesting"],"answer":2,"expl":"something interesting이에요. something 뒤에 interesting을 붙여요.","kind":"grammar","title":"알맞은 말 고르기"}},"exam":{"ko":"다음 날, 참새들은 따뜻한 무언가를 신고 있었어요.","tiles":["warm","the sparrows","something","The next day,","wearing","were"],"answer":["The next day,","the sparrows","were","wearing","something","warm"],"prompt":"우리말에 맞게 덩어리를 순서대로 놓으세요.","zones":[[1,1],[2,4],[5,6]],"hints":["'다음 날'(The next day,)부터 놓아 봐요.","다음은 누가(the sparrows), 그다음 하는 일(were wearing).","'따뜻한 무언가'는 something을 먼저 놓고 warm을 뒤에 붙여요."],"okFirst":"맞아요! 교과서 문장을 혼자 놓았어요.","okHelp":"맞아요. 문장을 완성했어요.","nameLine":"교과서에서는 이런 말을 '-thing + 형용사'라고 불러요. something + 어떤 것인지."},"blank":{"stem":"The sparrows were wearing ［　　］.","tiles":["warm something","something warm"],"answer":"something warm","prompt":"방금 본 교과서 문장을 떠올려 보세요. '따뜻한 무언가'를 영어로 어떻게 썼나요?","ok":"맞아요. something 뒤에 warm을 붙여요.","fb":{"warm something":"우리말 순서대로 놓았어요. 영어는 something을 먼저 쓰고 warm을 뒤에 붙여요."},"sent":"u-base"},"scene":{"cap":"추운 겨울, 참새들은 발이 시렸어요. 다음 날, 참새들은 따뜻한 무언가를 신고 있었어요.","img":"img/E4_u1_sparrow_socks.png","alt":"눈 덮인 나뭇가지에 앉은 참새 두 마리가 발에 빨간 줄무늬 작은 양말을 신고 있는 장면"},"kid":{"link.lead":"덩어리를 탭하면 뜻이 같이 켜져요.","U7.lead":"이번엔 '원해요'. 자리는 똑같아요 — 누가, 하는 일, 무언가, 어떤 것인지.","U8.lead":"이번엔 '마시고 있어요'. 자리는 똑같아요."}};
  const C5={"TR":5,"TAG":"E5","tagl":"e5","name":"넷째","done":"넷째 묶음을 모두 마쳤어요.","L":"V","PX":"v","KEY":"pa_english_2026_final_e5_v1","LOG":"quiz_logs_eng_fin_e5","CONCEPT":"eng_fin-E5","LESSON":"eng_fin_e5","MARK":"e5v:1","S":{"v-base":{"en":["These","are","the socks","that I want"],"ko":"이것들이 내가 원하는 그 양말이에요.","ko4":["이것들이","이에요","그 양말","내가 원하는"],"koOrder":[0,3,2,1],"mix":[2,0,3,1],"linkMsg":"something warm처럼, '내가 원하는'이 the socks 뒤에 와요.","demo3":"그 양말(the socks)이 먼저 와요.","demo4":"'내가 원하는'은 the socks 뒤에 붙어요. 내가 원하는 건 앞에서 말한 양말이에요. 그래서 want 뒤에 them을 또 쓰지 않아요.","hh":["'이것들이'부터 찾아봐요.","다음은 '이에요'(are). 그다음 the socks, 그다음 어떤 양말인지."]},"v-peter":{"en":["Peter","is","a friend","who I can trust"],"ko":"피터는 내가 믿을 수 있는 친구예요.","ko4":["피터는","예요","친구","내가 믿을 수 있는"],"koOrder":[0,3,2,1],"mix":[3,1,0,2],"linkMsg":"'내가 믿을 수 있는'이 a friend 뒤에 와요.","hh":["'피터는'부터 찾아봐요.","다음은 '예요'(is). 그다음 a friend, 그다음 어떤 친구인지."]},"v-game":{"en":["This","is","the computer game","which Zoe enjoys"],"ko":"이것은 조이가 즐기는 그 컴퓨터 게임이에요.","ko4":["이것은","이에요","그 컴퓨터 게임","조이가 즐기는"],"koOrder":[0,3,2,1],"mix":[3,0,2,1],"accept":["This is the computer game which Zoe enjoys.","This is the computer game that Zoe enjoys."],"wfb1":"덩어리 순서대로 써 봐요: 이것은 → 이에요 → 그 컴퓨터 게임 → 조이가 즐기는.","hh":["'이것은'부터 찾아봐요.","다음은 '이에요'(is). 그다음 the computer game, 그다음 어떤 게임인지."]},"v-bike":{"en":["I","found","the bike","which Jayden lost last week"],"ko":"나는 제이든이 지난주에 잃어버린 그 자전거를 찾았어요.","ko4":["나는","찾았어요","그 자전거를","제이든이 지난주에 잃어버린"],"koOrder":[0,3,2,1],"mix":[2,0,3,1],"linkMsg":"'제이든이 지난주에 잃어버린'이 the bike 뒤에 와요.","demo3":"그 자전거(the bike)가 먼저 와요.","demo4":"'제이든이 지난주에 잃어버린'은 the bike 뒤에 붙어요.","hh":["누가 찾았나요? '나는'부터 찾아봐요.","다음은 '찾았어요'(found). 그다음 the bike, 그다음 어떤 자전거인지."]},"v-fountain":{"en":["It","is","a water fountain","that everybody can use"],"ko":"그것은 모든 사람이 쓸 수 있는 식수대예요.","ko4":["그것은","예요","식수대","모든 사람이 쓸 수 있는"],"koOrder":[0,3,2,1],"mix":[2,0,3,1],"linkMsg":"'모든 사람이 쓸 수 있는'이 a water fountain 뒤에 와요.","demo3":"식수대(a water fountain)가 먼저 와요.","demo4":"'모든 사람이 쓸 수 있는'은 a water fountain 뒤에 붙어요.","hh":["'그것은'부터 찾아봐요.","다음은 '예요'(is). 그다음 a water fountain, 그다음 어떤 식수대인지."]},"v-toys":{"ko":"나는 더 이상 쓰지 않는 장난감이 좀 있어요.","given":["I don't use anymore","I have","some toys"],"accept":["I have some toys that I don't use anymore.","I have some toys which I don't use anymore."],"prompt":"세 덩어리를 나누지 말고, 낱말 하나만 더해 한 문장으로 쓰세요.","fb1":"some toys 다음에 '어떤 장난감인지'가 와요. 그 말 앞에 낱말 하나를 넣어요.","fb2":"some toys 뒤에 that을 넣어 보세요. 물건이라 which도 돼요.","ok":"맞았어요! 장난감 뒤에 어떤 장난감인지 붙였어요.","answer":"I have some toys that I don't use anymore.","omit":"I have some toys I don't use anymore.","fbOmit":"영어로는 이렇게도 말해요. 이번 문제에서는 낱말 하나를 더해 보세요.","fbWho":"who는 사람 뒤에 써요. 장난감 뒤에는 that이나 which를 써요.","who":" some toys who ","apos":{"word":"don't","forms":["dont","don‘t","don＇t"],"line":"don't에는 작은따옴표(')가 들어가요."}}},"SEQ":[{"id":"V1","kind":"scene","title":"장면"},{"id":"V2","kind":"link","title":"문장과 뜻 연결","sent":"v-base"},{"id":"V3","kind":"demo","title":"덩어리 옮기기","sent":"v-base"},{"id":"V4","kind":"blank","title":"빈칸 하나 고르기"},{"id":"V5","kind":"arrange","layer":"A","title":"혼자 놓아 보기","sent":"v-base"},{"id":"brk1","kind":"break"},{"id":"V6","kind":"check","layer":"B","title":"다른 날 혼자 놓기","sent":"v-base"},{"id":"V7","kind":"practice","noDemo":true,"title":"사람 문장 연습","sent":"v-peter"},{"id":"V8","kind":"practice","write":true,"title":"물건 문장 연습","sent":"v-game"},{"id":"V9","kind":"arrange","layer":"C","title":"처음 보는 문장","sent":"v-bike"},{"id":"brk2","kind":"break"},{"id":"V10","kind":"write","layer":"C","firstOfDay":true,"title":"혼자 문장 쓰기","sent":"v-toys"},{"id":"V11","kind":"arrange","layer":"C","title":"처음 보는 문장","sent":"v-fountain"},{"id":"V12","kind":"choose","title":"본문에서 찾기"},{"id":"V13","kind":"choose","title":"알맞은 말 고르기"},{"id":"brk3","kind":"break"},{"id":"V14","kind":"exam","title":"시험처럼 풀기"},{"id":"END","kind":"end"}],"A":"V5","B":"V6","W":"V10","WS":"v-toys","CA":["V9","V11"],"LAST":"V13","XM":"V14","XB":true,"CH":{"V12":["V12a","V12b","V12c"],"V13":["V13a","V13b"]},"Q":{"V12a":{"lead":"앵거스 이야기 가운데 부분이에요. 질문의 답이 들어 있는 문장을 고르세요.","q":"What did people do as soon as they saw the sparrow socks?","opts":["They were wearing cute socks with red stripes!","As soon as people saw the socks, they hurried to the department store.","But they couldn't find the same socks anywhere.","Someone took all of our wool."],"answer":2,"expl":"②예요. 사람들은 양말을 보자마자 백화점으로 서둘러 갔어요. ③은 그 뒤에 일어난 일이에요.","kind":"text","gloss":"사람들은 참새 양말을 보자마자 무엇을 했나요?"},"V12b":{"lead":"사람들이 백화점에서 한 말이에요.","sent":"We want the socks that the sparrows are wearing.","q":"사람들이 원한 양말은 어떤 양말이에요?","opts":["참새들이 신고 있는 양말","백화점에서 파는 양말"],"answer":1,"expl":"①이에요. the socks 뒤의 that the sparrows are wearing이 어떤 양말인지 알려 줘요.","kind":"meaning"},"V12c":{"lead":"봉사 활동 홍보 글의 한 문장이에요.","sent":"It's a volunteer project that any student can join.","q":"이 봉사 활동에는 누가 참여할 수 있어요?","opts":["어떤 학생이든","동아리 학생만"],"answer":1,"expl":"①이에요. that any student can join이 어떤 프로젝트인지 알려 줘요.","kind":"meaning"},"V13a":{"lead":"빈칸에 알맞은 말을 고르세요.","q":"Isabella is the singer ______ he loves.","opts":["which","who"],"answer":2,"expl":"who예요. the singer는 사람이라 who나 that을 써요. which는 물건 뒤에 써요.","kind":"grammar"},"V13b":{"lead":"어법에 맞는 것을 고르세요.","q":"The pictures ______ last week were amazing.","opts":["I took which","which I took"],"answer":2,"expl":"which I took예요. which를 먼저 쓰고, 그다음 누가(I), 하는 일(took).","kind":"grammar"},"V14b":{"kind":"box","lead":"보기마다 어법에 맞는지 따져 보고, 어법에 맞는 문장을 모두 담은 번호를 고르세요.","items":{"A":{"s":"There's something special in the box.","ok":true,"src":"There's something special in the box.","err":null},"B":{"s":"Did you see strange anything?","ok":false,"src":"Did you see anything strange?","err":"thing-order"},"C":{"s":"The woman who he met yesterday knew Sam.","ok":true,"src":"The woman who he met yesterday knew Sam.","err":null},"D":{"s":"This is the computer game who Zoe enjoys.","ok":false,"src":"This is the computer game which Zoe enjoys.","err":"rel-person-thing"},"E":{"s":"The movie we watched which last night was interesting.","ok":false,"src":"The movie which we watched last night was interesting.","err":"rel-order"}},"options":[["A","D"],["B","C"],["A","C"],["A","C","E"],["B","D","E"]],"answer":3,"expl":"③ (A)·(C)예요. (B) anything 뒤에 strange를 붙여요(anything strange). (D) 게임은 물건이라 who가 아니라 which나 that이에요. (E) which를 먼저, 그다음 we watched예요(which we watched)."}},"exam":{"ko":"우리는 참새들이 신고 있는 그 양말을 원해요.","tiles":["the sparrows","want","wearing","the socks","We","that","are"],"answer":["We","want","the socks","that","the sparrows","are","wearing"],"prompt":"우리말에 맞게 덩어리를 순서대로 놓으세요.","zones":[[1,2],[3,3],[4,7]],"hints":["누가 원하나요? We부터 놓아 봐요.","want 다음은 무엇(the socks)이에요.","'참새들이 신고 있는'은 the socks 뒤에 that, 그다음 the sparrows are wearing이에요."],"okFirst":"맞아요! 교과서 문장을 혼자 놓았어요.","okHelp":"맞아요. 문장을 완성했어요.","nameLine":"교과서에서는 이 that을 '목적격 관계대명사'라고 불러요. the socks + that + 누가 + 하는 일."},"blank":{"stem":"These are the socks ［　　］.","tiles":["I want that","that I want"],"answer":"that I want","prompt":"방금 본 교과서 문장을 떠올려 보세요. '내가 원하는'을 영어로 어떻게 썼나요?","ok":"맞아요. that을 먼저, 그다음 I want.","fb":{"I want that":"that이 맨 앞이에요. that 다음에 누가(I), 그다음 하는 일(want)."},"sent":"v-base"},"scene":{"cap":"참새들이 양말을 가게에 돌려주자 사람들이 몰려왔어요. 누군가 말했어요. \"드디어! 이게 내가 원하는 양말이에요!\""},"kid":{"link.lead":"덩어리를 탭하면 뜻이 같이 켜져요.","V7.lead":"이번엔 친구, 사람이에요. 사람 뒤에는 that 대신 who를 써도 돼요.","V8.lead":"이번엔 게임, 물건이에요. 물건 뒤에는 that 대신 which를 써도 돼요."}};
  const E4X=mkX(C4),E5X=mkX(C5);
  // 열림(원고 E4E5 §6): E4 = E2 순서 끝(T13)을 마침 · E5 = E4 순서 끝(U11)을 마침. 그 전에는 하루 배정·홈 카드·하루 끝이 지금(planJ) 그대로다.
  const e4Open=(st1,st2)=>e2Open(st1)&&!!st2&&st2.ptr>IDX2.T13;
  const e5Open=st4=>!!st4&&st4.ptr>E4X.IDX[E4X.LAST];
  // E2 T14를 오늘 열었거나 마쳤거나 오늘 열 수 있음(E1 s9Day와 같은 모양) — 그날 E4·E5 시험처럼은 쉼.
  const t14Day=(st2,date)=>(!!st2.open&&st2.open.key==='T14'&&st2.open.date===date)||(st2.ptr>IDX2.T14&&st2.sd===date)||t14Due(st2,date);
  // 하루 배정(순수 함수, 원고 E4E5 §6 하루 순서 — E2 §6을 넓힘): 2 혼자 쓰기 C(T10 → U10 → V10, 그날 아무것도 하기 전·하나만) · 3 E1 S9 ·
  //  4 시험처럼(T14 → U12 → V14, 하루 하나·앞 묶음 먼저) · 5 재확인 E1 → E2 → E4 → E5 · 6 지금 묶음 순서(E4, U11을 마치면 같은 날 E5) · 7 이월 C E5 → E4 → E2 → E1.
  //  300초는 네 묶음이 함께 쓴다. 반환 항목: E1·E2는 지금 모양 그대로, E4는 track:4, E5는 track:5.
  function planK(st1,st2,st4,st5,date){
    if(!e4Open(st1,st2))return planJ(st1,st2,date);
    const all=[st1,st2,st4,st5],o5=e5Open(st4);
    if(all.some(s=>s.done.includes(date)))return {type:'stop',reason:'done'};
    const act=all.some(s=>active(s,date));
    if(act&&all.reduce((n,s)=>n+secOf(s,date),0)>=BUDGET)return {type:'stop',reason:'budget'};
    if(!act){
      if(writeDue2(st2,date))return {type:'step',idx:IDX2.T10,track:2};
      if(E4X.writeDue(st4,date))return {type:'step',idx:E4X.IDX[E4X.W],track:4};
      if(o5&&E5X.writeDue(st5,date))return {type:'step',idx:E5X.IDX[E5X.W],track:5};
    }
    if(s9Pending(st1)&&examReady(st1,date))return {type:'step',idx:IDX.S9};
    const x1=s9Day(st1,date);
    if(t14Due(st2,date)&&!x1)return {type:'step',idx:IDX2.T14,track:2};
    const x2=x1||t14Day(st2,date);
    if(E4X.examDue(st4,date)&&!x2)return {type:'step',idx:E4X.IDX[E4X.XM],track:4};
    const x4=x2||E4X.xDay(st4,date);
    if(o5&&E5X.examDue(st5,date)&&!x4)return {type:'step',idx:E5X.IDX[E5X.XM],track:5};
    const d1=st1.b.filter(x=>x.last<date);if(d1.length)return {type:'b',sid:d1[0].sid};
    const d2=st2.b.filter(x=>x.last<date);if(d2.length)return {type:'b',sid:d2[0].sid,track:2};
    const d4=st4.b.filter(x=>x.last<date);if(d4.length)return {type:'b',sid:d4[0].sid,track:4};
    const d5=st5.b.filter(x=>x.last<date);if(d5.length)return {type:'b',sid:d5[0].sid,track:5};
    const q=o5?E5X.seq(st5,date):E4X.seq(st4,date);if(q)return q;
    const c5=o5?E5X.defDue(st5,date):null;if(c5)return {type:'dc',id:c5.id,track:5};
    const c4=E4X.defDue(st4,date);if(c4)return {type:'dc',id:c4.id,track:4};
    const c2=defDue2(st2,date);if(c2)return {type:'dc',id:c2.id,track:2};
    const c1=defDue(st1,date);if(c1)return {type:'dc',id:c1.id};
    return {type:'stop',reason:act?'break':e1Fin(st1)&&e2Fin(st2)&&E4X.fin(st4)&&E5X.fin(st5)?'end':'wait'};
  }
  function advanceK(st1,st2,st4,st5,date){
    for(let k=0;k<SEQ.length+SEQ2.length+E4X.SEQ.length+E5X.SEQ.length+8;k++){
      const p=planK(st1,st2,st4,st5,date);if(p.type!=='skip')return {st1,st2,st4,st5,p};
      if(p.track===2)st2=deferAt2(st2,p.idx,date);else if(p.track===4)st4=E4X.deferAt(st4,p.idx,date);else if(p.track===5)st5=E5X.deferAt(st5,p.idx,date);else st1=deferAt(st1,p.idx,date);
    }
    return {st1,st2,st4,st5,p:{type:'stop',reason:'wait'}};
  }
  // 네 묶음의 풀던 화면(그날 연 미완료 문항) — E1 → E2 → E4 → E5.
  function resumableK(st1,st2,st4,st5,date){if([st1,st2,st4,st5].some(s=>s.done.includes(date)))return null;return resumable(st1,date)||resumable2(st2,date)||E4X.resumable(st4,date)||E5X.resumable(st5,date);}
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const CSS=`#e1-page{padding:0}#e1-page .e1{display:flex;flex-direction:column;min-height:100%;--who:#2F5496;--saw:#2b3340;--whom:#C2410C;--doing:#15803D;--who-bg:#e3ecfa;--saw-bg:#e6e8ec;--whom-bg:#fdebe0;--doing-bg:#e3f5e8;--ok:#1b7f3b;--ok-bg:#e6f6ea;--help:#8a4b00;--help-bg:#fff4e5;--help-line:#f3c98b;--line:#d9dee5;--muted:#5b6575;--tile:#f2f4f7;--tile-line:#cfd6df}
#e1-page .e1-body{flex:1;padding:16px;display:flex;flex-direction:column;gap:14px}
#e1-page .e1-count{align-self:flex-end;font-size:13px;color:var(--muted)}
#e1-page .e1-lead{margin:0;font-size:17px;line-height:1.55}#e1-page .e1-lead b{color:#2F5496}
#e1-page .e1-ko{margin:0;font-size:19px;font-weight:700;text-align:center;line-height:1.5}
#e1-page .e1-area{display:flex;flex-wrap:wrap;gap:8px;padding:12px;background:#f9f9f9;border-radius:10px;border:2px dashed var(--line);min-height:64px;align-content:flex-start}
#e1-page .e1-area:empty::before{content:'👆 아래 덩어리를 순서대로 탭하세요';color:var(--muted);font-size:14px;align-self:center}
#e1-page .e1-area.words:empty::before{content:'👆 아래 단어를 순서대로 탭하세요'}
#e1-page .e1-tiles{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}
#e1-page .e1-tile{padding:10px 14px;background:var(--tile);border:2px solid var(--tile-line);border-radius:10px;font-size:19px;font-weight:600;font-family:inherit;color:#1d2433;min-height:50px;display:inline-flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.25;cursor:pointer}
#e1-page .e1-tile small{font-size:13px;font-weight:500;color:var(--muted);margin-top:2px}
#e1-page .e1-tile.picked{background:#e8f1fd;border-color:#90caf9}
#e1-page .e1-tile[disabled]{opacity:.35;cursor:default}
#e1-page .e1-tile.c-who{background:var(--who-bg);color:var(--who);border-color:var(--who)}#e1-page .e1-tile.c-saw{background:var(--saw-bg);color:var(--saw);border-color:var(--saw)}
#e1-page .e1-tile.c-whom{background:var(--whom-bg);color:var(--whom);border-color:var(--whom)}#e1-page .e1-tile.c-doing{background:var(--doing-bg);color:var(--doing);border-color:var(--doing)}
#e1-page .e1-tile.lit{box-shadow:0 0 0 4px rgba(47,84,150,.25)}
#e1-page .e1-note{margin:0;padding:10px 12px;border-radius:10px;background:var(--help-bg);border:1px solid var(--help-line);color:var(--help);font-size:15.5px;line-height:1.5}
#e1-page .e1-note.ok{background:var(--ok-bg);border-color:#9fd6ae;color:var(--ok)}#e1-page .e1-note.info{background:#eef3fb;border-color:#c9d8ef;color:#234c80}
#e1-page .e1-path{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:6px}#e1-page .e1-path span{padding:4px 8px;border-radius:8px;background:#fff;border:1px solid var(--help-line);font-weight:700}
#e1-page .e1-ask{align-self:center;background:#fff;border:1px solid var(--line);border-radius:999px;padding:8px 16px;font-size:15px;color:var(--muted);font-family:inherit}
#e1-page .e1-given{display:flex;flex-wrap:wrap;gap:8px;padding:12px;border:1px solid var(--line);border-radius:10px;background:#fafbfc}#e1-page .e1-given span{padding:6px 12px;border-radius:999px;background:#eef0f3;font-size:18px;font-weight:600}
#e1-page .e1-write{width:100%;min-height:90px;border:2px solid var(--line);border-radius:10px;padding:12px;font-size:19px;font-family:inherit;resize:none;box-sizing:border-box}
#e1-page .e1-write.ok{border-color:var(--ok);background:var(--ok-bg)}#e1-page .e1-inline{width:150px;font-size:19px;padding:6px 8px;border:2px solid var(--line);border-radius:8px;font-family:inherit}
#e1-page .e1-slots{display:flex;gap:6px}#e1-page .e1-slot{flex:1;min-height:52px;border:2px dashed var(--tile-line);border-radius:10px;display:flex;align-items:center;justify-content:center;padding:4px;font-size:15px;font-weight:700;text-align:center}
#e1-page .e1-sent{margin:0;font-size:21px;font-weight:700;text-align:center;line-height:1.6}#e1-page .e1-blank{display:inline-block;min-width:110px;border-bottom:3px solid var(--whom);color:var(--whom);padding:0 6px}
#e1-page .e1-opt{display:block;width:100%;text-align:left;padding:12px;border:2px solid var(--line);border-radius:10px;background:#fff;font-size:17px;font-family:inherit;margin-bottom:8px}
#e1-page .e1-opt.ok{border-color:var(--ok);background:var(--ok-bg)}#e1-page .e1-opt.no{border-color:#e0a3a3;background:#fdf1f1}
#e1-page .e1-opt:disabled{color:#1f2937;opacity:1;cursor:default}
#e1-page .e1-illus{width:100%;height:auto;border-radius:12px;display:block}#e1-page .e1-body.e1-mid{justify-content:center}#e1-page .e1-body.e1-mid .e1-count{display:none}#e1-page .e1-cap{margin:0;font-size:18px;font-weight:600;text-align:center}
#e1-page .e1-foot{position:sticky;bottom:0;background:#fff;border-top:1px solid var(--line);padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px}
#e1-page .e1-main{min-height:50px;border:0;border-radius:12px;background:#2F5496;color:#fff;font-size:17px;font-weight:700;font-family:inherit}#e1-page .e1-main:disabled{background:#b9c6dc}
#e1-page .e1-home{background:none;border:0;color:#5b6575;font-size:14px;font-family:inherit;text-decoration:underline}
#e1-page .e1-done{text-align:center;padding:40px 0 10px;font-size:19px;font-weight:700;line-height:1.6}
#e1-page .e1-orig{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}#e1-page .e1-ob{display:flex;flex-direction:column;align-items:center;padding:8px 10px;border-radius:10px;border:2px solid var(--tile-line);background:var(--tile);text-align:center}
#e1-page .e1-ob b{font-size:17px}#e1-page .e1-ob small{font-size:12.5px;color:var(--muted);margin-top:2px;font-weight:600}
#e1-page .e1-lead.e1-after{margin-top:14px;padding-top:12px;border-top:1px dashed var(--line)}#e1-page .e1-ob.t{border-color:#9a7b2f;background:#fbf4e2}#e1-page .e1-ob.t b{color:#7a5a12}#e1-page .e1-ob.m{border-color:var(--who);background:var(--who-bg)}#e1-page .e1-ob.m b{color:var(--who)}
#e1-page .e1-dlg{border:1px solid var(--line);border-radius:10px;padding:8px 12px;background:#fafbfc;font-size:16px;line-height:1.55}#e1-page .e1-dlg p{margin:2px 0}#e1-page .e1-dlg b{display:inline-block;width:20px;color:#5b6575}#e1-page .e1-dlg.box{font-size:15px}#e1-page .e1-dlg .bx{font-weight:700;color:#5b6575;margin-bottom:4px}#e1-page .e1-blank.sm{min-width:64px;text-align:center;font-weight:700}`;
  // S1·S0 그림(시안 v2의 임시 SVG — 내가 남동생이 농구공을 던지는 모습을 보고 있다)
  const SCENE=`<svg class="e1-illus" viewBox="0 0 400 240" role="img" aria-label="학교 운동장에서 남동생이 농구 골대를 향해 공을 던지는 모습을 내가 보고 있는 장면"><defs><linearGradient id="e1sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9f1fb"/><stop offset="1" stop-color="#f7fafd"/></linearGradient></defs><rect x="0" y="0" width="400" height="240" fill="url(#e1sky)"/><rect x="18" y="86" width="120" height="70" fill="#dfe6ee"/><rect x="18" y="80" width="120" height="8" fill="#c9d3de"/><g fill="#f7fafd"><rect x="30" y="98" width="16" height="14"/><rect x="56" y="98" width="16" height="14"/><rect x="82" y="98" width="16" height="14"/><rect x="108" y="98" width="16" height="14"/><rect x="30" y="124" width="16" height="14"/><rect x="56" y="124" width="16" height="14"/><rect x="82" y="124" width="16" height="14"/><rect x="108" y="124" width="16" height="14"/></g><rect x="0" y="156" width="400" height="84" fill="#e8dcc8"/><line x1="0" y1="156" x2="400" y2="156" stroke="#cdbfa6" stroke-width="2"/><path d="M250 232 A70 70 0 0 1 390 232" fill="none" stroke="#cdbfa6" stroke-width="2"/><rect x="346" y="58" width="8" height="140" fill="#596573"/><rect x="300" y="46" width="54" height="40" rx="3" fill="#f4f6f8" stroke="#596573" stroke-width="3"/><rect x="312" y="60" width="26" height="18" fill="none" stroke="#596573" stroke-width="2"/><ellipse cx="303" cy="86" rx="15" ry="4" fill="none" stroke="#C2410C" stroke-width="3"/><g stroke="#9aa5b1" stroke-width="1.5" fill="none"><path d="M289 88 L294 112"/><path d="M296 90 L298 114"/><path d="M303 90 L303 114"/><path d="M310 90 L308 114"/><path d="M317 88 L312 112"/><path d="M294 112 L312 112"/></g><path d="M262 64 Q282 36 298 70" fill="none" stroke="#15803D" stroke-width="2.5" stroke-dasharray="5 5"/><circle cx="265" cy="60" r="10" fill="#e07b2a" stroke="#9a4b12" stroke-width="2"/><path d="M255 60 H275 M265 50 V70 M258 53 Q265 60 258 67 M272 53 Q265 60 272 67" fill="none" stroke="#9a4b12" stroke-width="1.5"/><g stroke="#4a3a2f" stroke-width="6" stroke-linecap="round" fill="none"><path d="M232 92 L252 74 L262 66"/><path d="M222 94 L212 110 L224 118"/><path d="M228 128 L216 150 L224 170"/><path d="M236 128 L252 146 L246 168"/></g><rect x="218" y="88" width="26" height="42" rx="8" fill="#C2410C"/><text x="231" y="116" font-size="11" font-weight="700" fill="#fff" text-anchor="middle" font-family="system-ui, sans-serif">7</text><circle cx="231" cy="74" r="12" fill="#f3c9a4" stroke="#4a3a2f" stroke-width="2"/><path d="M219 70 Q231 58 243 70" fill="#4a3a2f"/><circle cx="96" cy="128" r="14" fill="#4a3a2f"/><rect x="78" y="142" width="36" height="52" rx="9" fill="#2F5496"/><g stroke="#2F5496" stroke-width="7" stroke-linecap="round" fill="none"><path d="M80 150 L68 186"/><path d="M112 150 L124 186"/></g><g stroke="#3b3f46" stroke-width="9" stroke-linecap="round" fill="none"><path d="M86 194 L84 226"/><path d="M106 194 L108 226"/></g><path d="M118 128 Q170 100 212 94" fill="none" stroke="#2F5496" stroke-width="1.5" stroke-dasharray="3 4" opacity=".8"/></svg>`;

  let st=null,sit=null,cur=null,today='',busy=false,preview=false,timer=null,live=null,shared='',held=[],unsaved=false;
  // E2: 둘째 묶음 진도·앉은 자리·전송 표시·미기록 로그(저장 키 KEY2). 풀던 화면(cur)은 하나 — E2 화면이면 cur.track===2이고 E2 키에 저장된다.
  let st2=fresh2(),sit2=null,shared2='',held2=[],w2last='';
  // E4·E5: 진도·앉은 자리·전송 표시·미기록 로그는 각 공장의 H. 풀던 화면(cur)은 여전히 하나 — E4·E5 화면이면 cur.track === 4·5.
  const XB=[E4X,E5X],xOf=t=>t===4?E4X:t===5?E5X:null;
  // 저장 묶음 = {st 진도, sit 앉은 자리, cur 풀던 화면, shared 마지막으로 전송 대기열에 넣은 기록(evidence_at), held 기록하지 못한 결과 로그}
  function load(){
    try{const raw=PA_STORAGE.getItem(KEY);if(!raw)return {st:fresh(),sit:null,cur:null,shared:'',held:[]};const o=JSON.parse(raw);
      if(!o||!o.st||o.st.v!==1)throw Error('bad');
      const s={...fresh(),...o.st},c=o.cur||null;wdFill(s,c);   // 후속 r4: 날짜 칸 없이 넘어온 연습 쓰기 결과(v214 S8a 두 번 오답) — 같은 문항의 열린 날짜로
      return {st:s,sit:o.sit||null,cur:c,shared:typeof o.shared==='string'?o.shared:'',held:Array.isArray(o.held)?o.held:[]};}
    catch(_){throw Error('영어 기록을 읽지 못했어요. 기록을 보존한 채 어른에게 알려 주세요.');}
  }
  function write(o){const v=JSON.stringify(o);return typeof safeSetItem==='function'?safeSetItem(KEY,v)===true:(PA_STORAGE.setItem(KEY,v),true);}
  // 후속 r2(Codex r1 경우 3): v214는 이 기기 첫 답 칸(st2.mine)이 없어, T14를 채점하던 중(마지막 '다음' 전) 업데이트되면 이 기기가 직접 맞힌 문항도 해설만 본 것(seen=1)이 되었다.
  //  풀던 화면(cur)에 남은 직접 제출 근거로 비어 있는 칸만 한 번 채운다(v215에서 낸 답이 이미 있으면 그대로) — 저장된 st2를 받은 기록으로 바꾸기(adopt2) 전에.
  //  ① cur.t(v214는 이 기기에서 틀릴 때만 남김)나 이 기기가 정한 D-fail이면 fail, 이 기기가 정한 D-ok·D-help(cur.own.T14a — 다른 기기 오답 뒤 이 기기 첫 답이 정답)면 ok.
  //  ② 이 기기에서 고른 번호(cur.sel.T14b)의 정오. 근거가 없으면(다른 기기 결과·해설만 봄) 채우지 않는다 → 분모 제외 그대로. 공유 기록에는 싣지 않는다(encode2 그대로).
  function mine14(s,c){if(!c||c.key!=='T14')return;const M={...(s.mine||{})},o=c.own||{};
    if(!M.T14a&&(c.t!==undefined||o.T14a))M.T14a=c.t!==undefined||o.T14a==='D-fail'?'fail':'ok';
    if(!M.T14b&&c.sel&&c.sel.T14b)M.T14b=c.sel.T14b-1===Q14.ans?'ok':'fail';
    if(M.T14a||M.T14b)s.mine=M;}
  function load2(){
    try{const raw=PA_STORAGE.getItem(KEY2);if(!raw)return {st:fresh2(),sit:null,cur:null,shared:'',held:[]};const o=JSON.parse(raw);
      if(!o||!o.st||o.st.v!==1)throw Error('bad');
      const s={...fresh2(),...o.st},c=o.cur||null;mine14(s,c);wdFill(s,c);   // 후속 r2: v214에서 T14를 채점하던 중 업데이트된 기기 · r4: 날짜 칸 없이 넘어온 T8 쓰기 결과
      return {st:s,sit:o.sit||null,cur:c,shared:typeof o.shared==='string'?o.shared:'',held:Array.isArray(o.held)?o.held:[]};}
    catch(_){throw Error('영어 기록을 읽지 못했어요. 기록을 보존한 채 어른에게 알려 주세요.');}
  }
  function w2raw(v){return typeof safeSetItem==='function'?safeSetItem(KEY2,v)===true:(PA_STORAGE.setItem(KEY2,v),true);}
  function write2(o){return w2raw(JSON.stringify(o));}
  const bundle2=()=>({st:st2,sit:sit2,cur:cur&&cur.track===2?cur:null,shared:shared2,held:held2});
  // r4: 저장 결과를 늘 '저장 안 됨'(unsaved)에 반영한다(호출마다 따로 처리하지 않게). 성공하면 메모리 전체가 저장된 것.
  // E2(Codex 착수 의견 3): 두 키는 한 번에 쓰이지 않는다 → 풀던 화면이 없는 쪽(닫는 쪽)을 먼저, 풀던 화면이 있는 쪽을 나중에 쓰고, 앞이 실패하면 뒤는 쓰지 않는다.
  //  풀던 화면과 그 묶음의 첫 시도 결과는 같은 키에 함께 쓰이므로(한 번의 setItem) 둘째 저장이 실패한 채 앱이 닫혀도 화면 정보와 채점 기록이 어긋나지 않는다.
  //  E2 키는 바뀐 때만 쓴다(E2가 열리기 전에는 E1 키 한 번 — r3와 같음).
  function save(){if(preview)return true;let ok=false;try{
    const j2=JSON.stringify(bundle2()),e2=()=>{if(j2===w2last)return true;const r=w2raw(j2);if(r)w2last=j2;return r;};
    // E4·E5 키는 바뀐 때만 쓴다(E4가 열리기 전에는 쓰지 않음). 풀던 화면이 있는 키를 맨 나중에(E2 착수 의견 3과 같은 이유).
    const jx=XB.map(X=>{const j=JSON.stringify(X.bundle(cur));return ()=>{if(j===X.H.wlast)return true;const r=X.wraw(j);if(r)X.H.wlast=j;return r;};});
    const xc=cur?XB.findIndex(X=>X.TR===cur.track):-1,xw=()=>jx.every((g,i)=>i===xc||g());
    const b1={st,sit,cur:cur&&cur.track?null:cur,shared,held};
    ok=cur&&cur.track===2?(xw()&&write(b1)&&e2()):xc>=0?(e2()&&write(b1)&&xw()&&jx[xc]()):(xw()&&e2()&&write(b1));}catch(_){ok=false;}unsaved=!ok;return ok;}
  function stampOn(s){s.evidence_at=new Date().toISOString();s.event_id=(typeof PA_CURRICULUM!=='undefined'?PA_CURRICULUM:'pa')+':english:e1:'+(crypto.randomUUID?crypto.randomUUID():Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join(''));}
  function stamp(){stampOn(st);}
  function stampOn2(s){s.evidence_at=new Date().toISOString();s.event_id=(typeof PA_CURRICULUM!=='undefined'?PA_CURRICULUM:'pa')+':english:e2:'+(crypto.randomUUID?crypto.randomUUID():Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join(''));}
  function stamp2(){stampOn2(st2);}
  // 전송: 마지막으로 대기열에 넣은 기록(shared)과 지금 기록이 다르면 넣는다. 넣지 못하면 shared를 그대로 둬서 다음 기회(앱 열기·홈·다시 보일 때)에 다시 넣는다.
  const shareKey=s=>s.evidence_at+'|'+s.event_id;
  function shareState(s,sh){
    if(!s||!s.evidence_at||shareKey(s)===sh||!s.days.length)return sh;
    try{if(PA_PROGRESS.enqueueEnglishFinal&&PA_PROGRESS.enqueueEnglishFinal(encode(s))===true)return shareKey(s);}catch(e){console.warn('[e1-progress]',e&&e.message);}
    return sh;
  }
  function shareState2(s,sh){
    if(!s||!s.evidence_at||shareKey(s)===sh||!s.days.length)return sh;
    try{if(PA_PROGRESS.enqueueEnglishFinalE2&&PA_PROGRESS.enqueueEnglishFinalE2(encode2(s))===true)return shareKey(s);}catch(e){console.warn('[e2-progress]',e&&e.message);}
    return sh;
  }
  function readRemote2(){try{const c=PA_PROGRESS.englishFinalRemoteE2?.();return c?decode2(c):null;}catch(_){return null;}}
  // 전송 시점: 첫 시도 결과 기록(fixNow)·앉은 자리 닫기(나가기·끝·날짜 바뀜)·화면 숨김·시작·resend. 화면마다 보내지는 않는다(대기열이 화면 수만큼 늘지 않게).
  function share(){if(preview)return;const n=shareState(st,shared),n2=shareState2(st2,shared2);let cx=false;for(const X of XB){const nx=X.shareState(X.H.st,X.H.shared);if(nx!==X.H.shared){X.H.shared=nx;cx=true;}}if(n!==shared||n2!==shared2||cx){shared=n;shared2=n2;save();}}
  // 첫 시도 결과는 그 자리에서 기록·저장·전송 대기열에(맞음·틀림 모두).
  function fixNow(k,v){rollDay();fix(st,k,v);stamp();const ok=save();if(ok)share();return ok;}
  // 저장 안 됨이면 다시 저장해 본다(성공하면 전송도). 화면 전환 버튼마다 먼저 부른다.
  function persisted(){if(!unsaved)return true;if(save()){unsaved=false;share();return true;}return false;}
  // r5 관문: 저장 확인 → (멈춤 안내 지우기) → 날짜 배정 → 할 일. 아래 큰 버튼·S9 ③ 보기·S4 고르기·P0 '모르겠어요'가 함께 쓴다.
  function gate(fn,body){
    body=body||document.querySelector('#e1-page .e1-body');
    if(!persisted())return body?hold(body):undefined;
    const h=body&&body.querySelector('.e1-hold');if(h)h.remove();
    syncDay(fn);
  }
  // r5 하위 화면 전환(S9 ①→②→③, S8 배열→쓰기): 바꾼 뒤 저장 → 실패면 되돌리고 그 화면 그대로 멈춤(다시 누르면 다시 저장).
  // 후속 r4(Codex r3 검토 · JH 2026-11-25): 연습 쓰기(S8a·T8·U8·V8) 결과가 정해질 때 그 화면을 연 날(열린 문항 날짜 — 없으면 오늘)을 결과와 함께 화면 상세에 남긴다(cur.wd).
  //  다른 기기가 먼저 마친 기록을 받아 이 기기 결과를 남길 때(마감 행 날짜·id) 이 날짜를 쓴다. r3는 열린 날짜를 써서, 다음 날 다른 기기의 중간 기록을 받거나
  //  화면을 다시 열면 열린 날짜가 그날로 바뀌어 전날 낸 결과가 다음 날 행으로 남았다.
  function wDay(S){return cur&&S&&S.open&&S.open.key===cur.key&&S.open.date||today;}
  //  날짜 칸 없이 넘어온 결과(v214 — E1·E2 두 번 오답 정답 공개 cur.w2>=2 · E4·E5 cur.wres)는 읽을 때 저장된 열린 문항이 같은 문항이면 그 날짜로 채운다
  //  (받은 기록과 합치거나 화면을 다시 열어 열린 날짜가 바뀌기 전 — 이 기기가 그 화면을 연 날).
  function wdFill(s,c){if(c&&c.phase==='write'&&!c.wd&&(c.wres||c.w2>=2)&&s&&s.open&&s.open.key===c.key&&s.open.date)c.wd=s.open.date;}
  function subStep(set,go){
    const ks=Object.keys(set),old={};for(const k of ks){old[k]=cur[k];cur[k]=set[k];}
    if(!save()){for(const k of ks){if(old[k]===undefined)delete cur[k];else cur[k]=old[k];}return holdHere();}
    go();
  }
  // 시간: E1 화면이 보이는 동안만 잰다(문서 숨김·다른 화면이면 멈춤).
  const now=()=>typeof performance!=='undefined'?performance.now():Date.now();
  function tStart(){if(!timer)timer={ms:0,at:null};if(timer.at===null&&!document.hidden)timer.at=now();}
  function tTake(){if(!timer)return 0;let ms=timer.ms+(timer.at===null?0:now()-timer.at);timer.ms=0;timer.at=timer.at===null?null:now();return ms/1000;}
  // 쓴 시간을 오늘 기록에 더한다(E2 화면이면 E2 진도·앉은 자리에). 1초 이상이면 '최근 기록' 표시도 바꿔 다른 기기에 전해지게 한다.
  function flushTime(){const s=tTake();if(s>0){if(cur&&cur.track===2){st2=addSec(st2,today,s);const z=s2();z.sec=(z.sec||0)+s;if(s>=1)stamp2();}else if(cur&&xOf(cur.track)){const X=xOf(cur.track);X.H.st=addSec(X.H.st,today,s);const z=X.sitOf();z.sec=(z.sec||0)+s;if(s>=1)X.stamp();}else{st=addSec(st,today,s);if(sit)sit.sec=(sit.sec||0)+s;if(s>=1)stamp();}}}
  function newSit(){return {id:'e1-'+new Date().toISOString().replace(/[^0-9TZ]/g,''),date:today,items:[],sec:0};}
  function newSit2(){return {id:'e2-'+new Date().toISOString().replace(/[^0-9TZ]/g,''),date:today,items:[],sec:0};}
  function s2(){if(!sit2)sit2=newSit2();return sit2;}
  // 실제 날짜 확인: 화면을 연 채 날짜(서울)가 바뀌었으면 전날 앉은 자리를 닫고 새 날짜로 이어 간다(결과는 실제 날짜로 기록).
  // r6: 저장 실패면 날짜를 넘기지 않고 false(부르는 쪽이 멈춤). 날짜가 그대로거나 넘겼으면 true.
  function rollDay(){
    if(!live)return true;const d=PA_PROGRESS.day();if(!today||d===today)return true;
    // r4: 열린 문항(open)의 날짜는 여기서 바꾸지 않는다 — 그날 배정(syncDay)이 정해진 뒤에만 기록.
    flushTime();
    if(!closeSitting('dayroll'))return false;
    const was=today;today=d;sit=newSit();if(cur&&cur.track===2)sit2=newSit2();const xr=cur&&xOf(cur.track);if(xr)xr.H.sit=xr.newSit();
    if(!save()){today=was;sit=null;sit2=null;for(const X of XB)X.H.sit=null;return false;}
    return true;
  }
  if(typeof document!=='undefined'){
    document.addEventListener('visibilitychange',()=>{
      if(timer&&live){
        if(document.hidden){if(timer.at!==null){timer.ms+=now()-timer.at;timer.at=null;}flushTime();if(save())share();try{PA_PROGRESS.sync();}catch(_){}}
        else{   // r6 지적 4: 저장 확인이 먼저 — 실패면 멈춤만(날짜 넘기기·마감·전송 없음). 저장되면 날짜 배정.
          if(timer&&live&&timer.at===null)timer.at=now();
          if(live&&!persisted())return holdHere();
          syncDay(null);
        }
      }else if(!document.hidden)resend();
    });
    if(typeof window!=='undefined'){window.addEventListener('pageshow',()=>resend());window.addEventListener('online',()=>resend());}
    setTimeout(()=>resend(),0);
  }
  function page(){
    let p=document.getElementById('e1-page');
    if(!p){p=document.createElement('div');p.id='e1-page';p.className='page';document.getElementById('home-page').parentNode.appendChild(p);
      const css=document.createElement('style');css.textContent=CSS;document.head.appendChild(css);}
    return p;
  }
  function frame(title,count){
    const p=page();p.innerHTML=`<div class="e1"><div class="e1-body"><span class="e1-count">${esc(count||'')}</span></div><div class="e1-foot"><button class="e1-main" type="button"></button><button class="e1-home" type="button">홈으로</button></div></div>`;
    document.querySelector('.header-title').textContent='영어 · '+title;
    p.querySelector('.e1-home').onclick=()=>exit();
    const body=p.querySelector('.e1-body'),btn=p.querySelector('.e1-main');
    return {body,add(html){body.insertAdjacentHTML('beforeend',html);return body.lastElementChild;},
      main(label,on,fn){btn.textContent=label;btn.disabled=!on;btn.onclick=fn?(()=>{if(btn.disabled)return;gate(fn,body);}):null;},enable(on){btn.disabled=!on;}};
  }
  // 저장되기 전에는 다음으로 넘어가지 않는다(같은 버튼을 다시 누르면 다시 저장해 본다).
  function hold(body){
    if(body.querySelector('.e1-blocked'))return;   // 이미 '저장 확인' 화면
    let n=body.querySelector('.e1-hold');
    if(!n){n=document.createElement('p');n.className='e1-note e1-hold';body.prepend(n);}
    n.textContent='기록을 저장하지 못해서 여기서 멈춰 있어요. 저장 공간을 비운 뒤 다시 눌러 주세요. 잘 안 되면 어른에게 알려 주세요.';
  }
  function holdHere(){const b=document.querySelector('#e1-page .e1-body');if(b)hold(b);}
  function note(f,el,text,kind,html){if(!el){el=f.add('<p class="e1-note"></p>');}el.className='e1-note'+(kind?' '+kind:'');el.hidden=false;if(html)el.innerHTML=html;else el.textContent=text;return el;}
  const verbQ=s=>/heard/.test(s.en[1])?'들었나요':'봤나요';
  const helpTexts=s=>s.h2?[`누가 ${s.h2}? '${s.ko4[0]}'부터 찾아봐요.`,`다음은 '${s.ko4[1]}'(${s.en[1]}). 그다음 그 일을 할 사람, 그다음 to + 할 일.`]:[`누가 ${verbQ(s)}? '${s.ko4[0]}'부터 찾아봐요.`,`다음은 '${s.ko4[1]}'(${s.en[1]}). 그다음 누구를, 그다음 뭐 하는 걸.`];
  // 덩어리(또는 단어) 배열. opts: chunks, mix, roles, colored, meanings, words, ask, onCheck(correct,order), onAsk
  function arrange(f,o){
    const ans=o.chunks,n=ans.length;let placed=[],follow=false,colored=!!o.colored,meanings=!!o.meanings,locked=false;
    const area=f.add(`<div class="e1-area${o.words?' words':''}"></div>`),tiles=f.add('<div class="e1-tiles"></div>');
    const askBtn=o.ask?f.add('<button type="button" class="e1-ask">모르겠어요</button>'):null;
    const fb=f.add('<p class="e1-note" hidden></p>');
    const cls=i=>colored&&o.roles?' c-'+o.roles[i]:'';
    function finishFollow(){
      locked=true;
      draw();
      if(o.onFollowed)o.onFollowed();
    }
    function draw(){
      area.innerHTML=placed.map((i,k)=>`<button type="button" class="e1-tile picked${cls(i)}" data-k="${k}">${esc(ans[i])}</button>`).join('');
      tiles.innerHTML=o.mix.map(i=>`<button type="button" class="e1-tile${cls(i)}" data-i="${i}" ${placed.includes(i)||locked||(follow&&i!==placed.length)?'disabled':''}>${esc(ans[i])}${meanings&&o.meanings?`<small>${esc(o.meanings[i])}</small>`:''}</button>`).join('');
      area.querySelectorAll('button').forEach(b=>b.onclick=()=>{if(locked||follow)return;placed.splice(+b.dataset.k,1);draw();});
      tiles.querySelectorAll('button').forEach(b=>b.onclick=()=>{
        const i=+b.dataset.i;
        if(locked||placed.includes(i))return;
        if(follow&&i!==placed.length)return;
        placed.push(i);
        draw();
        if(follow&&placed.length===n&&o.advanceOnLastFollowTile)gate(finishFollow,f.body);
      });
      if(follow){
        const complete=placed.length===n;
        // S9 B에서 자동 전환을 저장하지 못했으면 같은 화면의 버튼으로 다시 시도한다.
        f.main(complete&&o.advanceOnLastFollowTile?'다시 저장':'다음',complete,finishFollow);
      }
      else f.main('확인',placed.length===n&&!locked,()=>{const ok=placed.every((v,k)=>v===k);o.onCheck(ok,placed.slice());});
    }
    if(askBtn)askBtn.onclick=()=>{if(!locked&&!follow)gate(()=>{if(!locked&&!follow)o.onAsk&&o.onAsk();},f.body);};   // r5: P0 '모르겠어요'도 관문
    draw();
    return {reset(){placed=[];draw();},unlock(){locked=false;draw();},solved(){placed=ans.map((_,i)=>i);follow=false;locked=true;draw();},color(on){colored=on;draw();},mean(on){meanings=on;draw();},lock(){locked=true;if(askBtn)askBtn.hidden=true;draw();},
      follow(text){follow=true;locked=false;placed=[];if(askBtn)askBtn.hidden=true;note(f,fb,'',null,`${esc(text||'순서는 이래요.')}<div class="e1-path">${ans.map(a=>`<span>${esc(a)}</span>`).join('<span>→</span>')}</div>`);draw();},
      note(text,kind,html){return note(f,fb,text,kind,html);},hideAsk(){if(askBtn)askBtn.hidden=true;}};
  }
  // ── 화면별 ──
  const R={};
  // P0: 첫 시도 → (오답·모르겠어요마다) 단어 뜻(섞인 자리 그대로) → 순서 힌트 → 정답 따라 놓기. 오답으로 세지 않음·점수 표시 없음.
  R.probe=(s,done)=>{
    const d=S.dad,f=frame(s.title,'시작');let stage=cur.stage||0;
    f.add('<p class="e1-lead">먼저 한 문장만 맞춰 볼까요? 틀려도 괜찮아요. 오늘 어디서 시작할지 정하는 거예요.</p>');
    f.add(`<p class="e1-ko">${esc(d.ko)}</p>`);
    let a;
    const finish=probe=>{a.lock();a.note('맞아요! 이제 시작해요.','ok');f.main('다음',true,()=>done({probe,stage}));};
    const step=()=>{stage++;cur.stage=stage;save();a.reset();
      if(stage===1){a.mean(true);a.note('단어 뜻을 열어 둘게요. 다시 놓아 봐요.');}
      else if(stage===2){a.note('',null,`이 순서로 놓아 봐요.<div class="e1-path"><span>누가</span><span>→</span><span>들었어요</span><span>→</span><span>누구를</span><span>→</span><span>무엇을 하고 있던 걸</span></div>`);}
      else{a.follow('정답은 이 순서예요. 눌러서 따라 놓아 봐요.');}};
    a=arrange(f,{chunks:d.en,mix:d.mix,meanings:d.mean,ask:true,onAsk:step,
      onCheck:ok=>{if(ok)finish(stage===0?3:stage===1?1:2);else step();},onFollowed:()=>done({probe:2,stage})});
    if(stage>=1)a.mean(true);if(stage===2)a.note('',null,`이 순서로 놓아 봐요.<div class="e1-path"><span>누가</span><span>→</span><span>들었어요</span><span>→</span><span>누구를</span><span>→</span><span>무엇을 하고 있던 걸</span></div>`);if(stage>=3)a.follow('정답은 이 순서예요. 눌러서 따라 놓아 봐요.');
  };
  R.words=(s,done)=>{
    const f=frame(s.title,'');const W=[['brother','남자 형제 · 이 문장에서는 남동생'],['basketball','농구'],['playing','하고 있는'],['saw','봤어요']],open=new Set();
    f.add(SCENE);f.add('<p class="e1-lead">그림에 있는 것들이에요. 탭해서 뜻을 보세요.</p>');
    const t=f.add('<div class="e1-tiles"></div>');
    const draw=()=>{t.innerHTML=W.map(([e,k],i)=>`<button type="button" class="e1-tile" data-i="${i}">${esc(e)}${open.has(i)?`<small>${esc(k)}</small>`:''}</button>`).join('');
      t.querySelectorAll('button').forEach(b=>b.onclick=()=>{open.add(+b.dataset.i);draw();});f.main('다음',open.size===W.length,()=>done({}));};
    draw();
  };
  R.scene=(s,done)=>{const f=frame(s.title,'');f.add(SCENE);f.add('<p class="e1-cap">지난 금요일, 학교 끝나고. 남동생이 농구하는 걸 봤어요.</p>');f.main('다음',true,()=>done({}));};
  R.pair=(s,done)=>{
    const f=frame(s.title,'');f.add('<p class="e1-lead">먼저 둘만 붙여 봐요. 누가, 뭘 하고 있죠?</p>');
    const t=f.add('<div class="e1-tiles"><button type="button" class="e1-tile c-whom" data-i="0">my brother</button><button type="button" class="e1-tile c-doing" data-i="1">playing basketball</button></div>');
    const hit=new Set(),out=f.add('<p class="e1-note info" hidden>남동생이 — 농구하는</p>');
    t.querySelectorAll('button').forEach(b=>b.onclick=()=>{hit.add(b.dataset.i);b.classList.add('lit');if(hit.size===2){out.hidden=false;f.main('다음',true,()=>done({}));}});
    f.main('다음',false);
  };
  // 문장·뜻 연결: 영어 덩어리를 탭하면 같은 색 우리말이 켜진다. 다 탭하면 안내 한 줄.
  function linkScreen(s,sent,title,lead,done){
    const f=frame(title,''),hit=new Set();
    f.add(`<p class="e1-lead">${lead}</p>`);
    const en=f.add('<div class="e1-tiles"></div>'),ko=f.add('<div class="e1-tiles"></div>');
    const msg=f.add('<p class="e1-note info" hidden></p>');
    const draw=()=>{en.innerHTML=sent.en.map((w,i)=>`<button type="button" class="e1-tile c-${ROLE[i]}${hit.has(i)?' lit':''}" data-i="${i}">${esc(w)}</button>`).join('');
      ko.innerHTML=sent.ko4.map((w,i)=>`<span class="e1-tile${hit.has(i)?' c-'+ROLE[i]+' lit':''}" style="cursor:default">${esc(w)}</span>`).join('');
      en.querySelectorAll('button').forEach(b=>b.onclick=()=>{hit.add(+b.dataset.i);draw();});
      if(hit.size===4){msg.hidden=false;msg.textContent=sent.linkMsg||`영어는 '${sent.ko4[1]}'가 둘째에 와요. 그다음 '누구를', 그다음 '뭐 하는 걸'.`;}
      f.main('다음',hit.size===4,()=>done());};
    draw();
  }
  // 덩어리 이동 시연: 위 = 우리말 순서, 탭할 때마다 영어 순서대로 한 덩어리씩 아래로.
  function demoScreen(sent,title,done){
    const f=frame(title,'');let k=0;const koOrder=[0,2,3,1];
    f.add('<p class="e1-lead">탭할 때마다 하나씩 옮겨요. 어떤 게 먼저 가는지 보세요.</p>');
    const top=f.add('<div class="e1-tiles"></div>'),slots=f.add('<div class="e1-slots"></div>'),cap=f.add('<p class="e1-note info" hidden></p>');
    const draw=()=>{top.innerHTML=koOrder.map(i=>`<span class="e1-tile c-${ROLE[i]}" style="cursor:default;${i<k?'opacity:.3':''}">${esc(sent.ko4[i])}</span>`).join('');
      slots.innerHTML=[0,1,2,3].map(i=>`<div class="e1-slot" style="${i<k?`color:var(--${ROLE[i]});border-style:solid;border-color:var(--${ROLE[i]})`:''}">${i<k?esc(sent.en[i]):''}</div>`).join('');
      if(k===2){cap.hidden=false;cap.textContent=`'${sent.ko4[1]}'가 앞으로 나와요.`;}
      if(k===4){cap.hidden=false;cap.textContent=sent.to?'할 일 앞에는 to를 붙여요. '+sent.to+'.'+(sent.toPlus?' '+sent.toPlus:''):'하고 있던 행동은 -ing예요. '+sent.ing+'.';}
      if(k<4)f.main('옮기기',true,()=>{k++;draw();});else f.main('다음',true,()=>done());};
    draw();
  }
  R.link=(s,done)=>linkScreen(s,S[s.sent],s.title,'덩어리를 탭하면 뜻이 같이 켜져요.',()=>done({}));
  R.demo=(s,done)=>demoScreen(S[s.sent],s.title,()=>done({}));
  // S4 한 덩어리만 놓기
  R.blank=(s,done)=>{
    const f=frame(s.title,'');let w=cur.w||0;const opts=['my brother','playing basketball','saw'];
    f.add(`<p class="e1-ko">${esc(S.base.ko)}</p>`);
    const sent=f.add('<p class="e1-sent">I saw <span class="e1-blank">&nbsp;</span> playing basketball.</p>');
    f.add('<p class="e1-lead" style="text-align:center">빈칸에 들어갈 덩어리 하나만 골라요.</p>');
    const t=f.add('<div class="e1-tiles"></div>'),fb=f.add('<p class="e1-note" hidden></p>');
    const draw=()=>{t.innerHTML=opts.map((o,i)=>`<button type="button" class="e1-tile" data-i="${i}" ${w>=2&&i!==0?'disabled':''}>${esc(o)}</button>`).join('');
      t.querySelectorAll('button').forEach(b=>b.onclick=()=>gate(()=>pick(+b.dataset.i),f.body));};   // r5: 고르기도 관문
    const pick=i=>{
      if(i===0){sent.querySelector('.e1-blank').textContent='my brother';t.innerHTML='';note(f,fb,"맞아요. saw 다음은 '누구를'이에요.",'ok');f.main('다음',true,()=>done({memo:w===0?'solo':'help'+Math.min(w,2)}));return;}
      w++;cur.w=w;save();
      if(w>=2)note(f,fb,'my brother예요. 눌러서 놓아 봐요.');
      else note(f,fb,i===1?"saw 바로 다음은 '누구를'이에요. 남동생을 봤죠? 남동생은 영어로 뭐죠?":"'봤어요(saw)'는 벌써 있어요. 누구를 봤는지 찾아요.");
      draw();};
    draw();f.main('다음',false);
    if(w>=2)note(f,fb,'my brother예요. 눌러서 놓아 봐요.');
  };
  // 도움 있는 배열(S5 규칙): 오답 1 → 첫 덩어리 안내+색, 2 → 둘째 안내, 3 → 정답 따라 놓기. 반환 code ok(도움 0)/help/fail.
  function helpedArrange(f,sent,o,finish){
    let w=o.w||0;const tips=helpTexts(sent);
    const a=arrange(f,{chunks:sent.en,mix:sent.mix,roles:ROLE,colored:w>0||o.colored,
      onCheck:ok=>{
        if(ok){a.lock();o.onRight&&o.onRight(w);a.note(w===0&&o.soloText?o.soloText:'맞아요.','ok');f.main('다음',true,()=>finish(w===0?'ok':'help',w));return;}
        w++;o.onWrong&&o.onWrong(w);
        if(w>=3){o.onFail&&o.onFail();a.color(true);a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');return;}
        a.reset();a.color(true);a.note(tips[w-1]);},
      onFollowed:()=>{a.note(o.failText||'괜찮아요. 다음에 다시 혼자 해 봐요.','info');f.main('다음',true,()=>finish('fail',w));}});
    if(w>=3){a.color(true);a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');}else if(w>0)a.note(tips[Math.min(w,2)-1]);
    return a;
  }
  // 도움 없는 한 번(B·C 첫 시도): 맞으면 ok, 틀리면 그 자리에서 결과를 고정하고 onWrong으로 넘긴다.
  function onceArrange(f,sent,o){
    const a=arrange(f,{chunks:sent.en,mix:sent.mix,onFollowed:o.onFollowed,onCheck:ok=>{a.lock();if(ok){o.onRight&&o.onRight();a.note(o.okText,'ok');f.main('다음',true,()=>o.onOk());}else o.onWrong(a);}});
    return a;
  }
  // 이미 기록된 결과: 맞힌 뒤 '다음'을 누르기 전에 나갔거나 다른 기기에서 마친 화면 — 다시 풀게 하지 않고 정답만 보여 준다.
  function recorded(title,text,answer,onNext){
    const f=frame(title,'1/1');f.add(`<p class="e1-note ok">${esc(text)}</p>`);
    f.add(`<div class="e1-path">${answer.map(a=>`<span>${esc(a)}</span>`).join('<span>→</span>')}</div>`);
    f.main('다음',true,onNext);
  }
  R.arrange=(s,done)=>{
    const sent=S[s.sent];
    if(s.layer==='A'){
      const v=st.res[s.id];
      if(v&&!(cur.w>=3&&v==='A-fail'))return recorded(s.title,v==='A-fail'?'지난번에 순서를 같이 살펴본 문장이에요. 다음에 다시 혼자 해 봐요.':'이 문장은 이미 놓았어요.',sent.en,()=>done({code:v.slice(2),w:cur.w||0}));
      const f=frame(s.title,'');f.add('<p class="e1-lead">이번엔 혼자 순서대로 놓아요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      helpedArrange(f,sent,{w:cur.w||(st.res[s.id+'w']?1:0),soloText:'맞아요. 오늘 혼자 놓았어요.',failText:'오늘은 여기까지. 다음에 다시 혼자 해 봐요.',
        onWrong:w=>{cur.w=w;if(!st.res[s.id+'w'])fixNow(s.id+'w','A-wrong');save();},
        onRight:w=>fixNow(s.id,w>0||st.res[s.id+'w']?'A-help':'A-ok'),onFail:()=>fixNow(s.id,'A-fail')},(code,w)=>done({code,w}));
      return;
    }
    // C 배열: 우리말만, 첫 시도. 틀리면 결과 고정(C 실패) → 그 자리에서 뜻 연결 → 시연 → 도움 있는 배열(연습).
    const remedial=()=>linkScreen(s,sent,s.title,'괜찮아요. 이 문장을 같이 살펴봐요. 덩어리를 탭하면 뜻이 켜져요.',()=>demoScreen(sent,s.title,()=>{
      const f=frame(s.title,'');f.add('<p class="e1-lead">이제 다시 놓아 봐요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      helpedArrange(f,sent,{w:0,colored:true},()=>done({code:'fail'}));}));
    if(st.res[s.id]==='C-fail'){remedial();return;}
    if(st.res[s.id]==='C-ok')return recorded(s.title,'이 문장은 처음 볼 때 혼자 놓았어요.',sent.en,()=>done({code:'ok'}));
    if(/^p-(ok|help|fail)$/.test(st.res[s.id]||''))return recorded('본 적 있는 문장','이 문장은 전에 연습했어요.',sent.en,()=>done({code:st.res[s.id].slice(2)}));   // r6: 이미 연습 결과(다른 기기)
    // r4: 전에 열었다가 제출 없이 넘어간 문장(노출됨·미채점) — 처음 보는 문장이 아니므로 연습(도움 있는 배열)으로.
    if(seenOnly(st,s.id)){
      const f=frame('본 적 있는 문장','');f.add('<p class="e1-lead">전에 한 번 본 문장이에요. 순서대로 놓아 봐요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      helpedArrange(f,sent,{w:cur.w||0,onWrong:w=>{cur.w=w;save();}},(code,w)=>done({code,w}));
      return;
    }
    const f=frame(s.title,'1/1');f.add('<p class="e1-lead">처음 보는 문장이에요. <b>우리말만 보고</b> 놓아 보세요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
    onceArrange(f,sent,{okText:'맞아요! 처음 보는 문장도 혼자 놓았어요.',onOk:()=>done({code:'ok'}),onRight:()=>fixNow(s.id,'C-ok'),
      onWrong:a=>{fixNow(s.id,'C-fail');a.note('괜찮아요. 이 문장을 같이 살펴봐요.','info');f.main('다음',true,remedial);}});
  };
  // S6: S5와 같은 화면, 도움 문구 없이 한 번. 틀리면 결과 고정(B 실패) → 정답 따라 놓기 → 시연 다시 보기 → 도움 있는 배열(연습).
  R.check=(s,done)=>{
    const sent=S[s.sent];
    const remedial=()=>demoScreen(sent,s.title,()=>{const f=frame(s.title,'');f.add('<p class="e1-lead">이제 다시 놓아 봐요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      helpedArrange(f,sent,{w:0,colored:true},()=>done({code:'fail'}));});
    if(st.res[s.id]==='B-fail'){remedial();return;}
    if(st.res[s.id]==='B-ok')return recorded(s.title,'이 문장은 다른 날에도 혼자 놓았어요.',sent.en,()=>done({code:'ok'}));
    const f=frame(s.title,'');f.add('<p class="e1-lead">이번엔 혼자 순서대로 놓아요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
    onceArrange(f,sent,{okText:'맞아요. 다른 날에도 혼자 놓았어요.',onOk:()=>done({code:'ok'}),onFollowed:remedial,onRight:()=>fixNow(s.id,'B-ok'),
      onWrong:a=>{fixNow(s.id,'B-fail');a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');}});
  };
  // 연습 문장(기록은 연습): 뜻 연결 → 시연 → 도움 있는 배열. tom은 배열 → 쓰기 연습(덩어리 힌트).
  R.practice=(s,done)=>{
    const sent=S[s.sent],heard=/heard/.test(sent.en[1]);
    const arr=()=>{const f=frame(s.title,'');f.add('<p class="e1-lead">순서대로 놓아 봐요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      helpedArrange(f,sent,{w:cur.w||0,onWrong:w=>{cur.w=w;save();}},(code,w)=>{if(!s.write)return done({code,w});subStep({phase:'write',code,w2:0},()=>writePractice(code,w));});};   // r5: 쓰기로 넘어가는 저장 확인
    // 후속 r1(v215, JH 2026-11-25 — E4·E5 r2 필수 3과 같은 방식): 쓰기 결과(맞음 ok · 도움 뒤 맞음 help · 정답 공개 fail)와 입력(cur.wtx)을 저장한 뒤 안내(저장이 안 되면 그 자리에서 멈춤 — subStep).
    //  v214까지는 결과를 '다음' 버튼에만 두어, 채점 직후 홈·앱 재실행 뒤 빈 입력칸·'제출'로 돌아가 쓰기 결과가 바뀔 수 있었다(fail → help, ok → fail).
    //  다시 열면 같은 입력·안내·잠긴 칸·'다음'(결과는 처음 정해진 그대로, 결과 로그의 쓰기 칸은 '다음' 한 번에 한 번). 첫 오답 뒤면 그 입력·안내·'다시 제출'.
    const writePractice=(code,w)=>{
      const f=frame(s.title,'');let w2=cur.w2||0;
      f.add('<p class="e1-lead">이번엔 같은 문장을 직접 써 봐요. 덩어리를 보고 순서대로 쓰면 돼요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      f.add(`<div class="e1-given">${sent.mix.map(i=>`<span>${esc(sent.en[i])}</span>`).join('')}</div>`);
      const ta=f.add('<textarea class="e1-write" placeholder="여기에 영어 문장을 써요" autocapitalize="sentences" autocomplete="off" spellcheck="false"></textarea>'),fb=f.add('<p class="e1-note" hidden></p>');
      const shut=res=>{if(!ta.value)ta.value=cur.wtx||'';ta.readOnly=true;
        if(res==='fail')note(f,fb,'정답은 이래요: '+sent.en.join(' ')+'.','info');else{ta.classList.add('ok');note(f,fb,'맞아요.','ok');}
        f.main('다음',true,()=>done({code,w,write:res}));};
      const again=()=>{ta.readOnly=false;note(f,fb,`덩어리 순서대로 써 봐요: 누가 → ${sent.ko4[1]} → 누구를 → 뭐 하는 걸.`);f.main('다시 제출',!!ta.value.trim(),submit);};
      const submit=()=>{const v=ta.value.slice(0,200);
        if(gradeWrite(sent.accept,ta.value))return subStep({wres:w2===0?'ok':'help',wtx:v,wd:wDay(st)},()=>shut(cur.wres));   // 후속 r4: 결과와 그 화면을 연 날을 함께
        const n=w2+1;subStep(n>=2?{w2:n,wres:'fail',wtx:v,wd:wDay(st)}:{w2:n,wtx:v},()=>{w2=n;if(n>=2)shut('fail');else again();});};
      ta.oninput=()=>f.enable(!!ta.value.trim()&&!ta.readOnly);f.main('제출',false,submit);
      // 후속 r2(Codex r1 경우 2): v214는 쓰기 결과를 저장하지 않고 오답 수(cur.w2)만 남겼다 — 두 번 틀려 정답을 본 채(w2>=2) 업데이트되면 정답 공개로 복원
      //  (쓰기 결과 fail · 입력 문구는 v214가 남기지 않아 빈 칸). 첫 오답 한 번(w2=1)이면 다시 제출.
      const wr0=cur.wres||(w2>=2?'fail':'');
      if(wr0)shut(wr0);else if(w2>0){ta.value=cur.wtx||'';again();}
    };
    if(cur.phase==='write')return writePractice(cur.code||'ok',cur.w||0);
    if(s.write)return arr();
    linkScreen(s,sent,s.title,(heard?"이번엔 '들었어요'. 자리는 똑같아요 — 누가, 들었어요, 누구를, 뭐 하는 걸. ":'')+'덩어리를 탭하면 뜻이 같이 켜져요.',()=>demoScreen(sent,s.title,arr));
  };
  // S8W: C층 쓰기 — 다른 날 그날의 첫 문항, 보기 없이. 첫 제출이 맞아야 C ✔. 오답 안내 2단계, 3번째에 정답.
  function writeScreen(title,count,lead,once,onDone,onRight){
    const c=S.cats,f=frame(title,count);let w=cur.w||0;
    f.add(`<p class="e1-lead">${lead}</p>`);f.add(`<p class="e1-ko">${esc(c.ko)}</p>`);
    f.add('<p class="e1-lead" style="font-size:14px;color:#5b6575;margin-bottom:-8px">주어진 말</p>');
    f.add(`<div class="e1-given">${c.given.map(g=>`<span>${esc(g)}</span>`).join('')}</div>`);
    const ta=f.add('<textarea class="e1-write" placeholder="여기에 영어 문장을 써요" autocapitalize="sentences" autocomplete="off" spellcheck="false"></textarea>'),fb=f.add('<p class="e1-note" hidden></p>');
    const show=()=>{ta.readOnly=true;note(f,fb,'정답은 이래요: '+c.answer+' (cry를 써도 맞아요.)','info');f.main('다음',true,()=>onDone(false,w,ta.value));};
    const submit=()=>{
      const typed=ta.value,ok=gradeWrite(c.accept,typed);cur.typed=(cur.typed||[]).concat([typed.slice(0,120)]);
      if(ok){ta.classList.add('ok');ta.readOnly=true;note(f,fb,'맞았어요! cry와 crying 둘 다 정답이에요. At night를 앞에 써도 돼요.','ok');f.main('다음',true,()=>onDone(true,w,typed));save();onRight&&onRight(w);return;}
      w++;cur.w=w;once&&once();save();
      if(w>=3||(once&&!onDone.retry))return show();
      note(f,fb,w===1?'누가 들었는지 찾아보세요.':'hear를 과거로 바꿔 보세요.');f.main('다시 제출',true,submit);};
    ta.oninput=()=>f.enable(!!ta.value.trim()&&!ta.readOnly);f.main('제출',false,submit);
    if(w>=3)show();
    return f;
  }
  // v212: 본문 문장 보기(채점 없음) — 5일차 혼자 쓰기 '다음' 뒤 · S9 B의 ① 제출 뒤에 같은 장면을 쓴다.
  const seenOn=s0=>(s9Evidence(s9Tokens(s0?.res||{})).S9v||'').slice(2);
  function modeOf(s0,date) {
    const facts = s9Evidence(s9Tokens(s0.res));
    if (facts.S9m === 'm-B') return 'B';
    if (facts.S9m === 'm-A') return 'A';
    const last = (facts.S9vl || facts.S9v || '').slice(2);
    return last && last < date ? 'A' : 'B';
  }
  // The caller presents the new text only after true. Roll back every changed field on write failure.
  function storeS9Facts(incoming) {
    const res = {...st.res};
    if (!mergeS9Facts(res, incoming).length) return true;
    const prior = {res:st.res, evidence_at:st.evidence_at, event_id:st.event_id};
    st.res=res;
    stamp();
    if (!save()) { Object.assign(st, prior); return false; }
    share();
    return true;
  }
  function recordOrigSeen(date) { return storeS9Facts({S9v:'v-'+date}); }
  function receivedS9Facts() {
    const remote = preview ? null : readEnglishRemote();
    return s9Evidence(s9Tokens(st.res).concat(s9Tokens(remote?.res||{})));
  }
  // An already-open question can receive new facts before submission. Persist them with the actual attempt.
  function absorbLiveS9Facts() { mergeS9Facts(st.res, receivedS9Facts()); }
  function recallFeedbackOkay(date) {
    const facts = receivedS9Facts();
    const last = (facts.S9vl || facts.S9v || '').slice(2);
    return st.res.S9u!=='u-legacy' && facts.S9m==='m-A' && !!last && last<date;
  }
  function recordExamMode(date) {
    const facts = receivedS9Facts();
    facts.S9m='m-'+modeOf({res:facts},date);
    return storeS9Facts(facts);
  }
  // r2: 본문 문장 덩어리(리드·덩어리·원문·우리말·안내) — 장면 화면과 B ① 정답 화면(같은 화면 아래)이 같이 쓴다. 리드 요소를 돌려준다.
  function origShow(f,lead,cls){
    const e=S.exam,lab=['언제','처음에 배운 문장','언제'];
    const top=f.add(`<p class="e1-lead${cls?' '+cls:''}">${esc(lead)}</p>`);
    f.add(`<div class="e1-orig">${e.orig.map((c,i)=>`<div class="e1-ob ${i===1?'m':'t'}"><b>${esc(c)}</b><small>${lab[i]}</small></div>`).join('')}</div>`);
    f.add(`<p class="e1-sent" style="font-size:19px">${esc(e.answer)}</p>`);f.add(`<p class="e1-ko">${esc(e.ko)}</p>`);
    f.add('<p class="e1-note info">이 본문 문장은 <b>Last Friday,</b>로 시작하고 <b>after school</b>로 끝나요.</p>');
    return top;
  }
  function origScene(title,count,lead,btn,onNext){const f=frame(title,count);origShow(f,lead);f.main(btn,true,onNext);return f;}
  R.write=(s,done)=>{
    // v212: 채점이 끝난 뒤 '다음' → 본문 문장 보기 → '다 봤어요'로 S8W를 마친다. 장면이 화면에 뜬 날을 S9v로(처음 한 번, 저장·공유).
    const orig=r=>{
      if(!recordOrigSeen(today))return saveBlocked(()=>orig(r));
      origScene(s.title,'','처음에 배운 문장이 교과서 106쪽 본문에는 이렇게 나와요.','다 봤어요',()=>done(r));
    };
    const toOrig=r=>subStep({phase:'orig',r8:r},()=>orig(r));   // 저장되기 전에는 넘어가지 않는다(r5 하위 화면 규칙)
    if(cur.phase==='orig')return orig(cur.r8||{code:st.res[s.id]==='C-ok'?'ok':'fail',w:cur.w||0,typed:(cur.typed||[]).join(' / ')});
    if(st.res[s.id]==='C-ok')return recorded(s.title,'이 문장은 처음 쓸 때 혼자 맞혔어요.',[S.cats.answer],()=>toOrig({code:'ok',w:0,typed:(cur.typed||[]).join(' / ')}));
    const first=()=>{if(!st.res[s.id])fixNow(s.id,'C-fail');};
    const cb=(ok,w,typed)=>toOrig({code:ok&&w===0&&st.res[s.id]!=='C-fail'?'ok':'fail',w,typed:(cur.typed||[]).join(' / ')});
    cb.retry=true;
    writeScreen(s.title,'1/1','주어진 말을 모두 사용하고, 필요하면 형태를 바꾸어 문장을 쓰세요.',first,cb,w=>{if(w===0&&!st.res[s.id])fixNow(s.id,'C-ok');});
  };
  // 다시 확인(B): 이전 날 실패한 문장을 도움 없이 한 번.
  R.bretry=(sid,done)=>{
    const key=bKey(st,sid);
    if(st.res[key]==='B-ok')return recorded(sid==='cats'?'지난 문장 다시 쓰기':'지난 문장 다시 놓기','이 문장은 다른 날 혼자 맞혔어요.',sid==='cats'?[S.cats.answer]:S[sid].en,()=>done({code:'ok'}));
    if(sid==='cats'){
      const cb=(ok)=>done({code:ok&&st.res[key]!=='B-fail'?'ok':'fail'});cb.retry=false;
      writeScreen('지난 문장 다시 쓰기','1/1','지난번 문장을 이번엔 혼자 한 번 써 봐요. 주어진 말을 모두 사용하고, 필요하면 형태를 바꾸세요.',()=>{if(!st.res[key])fixNow(key,'B-fail');},cb,()=>{if(!st.res[key])fixNow(key,'B-ok');});return;
    }
    const sent=S[sid],f=frame('지난 문장 다시 놓기','1/1');
    f.add('<p class="e1-lead">지난번에 살펴본 문장이에요. 이번엔 도움 없이 한 번 놓아 봐요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
    const a=onceArrange(f,sent,{okText:'맞아요. 다른 날에도 혼자 놓았어요.',onOk:()=>done({code:'ok'}),onFollowed:()=>done({code:'fail'}),onRight:()=>{if(!st.res[key])fixNow(key,'B-ok');},
      onWrong:a=>{fixNow(key,'B-fail');a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');}});
    if(st.res[key]==='B-fail')a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');
  };
  // S9 시험 형식: ① 단어 배열(D층 — 첫 시도만) ② -ing 빈칸(연습) ③ 어법 고르기(연습)
  R.exam=(s,done)=>{
    cur.r=cur.r||{};
    const term='<p class="e1-note info">시험에서는 이런 문장을 \'지각동사 문장\'이라고 불러요. see·hear·feel + 누구를 + -ing.</p>';
    // v212: ①이 끝나면 B는 본문 문장 보기(o9) → ②, A는 바로 ②. 하위 화면 전환은 저장되기 전에는 넘어가지 않는다(r5).
    const toB=()=>subStep({phase:'b',w:0},B);
    const after1=()=>st.res.S9m==='m-B'?subStep({phase:'o9',w:0},O9):toB();
    const O9_LEAD='방금 놓은 문장은 교과서 106쪽 본문 문장이에요. 본문에는 이렇게 나와요.',O9=()=>origScene(s.title,'1/3',O9_LEAD,'다음',toB);
    // r2(Codex HOLD 3): A 첫 오답이 검토된 다른 어순(Last Friday, after school I saw my brother playing basketball. — 배포 점검 REVIEW v2·v3)일 때만
    //  '뜻은 맞아요'. after school을 다른 자리에 넣어 Last Friday·my brother 등을 깨뜨린 답은 기존 안내.
    const ALT=[0,1,8,9,2,3,4,5,6,7].join(),asOnly=o=>o.join()===ALT;
    const A=()=>{
      const legacy=st.res.S9u==='u-legacy'||(!st.res.S9m&&Boolean(st.res.S9a0||st.res.S9a||cur.w>0));
      if(!legacy&&!recordExamMode(today))return saveBlocked(A);
      const md=legacy?'legacy':st.res.S9m.slice(2),e=S.exam,f=frame(s.title,'1/3');f.add(term);
      const prompt=legacy?'우리말에 맞게 단어를 순서대로 놓으세요.':md==='A'
        ?'앞에서 본 106쪽 본문 문장이에요. 우리말에 맞게, <b>본문 문장 그대로</b> 단어를 놓으세요.'
        :'우리말에 맞게 단어를 놓으세요. <b>Last Friday,</b>로 시작하고 <b>after school</b>로 끝내세요.';
      f.add(`<p class="e1-lead">${prompt}</p>`);
      f.add(`<p class="e1-ko">${esc(e.ko)}</p>`);
      let w=cur.w||(st.res.S9a0?1:0);const tips=["'지난 금요일'(Last Friday,)부터 놓고, 그다음 누가 봤는지 찾아봐요.","I saw 다음은 누구를(my brother), 그다음 뭐 하는 걸(playing basketball), 마지막에 after school."];
      const tip=k=>k===1&&md==='A'&&cur.t1==='as'?'뜻은 맞아요. 본문에서는 after school이 어디에 있었는지 떠올려 봐요.':tips[k-1];
      const a=arrange(f,{chunks:e.words,mix:e.mix,words:true,
        advanceOnLastFollowTile:st.res.S9m==='m-B',
        onCheck:(ok,order)=>{
          absorbLiveS9Facts();
          // gate() has assigned the submitting day. Persist this attempt's
          // result, counter and feedback selector together before giving a hint.
          if(ok){
            cur.r.d=w===0&&!st.res.S9a0?'ok':'help';cur.r.dw=w;
            fix(st,'S9a','D-'+cur.r.d);
          }else{
            w++;cur.w=w;
            if(w===1)cur.t1=asOnly(order||[])?'as':'';
            fix(st,'S9a0','D-wrong');
            if(w>=3){cur.r.d='fail';cur.r.dw=w;fix(st,'S9a','D-fail');}
          }
          stamp();
          const correctFeedback=()=>{
            a.lock();
            let feedback='맞아요.';
            if(w===0){
              if(md==='B')feedback='맞아요! 주어진 시작과 끝에 맞춰 문장을 완성했어요.';
              else if(md==='A'&&recallFeedbackOkay(today))feedback='맞아요! 시간이 지나도 혼자 놓았어요.';
              else feedback='맞아요. 본문 순서대로 놓았어요.';
            }
            a.note(feedback,'ok');
            if(md==='B'){
              const top=origShow(f,O9_LEAD,'e1-after');
              try{top.scrollIntoView({block:'start'});}catch(_){}
              f.main('다음',true,toB);
            }else f.main('다음',true,after1);
          };
          if(!save()){
            // No new teaching content until the real submission is durable.
            // Retain the original day and attempt in memory. The button uses
            // gate(): persist first, then settle any overnight change.
            a.lock();hold(f.body);
            f.main('다시 저장',true,()=>{
              if(ok)correctFeedback();else A();
            });
            return;
          }
          share();
          if(ok){correctFeedback();return;}
          if(w>=3){a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');return;}
          a.reset();a.note(tip(w));
        },
        onFollowed:()=>{cur.r.d='fail';cur.r.dw=w;after1();}});   // r5: 다음 하위 화면으로 넘어가는 저장 확인
      if(w>=3)a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');else if(w>0)a.note(tip(w));
    };
    const B=()=>{
      const f=frame(s.title,'2/3');let w=cur.w||0;
      f.add('<p class="e1-lead">주어진 동사를 -ing형으로 바꾸어 문장을 완성하세요. (play)</p>');
      const line=f.add('<p class="e1-sent" style="font-size:19px">I saw my brother <input class="e1-inline" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="빈칸"> basketball.</p>');
      const inp=line.querySelector('input'),fb=f.add('<p class="e1-note" hidden></p>');
      const toC=()=>subStep({phase:'c',w:0},C);   // r5: ③으로 넘어가는 저장 확인
      // r5: ② 결과는 채점한 순간 기록·저장·전송 대기열에('다음' 전에 꺼져도 다른 기기에서 그대로 — Codex 착수 검토)
      const submit=()=>{const ok=norm(inp.value)==='playing';
        if(ok){inp.readOnly=true;fixNow('S9b','p-'+(w===0?'ok':'help'));note(f,fb,'맞아요. 하고 있던 행동은 playing.','ok');f.main('다음',true,toC);return;}
        w++;cur.w=w;
        if(w>=2){inp.readOnly=true;fixNow('S9b','p-fail');note(f,fb,'정답은 playing이에요.','info');f.main('다음',true,toC);return;}
        save();note(f,fb,'이번 문제에서는 play를 playing으로 바꿔 보세요.');f.main('다시 확인',true,submit);};
      inp.oninput=()=>f.enable(!!inp.value.trim()&&!inp.readOnly);f.main('확인',false,submit);
    };
    const pv=k=>/^p-(ok|help|fail)$/.test(st.res[k]||'')?st.res[k].slice(2):undefined;
    const C=()=>{
      const f=frame(s.title,'3/3');const O=['I saw my brother to play basketball.','I saw playing my brother basketball.','I saw my brother played basketball.','I saw my brother playing basketball.'];
      f.add('<p class="e1-lead">다음 중 어법상 옳은 것을 고르세요.</p>');
      const box=f.add('<div></div>'),fb=f.add('<p class="e1-note" hidden></p>');
      box.innerHTML=O.map((o,i)=>`<button type="button" class="e1-opt" data-i="${i}">${'①②③④'[i]} ${esc(o)}</button>`).join('');
      const show=i=>{box.querySelectorAll('button').forEach(x=>x.disabled=true);box.children[3].classList.add('ok');
        if(i===3)note(f,fb,'맞아요. see·hear + 누구를 + -ing예요.','ok');
        else{if(i>=0)box.children[i].classList.add('no');note(f,fb,'정답은 ④예요. ①은 to를 넣지 않아요. ②는 순서가 \'누구를 → 뭐 하는 걸\'이에요. ③은 played가 아니라 playing(또는 play)이에요.','info');}
        f.main('다음',true,()=>done({d:cur.r.d||(st.res.S9a||'').slice(2),dw:cur.r.dw,b:pv('S9b'),c:pv('S9c'),sel:cur.r.sel}));};
      // 이미 고른 뒤 다시 열림(이 기기에서 '다음' 전에 나갔거나 다른 기기에서 고름) → 다시 고르게 하지 않고 결과만
      const was=pv('S9c');if(was)return show(was==='ok'?3:cur.r.sel?cur.r.sel-1:-1);
      // r5: 보기 탭도 관문(저장 확인 → 날짜 배정)을 거친다. 날짜가 바뀌었으면 고른 답은 처리하지 않고 S9를 전날로 마감 → 새 화면.
      box.querySelectorAll('button').forEach(b=>b.onclick=()=>gate(()=>{
        if(pv('S9c'))return;const i=+b.dataset.i;cur.r.c=i===3?'ok':'fail';cur.r.sel=i+1;fixNow('S9c','p-'+cur.r.c);show(i);},f.body));
      f.main('다음',false);
    };
    // ①을 이미 기록했으면(이 기기에서 맞힌 뒤 나갔거나 다른 기기에서 ①을 마침) ②부터. ①을 따라 놓는 중이면 그 화면을 이어 간다. r5: ②를 기록했으면 ③부터.
    // v212: B는 ①을 마친 뒤 본문 문장 보기(o9)를 거쳐 ②로 — 다른 기기에서 이어 받으면 o9부터(한 번 더 보여 줘도 해가 없다).
    if(cur.phase==='c'||(st.res.S9a&&pv('S9b')))return C();if(cur.phase==='b')return B();if(cur.phase==='o9')return O9();
    if(st.res.S9a&&!(st.res.S9a==='D-fail'&&cur.w>=3))return st.res.S9m==='m-B'?O9():B();A();
  };
  R.end=(s,done)=>done({});

  // ───────────────────────── E2 화면 (E1 화면 종류만 — 문구·타일·보기만 E2 데이터) ─────────────────────────
  // Codex 착수 의견 3: 첫 시도 결과(·그 화면의 오답 수)는 저장이 확인된 뒤에만 안내·정답·다음 화면을 보인다.
  //  저장이 안 되면 그 자리에서 멈추고 '다시 저장'(앱을 닫으면 아무것도 보지 않은 첫 시도로 남는다 — 화면과 채점 기록이 늘 같다).
  const TA2='<textarea class="e1-write" placeholder="여기에 영어 문장을 써요" autocapitalize="sentences" autocomplete="off" spellcheck="false"></textarea>';
  const LEAD10='네 덩어리를 나누지 말고, 낱말 하나만 더해 지난 일을 한 문장으로 쓰세요. 필요하면 낱말의 모양을 바꿔도 돼요.';
  function persist2(){rollDay();stamp2();const ok=save();if(ok)share();return ok;}
  function keep2(f,show){if(persist2())return show();hold(f.body);f.main('다시 저장',true,show);}
  // 해설·안내가 아래 버튼에 가리면 버튼 위로 보이게(원고 v1.3 — 글자·터치 크기는 그대로, 본문만 스크롤).
  function reveal(el){try{const foot=document.querySelector('#e1-page .e1-foot');if(!foot||!el)return;const fr=foot.getBoundingClientRect(),r=el.getBoundingClientRect();
    if(r.bottom>fr.top-4||r.top<0){el.style.scrollMarginBottom=Math.ceil(fr.height+12)+'px';el.style.scrollMarginTop='12px';el.scrollIntoView({block:'nearest'});}}catch(_){}}
  // 도움 있는 배열(A층·연습). persist면 결과·오답 수를 저장한 뒤에만 안내(A층 T5). 연습은 E1처럼 저장만 해 둔다.
  function helped2(f,sent,o,finish){
    let w=o.w||0;const tips=helpTexts(sent);
    const a=arrange(f,{chunks:sent.en,mix:sent.mix,roles:ROLE,colored:w>0||o.colored,
      onCheck:ok=>{
        if(o.pre&&sync2()&&o.pre(ok,a))return;   // r5: 결과를 확정하기 전에 이 기기가 받은 기록과 합침(T5) — 다른 기기 결과가 있으면 그 기록 화면으로
        if(ok){o.onRight&&o.onRight(w);a.lock();
          const show=()=>{a.note(w===0&&o.soloText&&(!o.isSolo||o.isSolo())?o.soloText:'맞아요.','ok');f.main('다음',true,()=>finish(w===0?'ok':'help',w));};   // r5: 받은 첫 오답이 있으면 '혼자'라고 하지 않음
          return o.persist?keep2(f,show):(save(),show());}
        w++;cur.w=w;o.onWrong&&o.onWrong(w);
        const show=()=>{if(w>=3){a.color(true);a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');return;}a.unlock();a.reset();a.color(true);a.note(tips[w-1]);};
        if(o.persist){a.lock();return keep2(f,show);}
        save();show();},
      onFollowed:()=>{a.note(o.failText||'괜찮아요. 다음에 다시 혼자 해 봐요.','info');f.main('다음',true,()=>finish('fail',w));}});
    if(w>=3){a.color(true);a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');}else if(w>0)a.note(tips[Math.min(w,2)-1]);
    return a;
  }
  // r5(Codex r4 지적 2): 첫 시도 결과 키를 이 기기가 처음 정할 때만 cur.own에 남긴다 — 미확인 행에서 대표값 대신 이 기기의 첫 제출로 쓴다(token2).
  function fixMine(k,v){if(st2.res[k])return;fix(st2,k,v);if(cur)cur.own={...(cur.own||{}),[k]:v};}
  // 도움 없는 한 번(B·C 첫 시도): 결과를 고정·저장한 뒤에만 맞음/틀림 안내.
  //  r5(Codex r4 지적 2): 고정하기 전에 이 기기가 이미 받은 기록과 합친다(sync2 — 서버 접속 없음). 다른 기기의 첫 답·노출이 먼저 와 있으면 화면 쪽(o.pre)이
  //  화면을 열기 전에 받았을 때와 같게 처리한다(첫 답 → 그 기록 화면, 노출 → 이번 답은 연습). 통신 전에 서로 낸 첫 답이 엇갈린 경우만 미확인(mergeRes2).
  function once2(f,sent,o){
    const a=arrange(f,{chunks:sent.en,mix:sent.mix,onFollowed:o.onFollowed,onCheck:ok=>{
      a.lock();if(!st2.res[o.key]&&sync2()&&o.pre&&o.pre(ok,a))return;
      fixMine(o.key,ok?o.good:o.bad);
      keep2(f,()=>{if(st2.res[o.key]===o.good){a.note(o.okText,'ok');f.main('다음',true,()=>o.onOk());}else o.onBad(a);});}});
    return a;
  }
  const R2={};
  R2.scene=(s,done)=>{const f=frame(s.title,'');
    const img=f.add('<img class="e1-illus" src="img/E2_t1_delete_picture.png" width="1500" height="900" alt="남동생이 휴대폰 속 자기 사진을 가리키며 걱정하고, 벨라가 휴지통 버튼을 누르려는 장면">');
    img.onerror=()=>{img.hidden=true;};   // 그림을 못 불러와도 자막으로 진행(원고 §3 T1)
    f.add('<p class="e1-cap">사진이 나쁜 댓글과 함께 퍼졌어요. 남동생은 내가 그 사진을 지우기를 원했어요.</p>');f.main('다음',true,()=>done({}));};
  R2.link=(s,done)=>linkScreen(s,S2[s.sent],s.title,"'봤어요' 문장과 자리가 같아요. 덩어리를 탭하면 뜻이 같이 켜져요.",()=>done({}));
  R2.demo=(s,done)=>demoScreen(S2[s.sent],s.title,()=>done({}));
  // T4 빈칸 하나 고르기(4층 밖 메모): 오답 1회 = 보기별 안내, 2회 = 남은 보기 1개.
  R2.blank=(s,done)=>{
    const f=frame(s.title,'');let w=cur.w||0;const opts=['deleting','to delete','delete'];
    f.add(`<p class="e1-ko">${esc(S2['t-base'].ko)}</p>`);
    const sent=f.add('<p class="e1-sent">My brother wanted me <span class="e1-blank">&nbsp;</span> the picture.</p>');
    f.add('<p class="e1-lead" style="text-align:center">방금 배운 교과서 문장을 떠올려 보세요. 남동생이 내가 하기를 원한 일을 어떻게 썼나요?</p>');
    const t=f.add('<div class="e1-tiles"></div>'),fb=f.add('<p class="e1-note" hidden></p>');
    const draw=()=>{t.innerHTML=opts.map((o,i)=>`<button type="button" class="e1-tile" data-i="${i}" ${w>=2&&i!==1?'disabled':''}>${esc(o)}</button>`).join('');
      t.querySelectorAll('button').forEach(b=>b.onclick=()=>gate(()=>pick(+b.dataset.i),f.body));};
    const pick=i=>{
      if(i===1){sent.querySelector('.e1-blank').textContent='to delete';t.innerHTML='';note(f,fb,'맞아요. 남동생이 원한 일은 사람 뒤에 to + 할 일로 써요.','ok');f.main('다음',true,()=>done({memo:w===0?'solo':'help'+Math.min(w,2)}));return;}
      w++;cur.w=w;save();
      if(w>=2)note(f,fb,'to delete예요. 눌러서 놓아 봐요.');
      else note(f,fb,i===0?'앞에서 -ing는 보고 들은 일이 한창일 때 썼어요. 이 문장에서 남동생이 원한 건 내가 사진을 지우는 일이에요. 교과서에서는 to delete라고 썼어요.':'할 일 앞에 붙는 말이 빠졌어요. 남동생이 원한 일은 교과서에서 to + 할 일로 썼어요.');
      draw();};
    draw();f.main('다음',false);
    if(w>=2)note(f,fb,'to delete예요. 눌러서 놓아 봐요.');
  };
  R2.arrange=(s,done)=>{
    const sent=S2[s.sent];
    if(s.layer==='A'){
      const v=st2.res[s.id];
      if(v&&!(cur.w>=3&&v==='A-fail'))return recorded(s.title,v==='A-fail'?'지난번에 순서를 같이 살펴본 문장이에요. 다음에 다시 혼자 해 봐요.':'이 문장은 이미 놓았어요.',sent.en,()=>done({code:v.slice(2),w:cur.w||0}));
      const f=frame(s.title,'');f.add('<p class="e1-lead">이번엔 혼자 순서대로 놓아요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      helped2(f,sent,{w:cur.w||(st2.res[s.id+'w']?1:0),persist:true,soloText:'맞아요. 오늘 혼자 놓았어요.',failText:'오늘은 여기까지. 다음에 다시 혼자 해 봐요.',
        pre:(ok,a)=>{if(!st2.res[s.id])return false;a.lock();keep2(f,()=>R2.arrange(s,done));return true;},   // r5: 다른 기기에서 이미 끝낸 T5 → 그 기록 화면
        isSolo:()=>!st2.res[s.id+'w'],   // r5: 다른 기기의 첫 오답(T5w)을 받았으면 정답이어도 도움 후 완성(A-help) — 안내도 '맞아요.'
        onWrong:w=>{fix(st2,s.id+'w','A-wrong');if(w>=3)fixMine(s.id,'A-fail');},
        onRight:w=>fixMine(s.id,w>0||st2.res[s.id+'w']?'A-help':'A-ok')},(code,w)=>done({code,w}));
      return;
    }
    // C 배열(T9·T11): 우리말만, 첫 시도. 틀리면 C ✗(저장 확인 뒤) → 그 자리에서 뜻 연결 → 시연 → 도움 있는 배열(연습). E1 S7C 규칙 그대로.
    const remedial=()=>linkScreen(s,sent,s.title,'괜찮아요. 이 문장을 같이 살펴봐요. 덩어리를 탭하면 뜻이 켜져요.',()=>demoScreen(sent,s.title,()=>{
      const f=frame(s.title,'');f.add('<p class="e1-lead">이제 다시 놓아 봐요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      helped2(f,sent,{w:0,colored:true},()=>done({code:'fail'}));}));
    if(st2.res[s.id]==='C-fail')return remedial();
    if(st2.res[s.id]==='C-ok')return recorded(s.title,st2.res[s.id+'_u']?'이 문장은 이미 놓았어요.':'이 문장은 처음 볼 때 혼자 놓았어요.',sent.en,()=>done({code:'ok'}));   // r3: 미확인이면 혼자 했다고 단정하지 않음
    if(/^p-(ok|help|fail)$/.test(st2.res[s.id]||''))return recorded('본 적 있는 문장','이 문장은 전에 연습했어요.',sent.en,()=>done({code:st2.res[s.id].slice(2)}));
    if(seen2(st2,s.id)){   // 노출됨·미채점 → 연습(원고 §7-5)
      const f=frame('본 적 있는 문장','');f.add('<p class="e1-lead">전에 한 번 본 문장이에요. 순서대로 놓아 봐요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      helped2(f,sent,{w:cur.w||0},(code,w)=>done({code,w}));return;
    }
    const f=frame(s.title,'1/1');f.add('<p class="e1-lead">처음 보는 문장이에요. <b>우리말만 보고</b> 놓아 보세요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
    once2(f,sent,{key:s.id,good:'C-ok',bad:'C-fail',okText:'맞아요! 처음 보는 문장도 혼자 놓았어요.',onOk:()=>done({code:'ok'}),
      onBad:a=>{a.note('괜찮아요. 이 문장을 같이 살펴봐요.','info');f.main('다음',true,remedial);},
      // r5(Codex r4 지적 2 — T9·이월 T9·T11): 첫 제출 전에 받은 기록. 다른 기기의 첫 답·연습 → 그 기록 화면(정답 = 기록, 오답 = 같이 살펴보기, 연습 = 본 적 있는 문장).
      //  다른 기기가 더 이른 날 본 문장 → 이번 답은 연습(맞으면 '맞아요.'·p-ok, 틀리면 연습 화면 도움 1부터) — 열기 전에 받았을 때와 같은 기록·다음 날 배정.
      pre:(ok,a)=>{
        if(st2.res[s.id]){keep2(f,()=>R2.arrange(s,done));return true;}
        if(!seen2(st2,s.id))return false;
        if(!ok){cur.w=1;keep2(f,()=>R2.arrange(s,done));return true;}
        keep2(f,()=>{document.querySelector('.header-title').textContent='영어 · 본 적 있는 문장';const c=f.body.querySelector('.e1-count');if(c)c.textContent='';
          const l=f.body.querySelector('.e1-lead');if(l)l.textContent='전에 한 번 본 문장이에요. 순서대로 놓아 봐요.';   // 연습 화면과 같은 제목·안내
          a.note('맞아요.','ok');f.main('다음',true,()=>done({code:'ok',w:0}));});return true;}});
  };
  // T6 다른 날 혼자(B층): T5와 같은 화면, 도움 문구 없이 한 번. 틀리면 따라 놓기 → 시연 → 도움 있는 배열(연습). E1 S6 규칙 그대로.
  R2.check=(s,done)=>{
    const sent=S2[s.sent];
    const remedial=()=>demoScreen(sent,s.title,()=>{const f=frame(s.title,'');f.add('<p class="e1-lead">이제 다시 놓아 봐요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      helped2(f,sent,{w:0,colored:true},()=>done({code:'fail'}));});
    if(st2.res[s.id]==='B-fail')return remedial();
    if(st2.res[s.id]==='B-ok')return recorded(s.title,st2.res[s.id+'_u']?'이 문장은 이미 놓았어요.':'이 문장은 다른 날에도 혼자 놓았어요.',sent.en,()=>done({code:'ok'}));
    const f=frame(s.title,'');f.add('<p class="e1-lead">이번엔 혼자 순서대로 놓아요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
    once2(f,sent,{key:s.id,good:'B-ok',bad:'B-fail',okText:'맞아요. 다른 날에도 혼자 놓았어요.',onOk:()=>done({code:'ok'}),onFollowed:remedial,
      onBad:a=>a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.'),pre:()=>{if(!st2.res[s.id])return false;keep2(f,()=>R2.check(s,done));return true;}});   // r5: 다른 기기의 T6 결과 → 그 기록 화면
  };
  // T7 뜻 연결 → 배열(시연 생략) · T8 배열 → 쓰기 연습. 기록은 연습.
  R2.practice=(s,done)=>{
    const sent=S2[s.sent];
    const arr=()=>{const f=frame(s.title,'');f.add(`<p class="e1-lead">${s.write?"이번엔 '말했어요'. 자리는 똑같아요.":'순서대로 놓아 봐요.'}</p>`);f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      helped2(f,sent,{w:cur.w||0},(code,w)=>{if(!s.write)return done({code,w});subStep({phase:'write',code,w2:0},()=>wr(code,w));});};
    // 후속 r1(v215 — E1 S8a와 같은 방식, E4·E5 r2 필수 3): 쓰기 결과·입력(cur.wtx)을 저장한 뒤 안내. 다시 열면 같은 입력·안내·잠긴 칸·'다음', 첫 오답 뒤면 '다시 제출'.
    const wr=(code,w)=>{
      const f=frame(s.title,'');let w2=cur.w2||0;
      f.add('<p class="e1-lead">이번엔 같은 문장을 직접 써 봐요. 덩어리를 보고 순서대로 쓰면 돼요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      f.add(`<div class="e1-given">${sent.mix.map(i=>`<span>${esc(sent.en[i])}</span>`).join('')}</div>`);
      const ta=f.add(TA2),fb=f.add('<p class="e1-note" hidden></p>');
      const shut=res=>{if(!ta.value)ta.value=cur.wtx||'';ta.readOnly=true;
        if(res==='fail')note(f,fb,'정답은 이래요: '+sent.en.join(' ')+'.','info');else{ta.classList.add('ok');note(f,fb,'맞아요.','ok');}
        f.main('다음',true,()=>done({code,w,write:res}));};
      const again=()=>{ta.readOnly=false;note(f,fb,'덩어리 순서대로 써 봐요: 누가 → 말했어요 → 그 일을 할 사람 → to + 할 일.');f.main('다시 제출',!!ta.value.trim(),submit);};
      const submit=()=>{const v=ta.value.slice(0,200);
        if(gradeWrite(sent.accept,ta.value))return subStep({wres:w2===0?'ok':'help',wtx:v,wd:wDay(st2)},()=>shut(cur.wres));   // 후속 r4: 결과와 그 화면을 연 날을 함께
        const n=w2+1;subStep(n>=2?{w2:n,wres:'fail',wtx:v,wd:wDay(st2)}:{w2:n,wtx:v},()=>{w2=n;if(n>=2)shut('fail');else again();});};
      ta.oninput=()=>f.enable(!!ta.value.trim()&&!ta.readOnly);f.main('제출',false,submit);
      // 후속 r2(Codex r1 경우 2): v214는 쓰기 결과를 저장하지 않고 오답 수(cur.w2)만 남겼다 — 두 번 틀려 정답을 본 채(w2>=2) 업데이트되면 정답 공개로 복원
      //  (쓰기 결과 fail · 입력 문구는 v214가 남기지 않아 빈 칸). 첫 오답 한 번(w2=1)이면 다시 제출.
      const wr0=cur.wres||(w2>=2?'fail':'');
      if(wr0)shut(wr0);else if(w2>0){ta.value=cur.wtx||'';again();}
    };
    if(cur.phase==='write')return wr(cur.code||'ok',cur.w||0);
    if(s.noDemo)return linkScreen(s,sent,s.title,"이번엔 '부탁했어요'. 자리는 똑같아요 — 누가, 부탁했어요, 그 일을 할 사람, to + 할 일.",arr);
    return arr();
  };
  // T10 혼자 쓰기(C층)·그 재확인(B층)·노출 뒤 연습: 첫 제출 하나로 결과(key가 있을 때, 저장 확인 뒤 안내). 틀려도 입력칸은 열어 둔다(원고 v1.3).
  //  안내 1·2 → 3번째에 정답. C층에서 안내 뒤 맞히면 '도움 후 완성'(help 키). done({right,w,typed,n}).
  //  o = {key 첫 시도 결과 키, good, bad, help '도움 후 완성' 키, sched 첫 오답 때 함께 예약할 재확인 문장, stage 오답 단계 공유 키 앞부분}
  //  r2(Codex r1 HOLD 2): ① 첫 오답(C ✗)과 다음 학습일 재확인 예약을 한 번의 저장에(원고 §3 T10) ② 고쳐 맞힌 뒤 '다음' 전에 나갔다 오면
  //  맞힌 문장·잠긴 입력칸·'다음'으로(다시 제출 없음) ③ 둘째·셋째 오답(T10w2·T10w3)을 저장해 다른 기기에서도 남은 도움 단계부터.
  //  r3(Codex r2 HOLD 3): 정답을 공개한 사실(T10w3)이 있으면 그 뒤 맞힌 답으로 '도움 후 완성'(T10h)을 새로 만들지 않는다.
  //  r5(Codex r4 지적 1·2): 재확인은 화면을 연 회차로 마감(R2.bretry bkey) · 다른 기기의 첫 정답을 받은 뒤의 첫 제출은 그 기록 화면으로(o.redo, 입력은 late).
  //  r4(Codex r3 지적 1·2): ① 잠긴 정답 칸에 되살리는 문장도 실제 채점(gradeWrite)을 통과해야 한다 — 이 기기 입력 중 통과한 마지막 것, 없으면 정답 예문.
  //  ② 제출 직전에 이 기기가 이미 받은 기록(readRemote2)을 합쳐 대조한다(서버 접속 없음). 다른 기기에서 정답이 공개됐으면 정답 확인 화면으로(도움 후 완성 없음),
  //  이미 고쳐 맞혔으면 맞힌 상태로, 다른 기기가 더 이른 날 본 문장이면 이번 답은 연습으로 기록한다. ③ o.solved = 이미 정답을 낸 연습('다음'으로 이어 감).
  // 후속 r1(v215 — E4·E5 r2 필수 1과 같음): 받은 기록의 재확인 실패일(noc)도 합친다(reconcile2가 합집합). v214까지는 성취·예약만 받아, T10을 연 채
  //  다른 기기의 그날 재확인 실패를 받으면 그날 T11이 열렸다(seq2는 noc가 있는 날 새 C 배열을 이월).
  function sync2(){const r=readRemote2();if(!r)return false;const rc=reconcile2(st2,r);if(!rc)return false;st2.res=rc.res;st2.b=rc.b;st2.noc=rc.noc;return true;}
  function writeScreen2(title,lead,o,done){
    const c=S2['t-amelia'],f=frame(title,'1/1'),good=o.good,bad=o.bad,RS=st2.res;let key=o.key,help=o.help;
    const stageOf=R=>key&&R[key]===bad?(o.stage&&R[o.stage+'w3']?3:o.stage&&R[o.stage+'w2']?2:1):0;
    let w=Math.max(cur.w||0,stageOf(RS));if(w)cur.w=w;
    const solved=!!cur.solved||!!o.solved||(!!help&&!!key&&RS[key]===bad&&RS[help]==='h-ok');
    const okTyped=()=>(cur.typed||[]).slice().reverse().find(t=>gradeWrite(c.accept,t))||'';
    f.add(`<p class="e1-lead">${lead}</p>`);f.add(`<p class="e1-ko">${esc(c.ko)}</p>`);
    f.add('<p class="e1-lead" style="font-size:14px;color:#5b6575;margin-bottom:-8px">주어진 말</p>');
    f.add(`<div class="e1-given">${c.given.map(g=>`<span>${esc(g)}</span>`).join('')}</div>`);
    const ta=f.add(TA2),fb=f.add('<p class="e1-note" hidden></p>');
    const TIPS=['부탁한 사람 → 부탁했어요 → 그 일을 할 사람 → to + 할 일 순서예요.','ask를 과거로 바꾸고, 할 일 앞에 to를 붙여 보세요.'];
    const fin=right=>done({right,w,typed:(cur.typed||[]).join(' / '),n:(cur.typed||[]).length});
    const right=()=>{ta.classList.add('ok');ta.readOnly=true;note(f,fb,'맞았어요! 할 일 앞에 to를 붙였어요.','ok');f.main('다음',true,()=>fin(true));};
    const answer=()=>{ta.readOnly=true;note(f,fb,'정답은 이래요: '+c.answer,'info');f.main('다음',true,()=>fin(false));};
    const tip=()=>{ta.readOnly=false;note(f,fb,TIPS[Math.min(w,2)-1]);f.main('다시 제출',!!ta.value.trim(),submit);};
    const submit=()=>{
      const typed=ta.value,ok=gradeWrite(c.accept,typed);cur.typed=(cur.typed||[]).concat([typed.slice(0,120)]);
      const had=!!key&&!!st2.res[key],synced=!!key&&sync2();
      if(synced){
        if(o.stage&&(seen2(st2,key)||/^p-/.test(st2.res[key]||''))){key=null;help=null;}   // 다른 기기가 더 이른 날 본 문장 → 이번 답부터 연습
        // r5(Codex r4 지적 2-T10): 이 기기가 첫 답을 내기 전에 다른 기기의 첫 정답(C ✔·재확인 B ✔)을 받았으면 같은 문장을 다시 요구하지 않고 그 기록 화면으로.
        //  이 입력은 첫 시도 이력(typed)이 아니라 late로 남긴다. 다른 기기의 첫 오답이면 그 단계부터 이어 간다(아래).
        else if(!had&&o.redo&&st2.res[key]===good){cur.late=(cur.late||[]).concat(cur.typed.splice(-1));ta.readOnly=true;return keep2(f,o.redo);}
        else{const s=stageOf(st2.res);if(s>w){w=s;cur.w=w;}
          if(o.stage&&st2.res[key]===bad&&st2.res[o.stage+'w3']){ta.readOnly=true;return keep2(f,answer);}                        // 이미 정답 공개 → 정답 확인
          if(help&&st2.res[key]===bad&&st2.res[help]==='h-ok'){ta.readOnly=true;cur.solved=true;if(!ok)ta.value=c.answer;return keep2(f,right);}}}   // 이미 고쳐 맞힘
      const first=!!key&&!st2.res[key];
      if(ok){ta.readOnly=true;cur.solved=true;if(first)fixMine(key,good);else if(help&&key&&st2.res[key]===bad&&!(o.stage&&st2.res[o.stage+'w3']))fix(st2,help,'h-ok');return (first||help||synced)?keep2(f,right):(save(),right());}
      w++;cur.w=w;
      if(first){fixMine(key,bad);if(o.sched)schedule(st2,o.sched,today);ta.readOnly=true;return keep2(f,w>=3?answer:tip);}   // 첫 답(C ✗·B ✗)과 재확인 예약은 저장 확인 뒤에만 안내
      if(o.stage&&key&&st2.res[key]===bad){if(w>=2)fix(st2,o.stage+'w2','w-2');if(w>=3)fix(st2,o.stage+'w3','w-3');ta.readOnly=true;return keep2(f,w>=3?answer:tip);}
      if(synced){ta.readOnly=true;return keep2(f,w>=3?answer:tip);}
      save();if(w>=3)answer();else tip();};
    ta.oninput=()=>f.enable(!!ta.value.trim()&&!ta.readOnly);f.main('제출',false,submit);
    const last=(cur.typed||[]).slice(-1)[0];
    if(solved){ta.value=okTyped()||c.answer;right();}   // 맞힌 뒤 재개: 채점을 통과한 이 기기 문장, 없으면(다른 기기에서 맞힘) 정답 예문 — 잠긴 칸·'다음'
    else if(w>=3){if(last)ta.value=last;answer();}else if(w>0){if(last)ta.value=last;tip();}
    return f;
  }
  R2.write=(s,done)=>{
    const k=s.id,c=S2[s.sent];
    const late=()=>(cur.late||[]).join(' / ')||undefined;   // r5: 다른 기기의 첫 정답 뒤 이 기기 입력
    if(st2.res[k]==='C-ok')return recorded(s.title,st2.res[k+'_u']?'이 문장은 이미 썼어요.':'이 문장은 처음 쓸 때 혼자 맞혔어요.',[c.answer],()=>done({code:'ok',w:0,typed:(cur.typed||[]).join(' / '),late:late()}));   // r3(Codex r2): 미확인이면 혼자 맞혔다고 단정하지 않음
    const isPr=()=>seen2(st2,k)||/^p-/.test(st2.res[k]||''),practice=isPr();   // 노출됨·미채점 → 연습(첫 노출 성취로 세지 않음, 재확인 예약 없음)
    // r4(Codex r3 지적 1): 다른 기기에서 이미 정답을 낸 연습(p-ok·p-help, '다음' 전에 멈춤)은 같은 문장을 다시 쓰게 하지 않고 '다음'으로. 보기만 한 연습은 직접 쓴다.
    //  끝낼 때의 연습 여부는 그때의 기록으로 다시 본다(화면을 연 뒤 받은 기록으로 연습이 된 경우 — writeScreen2 ②).
    writeScreen2(practice?'본 적 있는 문장':s.title,practice?'전에 한 번 본 문장이에요. '+LEAD10:LEAD10,
      practice?{key:null,solved:/^p-(ok|help)$/.test(st2.res[k]||'')}:{key:k,good:'C-ok',bad:'C-fail',help:'T10h',sched:s.sent,stage:'T10',redo:()=>R2.write(s,done)},
      r=>{const pr=isPr();done({code:pr?(r.right?(r.w===0?'ok':'help'):'fail'):(st2.res[k]==='C-ok'?'ok':'fail'),w:r.w,typed:r.typed,n:r.n,late:late()});});
  };
  // 재확인(B): 이전 날 틀린 E2 문장을 도움 없이 한 번(T6·C 배열 = 배열, T10 = 같은 쓰기 화면 — 대응표 §11-6).
  //  r5(Codex r4 지적 1): 마감하는 회차 = 화면을 연 회차(bkey) — 화면 중 다른 기기가 그 회차를 먼저 마쳐 예약 횟수가 올라가도 '다음'이 새 회차를 만들지 않는다.
  //   다른 기기가 그 회차를 정답(B ✔)으로 마쳤으면 그 기록 화면, 오답이면 그 회차 안에서 이어 간다(남은 기회는 다음 학습일).
  R2.bretry=(sid,done,k0)=>{
    const o2=st2.open,key=k0||(o2&&o2.key==='b:'+sid&&o2.n>0?'B.'+sid+'.'+o2.n:bKey(st2,sid)),fin=code=>done({code,bkey:key});   // r6: 연 회차(open.n)
    if(sid==='t-amelia'){
      if(st2.res[key]==='B-ok')return recorded('지난 문장 다시 쓰기',st2.res[key+'_u']?'이 문장은 이미 썼어요.':'이 문장은 다른 날 혼자 맞혔어요.',[S2[sid].answer],()=>fin('ok'));
      return writeScreen2('지난 문장 다시 쓰기','지난번 문장을 이번엔 혼자 한 번 써 봐요. '+LEAD10,{key,good:'B-ok',bad:'B-fail',redo:()=>R2.bretry(sid,done,key)},()=>fin(st2.res[key]==='B-ok'?'ok':'fail'));
    }
    const sent=S2[sid];
    if(st2.res[key]==='B-ok')return recorded('지난 문장 다시 놓기',st2.res[key+'_u']?'이 문장은 이미 놓았어요.':'이 문장은 다른 날 혼자 맞혔어요.',sent.en,()=>fin('ok'));
    const f=frame('지난 문장 다시 놓기','1/1');
    f.add('<p class="e1-lead">지난번에 살펴본 문장이에요. 이번엔 도움 없이 한 번 놓아 봐요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
    const a=once2(f,sent,{key,good:'B-ok',bad:'B-fail',okText:'맞아요. 다른 날에도 혼자 놓았어요.',onOk:()=>fin('ok'),onFollowed:()=>fin('fail'),
      onBad:x=>x.follow('순서는 이래요. 눌러서 따라 놓아 봐요.'),pre:()=>{if(!st2.res[key])return false;keep2(f,()=>R2.bretry(sid,done,key));return true;}});
    if(st2.res[key]==='B-fail')a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');
  };
  // 고르기(E1 S9 ③ 일반화) — 보기 2~5개·번호 표시 여부·질문/지문 줄. 고른 뒤에는 다시 고르기만 막고 글자는 진하게(.e1-opt:disabled).
  //  첫 선택은 그 자리에서 기록(p-ok/p-fail)·저장 확인 뒤 해설. 해설이 아래 버튼에 가리면 보이게 스크롤.
  function chooseScreen(title,q,onNext){
    const f=frame(title,q.count);f.add(q.top);
    const box=f.add('<div></div>'),fb=f.add('<p class="e1-note" hidden></p>');
    box.innerHTML=q.opts.map((o,i)=>`<button type="button" class="e1-opt" data-i="${i}">${q.num?'①②③④⑤'[i]+' ':''}${esc(o)}</button>`).join('');
    const show=i=>{box.querySelectorAll('button').forEach(x=>x.disabled=true);box.children[q.ans].classList.add('ok');
      if(i>=0&&i!==q.ans)box.children[i].classList.add('no');
      note(f,fb,q.ex,i===q.ans?'ok':'info');f.main('다음',true,onNext);reveal(fb);};
    const was=st2.res[q.key];
    if(/^p-(ok|fail)$/.test(was||''))return show(was==='p-ok'?q.ans:((cur.sel||{})[q.key]?cur.sel[q.key]-1:-1));
    box.querySelectorAll('button').forEach(b=>b.onclick=()=>gate(()=>{
      if(st2.res[q.key])return;const i=+b.dataset.i;cur.sel={...(cur.sel||{}),[q.key]:i+1};
      fix(st2,q.key,'p-'+(i===q.ans?'ok':'fail'));if(q.mine)q.mine(i===q.ans);box.querySelectorAll('button').forEach(x=>x.disabled=true);
      keep2(f,()=>show(i));},f.body));
    f.main('다음',false);
  }
  const Q12=[
    {key:'T12a',count:'1/3',num:true,ans:1,top:"<p class=\"e1-lead\">벨라의 글 일부예요. 질문의 답이 들어 있는 문장을 고르세요.</p><p class=\"e1-sent\" style=\"font-size:18px\">What did Bella's brother want her to do?</p><p class=\"e1-ko\" style=\"font-size:16px;font-weight:600\">벨라의 남동생은 벨라가 무엇을 하기를 원했나요?</p>",
      opts:['The copy was spread here and there, and I was so embarrassed.','My brother wanted me to delete the picture of him.','I apologized to him, and I deleted my post immediately.','However, the copies still remain online.'],
      ex:'②예요. 질문은 남동생이 원한 것을 묻고 있어요. ②는 남동생이 원한 일, ③은 그 뒤에 실제로 일어난 일을 말해요.'},
    {key:'T12b',count:'2/3',num:true,ans:0,top:'<p class="e1-sent" style="font-size:18px">My brother wanted me to delete the picture of him.</p><p class="e1-lead" style="text-align:center">사진을 지우는 사람은 누구예요?</p>',
      opts:['벨라(me)','남동생(my brother)'],ex:'to delete 바로 앞의 me(벨라)가 지워요. 남동생은 원한 사람이에요.'},
    {key:'T12c',count:'3/3',num:true,ans:2,top:'<p class="e1-lead">지훈의 글에 Happy Digital Laundry가 답했어요.</p><p class="e1-sent" style="font-size:17px">Then, we asked the ad company to delete your information, and they did.</p><p class="e1-lead" style="text-align:center">정보를 지운 쪽은 누구예요?</p>',
      opts:['Happy Digital Laundry(we)','지훈(you)','광고 회사(the ad company)'],ex:"asked 다음의 the ad company가 to delete를 해요. 사람 자리에 회사도 올 수 있어요. 지훈이 쓴 'I want to delete it.'은 사람 자리가 없어서, 지훈이 직접 지우고 싶다는 뜻이에요."}
  ];
  const DLG13="<div class=\"e1-dlg\"><p><b>A</b>I saw you <span class=\"e1-blank sm\">①</span> with your sister yesterday.</p><p><b>B</b>Oh, you did? We ran about 5 km together.</p><p><b>A</b>Wasn't it hard? I know that she runs very fast.</p><p><b>B</b>That's true, so I asked her <span class=\"e1-blank sm\">②</span> slowly.</p></div>";
  const Q13=[
    {key:'T13a',count:'1/2',num:false,ans:0,top:'<p class="e1-lead">대화를 읽고, 빈칸에 알맞은 말을 고르세요.</p>'+DLG13+'<p class="e1-lead">첫째 빈칸에 들어갈 말을 고르세요.</p>',
      opts:['running','to run'],ex:'saw 다음 사람 뒤에는 to를 쓰지 않아요. 보고 들은 일이 한창일 때는 -ing예요.'},
    {key:'T13b',count:'2/2',num:false,ans:1,top:'<p class="e1-lead">대화를 읽고, 빈칸에 알맞은 말을 고르세요.</p>'+DLG13+'<p class="e1-lead">둘째 빈칸에 들어갈 말을 고르세요.</p>',
      opts:['run','to run'],ex:'asked 다음 사람 뒤에는 to + 할 일이에요. 부탁한 일은 천천히 달리는 거예요.'}
  ];
  const Q14={key:'T14b',count:'2/2',num:true,ans:2,top:'<p class="e1-lead">보기마다 어법에 맞는지 따져 보고, 어법에 맞는 문장을 모두 담은 번호를 고르세요.</p><div class="e1-dlg box"><p class="bx">〈보기〉</p><p>(A) Luke told us to be careful.</p><p>(B) I heard him to play the violin.</p><p>(C) Daniel asked Mia catch the spider in his room.</p><p>(D) We heard Dad singing in the kitchen.</p><p>(E) Mr. Brown asked her to reading a book to the class.</p></div>',
    opts:['(A), (C)','(B), (D)','(A), (D)','(A), (D), (E)','(B), (C), (E)'],
    ex:'③ (A)·(D)예요. (B) heard 다음 사람 뒤에는 to를 쓰지 않아요(playing). (C) asked 다음 사람 뒤에는 to가 필요해요(to catch). (E) to 다음에는 -ing를 붙이지 않고 read 그대로 써요(to read).'};
  // T12 본문에서 찾기(3문항)·T13 알맞은 말(2문항). cur.phase = 지금 문항 번호. 다른 기기·나갔다 오면 아직 안 고른 문항부터.
  R2.choose=(s,done)=>{
    const Q=s.id==='T12'?Q12:Q13;
    const resOf=()=>Object.fromEntries(Q.map(q=>[q.key,(st2.res[q.key]||'').slice(2)]));
    const go=i=>chooseScreen(s.title,Q[i],()=>i+1<Q.length?subStep({phase:i+1},()=>go(i+1)):done({res:resOf(),sel:{...(cur.sel||{})}}));
    let i=typeof cur.phase==='number'?cur.phase:Q.findIndex(q=>!st2.res[q.key]);if(i<0)i=Q.length-1;
    go(i);
  };
  // T14 시험처럼: ① 단어 배열(D층 — 첫 제출만) → ② 어법 고르기(연습). ①만 하고 나갔으면 다음에 첫 답을 보존한 채 ②부터(Codex 착수 의견 2).
  // r2(Codex r1 HOLD 4): 오답 수(T14a0 첫째·T14a1 둘째·T14a=D-fail 셋째)와 따라 놓기 마침(T14af)을 저장해, 기기를 바꿔도 남은 도움 단계부터 이어 간다
  //  (셋째 오답 뒤 → 따라 놓기, 따라 놓기를 마친 뒤 → ②). 처음 어긋난 자리(cur.t)는 같은 기기 화면 정보라 다른 기기에서는 공식 줄만.
  const wrong14=()=>st2.res.T14a==='D-fail'?3:st2.res.T14a1?2:st2.res.T14a0?1:0;
  // 후속 r1(v215 — E4·E5 r3와 같음): 이 기기에서 직접 낸 첫 답(T14 ①·②) — 문항마다 처음 한 번만. 진도(st2)에 두되 공유 기록(encode2)에는 넣지 않고,
  //  받은 기록으로 진도를 바꿔도(adopt2) 이어 받는다. 결과 토큰(token2)은 이 칸으로만 채점한다.
  const mine1=(k,ok)=>{const M=st2.mine||(st2.mine={});if(!M[k])M[k]=ok?'ok':'fail';};
  R2.exam=(s,done)=>{
    cur.r=cur.r||{};
    const e=S2.exam,toB=()=>subStep({phase:'b'},B);
    const B=()=>chooseScreen(s.title,{...Q14,mine:ok=>mine1('T14b',ok)},()=>done({d:cur.r.d||(st2.res.T14a||'').slice(2),dw:cur.r.dw!==undefined?cur.r.dw:wrong14(),b:(st2.res.T14b||'').slice(2)||undefined,sel:(cur.sel||{}).T14b}));
    const A=()=>{
      const f=frame(s.title,'1/2');f.add('<p class="e1-lead">우리말에 맞게 단어를 순서대로 놓으세요.</p>');f.add(`<p class="e1-ko">${esc(e.ko)}</p>`);
      let w=Math.max(cur.w||0,wrong14());
      const TIPS=['누가 원했나요? My brother부터 놓아 봐요.','wanted 다음은 그 일을 할 사람(me), 그다음 to + 할 일.',"'자기가 나온 그 사진'은 the picture를 먼저 놓고 of him을 뒤에 붙여요."];
      // 낸 답이 처음 어긋난 자리로 도움을 고른다(원고 v1.3): 1~2번째(My brother) ① · 3~6번째(wanted me to delete) ② · 7~10번째(the picture of him) ③
      const tipOf=order=>{const k=order.findIndex((v,j)=>v!==j);return k<2?0:k<6?1:2;};
      let fl=null;const formula=()=>{if(fl)return;const t=f.body.querySelector('.e1-tiles');fl=document.createElement('p');fl.className='e1-note info';fl.textContent=E2_FORMULA;t.after(fl);};   // ① 첫 제출 뒤 첫 줄(원고 v1.1)
      const a=arrange(f,{chunks:e.words,mix:e.mix,words:true,
        onCheck:(ok,order)=>{
          a.lock();
          mine1('T14a',ok);   // 후속 r1: 받은 기록을 읽기 전에 — 제출 직후 '이미 놓았어요'가 떠도 이 기기 첫 배열의 정오는 이 기기 점수
          // r5(Codex r4 지적 2-T14 ①): 제출을 확정하기 전에 받은 기록과 합친다 — 다른 기기에서 ①을 이미 마쳤으면 그 결과로 ②, 정답 어순을 이미 공개했으면
          //  따라 놓기(새 정답·2/2 없음), 오답만 받았으면 그 단계부터(이번 정답 = 도움 후 완성).
          if(!st2.res.T14a&&sync2()){const d=st2.res.T14a,sw=wrong14();
            if(d==='D-ok'||d==='D-help'||(d==='D-fail'&&st2.res.T14af))return keep2(f,()=>{formula();const t=f.body.querySelector('.e1-tiles');if(t)t.hidden=true;
              a.solved();   // r6(Codex r5 지적 1): 이 기기에서 놓은 순서 대신 저장된 교과서 정답 어순을 보여 준다(틀린 어순이 맞은 것처럼 남지 않게)
              const n=a.note('이 문장은 이미 놓았어요.','ok');f.main('다음',true,toB);reveal(n);});
            if(d==='D-fail'){w=Math.max(w,3);cur.w=w;cur.r.d='fail';cur.r.dw=w;return keep2(f,()=>{formula();a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');});}
            if(sw>w){w=sw;cur.w=w;}}
          if(ok){cur.r.d=w===0&&!st2.res.T14a0?'ok':'help';cur.r.dw=w;fixMine('T14a','D-'+cur.r.d);}
          else{w++;cur.w=w;cur.t=tipOf(order||[]);fix(st2,'T14a0','D-wrong');if(w>=2)fix(st2,'T14a1','D-wrong');if(w>=3){cur.r.d='fail';cur.r.dw=w;fixMine('T14a','D-fail');}}
          keep2(f,()=>{formula();
            if(ok){const t=f.body.querySelector('.e1-tiles');if(t)t.hidden=true;   // 정답 저장 뒤 타일판 숨김 — 이 화면만(공통 arrange 그대로)
              const n=a.note(cur.r.d==='ok'?'맞아요! 교과서 문장을 혼자 놓았어요.':'맞아요. 문장을 완성했어요.','ok');f.main('다음',true,toB);reveal(n);return;}
            if(w>=3){a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');return;}
            a.unlock();a.reset();a.note(TIPS[cur.t|0]);});},
        onFollowed:()=>{cur.r.d='fail';cur.r.dw=w;fix(st2,'T14af','f-ok');keep2(f,toB);}});
      if(w>=3){formula();a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');}else if(w>0){formula();if(cur.t!==undefined)a.note(TIPS[cur.t]);}
    };
    if(cur.phase==='b'||st2.res.T14b)return B();
    const a14=st2.res.T14a;
    if(a14==='D-ok'||a14==='D-help'||(a14==='D-fail'&&st2.res.T14af))return B();   // D-fail이고 따라 놓기 전이면 ①의 따라 놓기부터
    A();
  };
  R2.end=(s,done)=>done({});

  // ───────────────────────── 흐름 ─────────────────────────
  function token(item,r,st0){
    const RS=(st0||st).res;r=r||{};   // r6: 상태를 받으면 그 상태로(마감 로그·adopt). b는 마감한 차례(bkey)가 있으면 그 키.
    if(item.type==='b'){const t=r.bkey&&RS[r.bkey]?r.bkey:Object.keys(RS).filter(k=>k.startsWith('B.'+item.sid+'.')).sort().pop();return {t:`${t}[${RS[t]}]`,g:true,ok:RS[t]==='B-ok'};}
    if(item.type==='dc'){const v=RS[item.id]||'C-fail';if(/^p-/.test(v))return {t:`${item.id}[${v.replace('-','=')};def=1;seen=1]`,g:true,ok:v==='p-ok'};return {t:`${item.id}[${v.replace('-','=')};def=1]`,g:true,ok:v==='C-ok'};}
    const s=SEQ[item.idx],v=RS[s.id];
    switch(s.kind){
      case 'probe':return {t:`P0[probe=${r.probe};stage=${r.stage}]`,g:false};
      case 'blank':return {t:`S4[memo=${r.memo}]`,g:true,ok:r.memo==='solo'};
      // r5: 다른 기기에서 마감해 이 기기 화면 정보(w·tries·sel)가 없으면 '-'
      case 'arrange':if(/^p-/.test(v||''))return {t:`${s.id}[${v.replace('-','=')};seen=1]`,g:true,ok:v==='p-ok'};return {t:`${s.id}[${v.replace('-','=')}${s.layer==='A'?';w='+(r.w===undefined?'-':r.w):''}]`,g:true,ok:/-ok$/.test(v)};
      case 'check':return {t:`${s.id}[${v.replace('-','=')}]`,g:true,ok:v==='B-ok'};
      case 'write':return {t:`${s.id}[${v.replace('-','=')};tries=${r.w===undefined?'-':(r.w||0)+1};typed=${encodeURIComponent(r.typed||'')}${seenOn({res:RS})?';orig='+seenOn({res:RS}):''}]`,g:true,ok:v==='C-ok'};   // v212: orig = 본문 문장을 본 날(맨 뒤)
      case 'practice':return {t:`${s.id}[p=${r.code};w=${r.w||0}${r.write?';write='+r.write:''}]`,g:true,ok:r.code==='ok'};
      // r5: ②·③ 중 풀지 않은 것은 p=-(미실시) — 정답률 플래그·분모에서 뺀다
      case 'exam':{const d=RS.S9a||'D-'+r.d,ex=[];if(r.b)ex.push(r.b==='ok');if(r.c)ex.push(r.c==='ok');
        const md=RS.S9u!=='u-legacy'&&/^m-[AB]$/.test(RS.S9m||'')?';m='+RS.S9m.slice(2):'';   // v212: A/B(B = 제시된 조건으로 추가 힌트 없이 배열함)
        return {t:`S9a[${d.replace('-','=')};w=${r.dw===undefined?'-':r.dw}${md}], S9b[p=${r.b||'-'}], S9c[p=${r.c?r.c+';sel='+(r.sel===undefined?'-':r.sel):'-'}]`,g:true,ok:d==='D-ok',extra:ex};}
      default:return {t:`${s.id}[seen]`,g:false};
    }
  }
  const DAY_NOTE='날이 바뀌어서 오늘 첫 문장부터 시작해요.',DAY_END="오늘 영어는 여기까지예요.";
  // r6(Codex r5 지적 2): 이 기기가 그 회차에 첫 제출을 낸 채(마감 전) 나간 재확인 화면은 같은 날 다시 열면 그 화면으로 이어 간다.
  //  다른 기기가 같은 회차를 마쳐 예약의 마지막 날이 오늘이 되어도(resumable2는 새로 열지 않음) 열린 문항을 다른 화면이 덮어 이 기기 제출이 마감·기록되지 않는 일을 막는다.
  //  이 기기가 냈는지는 풀던 화면의 첫 제출(cur.own)로만 안다 — 다른 기기 결과만 받은 열린 화면은 r5처럼 다시 열지 않는다. 회차는 연 회차 그대로(더 쓰지 않음).
  function ownOpen2(s2st,c,date){const o=s2st&&s2st.open;if(!o||o.date!==date||!c||c.key!==o.key||!c.own||(s2st.done||[]).includes(date))return null;
    const it=itemOf2(o.key);if(!it||it.type!=='b')return null;const g=gradedOpen2(s2st);return g&&c.own[g.r.bkey]?it:null;}
  const curKey=it=>it.track===2?keyOf2(it):xOf(it.track)?xOf(it.track).keyOf(it):keyOf(it);
  function render(item,opt){
    const t2=item.track===2,tx=xOf(item.track),key=curKey(item);
    // r5: 바꾸기 전 값(풀던 화면·열린 문항·노출 표시) — 저장 실패·화면 오류면 모두 되돌린다(열지 못한 문항은 열린 문항·본 적 있음이 아님).
    const was={cur,open:st.open,open2:st2.open,ev:st.evidence_at,eid:st.event_id,ev2:st2.evidence_at,eid2:st2.event_id,seen:null,add2:[],sit2,
      xs:XB.map(X=>({open:X.H.st.open,ev:X.H.st.evidence_at,eid:X.H.st.event_id,sit:X.H.sit,add:[]}))};
    const undo=()=>{cur=was.cur;st.open=was.open;st2.open=was.open2;sit2=was.sit2;
      if(was.seen){delete st.res[was.seen+'x'];st.evidence_at=was.ev;st.event_id=was.eid;}
      if(was.add2.length){for(const k of was.add2)delete st2.res[k];st2.evidence_at=was.ev2;st2.event_id=was.eid2;}
      XB.forEach((X,i)=>{const v=was.xs[i],S=X.H.st;S.open=v.open;X.H.sit=v.sit;if(v.add.length){for(const k of v.add)delete S.res[k];S.evidence_at=v.ev;S.event_id=v.eid;}});};
    if(!cur||cur.key!==key)cur=t2?{key,item,track:2,w:0,stage:0}:tx?{key,item,track:tx.TR,w:0,stage:0}:{key,item,w:0,stage:0};else cur.item=item;
    // r4: 열려 있던 C 문장이 제출 없이 다른 화면으로 밀림 → 노출됨·미채점(E1·E2 각자). 다른 묶음의 화면을 열면 그 묶음의 열린 문항은 닫는다.
    const sid=st.open?seenTarget(st,st.open.key,key):null;
    if(sid){st.res[sid+'x']='C-seen';was.seen=sid;stamp();}
    // r2(Codex r1 HOLD 1): 같은 E2 C 문장이라도 열린 날이 오늘이 아니면(어제 열고 제출 없이 닫음) 노출됨·미채점 → 연습 화면. 같은 날 다시 열면 첫 시도 그대로.
    //  r3: 같은 날 제출 없이 다른 화면으로 밀린 경우만 C-push(같은 날 다른 기기의 첫 답과 선후를 알 수 없는 유일한 경우), 그 밖 노출은 C-seen.
    const mark2=(k,v)=>{st2.res[k]=v;was.add2.push(k);stamp2();};
    if(st2.open){const p=seenTarget2(st2,st2.open.key,key);
      if(p)mark2(p+'x',st2.open.date===today?'C-push':'C-seen');
      else if(st2.open.date!==today){const q=seenTarget2(st2,st2.open.key,null);if(q)mark2(q+'x','C-seen');}}
    // r3(Codex r2 HOLD 1): C 문장 첫 시도 화면을 열면 첫 노출일(Tno)을 남기고 바로 공유 대상으로(다른 기기가 다음 날 첫 시도로 받지 않게).
    //  다른 기기에서 받은 첫 노출일이 오늘보다 이르면 이 기기에서 처음 열어도 노출됨·미채점 → 연습 화면.
    // E4·E5: 열린 C 문장이 제출 없이 다른 화면으로 밀림 → E2와 같은 표시(같은 날 C-push · 날이 지남 C-seen) · 첫 시도 화면을 열면 첫 노출일.
    XB.forEach((X,i)=>{const S=X.H.st,mk=(k,v)=>{S.res[k]=v;was.xs[i].add.push(k);X.stamp();};
      if(S.open){const p=X.seenTarget(S,S.open.key,key);
        if(p)mk(p+'x',S.open.date===today?'C-push':'C-seen');
        else if(S.open.date!==today){const q=X.seenTarget(S,S.open.key,null);if(q)mk(q+'x','C-seen');}}
      if(X===tx){const cx=X.cBase(key);if(cx&&!S.res[cx]&&!S.res[cx+'x']){const o=X.oDay(S.res,cx);if(o&&o<today)mk(cx+'x','C-seen');else if(!o)mk(cx+'o','o-'+today);}}});
    const cb=t2?cBase2(key):null;
    if(cb&&!st2.res[cb]&&!st2.res[cb+'x']){const o=oDay2(st2.res,cb);if(o&&o<today)mark2(cb+'x','C-seen');else if(!o)mark2(cb+'o','o-'+today);}
    for(const X of XB)if(X!==tx&&X.H.st.open)X.H.st.open=null;
    if(tx){const S=tx.H.st;if(st.open)st.open=null;if(st2.open)st2.open=null;if(!S.open||S.open.key!==key||S.open.date!==today)S.open={key,date:today};
      if(item.type==='b'&&!(S.open.n>0))S.open.n=tx.bRound(S,item.sid);
      tx.sitOf();}
    else if(t2){if(st.open)st.open=null;if(!st2.open||st2.open.key!==key||st2.open.date!==today)st2.open={key,date:today};
      if(item.type==='b'&&!(st2.open.n>0))st2.open.n=bRound2(st2,item.sid);   // r6(Codex r5 지적 2): 연 회차를 열린 문항에 남김(이 기기 저장만 — 공유 기록 형식 그대로) · r7(Codex r6 검토): 회차 = bRound2(받은 기록의 열린 화면을 같은 날 다시 열 때 예약 횟수+1이 아님)
      s2();}
    else{if(st2.open)st2.open=null;if(!st.open||st.open.key!==key||st.open.date!==today)st.open={key,date:today};}
    // r4: 배정과 열린 문항을 함께 저장. 저장하지 못하면 새 화면을 열지 않고 멈춘다(다시 저장 → 그 화면).
    if(!save()){undo();return saveBlocked(()=>render(item,opt));}
    tStart();
    const fin=r=>finishItem(item,r);
    try{
      if(tx){if(item.type==='b')tx.R.bretry(item.sid,fin);else if(item.type==='dc')tx.R.arrange(tx.SEQ[tx.IDX[item.id]],fin);else{const s=tx.SEQ[item.idx];tx.R[s.kind](s,fin);}}
      else if(t2){if(item.type==='b')R2.bretry(item.sid,fin);else if(item.type==='dc')R2.arrange(SEQ2[IDX2[item.id]],fin);else{const s=SEQ2[item.idx];R2[s.kind](s,fin);}}
      else if(item.type==='b')R.bretry(item.sid,fin);else if(item.type==='dc')R.arrange(SEQ[IDX[item.id]],fin);else{const s=SEQ[item.idx];R[s.kind](s,fin);}
      // r5: 날짜가 바뀌어 다른 문항으로 옮겼을 때만 안내 한 줄(확인 버튼 없음 — 바로 풀 수 있게)
      if(opt&&opt.dayNote){const b=document.querySelector('#e1-page .e1-body');if(b){const n=document.createElement('p');n.className='e1-note info e1-day';n.textContent=DAY_NOTE;const c=b.querySelector('.e1-count');if(c)c.after(n);else b.prepend(n);}}}
    catch(e){console.error('[e1-render]',e);undo();save();const f=frame('영어','');f.add('<p class="e1-note">화면을 여는 데 문제가 생겼어요. 홈으로 돌아가 다시 눌러 주세요.</p>');f.main('홈으로',true,()=>exit());}
  }
  // 상태를 저장하지 못하면 다음 화면으로 넘어가지 않는다(앱 공통 안내: "이 문항에서 멈춰 있어요").
  function saveBlocked(retry){
    const f=frame('저장 확인','');
    f.add('<p class="e1-note e1-blocked">기록을 저장하지 못해서 여기서 멈춰 있어요. 저장 공간을 비운 뒤 \'다시 저장\'을 눌러 주세요. 잘 안 되면 어른에게 알려 주세요.</p>');
    f.main('다시 저장',true,()=>{if(save())(retry||next)();});
  }
  function finishItem(item,r){
    if(!rollDay())return saveBlocked(()=>finishItem(item,r));   // r6
    flushTime();
    if(item.track===2){if(cur&&cur.track===2&&cur.own)r={...r,own:cur.own};st2=complete2(st2,today,item,r);st2.open=null;stamp2();s2().items.push(token2(item,r,st2));}
    else if(xOf(item.track)){const X=xOf(item.track);if(cur&&cur.track===X.TR&&cur.own)r={...r,own:cur.own};X.H.st=X.complete(X.H.st,today,item,r);X.H.st.open=null;X.stamp();X.sitOf().items.push(X.token(item,r,X.H.st));}   // r5: 이 기기 첫 제출(미확인 행)
    else{st=complete(st,today,item,r);st.open=null;stamp();const tk=token(item,r);if(sit)sit.items.push(tk);}
    cur=null;
    if(!save())return saveBlocked();
    next();
  }
  function next(){
    if(!rollDay())return saveBlocked();   // r6
    const a=advanceK(st,st2,E4X.H.st,E5X.H.st,today);
    if(a.st1!==st||a.st2!==st2||a.st4!==E4X.H.st||a.st5!==E5X.H.st){if(a.st1!==st){st=a.st1;stamp();}if(a.st2!==st2){st2=a.st2;stamp2();}if(a.st4!==E4X.H.st){E4X.H.st=a.st4;E4X.stamp();}if(a.st5!==E5X.H.st){E5X.H.st=a.st5;E5X.stamp();}if(!save())return saveBlocked();}
    const p=a.p;
    if(p.type==='stop')return endDay(p.reason);
    render(p);
  }
  // r4 날짜 배정(아래 큰 버튼·화면 다시 보임 공통 — r3 reroute 대체): 날짜가 바뀌었으면 앱을 새로 열 때와 같은 그날 배정(S8W·T10 먼저 등).
  //  같은 화면이면 열린 문항 날짜를 새 날짜로 저장한 뒤 이어 간다(그 제출은 새 날짜로 처리). 저장 실패면 멈춤(다시 누르면 저장 → 이어 감).
  //  다른 화면이면 그 화면을 연다(그 제출은 처리하지 않음). 그날 할 것이 없으면 하루 끝.
  // r6 지적 1·2·4 — 채점한 날 마감, 한 경로(화면 중): 날짜가 바뀐 뒤 이미 채점한 열린 문항을 채점한 날(open.date)로 마감한다(E1·E2 각자).
  //  마감 로그(id 날짜+문항)는 진도와 함께 먼저 저장(held) → 저장 성공 뒤에만 로그 쓰기·전송. 저장 실패면 마감 전으로 되돌리고 false(멈춤).
  function settleClose(){
    const d=PA_PROGRESS.day();
    const g=st&&st.open&&st.open.date!==d?gradedOpen(st):null,g2=st2&&st2.open&&st2.open.date!==d?gradedOpen2(st2):null;
    const gx=XB.map(X=>{const S=X.H.st;return S&&S.open&&S.open.date!==d?X.gradedOpen(S):null;});
    if(!g&&!g2&&!gx.some(Boolean))return true;
    const was={st,st2,cur,held:held.slice(),held2:held2.slice(),xs:XB.map(X=>({st:X.H.st,held:X.H.held.slice()}))};
    if(g){const c=closeOne(st,g,cur&&cur.track===2?null:cur);st=c.st;stamp();if(!preview&&!held.some(x=>x.id===c.log.id))held.push(c.log);}
    if(g2){const c=closeOne2(st2,g2,cur&&cur.track===2?cur:null);st2=c.st;stamp2();if(!preview&&!held2.some(x=>x.id===c.log.id))held2.push(c.log);}
    XB.forEach((X,i)=>{if(!gx[i])return;const c=X.closeOne(X.H.st,gx[i],cur&&cur.track===X.TR?cur:null);X.H.st=c.st;X.stamp();if(!preview&&!X.H.held.some(x=>x.id===c.log.id))X.H.held.push(c.log);});
    cur=null;
    if(!save()){st=was.st;st2=was.st2;cur=was.cur;held=was.held;held2=was.held2;XB.forEach((X,i)=>{X.H.st=was.xs[i].st;X.H.held=was.xs[i].held;});return false;}
    flushHeld();share();kick();
    return true;
  }
  // held(진도와 함께 저장된 미기록 로그)를 결과 로그에 쓴다. 쓴 것만 held에서 뺀다(같은 id는 writeLog가 한 번만 받음).
  function flushHeld(){if(preview)return;let ch=false;
    if(held.length){const keep=held.filter(x=>!tryLog(x));if(keep.length!==held.length){held=keep;ch=true;}}
    if(held2.length){const keep=held2.filter(x=>!tryLog2(x));if(keep.length!==held2.length){held2=keep;ch=true;}}
    for(const X of XB)if(X.H.held.length){const keep=X.H.held.filter(x=>!X.tryLog(x));if(keep.length!==X.H.held.length){X.H.held=keep;ch=true;}}
    if(ch)save();}
  function kick(){try{PA_PROGRESS.sync();}catch(_){}try{if(typeof scheduleRecordSync==='function')scheduleRecordSync(0);}catch(_){}}
  function syncDay(cont){
    if(!live||!today||PA_PROGRESS.day()===today)return cont?cont():undefined;
    // r6: 마감(한 경로) → 전날 앉은 자리 닫기. 둘 다 저장되기 전에는 날짜를 넘기지 않고 멈춘다(로그·전송 없음).
    if(!settleClose())return holdHere();
    if(!rollDay())return holdHere();
    const a=advanceK(st,st2,E4X.H.st,E5X.H.st,today);
    if(a.st1!==st){st=a.st1;stamp();}if(a.st2!==st2){st2=a.st2;stamp2();}if(a.st4!==E4X.H.st){E4X.H.st=a.st4;E4X.stamp();}if(a.st5!==E5X.H.st){E5X.H.st=a.st5;E5X.stamp();}
    const p=a.p;
    if(p.type==='stop')return endDay(p.reason);
    if(cur&&curKey(p)===cur.key){
      const px=xOf(p.track);if(px){const S=px.H.st;if(S.open&&S.open.key===cur.key&&S.open.date!==today&&px.seenTarget(S,cur.key,null))return render(p,{dayNote:true});}
      // r2: 날짜가 바뀐 채 열려 있던 E2 C 문장(첫 제출 전)은 그대로 이어 받지 않고 다시 연다 → render가 노출됨·미채점으로 표시하고 연습 화면.
      if(p.track===2&&st2.open&&st2.open.key===cur.key&&st2.open.date!==today&&seenTarget2(st2,cur.key,null))return render(p,{dayNote:true});
      if(p.track===2)st2.open={key:cur.key,date:today};else if(px)px.H.st.open={key:cur.key,date:today};else st.open={key:cur.key,date:today};
      if(!save())return holdHere();
      return cont?cont():undefined;
    }
    render(p,{dayNote:true});
  }
  // 하루 끝(원고 E2 v1.3 §6·§10 — E1·E2 공통 화면 하나). E1을 마치고 남은 시간에 E2를 이어 가는 날은 planJ가 E2 화면을 주므로 여기 오지 않는다.
  function endDay(reason){
    flushTime();
    const e4o=e4Open(st,st2),xDone=XB.map(X=>active(X.H.st,today)&&X.fin(X.H.st));   // E4·E5 완료(원고 E4E5 §6: 그 묶음 순서·시험처럼·이월 C·재확인 B가 모두 끝난 날)
    const e2Done=active(st2,today)&&e2Fin(st2),allDone=e2Done&&e1Fin(st)&&(!e4o||XB.every(X=>X.fin(X.H.st)));   // E4가 열린 뒤에는 E4·E5까지 끝나야 '다음 묶음' 문장
    if(active(st,today)&&!st.done.includes(today)){st=stopDay(st,today);stamp();}
    if(active(st2,today)&&!st2.done.includes(today)){st2=stopDay(st2,today);stamp2();}
    for(const X of XB)if(active(X.H.st,today)&&!X.H.st.done.includes(today)){X.H.st=stopDay(X.H.st,today);X.stamp();}
    cur=null;st.open=null;st2.open=null;for(const X of XB)X.H.st.open=null;
    if(!save())return saveBlocked(()=>endDay(reason));   // r4: 하루 끝 기록을 저장하지 못하면 끝 화면 대신 멈춤
    if(!closeSitting(reason))return saveBlocked(()=>endDay(reason));   // r6
    live=false;timer=null;
    const f=frame('오늘 영어 끝','');
    const msg=e2Done?'둘째 묶음을 모두 마쳤어요.'+(allDone?' 다음 묶음을 준비하고 있어요.':''):reason==='end'?'첫 묶음을 모두 마쳤어요. 다음 묶음을 준비하고 있어요.':reason==='wait'?'다음 영어를 준비하고 있어요.':'오늘 영어는 여기까지예요.';
    // E4·E5를 모두 마친 날 = '오늘 영어는 여기까지예요.' + 줄 바꿈 + '셋째·넷째 묶음을 모두 마쳤어요.'(원고 v1.2 — E5 뒤 '다음 묶음' 문장 없음, JH 11/24)
    const xi=xDone.lastIndexOf(true),lines=xi>=0?[DAY_END,XB[xi].done]:e4o&&reason==='end'?[DAY_END,E5X.done]:null;
    f.add(lines?`<p class="e1-done">${lines.map(esc).join('<br>')}</p>`:`<p class="e1-done">${esc(msg)}</p>`);f.main('홈으로',true,()=>exit());
  }
  // r6: 로그 한 줄 계산(순수 함수) — GAS v25 행 합치기 재계산과 같은 규칙(sim에서 대조).
  function logRecord(s){
    const items=s.items,graded=items.filter(x=>x.g);
    const flags=graded.flatMap(x=>[x.ok,...(x.extra||[])]);const total=flags.length,correct=flags.filter(Boolean).length;
    const ts=typeof newQuizTimestamp==='function'?newQuizTimestamp():new Date().toISOString();
    const log={lesson:'eng_fin_e1',subject:'english',date:s.date,session_type:'english_final',support_session_id:s.id,
      event_id:(typeof PA_CURRICULUM!=='undefined'?PA_CURRICULUM:'pa')+':english:'+s.id+':complete',
      total:total||items.length,correct,percentage:total?Math.round(100*correct/total):0,duration_sec:Math.round(s.sec||0),
      weak:graded.filter(x=>!x.ok).map(x=>x.t.split('[')[0]).join(', '),type_breakdown:'E1:'+correct+'/'+total,hint_count:0,
      metrics:{first_attempt_rate:total?Math.round(100*correct/total):null,condition_compliance:null,arrange_success:null,arrange_count:0},
      condition_miss:'',omr_miss:'',time_complete:'',
      details:`[E1;track=${s.track};stop=${s.reason};ptr=${s.ptrId}] `+items.map(x=>x.t).join(', '),
      questions:[],timestamp:ts,partial:s.reason==='exit'||s.reason==='dayroll'};
    return log;
  }
  function writeLog(s){
    const logs=JSON.parse(PA_STORAGE.getItem(LOG_KEY)||'[]');if(!Array.isArray(logs))throw Error('invalid-logs');
    if(logs.some(x=>x&&x.support_session_id===s.id))return;
    const log=logRecord(s);logs.push(log);
    const ok=typeof storeRecordValue==='function'?storeRecordValue(LOG_KEY,JSON.stringify(logs)):(PA_STORAGE.setItem(LOG_KEY,JSON.stringify(logs)),true);
    if(!ok)throw Error('storage');
  }
  const tryLog=s=>{try{writeLog(s);return true;}catch(e){console.warn('[e1-log]',e&&e.message);return false;}};
  // E2 결과 로그(quiz_logs_eng_fin_e2, lesson eng_fin_e2) = 일반 로그(제출 이력, GAS는 사건ID 중복만 거름 — 원고 §10 (b)).
  function logRecord2(s){
    const log=logRecord({...s,track:0});
    const items=s.items,graded=items.filter(x=>x.g),flags=graded.flatMap(x=>[x.ok,...(x.extra||[])]),total=flags.length,correct=flags.filter(Boolean).length;
    // r6(Codex r5 지적 4): 이 기기 첫 제출이 없는 미확인 행(nd)은 전체·유형별 분모에서 뺀다 — 채점한 것이 없을 때 문항 수로 채우는 공통 규칙(total||items.length)에서도 제외.
    return {...log,total:total||items.filter(x=>!x.nd).length,lesson:'eng_fin_e2',type_breakdown:'E2:'+correct+'/'+total,details:`[E2;stop=${s.reason};ptr=${s.ptrId}] `+items.map(x=>x.t).join(', ')};
  }
  function writeLog2(s){
    const logs=JSON.parse(PA_STORAGE.getItem(LOG_KEY2)||'[]');if(!Array.isArray(logs))throw Error('invalid-logs');
    if(logs.some(x=>x&&x.support_session_id===s.id))return;
    const log=logRecord2(s);logs.push(log);
    const ok=typeof storeRecordValue==='function'?storeRecordValue(LOG_KEY2,JSON.stringify(logs)):(PA_STORAGE.setItem(LOG_KEY2,JSON.stringify(logs)),true);
    if(!ok)throw Error('storage');
  }
  const tryLog2=s=>{try{writeLog2(s);return true;}catch(e){console.warn('[e2-log]',e&&e.message);return false;}};
  // 앉은 자리 닫기 — r6: 결과 로그를 진도와 함께 먼저 저장(held) → 저장 성공 뒤에만 로그 쓰기·전송. 저장 실패면 되돌리고 false. E1·E2 앉은 자리 각자.
  function closeSitting(reason){
    if(!sit&&!sit2&&!XB.some(X=>X.H.sit))return true;
    if(preview){sit=null;sit2=null;for(const X of XB)X.H.sit=null;return true;}
    const was={sit,sit2,held:held.slice(),held2:held2.slice(),xs:XB.map(X=>({sit:X.H.sit,held:X.H.held.slice()}))};
    if(sit){const s={...sit,reason:sit.reason||reason,track:st.track,ptrId:(SEQ[st.ptr]||{}).id};sit=null;if(s.items.length&&!held.some(x=>x.id===s.id))held.push(s);}
    if(sit2){const s={...sit2,reason:sit2.reason||reason,ptrId:(SEQ2[st2.ptr]||{}).id};sit2=null;if(s.items.length&&!held2.some(x=>x.id===s.id))held2.push(s);}
    for(const X of XB)if(X.H.sit){const s={...X.H.sit,reason:X.H.sit.reason||reason,ptrId:(X.SEQ[X.H.st.ptr]||{}).id};X.H.sit=null;if(s.items.length&&!X.H.held.some(x=>x.id===s.id))X.H.held.push(s);}
    if(!save()){sit=was.sit;sit2=was.sit2;held=was.held;held2=was.held2;XB.forEach((X,i)=>{X.H.sit=was.xs[i].sit;X.H.held=was.xs[i].held;});return false;}
    flushHeld();share();kick();
    return true;
  }
  function exit(){
    // r4: 저장되기 전에는 홈으로도 나가지 않는다(저장된 것과 화면이 어긋나지 않게). 다시 누르면 다시 저장해 본다.
    // r6 지적 1: 날짜가 바뀐 채 홈으로 가면 그 순간 채점한 문항을 채점한 날로 마감(한 경로) → 전날 앉은 자리 닫기 → 홈. 저장 실패면 멈춤.
    if(live){flushTime();if(PA_PROGRESS.day()!==today&&!settleClose())return holdHere();if(!save())return holdHere();if(!closeSitting('exit'))return holdHere();live=false;}
    timer=null;
    if(typeof goHome==='function')goHome();else showPage('home-page');
  }
  // 화면을 하는 중이 아닐 때(앱 열기·홈·다시 보일 때·연결될 때): 보내지 못한 진도와 기록하지 못한 결과 로그를 다시(E1·E2 각자).
  function resend(){
    if(live||busy)return;
    try{
      if(typeof PA_RUNTIME!=='undefined'&&PA_RUNTIME.preview)return;
      if(typeof PA_STORAGE==='undefined'||typeof PA_PROGRESS==='undefined')return;
      if(PA_STORAGE.getItem(KEY)){try{
        const o=load();let dirty=false;
        const n=shareState(o.st,o.shared);if(n!==o.shared){o.shared=n;dirty=true;}
        if(o.held.length){const keep=o.held.filter(s=>!tryLog(s));if(keep.length!==o.held.length){o.held=keep;dirty=true;}}
        if(dirty)write(o);}catch(_){}}
      if(PA_STORAGE.getItem(KEY2)){try{
        const o=load2();let dirty=false;
        const n=shareState2(o.st,o.shared);if(n!==o.shared){o.shared=n;dirty=true;}
        if(o.held.length){const keep=o.held.filter(s=>!tryLog2(s));if(keep.length!==o.held.length){o.held=keep;dirty=true;}}
        if(dirty)write2(o);}catch(_){}}
      for(const X of XB)if(PA_STORAGE.getItem(X.KEY)){try{
        const o=X.load();let dirty=false;
        const n=X.shareState(o.st,o.shared);if(n!==o.shared){o.shared=n;dirty=true;}
        if(o.held.length){const keep=o.held.filter(s=>!X.tryLog(s));if(keep.length!==o.held.length){o.held=keep;dirty=true;}}
        if(dirty)X.write(o);}catch(_){}}
    }catch(_){}
  }
  // r6 지적 1·3 — 화면 중이 아닐 때(홈 카드·앱 열기) 실제 마감: 지금 쓸 기록(이 기기 기록, 더 최근 서버 기록이면 adopt로 합침)에
  //  지난 날 채점한 미완료 문항이 있으면 채점한 날로 마감 → 마감 로그를 held에 넣고 진도와 함께 저장 → 저장 성공 뒤에만 로그 쓰기·전송.
  //  dry(화면 중·시작 중·미리보기)면 저장 없이 같은 계산의 사본. 반환 {o 이 기기 저장 묶음(마감 전), s 지금 쓸 상태, useRemote, blocked}
  function settleStored(date,dry){
    const o=load(),r=readEnglishRemote();
    let s=o.st,a=null,tb=null;const useRemote=!!r?.evidence_at&&newer(r,o.st);
    if(useRemote){a=adopt(o.st,r,o.cur,date);s=a.st;}else if(r){tb=takeS9Facts(o.st,r);if(tb)s=tb.st;}   // r2: 오래된 서버 기록의 B 이력
    const g=s.open&&s.open.date!==date?gradedOpen(s):null,c=useRemote?(a.keepCur?o.cur:null):o.cur;   // r6e: 이 기기가 채점한 시도면 화면 상세 보존
    if(dry)return {o,s:g?closeOne(s,g,c).st:s,useRemote};
    if(!g&&!(a&&a.changed)&&!tb)return {o,s,useRemote};
    const n={st:s,sit:o.sit,cur:o.cur,shared:o.shared,held:o.held.slice()};
    const keep=l=>{if(!n.held.some(x=>x.id===l.id))n.held.push(l);};
    if(a){n.cur=a.keepCur?o.cur:null;n.shared=shareKey(r);a.logs.forEach(keep);}
    if(g){const x=closeOne(n.st,g,c);n.st=x.st;n.cur=null;keep(x.log);}
    if(g||(a&&a.stamp)||(tb&&n.st.days.length))stampOn(n.st);
    if(!write(n))return {o,s,useRemote,blocked:true};   // 저장 못 하면 마감·로그·전송 없음(다음 기회에 다시)
    n.held=n.held.filter(x=>!tryLog(x));n.shared=shareState(n.st,n.shared);
    try{write(n);}catch(_){}
    kick();
    return {o,s:n.st,useRemote,settled:true};
  }
  // E2 같은 경로: 더 최근 서버 기록이면 adopt2(이 기기 결과 키 보존·미확인), 이 기기가 더 새면 미확인 표시만 받는다(reconcile2).
  function settleStored2(date,dry){
    const o=load2(),r=readRemote2();
    let s=o.st,a=null,rc=null;const useRemote=!!r?.evidence_at&&newer(r,o.st);
    if(useRemote){a=adopt2(o.st,r,o.cur,date);s=a.st;}else if(r){rc=reconcile2(o.st,r);if(rc)s=rc;}
    const g=s.open&&s.open.date!==date?gradedOpen2(s):null,c=useRemote?(a.keepCur?o.cur:null):o.cur;
    if(dry)return {o,s:g?closeOne2(s,g,c).st:s,useRemote};
    if(!g&&!(a&&a.changed)&&!rc)return {o,s,useRemote};
    const n={st:s,sit:o.sit,cur:o.cur,shared:o.shared,held:o.held.slice()};
    const keep=l=>{if(!n.held.some(x=>x.id===l.id))n.held.push(l);};
    if(a){n.cur=a.keepCur?o.cur:null;n.shared=shareKey(r);a.logs.forEach(keep);}
    if(g){const x=closeOne2(n.st,g,c);n.st=x.st;n.cur=null;keep(x.log);}
    if(g||(a&&a.stamp)||rc)stampOn2(n.st);
    if(!write2(n))return {o,s,useRemote,blocked:true};
    n.held=n.held.filter(x=>!tryLog2(x));n.shared=shareState2(n.st,n.shared);
    try{write2(n);}catch(_){}
    kick();
    return {o,s:n.st,useRemote,settled:true};
  }
  // 홈 카드 부제(원고 E2 v1.3 §10): 풀던 화면 → 그날 학습 끝 → (E2가 열린 뒤) 둘째 묶음 완료 / 진행 중 → E2 전에는 r3 문구 그대로.
  function status(date){
    try{
      date=date||PA_PROGRESS.day();resend();
      // r6: 홈 카드 = 실제 마감 결과(화면 중·시작 중·미리보기면 같은 계산의 사본)
      const dry=live||busy||!!(typeof PA_RUNTIME!=='undefined'&&PA_RUNTIME.preview);
      const {o,s,useRemote}=settleStored(date,dry),q=settleStored2(date,dry),z=q.s,qx=XB.map(X=>X.settleStored(date,dry)),z4=qx[0].s,z5=qx[1].s;
      if(resumableK(s,z,z4,z5,date)||(!s.done.includes(date)&&ownOpen2(z,q.o.cur,date))||(!s.done.includes(date)&&XB.some((X,i)=>X.ownOpen(qx[i].s,qx[i].o.cur,date))))return '하던 곳에서 이어 하기';
      const p=planK(s,z,z4,z5,date),open2=e2Open(s);
      // E4가 열린 뒤(원고 E4E5 §6): E2 §10 판정 순서에 묶음 이름만 바꿔(셋째·넷째) — '넷째 묶음 완료'에서 끝(다음 묶음 준비 중 없음, 화면 시안 검토 채택).
      if(e4Open(s,z)){const o5=e5Open(z4);
        if(p.type==='stop'){
          if(p.reason==='done'||p.reason==='break'||p.reason==='budget')return '✓ 오늘 영어 완료'+((useRemote||q.useRemote||qx.some(x=>x.useRemote))&&!o.st.done.includes(date)&&!q.o.st.done.includes(date)&&qx.every(x=>!x.o.st.done.includes(date))?' (다른 기기)':'');
          if(o5&&E5X.fin(z5))return '넷째 묶음 완료';
          return '다음 영어 준비 중';}
        if(active(s,date)||active(z,date)||active(z4,date)||active(z5,date))return '하던 곳에서 이어 하기';
        return o5?(E5X.fin(z5)?'넷째 묶음 완료':'넷째 묶음 진행 중'):(E4X.fin(z4)?'셋째 묶음 완료':'셋째 묶음 진행 중');}
      const fin2=()=>'둘째 묶음 완료'+(e1Fin(s)?' · 다음 묶음 준비 중':'');
      if(p.type==='stop'){
        if(p.reason==='done'||p.reason==='break'||p.reason==='budget')return '✓ 오늘 영어 완료'+((useRemote||q.useRemote)&&!o.st.done.includes(date)&&!q.o.st.done.includes(date)?' (다른 기기)':'');
        if(open2&&e2Fin(z))return fin2();
        if(p.reason==='end')return '첫 묶음 완료 · 다음 묶음 준비 중';
        return '다음 영어 준비 중';
      }
      if(!s.days.length&&!s.open)return '하루 5분 · 오늘 시작할 곳 찾기';
      if(active(s,date)||active(z,date))return '하던 곳에서 이어 하기';
      if(open2)return e2Fin(z)?fin2():'둘째 묶음 진행 중';
      return '하루 5분 · 문장 만들기';
    }catch(_){return '영어 기록 확인이 필요해요';}
  }
  async function start(){
    if(busy)return;busy=true;
    const el=document.getElementById('english-support-status');
    try{
      preview=!!(typeof PA_RUNTIME!=='undefined'&&PA_RUNTIME.preview);
      if(el)el.textContent='준비하고 있어요…';
      // 다른 기기 진도를 짧게 한 번 더 받아 본다(최대 3초). 못 받아도 이 기기 기록으로 시작한다.
      try{await Promise.race([PA_PROGRESS.pull(),new Promise(r=>setTimeout(r,3000))]);}catch(_){}
      today=PA_PROGRESS.day();
      // r6: 홈 카드와 같은 실제 마감(공유 기록 합치기 포함)을 먼저 — 저장하지 못하면 시작하지 않는다(E1·E2 각자).
      if(!preview&&(settleStored(today,false).blocked||settleStored2(today,false).blocked||XB.some(X=>X.settleStored(today,false).blocked)))throw Error('storage');
      const o=load(),o2=load2();st=o.st;sit=o.sit;shared=o.shared;held=o.held;st2=o2.st;sit2=o2.sit;shared2=o2.shared;held2=o2.held;
      // 풀던 화면은 한 묶음에만 저장된다(save 순서). 둘 다 있으면 E2 쪽은 E2의 열린 문항과 같을 때만.
      cur=o2.cur&&(!o.cur||(st2.open&&o2.cur.key===st2.open.key))?{...o2.cur,track:2}:o.cur;
      // E4·E5도 같은 규칙: 풀던 화면은 한 키에만 저장된다. 둘 이상이면 그 묶음의 열린 문항과 같을 때만.
      XB.forEach(X=>{const ox=X.load();X.H.st=ox.st;X.H.sit=ox.sit;X.H.shared=ox.shared;X.H.held=ox.held;if(ox.cur&&(!cur||(X.H.st.open&&ox.cur.key===X.H.st.open.key)))cur={...ox.cur,track:X.TR};});
      w2last=JSON.stringify(bundle2());XB.forEach(X=>{X.H.wlast=JSON.stringify(X.bundle(cur));});
      // 지난번에 닫지 못한 앉은 자리(앱 종료 등): r6 held 먼저 → 저장 → 로그. 저장 실패면 시작하지 않는다.
      if(((sit&&Array.isArray(sit.items)&&sit.items.length)||(sit2&&Array.isArray(sit2.items)&&sit2.items.length)||XB.some(X=>X.H.sit&&Array.isArray(X.H.sit.items)&&X.H.sit.items.length))&&!preview){if(!closeSitting('recovered'))throw Error('storage');}
      sit=null;sit2=null;for(const X of XB)X.H.sit=null;
      flushHeld();
      const r=readEnglishRemote();
      // r6: 더 최근 서버 기록은 adopt(이 기기 결과 키 보존). 위 settleStored가 이미 합쳐 저장했으면 여기서는 보통 바뀌는 것이 없다.
      const c1=cur&&cur.track?null:cur;
      if(r?.evidence_at&&newer(r,st)){const a=adopt(st,r,c1,today);st=a.st;if(c1&&!a.keepCur)cur=null;shared=shareKey(r);if(a.stamp)stamp();if(!preview)a.logs.forEach(l=>{if(!held.some(x=>x.id===l.id))held.push(l);});}
      else if(r){const tb=takeS9Facts(st,r);if(tb){st=tb.st;if(st.days.length)stamp();}}
      const r2=readRemote2(),c2=cur&&cur.track===2?cur:null;
      if(r2?.evidence_at&&newer(r2,st2)){const a=adopt2(st2,r2,c2,today);st2=a.st;if(c2&&!a.keepCur)cur=null;shared2=shareKey(r2);if(a.stamp)stamp2();if(!preview)a.logs.forEach(l=>{if(!held2.some(x=>x.id===l.id))held2.push(l);});}
      else if(r2){const rc=reconcile2(st2,r2);if(rc){st2=rc;stamp2();}}
      for(const X of XB){const rx=X.readRemote(),cx=cur&&cur.track===X.TR?cur:null;
        if(rx?.evidence_at&&newer(rx,X.H.st)){const a=X.adopt(X.H.st,rx,cx,today);X.H.st=a.st;if(cx&&!a.keepCur)cur=null;X.H.shared=shareKey(rx);if(a.stamp)X.stamp();if(!preview)a.logs.forEach(l=>{if(!X.H.held.some(x=>x.id===l.id))X.H.held.push(l);});}
        else if(rx){const rc=X.reconcile(X.H.st,rx);if(rc){X.H.st=rc;X.stamp();}}}
      // r6: 지난 날 채점한 채 끝나지 않은 열린 문항 → 한 경로(settleClose)로 마감. 저장 실패면 시작하지 않는다.
      if(!settleClose())throw Error('storage');
      if(held.length||held2.length||XB.some(X=>X.H.held.length)){if(!save())throw Error('storage');flushHeld();}
      share();
      const res=resumableK(st,st2,E4X.H.st,E5X.H.st,today)||(!st.done.includes(today)&&ownOpen2(st2,cur&&cur.track===2?cur:null,today))||(!st.done.includes(today)&&XB.map(X=>X.ownOpen(X.H.st,cur&&cur.track===X.TR?cur:null,today)).find(Boolean))||null;
      const a=res?{st1:st,st2,st4:E4X.H.st,st5:E5X.H.st,p:res}:advanceK(st,st2,E4X.H.st,E5X.H.st,today);
      if(a.st1!==st){st=a.st1;stamp();}if(a.st2!==st2){st2=a.st2;stamp2();}if(a.st4!==E4X.H.st){E4X.H.st=a.st4;E4X.stamp();}if(a.st5!==E5X.H.st){E5X.H.st=a.st5;E5X.stamp();}
      if(a.p.type==='stop'){save();share();if(el)el.textContent=status(today);return;}
      sit=newSit();
      if(!save())throw Error('storage');
      page();live=true;timer=null;showPage('e1-page');tStart();
      if(res)render(res);else next();
    }catch(e){if(el)el.textContent='영어를 시작하지 못했어요. 저장 공간과 연결을 확인한 뒤 다시 눌러 주세요.';console.error('[e1-start]',e);}
    finally{busy=false;}
  }
  const E2=Object.freeze({SEQ2,IDX2,S2,KEY2,LOG_KEY2,CONCEPT2,T14_FROM,RES_KEY2,fresh2,planJ,advanceJ,complete2,resumable2,resumableJ,encode2,decode2,adopt2,reconcile2,mergeQuestions2,mergeRes2,withOpen2,cBase2,triesT10,
    gradedOpen2,closeOne2,token2,keyOf2,itemOf2,seenTarget2,e2Open,e1Fin,e2Fin,t14Due,s9Day,nextStep2,achieve2,unsure2,logRecord2,mergeFacts2,mergeB2,bRound2});
  return Object.freeze({start,status,exit,resend,plan,advance,resumable,complete,stopDay,addSec,encode,decode,newer,gradeWrite,norm,fresh,markSeen,gradedOpen,closeStale,
    adopt,mergeFacts,mergeB,pendingIn,closeOne,itemDone,closeId,logRecord,modeOf,seenOn,takeS9Facts,takeB:takeS9Facts,withMode,tokenOf:(it,r,s)=>token(it,r,s),RES_KEY,SEQ,IDX,S,BUDGET,C2_FROM,TOKEN,KEY,LOG_KEY,CONCEPT,E2,
    E4:E4X,E5:E5X,planK,advanceK,resumableK,e4Open,e5Open,t14Day,mkX});   // mkX = 시험용(E2 정의로 만든 공장이 E2 엔진과 같게 도는지 확인)
})();
if(typeof module!=='undefined')module.exports=PA_ENGLISH_FINAL;
