const CACHE_NAME = 'quiz-v129';
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
