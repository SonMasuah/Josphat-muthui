self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('josphat-store').then(function(cache) {
      return cache.addAll([
        'index.html',
        'style.css',
        'about.html',
        'contact.html',
        'login.html',
        'profile.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
