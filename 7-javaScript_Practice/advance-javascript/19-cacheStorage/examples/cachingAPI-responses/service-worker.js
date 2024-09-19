const CACHE_NAME = 'api-cache-v1';
const apiEndpoint = 'https://jsonplaceholder.typicode.com/todos/1';



self.addEventListener('fetch', function(event) {
  if (event.request.url.includes(apiEndpoint)) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
          return fetch(event.request).then(function(networkResponse) {
            return caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          });
        })
    );
  } else {
    event.respondWith(fetch(event.request));
  }
});
