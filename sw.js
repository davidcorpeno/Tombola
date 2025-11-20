<!-- Archivo: sw.js -->
// Service worker muy simple: cachea recursos para que funcione offline
const CACHE_NAME = 'tombola-cache-v1';
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(['/index.html','/manifest.json'])));
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});


