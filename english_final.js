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
     (날짜 넘기기·마감·전송 없음). */
const PA_ENGLISH_FINAL=(()=>{
  'use strict';
  const KEY='pa_english_2026_final_v1',LOG_KEY='quiz_logs_eng_fin_e1',CONCEPT='eng_fin-E1',BUDGET=300,B_MAX=3,S9_GAP=7,C2_FROM='2026-12-06';
  // 문장(전부 교과서 L6 — 본문 p.106~107, FOCUS ON LANGUAGE p.110, PLAY p.111). ko(우리말)·ko4(우리말 덩어리: 누가/봤어요/누구를/뭐 하는 걸) 중 tom·phone·violin은 Cowork 작성(Codex 검토 대상).
  const S={
    base:{en:['I','saw','my brother','playing basketball'],ko:'나는 형이 농구하는 걸 봤어요.',ko4:['나는','봤어요','형이','농구하는 걸'],ing:'play → playing',mix:[3,0,2,1]},
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
      ko:'지난 금요일, 나는 방과 후에 형이 농구하는 걸 봤어요.',answer:'Last Friday, I saw my brother playing basketball after school.'}
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
  const RES_KEY=/^(S9a0?|S9b|S9c|S5w?|S6|S7C|S8C|S8W|B\.[a-z]+\.\d+)$/;
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
  function adopt(loc,rem,c){
    const m=copy(rem),added=[],clashes=[],logs=[];
    const gl=loc.open?gradedOpen(loc):null,gkey=gl?keyOf(gl.item):'';
    const doneThere=gl?itemDone(rem,gl.item,gl.r.bkey):false,rg=rem.open?gradedOpen(rem):null,remGraded=!!rg;
    const skip=new Set([gl&&gl.r.bkey,rg&&rg.r.bkey].filter(Boolean));   // r6d: 채점만 한 열린 재확인 시도
    // 같은 열린 문항인지 — 재확인은 같은 차례(시도 번호)까지 같아야 같은 것
    const sameOpen=x=>!!(gl&&x.open&&x.open.key===gkey&&(gl.item.type!=='b'||bKey(x,gl.item.sid)===gl.r.bkey));
    for(const [k,v] of Object.entries(loc.res)){
      if(SEEN_KEY.test(k)){if(!m.res[k]&&!m.res[k.slice(0,-1)]){m.res[k]=v;added.push(k);}continue;}
      if(!RES_KEY.test(k)||m.res[k])continue;
      if(clash(m,k,v)){clashes.push(k);continue;}
      m.res[k]=v;added.push(k);
    }
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
    if(gl&&doneThere&&!sameOpen(m))logs.push(closeLogOf(loc,loc.open.date,gkey,token(gl.item,fillFromCur(gl,c),loc)));
    // r6e: 합친 기록의 열린 문항이 이 기기에서 채점한 그 시도(문항·날짜·재확인 차례 같음)이고 받은 기록은 채점하지 않았을 때만 이 기기 화면 상세(cur)를 그대로 쓴다.
    //  받은 기록이 그 문항을 채점했거나 다른 화면이면 섞지 않는다(cur 버림).
    const keepCur=!!(gl&&!remGraded&&m.open&&sameOpen(m)&&m.open.date===loc.open.date);
    return {st:m,added,clashes,logs,keepCur,stamp:added.length>0||f,changed:added.length>0||logs.length>0||f};
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
    st.ok=(c.independent_days||[]).filter(d=>DAY.test(d));st.days.sort();st.done.sort();st.noc.sort();st.def.sort((x,y)=>IDX[x.id]-IDX[y.id]);
    st.evidence_at=c.evidence_at||'';st.event_id=c.event_id||'';
    return st;
  }
  const newer=(a,b)=>!!a&&(!b||Date.parse(a.evidence_at||0)>Date.parse(b.evidence_at||0)||(a.evidence_at===b.evidence_at&&String(a.event_id)>String(b.event_id)));
  // ── 채점(E1 쓰기 전용 — exam_support.js gradeWriting은 그대로): 대소문자·끝 문장부호·쉼표는 보지 않고 형태·어순은 본다.
  const norm=s=>String(s??'').toLowerCase().replace(/[’']/g,"'").replace(/,/g,' ').replace(/[.!?]+\s*$/,'').replace(/\s+/g,' ').trim();
  function gradeWrite(accept,typed){const t=norm(typed);return !!t&&accept.some(a=>norm(a)===t);}

  // ───────────────────────── 화면 ─────────────────────────
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
#e1-page .e1-illus{width:100%;height:auto;border-radius:12px;display:block}#e1-page .e1-cap{margin:0;font-size:18px;font-weight:600;text-align:center}
#e1-page .e1-foot{position:sticky;bottom:0;background:#fff;border-top:1px solid var(--line);padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px}
#e1-page .e1-main{min-height:50px;border:0;border-radius:12px;background:#2F5496;color:#fff;font-size:17px;font-weight:700;font-family:inherit}#e1-page .e1-main:disabled{background:#b9c6dc}
#e1-page .e1-home{background:none;border:0;color:#5b6575;font-size:14px;font-family:inherit;text-decoration:underline}
#e1-page .e1-done{text-align:center;padding:40px 0 10px;font-size:19px;font-weight:700;line-height:1.6}`;
  // S1·S0 그림(시안 v2의 임시 SVG — 내가 형이 농구공을 던지는 모습을 보고 있다)
  const SCENE=`<svg class="e1-illus" viewBox="0 0 400 240" role="img" aria-label="학교 운동장에서 형이 농구 골대를 향해 공을 던지는 모습을 내가 보고 있는 장면"><defs><linearGradient id="e1sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9f1fb"/><stop offset="1" stop-color="#f7fafd"/></linearGradient></defs><rect x="0" y="0" width="400" height="240" fill="url(#e1sky)"/><rect x="18" y="86" width="120" height="70" fill="#dfe6ee"/><rect x="18" y="80" width="120" height="8" fill="#c9d3de"/><g fill="#f7fafd"><rect x="30" y="98" width="16" height="14"/><rect x="56" y="98" width="16" height="14"/><rect x="82" y="98" width="16" height="14"/><rect x="108" y="98" width="16" height="14"/><rect x="30" y="124" width="16" height="14"/><rect x="56" y="124" width="16" height="14"/><rect x="82" y="124" width="16" height="14"/><rect x="108" y="124" width="16" height="14"/></g><rect x="0" y="156" width="400" height="84" fill="#e8dcc8"/><line x1="0" y1="156" x2="400" y2="156" stroke="#cdbfa6" stroke-width="2"/><path d="M250 232 A70 70 0 0 1 390 232" fill="none" stroke="#cdbfa6" stroke-width="2"/><rect x="346" y="58" width="8" height="140" fill="#596573"/><rect x="300" y="46" width="54" height="40" rx="3" fill="#f4f6f8" stroke="#596573" stroke-width="3"/><rect x="312" y="60" width="26" height="18" fill="none" stroke="#596573" stroke-width="2"/><ellipse cx="303" cy="86" rx="15" ry="4" fill="none" stroke="#C2410C" stroke-width="3"/><g stroke="#9aa5b1" stroke-width="1.5" fill="none"><path d="M289 88 L294 112"/><path d="M296 90 L298 114"/><path d="M303 90 L303 114"/><path d="M310 90 L308 114"/><path d="M317 88 L312 112"/><path d="M294 112 L312 112"/></g><path d="M262 64 Q282 36 298 70" fill="none" stroke="#15803D" stroke-width="2.5" stroke-dasharray="5 5"/><circle cx="265" cy="60" r="10" fill="#e07b2a" stroke="#9a4b12" stroke-width="2"/><path d="M255 60 H275 M265 50 V70 M258 53 Q265 60 258 67 M272 53 Q265 60 272 67" fill="none" stroke="#9a4b12" stroke-width="1.5"/><g stroke="#4a3a2f" stroke-width="6" stroke-linecap="round" fill="none"><path d="M232 92 L252 74 L262 66"/><path d="M222 94 L212 110 L224 118"/><path d="M228 128 L216 150 L224 170"/><path d="M236 128 L252 146 L246 168"/></g><rect x="218" y="88" width="26" height="42" rx="8" fill="#C2410C"/><text x="231" y="116" font-size="11" font-weight="700" fill="#fff" text-anchor="middle" font-family="system-ui, sans-serif">7</text><circle cx="231" cy="74" r="12" fill="#f3c9a4" stroke="#4a3a2f" stroke-width="2"/><path d="M219 70 Q231 58 243 70" fill="#4a3a2f"/><circle cx="96" cy="128" r="14" fill="#4a3a2f"/><rect x="78" y="142" width="36" height="52" rx="9" fill="#2F5496"/><g stroke="#2F5496" stroke-width="7" stroke-linecap="round" fill="none"><path d="M80 150 L68 186"/><path d="M112 150 L124 186"/></g><g stroke="#3b3f46" stroke-width="9" stroke-linecap="round" fill="none"><path d="M86 194 L84 226"/><path d="M106 194 L108 226"/></g><path d="M118 128 Q170 100 212 94" fill="none" stroke="#2F5496" stroke-width="1.5" stroke-dasharray="3 4" opacity=".8"/></svg>`;

  let st=null,sit=null,cur=null,today='',busy=false,preview=false,timer=null,live=null,shared='',held=[],unsaved=false;
  // 저장 묶음 = {st 진도, sit 앉은 자리, cur 풀던 화면, shared 마지막으로 전송 대기열에 넣은 기록(evidence_at), held 기록하지 못한 결과 로그}
  function load(){
    try{const raw=PA_STORAGE.getItem(KEY);if(!raw)return {st:fresh(),sit:null,cur:null,shared:'',held:[]};const o=JSON.parse(raw);
      if(!o||!o.st||o.st.v!==1)throw Error('bad');
      return {st:{...fresh(),...o.st},sit:o.sit||null,cur:o.cur||null,shared:typeof o.shared==='string'?o.shared:'',held:Array.isArray(o.held)?o.held:[]};}
    catch(_){throw Error('영어 기록을 읽지 못했어요. 기록을 보존한 채 어른에게 알려 주세요.');}
  }
  function write(o){const v=JSON.stringify(o);return typeof safeSetItem==='function'?safeSetItem(KEY,v)===true:(PA_STORAGE.setItem(KEY,v),true);}
  // r4: 저장 결과를 늘 '저장 안 됨'(unsaved)에 반영한다(호출마다 따로 처리하지 않게). 성공하면 메모리 전체가 저장된 것.
  function save(){if(preview)return true;let ok=false;try{ok=write({st,sit,cur,shared,held});}catch(_){ok=false;}unsaved=!ok;return ok;}
  function stampOn(s){s.evidence_at=new Date().toISOString();s.event_id=(typeof PA_CURRICULUM!=='undefined'?PA_CURRICULUM:'pa')+':english:e1:'+(crypto.randomUUID?crypto.randomUUID():String(Date.now()));}
  function stamp(){stampOn(st);}
  // 전송: 마지막으로 대기열에 넣은 기록(shared)과 지금 기록이 다르면 넣는다. 넣지 못하면 shared를 그대로 둬서 다음 기회(앱 열기·홈·다시 보일 때)에 다시 넣는다.
  function shareState(s,sh){
    if(!s||!s.evidence_at||s.evidence_at===sh||!s.days.length)return sh;
    try{if(PA_PROGRESS.enqueueEnglishFinal&&PA_PROGRESS.enqueueEnglishFinal(encode(s))===true)return s.evidence_at;}catch(e){console.warn('[e1-progress]',e&&e.message);}
    return sh;
  }
  // 전송 시점: 첫 시도 결과 기록(fixNow)·앉은 자리 닫기(나가기·끝·날짜 바뀜)·화면 숨김·시작·resend. 화면마다 보내지는 않는다(대기열이 화면 수만큼 늘지 않게).
  function share(){if(preview)return;const n=shareState(st,shared);if(n!==shared){shared=n;save();}}
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
  function subStep(set,go){
    const ks=Object.keys(set),old={};for(const k of ks){old[k]=cur[k];cur[k]=set[k];}
    if(!save()){for(const k of ks){if(old[k]===undefined)delete cur[k];else cur[k]=old[k];}return holdHere();}
    go();
  }
  // 시간: E1 화면이 보이는 동안만 잰다(문서 숨김·다른 화면이면 멈춤).
  const now=()=>typeof performance!=='undefined'?performance.now():Date.now();
  function tStart(){if(!timer)timer={ms:0,at:null};if(timer.at===null&&!document.hidden)timer.at=now();}
  function tTake(){if(!timer)return 0;let ms=timer.ms+(timer.at===null?0:now()-timer.at);timer.ms=0;timer.at=timer.at===null?null:now();return ms/1000;}
  // 쓴 시간을 오늘 기록에 더한다. 1초 이상이면 '최근 기록' 표시도 바꿔 다른 기기에 전해지게 한다.
  function flushTime(){const s=tTake();if(s>0){st=addSec(st,today,s);if(sit)sit.sec=(sit.sec||0)+s;if(s>=1)stamp();}}
  function newSit(){return {id:'e1-'+new Date().toISOString().replace(/[^0-9TZ]/g,''),date:today,items:[],sec:0};}
  // 실제 날짜 확인: 화면을 연 채 날짜(서울)가 바뀌었으면 전날 앉은 자리를 닫고 새 날짜로 이어 간다(결과는 실제 날짜로 기록).
  // r6: 저장 실패면 날짜를 넘기지 않고 false(부르는 쪽이 멈춤). 날짜가 그대로거나 넘겼으면 true.
  function rollDay(){
    if(!live)return true;const d=PA_PROGRESS.day();if(!today||d===today)return true;
    // r4: 열린 문항(open)의 날짜는 여기서 바꾸지 않는다 — 그날 배정(syncDay)이 정해진 뒤에만 기록.
    flushTime();
    if(!closeSitting('dayroll'))return false;
    const was=today;today=d;sit=newSit();
    if(!save()){today=was;sit=null;return false;}
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
  const helpTexts=s=>[`누가 ${verbQ(s)}? '${s.ko4[0]}'부터 찾아봐요.`,`다음은 '${s.ko4[1]}'(${s.en[1]}). 그다음 누구를, 그다음 뭐 하는 걸.`];
  // 덩어리(또는 단어) 배열. opts: chunks, mix, roles, colored, meanings, words, ask, onCheck(correct,order), onAsk
  function arrange(f,o){
    const ans=o.chunks,n=ans.length;let placed=[],follow=false,colored=!!o.colored,meanings=!!o.meanings,locked=false;
    const area=f.add(`<div class="e1-area${o.words?' words':''}"></div>`),tiles=f.add('<div class="e1-tiles"></div>');
    const askBtn=o.ask?f.add('<button type="button" class="e1-ask">모르겠어요</button>'):null;
    const fb=f.add('<p class="e1-note" hidden></p>');
    const cls=i=>colored&&o.roles?' c-'+o.roles[i]:'';
    function draw(){
      area.innerHTML=placed.map((i,k)=>`<button type="button" class="e1-tile picked${cls(i)}" data-k="${k}">${esc(ans[i])}</button>`).join('');
      tiles.innerHTML=o.mix.map(i=>`<button type="button" class="e1-tile${cls(i)}" data-i="${i}" ${placed.includes(i)||locked||(follow&&i!==placed.length)?'disabled':''}>${esc(ans[i])}${meanings&&o.meanings?`<small>${esc(o.meanings[i])}</small>`:''}</button>`).join('');
      area.querySelectorAll('button').forEach(b=>b.onclick=()=>{if(locked||follow)return;placed.splice(+b.dataset.k,1);draw();});
      tiles.querySelectorAll('button').forEach(b=>b.onclick=()=>{const i=+b.dataset.i;if(locked||placed.includes(i))return;if(follow&&i!==placed.length)return;placed.push(i);draw();});
      if(follow){f.main('다음',placed.length===n,()=>{locked=true;draw();o.onFollowed&&o.onFollowed();});}
      else f.main('확인',placed.length===n&&!locked,()=>{const ok=placed.every((v,k)=>v===k);o.onCheck(ok,placed.slice());});
    }
    if(askBtn)askBtn.onclick=()=>{if(!locked&&!follow)gate(()=>{if(!locked&&!follow)o.onAsk&&o.onAsk();},f.body);};   // r5: P0 '모르겠어요'도 관문
    draw();
    return {reset(){placed=[];draw();},color(on){colored=on;draw();},mean(on){meanings=on;draw();},lock(){locked=true;if(askBtn)askBtn.hidden=true;draw();},
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
    const f=frame(s.title,'');const W=[['brother','형(남동생)'],['basketball','농구'],['playing','하고 있는'],['saw','봤어요']],open=new Set();
    f.add(SCENE);f.add('<p class="e1-lead">그림에 있는 것들이에요. 탭해서 뜻을 보세요.</p>');
    const t=f.add('<div class="e1-tiles"></div>');
    const draw=()=>{t.innerHTML=W.map(([e,k],i)=>`<button type="button" class="e1-tile" data-i="${i}">${esc(e)}${open.has(i)?`<small>${esc(k)}</small>`:''}</button>`).join('');
      t.querySelectorAll('button').forEach(b=>b.onclick=()=>{open.add(+b.dataset.i);draw();});f.main('다음',open.size===W.length,()=>done({}));};
    draw();
  };
  R.scene=(s,done)=>{const f=frame(s.title,'');f.add(SCENE);f.add('<p class="e1-cap">지난 금요일, 학교 끝나고. 형이 농구하는 걸 봤어요.</p>');f.main('다음',true,()=>done({}));};
  R.pair=(s,done)=>{
    const f=frame(s.title,'');f.add('<p class="e1-lead">먼저 둘만 붙여 봐요. 누가, 뭘 하고 있죠?</p>');
    const t=f.add('<div class="e1-tiles"><button type="button" class="e1-tile c-whom" data-i="0">my brother</button><button type="button" class="e1-tile c-doing" data-i="1">playing basketball</button></div>');
    const hit=new Set(),out=f.add('<p class="e1-note info" hidden>형이 — 농구하는</p>');
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
      if(hit.size===4){msg.hidden=false;msg.textContent=`영어는 '${sent.ko4[1]}'가 둘째에 와요. 그다음 '누구를', 그다음 '뭐 하는 걸'.`;}
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
      if(k===4){cap.hidden=false;cap.textContent='하고 있던 행동은 -ing예요. '+sent.ing+'.';}
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
      else note(f,fb,i===1?"saw 바로 다음은 '누구를'이에요. 형을 봤죠? 형은 영어로 뭐죠?":"'봤어요(saw)'는 벌써 있어요. 누구를 봤는지 찾아요.");
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
    const writePractice=(code,w)=>{
      const f=frame(s.title,'');let w2=cur.w2||0;
      f.add('<p class="e1-lead">이번엔 같은 문장을 직접 써 봐요. 덩어리를 보고 순서대로 쓰면 돼요.</p>');f.add(`<p class="e1-ko">${esc(sent.ko)}</p>`);
      f.add(`<div class="e1-given">${sent.mix.map(i=>`<span>${esc(sent.en[i])}</span>`).join('')}</div>`);
      const ta=f.add('<textarea class="e1-write" placeholder="여기에 영어 문장을 써요" autocapitalize="sentences" autocomplete="off" spellcheck="false"></textarea>'),fb=f.add('<p class="e1-note" hidden></p>');
      const submit=()=>{
        if(gradeWrite(sent.accept,ta.value)){ta.classList.add('ok');ta.readOnly=true;note(f,fb,'맞아요.','ok');f.main('다음',true,()=>done({code,w,write:w2===0?'ok':'help'}));return;}
        w2++;cur.w2=w2;save();
        if(w2>=2){ta.readOnly=true;note(f,fb,'정답은 이래요: '+sent.en.join(' ')+'.','info');f.main('다음',true,()=>done({code,w,write:'fail'}));}
        else{note(f,fb,`덩어리 순서대로 써 봐요: 누가 → ${sent.ko4[1]} → 누구를 → 뭐 하는 걸.`);f.main('다시 제출',true,submit);}};
      ta.oninput=()=>f.enable(!!ta.value.trim()&&!ta.readOnly);f.main('제출',false,submit);
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
  R.write=(s,done)=>{
    if(st.res[s.id]==='C-ok')return recorded(s.title,'이 문장은 처음 쓸 때 혼자 맞혔어요.',[S.cats.answer],()=>done({code:'ok',w:0,typed:(cur.typed||[]).join(' / ')}));
    const first=()=>{if(!st.res[s.id])fixNow(s.id,'C-fail');};
    const cb=(ok,w,typed)=>done({code:ok&&w===0&&st.res[s.id]!=='C-fail'?'ok':'fail',w,typed:(cur.typed||[]).join(' / ')});
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
    const A=()=>{
      const e=S.exam,f=frame(s.title,'1/3');f.add(term);f.add('<p class="e1-lead">우리말에 맞게 단어를 순서대로 놓으세요.</p>');f.add(`<p class="e1-ko">${esc(e.ko)}</p>`);
      let w=cur.w||(st.res.S9a0?1:0);const tips=["'지난 금요일'(Last Friday,)부터 놓고, 그다음 누가 봤는지 찾아봐요.","I saw 다음은 누구를(my brother), 그다음 뭐 하는 걸(playing basketball), 마지막에 after school."];
      const a=arrange(f,{chunks:e.words,mix:e.mix,words:true,
        onCheck:ok=>{if(ok){a.lock();cur.r.d=w===0&&!st.res.S9a0?'ok':'help';cur.r.dw=w;fixNow('S9a','D-'+cur.r.d);a.note(w===0?'맞아요! 시간이 지나도 혼자 놓았어요.':'맞아요.','ok');f.main('다음',true,()=>subStep({phase:'b',w:0},B));return;}
          w++;cur.w=w;if(!st.res.S9a0)fixNow('S9a0','D-wrong');save();
          if(w>=3){cur.r.d='fail';cur.r.dw=w;fixNow('S9a','D-fail');a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');return;}a.reset();a.note(tips[w-1]);},
        onFollowed:()=>{cur.r.d='fail';cur.r.dw=w;subStep({phase:'b',w:0},B);}});   // r5: ②로 넘어가는 저장 확인
      if(w>=3)a.follow('순서는 이래요. 눌러서 따라 놓아 봐요.');else if(w>0)a.note(tips[w-1]);
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
    if(cur.phase==='c'||(st.res.S9a&&pv('S9b')))return C();if(cur.phase==='b'||(st.res.S9a&&!(st.res.S9a==='D-fail'&&cur.w>=3)))return B();A();
  };
  R.end=(s,done)=>done({});

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
      case 'write':return {t:`${s.id}[${v.replace('-','=')};tries=${r.w===undefined?'-':(r.w||0)+1};typed=${encodeURIComponent(r.typed||'')}]`,g:true,ok:v==='C-ok'};
      case 'practice':return {t:`${s.id}[p=${r.code};w=${r.w||0}${r.write?';write='+r.write:''}]`,g:true,ok:r.code==='ok'};
      // r5: ②·③ 중 풀지 않은 것은 p=-(미실시) — 정답률 플래그·분모에서 뺀다
      case 'exam':{const d=RS.S9a||'D-'+r.d,ex=[];if(r.b)ex.push(r.b==='ok');if(r.c)ex.push(r.c==='ok');
        return {t:`S9a[${d.replace('-','=')};w=${r.dw===undefined?'-':r.dw}], S9b[p=${r.b||'-'}], S9c[p=${r.c?r.c+';sel='+(r.sel===undefined?'-':r.sel):'-'}]`,g:true,ok:d==='D-ok',extra:ex};}
      default:return {t:`${s.id}[seen]`,g:false};
    }
  }
  const DAY_NOTE='날이 바뀌어서 오늘 첫 문장부터 시작해요.';
  function render(item,opt){
    const key=keyOf(item);
    // r5: 바꾸기 전 값(풀던 화면·열린 문항·노출 표시) — 저장 실패·화면 오류면 셋 다 되돌린다(열지 못한 문항은 열린 문항·본 적 있음이 아님).
    const was={cur,open:st.open,ev:st.evidence_at,eid:st.event_id,seen:null};
    const undo=()=>{cur=was.cur;st.open=was.open;if(was.seen){delete st.res[was.seen+'x'];st.evidence_at=was.ev;st.event_id=was.eid;}};
    if(!cur||cur.key!==key)cur={key,item,w:0,stage:0};else cur.item=item;
    const sid=st.open?seenTarget(st,st.open.key,key):null;
    if(sid){st.res[sid+'x']='C-seen';was.seen=sid;stamp();}   // r4: 열려 있던 C 배열이 제출 없이 밀림 → 노출됨·미채점
    if(!st.open||st.open.key!==key||st.open.date!==today)st.open={key,date:today};
    // r4: 배정(st)과 열린 문항(open)을 함께 저장. 저장하지 못하면 새 화면을 열지 않고 멈춘다(다시 저장 → 그 화면).
    if(!save()){undo();return saveBlocked(()=>render(item,opt));}
    tStart();
    const fin=r=>finishItem(item,r);
    try{if(item.type==='b')R.bretry(item.sid,fin);else if(item.type==='dc')R.arrange(SEQ[IDX[item.id]],fin);else{const s=SEQ[item.idx];R[s.kind](s,fin);}
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
    st=complete(st,today,item,r);st.open=null;stamp();
    const tk=token(item,r);if(sit)sit.items.push(tk);
    cur=null;
    if(!save())return saveBlocked();
    next();
  }
  function next(){
    if(!rollDay())return saveBlocked();   // r6
    const a=advance(st,today);
    if(a.st!==st){st=a.st;stamp();if(!save())return saveBlocked();}
    const p=a.p;
    if(p.type==='stop')return endDay(p.reason);
    render(p);
  }
  // r4 날짜 배정(아래 큰 버튼·화면 다시 보임 공통 — r3 reroute 대체): 날짜가 바뀌었으면 앱을 새로 열 때와 같은 그날 배정(advance, S8W 먼저 등).
  //  같은 화면이면 열린 문항 날짜를 새 날짜로 저장한 뒤 이어 간다(그 제출은 새 날짜로 처리). 저장 실패면 멈춤(다시 누르면 저장 → 이어 감).
  //  다른 화면이면 그 화면을 연다(그 제출은 처리하지 않음). 그날 할 것이 없으면 하루 끝.
  // r6 지적 1·2·4 — 채점한 날 마감, 한 경로(화면 중): 날짜가 바뀐 뒤 이미 채점한 열린 문항을 채점한 날(open.date)로 마감한다.
  //  마감 로그(id 날짜+문항)는 진도와 함께 먼저 저장(held) → 저장 성공 뒤에만 로그 쓰기·전송. 저장 실패면 마감 전으로 되돌리고 false(멈춤).
  function settleClose(){
    const g=st&&st.open&&st.open.date!==PA_PROGRESS.day()?gradedOpen(st):null;
    if(!g)return true;
    const was={st,cur,held:held.slice()};
    const c=closeOne(st,g,cur);st=c.st;stamp();cur=null;
    if(!preview&&!held.some(x=>x.id===c.log.id))held.push(c.log);
    if(!save()){st=was.st;cur=was.cur;held=was.held;return false;}
    flushHeld();share();kick();
    return true;
  }
  // held(진도와 함께 저장된 미기록 로그)를 결과 로그에 쓴다. 쓴 것만 held에서 뺀다(같은 id는 writeLog가 한 번만 받음).
  function flushHeld(){if(preview||!held.length)return;const keep=held.filter(x=>!tryLog(x));if(keep.length!==held.length){held=keep;save();}}
  function kick(){try{PA_PROGRESS.sync();}catch(_){}try{if(typeof scheduleRecordSync==='function')scheduleRecordSync(0);}catch(_){}}
  function syncDay(cont){
    if(!live||!today||PA_PROGRESS.day()===today)return cont?cont():undefined;
    // r6: 마감(한 경로) → 전날 앉은 자리 닫기. 둘 다 저장되기 전에는 날짜를 넘기지 않고 멈춘다(로그·전송 없음).
    if(!settleClose())return holdHere();
    if(!rollDay())return holdHere();
    const a=advance(st,today);
    if(a.st!==st){st=a.st;stamp();}
    const p=a.p;
    if(p.type==='stop')return endDay(p.reason);
    if(cur&&keyOf(p)===cur.key){
      st.open={key:cur.key,date:today};
      if(!save())return holdHere();
      return cont?cont():undefined;
    }
    render(p,{dayNote:true});
  }
  function endDay(reason){
    flushTime();
    if(active(st,today)&&!st.done.includes(today)){st=stopDay(st,today);stamp();}
    cur=null;st.open=null;
    if(!save())return saveBlocked(()=>endDay(reason));   // r4: 하루 끝 기록을 저장하지 못하면 끝 화면 대신 멈춤
    if(!closeSitting(reason))return saveBlocked(()=>endDay(reason));   // r6
    live=false;timer=null;
    const f=frame('오늘 영어 끝','');
    const msg=reason==='end'?'첫 묶음을 모두 마쳤어요. 다음 묶음을 준비하고 있어요.':reason==='wait'?'다음 영어를 준비하고 있어요.':'오늘 영어 끝! 다음 학습일에 이어서 해요.';
    f.add(`<p class="e1-done">${esc(msg)}</p>`);f.main('홈으로',true,()=>exit());
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
  // 앉은 자리 닫기 — r6: 결과 로그를 진도와 함께 먼저 저장(held) → 저장 성공 뒤에만 로그 쓰기·전송. 저장 실패면 되돌리고 false.
  function closeSitting(reason){
    if(!sit)return true;
    if(preview){sit=null;return true;}
    const s={...sit,reason:sit.reason||reason,track:st.track,ptrId:(SEQ[st.ptr]||{}).id},was={sit,held:held.slice()};
    sit=null;
    if(s.items.length&&!held.some(x=>x.id===s.id))held.push(s);
    if(!save()){sit=was.sit;held=was.held;return false;}
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
  // 화면을 하는 중이 아닐 때(앱 열기·홈·다시 보일 때·연결될 때): 보내지 못한 진도와 기록하지 못한 결과 로그를 다시.
  function resend(){
    if(live||busy)return;
    try{
      if(typeof PA_RUNTIME!=='undefined'&&PA_RUNTIME.preview)return;
      if(typeof PA_STORAGE==='undefined'||typeof PA_PROGRESS==='undefined'||!PA_STORAGE.getItem(KEY))return;
      const o=load();let dirty=false;
      const n=shareState(o.st,o.shared);if(n!==o.shared){o.shared=n;dirty=true;}
      if(o.held.length){const keep=o.held.filter(s=>!tryLog(s));if(keep.length!==o.held.length){o.held=keep;dirty=true;}}
      if(dirty)write(o);
    }catch(_){}
  }
  // r6 지적 1·3 — 화면 중이 아닐 때(홈 카드·앱 열기) 실제 마감: 지금 쓸 기록(이 기기 기록, 더 최근 서버 기록이면 adopt로 합침)에
  //  지난 날 채점한 미완료 문항이 있으면 채점한 날로 마감 → 마감 로그를 held에 넣고 진도와 함께 저장 → 저장 성공 뒤에만 로그 쓰기·전송.
  //  dry(화면 중·시작 중·미리보기)면 저장 없이 같은 계산의 사본. 반환 {o 이 기기 저장 묶음(마감 전), s 지금 쓸 상태, useRemote, blocked}
  function settleStored(date,dry){
    const o=load(),rem=PA_PROGRESS.englishFinalRemote?PA_PROGRESS.englishFinalRemote():null,r=rem?decode(rem):null;
    let s=o.st,a=null;const useRemote=!!r&&newer(r,o.st);
    if(useRemote){a=adopt(o.st,r,o.cur);s=a.st;}
    const g=s.open&&s.open.date!==date?gradedOpen(s):null,c=useRemote?(a.keepCur?o.cur:null):o.cur;   // r6e: 이 기기가 채점한 시도면 화면 상세 보존
    if(dry)return {o,s:g?closeOne(s,g,c).st:s,useRemote};
    if(!g&&!(a&&a.changed))return {o,s,useRemote};
    const n={st:s,sit:o.sit,cur:o.cur,shared:o.shared,held:o.held.slice()};
    const keep=l=>{if(!n.held.some(x=>x.id===l.id))n.held.push(l);};
    if(a){n.cur=a.keepCur?o.cur:null;n.shared=r.evidence_at;a.logs.forEach(keep);}
    if(g){const x=closeOne(n.st,g,c);n.st=x.st;n.cur=null;keep(x.log);}
    if(g||(a&&a.stamp))stampOn(n.st);
    if(!write(n))return {o,s,useRemote,blocked:true};   // 저장 못 하면 마감·로그·전송 없음(다음 기회에 다시)
    n.held=n.held.filter(x=>!tryLog(x));n.shared=shareState(n.st,n.shared);
    try{write(n);}catch(_){}
    kick();
    return {o,s:n.st,useRemote,settled:true};
  }
  function status(date){
    try{
      date=date||PA_PROGRESS.day();resend();
      // r6: 홈 카드 = 실제 마감 결과(화면 중·시작 중·미리보기면 같은 계산의 사본)
      const {o,s,useRemote}=settleStored(date,live||busy||!!(typeof PA_RUNTIME!=='undefined'&&PA_RUNTIME.preview));
      if(resumable(s,date))return '하던 곳에서 이어 하기';
      const p=plan(s,date);
      if(p.type==='stop'){
        if(p.reason==='done'||p.reason==='break'||p.reason==='budget')return '✓ 오늘 영어 완료'+(useRemote&&!o.st.done.includes(date)?' (다른 기기)':'');
        if(p.reason==='end')return '첫 묶음 완료 · 다음 묶음 준비 중';
        return '다음 영어 준비 중';
      }
      if(!s.days.length&&!s.open)return '하루 5분 · 오늘 시작할 곳 찾기';
      if(active(s,date))return '하던 곳에서 이어 하기';
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
      // r6: 홈 카드와 같은 실제 마감(공유 기록 합치기 포함)을 먼저 — 저장하지 못하면 시작하지 않는다.
      if(!preview&&settleStored(today,false).blocked)throw Error('storage');
      const o=load();st=o.st;sit=o.sit;cur=o.cur;shared=o.shared;held=o.held;
      // 지난번에 닫지 못한 앉은 자리(앱 종료 등): r6 held 먼저 → 저장 → 로그. 저장 실패면 시작하지 않는다.
      if(sit&&Array.isArray(sit.items)&&sit.items.length&&!preview){if(!closeSitting('recovered'))throw Error('storage');}
      sit=null;
      flushHeld();
      const rem=PA_PROGRESS.englishFinalRemote?PA_PROGRESS.englishFinalRemote():null,r=rem?decode(rem):null;
      // r6: 더 최근 서버 기록은 adopt(이 기기 결과 키 보존). 위 settleStored가 이미 합쳐 저장했으면 여기서는 보통 바뀌는 것이 없다.
      if(r&&newer(r,st)){const a=adopt(st,r,cur);st=a.st;cur=a.keepCur?cur:null;shared=r.evidence_at;if(a.stamp)stamp();if(!preview)a.logs.forEach(l=>{if(!held.some(x=>x.id===l.id))held.push(l);});}
      // r6: 지난 날 채점한 채 끝나지 않은 열린 문항 → 한 경로(settleClose)로 마감. 저장 실패면 시작하지 않는다.
      if(!settleClose())throw Error('storage');
      if(held.length){if(!save())throw Error('storage');flushHeld();}
      share();
      const res=resumable(st,today);
      const a=res?{st,p:res}:advance(st,today);
      if(a.st!==st){st=a.st;stamp();}
      if(a.p.type==='stop'){save();share();if(el)el.textContent=status(today);return;}
      sit=newSit();
      if(!save())throw Error('storage');
      page();live=true;timer=null;showPage('e1-page');tStart();
      if(res)render(res);else next();
    }catch(e){if(el)el.textContent='영어를 시작하지 못했어요. 저장 공간과 연결을 확인한 뒤 다시 눌러 주세요.';console.error('[e1-start]',e);}
    finally{busy=false;}
  }
  return Object.freeze({start,status,exit,resend,plan,advance,resumable,complete,stopDay,addSec,encode,decode,newer,gradeWrite,norm,fresh,markSeen,gradedOpen,closeStale,
    adopt,mergeFacts,mergeB,pendingIn,closeOne,itemDone,closeId,logRecord,tokenOf:(it,r,s)=>token(it,r,s),RES_KEY,SEQ,IDX,S,BUDGET,C2_FROM,TOKEN,KEY,LOG_KEY,CONCEPT});
})();
if(typeof module!=='undefined')module.exports=PA_ENGLISH_FINAL;
