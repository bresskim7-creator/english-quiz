/* First three learning days only. Original questions grounded in the supplied textbook. */
window.PA_ENGLISH_EXAM = (() => {
  const cards = [
    {id:'L5-01',term:'기자는 경기 전·중·후에 무엇을 할까?',source_refs:[{printed_pages:[87,92]}],
     easy_explanation:'경기 전에는 선수를 인터뷰하고, 경기 중에는 메모해요. 경기 뒤 기자 회견에 가고, 오후에 기사를 써서 고쳐요.\nWriting about sports makes me excited.\n→ 스포츠에 관해 쓰는 것은 나를 신나게 해요. make + 사람 + 상태(형용사)를 찾아보세요.\ninterview 인터뷰하다 · notes 메모 · article 기사 · edit 고치다',
     exam_tip:'before(전) → during(중) → after(후)를 먼저 찾고 하는 일을 연결해요.',rules:['journalist_sequence','make_adjective']},
    {id:'L7-01',term:'공원은 자연을 지키고, 사람이 즐기게 해요',source_refs:[{printed_pages:[123,130]}],
     easy_explanation:'국립공원은 동식물을 안전하게 보호하고, 사람들이 자연의 아름다움을 즐기게 해요.\nNational parks let people enjoy the beauty of nature.\n→ 국립공원은 사람들이 자연의 아름다움을 즐기게 해요.\nmake / have / let + 사람 + 동사원형: 누가 무엇을 하게 하는지 읽어요.\nDad made us wear jackets. → 아빠가 우리에게 재킷을 입게 했어요.\npreserve 보존하다 · species 종 · beauty 아름다움 · enjoy 즐기다',
     exam_tip:'사람 뒤가 행동이면 동사원형: let people enjoy. 상태를 나타낸 makes me excited와 구분해요.',rules:['parks_purpose','causative_bare']},
    {id:'L5-02',term:'에이전트는 누구를 위해 계약을 살필까?',source_refs:[{printed_pages:[88,92]}],
     easy_explanation:'에이전트는 고객이 서명할 계약을 꼼꼼히 살펴 공정하게 만들어요. 광고 회사의 전화를 받고 고객에게 가장 좋은 계약 조건을 얻으려 해요.\nI do my best to make the contract fair for them.\n→ 그들을 위해 계약을 공정하게 만들려고 최선을 다해요.\nYou should keep your hands clean.\n→ 손을 깨끗하게 유지해야 해요. make는 그런 상태로 만들기, keep은 상태 유지하기예요.\nclient 고객 · contract 계약 · fair 공정한 · deal 거래(조건)',
     exam_tip:'누가(에이전트) → 누구를 위해(고객) → 무엇을(공정한 계약) 하는지 연결해요.',rules:['agent_work','make_adjective','keep_adjective']}
  ];
  const questions=[];
  function add(id,concept,role,task,sentence,question,options,correct,explanation,hint,rules,extra={}) {
    questions.push({id,linked_concept:[concept],practice_role:role,type:'study_choice',test_task:task,
      instruction:task==='mini_writing'?'조건에 맞게 빈칸만 써 보세요':Array.isArray(correct)?'옳은 답 두 개를 모두 고르세요':'알맞은 답을 하나 고르세요',
      sentence,question,options,correct,explanation,hint,rule_tags:rules,recovery_band:'A',score_group:'A',
      source_refs:cards.find(c=>c.id===concept).source_refs,preserve_option_order:true,...extra});
  }
  add('E-PRE-01','L5-01','diagnostic','context_vocab','The journalist wrote an article about the baseball game.','이 문장에서 article의 뜻은?',
      ['선수','운동장','기사','계약','광고'],'2','article은 신문·인터넷 등에 실리는 기사예요. 이 문장은 야구 경기 기사를 썼다는 뜻이에요.','누가 무엇을 썼는지 찾아보세요.',['journalist_vocab']);
  add('E-PRE-02','L5-01','diagnostic','basic_sequence','Before the game, she met the players.','그녀가 선수들을 만난 때는?',
      ['경기가 끝난 뒤','경기 도중','다음 날','경기 시작 전','오후라고만 알 수 있다'],3,'before the game은 경기 전이에요. after는 뒤, during은 도중을 뜻해요.','before는 시간의 앞쪽을 나타내요.',['journalist_sequence']);
  add('E-L501-A1','L5-01','learn','form','Writing about sports makes me excited.','이 문장에서 excited가 알려 주는 것은?',
      ['글을 쓴 장소','me의 신난 상태','스포츠의 종류','글을 쓰는 시간','사람의 직업'],1,'makes me excited는 나를 신나게 한다는 뜻이에요. excited는 me가 어떤 상태가 되는지 말해요.','make 뒤 사람과 그 다음 상태를 묶어 읽어요.',['make_adjective']);
  add('E-L501-A2','L5-01','learn','content','Before the game started, I had an interview with the players. I took a lot of notes during the game.','글의 내용과 일치하는 것은?',
      ['경기 중에 기사를 고쳤다.','경기 후에 처음 경기장에 왔다.','경기 전에 기사 게시를 끝냈다.','경기 중에 계약을 살폈다.','경기 중에 메모를 많이 했다.'],4,'I took a lot of notes during the game에서 경기 중에 메모를 많이 했다고 했어요. 경기 전에는 인터뷰했어요.','경기 전과 경기 중을 나눠 보세요.',['journalist_sequence']);
  add('E-L501-A3','L5-01','learn','transfer','The good news made the players ______.','좋은 소식이 선수들을 행복하게 했다는 뜻이 되려면?',
      ['happy','happily','happiness','to be happy','be happily'],0,'make + 목적어 + 형용사이므로 상태를 나타내는 happy가 와요. happily는 부사, happiness는 명사예요. to be happy는 이 make 문형에 맞지 않고 be happily는 상태를 나타낼 형용사가 없어요.','players가 어떤 상태가 됐는지 나타내는 말을 찾아요.',['make_adjective']);
  add('E-L501-R1','L5-01','recall','context_vocab','She wrote an article and then edited it before it was posted online.','edited의 뜻으로 가장 알맞은 영어 풀이는?',
      ['met people to ask questions','made a phone call','signed a new contract','checked and changed a piece of writing','watched a baseball game'],3,'edit은 글을 살피고 고치는 일이에요. 글을 쓴 뒤 게시하기 전에 고쳤다는 흐름이에요.','쓴 글을 더 알맞게 다듬는 행동이에요.',['journalist_vocab']);
  add('E-L501-R2','L5-01','recall','multiple','Ms. Ali가 야구 경기를 취재한 날의 일을 떠올려 보세요.','기자의 일과에 맞는 문장 두 개는?',
      ['She took notes during the game.','She signed contracts for the players.','She had an interview before the game.','She received calls to sell advertisements for her clients.','She wrote an article before she arrived at the park.'],[0,2],
      '경기 중 메모와 경기 전 인터뷰가 맞아요. 고객의 계약·광고 업무는 에이전트예요. 기사는 경기 관찰과 기자 회견 뒤 오후에 썼어요.','before와 during을 각각 확인한 뒤 두 문장의 내용을 살펴요.',['journalist_sequence'],{answer_mode:'multiple',answer_count:2});
  add('E-L501-R3','L5-01','recall','flow','(A) She wrote and edited an article in the afternoon.\n(B) She interviewed the players before the game.\n(C) She took notes during the game.','시간의 흐름에 맞는 순서는?',
      ['A → B → C','B → C → A','C → B → A','B → A → C','A → C → B'],1,'경기 전 인터뷰(B), 경기 중 메모(C), 오후 기사 작성·수정(A) 순서예요.','before → during → in the afternoon의 순서를 읽어요.',['journalist_sequence']);
  add('E-L701-A1','L7-01','learn','form','National parks let people ______ the beauty of nature.','빈칸에 알맞은 말은?',
      ['enjoyed','enjoying','enjoys','to enjoy','enjoy'],4,'let + 사람 + 동사원형이므로 enjoy예요. 사람들이 자연의 아름다움을 즐기게 한다는 뜻이에요.','let people 다음에 행동의 기본 모양이 와요.',['causative_bare']);
  add('E-L701-A2','L7-01','learn','content','National parks preserve nature. They keep animal and plant species safe. They also let people enjoy nature.','글의 내용과 일치하지 않는 것은?',
      ['공원은 자연을 보존한다.','공원은 식물 종을 보호한다.','공원은 사람의 즐거움만을 위해 동식물을 없앤다.','공원은 동물 종을 안전하게 한다.','사람들은 공원에서 자연을 즐길 수 있다.'],2,'동식물을 안전하게 보호하면서 사람이 자연을 즐기게 하는 곳이에요. 없앤다는 설명은 반대예요.','보호와 즐기기를 둘 다 말하고 있는지 보세요.',['parks_purpose']);
  add('E-L701-A3','L7-01','learn','transfer','The teacher had us ______ in groups.','선생님이 우리를 모둠으로 활동하게 했다는 뜻이 되려면?',
      ['to work','work','working','worked','works'],1,'have + 사람 + 동사원형이에요. had는 have의 과거형이고 us 뒤에는 work가 와요.','앞의 had가 과거여도 사람 뒤 행동은 동사원형이에요.',['causative_bare']);
  add('E-L701-R1','L7-01','recall','context_vocab','National parks preserve nature.','preserve의 뜻으로 가장 알맞은 것은?',
      ['keep something safe and protect it','write about a sports game','get the best deal','make something dirty','ask someone questions'],0,'preserve는 보존하고 보호한다는 뜻이에요. 국립공원은 자연을 보호하는 곳이에요.','동식물을 안전하게 지키는 목적과 연결해요.',['parks_vocab']);
  add('E-L701-R2','L7-01','recall','nth_word','제시어: enjoy / let / nature / people / Parks','‘공원은 사람들이 자연을 즐기게 한다.’로 모두 한 번씩 배열할 때 네 번째 단어는?',
      ['Parks','let','people','enjoy','nature'],3,'Parks / let / people / enjoy / nature. 네 번째는 enjoy예요. let + 사람 + 동사원형 순서예요.','누가 → let → 누구를 → 어떤 행동을 → 무엇을 순서로 놓아요.',['causative_bare']);
  add('E-L701-R3','L7-01','recall','mini_writing','He cooked with his mom. She ______ the vegetables.','make / him / wash를 모두 사용해 빈칸만 3단어로 쓰세요. make는 과거형으로 바꾸세요.',[],null,
      'made him wash: 엄마가 그에게 채소를 씻게 했어요. make의 과거형 made 뒤에 him + 동사원형 wash가 와요.','행동하게 한 때가 과거예요. 사람 뒤에는 to 없이 동사원형을 써요.',['causative_bare'],
      {answer_mode:'writing',accepted_answers:['made him wash'],word_count:3,required_words:['made','him','wash'],source_refs:[{printed_pages:[130,131]}]});
  add('E-L502-A1','L5-02','learn','form','I do my best to make the contract fair for them.','fair가 나타내는 뜻은?',
      ['그가 빨리 뛴다.','고객이 신난다.','계약이 공정한 상태가 된다.','광고가 게시된다.','고객이 전화를 한다.'],2,'make the contract fair는 계약을 공정하게 만든다는 뜻이에요. fair는 contract의 상태를 말해요.','fair 앞의 대상이 무엇인지 찾아요.',['make_adjective','agent_work']);
  add('E-L502-A2','L5-02','learn','content','Advertising companies want Mr. Davis’s clients in their advertisements. He tries to get the best deal for his clients.','광고 회사가 Mr. Davis에게 전화하는 이유는?',
      ['그가 경기를 심판하게 하려고','그가 기사를 고치게 하려고','공원을 보호하려고','선수들의 메모를 받으려고','그의 고객을 광고에 출연시키려고'],4,'광고 회사는 그의 고객이 광고에 나오기를 원해요. 그는 고객에게 가장 좋은 조건을 얻으려 해요.','want 뒤에서 누구를 어디에 원하고 있는지 읽어요.',['agent_work']);
  add('E-L502-A3','L5-02','learn','transfer','You should keep your hands ______.','손을 깨끗하게 유지해야 한다는 뜻이 되려면?',
      ['cleanly','clean','to clean','cleanness','cleaning'],1,'keep + 목적어 + 형용사이므로 clean이에요. 손을 깨끗한 상태로 유지하라는 뜻이에요.','hands의 상태를 나타내는 형용사를 골라요.',['keep_adjective']);
  add('E-L502-R1','L5-02','recall','context_vocab','Before his client signs a contract, the agent checks it carefully.','이 문장에서 client는 누구일까?',
      ['경기 기사','광고 회사의 건물','계약서','에이전트에게 일을 맡기는 고객','공원 방문객'],3,'client는 서비스를 받는 고객이에요. 여기서는 계약을 앞둔 고객을 위해 에이전트가 계약을 살펴요.','누구를 위해 에이전트가 일하는지 생각해요.',['agent_vocab']);
  add('E-L502-R2','L5-02','recall','multiple','고객을 위해 일하는 스포츠 에이전트를 떠올려 보세요.','에이전트의 업무에 맞는 문장 두 개는?',
      ['He checks a new contract carefully.','He takes notes during every game as a journalist.','He preserves animal species in national parks.','He writes all his clients’ sports articles.','He tries to get the best deal for his clients.'],[0,4],
      '계약을 꼼꼼히 확인하고 고객에게 좋은 계약 조건을 얻는 일이에요. 기자 업무와 국립공원 목적은 구분해요.','계약과 고객에게 유리한 조건 두 가지를 찾아요.',['agent_work'],{answer_mode:'multiple',answer_count:2});
  add('E-L502-R3','L5-02','recall','mini_writing','These gloves ______.','‘이 장갑은 내 몸을 따뜻하게 유지한다.’가 되게 warm / keep / me를 모두 사용해 올바르게 배열하고 빈칸만 3단어로 쓰세요.',[],null,
      'keep me warm: 장갑은 나를 따뜻한 상태로 유지해요. keep + 목적어 + 형용사 순서예요.','유지하다 → 나를 → 따뜻한 상태로 순서예요.',['keep_adjective'],
      {answer_mode:'writing',accepted_answers:['keep me warm'],word_count:3,required_words:['keep','me','warm'],source_refs:[{printed_pages:[92]}]});
  questions.forEach(q=>{if(typeof q.correct==='string')q.correct=Number(q.correct);if(['multiple','nth_word','mini_writing','flow'].includes(q.test_task)){q.recovery_band='B';q.score_group='B';}});
  return {lesson_id:'eng_mid_launch',lesson:'eng_mid_launch',subject:'english',title:'오늘의 영어',support_mode:true,
    version:'2026.09.16.launch1',concept_cards:cards,exam_prep:questions,launch_days:[
      {concept:'L5-01',ids:['E-PRE-01','E-PRE-02','E-L501-A1','E-L501-A2','E-L501-A3'],exception:'첫날 사전 확인 2개. 독립 복습 아님. 회상 유형 순환은 학습 후 시작.'},
      {concept:'L7-01',ids:['E-L501-R1','E-L501-R2','E-L701-A1','E-L701-A2','E-L701-A3'],exception:'배운 묶음이 하나이므로 회상 2칸의 같은 묶음 허용.'},
      {concept:'L5-02',ids:['E-L701-R1','E-L701-R3','E-L502-A1','E-L502-A2','E-L502-A3'],exception:'3학습일 쓰기 문항은 L7-01뿐이고 L5-01 어휘 회상은 전날 사용되어 같은 묶음 회상 2칸을 초기 예외로 허용. 후속 4학습일 제작 시 L5-01-R3 흐름 회상 우선. 흐름 유형은 이월하고 문제를 추가하지 않음.'}
    ]};
})();
