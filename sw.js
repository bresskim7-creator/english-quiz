const CACHE_NAME = 'quiz-v138';
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
  './kor1_reader.js',
  './kor2_reader.js',
  './lesson_math1.js',
  './lesson_math2.js',
  './lesson_math3.js',
  './lesson_soc1.js',
  './lesson_soc2.js',
  './lesson_sci1.js',
  './lesson_sci2.js',
  './lesson_sci3.js'
];

// v133: daily v2 — paths that must be cached under a query-stripped (normalised) key.
// daily_index.js and daily_YYYY-MM.js use ?v=<version_key> for cache-busting, but the
// service worker stores them under the bare path so offline fallback can find them.
function isDailyV2Path(pathname) {
  if (pathname.endsWith('/daily_index.js')) return true;
  return /\/daily_\d{4}-\d{2}\.js$/.test(pathname);
}

function normalisedDailyRequest(reqUrl, origRequest) {
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
    const cacheKey = normalisedDailyRequest(reqUrl, event.request);
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
