const C = "staree-v1", FILES = ["./", "index.html", "manifest.json", "icon-180.png", "icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => e.waitUntil(clients.claim()));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request))));
