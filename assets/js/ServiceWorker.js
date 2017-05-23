const init = {
	initServiceWorker: ()=> {
	/* Comprobamos si el navegador soporta service workers */
		if ('serviceWorker' in navigator) {
		console.log('Service Worker is supported');
		/* Si lo soporta, registramos nuestro sw mediante el método register(), que devuelve una promesa */
			navigator.serviceWorker.register('assets/js/ServiceWorker.js').then(function(registration) {
			console.log('sw registered: ', registration);
			}).catch(function(err) {
		console.log('Service Worker registration failed: ', err);
		});
		}
	}
};

init.initServiceWorker();

self.addEventListener('install', function(event) {
	let resourcesToCache = ['http://localhost:4200/'];
	/* Pausamos al ejecución de la promesa hasta que no esté todo guardado */
	event.waitUntil(		
		caches.open('CacheAngular').then(function(cache) {
		return cache.addAll(resourcesToCache);
		})
	);
});


self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
				if (response) {
				/* devolvemos el recurso cacheado */
				return response;
				}
			/*  nos traemos de la red el recurso solicitado  */
			return fetch(event.request);
		})
	);
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open('CacheAngular')
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
