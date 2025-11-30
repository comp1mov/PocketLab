// sw.js

self.addEventListener('install', event => {
  // Ставимся сразу
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Чистим все кеши, которые могли быть созданы старой версией
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.map(key => caches.delete(key)));
    }).then(() => self.clients.claim())
  );
});

// Ничего не кешируем и не перехватываем
self.addEventListener('fetch', event => {
  // Прозрачный прокси, просто даём сети работать как обычно
});
