/* 2026-11 기말 과학 배정(2학기 기말). 화면·기록 흐름은 exam_support.js 그대로, 하루 5문항을 고르는 규칙만 여기서 정한다.
   - 틀린 문항(최초 오답)은 '다른 날' 다시 확인한다. 짝 문항(recheck_pair, variant)이 있으면 짝 → 최초 문항 → 짝 …으로 번갈아 내고,
     없으면(same_item) 같은 문항을 낸다. 짝은 최초 오답의 지식(recheck_basis)을 묻도록 만든 문항이라, 이 둘 밖으로 넘어가지 않는다.
     둘 중 하나를 다른 날 혼자 맞히면 해결. (r2: 짝의 짝으로 넘어가 최초 지식을 놓치던 연쇄를 막음 — Codex 11/17 지적 4)
   - 미해결·쉬는 중(실패 3회 이상, 3일) 문항은 재확인 경로로만 나온다. 일반 복습·복습 문항 경로에서는 모두 뺀다. (r2 지적 3)
   - 단원 마무리 복습 문항(중간 범위)은 재확인으로 나오든 처음 나오든 5문항 전체에서 하루 2개까지. (r2 지적 2)
   - 남은 학습 기회가 부족하고 복습 한 칸이 확보되면 그날 새 개념 2개(learn 2+2 + 복습 1).
   - review_from(12/6)부터 복습 위주: 남은 개념은 최소 도입(카드+learn 1)하고 다음 학습일에 다시 확인.
   - no_new_from(12/14, 과학 시험 전날)부터는 새 개념을 자동으로 열지 않는다(JH 11/17). 배운 개념만으로 5문항을 채울 수 없을 때만 1개
     (배운 개념이 없거나, 배운 개념의 문항이 모두 미해결·짝 관계로 막힌 경우 — final.forced로 표시).
   - not_same_day_with 쌍과 짝 문항끼리는 같은 날 배정하지 않는다.
   r3(Codex r2 재검토 11/17):
   - 짝 방향별 확인 범위(pair_confirms, 판정표 29방향): 짝을 혼자 맞혀도 pair_confirms가 true가 아니면 해결이 아니라 '부분 확인'
     (recheck_partial) — 다음 확인은 최초 문항(다른 날). 최초 문항을 다른 날 혼자 맞히면 해결. (지적 1)
   - 미해결이면 최초 문항·고정 짝(pairOf(최초))·지금 낼 문항을 모두 일반 경로에서 뺀다. 쉬는 중이면 셋 다 재확인 경로에서도 뺀다. (지적 2)
   - 탐욕 배정으로 5문항이 안 되면 기존 문항으로 조합을 찾는다(짝·같은 날 금지·복습 상한·막힘 그대로) → 그래도 안 되면 새 개념 하나 더
     (시험 전날이면 첫 학습일이어도 final.forced) → 그래도 안 되면 복습 상한을 넘겨 채움(final.overflow, JH 11/17 유지). (지적 3·6)
   r4(Codex r3 재검토 11/17): 짝 판정 4방향 정정(해결 7·부분 22). 부분 확인 날에는 휴식을 다시 걸지 않는다 — 실패 수는 그대로 두고
     기록 날짜는 '마지막으로 틀린 날'을 유지해, 이미 쉰 문항은 다음 학습일에 최초 문항을 낼 수 있다. final.overflow는 실제로 복습 문항이 상한을 넘은 날만.
   r5(Codex r4 재검토 11/17 선택 개선): 도움 받아 맞힌 날도 휴식을 다시 걸지 않는다 — 기록 날짜는 '마지막으로 틀린 날' 그대로,
     지금 낼 문항도 그대로라 다음 학습일에 같은 문항을 도움 없이 다시 푼다(실패 3회 이상 문항이 시험 직전에 3일 더 밀리던 것을 막음).
   기기 간 진도 공유는 기존 개념 기록(last_questions)으로만 한다 — 새 필드를 만들지 않는다.
   last_questions 항목: 'q:<지금 낼 문항>:<실패수>:<날짜>:<최초 오답 문항>' = 다른 날 다시 확인할 것('q:' 4칸은 r1 형식 — 최초 = 지금 낼 문항),
   'r:<문항>' = 낸 적 있는 복습 문항, 그 밖 = 그날 낸 문항.
   r8(Codex r7 재검토 11/19, JH '서버까지 고침'): 'x:<최초 문항>:<닫은 예약의 마지막 오답일>:<해결한 날>' = 해결 표시(날이 바뀌어도 남는다).
     해결은 예약마다 따로 적는다 — 한 답이 한 예약은 해결하고 다른 예약은 부분 확인할 수 있다(Q4 정답 = Q4 예약 해결 + Q1 예약의 짝 부분 확인).
     기기·서버 간 합치기는 아래 sciFinMergeQuestions_ 하나로(앱 진도 코어·GAS v24 같은 글자) — 순서와 무관하게 예약이 남거나 닫힌다. */
