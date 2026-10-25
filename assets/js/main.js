// Portfolio de Víctor Salmerón Gavilán — comportamiento de la página.
// Librerías (alojadas en la propia web): GSAP + ScrollTrigger para animaciones, Lenis para el scroll suave.
// Todo el texto se cambia con textContent (nunca innerHTML).
(function () {
  "use strict";

  var html = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
  var motion = hasGsap && !reduceMotion;

  // ---------- Traducciones (el castellano está en el HTML) ----------
  var EN = {
    "skip": "Skip to content",
    "menu": "Menu",
    "nav.projects": "Work",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.cv": "CV ↓",
    "hero.l1": "IT technician who",
    "hero.l2": "learns by doing",
    "hero.l3": ". IT support, systems and, a little more every day, development.",
    "photo.alt": "Portrait of Víctor Salmerón Gavilán wearing a black T-shirt",
    "photo.caption": "Fig. 01 — Terrassa, 2026",
    "fact1.k": "(01) Now",
    "fact1.v": "Studying DAM and ASIR at the same time, Colegio Vedruna Vall",
    "fact2.k": "(02) Before",
    "fact2.v": "IT technician at CASARRAMONA, 9 months",
    "fact3.k": "(03) Base",
    "fact3.v": "SMR at Salesians Terrassa, final grade 8/10",
    "hero.scroll": "↓ Scroll",
    "mq.servers": "servers",
    "mq.networks": "networking",
    "mq.security": "Cybersecurity",
    "mq.backups": "backups",
    "about.kicker": "About",
    "st.a": "I'm a systems and networks technician, I study",
    "st.b": "two higher degrees at once",
    "st.c": "and I've spent 9 months solving real problems for real clients. I learn from every mistake until I understand its cause.",
    "about.p1": "I hold a vocational degree in Microcomputer Systems and Networks (SMR), and I'm currently studying two higher vocational degrees at the same time: Multiplatform Application Development (DAM) and Network Systems Administration (ASIR) at Colegio Vedruna Vall, Terrassa.",
    "about.p3": "I'm learning C++, and I use AI (Claude Code) as a development tool in my personal projects. My goal is to study Computer Engineering.",
    "value1.title": "Active learning",
    "value1.text": "I build, test and teach myself new technologies, such as generative AI.",
    "value2.title": "I learn from my mistakes",
    "value2.text": "I analyse every failure until I find the root cause, and I document the solution.",
    "value3.title": "Consistency",
    "value3.text": "I study two higher vocational degrees at the same time, with organisation and autonomy.",
    "exp.kicker": "Experience",
    "job.months": "months of real IT support",
    "job.dates": "10.2025 — 06.2026 · Terrassa · On-site",
    "job.role": "IT Technician",
    "job.type": "paid dual training",
    "job.l1": "Help Desk support for clients: troubleshooting and resolving incidents, installing Microsoft Office and removing unwanted software.",
    "job.l2": "Performing and maintaining server backups for clients.",
    "job.l3": "Building, configuring and repairing servers; assembling, disassembling and repairing computers.",
    "job.l4": "Monitoring clients' cybersecurity through a security management platform: antivirus status and updates.",
    "job.l5": "In-store customer service.",
    "proj.kicker": "Work",
    "proj.t1": "Things",
    "proj.t2": "I've built",
    "proj.sub": "Personal projects developed with AI assistance (Claude Code): I come up with the idea, define what they do, review the changes, test them and release them.",
    "tico.alt": "TICO splash screen: a small white robot with turquoise eyes",
    "tico.cat": "Desktop app · Windows / macOS / Linux",
    "tico.tagline": "A small robot that lives at the top of your screen, chats with you and, only when you ask, looks at your screen to help.",
    "tico.p1": "6 released versions (latest: 1.2.0) with installers for every system and a portable version.",
    "tico.p2": "Integrates 12 AI providers, reads the screen with OCR, reads Office documents and PDFs, and converts Word to PDF.",
    "tico.p3": "Privacy first: local data (SQLite), API keys in the system keychain and no telemetry.",
    "tico.p4": "Continuous integration and automated releases with GitHub Actions.",
    "link.web": "Visit website",
    "link.code": "Code",
    "cg.ok": "Exercise passed · 7-day streak",
    "cg.cat": "Web · learn C by playing",
    "cg.tagline": "A gamified website to learn C programming, built from what I learn in class.",
    "cg.p1": "16 chapters, 118 lessons and 22 challenges with automatic grading, XP, streaks and badges.",
    "cg.p2": "Syllabus: variables, loops, arrays, functions, pointers and dynamic memory.",
    "cg.p3": "A C interpreter that explains common beginner errors in Spanish, validated with tests against gcc.",
    "edu.kicker": "Education",
    "edu.t1": "Three vocational degrees.",
    "edu.t2": "One goal: Computer Engineering.",
    "edu1.date": "2026 — now",
    "edu1.title": "Higher Vocational Degree in Multiplatform Application Development (DAM)",
    "edu1.text": "C++ programming, databases and SQL, development environments with Git and markup languages. Expected completion: 2028.",
    "edu2.date": "2026 — now",
    "edu2.title": "Higher Vocational Degree in Network Systems Administration (ASIR)",
    "edu2.text": "Modules taken alongside DAM: Windows and Linux operating systems, network administration, hardware and databases.",
    "edu3.title": "Vocational Degree in Microcomputer Systems and Networks (SMR)",
    "edu3.text": "Dual training, final grade 8/10. Computer assembly and maintenance, Windows, Windows Server and Linux, local networks, DHCP, DNS and IT security.",
    "skills.kicker": "Skills",
    "sk1.title": "Support & systems",
    "sk.incidents": "Incident resolution",
    "sk.customer": "Customer service",
    "sk2.title": "Hardware & servers",
    "sk.assembly": "Computer assembly & repair",
    "sk.servers": "Server building",
    "sk.backups": "Backups",
    "sk.maintenance": "Preventive maintenance",
    "sk3.title": "Networking & security",
    "sk.lan": "Local networks (LAN)",
    "sk.monitoring": "Security monitoring",
    "sk4.title": "Development",
    "sk.cpp": "C++ (learning)",
    "sk.sql": "SQL (fundamentals)",
    "sk.ai": "AI-assisted development",
    "langs.title": "Languages",
    "lang.es": "Spanish: native",
    "lang.ca": "Catalan: native",
    "lang.en": "English: B2 (no official certificate)",
    "cv.kicker": "Résumé",
    "cv1.a": "CV",
    "cv1.b": "Help Desk & Systems",
    "cv1.text": "IT support, help desk and systems roles",
    "cv.sub": "PDF in English.",
    "contact.kicker": "Contact",
    "contact.t1": "Let's talk.",
    "contact.sub": "I'm open to internships, dual training and junior opportunities in IT support, systems or development in Terrassa, Barcelona and the surrounding area.",
    "contact.email": "Send me an email",
    "contact.copy": "Copy email",
    "contact.copied": "Email copied ✓",
    "footer.privacy": "No cookies, no trackers",
    "footer.top": "Back to top ↑"
  };

  var CURSOR_LABELS = {
    es: { view: "Abrir", download: "PDF" },
    en: { view: "Open", download: "PDF" }
  };

  var META = {
    es: {
      title: document.title,
      description: (document.querySelector('meta[name="description"]') || {}).content || ""
    },
    en: {
      title: "Víctor Salmerón Gavilán · IT Support, Systems & Development",
      description: "Portfolio of Víctor Salmerón Gavilán: IT technician in Terrassa (Barcelona), DAM & ASIR student, with experience in Help Desk support, servers and cybersecurity. Projects, résumé and contact."
    }
  };

  // ---------- Idioma ----------
  var textNodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var altNodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n-alt]"));
  var hrefNodes = Array.prototype.slice.call(document.querySelectorAll("[data-href-en]"));
  textNodes.forEach(function (el) { el.dataset.es = el.textContent.trim(); });
  hrefNodes.forEach(function (el) { el.dataset.hrefEs = el.getAttribute("href"); });
  altNodes.forEach(function (el) { el.dataset.esAlt = el.getAttribute("alt") || ""; });

  var langButton = document.querySelector(".lang-toggle");
  var currentLang = "es";
  var onLangChange = [];

  function setLang(lang) {
    currentLang = lang === "en" ? "en" : "es";
    var en = currentLang === "en";
    textNodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.textContent = en && EN[key] ? EN[key] : el.dataset.es;
    });
    altNodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      el.setAttribute("alt", en && EN[key] ? EN[key] : el.dataset.esAlt);
    });
    hrefNodes.forEach(function (el) {
      el.setAttribute("href", en ? el.getAttribute("data-href-en") : el.dataset.hrefEs);
    });
    html.lang = currentLang;
    document.title = META[currentLang].title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", META[currentLang].description);
    if (langButton) {
      langButton.setAttribute("aria-label", en ? "Cambiar a castellano" : "Switch to English");
      langButton.querySelectorAll("[data-lang-opt]").forEach(function (opt) {
        opt.classList.toggle("is-active", opt.getAttribute("data-lang-opt") === currentLang);
      });
    }
    refreshEmailText();
    onLangChange.forEach(function (fn) { fn(); });
    try { localStorage.setItem("lang", currentLang); } catch (e) { /* almacenamiento no disponible */ }
  }

  if (langButton) {
    langButton.addEventListener("click", function () { setLang(currentLang === "es" ? "en" : "es"); });
  }

  // ---------- Reloj de Terrassa ----------
  var clock = document.querySelector(".clock-time");
  function tick() {
    if (!clock) return;
    try {
      clock.textContent = new Intl.DateTimeFormat("es-ES", { timeZone: "Europe/Madrid", hour: "2-digit", minute: "2-digit" }).format(new Date());
    } catch (e) { clock.textContent = ""; }
  }
  tick();
  window.setInterval(tick, 20000);

  // ---------- Barra superior al hacer scroll ----------
  var topbar = document.querySelector(".topbar");
  function onScrollBar() { if (topbar) topbar.classList.toggle("is-scrolled", window.scrollY > 24); }
  window.addEventListener("scroll", onScrollBar, { passive: true });
  onScrollBar();

  // ---------- Menú móvil ----------
  var menuToggle = document.querySelector(".menu-toggle");
  var navList = document.getElementById("nav-menu");
  function closeMenu() {
    if (!menuToggle || !navList) return;
    menuToggle.setAttribute("aria-expanded", "false");
    navList.classList.remove("is-open");
  }
  if (menuToggle && navList) {
    menuToggle.addEventListener("click", function () {
      var open = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!open));
      navList.classList.toggle("is-open", !open);
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && navList.classList.contains("is-open")) { closeMenu(); menuToggle.focus(); }
    });
  }

  // ---------- Email protegido frente a robots ----------
  // La dirección se guarda al revés en el HTML y solo se monta cuando alguien pulsa.
  var emailLink = document.querySelector(".email-link");
  var emailText = document.querySelector(".email-text");
  var emailShown = false;
  function buildEmail() {
    if (!emailLink) return "";
    var rev = function (s) { return s.split("").reverse().join(""); };
    return rev(emailLink.getAttribute("data-u") || "") + "@" + rev(emailLink.getAttribute("data-d") || "");
  }
  function refreshEmailText() { if (emailShown && emailText) emailText.textContent = buildEmail(); }
  if (emailLink) {
    emailLink.addEventListener("click", function (ev) {
      var address = buildEmail();
      if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(address)) return;
      ev.preventDefault();
      emailShown = true;
      refreshEmailText();
      window.location.href = "mailto:" + address;
    });
  }

  // Botón "Copiar email": copia la dirección y la muestra debajo
  var copyButton = document.querySelector(".copy-email");
  var copyTimer;
  if (copyButton) {
    copyButton.addEventListener("click", function () {
      var address = buildEmail();
      if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(address)) return;
      emailShown = true;
      refreshEmailText();
      function done() {
        copyButton.textContent = currentLang === "en" ? EN["contact.copied"] : "Email copiado ✓";
        window.clearTimeout(copyTimer);
        copyTimer = window.setTimeout(function () {
          copyButton.textContent = currentLang === "en" ? EN["contact.copy"] : copyButton.dataset.es;
        }, 2500);
      }
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(address).then(done, function () { /* se queda visible debajo para copiarla a mano */ });
      } catch (e) { /* se queda visible debajo para copiarla a mano */ }
    });
  }

  // ---------- Frase de "Sobre mí" partida en palabras ----------
  var statement = document.querySelector("[data-split]");
  function splitStatement() {
    if (!statement) return [];
    var words = [];
    statement.querySelectorAll("[data-i18n]").forEach(function (part) {
      var text = part.textContent.trim();
      part.textContent = "";
      text.split(/\s+/).forEach(function (w, i, arr) {
        var span = document.createElement("span");
        span.className = "word";
        span.textContent = w;
        part.appendChild(span);
        words.push(span);
        if (i < arr.length - 1) part.appendChild(document.createTextNode(" "));
      });
    });
    return words;
  }

  // ---------- Idioma inicial ----------
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) { saved = null; }
  setLang(saved || ((navigator.language || "es").toLowerCase().indexOf("en") === 0 ? "en" : "es"));

  // ---------- Sin animaciones: mostrarlo todo y salir ----------
  if (!motion) {
    html.classList.add("is-ready");
    initAnchors(null);
    return;
  }

  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

  // Scroll suave (Lenis) sincronizado con GSAP
  var lenis = null;
  if (typeof window.Lenis !== "undefined") {
    lenis = new window.Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }
  initAnchors(lenis);

  // Entrada del hero
  var heroLines = document.querySelectorAll(".hero .line-inner");
  var heroFades = document.querySelectorAll(".hero-grid, .scroll-cue");
  // y: 0 descarta el desplazamiento en px que GSAP leería del CSS inicial
  gsap.set(heroLines, { y: 0, yPercent: 105 });
  gsap.set(heroFades, { autoAlpha: 0, y: 24 });
  html.classList.add("is-ready");
  gsap.timeline({ defaults: { ease: "expo.out" } })
    .to(heroLines, { yPercent: 0, duration: 1.5, stagger: 0.1 }, 0.15)
    .to(heroFades, { autoAlpha: 1, y: 0, duration: 1.2, stagger: 0.1 }, 0.7)
    .from(".hero-img img", { scale: 1.3, duration: 2 }, 0.7);

  // El título del hero se desplaza un poco más lento que la página
  gsap.to(".hero-title", {
    yPercent: -14, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
  });

  // Aparición de bloques al entrar en pantalla
  var reveals = gsap.utils.toArray(".reveal");
  gsap.set(reveals, { autoAlpha: 0, y: 36 });
  ScrollTrigger.batch(reveals, {
    start: "top 90%",
    once: true,
    onEnter: function (batch) {
      batch.forEach(function (el) { el.dataset.shown = "1"; });
      gsap.to(batch, { autoAlpha: 1, y: 0, duration: 1.1, ease: "expo.out", stagger: 0.08, overwrite: true });
    }
  });
  // Red de seguridad: lo que ya está en pantalla o por encima nunca se queda oculto
  window.setTimeout(function () {
    reveals.forEach(function (el) {
      if (!el.dataset.shown && el.getBoundingClientRect().top < window.innerHeight) {
        gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.6 });
      }
    });
  }, 2500);

  // Frase que se "enciende" palabra a palabra al hacer scroll
  var statementTween = null;
  function buildStatement() {
    if (statementTween) { statementTween.scrollTrigger && statementTween.scrollTrigger.kill(); statementTween.kill(); }
    var words = splitStatement();
    if (!words.length) return;
    statementTween = gsap.fromTo(words, { opacity: 0.14 }, {
      opacity: 1, ease: "none", stagger: 0.1,
      scrollTrigger: { trigger: statement, start: "top 82%", end: "bottom 45%", scrub: true }
    });
  }
  buildStatement();
  onLangChange.push(function () { buildStatement(); ScrollTrigger.refresh(); });

  // Imágenes de proyectos con parallax dentro de su marco
  gsap.utils.toArray(".parallax").forEach(function (el) {
    gsap.fromTo(el, { yPercent: -6 }, {
      yPercent: 6, ease: "none",
      scrollTrigger: { trigger: el.closest(".work-media") || el, start: "top bottom", end: "bottom top", scrub: true }
    });
  });

  // Contador de meses
  document.querySelectorAll("[data-count]").forEach(function (el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var obj = { v: 0 };
    gsap.to(obj, {
      v: target, duration: 1.6, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
      onUpdate: function () { el.textContent = String(Math.round(obj.v)); }
    });
  });

  // Título grande del contacto
  gsap.from(".contact-title .line-inner", {
    yPercent: 105, duration: 1.4, ease: "expo.out",
    scrollTrigger: { trigger: ".contact", start: "top 75%", once: true }
  });

  // Botones "magnéticos"
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (finePointer) {
    document.querySelectorAll(".magnetic").forEach(function (btn) {
      btn.addEventListener("mousemove", function (ev) {
        var r = btn.getBoundingClientRect();
        gsap.to(btn, { x: (ev.clientX - r.left - r.width / 2) * 0.25, y: (ev.clientY - r.top - r.height / 2) * 0.35, duration: 0.5, ease: "power3.out" });
      });
      btn.addEventListener("mouseleave", function () { gsap.to(btn, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" }); });
    });

    // Cursor personalizado
    var cursor = document.querySelector(".cursor");
    var label = cursor && cursor.querySelector(".cursor-label");
    if (cursor) {
      html.classList.add("has-cursor");
      var xTo = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3" });
      var yTo = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3" });
      window.addEventListener("mousemove", function (ev) { xTo(ev.clientX); yTo(ev.clientY); cursor.classList.remove("is-hidden"); });
      document.addEventListener("mouseleave", function () { cursor.classList.add("is-hidden"); });
      document.querySelectorAll("[data-cursor]").forEach(function (el) {
        el.addEventListener("mouseenter", function () {
          if (label) label.textContent = CURSOR_LABELS[currentLang][el.getAttribute("data-cursor")] || "";
          cursor.classList.add("is-big");
        });
        el.addEventListener("mouseleave", function () { cursor.classList.remove("is-big"); });
      });
    }
  }

  // Recalcular posiciones cuando cargan las fuentes
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });

  // ---------- Enlaces internos (con scroll suave si hay Lenis) ----------
  function initAnchors(smooth) {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (ev) {
        var id = a.getAttribute("href");
        if (id === "#" || a.classList.contains("email-link")) return;
        var target = id === "#top" ? document.body : document.querySelector(id);
        if (!target) return;
        closeMenu();
        if (smooth) {
          ev.preventDefault();
          smooth.scrollTo(id === "#top" ? 0 : target, { offset: -64, duration: 1.4 });
        }
      });
    });
  }
})();
