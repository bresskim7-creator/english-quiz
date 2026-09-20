const PA_EXAM_HOME=(()=>{
  const literacy=()=>Object.fromEntries(PA_PROGRESS.literacy().map(id=>[id,true]));
  function ids(){return (DAILY_INDEX_DATA||[]).map(x=>x.date).filter(d=>d>='2026-08-30'&&d<='2026-09-16'&&window.MUNHAERAK_CARDS?.[d]).sort();}
  function readingId(){const reads=loadDailyReadIds();return ids().find(id=>!reads.includes(id))||null;}
  function literacyId(){const lit=literacy();return ids().find(id=>!lit[id])||null;}
  function update(){
    PA_EXAM_SUPPORT.refreshReplayButton();
    const reading=readingId(),lit=literacyId();
    document.getElementById('exam-reading-status').textContent=reading?'아직 읽지 않은 글 읽기':'준비된 읽기 완료';
    document.getElementById('exam-literacy-status').textContent=lit?'아직 마치지 않은 요약 연습':'준비된 문해력 완료';
    for(const subject of ['english','science']){
      const state=PA_EXAM_SUPPORT.read(subject);
      document.getElementById(subject+'-support-status').textContent=supportTodayStatus(subject,state,PA_EXAM_SUPPORT.day());
    }
    document.getElementById('exam-home-status').textContent=supportRecordNotice();
  }
  async function refresh(){try{await loadDailyIndexJsonp();update();}catch(e){document.getElementById('exam-home-status').textContent=e.message;}}
  async function prepare(){await loadDailyIndexJsonp();PA_PROGRESS.sync();}
  async function openReading(){try{await prepare();const id=readingId();if(!id){update();return;}selectSubject('daily');}catch(e){document.getElementById('exam-home-status').textContent=e.message;}}
  async function openLiteracy(){try{await prepare();const id=literacyId();if(!id){update();return;}location.href=getMunhaerakCardHref(id);}catch(e){document.getElementById('exam-home-status').textContent=e.message;}}
  // init already loads the index; wait for load completion before our status refresh.
  window.addEventListener('load',()=>setTimeout(()=>refresh(),250));
  window.addEventListener('storage',()=>refresh());
  return {pair:readingId,readingId,literacyId,refresh,openReading,openLiteracy,ids};
})();
