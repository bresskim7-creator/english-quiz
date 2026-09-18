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
  const emphasize=s=>esc(s).replace(/(해당하지 않는|적절하지 않은|올바르지 않은|바르지 않은|알맞지 않은|거리가 먼|아닌 것|틀린 것|틀린|아닌|않는|없는|못한)/g,'<span class="exam-negative" style="color:#E53935;font-weight:700;text-decoration:underline">$1</span>');
  const day=(d=new Date())=>PA_PROGRESS.day(d);
  const later=n=>{const d=new Date();d.setDate(d.getDate()+n);return day(d);};
  function read(subject){
    const raw=localStorage.getItem(KEYS[subject]);
    if(!raw)return {};
    const s=JSON.parse(raw);
    if(!s||typeof s!=='object'||Array.isArray(s))throw Error('학습 기록을 읽지 못했어요. 기록을 보존한 채 확인이 필요해요.');
    return s;
  }
  function write(s){return safeSetItem(KEYS[active.subject],JSON.stringify(s));}
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
      return {...q,_support:{...t.support,ready:!!t.support.ready,answered:false}};
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
    if(!active?.state.__plan?.completed)return true;
    if(active.state.__plan.finalized){finishIssue='';return true;}
    const state=JSON.parse(JSON.stringify(active.state));state.__plan.finalized=true;
    if(!write(state)){finishIssue='답은 저장됐어요. 마무리 표시는 다음에 다시 저장할게요.';return false;}
    active.state=state;finishIssue='';return true;
  }
  function finishNotice(){return finishIssue;}
  function leave(){goHome();}
  function showDetails(){if(active?.state.__plan?.completed)showPage('result-page');}
  async function start(subject){
    if(loading)return;
    loading=true;
    const home=document.getElementById('home-page');home.inert=true;
    const status=document.getElementById(subject+'-support-status');status.textContent='자료를 준비하고 있어요…';
    try{
      let data;
      if(subject==='english')data=window.PA_ENGLISH_EXAM;
      else{
        const lessons=[];
        for(const id of IDS){const l=await fetchVocabJsonp('lesson_'+id+'.json');if(l.lesson_id!==id)throw Error('자료 버전이 맞지 않아요. 다시 시작해 주세요.');lessons.push(l);}
        data={subject:'science',lesson:'sci_mid_mix',lesson_id:'sci_mid_mix',title:'오늘의 과학',support_mode:true,
          concept_cards:lessons.flatMap(l=>l.concept_cards),exam_prep:lessons.flatMap(l=>l.exam_prep)};
      }
      recoverSupportLogs();
      PA_PROGRESS.promote();
      const local=read(subject);
      if(PA_PROGRESS.guard(subject,local,day())){status.textContent='✓ 오늘 학습 완료 (다른 기기)';return;}
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
    let selected=new Set(),submitted=false;
    const finish=(correct,extra={})=>{
      if(submitted)return;
      if(recordAnswer(q,correct,extra)===false)return false;
      submitted=true;opts.querySelectorAll('button,input,textarea').forEach(b=>b.disabled=true);
      const hint=document.getElementById('btn-hint');hint.disabled=true;
      feedback.textContent=(correct?'맞았어요. ':'다시 짚어 보자. ')+q.explanation;
      if(!correct){const c=QUIZ_DATA.concept_cards.find(c=>c.id===s.concept);const d=document.createElement('details');d.className='science-repair';d.open=true;d.innerHTML='<summary>헷갈린 핵심 짚어 보기</summary>'+cardMarkup(c);box.appendChild(d);}
      showNextButton();
      return true;
    };
    if(writing){
      const input=document.createElement('textarea');input.className='exam-writing';input.setAttribute('aria-label','빈칸에 들어갈 말');input.autocapitalize='none';input.spellcheck=false;
      const draft=active.state.__plan.tasks.find(t=>t.id===q.id).draft||'';input.value=draft;
      input.oninput=()=>{const st=JSON.parse(JSON.stringify(active.state));st.__plan.tasks.find(t=>t.id===q.id).draft=input.value;if(write(st))active.state=st;};opts.appendChild(input);
      const b=document.createElement('button');b.className='science-continue';b.textContent='쓴 답 제출';b.onclick=()=>{if(!input.value.trim()){feedback.textContent='빈칸에 들어갈 말만 써 보세요. 모르면 아래 버튼을 눌러도 좋아요.';return;}const g=gradeWriting(q,input.value);finish(g.correct,g);};opts.appendChild(b);
    }else{
      const draft=active.state.__plan.tasks.find(t=>t.id===q.id).selected||[];selected=new Set(draft);
      q.options.forEach((option,i)=>{const b=document.createElement('button');b.className='option-btn';b.style.cssText='display:block;width:100%;text-align:left;padding:12px;margin:8px 0;border:2px solid #ddd;border-radius:10px;background:white;font-size:16px;line-height:1.6';b.textContent=String.fromCharCode(0x2460+i)+' '+option;
        if(multi){b.setAttribute('aria-pressed',String(selected.has(i)));b.style.borderColor=selected.has(i)?'#1565c0':'#ddd';}
        b.onclick=()=>{if(submitted)return;if(!multi){finish(i===q.correct,{selected_indices:[i]});return;}
          const next=new Set(selected);next.has(i)?next.delete(i):next.add(i);const st=JSON.parse(JSON.stringify(active.state));st.__plan.tasks.find(t=>t.id===q.id).selected=[...next];if(!write(st))return;active.state=st;selected=next;b.setAttribute('aria-pressed',String(selected.has(i)));b.style.borderColor=selected.has(i)?'#1565c0':'#ddd';feedback.textContent=`${selected.size}개 선택 · 정답 ${q.answer_count}개`;};opts.appendChild(b);});
      if(multi){feedback.textContent=`정답 ${q.answer_count}개를 선택하세요.`;const b=document.createElement('button');b.className='science-continue';b.textContent='선택한 답 제출';
        b.onclick=()=>{if(submitted)return;if(selected.size!==q.answer_count){if(markHelp(q,'countWarning'))feedback.textContent=`정답 ${q.answer_count}개를 선택한 뒤 제출하세요. 개수 도움을 받았어요.`;return;}
          finish(selected.size===q.correct.length&&q.correct.every(i=>selected.has(i)),{selected_indices:[...selected].sort(),required_count:q.answer_count});};opts.appendChild(b);}
    }
    const unsure=document.createElement('button');unsure.className='science-unsure';unsure.textContent='아직 모르겠어요';unsure.onclick=()=>{q._support_unsure=true;if(finish(false)===false)q._support_unsure=false;};opts.appendChild(unsure);
    const hint=document.getElementById('btn-hint');hint.disabled=false;hint.style.display=q.hint?'':'none';
    hint.onclick=()=>{if(submitted||!markHelp(q,'hint'))return;document.getElementById('hint-display').style.display='block';document.getElementById('hint-display').textContent=q.hint;};
    if(s.hint||s.countWarning)hintUsedThisQuestion=true;
    return true;
  }
  function after(q){if(!q._support)PA_SCIENCE_SUPPORT.after(q);}
  function detail(a){
    if(!a.support_subject)return PA_SCIENCE_SUPPORT.detail(a);
    return `[${a.support_subject};concept=${a.support_concept};stage=${a.support_stage};status=${a.answer_status};assisted=${Number(a.support_assisted)};plan=${a.plan_date};answered=${a.answer_date};countHelp=${Number(a.count_warning)}${a.selected_indices?';selected='+a.selected_indices.map(i=>i+1).join('+'):''}${a.writing_error?';writing='+a.writing_error+';words='+a.word_count+';typed='+encodeURIComponent(a.writing_normalized):''}]`;
  }
  function result(){
    if(!QUIZ_DATA?.support_mode){PA_SCIENCE_SUPPORT.result();document.getElementById('exam-support-result')?.remove();return;}
    document.getElementById('btn-retry').style.display='none';document.querySelector('.result-score').style.display='none';
    document.getElementById('missed-questions-container').style.display='none';
    let box=document.getElementById('exam-support-result');if(!box){box=document.createElement('div');box.id='exam-support-result';document.getElementById('result-kid-message').after(box);}
    const counts={independent:0,assisted:0,incorrect:0,unknown:0,precheck:0};sessionAnswers.forEach(a=>{counts[a.answer_status]++;});
    box.innerHTML=`<p>도움 없이 ${counts.independent} · 설명·힌트 후 ${counts.assisted}<br>다시 연습 ${counts.incorrect+counts.unknown}${counts.precheck?'<br>처음 사전 확인 정답 '+counts.precheck:''}</p><p>연습 결과예요. 시험 예상 점수는 아니에요.</p>`;
    const together=QUIZ_DATA.concept_cards.filter(c=>active.state[c.id]?.error_days>=3);
    if(together.length)box.innerHTML+='<details><summary>부모와 같이 짚어 볼 개념</summary><p>'+together.map(c=>esc(c.term)).join(' · ')+'</p><p>오늘 문제는 늘리지 않고 다음 복습에서 다시 확인해요.</p></details>';
    const home=document.querySelector('#result-page .btn-home');home.disabled=false;home.textContent='홈으로 돌아가기';
    document.getElementById('result-kid-message').textContent='✓ 학습 완료';document.querySelector('.result-emoji').textContent='🌱';
    return true;
  }
  return {start,session,restore,before,after,renderMultiple,record,capture,detail,result,canSave,finalize,finishNotice,leave,showDetails,planFor,englishPlan,gradeWriting,day,read,elapsed,emphasize};
})();
