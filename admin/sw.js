//02-06-2022 Bloquea fecha de factura mayor que fecha de retencion. Emoticon para error
//31-05-2022 . Modificado la entrada base imponible para que acepte ''
// 24-09-2023
const currentCache = 'RETEN-cache-v0.0';
const files =
[
    'index.html',
    'icondef.png'
 ];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(currentCache).then(cache => {
      return cache.addAll(files);
                               })
  );
});

// Borra las cache anteriores
/*
self.addEventListener('activate', event => {
  event.waitUntil(
       caches.keys().then(cacheNames => Promise.all(
       cacheNames.filter(cacheName => {
           return cacheName !== currentCache
         }).map(cacheName => caches.delete(cacheName))
        ))
  );
});

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
*/
// carga de los cache si existen
self.addEventListener('fetch', function(e){
	e.respondWith(
		caches.match(e.request).then(function(response){
			return response || fetch(e.request);
                            })
                      );
});



self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open(currentCache);
      await cache.addAll(contentToCache);
    })()
  );
});
