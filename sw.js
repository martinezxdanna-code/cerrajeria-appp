self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("cerrajeria-cache").then(cache => {
      return cache.addAll([
        "cerrajeria.html"
      ]);
    })
  );
});