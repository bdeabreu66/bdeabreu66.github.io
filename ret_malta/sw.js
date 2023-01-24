//02-06-2022 Bloquea fecha de factura mayor que fecha de retencion. Emoticon para error
//31-05-2022 . Modificado la entrada base imponible para que acepte ''
//07-12-2022 Incorporada retencion pepsi
//12-12-2022 Corregido detalles para pepsi
const currentCache = 'RETEN-cache-v1.5';
const files =
[
    'index.html',
    'icondef.png',
    'pdfs.js',
    'microphone.svg',
    'js/jspdfv153.js',
    'js/FileSaver.js',
    'js/addimagev153.js',
    'js/split_text_to_sizev153.js',
    'js/standard_fonts_metricsv153.js',
    'js/cell153.js',
    'js/png.js',
    'js/png_support.js',
    'js/zlib.js',
    'js/selectFile.js',
    'setlanguage.js'
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
*/
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


