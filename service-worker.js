const CACHE_NAME = 'cv-cache-v1';
const urlsToCache = [
    '/',
    '/styles.css',
    '/script.js',
    '/perfil.jpg',
    '/curriculum_video.mp4',
    '/video_presentacion.mp4',
    '/icon-192x192.png',
    '/icon-512x512.png',
    // Añadir más recursos que quieras cachear
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(error => {
            console.log('Error al registrar el Service Worker:', error);
        });
}