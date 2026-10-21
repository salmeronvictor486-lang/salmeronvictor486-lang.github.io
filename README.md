# Portfolio · Víctor Salmerón Gavilán

Web personal: soporte IT, sistemas y desarrollo. Castellano e inglés (botón ES / EN).

**Web:** https://victorsalmeron.dev/

## Tecnología

- HTML, CSS y JavaScript sin frameworks.
- **GSAP + ScrollTrigger:** animaciones de entrada y al hacer scroll.
- **Lenis:** scroll suave.
- Tipografías **Inter Tight**, **Instrument Serif** y **JetBrains Mono**.
- Todo alojado en la propia web (`assets/vendor`, `assets/fonts`). Licencias en `assets/vendor/LICENSES.txt`.

## Estructura

```
index.html          Página principal
404.html            Página de error
assets/css/         Estilos
assets/js/          boot.js (prepara animaciones) y main.js (idioma, animaciones, menú, email)
assets/vendor/      GSAP, ScrollTrigger y Lenis
assets/fonts/       Tipografías
assets/img/         Foto, proyectos, favicon, textura e imagen para redes (og.png)
cv/                 Currículums en PDF (sin teléfono)
robots.txt, sitemap.xml   Para que Google encuentre la web
```

## Seguridad y privacidad

- Política de seguridad de contenido (CSP): solo se cargan archivos de esta misma web.
- Sin scripts, fuentes ni servicios de terceros en el navegador. Sin cookies ni rastreadores.
- El email no aparece escrito en el código: se monta al pulsar el botón, para evitar spam de robots.
- Sin teléfono ni dirección en la web ni en los CV publicados.
- Los enlaces externos se abren con `rel="noopener noreferrer"`.
- Sin JavaScript, o con "reducir movimiento" activado, todo el contenido se ve igual (sin animaciones).

## Cómo actualizar

- **Textos en castellano:** en `index.html`.
- **Textos en inglés:** en `assets/js/main.js`, dentro de `EN`, con la misma clave (`data-i18n`) que en el HTML.
- **CV:** sustituye los PDF de `cv/` manteniendo el mismo nombre.

## Dominio

La web se sirve desde GitHub Pages con el dominio `victorsalmeron.dev` (archivo `CNAME`). El DNS está en Cloudflare:

| Tipo  | Nombre | Contenido |
|-------|--------|-----------|
| A     | @      | 185.199.108.153 · 185.199.109.153 · 185.199.110.153 · 185.199.111.153 |
| AAAA  | @      | 2606:50c0:8000::153 · 2606:50c0:8001::153 · 2606:50c0:8002::153 · 2606:50c0:8003::153 |
| CNAME | www    | salmeronvictor486-lang.github.io |

Todos en modo "DNS only" (nube gris). La antigua dirección `salmeronvictor486-lang.github.io` redirige al dominio.
