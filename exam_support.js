/* Subject-isolated, five-question launch sessions. All progress stays in existing quiz log flow. */
const PA_EXAM_SUPPORT = (() => {
  'use strict';
  const KEYS={science:'pa_science_2026_midterm_v2',english:'pa_english_2026_midterm_v1'};
  const IDS=['sci_mid_plate','sci_mid_element','sci_mid_body'];
  let loading=false, active=null, pending=null, timer=null, finishIssue='';
  const tick=()=>typeof performance!=='undefined'?performance.now():Date.now();
  function elapsed(){return timer?Math.round((timer.ms+(timer.start==null?0:tick()-timer.start))/1000):0;}
  document.addEventListener?.('visibilitychange',()=>{if(!timer)return;if(document.hidden&&timer.start!=null){timer.ms+=tick()-timer.start;timer.start=null;}else if(!document.hidden&&timer.start==null)timer.start=tick();});
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const emphasize=s=>esc(s).replace(/(해당하지 않는|적절하지 않은|올바르지 않은|옳지 않은|바르지 않은|알맞지 않은|거리가 먼|아닌 것|틀린 것|틀린|아닌|않는|없는|못한)/g,'<span class="exam-negative" style="color:#E53935;font-weight:700;text-decoration:underline">$1</span>');
  const day=(d=new Date())=>PA_PROGRESS.day(d);
  const later=n=>{const d=new Date();d.setDate(d.getDate()+n);return day(d);};
  function read(subject){
    const raw=PA_STORAGE.getItem(KEYS[subject]);
    if(!raw)return {};
    const s=JSON.parse(raw);
    if(!s||typeof s!=='object'||Array.isArray(s))throw Error('학습 기록을 읽지 못했어요. 기록을 보존한 채 확인이 필요해요.');
    return s;
  }
  function isReplay(){return !!active?.replay;}
  function showPracticeIssue(){
    const n=document.getElementById('exam-replay-notice');
    if(n&&practiceIssue){n.hidden=false;n.textContent=practiceIssue;}
  }
  function write(s){return isReplay()?true:safeSetItem(KEYS[active.subject],JSON.stringify(s));}
  const REPLAY_SUBJECTS=['english','science'];
  // ── 연습(재연습) 기록 ──────────────────────────────────────────────
  // 3단계로 나눈다: ①문항별 진행중 저장 ②종료·완주 확정(불변 payload) ③재전송·ACK.
  // 재연습 구간에서 저장소에 쓰는 것은 PRACTICE_KEY 하나뿐이다(격리 계약).
  // 서버 전송은 하지 않는다 — GAS v21은 미등록 sheet 봉투를 일반 '로그'로 낙하시킨다.
  const PRACTICE_KEY='pa_practice_logs_v1',PRACTICE_CAP=60;
  let practiceIssue='';
  function practiceNotice(){return practiceIssue;}
  // 손상된 JSON을 []로 바꾸지 않는다. 그러면 다음 저장이 원문을 덮어 기존 기록이 사라진다.
  function practiceRead(){
    let raw=null;
    try{raw=PA_STORAGE.getItem(PRACTICE_KEY);}catch(_){return {ok:false,reason:'storage',list:null};}
    if(raw==null||raw==='')return {ok:true,list:[]};
    try{const v=JSON.parse(raw);if(Array.isArray(v))return {ok:true,list:v};}catch(_){}
    return {ok:false,reason:'corrupt',list:null};
  }
  function practiceLogs(){const r=practiceRead();return r.ok?r.list:[];}
  // 확인된(전송 완료) 기록만 정리 대상이다. 미전송은 cap을 넘겨도 버리지 않는다.
  function pruneForCap(list){
    if(list.length<=PRACTICE_CAP)return list;
    let drop=list.length-PRACTICE_CAP;const out=[];
    for(const r of list){
      if(drop>0&&r&&r.status==='final'&&r.sent===true){drop--;continue;}
      out.push(r);
    }
    return out;
  }
  function practiceRound(originEventId){
    return practiceLogs().filter(r=>r&&r.origin_event_id===originEventId).length+1;
  }
  function buildPracticeRecord(stage,completed){
    const pr=active.practice,c=summaryCounts();
    return {v:1,status:stage,practice_id:pr.practice_id,event_id:pr.event_id,
      origin_event_id:pr.origin_event_id,origin_session_id:pr.origin_session_id||null,
      continues_from:pr.continues_from||null,
      subject:active.subject,plan_date:active.state?.__plan?.date||day(),
      started_at:pr.started_at,updated_at:new Date().toISOString(),
      finished_at:stage==='final'?new Date().toISOString():null,
      round:pr.round,completed:stage==='final'?!!completed:false,
      total:c.total,answered:sessionAnswers.length,correct:c.correct,wrong:c.wrong,unknown:c.unknown,
      unanswered:c.unanswered,independent:c.independent,assisted:c.assisted,precheck:c.precheck,
      // 문항별 오답 복습을 위해 '무엇을 골랐는지'를 남긴다. 연습기록 시트 전용이며
      // 일반 로그의 detail() 은 그대로 빈 문자열이다(분류 미생성 계약 유지).
      items:sessionAnswers.map(a=>({id:a.id,correct:!!a.correct,status:a.answer_status,
        assisted:!!a.practice_assisted,time_sec:a.time_sec||0,
        ...(a.selected_indices?{selected:a.selected_indices.slice()}:{}),
        ...(Array.isArray(a.display_order)?{display_order:a.display_order.slice()}:{}),
        ...(typeof a.writing_normalized==='string'?{typed:a.writing_normalized}:{})})),
      sent:false,sent_at:null};
  }
  function upsertPractice(rec){
    const r=practiceRead();
    if(!r.ok){practiceIssue=r.reason==='corrupt'
      ?'연습 기록 파일이 손상돼 새 기록을 저장하지 않았어요. 기존 기록은 그대로 두었어요.'
      :'연습 기록을 읽지 못했어요.';return false;}
    const prev=r.list.find(x=>x&&x.practice_id===rec.practice_id);
    // 확정 payload 는 불변이다. 결과 화면 재렌더·재저장 버튼이 같은 봉투를 그대로 쓰게 해서
    // ACK 유실 뒤 재전송이 서버 dedup(event_id)에 정확히 걸리도록 한다.
    // 확정 payload 는 불변이다. 이미 확정(그리고 어쩌면 전송)된 event 는 절대 되돌리지 않는다.
    if(prev&&prev.status==='final'){practiceIssue='';return true;}
    if(prev&&prev.sent===true)rec.sent=prev.sent,rec.sent_at=prev.sent_at;
    const all=r.list.filter(x=>x&&x.practice_id!==rec.practice_id);all.push(rec);
    let ok=false;
    try{ok=safeSetItem(PRACTICE_KEY,JSON.stringify(pruneForCap(all)));}catch(_){ok=false;}
    practiceIssue=ok?'':'연습 기록을 저장하지 못했어요. 저장 공간을 확인해 주세요.';
    return ok;
  }
  // 새로고침·앱 종료로 남은 in_progress 는 영원히 로컬에만 두지 않는다.
  // 다만 '다른 탭에서 진행 중'을 시간으로 추정하지 않는다 — 한 문항에 오래 머무는 아이도 있다.
  // 대신 진행 중인 탭이 주기적으로 갱신하는 리스(lease)를 본다.
  const PRACTICE_LEASE_MS=20000,PRACTICE_LEASE_GRACE=3;          // 20초 갱신 · 3회 놓치면 만료
  const TAB_ID=(crypto?.randomUUID?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2));
  let leaseTimer=null;
  function touchLease(){
    if(!isReplay()||!active?.practice)return;
    const r=practiceRead();if(!r.ok)return;
    const i=r.list.findIndex(x=>x&&x.practice_id===active.practice.practice_id);
    if(i<0)return;
    if(r.list[i].status==='final')return;   // 확정된 event 는 수정하지 않는다(분기는 savePracticeProgress 가 한다)
    r.list[i]={...r.list[i],lease_owner:TAB_ID,lease_at:new Date().toISOString()};
    try{safeSetItem(PRACTICE_KEY,JSON.stringify(pruneForCap(r.list)));}catch(_){}
  }
  function startLease(){stopLease();touchLease();leaseTimer=setInterval(touchLease,PRACTICE_LEASE_MS);}
  function stopLease(){if(leaseTimer){clearInterval(leaseTimer);leaseTimer=null;}}
  function leaseAlive(x){
    const t=Date.parse(x&&(x.lease_at||x.updated_at||x.started_at)||'')||0;
    return (Date.now()-t)<PRACTICE_LEASE_MS*PRACTICE_LEASE_GRACE;
  }
  function recoverPractice(){
    const r=practiceRead();
    if(!r.ok)return false;
    let changed=false;
    const out=r.list.map(x=>{
      if(!x||x.status!=='in_progress')return x;
      if(active?.practice?.practice_id===x.practice_id)return x;   // 이 탭에서 진행 중
      if(leaseAlive(x))return x;                                   // 리스가 살아 있다 = 다른 탭이 갱신 중
      changed=true;
      return {...x,status:'final',completed:false,recovered:true,
        finished_at:x.finished_at||x.updated_at||new Date().toISOString()};
    });
    if(!changed)return true;
    try{return safeSetItem(PRACTICE_KEY,JSON.stringify(pruneForCap(out)));}catch(_){return false;}
  }
  // ── ③ 재전송 · 전용 ACK ────────────────────────────────────────────
  // 저장된 버전 문자열을 믿지 않는다. 보낼 때마다 '현재 endpoint'에 practice 지원을 직접 묻는다.
  // 확인 실패·구형 응답·endpoint 변경은 전부 '큐 보존 · POST 금지'다.
  let practiceSending=false;
  function practiceJsonp(url,action,timeoutMs=8000){
    return new Promise(resolve=>{
      let done=false;const cb='__pa_cap_'+Math.random().toString(36).slice(2);
      const s=document.createElement('script');
      const finish=v=>{if(done)return;done=true;clearTimeout(t);delete window[cb];s.remove();resolve(v);};
      const t=setTimeout(()=>finish(null),timeoutMs);
      window[cb]=v=>finish(v);
      s.onerror=()=>finish(null);
      s.src=url+(url.includes('?')?'&':'?')+'action='+encodeURIComponent(action)+'&callback='+cb+'&_='+Date.now();
      document.head.appendChild(s);
    });
  }
  async function practiceCapability(url){
    const v=await practiceJsonp(url,'capabilities');
    return !!(v&&v.status==='ok'&&Array.isArray(v.capabilities)&&v.capabilities.indexOf('practice')>=0);
  }
  function practicePayload(rec){
    return {sheet:'practice',status:'final',event_id:rec.event_id,practice_id:rec.practice_id,
      origin_event_id:rec.origin_event_id,origin_session_id:rec.origin_session_id,
      continues_from:rec.continues_from?rec.continues_from.event_id:'',
      subject:rec.subject,plan_date:rec.plan_date,round:rec.round,completed:!!rec.completed,
      total:rec.total,answered:rec.answered,correct:rec.correct,wrong:rec.wrong,unknown:rec.unknown,
      unanswered:rec.unanswered,independent:rec.independent,assisted:rec.assisted,precheck:rec.precheck,
      started_at:rec.started_at,finished_at:rec.finished_at,
      details:(rec.items||[]).map(i=>`${i.id}${i.correct?'✓':'✗'}[${i.status}${i.assisted?';도움':''}`
        +`${i.selected?';선택='+i.selected.map(n=>n+1).join('+'):''}`
        +`${Array.isArray(i.display_order)?';보인순서='+i.display_order.map(n=>n+1).join('-'):''}`
        +`${typeof i.typed==='string'?';쓴답='+encodeURIComponent(i.typed):''}`
        +`${i.time_sec?';'+i.time_sec+'s':''}]`).join(', ')};
  }
  function markPracticeFlag(practiceId,patch){
    const r=practiceRead();if(!r.ok)return false;
    const i=r.list.findIndex(x=>x&&x.practice_id===practiceId);if(i<0)return false;
    r.list[i]={...r.list[i],...patch};
    try{return safeSetItem(PRACTICE_KEY,JSON.stringify(pruneForCap(r.list)));}catch(_){return false;}
  }
  function markPracticeSent(practiceId,at,eventId){
    const r=practiceRead();if(!r.ok)return false;
    const i=r.list.findIndex(x=>x&&x.practice_id===practiceId);if(i<0)return false;
    // 보내는 동안 기록이 바뀌었으면(분기·재확정) 그 ACK 로 새 내용을 전송 완료로 치지 않는다.
    if(r.list[i].status!=='final'||r.list[i].event_id!==eventId)return false;
    r.list[i]={...r.list[i],sent:true,sent_at:at};
    try{return safeSetItem(PRACTICE_KEY,JSON.stringify(pruneForCap(r.list)));}catch(_){return false;}
  }
  async function sendPractice(){
    if(practiceSending)return {sent:0,reason:'in-flight'};
    if(PA_RUNTIME.preview)return {sent:0,reason:'preview'};
    const r=practiceRead();
    if(!r.ok)return {sent:0,reason:'corrupt'};
    const queue=r.list.filter(x=>x&&x.status==='final'&&x.sent!==true&&x.conflict!==true);
    if(!queue.length)return {sent:0,reason:'empty'};
    const url=PA_RUNTIME.endpoint();
    if(!url)return {sent:0,reason:'no-endpoint'};
    practiceSending=true;
    try{
      if(!await practiceCapability(url))return {sent:0,reason:'no-capability'};   // 큐 보존 · POST 0
      if(PA_RUNTIME.endpoint()!==url)return {sent:0,reason:'endpoint-changed'};   // 확인 중 바뀌면 중단
      let sent=0;
      for(const rec of queue){
        if(PA_RUNTIME.endpoint()!==url)break;
        try{
          const res=await PA_RUNTIME.fetch(url,{method:'POST',body:JSON.stringify(practicePayload(rec))});
          if(!res.ok)continue;
          let body=null;try{body=JSON.parse(await res.text());}catch(_){}
          // 전용 ACK — event_id 가 정확히 일치할 때만 전송 완료로 본다.
          if(!body||body.status!=='ok'||body.event_id!==rec.event_id)continue;
          if(body.conflict===true){   // 같은 event_id 에 다른 내용이 이미 있다 — 덮지 않고 남긴다
            markPracticeFlag(rec.practice_id,{conflict:true,conflict_reason:body.reason_code||'payload_conflict'});
            practiceIssue='연습 기록 하나가 서버 기록과 달라 보내지 않았어요. 어른에게 알려 주세요.';
            continue;
          }
          if(markPracticeSent(rec.practice_id,new Date().toISOString(),rec.event_id))sent++;
        }catch(_){}
      }
      return {sent};
    }finally{practiceSending=false;}
  }
  // ① 문항별 — 답이 수락될 때마다 즉시 durable 저장. 실패를 성공으로 처리하지 않는다.
  function savePracticeProgress(){
    if(!isReplay()||!active?.practice)return true;
    const r=practiceRead();
    if(!r.ok){practiceIssue='연습 기록 파일이 손상돼 새 기록을 저장하지 않았어요. 기존 기록은 그대로 두었어요.';return false;}
    const prev=r.list.find(x=>x&&x.practice_id===active.practice.practice_id);
    if(prev&&prev.status==='final'){
      // 다른 탭이 이 세션을 중단 확정하고 이미 보냈을 수 있다. 되살리면 sent 를 물려받아
      // 이후 답이 영영 전송되지 않는다. 그래서 되살리지 않고 '새 event 로 분기'한다.
      const nid=(crypto?.randomUUID?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2));
      active.practice={...active.practice,practice_id:nid,
        event_id:active.practice.origin_event_id+':practice:'+nid,
        continues_from:{practice_id:prev.practice_id,event_id:prev.event_id},
        round:practiceRound(active.practice.origin_event_id)};
    }
    return upsertPractice(buildPracticeRecord('in_progress',false));
  }
  // ② 확정 — 완주(true) / 중도 종료(false)
  function savePractice(completed){
    if(!isReplay()||!active?.practice)return false;
    stopLease();
    const ok=upsertPractice(buildPracticeRecord('final',completed));
    // 확정되면 바로 전송을 예약한다. 다음 pageshow/online 까지 기다리지 않는다.
    // 실패하면 기존 bounded retry 사다리에 얹는다.
    try{
      if(ok){if(typeof scheduleRecordSync==='function')scheduleRecordSync(0);}
      else if(typeof retryRecordSync==='function')retryRecordSync();
    }catch(_){}
    return ok;
  }
  // 오늘 실제로 완료한 묶음만 재연습 대상이다. 저장된 __plan.tasks 의 문항 ID를 그대로 쓰며
  // 과학도 makePlan()을 다시 부르지 않는다(새 문제가 뽑히면 '같은 문제'가 아니게 된다).
  function replaySourceState(subject){
    if(PA_RUNTIME.preview)return null;
    try{
      const state=read(subject),p=state.__plan;
      if(!p?.completed||!supportPlanIsToday(p,day())||!Array.isArray(p.tasks)||p.tasks.length!==5)return null;
      const ids=p.tasks.map(t=>t.id);
      if(new Set(ids).size!==5)return null;
      if(!p.tasks.every(t=>t.support&&Array.isArray(p.answers)&&p.answers.some(a=>a.id===t.id)))return null;
      if(subject==='english'){const d=window.PA_ENGLISH_EXAM;if(!d||!ids.every(id=>d.exam_prep.some(q=>q.id===id)))return null;}
      return state;
    }catch(_){return null;}
  }
  function refreshReplayButton(){
    for(const s of REPLAY_SUBJECTS){const b=document.getElementById(s+'-replay');if(b)b.hidden=!replaySourceState(s);}
  }
  function clearReplay(){
    if(!isReplay())return;
    stopLease();
    active=null;pending=null;timer=null;finishIssue='';
    const n=document.getElementById('exam-replay-notice');if(n)n.hidden=true;
  }
  // 다시 풀기에서만 선택지 ①~⑤의 보이는 순서를 매 회 새로 섞는다(2026-09-24).
  // 문제 순서·sentence(〈보기〉)·그림·서술형은 그대로이고, 첫 풀이는 섞지 않는다(preserve_option_order).
  // 기록은 원래 번호(selected_indices)와 보인 순서(display_order: 원래 인덱스 배열)로 남긴다.
  // 시험에서는 window.PA_REPLAY_RANDOM 에 고정 시드 난수를 넣어 결정적으로 검증한다.
  function replayRandom(){const f=window.PA_REPLAY_RANDOM;const r=typeof f==='function'?Number(f()):Math.random();return Number.isFinite(r)?r:Math.random();}
  function shuffleOrder(n,rand=replayRandom){
    const base=Array.from({length:n},(_,i)=>i);
    for(let t=0;t<10;t++){
      const a=base.slice();
      for(let i=n-1;i>0;i--){const j=Math.min(i,Math.max(0,Math.floor(rand()*(i+1))));[a[i],a[j]]=[a[j],a[i]];}
      if(n<2||a.some((v,i)=>v!==i))return a;   // 원래 순서와 똑같이 나오면 다시 섞는다
    }
    return base.slice(1).concat(base.slice(0,1));   // 주입한 난수가 계속 원래 순서만 낼 때의 안전장치
  }
  // 첫 풀이 보기 순서(2026-09-25, Codex v4 검수 F2): 자료의 options·correct·sentence 는 원래 순서 그대로 둔다(옛 코드가 읽는 계약).
  // 이 코드만 first_display_order(보일 순서 = 원래 번호 배열)와 display_sentence(보일 제시어)로 보여 주고, 기록은 다시 풀기와 같이
  // 원래 번호(selected_indices)와 보인 순서(display_order)로 남긴다(제시어가 바뀌어 보였으면 display_sentence 도) → 옛 코드·새 코드·옛 자료·새 자료
  // 어느 조합에서도 저장 번호의 뜻이 같고, 결과 카드는 그 답을 낸 화면을 다시 세운다(asAnswered).
  function validOrder(q,o){return Array.isArray(o)&&Array.isArray(q.options)&&o.length===q.options.length&&o.map(Number).sort((m,n)=>m-n).every((v,i)=>v===i);}
  function presentSentence(q){return typeof q.display_sentence==='string'?{...q,sentence:q.display_sentence}:q;}
  function presentFirst(q){
    const o=q.first_display_order,c=Number(q.correct);
    if(q.answer_mode==='writing'||q.answer_mode==='multiple'||Array.isArray(q.correct)||!Number.isInteger(c)||!validOrder(q,o))return q;
    const order=o.map(Number);
    return {...presentSentence(q),options:order.map(i=>q.options[i]),correct:order.indexOf(c),_display_order:order,
      _original:{sentence:q.sentence,options:q.options.slice(),correct:q.correct}};
  }
  // 결과 카드는 답을 낸 그때의 보기로 그린다(정오답은 다시 채점하지 않는다). 저장 번호(selected_indices)는 늘 자료의 원래 보기 순서
  // 기준이므로 '원래 보기 + 답에 남은 보인 순서(display_order)'로 그 화면을 다시 세운다(2026-09-25 v6). 그래서 지금 읽은 자료가
  // 답할 때와 달라도(업데이트 중 옛 자료·새 자료가 번갈아 로드) 카드의 낱말이 누른 낱말과 같다. 보인 순서가 없는 답은 원래 순서로
  // 받은 답(업데이트 전 코드, 보이기 필드 없는 자료)이다. 제시어는 답에 남은 display_sentence 가 있으면 그것으로 그린다.
  function asAnswered(q,a){
    if(!q||!a||!Array.isArray(q.options))return q;
    const cur=Array.isArray(q._display_order)?q._display_order:null,d=Array.isArray(a.display_order)?a.display_order.map(Number):null;
    const said=typeof a.display_sentence==='string'?{sentence:a.display_sentence}:{};
    if(cur&&d&&cur.length===d.length&&cur.every((v,i)=>v===d[i]))return {...q,...said};   // 이 화면과 같은 순서로 받은 답
    const {_display_order,_original,...rest}=q;
    let base=rest;   // 원래 순서의 제시어·보기·정답
    if(_original)base={...rest,sentence:_original.sentence,options:_original.options,correct:_original.correct};
    else if(cur&&validOrder(q,cur)){const options=[];cur.forEach((i,k)=>{options[i]=q.options[k];});const back=k=>cur[k];
      base={...rest,options,correct:Array.isArray(q.correct)?q.correct.map(back).sort((x,y)=>x-y):back(q.correct)};}
    if(!d||!validOrder(base,d))return base;
    const at=i=>d.indexOf(i);
    return {...base,...said,options:d.map(i=>base.options[i]),correct:Array.isArray(base.correct)?base.correct.map(at).sort((x,y)=>x-y):at(base.correct),_display_order:d};
  }
  // 보기가 지문 속 위치 표지뿐인 문항(ⓐ~ⓩ, (A)~(Z))은 섞지 않는다(2026-09-24c, JH 승인 — 명세 §3-6 보완).
  // 답이 번호가 아니라 표지로 정해지므로 섞어도 자리 기억을 막지 못하고, 시험의 'ⓒ=③' 짝만 흐트러진다.
  // 섞지 않은 문항은 첫 풀이처럼 display_order·;보인순서= 가 남지 않고, 난수도 쓰지 않는다.
  const MARKER_OPTION=/^\s*(?:[ⓐ-ⓩ]|\([A-Z]\))\s*$/;
  function markerOnly(q){return q.options.every(o=>MARKER_OPTION.test(String(o)));}
  function shuffleForReplay(q){
    if(q.answer_mode==='writing'||!Array.isArray(q.options)||q.options.length<2)return q;
    if(markerOnly(q))return q;
    const order=shuffleOrder(q.options.length),at=i=>order.indexOf(i);
    return {...q,options:order.map(i=>q.options[i]),
      correct:Array.isArray(q.correct)?q.correct.map(at).sort((a,b)=>a-b):at(q.correct),_display_order:order};
  }
  async function replay(subject='english'){
    if(loading||isReplay())return;
    const state0=replaySourceState(subject),status=document.getElementById(subject+'-support-status');
    if(!state0){refreshReplayButton();if(status)status.textContent='이 기기에 오늘 푼 문제가 없어 다시 연습할 수 없어요.';return;}
    loading=true;const home=document.getElementById('home-page');home.inert=true;
    recoverPractice();
    if(status)status.textContent='자료를 준비하고 있어요…';
    try{
      const data=await loadSubjectData(subject);
      const state=JSON.parse(JSON.stringify(state0)),p=state.__plan;
      if(!data||!p.tasks.every(t=>data.exam_prep.some(q=>q.id===t.id)))throw Error('replay-question-missing');
      p.answers=[];p.answered=[];p.completed=false;p.finalized=false;p.logged=false;
      for(const k of ['completed_day','completed_at','completion_event_id'])delete p[k];
      p.tasks.forEach(t=>{delete t.draft;delete t.selected;for(const k of ['ready','answered','hint','countWarning'])delete t.support[k];});
      const originEvent=(state0.__plan?.completion_event_id)||`${PA_CURRICULUM}:${subject}:${state0.__plan?.id}`;
      // 재연습ID는 시작 시 한 번 만들어 저장하고 재전송에 그대로 재사용한다(회차는 표시값).
      const practiceId=(crypto?.randomUUID?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2));
      // 원본 세션의 id·답·총계를 시작 시점에 스냅샷해 둔다. 저장된 __plan 을 나중에 다시 읽으면
      // 다른 탭·다음 날 학습으로 plan 이 교체됐을 때 '처음 풀 때'에 엉뚱한 세션이 보인다.
      const practice={practice_id:practiceId,origin_event_id:originEvent,
        origin_session_id:state0.__plan?.id||null,
        origin:{id:state0.__plan?.id||null,total:(state0.__plan?.tasks||[]).length,
          answers:JSON.parse(JSON.stringify(state0.__plan?.answers||[]))},
        event_id:originEvent+':practice:'+practiceId,started_at:new Date().toISOString(),round:practiceRound(originEvent)};
      active={subject,data,state,replay:true,practice};pending=null;timer=null;finishIssue='';
      QUIZ_DATA=data;currentSubject=subject;currentLesson=data.lesson;currentMode='exam_prep';
      retryMode=false;originalSession=[];originalSessionAnswers=[];sessionAnswers=[];currentQuestionIndex=0;
      currentSession=p.tasks.map(t=>shuffleForReplay(presentSentence({...data.exam_prep.find(q=>q.id===t.id),_support:{...t.support,ready:false,answered:false}})));
      sessionStartTime=Date.now();currentSessionMeta={type:subject+'_replay',lesson:currentLesson,mode:currentMode,size:currentSession.length};
      const n=document.getElementById('exam-replay-notice');if(n)n.hidden=false;
      document.getElementById('btn-support-details').hidden=true;
      const exit=document.querySelector('.btn-quit');exit.textContent='연습 그만하기';exit.style.display='';
      document.querySelector('.header-title').textContent=subject==='english'?'같은 영어 문제 연습':'같은 과학 문제 연습';
      startLease();
      showPage('quiz-page');showQuestion();window.scrollTo?.(0,0);
    }catch(err){
      console.error('[exam-replay]',err);
      if(status)status.textContent='다시 연습을 시작하지 못했어요. 잠시 뒤 다시 눌러 주세요.';
      active=null;pending=null;
    }finally{loading=false;const h=document.getElementById('home-page');if(h)h.inert=false;refreshReplayButton();}
  }

  function rules(q){return [...new Set([q.linked_concept[0],...(q.rule_tags||[])])];}
  function englishPlan(data,state,date){
    const learningDay=PA_PROGRESS.nextDay(state,data.launch_days.length);
    const n=learningDay===null?data.launch_days.length:learningDay-1, spec=data.launch_days[n];
    if(!spec)return null;
    const mixed=spec.mode==='mixed_recall';
    return {date,learningDay:n+1,concepts:mixed?[...new Set(spec.ids.map(id=>data.exam_prep.find(q=>q.id===id).linked_concept[0]))]:[spec.concept],exception:spec.exception,answers:[],answered:[],exposed:[],completed:false,
      tasks:spec.ids.map((id,i)=>{const q=data.exam_prep.find(q=>q.id===id);return {id,support:{subject:'english',concept:q.linked_concept[0],
        stage:q.practice_role,new:!mixed&&i>=2,showCard:!mixed&&i===2,taught:!mixed&&i>=2,previousDay:state[q.linked_concept[0]]?.last_day,...(mixed?{mixed:true}:{})}};})};
  }
  function planFor(data,state,date=day()){
    const old=state.__plan;
    // An unfinished block survives midnight/absence. Completion on the new day uses that day's five-slot allowance.
    if(old && (!old.completed || supportPlanIsToday(old,date)))return old; // finalized is presentation state, never the next-day gate.
    const p=data.subject==='english'?englishPlan(data,state,date):PA_SCIENCE_SUPPORT.makePlan(data,state,date);
    if(p){p.subject=data.subject;p.started_at=new Date().toISOString();p.id=data.subject+'-'+p.started_at;
      p.tasks.forEach(t=>t.support.subject=data.subject);}
    return p;
  }
  function session(data){
    const state=read(data.subject),plan=planFor(data,state);
    if(!plan)return [];
    const previousPlan=state.__plan;
    if(previousPlan&&previousPlan.id!==plan.id)PA_PROGRESS.beforeAdvance(data.subject,state);
    state.__plan=plan;
    active={subject:data.subject,data,state};
    if(!write(state))throw Error('저장할 수 없어 시작하지 않았어요. 저장 공간을 확인한 뒤 다시 눌러 주세요.');
    finishIssue='';
    noteSupportPlanAdvance(data.subject,previousPlan,plan);
    return plan.tasks.map(t=>{
      const q=data.exam_prep.find(q=>q.id===t.id);
      if(!q)throw Error('배정 문항을 찾지 못했어요. 앱 자료를 다시 확인해야 해요.');
      return presentFirst({...q,_support:{...t.support,ready:!!t.support.ready,answered:false}});
    });
  }
  function restore(){
    if(!QUIZ_DATA?.support_mode||!active)return;
    sessionAnswers=active.state.__plan.answers.map(a=>({...a}));currentQuestionIndex=sessionAnswers.length;
    // Duration is time spent answering, excluding pauses and nights.
    sessionStartTime=Date.now()-sessionAnswers.reduce((n,a)=>n+(a.time_sec||0)*1000,0);
    if(currentSessionMeta)currentSessionMeta.type=active.subject+'_support';
  }
  function canSave(){
    if(!active)return true;
    const state=JSON.parse(JSON.stringify(active.state)),input=document.querySelector('#question-container .exam-writing');
    const task=state.__plan.tasks.find(t=>t.id===currentSession?.[currentQuestionIndex]?.id);
    if(!state.__plan.completed&&typeof input?.value==='string'&&task)task.draft=input.value;
    if(!write(state))return false;active.state=state;return true;
  }
  function finalize(){
    if(isReplay())return true;
    if(!active?.state.__plan?.completed)return true;
    if(active.state.__plan.finalized){finishIssue='';return true;}
    const state=JSON.parse(JSON.stringify(active.state));state.__plan.finalized=true;
    if(!write(state)){finishIssue='답은 저장됐어요. 마무리 표시는 다음에 다시 저장할게요.';return false;}
    active.state=state;finishIssue='';return true;
  }
  function finishNotice(){return finishIssue;}
  function leave(){goHome();}
  function showDetails(){if(!isReplay()&&active?.state.__plan?.completed)showPage('result-page');}
  // 과목별 문항 데이터 조립. 최초 학습과 재연습이 같은 묶음을 쓰도록 한 곳에 둔다.
  async function loadSubjectData(subject){
    if(subject==='english')return window.PA_ENGLISH_EXAM;
    const lessons=[];
    for(const id of IDS){const l=await fetchVocabJsonp('lesson_'+id+'.json');if(l.lesson_id!==id)throw Error('자료 버전이 맞지 않아요. 다시 시작해 주세요.');lessons.push(l);}
    return {subject:'science',lesson:'sci_mid_mix',lesson_id:'sci_mid_mix',title:'오늘의 과학',support_mode:true,
      concept_cards:lessons.flatMap(l=>l.concept_cards),exam_prep:lessons.flatMap(l=>l.exam_prep)};
  }
  async function start(subject){
    if(loading)return;
    clearReplay();
    loading=true;
    const home=document.getElementById('home-page');home.inert=true;
    const status=document.getElementById(subject+'-support-status');status.textContent='자료를 준비하고 있어요…';
    try{
      const data=await loadSubjectData(subject);
      recoverSupportLogs();recoverPractice();
      PA_PROGRESS.promote();
      const local=read(subject);
      if(PA_RUNTIME.preview&&local.__plan?.completed)delete local.__plan;
      if(!PA_RUNTIME.preview&&PA_PROGRESS.guard(subject,local,day())){status.textContent='✓ 오늘 학습 완료 (다른 기기)';return;}
      const state=PA_PROGRESS.applyStart(subject,local),p=planFor(data,state);
      if(!p){status.textContent=subject==='english'?`준비된 ${data.launch_days.length}학습일 완료 · 다음 분량 준비 중`:'준비된 학습을 마쳤어요';return;}
      if(p.completed){active={subject,data,state};finalize();status.textContent='✓ 오늘 학습 완료';return;}
      QUIZ_DATA=data;currentSubject=subject;currentLesson=data.lesson;currentMode='exam_prep';
      retryMode=false;originalSession=[];originalSessionAnswers=[];loadQuestionHistory();
      document.getElementById('btn-support-details').hidden=true;
      const exit=document.querySelector('.btn-quit');exit.textContent='홈으로 돌아가기';exit.style.display='';
      await startSession();
      document.querySelector('.header-title').textContent=(subject==='english'?'오늘의 영어':'오늘의 과학')+' · 5문제';
      status.textContent='하던 곳에서 이어 하기';
    }catch(e){status.textContent='학습을 시작하지 못했어요. 저장 공간과 연결을 확인한 뒤 다시 눌러 주세요.';console.error('[exam-start]',e);}
    finally{loading=false;home.inert=false;}
  }
  function cardMarkup(c){return `<section class="science-support-card"><h2>${esc(c.term)}</h2>${renderVisualMedia(c)}<p class="exam-card-lines">${esc(c.easy_explanation)}</p><p class="science-tip">기억할 점 · ${esc(c.exam_tip)}</p><small>교과서 ${c.source_refs[0].printed_pages.join('·')}쪽</small></section>`;}
  function expose(state,q){
    state.__exposures=state.__exposures||{};const list=state.__exposures[day()]||[];
    state.__exposures={[day()]:[...new Set([...list,...rules(q)])]};
  }
  function before(q){
    if(!q._support)return false;
    const s=q._support;s.answered=false;
    if(!s.showCard||s.ready)return false;
    const c=QUIZ_DATA.concept_cards.find(c=>c.id===s.concept);
    const state=JSON.parse(JSON.stringify(active.state));expose(state,q);
    state.__exposures[day()]=[...new Set([...state.__exposures[day()],...(c.rules||[])])];
    if(!write(state))return true;
    active.state=state;
    const box=document.getElementById('question-container');box.style.display='block';
    document.getElementById('instruction-text').textContent='먼저 한 가지를 이해해 보자';
    document.getElementById('btn-hint').style.display='none';
    box.innerHTML=cardMarkup(c)+'<button class="science-continue">이제 문제로 확인하기 →</button>';
    box.querySelector('button').onclick=()=>{
      const st=JSON.parse(JSON.stringify(active.state));st.__plan.tasks.find(t=>t.id===q.id).support.ready=true;
      if(!write(st))return;active.state=st;s.ready=true;showQuestion();
    };
    return true;
  }
  function markHelp(q,kind){
    const st=JSON.parse(JSON.stringify(active.state));const t=st.__plan.tasks.find(t=>t.id===q.id);
    t.support[kind]=true;expose(st,q);
    if(!write(st))return false;
    active.state=st;q._support[kind]=true;hintUsedThisQuestion=true;return true;
  }
  function record(q,correct){
    if(!q._support)return {};
    if(isReplay()){
      // 숙달 연산(error_days·due·independent_days)과 상태 쓰기는 그대로 생략한다.
      // 다만 화면 요약과 연습 기록에 쓸 '사실값'은 만든다 — 모르겠어요를 틀림에 합치지 않기 위해서다.
      // 도움 판정은 이번 세션 안의 플래그만 본다. 원본 세션의 당일 노출 이력을 보면
      // 재연습이 전부 assisted로 찍히는 분류 드리프트가 다시 생긴다(2026-09-20 probe6/7).
      const s=q._support,date=day();
      const helped=!!(hintUsedThisQuestion||s.hint||s.countWarning||s.taught);
      const status=q._support_unsure?'unknown':!correct?'incorrect':helped?'assisted':'independent';
      s.answered=true;pending=JSON.parse(JSON.stringify(active.state));
      return {answer_status:status,practice:true,practice_assisted:helped,
        plan_date:active.state.__plan?.date||date,answer_date:date};
    }
    const s=q._support,state=JSON.parse(JSON.stringify(active.state)),old=state[s.concept]||{},date=day();
    const helped=!!(hintUsedThisQuestion||s.hint||s.countWarning||s.taught||!s.previousDay||s.previousDay>=date||
      rules(q).some(r=>(state.__exposures?.[date]||[]).includes(r)));
    const diagnostic=s.stage==='diagnostic';
    const status=q._support_unsure?'unknown':!correct?'incorrect':diagnostic?'precheck':helped?'assisted':'independent';
    const independent=status==='independent';const same=old.last_day===date;
    const clean=correct&&!q._support_unsure&&!hintUsedThisQuestion;
    const errorDays=diagnostic?(old.error_days||0):independent?0:!clean&&(!same||old.last_ok)?(old.error_days||0)+1:(old.error_days||0);
    state[s.concept]={...old,introduced:old.introduced||!diagnostic,last_day:date,last_ok:clean&&(!same||old.last_ok),
      due:same&&clean&&old.due?old.due:later(!clean&&errorDays>=3?2:independent?3:1),error_days:errorDays,
      independent_days:[...new Set([...(old.independent_days||[]),...(independent?[date]:[])])].slice(-8),last_status:status,
      last_questions:same?[...new Set([...(old.last_questions||[]),q.id])]:[q.id]};
    state.__usage=state.__usage||{};state.__usage[q.id]=(state.__usage[q.id]||0)+1;
    expose(state,q);pending=state;s.answered=true;
    return {support_subject:active.subject,support_concept:s.concept,support_stage:s.stage,support_assisted:helped,
      answer_status:status,learning_day:state.__plan.learningDay||null,plan_date:state.__plan.date,answer_date:date,
      count_warning:!!s.countWarning,rule_tags:q.rule_tags||[],diagnostic};
  }
  function capture(){
    if(!QUIZ_DATA?.support_mode||!active||!pending)return true;
    const state=pending,p=state.__plan;p.answers=sessionAnswers.map(a=>({...a}));p.answered=p.answers.map(a=>a.id);
    const complete=p.tasks.every(t=>p.answered.includes(t.id));
    if(isReplay()){
      const before=active.state;active.state=state;
      if(!savePracticeProgress()){   // 저장 실패 = 답 미수락. 롤백해 다시 풀 수 있게 둔다.
        active.state=before;sessionAnswers.pop();
        if(currentSession[currentQuestionIndex]?._support)currentSession[currentQuestionIndex]._support.answered=false;
        pending=null;showPracticeIssue();return false;
      }
      p.completed=complete;pending=null;return true;
    }
    const newlyCompleted=complete&&!p.completed;
    if(complete&&!p.completed){p.completed=true;p.completed_day=day();state.completed_days=(state.completed_days||0)+1;PA_PROGRESS.stamp(state,active.subject,p);}
    if(!write(state)){sessionAnswers.pop();currentSession[currentQuestionIndex]._support.answered=false;pending=null;return false;}
    active.state=state;pending=null;
    if(newlyCompleted){
      PA_PROGRESS.ensureCompletion(active.subject,state);
      const saved=persistSupportLog(active.subject,p);
      if(saved.ok){active.state.__plan.logged=true;sendToGoogleSheets();}
      else {showSupportRecordIssue(active.subject);scheduleRecordSync();}
      PA_PROGRESS.sync();
    }
    return true;
  }
  function gradeWriting(q,value){
    const norm=String(value).trim().replace(/\s+/g,' ').replace(/[.!?]$/,'').toLowerCase();
    const words=norm?norm.split(' '):[];
    const count_ok=words.length===q.word_count;
    const form_ok=q.accepted_answers.some(a=>a.toLowerCase()===norm);
    return {correct:count_ok&&form_ok,writing_normalized:norm,word_count:words.length,word_count_ok:count_ok,
      writing_error:!count_ok?'word_count':!form_ok?'form_or_meaning':'none'};
  }
  // ── 답 확인 표시(2026-09-24) — 시험모드(오늘의 영어·과학 5문제) 전용 ────────────────────
  // 부정 발문 12문항의 표시 문구. 발문 조건을 그대로 옮긴 고정 표이며, 표에 없는 문항은 추측하지 않는다.
  const NEG_LABEL={'E-L701-A2':'글의 내용과 일치하지 않는 보기','E-L703-A2':'글의 내용과 일치하지 않는 보기',
    'E-L704-A2':'글의 내용과 일치하지 않는 보기','E-L705-A2':'보고서의 내용과 일치하지 않는 보기',
    'E-L503-R3':'알맞지 않은 설명','E-L704-R3':'흐름에 알맞지 않은 문장','E-L506-R2':'기사와 일치하지 않는 보기 2개',
    'E-L506-R3':'대화의 흐름에 가장 알맞지 않은 발화','sci_mid_plate-K01-Q4':'대륙 이동의 증거에 해당하지 않는 보기',
    'sci_mid_element-K04-Q4':'옳지 않은 설명 2개','sci_mid_body-K01-Q2':'옳지 않은 설명','sci_mid_body-K03-Q2':'옳지 않은 설명'};
  const CIRC=i=>String.fromCharCode(0x2460+i);
  // 과학 보기조합: 정답 선택지에 든 기호는 ○, 나머지는 ×. '옳은 것만' 발문에만 붙인다(부정형 조합에는 붙이지 않는다).
  function comboLine(q){
    if(Array.isArray(q.correct)||!Array.isArray(q.options)||!/옳은 것만/.test(q.question||''))return '';
    const labels=[...new Set(String(q.sentence||'').match(/^[ㄱㄴㄷㄹㅁ](?=\.)/gm)||[])];
    const opt=String(q.options[q.correct]??'').trim();
    if(labels.length<2||!/^[ㄱㄴㄷㄹㅁ](, ?[ㄱㄴㄷㄹㅁ])*$/.test(opt))return '';
    const on=new Set(opt.split(/, ?/));
    return labels.map(l=>l+' '+(on.has(l)?'○':'×')).join(' · ');
  }
  // 정답 상자. q 는 화면에 보인 그대로의 문항(다시 풀기면 섞인 options/correct), shown 은 보인 번호(0부터)다.
  // mode 'question' = 문제 화면(정답 2개는 번호만), 'card' = 결과 카드(정답 2개도 문구까지).
  function answerBoxHtml(q,shown,unknown,mode,answer){
    const correct=Array.isArray(q.correct)?q.correct:[q.correct],multi=q.answer_mode==='multiple';
    const label=NEG_LABEL[q.id]||'',neg=label?`<span class="exam-ab-neg">· ${esc(label)}</span>`:'';
    const row=(k,v)=>`<div class="exam-ab-row"><span class="exam-ab-k">${k}</span>${v}</div>`;
    const none='<span class="exam-ab-v none">아직 모르겠어요</span>';
    if(q.answer_mode==='writing'){
      // 내가 쓴 답은 입력 원문. 원문이 없는 과거 기록은 저장된 값(정규화 값)을 그대로 보여 주고 복원하지 않는다.
      const typed=typeof answer?.writing_raw==='string'?answer.writing_raw:typeof answer?.writing_normalized==='string'?answer.writing_normalized:'';
      return row('내가 쓴 답',unknown?none:`<span class="exam-ab-v bad">${esc(typed)}</span>`)
        +row('모범답',`<span class="exam-ab-v ok">${esc((q.accepted_answers||[])[0]||'')}</span>`);
    }
    let mine,right;
    if(multi&&mode==='card'){
      const line=(i,cls,tag)=>`<span class="exam-ab-ln ${cls}">${CIRC(i)} ${esc(q.options[i])}${tag?` <span class="exam-ab-tag">${tag}</span>`:''}</span>`;
      mine=unknown?none:`<span class="exam-ab-v">${shown.map(i=>correct.includes(i)?line(i,'ok','맞게 고름'):line(i,'bad','잘못 고름')).join('')}</span>`;
      right=`<span class="exam-ab-v">${label?`<span class="exam-ab-ln">${neg}</span>`:''}${correct.map(i=>line(i,'ok',unknown||shown.includes(i)?'':'못 고름')).join('')}</span>`;
    }else{
      if(unknown)mine=none;
      else if(multi)mine=`<span class="exam-ab-v ${shown.length===correct.length&&shown.every(i=>correct.includes(i))?'ok':'bad'}">${shown.map(CIRC).join('·')}</span>`;
      else mine=shown.length?`<span class="exam-ab-v ${correct.includes(shown[0])?'ok':'bad'}">${CIRC(shown[0])} ${esc(q.options[shown[0]])}</span>`:'<span class="exam-ab-v none"></span>';   // 선택 기록이 없는 옛 답안은 비워 둔다(추측하지 않음)
      if(multi)right=`<span class="exam-ab-v ok">${correct.map(CIRC).join('·')}${label?' '+neg:''}</span>`;
      else right=label?`<span class="exam-ab-v ok">${CIRC(correct[0])} ${neg}<br>${esc(q.options[correct[0]])}</span>`
        :`<span class="exam-ab-v ok">${CIRC(correct[0])} ${esc(q.options[correct[0]])}</span>`;
    }
    const combo=comboLine(q);
    return row('내 선택',mine)+row('정답',right)
      +(combo?`<div class="exam-ab-row exam-ab-combo"><span class="exam-ab-k">보기 판단</span><span class="exam-ab-v">${combo}</span></div>`:'');
  }
  // 답이 받아들여진 뒤에만 부른다: 고른 보기·정답 보기 표시, 정답 상자, 흐려진 버튼 숨김.
  function showAnswer(q,opts,shown,unknown){
    const correct=Array.isArray(q.correct)?q.correct:[q.correct],multi=q.answer_mode==='multiple';
    opts.querySelectorAll('.option-btn').forEach((b,i)=>{
      const c=correct.includes(i),s=shown.includes(i);if(!c&&!s)return;
      const kind=c&&s?'ok':s?'bad':multi&&shown.length?'miss':'ok';
      const t=document.createElement('span');t.className='exam-mark-badge exam-mark-badge-'+kind;
      t.textContent=c&&s?'내 선택 · 정답':s?'내 선택':kind==='miss'?'정답 · 못 고름':'정답';
      b.classList.add('exam-mark','exam-mark-'+kind);b.appendChild(t);
    });
    opts.querySelectorAll('.science-unsure,.science-continue').forEach(b=>{b.style.display='none';});
    const ab=document.createElement('div');ab.className='exam-answer-box';ab.innerHTML=answerBoxHtml(q,shown,unknown,'question');
    opts.after(ab);
  }
  // 해설의 n번째 줄 아래 끝(화면 좌표). 줄은 실제로 그려진 글자 줄로 센다(글자 크기·확대와 무관).
  function lineBottom(el,n){
    const rg=document.createRange();rg.selectNodeContents(el);const rows=[];
    for(const r of rg.getClientRects()){if(!r.height)continue;const row=rows.find(x=>Math.abs(x.top-r.top)<2);if(row)row.bottom=Math.max(row.bottom,r.bottom);else rows.push({top:r.top,bottom:r.bottom});}
    rows.sort((a,b)=>a.top-b.top);
    return rows.length?rows[Math.min(n,rows.length)-1].bottom:null;
  }
  // 제출 직후 스크롤(시험모드 전용): 정답 상자 전체와 해설 첫 두 줄이 보이는 만큼만 움직인다.
  // 정답 상자 윗부분은 화면 위로 넘기지 않고, '다음 문항'·'결과 보기' 버튼까지 끌어내리지 않는다.
  function scrollToAnswer(box){
    const fb=box.querySelector('#exam-feedback'),ab=box.querySelector('.exam-answer-box'),pg=box.closest('.page');
    setTimeout(()=>{
      // 그사이 다음 문항으로 넘어갔으면(이 해설 노드가 교체됨) 움직이지 않는다
      if(!fb||!pg||!fb.isConnected||!pg.classList.contains('active'))return;
      const view=pg.getBoundingClientRect();
      let d=0;const want=(lineBottom(fb,2)??fb.getBoundingClientRect().top+52)+8;
      if(want>view.bottom)d=Math.ceil(want-view.bottom);
      const top=(ab&&ab.isConnected?ab:fb).getBoundingClientRect().top-d;
      if(top<view.top+8)d-=Math.ceil(view.top+8-top);
      if(d)pg.scrollBy({top:d,behavior:'smooth'});
    },150);
  }
  // 결과 화면 '다시 볼 문제' — 틀림·모르겠어요 문제만 펼쳐 보여 준다(처음 풀이·다시 풀기 공통).
  // 문항 ID 같은 내부 값은 쓰지 않는다. 보기 번호는 그 회차에 보인 번호다.
  function reviewHtml(){
    const cards=(Array.isArray(currentSession)?currentSession:[]).map((q,k)=>{
      const a=q&&(Array.isArray(sessionAnswers)?sessionAnswers:[]).find(x=>x&&x.id===q.id);
      if(!a||a.correct)return '';
      const unknown=a.answer_status==='unknown';
      const v=asAnswered(q,a),order=Array.isArray(v._display_order)?v._display_order:null;   // v = 답을 낸 그때의 보기(원래 보기 + 답에 남은 보인 순서)
      const shown=(a.selected_indices||[]).map(i=>order?order.indexOf(i):i).filter(i=>i>=0).sort((x,y)=>x-y);
      return `<article class="exam-review-card"><span class="exam-review-tag${unknown?' unk':''}">${k+1}번 · ${unknown?'모르겠어요':'틀림'}</span>`
        +(v.sentence?`<p class="exam-review-sent">${esc(v.sentence)}</p>`:'')+renderVisualMedia(q)
        +`<p class="exam-review-q">${emphasize(q.question)}</p>`
        +`<div class="exam-answer-box">${answerBoxHtml(v,shown,unknown,'card',a)}</div>`
        +`<p class="exam-review-expl">${esc(q.explanation)}</p></article>`;
    }).filter(Boolean);
    return cards.length?`<section class="exam-review"><h3>다시 볼 문제 ${cards.length}개</h3>${cards.join('')}</section>`:'';
  }
  function renderMultiple(q){
    if(!q._support)return PA_SCIENCE_SUPPORT.renderMultiple(q);
    timer={ms:0,start:document.hidden?null:tick()};
    const s=q._support;const box=document.getElementById('question-container');box.style.display='block';
    const label=s.stage==='diagnostic'?'처음 만나는 내용 · 사전 확인 (복습 점수 아님)':s.new?'오늘 배운 내용 적용하기':s.mixed?'여러 날 배운 내용 섞어서 기억 확인':'설명 보기 전, 기억 확인';
    document.getElementById('instruction-text').textContent=label;
    document.getElementById('question-text').innerHTML=emphasize(q.instruction||'알맞은 답을 골라 보세요');
    box.innerHTML=`<p class="exam-card-lines">${esc(q.sentence||'')}</p>${renderVisualMedia(q)}<p><b>${emphasize(q.question)}</b></p><div id="study-options"></div><p id="exam-feedback" role="status"></p>`;
    const opts=box.querySelector('#study-options'),feedback=box.querySelector('#exam-feedback');
    const multi=q.answer_mode==='multiple',writing=q.answer_mode==='writing';
    let selected=new Set(),submitted=false,armTimer=null;
    // 기록은 원래 번호(selected_indices)로 남긴다. 다시 풀기에서 섞였거나 첫 풀이에서 새 순서로 보였으면 보인 순서(display_order)도,
    // 첫 풀이에서 제시어가 바뀌어 보였으면 그 제시어(display_sentence)도 함께 남긴다(기기 안 기록만, 전송 필드는 그대로).
    const order=Array.isArray(q._display_order)?q._display_order:null;
    const shownSentence=q._original&&typeof q.sentence==='string'&&q.sentence!==q._original.sentence?{display_sentence:q.sentence}:{};
    const shownOrder=order?{display_order:order.slice(),...shownSentence}:{};
    const chosen=list=>({selected_indices:list.map(i=>order?order[i]:i).sort((a,b)=>a-b),...shownOrder});
    const finish=(correct,extra={},shown=null)=>{
      if(submitted)return;
      if(recordAnswer(q,correct,extra)===false)return false;
      submitted=true;clearTimeout(armTimer);opts.querySelectorAll('button,input,textarea').forEach(b=>b.disabled=true);
      const hint=document.getElementById('btn-hint');hint.disabled=true;
      feedback.textContent=(correct?'맞았어요. ':'다시 짚어 보자. ')+q.explanation;
      if(!correct){const c=QUIZ_DATA.concept_cards.find(c=>c.id===s.concept);const d=document.createElement('details');d.className='science-repair';d.open=true;d.innerHTML='<summary>헷갈린 핵심 짚어 보기</summary>'+cardMarkup(c);box.appendChild(d);}
      if(!writing)showAnswer(q,opts,shown||[],!shown);   // 서술형 문제 화면은 바꾸지 않는다(스크롤만 적용)
      showNextButton();
      scrollToAnswer(box);
      return true;
    };
    if(writing){
      const input=document.createElement('textarea');input.className='exam-writing';input.setAttribute('aria-label','빈칸에 들어갈 말');input.autocapitalize='none';input.spellcheck=false;
      const draft=active.state.__plan.tasks.find(t=>t.id===q.id).draft||'';input.value=draft;
      input.oninput=()=>{const st=JSON.parse(JSON.stringify(active.state));st.__plan.tasks.find(t=>t.id===q.id).draft=input.value;if(write(st))active.state=st;};opts.appendChild(input);
      const b=document.createElement('button');b.className='science-continue';b.textContent='쓴 답 제출';b.onclick=()=>{if(!input.value.trim()){feedback.textContent='빈칸에 들어갈 말만 써 보세요. 모르면 아래 버튼을 눌러도 좋아요.';return;}const g=gradeWriting(q,input.value);finish(g.correct,{...g,writing_raw:String(input.value).trim()});};opts.appendChild(b);
    }else{
      const draft=active.state.__plan.tasks.find(t=>t.id===q.id).selected||[];selected=new Set(draft);
      q.options.forEach((option,i)=>{const b=document.createElement('button');b.className='option-btn';b.style.cssText='display:block;width:100%;text-align:left;padding:12px;margin:8px 0;border:2px solid #ddd;border-radius:10px;background:white;font-size:16px;line-height:1.6';b.textContent=String.fromCharCode(0x2460+i)+' '+option;
        if(multi){b.setAttribute('aria-pressed',String(selected.has(i)));b.style.borderColor=selected.has(i)?'#1565c0':'#ddd';}
        b.onclick=()=>{if(submitted)return;if(!multi){finish(i===q.correct,chosen([i]),[i]);return;}
          const next=new Set(selected);next.has(i)?next.delete(i):next.add(i);const st=JSON.parse(JSON.stringify(active.state));st.__plan.tasks.find(t=>t.id===q.id).selected=[...next];if(!write(st))return;active.state=st;selected=next;b.setAttribute('aria-pressed',String(selected.has(i)));b.style.borderColor=selected.has(i)?'#1565c0':'#ddd';feedback.textContent=`${selected.size}개 선택 · 정답 ${q.answer_count}개`;};opts.appendChild(b);});
      if(multi){feedback.textContent=`정답 ${q.answer_count}개를 선택하세요.`;const b=document.createElement('button');b.className='science-continue';b.textContent='선택한 답 제출';
        b.onclick=()=>{if(submitted)return;if(selected.size!==q.answer_count){if(markHelp(q,'countWarning'))feedback.textContent=`정답 ${q.answer_count}개를 선택한 뒤 제출하세요. 개수 도움을 받았어요.`;return;}
          finish(selected.size===q.correct.length&&q.correct.every(i=>selected.has(i)),{...chosen([...selected]),required_count:q.answer_count},[...selected].sort((a,b)=>a-b));};opts.appendChild(b);}
    }
    const unsure=document.createElement('button');unsure.className='science-unsure';unsure.textContent='아직 모르겠어요';unsure.onclick=()=>{q._support_unsure=true;if(finish(false,{...shownOrder})===false)q._support_unsure=false;};
    // 오터치 방지(2026-09-21): 개념카드 '이제 문제로 확인하기 →'와 같은 좌표에 놓이므로 렌더 직후 잠시 잠근다.
    // 제출된 문항·떨어져 나간 노드는 다시 풀지 않는다(submitted / isConnected).
    unsure.disabled=true;armTimer=setTimeout(()=>{if(!submitted&&unsure.isConnected)unsure.disabled=false;},Number(window.PA_UNSURE_ARM_MS)||600);
    opts.appendChild(unsure);
    const hint=document.getElementById('btn-hint');hint.disabled=false;hint.style.display=q.hint?'':'none';
    hint.onclick=()=>{if(submitted||!markHelp(q,'hint'))return;document.getElementById('hint-display').style.display='block';document.getElementById('hint-display').textContent=q.hint;};
    if(s.hint||s.countWarning)hintUsedThisQuestion=true;
    return true;
  }
  function after(q){if(!q._support)PA_SCIENCE_SUPPORT.after(q);}
  function detail(a){
    if(a.practice)return "";
    if(!a.support_subject)return PA_SCIENCE_SUPPORT.detail(a);
    return `[${a.support_subject};concept=${a.support_concept};stage=${a.support_stage};status=${a.answer_status};assisted=${Number(a.support_assisted)};plan=${a.plan_date};answered=${a.answer_date};countHelp=${Number(a.count_warning)}${a.selected_indices?';selected='+a.selected_indices.map(i=>i+1).join('+'):''}${Array.isArray(a.display_order)?';shown='+a.display_order.map(i=>i+1).join('-'):''}${a.writing_error?';writing='+a.writing_error+';words='+a.word_count+';typed='+encodeURIComponent(a.writing_normalized):''}]`;
  }
  // 최초 완료와 재연습 완료가 같은 요약을 쓴다. 맞힘/틀림/모르겠어요를 합치지 않는다.
  // 맞힘 + 틀림 + 모르겠어요 + 미응답 = 전체. 도움 여부는 합치지 않고 별도 차원으로 센다.
  function countAnswers(list,planned){
    const n=Array.isArray(list)?list:[];
    const c={total:planned||n.length,correct:0,wrong:0,unknown:0,unanswered:0,independent:0,assisted:0,precheck:0};
    n.forEach(a=>{
      if(a.answer_status==='unknown'){c.unknown++;return;}
      if(a.correct)c.correct++;else c.wrong++;
      if(a.answer_status==='independent')c.independent++;
      else if(a.answer_status==='assisted')c.assisted++;
      else if(a.answer_status==='precheck')c.precheck++;
    });
    c.unanswered=Math.max(0,c.total-n.length);
    return c;
  }
  function summaryCounts(){
    const planned=(active?.state?.__plan?.tasks||[]).length||(Array.isArray(currentSession)?currentSession.length:0)||sessionAnswers.length;
    return countAnswers(sessionAnswers,planned);
  }
  // '처음 풀 때'는 재연습 시작 시점에 묶어 둔 스냅샷만 본다.
  // 저장소를 다시 읽으면 그 사이 plan 이 교체됐을 때 다른 세션 점수를 보여 준다.
  function originalCounts(){
    const o=active?.practice?.origin;
    if(!o||!Array.isArray(o.answers)||!o.answers.length)return null;
    return countAnswers(o.answers,o.total);
  }
  function result(){
    const againBtn=document.getElementById('btn-support-replay');
    if(!QUIZ_DATA?.support_mode){
      PA_SCIENCE_SUPPORT.result();document.getElementById('exam-support-result')?.remove();
      document.getElementById('result-page')?.classList.remove('exam-result-top');   // 다른 결과 화면은 가운데 정렬 그대로
      // 시험모드 결과에서 쓰던 버튼/핸들러가 다른 학습 결과 화면에 남지 않게 초기화한다.
      if(againBtn){againBtn.hidden=true;againBtn.onclick=null;}
      return;
    }
    const isRep=isReplay(),subject=active?.subject||currentSubject;
    const rp=document.getElementById('result-page');
    if(rp){rp.classList.add('exam-result-top');rp.scrollTop=0;}   // 카드가 붙어도 위쪽이 잘리지 않게 위에서부터 쌓고, 늘 맨 위(요약)부터 연다
    if(isRep)stopLease();
    const saveOk=isRep?savePractice(true):true;   // ② 완주 확정
    document.getElementById('btn-retry').style.display='none';document.querySelector('.result-score').style.display='none';
    document.getElementById('missed-questions-container').style.display='none';
    let box=document.getElementById('exam-support-result');if(!box){box=document.createElement('div');box.id='exam-support-result';document.getElementById('result-kid-message').after(box);}
    const c=summaryCounts();
    const how=[c.independent?`도움 없이 맞힘 ${c.independent}`:'',c.assisted?`설명·힌트 본 뒤 맞힘 ${c.assisted}`:'',c.precheck?`처음 사전 확인 맞힘 ${c.precheck}`:''].filter(Boolean).join(' · ');
    // 점수·정답률·등급 표현은 쓰지 않는다. 같은 날 다시 맞힌 것을 숙달로 적지 않는다.
    const tally=x=>`맞힘 ${x.correct} · 틀림 ${x.wrong} · 모르겠어요 ${x.unknown}${x.unanswered?' · 미응답 '+x.unanswered:''}`;
    box.innerHTML=(isRep
        ?`<p class="exam-summary-line">이번 연습: 맞힘 ${c.correct} · 틀림 ${c.wrong}${c.unknown?' · 모르겠어요 '+c.unknown:''}${c.unanswered?' · 미응답 '+c.unanswered:''}</p>`
         +'<p class="exam-summary-note">처음 푼 기록은 그대로예요.</p>'
        :`<p class="exam-summary-line">총 ${c.total}문항 · ${tally(c)}</p>`
         +(how?`<p class="exam-summary-sub">${how}</p>`:'')
         +'<p class="exam-summary-note">연습 결과예요. 시험 예상 점수는 아니에요.</p>')
      +(isRep&&!saveOk?`<p class="exam-summary-warn">${esc(practiceNotice()||'연습 기록을 저장하지 못했어요.')}</p><button id="btn-practice-retry">연습 기록 다시 저장</button>`:'');
    const retry=document.getElementById('btn-practice-retry');
    if(retry)retry.onclick=()=>{if(savePractice(true))result();else showPracticeIssue();};
    if(!isRep){
      const together=QUIZ_DATA.concept_cards.filter(x=>active?.state?.[x.id]?.error_days>=3);
      if(together.length)box.innerHTML+='<details><summary>부모와 같이 짚어 볼 개념</summary><p>'+together.map(x=>esc(x.term)).join(' · ')+'</p><p>오늘 문제는 늘리지 않고 다음 복습에서 다시 확인해요.</p></details>';
    }
    const review=reviewHtml();
    if(review)box.insertAdjacentHTML('beforeend',review);
    const again=againBtn;
    if(again){
      again.hidden=!replaySourceState(subject);
      again.textContent=isRep?'한 번 더 같은 문제 풀기':'같은 문제 다시 풀기';
      again.onclick=()=>{clearReplay();replay(subject);};
    }
    const home=document.querySelector('#result-page .btn-home');home.disabled=false;home.textContent='홈으로 돌아가기';
    document.getElementById('result-kid-message').textContent=isRep?'✓ 다시 풀기 끝':'✓ 학습 완료';
    document.querySelector('.result-emoji').textContent='🌱';
    return true;
  }

  return {shuffleOrder,replay,isReplay,clearReplay,refreshReplayButton,replaySourceState,summaryCounts,originalCounts,savePractice,savePracticeProgress,recoverPractice,sendPractice,practiceLogs,practiceNotice,start,session,restore,before,after,renderMultiple,record,capture,detail,result,canSave,finalize,finishNotice,leave,showDetails,planFor,englishPlan,gradeWriting,day,read,elapsed,emphasize};
})();
