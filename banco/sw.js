// 03-09-2023
const currentCache = 'BNC_banco_cache_v3.19';
const files =
[
    'index.html',
    'icondef.png',
    'selectFile.js',
    'FileSaver.js'
 ];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(currentCache).then(cache => {
      return cache.addAll(files);
                               })
  );
});

// Borra las cache anteriores

self.addEventListener('activate', function(event) {
    event.waitUntil(caches.keys().then(function(names) {
        return Promise.all(
            names.filter(function(name) {
                return name !== currentCache;
            }).map(function(name) {
                return caches.delete(name);
            })
        );
    }).then(function() {
        return self.clients.claim();
    }));
});


// carga de los cache si existen
self.addEventListener('fetch', function(e){
	e.respondWith(
		caches.match(e.request).then(function(response){
			return response || fetch(e.request);
                            })
                      );
});

