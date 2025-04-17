self.addEventListener('install', event => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', event => {
  // You can cache content here later
});
