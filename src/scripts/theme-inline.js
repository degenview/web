(function () {
  var t = 'system';
  try { t = localStorage.getItem('theme') || 'system'; } catch (e) {}
  var d = t === 'dark' || (t !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', d);
  document.documentElement.dataset.theme = t;
})();