/* SCI_FIN_RECHECK_MERGE_BEGIN (r8, 2026-11-19) — 기말 과학 재확인 예약 합치기. 앱 science_final.js와 GAS v24에 같은 글자로 둔다(시험이 대조). ES5 문법.
   개념 기록 last_questions 두 개를 합친다. primary = 그 밖 칸을 고른 쪽(더 새 기록, 또는 풀던 기기의 기록).
   - 'q:<지금 낼 문항>:<실패 수>:<마지막 오답일>:<최초 문항>' = 다른 날 다시 확인할 예약. 최초 문항별 하나:
     마지막 오답일이 늦은 쪽 → 같은 날이면 실패 수가 큰 쪽 → 같으면 지금 낼 문항이 최초 문항인 쪽(짝 부분 확인으로 넘어간 쪽) → 문자 순.
   - 'x:<최초 문항>:<닫은 예약의 마지막 오답일>:<해결한 날>' = 해결 표시. 최초 문항별 하나: 해결한 날이 늦은 쪽 → 마지막 오답일이 늦은 쪽.
   - 같은 최초 문항의 예약은 해결한 날보다 먼저 틀린 것(마지막 오답일 < 해결한 날)이면 닫는다. 해결한 날과 같은 날 틀린 것은
     순서를 알 수 없어 남긴다(한 번 더 확인). 해결 뒤 새 오답·옛 예약 재전송은 이 규칙만으로 정리된다.
   - 'r:<문항>'(낸 적 있는 복습 문항)은 합집합, 그 밖(그날 낸 문항)은 primary 것.
   어떤 순서·묶음으로 몇 번 합쳐도 결과가 같다(교환·결합·멱등). 결과는 문자 순 정렬. */
