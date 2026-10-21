# Portfolio · Víctor Salmerón Gavilán

Web personal: soporte IT, sistemas y desarrollo. Castellano e inglés (botón ES / EN).

**Web:** https://salmeronvictor486-lang.github.io/

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

## Dominio propio (pendiente)

Ahora mismo la web se publica en https://salmeronvictor486-lang.github.io/. Cuando compres `victorsalmeron.dev`:

1. En GitHub: **Settings → Pages → Custom domain**, escribe `victorsalmeron.dev` y guarda (esto crea el archivo `CNAME`). Marca **Enforce HTTPS** cuando esté disponible.
2. En tu proveedor del dominio, añade registros DNS `A` para `@` apuntando a `185.199.108.153`, `185.199.109.153`, `185.199.110.153` y `185.199.111.153`, y un `CNAME` para `www` apuntando a `salmeronvictor486-lang.github.io`.
3. Sustituye `https://salmeronvictor486-lang.github.io/` por `https://victorsalmeron.dev/` en `index.html`, `sitemap.xml`, `robots.txt` y este README.
