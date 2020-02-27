self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          '/ugent-offline/',
          '/ugent-offline/index.html',
          '/ugent-offline/app.dev.js',
          'https://fonts.googleapis.com/icon?family=Material+Icons|Roboto'
        ]);
      })
    );
  });

  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });