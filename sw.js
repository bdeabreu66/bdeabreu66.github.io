const currentCache = 'cache-v1.0';
const files =
[
    'index.html',
    'style.css',
    'qr_packed.js',
    'qrCodeReader.js',
    'icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(currentCache).then(cache => {
      return cache.addAll(files);
                               })
  );
});

// Borra las cache anteriores
self.addEventListener('activate', event => {
  event.waitUntil(
       caches.keys().then(cacheNames => Promise.all(
       cacheNames.filter(cacheName => {
           return cacheName !== currentCache
         }).map(cacheName => caches.delete(cacheName)
        ))
  );
});

// carga de los cache si existen
self.addEventListener(‘fetch’, function(e){
	e.respondWith(
		caches.match(e.request).then(function(response){
			return response || fetch(e.request);
                            })
                            );
                    );
});


