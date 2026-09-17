const PA_EXAM_HOME=(()=>{
  const KEY='pa_exam_pair_2026_v1',LIT='pa_exam_literacy_v1';
  const read=k=>{try{return JSON.parse(localStorage.getItem(k)||'{}');}catch(_){return {};}};
  function ids(){return (DAILY_INDEX_DATA||[]).map(x=>x.date).filter(d=>d>='2026-08-30'&&d<='2026-09-16'&&window.MUNHAERAK_CARDS?.[d]).sort();}
  function pair(){
    const today=PA_EXAM_SUPPORT.day(),old=read(KEY),reads=loadDailyReadIds(),lit=read(LIT),list=ids();
    if(old.id&&list.includes(old.id)&&(old.day===today||!reads.includes(old.id)||!lit[old.id]))return old.id;
    const id=list.find(d=>!reads.includes(d)||!lit[d]);
    if(!id)return null;
    if(!safeSetItem(KEY,JSON.stringify({day:today,id})))throw Error('읽기 짝을 저장하지 못했어요. 다시 눌러 주세요.');
    return id;
  }
  function update(){
    const id=pair(),reads=loadDailyReadIds(),lit=read(LIT);
    document.getElementById('exam-reading-status').textContent=id?(reads.includes(id)?'이 짝 글 읽기 완료':'시험 범위 글 읽기'):'준비된 읽기 완료';
    document.getElementById('exam-literacy-status').textContent=id?(lit[id]?'이 짝 문해력 완료':'같은 주제로 요약 연습'):'준비된 문해력 완료';
    for(const subject of ['english','science']){
      const state=PA_EXAM_SUPPORT.read(subject),p=state.__plan;
      document.getElementById(subject+'-support-status').textContent=p?.completed&&!p.finalized?'5문제 풀이 끝 · 결과 확인하기':p?.completed&&(p.completed_day===PA_EXAM_SUPPORT.day()||p.date===PA_EXAM_SUPPORT.day())?'오늘 5문제 완료':p&&!p.completed?`${p.answers.length}/5 · 이어 하기`:subject==='english'&&window.PA_ENGLISH_EXAM?.launch_days?.length&&state.completed_days>=window.PA_ENGLISH_EXAM.launch_days.length?`준비된 ${window.PA_ENGLISH_EXAM.launch_days.length}학습일 완료 · 다음 분량 준비 중`:'하루 5문제';
    }
    document.getElementById('exam-home-status').textContent='읽기와 문해력 완료는 각각 기록해요.';
  }
  async function refresh(){try{await loadDailyIndexJsonp();update();}catch(e){document.getElementById('exam-home-status').textContent=e.message;}}
  async function prepare(){await loadDailyIndexJsonp();await syncDailyReadFromServer();return pair();}
  async function openReading(){try{const id=await prepare();if(!id){update();return;}selectSubject('daily');}catch(e){document.getElementById('exam-home-status').textContent=e.message;}}
  async function openLiteracy(){try{const id=await prepare();if(!id){update();return;}location.href=getMunhaerakCardHref(id);}catch(e){document.getElementById('exam-home-status').textContent=e.message;}}
  // init already loads the index; wait for load completion before our status refresh.
  window.addEventListener('load',()=>setTimeout(()=>refresh(),250));
  window.addEventListener('storage',()=>refresh());
  return {pair,refresh,openReading,openLiteracy,ids};
})();
