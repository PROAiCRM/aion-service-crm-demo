const CACHE = 'aion-repair-offer-v0-2-20260802-1';
const ASSETS = [
  './repair-offer-v0-2.html',
  './repair-offer-v0-2.css?v=20260802-1',
  './repair-offer-v0-2.js?v=20260802-1',
  './repair-offer-core-v0-2.js',
  './repair-offer-icon-v0-2.svg',
  './repair-offer-manifest-v0-2.webmanifest'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./repair-offer-v0-2.html'))));
});
