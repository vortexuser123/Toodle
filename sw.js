const CACHE_NAME = 'toodle-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/chat.html',
  '/ai.html',
  '/icon-512.png'
];

// Install the service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch from network, fallback to cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});