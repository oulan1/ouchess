const SW_VERSION = "ouchess-portal-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Strict network-first passthrough so link.txt & status.json are never stale-cached
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
