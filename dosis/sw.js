const currentCache = 'cache-v1.0';

const files =
[
    '/index.html',
    '/style.css',
    '/app.js',

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
         }).map(cacheName => caches.delete(cacheName))
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



const STATIC_CACHE_NAME = 'static-cache-v1';
const APP_CACHE_NAME = 'app-cache-#VERSION';

const CACHE_APP = [
    '/',
    '/app/app.js'
]
const CACHE_STATIC = [
    'https://fonts.googleapis.com/css?family=Roboto:400,300,500,700',
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css'
]

self.addEventListener('install',function(e){
    e.waitUntil(
        Promise.all([caches.open(STATIC_CACHE_NAME),caches.open(APP_CACHE_NAME),self.skipWaiting()]).then(function(storage){
            var static_cache = storage[0];
            var app_cache = storage[1];
            return Promise.all([static_cache.addAll(CACHE_STATIC),app_cache.addAll(CACHE_APP)]);
        })
    );
});

self.addEventListener('activate', function(e) {
    e.waitUntil(
        Promise.all([
            self.clients.claim(),
            caches.keys().then(function(cacheNames) {
                return Promise.all(
                    cacheNames.map(function(cacheName) {
                        if (cacheName !== APP_CACHE_NAME && cacheName !== STATIC_CACHE_NAME) {
                            console.log('deleting',cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        ])
    );
});

self.addEventListener('fetch',function(e){
    const url = new URL(e.request.url);
    if (url.hostname === 'static.mysite.co' || url.hostname === 'cdnjs.cloudflare.com' || url.hostname === 'fonts.googleapis.com'){
        e.respondWith(
            caches.match(e.request).then(function(response){
                if (response) {
                    return response;
                }
                var fetchRequest = e.request.clone();

                return fetch(fetchRequest).then(function(response) {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    var responseToCache = response.clone();
                    caches.open(STATIC_CACHE_NAME).then(function(cache) {
                        cache.put(e.request, responseToCache);
                    });
                    return response;
                });
            })
        );
    } else if (CACHE_APP.indexOf(url.pathname) !== -1){
        e.respondWith(caches.match(e.request));
    }
});