function sciFinMergeQuestions_(primary, secondary) {
  var DAY = /^\d{4}-\d{2}-\d{2}$/, q = Object.create(null), x = Object.create(null), keep = Object.create(null), out = [], k;
  function self(e) { return e.target === e.origin ? 1 : 0; }
  function laterQ(e, o) {
    if (e.day !== o.day) return e.day > o.day;
    if (e.fails !== o.fails) return e.fails > o.fails;
    if (self(e) !== self(o)) return self(e) > self(o);
    return e.target > o.target;
  }
  function add(list, isPrimary) {
    if (!Array.isArray(list)) return;
    for (var i = 0; i < list.length; i++) {
      var s = list[i];
      if (typeof s !== 'string') continue;
      var p = s.split(':');
      if (p[0] === 'q') {
        if (!((p.length === 4 || p.length === 5) && p[1] && DAY.test(p[3]))) continue;
        var e = {target: p[1], fails: Math.max(1, parseInt(p[2], 10) || 1), day: p[3], origin: p[4] || p[1]};
        if (!q[e.origin] || laterQ(e, q[e.origin])) q[e.origin] = e;
      } else if (p[0] === 'x') {
        if (!(p.length === 4 && p[1] && DAY.test(p[2]) && DAY.test(p[3]))) continue;
        var o = x[p[1]];
        if (!o || p[3] > o.solved || (p[3] === o.solved && p[2] > o.last)) x[p[1]] = {origin: p[1], last: p[2], solved: p[3]};
      } else if (p[0] === 'r') {
        keep[s] = true;
      } else if (isPrimary) {
        keep[s] = true;
      }
    }
  }
  add(primary, true);
  add(secondary, false);
  for (k in q) {
    if (x[k] && q[k].day < x[k].solved) continue;
    out.push('q:' + q[k].target + ':' + q[k].fails + ':' + q[k].day + ':' + q[k].origin);
  }
  for (k in x) out.push('x:' + x[k].origin + ':' + x[k].last + ':' + x[k].solved);
  for (k in keep) out.push(k);
  return out.sort();
}
/* SCI_FIN_RECHECK_MERGE_END */
const PA_SCIENCE_FINAL=(()=>{
  'use strict';
  const D=86400000;
  let capHits=0;   // 조합 탐색이 노드 상한(200,000)에 닿은 횟수 — 시뮬레이션 점검용(기록·화면에 쓰지 않음)
  const n=s=>Date.UTC(+s.slice(0,4),+s.slice(5,7)-1,+s.slice(8,10))/D;
  const gap=(a,b)=>n(b)-n(a);
  const isFinal=data=>!!(data&&data.final_plan);
  const revId=attach=>attach+'-rev';
  // r8: 기록 하나도 공용 합치기 규칙으로 정리한 뒤 읽는다(같은 최초 문항 예약 하나·해결 표시로 닫힌 예약 제외).
  function entries(rec){
    const q=[],x=[],r=[],asked=[];
    for(const s of sciFinMergeQuestions_(rec&&Array.isArray(rec.last_questions)?rec.last_questions:[],[])){const p=s.split(':');
      if(p[0]==='q')q.push({target:p[1],fails:+p[2],day:p[3],origin:p[4]});
      else if(p[0]==='x')x.push({origin:p[1],last:p[2],day:p[3]});
      else if(p[0]==='r')r.push(s.slice(2));
      else asked.push(s);
    }
    return {q,x,r,asked};
  }
  const encode=(q,r,asked,x=[])=>sciFinMergeQuestions_([...asked,...r.map(v=>'r:'+v),...q.map(e=>'q:'+e.target+':'+e.fails+':'+e.day+':'+e.origin),...x.map(e=>'x:'+e.origin+':'+e.last+':'+e.day)],[]);
  function index(data){
    const byId=Object.create(null);for(const q of data.exam_prep)byId[q.id]=q;
    const review=Object.create(null);for(const x of (data.review_items||[]))review[x.id]=x.attach;
    return {byId,review};
  }
  // 문항이 기록되는 자리: 복습 문항은 '<개념>-rev', 나머지는 그 문항의 기말 개념.
  function storeOf(data,id){const {byId,review}=index(data);return review[id]?revId(review[id]):byId[id]?.linked_concept[0];}
  const pairOf=(byId,origin)=>{const q=byId[origin];return q&&q.recheck_mode==='variant'&&q.recheck_pair&&byId[q.recheck_pair]?q.recheck_pair:null;};
  // 최초 오답 다음 확인 문항: 짝이 있으면 짝, 없으면 같은 문항.
  const firstTarget=(byId,origin)=>pairOf(byId,origin)||origin;
  // 또 틀렸을 때: 최초 문항과 짝 사이에서만 번갈아 낸다(짝의 짝으로 넘어가지 않음).
  const nextTarget=(byId,origin,failed)=>{const p=pairOf(byId,origin);return p&&failed===origin?p:origin;};
  // 미해결 하나가 막는 문항: 지금 낼 문항·최초 문항·최초의 고정 짝(r3 — 지금 낼 문항이 최초로 돌아간 회차에도 짝이 빠지지 않게).
  const lockOf=(byId,e)=>[e.target,e.origin,pairOf(byId,e.origin)].filter(Boolean);
  function blockedSet(state,byId){
    const out=new Set();
    for(const [k,v] of Object.entries(state||{}))if(/^sci_fin-/.test(k))for(const e of entries(v).q)lockOf(byId,e).forEach(x=>out.add(x));
    return out;
  }

  // opt.extra: 규칙보다 새 개념을 하나 더 연다(못 채운 날의 두 번째 단계). opt.overflow: 마지막 단계 — 복습 상한을 넘겨 채움.
  function build(data,state,date,opt){
    opt=opt||{};const extraNew=opt.extra||0;
    const cfg=data.final_plan,{byId,review}=index(data);
    const cards=[...data.concept_cards].sort((a,b)=>a.order-b.order);
    const rec=id=>state[id]&&typeof state[id]==='object'?state[id]:null;
    const fresh=cards.filter(c=>!rec(c.id)?.introduced);
    const known=cards.filter(c=>rec(c.id)?.introduced);
    const introducedTotal=Object.keys(state).filter(k=>/^sci_fin-K\d+$/.test(k)&&rec(k)?.introduced).length;
    const remaining=Math.max(0,cfg.planned_total-introducedTotal);
    const finalWeek=date>=cfg.review_from;
    const examEve=!!cfg.no_new_from&&date>=cfg.no_new_from;
    const expected=Math.max(0,gap(date,cfg.intro_deadline)+1)*cfg.study_rate;
    const cap=cfg.review_per_day||2;
    const used=new Set(),tasks=[];
    const isRev=id=>!!review[id];
    const revCount=()=>tasks.filter(t=>isRev(t.id)).length;
    const conflict=(id,set)=>{
      const q=byId[id];if(!q||set.has(id))return true;
      if((q.not_same_day_with||[]).some(x=>set.has(x)))return true;
      for(const u of set){const x=byId[u];if((x.not_same_day_with||[]).includes(id))return true;
        // 짝 문항끼리 같은 날 내면 한쪽이 다른 쪽의 답이 된다.
        if(x.recheck_pair===id||q.recheck_pair===u)return true;}
      return false;
    };
    const clash=id=>conflict(id,used);
    // 1) 다시 확인할 문항. 미해결 문항(지금 낼 문항·최초 문항·고정 짝)은 쉬는 중이든 아니든 모두 일반 경로에서 뺀다.
    const blocked=blockedSet(state,byId);
    // 실패 3회 이상이면 3일 쉬었다가 다시. 쉬는 문항(지금 낼 문항·최초 문항·고정 짝)은 다른 오답의 재확인으로도 내지 않는다.
    const resting=new Set(),all=[];
    for(const [k,v] of Object.entries(state)){
      if(k.startsWith('__')||!/^sci_fin-/.test(k))continue;
      for(const e of entries(v).q){all.push({...e,store:k});if(e.fails>=3&&gap(e.day,date)<3)lockOf(byId,e).forEach(x=>resting.add(x));}
    }
    const queue=all.filter(e=>byId[e.target]&&e.day<date&&!resting.has(e.target));
    queue.sort((a,b)=>b.fails-a.fails||(a.day<b.day?-1:a.day>b.day?1:0)||(a.target<b.target?-1:1));
    const offered=new Set();for(const [k,v] of Object.entries(state))if(/-rev$/.test(k))entries(v).r.forEach(x=>offered.add(x));
    // 새 개념 수 결정
    let newCards=[];
    if(fresh.length){
      if(examEve)newCards=[];   // r3: 시험 전날은 첫 학습일이어도 규칙상 0개 — 열면 forced
      else if(finalWeek)newCards=[fresh[0]];
      else newCards=remaining>expected&&fresh.length>=2?fresh.slice(0,2):[fresh[0]];
    }
    const reviewEligible=id=>{const a=review[id];return !!a&&!offered.has(id)&&!blocked.has(id)&&(rec(a)?.introduced||newCards.some(c=>c.id===a));};
    // 새 개념 2개는 복습 한 칸이 확보될 때만.
    if(newCards.length===2){
      const anyReview=queue.length||(data.review_items||[]).some(x=>reviewEligible(x.id))||known.some(c=>data.exam_prep.some(q=>q.linked_concept[0]===c.id&&q.practice_role==='recall'&&!blocked.has(q.id)));
      if(!anyReview)newCards=[newCards[0]];
    }
    const learnPer=finalWeek?1:2;
    if(extraNew){const k=newCards.length+extraNew;if(fresh.length<k||k*learnPer>5)return null;newCards=fresh.slice(0,k);}
    const newIds=new Set(newCards.map(c=>c.id));
    const recallSlots=()=>5-tasks.length-newCards.length*learnPer;
    const support=(id,extra)=>{const q=byId[id],concept=storeOf(data,id),r=rec(concept);
      return {concept,stage:q.practice_role||'recall',new:false,showCard:false,taught:false,previousDay:r?.last_day,ready:false,answered:false,...extra};};
    const push=(id,extra)=>{used.add(id);tasks.push({id,support:support(id,extra)});};
    const pushQ=e=>push(e.target,{stage:'recall',recheck:true,recheck_of:e.origin,previousDay:e.day,review:isRev(e.target)});
    const pushR=id=>push(id,{stage:'recall',review:true,previousDay:cfg.review_baseline_day});
    let overflow=false;
    // 2) 미해결 우선 — 한 자리(개념)당 하루 1문항, 복습 문항은 하루 상한 안에서
    const perStore=new Set();
    for(const e of queue){if(recallSlots()<=0)break;if(perStore.has(e.store)||clash(e.target))continue;
      if(isRev(e.target)&&revCount()>=cap)continue;
      perStore.add(e.store);pushQ(e);}
    // 3) 앞 학습일에 처음 배운 개념의 다음 날 확인(아직 혼자 맞힌 날이 없는 개념) — 복습 문항보다 먼저.
    //    자리가 모자라면 남은 개념은 그다음 학습일로 넘어간다.
    const ranked=[...known].sort((a,b)=>{const x=rec(a.id),y=rec(b.id);
      return Number(x.due>date)-Number(y.due>date)||(x.last_day<y.last_day?-1:x.last_day>y.last_day?1:0)||Number(x.last_ok)-Number(y.last_ok)||a.order-b.order;});
    const pickRecall=c=>{const asked=new Set(entries(rec(c.id)).asked);
      const cand=data.exam_prep.filter(q=>q.linked_concept[0]===c.id&&!isRev(q.id)&&!blocked.has(q.id)&&!clash(q.id));
      cand.sort((a,b)=>Number(asked.has(a.id))-Number(asked.has(b.id))||Number(a.practice_role!=='recall')-Number(b.practice_role!=='recall')||(state.__usage?.[a.id]||0)-(state.__usage?.[b.id]||0));
      return cand[0]?.id;};
    const visited=new Set(tasks.map(t=>t.support.concept));
    for(const c of ranked){if(recallSlots()<=0)break;const r=rec(c.id);
      if(visited.has(c.id)||r.last_day>=date||r.due>date||(r.independent_days||[]).length)continue;
      const id=pickRecall(c);if(id){push(id);visited.add(c.id);}}
    // 4) 아직 내지 않은 단원 마무리 복습 문항(중간 범위) — 5문항 전체에서 하루 상한까지
    for(const x of (data.review_items||[])){if(recallSlots()<=0||revCount()>=cap)break;
      if(!reviewEligible(x.id)||clash(x.id))continue;pushR(x.id);}
    // 5) 이미 배운 개념 다시 확인 — due 지난 개념, 오래된 개념 순
    for(let round=0;round<3&&recallSlots()>0;round++)
      for(const c of ranked){if(recallSlots()<=0)break;const id=pickRecall(c);if(id)push(id);}
    // 남은 미해결(한 자리 1문항 제한 해제)·남은 복습 문항 — 복습 상한은 그대로
    for(const e of queue){if(recallSlots()<=0)break;if(clash(e.target)||(isRev(e.target)&&revCount()>=cap))continue;pushQ(e);}
    for(const x of (data.review_items||[])){if(recallSlots()<=0||revCount()>=cap)break;if(!reviewEligible(x.id)||clash(x.id))continue;pushR(x.id);}
    // 6) 새 개념: 카드 → learn
    const learnTasks=[];
    for(const c of newCards){
      const learn=data.exam_prep.filter(q=>q.linked_concept[0]===c.id&&q.practice_role==='learn'&&!isRev(q.id)&&!blocked.has(q.id));
      const take=learn.filter(q=>!clash(q.id)).slice(0,learnPer);
      take.forEach((q,i)=>{used.add(q.id);learnTasks.push({id:q.id,support:{...support(q.id),stage:'learn',new:true,showCard:i===0,taught:true}});});
    }
    tasks.push(...learnTasks);
    // 7) 그래도 5문항이 안 되면 오늘 배운 개념의 recall(첫날 등) → 배운 개념을 더 돌린다
    for(const c of newCards){if(tasks.length>=5)break;const id=pickRecall(c);if(id){used.add(id);tasks.push({id,support:{...support(id),stage:'recall',taught:true}});}}
    for(let progress=true;tasks.length<5&&progress;){progress=false;
      for(const c of cards){if(tasks.length>=5)break;if(!rec(c.id)?.introduced&&!newIds.has(c.id))continue;const id=pickRecall(c);if(id){push(id);progress=true;}}}
    // r3: 탐욕 배정으로 못 채우면 — 새 개념(카드+learn)은 그대로 두고 나머지 자리를 기존 문항 조합으로 찾는다.
    //     후보 = 재확인(쉬는 문항 제외) → 배운 개념 문항(막힘 제외, pickRecall 순) → 복습 문항(아직 안 낸 것) → 오늘 새 개념의 recall.
    //     짝·같은 날 금지·복습 상한은 그대로. 후보가 작아 백트래킹으로 충분(탐색 노드 상한 200,000).
    let searched=false;
    if(tasks.length<5){
      const fixed=learnTasks.slice(),need=5-fixed.length,cands=[],seen=new Set(fixed.map(t=>t.id));
      const add=(id,kind,e)=>{if(!seen.has(id)&&byId[id]){seen.add(id);cands.push({id,kind,e,rev:isRev(id)});}};
      const pool=c=>{const asked=new Set(entries(rec(c.id)).asked);
        return data.exam_prep.filter(q=>q.linked_concept[0]===c.id&&!isRev(q.id)&&!blocked.has(q.id))
          .sort((a,b)=>Number(asked.has(a.id))-Number(asked.has(b.id))||Number(a.practice_role!=='recall')-Number(b.practice_role!=='recall')||(state.__usage?.[a.id]||0)-(state.__usage?.[b.id]||0));};
      for(const e of queue)add(e.target,'q',e);
      for(const c of ranked)for(const q of pool(c))add(q.id,'k');
      for(const x of (data.review_items||[]))if(reviewEligible(x.id))add(x.id,'r');
      for(const c of newCards)for(const q of pool(c))add(q.id,'n');
      const set=new Set(fixed.map(t=>t.id)),chosen=[];let nodes=0,found=null;
      const dfs=(i,rev)=>{
        if(chosen.length===need){found=chosen.slice();return true;}
        if(++nodes>200000){if(nodes===200001)capHits++;return false;}
        for(let j=i;j<cands.length&&cands.length-j>=need-chosen.length;j++){const c=cands[j];
          if((c.rev&&rev>=cap)||conflict(c.id,set))continue;
          chosen.push(c);set.add(c.id);if(dfs(j+1,rev+(c.rev?1:0)))return true;chosen.pop();set.delete(c.id);}
        return false;};
      if(need>=0&&dfs(0,0)){
        tasks.length=0;used.clear();
        for(const c of found)if(c.kind!=='n'){if(c.kind==='q')pushQ(c.e);else if(c.kind==='r')pushR(c.id);else push(c.id);}
        for(const t of fixed){used.add(t.id);tasks.push(t);}
        for(const c of found)if(c.kind==='n'){used.add(c.id);tasks.push({id:c.id,support:{...support(c.id),stage:'recall',taught:true}});}
        searched=true;
      }
    }
    // 마지막 수단(opt.overflow): 복습 상한을 넘겨서라도 채운다 — 조합 탐색·새 개념 하나 더로도 못 채운 날만(final.overflow).
    if(tasks.length<5&&opt.overflow){
      for(const e of queue){if(tasks.length>=5)break;if(clash(e.target))continue;pushQ(e);overflow=true;}
      for(const x of (data.review_items||[])){if(tasks.length>=5)break;if(!reviewEligible(x.id)||clash(x.id))continue;pushR(x.id);overflow=true;}
    }
    if(tasks.length<5)return null;
    return {date,tasks,concepts:[...new Set(tasks.map(t=>t.support.concept))],answers:[],answered:[],exposed:[],completed:false,
      final:{mode:examEve?'exam_eve':finalWeek?'review_week':'normal',new_concepts:newCards.map(c=>c.id),remaining,expected:Math.round(expected*10)/10,
        review_count:revCount(),overflow:revCount()>cap,forced:extraNew>0,searched}};   // r4: 표시는 실제 상한 초과와 일치
  }
  function makePlan(data,state,date){
    // 규칙대로(탐욕 → 조합 탐색) → 새 개념 하나 더(시험 전날이면 forced) → 그래도 못 채우면 복습 상한 넘김(overflow).
    const p=build(data,state,date,{})||build(data,state,date,{extra:1})||build(data,state,date,{extra:1,overflow:true})||build(data,state,date,{overflow:true});
    if(!p)throw new Error('science-final-plan-incomplete');
    return p;
  }
  // exam_support.record()가 개념 기록을 만든 뒤 호출 — last_questions에 '다시 확인할 것'을 이어 적고,
  // 풀이 기록에 남길 재확인 정보(최초 오답 문항·같은 문항/다른 형식·해결 여부)를 돌려준다.
  function update(data,next,old,q,s,status,date){
    const {byId,review}=index(data),e=entries(old),same=old?.last_day===date;
    const asked=[...new Set([...(same?e.asked:[]),q.id])],rs=e.r.slice();
    const isReview=!!review[q.id];
    if(isReview&&!rs.includes(q.id))rs.push(q.id);
    const bad=status==='incorrect'||status==='unknown';
    const qs=[],of=[],modes=[],xs=e.x.slice();let resolved=false,partial=false;
    for(const x of e.q){
      if(x.target!==q.id&&x.origin!==q.id){qs.push(x);continue;}
      of.push(x.origin);modes.push(q.id===x.origin?'same_item':'variant');
      if(status==='independent'&&x.day<date){
        // 다른 날 혼자 맞힘: 최초 문항이면 해결. 짝이면 pair_confirms(짝 정답이 최초 확인 기준을 모두 확인)일 때만 해결,
        // 아니면 부분 확인 — 실패 수는 그대로, 다음 확인은 최초 문항(다른 날). (r3 지적 1)
        // r4: 날짜는 마지막으로 틀린 날(x.day)을 그대로 둔다 — 부분 확인한 날부터 3일 휴식을 다시 걸지 않는다(Codex r3 권고).
        // r8: 해결 표시는 이 예약에만(Codex r7 재검토 2) — 같은 답이 부분 확인한 다른 예약은 아래에서 최초 문항 예약으로 남는다.
        if(q.id===x.origin||byId[x.origin]?.pair_confirms===true){resolved=true;xs.push({origin:x.origin,last:x.day,day:date});continue;}
        partial=true;qs.push({origin:x.origin,target:x.origin,fails:x.fails,day:x.day});continue;
      }
      if(bad){qs.push({origin:x.origin,target:nextTarget(byId,x.origin,q.id),fails:x.fails+1,day:date});continue;} // 또 틀림 → 최초↔짝
      qs.push({...x});   // 도움 받아 맞힘 = 해결 아님. r5: 실패 수·지금 낼 문항·날짜(마지막으로 틀린 날)를 그대로 둔다 — 휴식을 다시 걸지 않고 다음 학습일에 같은 문항을 혼자 풀게 한다.
    }
    const first=!of.length&&(bad||(isReview&&status!=='independent'));
    if(first)qs.push({origin:q.id,target:firstTarget(byId,q.id),fails:1,day:date});
    next.last_questions=encode(qs,rs,asked,xs);
    return {recheck_of:of.join('+'),recheck_mode:modes.join('+'),recheck_resolved:resolved,recheck_partial:partial,recheck_started:first};
  }
  function pending(state){const out=[];for(const [k,v] of Object.entries(state||{}))if(/^sci_fin-/.test(k))for(const e of entries(v).q)out.push({...e,store:k});return out;}
  return Object.freeze({isFinal,makePlan,update,entries,encode,storeOf,pending,firstTarget,nextTarget,mergeQuestions:sciFinMergeQuestions_,searchCapHits:()=>capHits});
})();
if(typeof module!=='undefined')module.exports=PA_SCIENCE_FINAL;
