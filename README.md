# Víctor Salmerón Gavilán · Portfolio

Técnico informático en Terrassa (Barcelona): soporte IT, sistemas y, cada día un poco más, desarrollo.
Estudiante de DAM y ASIR.

**Web:** https://victorsalmeron.dev/

## Tecnología

- HTML, CSS y JavaScript, sin frameworks.
- Animaciones con GSAP + ScrollTrigger y scroll suave con Lenis.
- Todo alojado en la propia web, sin cookies.
- Visitas contadas con [GoatCounter](https://www.goatcounter.com/) (anónimo, sin cookies): panel en https://victorsalmeron.goatcounter.com/. También cuenta las descargas del CV y los clics en email, LinkedIn y GitHub.
- Publicada con GitHub Pages y dominio propio en Cloudflare.

## Estructura

```
index.html          Página principal (textos en castellano)
assets/js/main.js   Idioma inglés (EN), animaciones, menú y email
assets/css/         Estilos
assets/img/         Foto, imágenes de proyectos y para redes
cv/                 CV en PDF (castellano y en inglés)
cv/fuente/          Plantillas HTML de los CV
```

## Cómo actualizar el CV

1. Edita `cv/fuente/cv-es.html` (o `cv-en.html` para el inglés).
2. Ábrelo en Chrome o Edge → **Imprimir** → **Guardar como PDF** (márgenes predeterminados, sin encabezados ni pies de página). Debe salir en una sola página.
3. Guarda el PDF en `cv/` con el mismo nombre que el actual:
   - `cv-victor-salmeron-helpdesk.pdf` (castellano)
   - `cv-victor-salmeron-helpdesk-en.pdf` (inglés)

## Versiones anteriores

- **v1 · diseño editorial** (hasta el 28/10/2026): copia completa en `v1/`, visible en https://victorsalmeron.dev/v1/ (Google no la indexa).
  Para volver a ella: copiar `v1/index.html`, `v1/assets/` y `v1/cv/` a la raíz (y quitar la línea `<meta name="robots" content="noindex, nofollow">` del `index.html`).
  También está en el historial de git, en el commit `31c766b`.
