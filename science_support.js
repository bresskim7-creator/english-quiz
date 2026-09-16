/* 2026-09-16: short, scaffolded science practice; normal quiz log pipeline retained. */
const PA_SCIENCE_SUPPORT = (() => {
    'use strict';
    const KEY = 'pa_science_2026_midterm_v2';
    const IDS = ['sci_mid_plate', 'sci_mid_element', 'sci_mid_body'];
    let loading = false;
    const esc = s => String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const day = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
    const later = n => { const d = new Date(); d.setDate(d.getDate()+n); return day(d); };
    function read() {
        try { const data = JSON.parse(localStorage.getItem(KEY) || '{}'); return data && typeof data === 'object' && !Array.isArray(data) ? data : {}; }
        catch (_) { return {}; }
    }
    function orderCards(data) {
        // Interleave units while retaining each unit's prerequisite order.
        const lists = IDS.map(id => data.concept_cards.filter(c => c.id.startsWith(id+'-')));
        const out = [];
        for (let i=0; i<Math.max(...lists.map(a=>a.length)); i++) lists.forEach(a=>{ if(a[i]) out.push(a[i]); });
        return out;
    }
    function makePlan(data, state=read(), date=day()) {
        const cards=orderCards(data);
        const known=cards.filter(c=>state[c.id]?.introduced);
        const fresh=cards.filter(c=>!state[c.id]?.introduced);
        const ranked=[...known].sort((a,b)=>{
            const x=state[a.id], y=state[b.id];
            // Oldest due concept first: a persistent error cannot starve other concepts.
            return Number(x.error_days>=3 && x.due>date)-Number(y.error_days>=3 && y.due>date) || Number(x.due>date)-Number(y.due>date) || x.last_day.localeCompare(y.last_day) || Number(x.last_ok)-Number(y.last_ok);
        });
        const tasks=[];const used=new Set();
        function add(c, role, showCard=false) {
            if(!c)return false;
            const history=state[c.id] || {};
            const candidates=data.exam_prep.filter(q=>q.linked_concept.includes(c.id) && !used.has(q.id));
            candidates.sort((a,b)=>{
                const ax=Number(a.practice_role!==role), bx=Number(b.practice_role!==role);
                const recent=history.last_questions || [];
                return Number(recent.includes(a.id))-Number(recent.includes(b.id)) || ax-bx || (state.__usage?.[a.id]||0)-(state.__usage?.[b.id]||0);
            });
            const q=candidates[0];if(!q)return false;
            used.add(q.id);
            tasks.push({id:q.id,support:{concept:c.id,stage:role,new:!history.introduced,
                showCard,taught:!history.introduced,previousDay:history.last_day,ready:false,answered:false}});
            return true;
        }
        if(!known.length) {
            // First day has no retrieval history: two small lessons, five assisted applications.
            for(const c of fresh.slice(0,2)){add(c,'learn',true);add(c,'learn');}
            add(fresh[0],'recall');
        } else {
            add(ranked[0],'recall');add(ranked[1] || ranked[0],'recall');
            if(fresh[0]){add(fresh[0],'learn',true);add(fresh[0],'learn');}
            // Weak/old concepts share the remaining slots; they never consume the new-lesson pair.
            for(const c of ranked.slice(2)) {if(tasks.length===5)break;add(c,'recall');}
            // Only the first two known concepts exist on day 2. Repetition is then unavoidable.
            let i=0;
            while(tasks.length<5 && i<ranked.length*5) {add(ranked[i%ranked.length],'recall');i++;}
        }
        if(tasks.length!==5)throw new Error('science-plan-incomplete');
        return {date,tasks,concepts:[...new Set(tasks.map(t=>t.support.concept))],answers:[],answered:[],exposed:[],completed:false};
    }
    function choose(data, state=read(), date=day()) {
        const plan=state.__plan?.date===date?state.__plan:makePlan(data,state,date);
        return plan.completed?[]:orderCards(data).filter(c=>plan.concepts.includes(c.id));
    }
    function session(data) {
        const state=read();
        if(state.__plan?.date!==day())state.__plan=makePlan(data,state);
        const plan=state.__plan;
        safeSetItem(KEY,JSON.stringify(state));
        if(plan.completed)return [];
        return plan.tasks.map(t=>{
            const q=data.exam_prep.find(q=>q.id===t.id);
            if(!q)throw new Error('Saved science question missing');
            return {...q,_support:{...t.support,ready:false,answered:false}};
        });
    }
    function restore() {
        if(!QUIZ_DATA?.support_mode || retryMode)return;
        const plan=read().__plan;
        if(plan?.date!==day())return;
        sessionAnswers=(plan.answers||[]).map(a=>({...a}));
        currentQuestionIndex=sessionAnswers.length;
    }
    function capture() {
        if(!QUIZ_DATA?.support_mode || retryMode)return;
        const state=read();const plan=state.__plan;
        if(!plan || plan.date!==day())return;
        plan.answers=sessionAnswers.map(a=>({...a}));
        plan.answered=plan.answers.map(a=>a.id);
        plan.completed=plan.tasks.every(t=>plan.answered.includes(t.id));
        safeSetItem(KEY,JSON.stringify(state));
    }
    async function start() {
        if (loading) return;
        loading=true;
        const status=document.getElementById('science-support-status');
        const grid=document.querySelector('.subject-grid');
        if(grid)grid.inert=true;
        if(status) status.textContent='오늘 배울 개념을 준비하고 있어요…';
        try {
            const lessons=[];
            // Existing JSONP loader has one callback, so loads must be sequential.
            for(const id of IDS) lessons.push(await fetchVocabJsonp(`lesson_${id}.json`));
            const data={lesson_id:'sci_mid_mix',lesson:'sci_mid_mix',subject:'science',title:'오늘의 과학',
                support_mode:true,exam_date:'2026-10-07',concept_cards:lessons.flatMap(l=>l.concept_cards),
                exam_prep:lessons.flatMap(l=>l.exam_prep)};
            if(!choose(data).length) {
                if(status) status.textContent='오늘 배정은 끝났어요. 다음 복습일에 다시 확인할게요. 더 보려면 단원별 복습을 선택하세요.';
                return;
            }
            QUIZ_DATA=data; currentSubject='science'; currentLesson='sci_mid_mix'; currentMode='exam_prep';
            retryMode=false; originalSession=[]; originalSessionAnswers=[];
            loadQuestionHistory();
            await startSession();
            document.querySelector('.header-title').textContent='오늘의 과학 · 5문제';
            if(currentSessionMeta) currentSessionMeta.type='science_support';
            if(status) status.textContent='한 개념씩 이해하고, 다른 문제에 적용해요.';
        } catch(e) {
            if(status) status.textContent=e.message==='science-plan-incomplete'?'오늘 문제 구성을 확인해야 해요. 잠시 뒤 다시 눌러 주세요.':'자료를 불러오지 못했어요. 연결을 확인하고 다시 눌러 주세요.';
            console.error('[science-support-load]', e);
        } finally { loading=false;if(grid)grid.inert=false; }
    }
    function cardMarkup(c) {
        return `<section class="science-support-card"><h2>${esc(c.term)}</h2>${renderVisualMedia(c)}<p>${esc(c.easy_explanation)}</p><p class="science-tip">기억할 점 · ${esc(c.exam_tip)}</p><small>교과서 ${c.source_refs[0].printed_pages.join('·')}쪽 · 핵심정리 참고</small></section>`;
    }
    function expose(concept) {
        const state=read();const plan=state.__plan;
        if(plan?.date===day()) {
            if(!plan.exposed.includes(concept))plan.exposed.push(concept);
            plan.tasks.filter(t=>t.support.concept===concept).forEach(t=>t.support.taught=true);
            for(const q of currentSession)if(q._support?.concept===concept)q._support.taught=true;
            safeSetItem(KEY,JSON.stringify(state));
        }
    }
    function before(q) {
        const s=q._support;
        q._support_unsure=false;
        if(!s)return false;
        s.answered=false;
        if(retryMode)s.taught=true;
        if(!s.showCard || s.ready || retryMode)return false;
        expose(s.concept);s.taught=true;
        const c=QUIZ_DATA.concept_cards.find(c=>c.id===s.concept);
        const container=document.getElementById('question-container');container.style.display='block';
        document.getElementById('instruction-text').textContent='먼저 한 가지를 이해해 보자';
        document.getElementById('btn-hint').style.display='none';
        container.innerHTML=cardMarkup(c)+'<button class="science-continue">이제 문제로 확인하기 →</button>';
        container.querySelector('button').onclick=()=>{s.ready=true;showQuestion();};
        return true;
    }
    function after(q) {
        if(q._support || QUIZ_DATA?.exam_campaign==='2026-2-midterm')document.getElementById('instruction-text').textContent='';
        if(!q._support)return;
        const s=q._support;q._support_unsure=false;
        const label=document.createElement('p');label.className='science-stage';
        label.textContent=retryMode?'방금 틀린 문제 연습':s.new?'새 개념을 문제에 적용하기':s.taught?'해설을 본 개념 다시 적용하기':'설명을 보기 전, 기억 확인';
        document.getElementById('question-container').prepend(label);
        const button=document.createElement('button');button.className='science-unsure';button.textContent='아직 모르겠어요';
        button.onclick=()=>{
            if(s.answered)return;q._support_unsure=true;
            const submit=document.getElementById('science-multi-submit');if(submit)submit.disabled=true;
            checkStudyChoice(button,-1);
        };
        document.getElementById('study-options').appendChild(button);
    }
    function record(q, correct) {
        const s=q._support;if(!s)return {};
        s.answered=true;
        const state=read();const old=state[s.concept] || {independent_days:[]};
        const unsure=!!q._support_unsure;
        const assisted=!!(hintUsedThisQuestion || s.taught || retryMode || state.__plan?.exposed?.includes(s.concept) || !s.previousDay || s.previousDay>=day());
        const answer={support_concept:s.concept,support_stage:s.stage,support_assisted:assisted,
            answer_status:unsure?'unknown':!correct?'incorrect':assisted?'assisted':'independent'};
        if(retryMode)return answer;
        const independent=correct && !assisted && !unsure;
        const days=[...(old.independent_days || [])];if(independent && !days.includes(day()))days.push(day());
        const clean=correct && !unsure && !hintUsedThisQuestion;
        const sameDay=old.last_day===day();
        const errorDays=independent?0:!clean && (!sameDay || old.last_ok)?(old.error_days||0)+1:(old.error_days||0);
        state[s.concept]={...old,introduced:true,last_day:day(),last_ok:clean && (!sameDay || old.last_ok),
            due:sameDay && clean && old.due ? old.due : later(!clean && errorDays>=3?2:independent?3:1),error_days:errorDays,
            independent_days:days.slice(-8),last_status:answer.answer_status,
            last_questions:sameDay?[...new Set([...(old.last_questions||[]),q.id])]:[q.id]};
        state.__usage=state.__usage || {};state.__usage[q.id]=(state.__usage[q.id]||0)+1;
        safeSetItem(KEY,JSON.stringify(state));
        // Every submitted answer reveals an explanation; later same-day questions are assisted.
        expose(s.concept);
        if(!correct || unsure) {
            const c=QUIZ_DATA.concept_cards.find(c=>c.id===s.concept);
            const box=document.createElement('details');box.className='science-repair';box.open=true;
            box.innerHTML='<summary>헷갈린 핵심 짚어 보기</summary>'+cardMarkup(c);
            document.getElementById('question-container').appendChild(box);
        }
        return answer;
    }
    function detail(a) {
        if(!a.support_concept)return '';
        const selected=Array.isArray(a.selected_indices)?';selected='+a.selected_indices.map(i=>i+1).join('+'):'';
        return '[science;concept='+a.support_concept+';stage='+a.support_stage+';status='+a.answer_status+';assisted='+Number(!!a.support_assisted)+selected+']';
    }
    function result() {
        const active=!!(QUIZ_DATA && QUIZ_DATA.support_mode);
        const retry=document.getElementById('btn-retry');if(retry && active)retry.style.display='none';
        const score=document.querySelector('.result-score');
        if(score)score.style.display=active?'none':'';
        let box=document.getElementById('science-support-result');
        if(!active) {if(box)box.remove();document.querySelector('.result-emoji').textContent='🎉';return;}
        if(!box){box=document.createElement('div');box.id='science-support-result';document.getElementById('result-kid-message').after(box);}
        const counts={independent:0,assisted:0,incorrect:0,unknown:0};
        sessionAnswers.forEach(a=>{if(a.answer_status in counts)counts[a.answer_status]++;});
        box.innerHTML=`<p>도움 없이 ${counts.independent} · 설명·힌트 후 ${counts.assisted}<br>다시 연습 ${counts.incorrect+counts.unknown}</p><p class="science-result-note">연습 결과예요. 시험 예상 점수는 아니에요.<br>도움받거나 헷갈린 개념은 다음 학습에서 다시 확인해요.</p>`;
        const state=read();const together=QUIZ_DATA.concept_cards.filter(c=>state[c.id]?.error_days>=3);
        if(together.length)box.innerHTML+='<details class="science-result-note"><summary>부모와 같이 짚어 볼 개념</summary><p>'+together.map(c=>esc(c.term)).join(' · ')+'</p><p>문제를 더 늘리지 않고, 다음 복습에서 간격을 두고 다시 확인해요.</p></details>';
        document.getElementById('result-kid-message').textContent='오늘은 여기까지! 짧게 쌓아 가자.';
        document.querySelector('.result-emoji').textContent='🌱';
    }
    function renderMultiple(q) {
        if(q.answer_mode!=='multiple')return false;
        const container=document.getElementById('question-container');container.style.display='block';
        const sentence=q.sentence?`<p style="white-space:pre-line">${esc(q.sentence)}</p>`:'';
        container.innerHTML=sentence+renderVisualMedia(q)+`<p style="font-weight:700">${esc(q.question)}</p><div id="study-options"></div><p id="science-selection-status" role="status">정답 ${q.answer_count}개를 선택하세요.</p><button id="science-multi-submit" class="science-continue">선택한 답 제출</button>`;
        const selected=new Set();let submitted=false;
        window._studyShuffleMap=q.options.map((opt,origIdx)=>({opt,origIdx}));
        const buttons=[];
        q.options.forEach((option,i)=>{
            const b=document.createElement('button');b.className='option-btn';b.textContent=String.fromCharCode(0x2460+i)+' '+option;
            b.style.cssText='display:block;width:100%;text-align:left;padding:12px 16px;margin:8px 0;border:2px solid #ddd;border-radius:10px;background:white;font-size:16px;line-height:1.6;';
            b.setAttribute('aria-pressed','false');
            b.onclick=()=>{if(submitted || b.disabled)return;if(selected.has(i))selected.delete(i);else selected.add(i);
                b.setAttribute('aria-pressed',String(selected.has(i)));b.style.borderColor=selected.has(i)?'#1565c0':'#ddd';
                document.getElementById('science-selection-status').textContent=`${selected.size}개 선택 · 정답 ${q.answer_count}개`;};
            document.getElementById('study-options').appendChild(b);buttons.push(b);
        });
        document.getElementById('science-multi-submit').onclick=()=>{
            if(submitted || (q._support && q._support.answered))return;
            if(selected.size!==q.answer_count){document.getElementById('science-selection-status').textContent=`정답 ${q.answer_count}개를 선택한 뒤 제출하세요.`;return;}
            submitted=true;
            document.querySelectorAll('.science-unsure').forEach(el=>el.disabled=true);
            document.getElementById('science-multi-submit').disabled=true;
            buttons.forEach((b,i)=>{b.disabled=true;b.style.background=q.correct.includes(i)?'#e8f5e9':selected.has(i)?'#ffebee':'white';});
            const correct=q.correct.length===selected.size && q.correct.every(i=>selected.has(i));
            const explanation=document.createElement('p');explanation.className='correct-answer-display';
            explanation.textContent=(correct?'맞았어요. ':'다시 짚어 보자. ')+q.explanation;container.appendChild(explanation);
            recordAnswer(q,correct,{selected_indices:[...selected].sort(),required_count:q.answer_count});showNextButton();
        };
        document.getElementById('question-text').textContent=q.instruction;
        const hint=document.getElementById('btn-hint');hint.style.display=q.hint?'':'none';
        hint.onclick=()=>{hintUsedThisQuestion=true;document.getElementById('hint-display').style.display='block';document.getElementById('hint-display').textContent=q.hint;};
        after(q);
        return true;
    }
    return {start,session,before,after,record,result,choose,renderMultiple,makePlan,restore,capture,detail};
})();
