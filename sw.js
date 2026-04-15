const CACHE_NAME = 'quiz-v91';
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './lesson1.js',
  // './lesson2.js',        // 시험범위 밖 — 시험 후 복원
  './lesson3.js',
  './lesson_kor1.js',
  // './lesson_kor2.js',    // 시험범위 밖 — 시험 후 복원
  './kor1_reader.js',
  // './kor2_reader.js',    // 시험범위 밖 — 시험 후 복원
  './lesson_math1.js',
  './lesson_math2.js',
  './lesson_math3.js',
  './lesson_soc1.js',
  './lesson_soc2.js',
  './lesson_sci1.js',
  // './lesson_sci2.js',    // 시험범위 밖 — 시험 후 복원
  './lesson_sci3.js'
];

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
