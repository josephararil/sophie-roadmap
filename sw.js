// Service Worker for Sophie's Developmental Roadmap
// Strategy: cache-first for all GET requests.
//   • On install  → pre-cache all local assets.
//   • On fetch    → serve from cache if available, else fetch from network and
//                   add to cache for next time.
//   • On activate → delete any stale caches from previous versions.
//
// IMPORTANT: bump CACHE_VERSION whenever you update data.js, app.jsx,
// components.jsx, or any asset, so users always get the latest content.

const CACHE_VERSION = 'v7';
const CACHE_NAME = `sophie-roadmap-${CACHE_VERSION}`;

// All local files to pre-cache on first install.
// CDN resources (React, Babel, Google Fonts) are cached lazily on first fetch.
const PRECACHE_URLS = [
  './',
  './index.html',
  './app.jsx',
  './components.jsx',
  './data.js',
  './actions.js',
  './manifest.json',
  './icon.svg',
  // Age hero images (note: age 9 uses assets/10.png; there is no assets/9.png)
  './assets/1.png',
  './assets/2.png',
  './assets/3.png',
  './assets/4.png',
  './assets/5.png',
  './assets/6.png',
  './assets/7.png',
  './assets/8.png',
  './assets/10.png',
  './assets/11.png',
];

// ─── Install ───────────────────────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())  // activate immediately
  );
});

// ─── Activate ──────────────────────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(
        names
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      ))
      .then(() => self.clients.claim())  // take control of open tabs
  );
});

// ─── Fetch ─────────────────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip non-http(s) requests (e.g. chrome-extension://)
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      // Cache hit — return immediately (cache-first)
      if (cached) return cached;

      // Cache miss — fetch from network, then store for next time
      return fetch(event.request)
        .then(response => {
          // Only cache successful responses
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => {
          // Network failed and nothing in cache.
          // For navigation requests, fall back to the cached app shell.
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          // For other assets, just fail silently.
        });
    })
  );
});
