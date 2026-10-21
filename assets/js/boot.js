// Se carga antes que nada: marca que hay JavaScript para preparar las animaciones de entrada.
// Red de seguridad: si algo falla, a los 2,5 s todo se muestra igualmente.
(function () {
  var html = document.documentElement;
  html.classList.add("js");
  window.setTimeout(function () { html.classList.add("is-ready"); }, 2500);
})();
