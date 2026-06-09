/* ============================================================
   JI&E — site behaviour
   ============================================================ */
(function () {
  'use strict';

  const ICONS = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7 0-3.9-2.37-3.9-2.38 0-2.74 1.85-2.74 3.78V24h-4V8Z"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.5 8.6L23.3 22h-6.8l-5.3-7-6.1 7H2l8-9.2L1 2h6.9l4.8 6.4L18.9 2Zm-2.4 18h1.9L7.6 4H5.6L16.5 20Z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 4.9 12 4.9 12 4.9s-7 0-8.9.5A3 3 0 0 0 1 7.5 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.5ZM9.8 15.5v-7l6 3.5-6 3.5Z"/></svg>',
  };

  /* ---------------- Header ---------------- */
  const NAV = [
    ['index.html', 'home', 'nav.home'],
    ['about.html', 'about', 'nav.about'],
    ['capabilities.html', 'capabilities', 'nav.capabilities'],
    ['industries.html', 'industries', 'nav.industries'],
    ['projects.html', 'projects', 'nav.projects'],
    ['careers.html', 'careers', 'nav.careers'],
    ['contact.html', 'contact', 'nav.contact'],
  ];

  function buildHeader() {
    const page = document.body.dataset.page || 'home';
    const links = NAV.map(
      ([href, key, i18n]) =>
        `<a href="${href}" class="${key === page ? 'active' : ''}" data-i18n="${i18n}">…</a>`
    ).join('');

    return `
    <header class="site-header" id="siteHeader">
      <div class="container">
        <a href="index.html" class="brand" aria-label="JI&E Technology Services">
          <img src="assets/img/logo-white.png" alt="JI&E Technology Services" />
        </a>
        <nav class="nav" id="primaryNav">${links}</nav>
        <div class="header-right">
          <div class="lang" role="group" aria-label="Language">
            <button data-lang="en" aria-label="English"><span class="flag">🇬🇧</span>EN</button>
            <button data-lang="fr" aria-label="Français"><span class="flag">🇫🇷</span>FR</button>
          </div>
          <a href="contact.html" class="btn btn--cta header-cta" data-i18n="nav.cta">…</a>
          <button class="nav-toggle" id="navToggle" aria-label="Menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>`;
  }

  /* ---------------- Footer ---------------- */
  function buildFooter() {
    return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <img src="assets/img/logo-white.png" alt="JI&E Technology Services" />
            <p data-i18n="foot.tagline">…</p>
            <div class="socials">
              <a href="#" aria-label="LinkedIn">${ICONS.linkedin}</a>
              <a href="#" aria-label="X">${ICONS.x}</a>
              <a href="#" aria-label="YouTube">${ICONS.youtube}</a>
            </div>
          </div>
          <div class="footer-col">
            <h5 data-i18n="foot.company">Company</h5>
            <ul>
              <li><a href="about.html" data-i18n="nav.about">About</a></li>
              <li><a href="capabilities.html" data-i18n="nav.capabilities">Capabilities</a></li>
              <li><a href="industries.html" data-i18n="nav.industries">Industries</a></li>
              <li><a href="careers.html" data-i18n="nav.careers">Careers</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5 data-i18n="foot.explore">Explore</h5>
            <ul>
              <li><a href="projects.html" data-i18n="nav.projects">Projects</a></li>
              <li><a href="capabilities.html#aerospace" data-i18n="cap.tab.aerospace">Aerospace</a></li>
              <li><a href="capabilities.html#handling" data-i18n="cap.tab.handling">Aircraft Handling</a></li>
              <li><a href="contact.html" data-i18n="nav.contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5 data-i18n="foot.reach">Reach Us</h5>
            <ul class="footer-contact">
              <li><span class="ic">${ICONS.pin}</span><span><strong>JI&E Technology Services</strong><br><span data-i18n="foot.addr">Rabat, Morocco</span></span></li>
              <li><span class="ic">${ICONS.phone}</span><a href="tel:+212000000000">+212 (0)5 00 00 00 00</a></li>
              <li><span class="ic">${ICONS.mail}</span><a href="mailto:contact@jie-techservices.com">contact@jie-techservices.com</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span data-i18n="foot.rights">© 2026 JI&E Technology Services.</span>
          <span data-i18n="foot.owned">Jointly owned by Jilya Holding &amp; Eltel Technologistics Ltd.</span>
        </div>
      </div>
    </footer>`;
  }

  /* ---------------- CTA band (optional shared) ---------------- */
  window.JIE_ctaBand = function () {
    return `
    <section class="section">
      <div class="container">
        <div class="cta-band reveal">
          <div class="cta-band__glow"></div>
          <div class="cta-band__grid"></div>
          <span class="eyebrow eyebrow--center" data-i18n="cband.eyebrow">—</span>
          <h2 data-i18n="cband.title">Ready to engineer your advantage?</h2>
          <p data-i18n="cband.text">—</p>
          <div class="hero__cta">
            <a href="contact.html" class="btn btn--primary btn--lg" data-i18n="cta.contact">Contact Us<span></span></a>
            <a href="capabilities.html" class="btn btn--ghost on-dark btn--lg" data-i18n="cta.explore">Explore</a>
          </div>
        </div>
      </div>
    </section>`;
  };

  /* ---------------- Inject + init ---------------- */
  function mount() {
    const h = document.getElementById('header');
    const f = document.getElementById('footer');
    const c = document.getElementById('cta-band');
    if (h) h.outerHTML = buildHeader();
    if (c) c.outerHTML = window.JIE_ctaBand();
    if (f) f.outerHTML = buildFooter();

    // add arrow icon to CTA-style buttons that have a trailing <span>
    document.querySelectorAll('.btn span:empty').forEach((s) => (s.innerHTML = ICONS.arrow));

    initLang();
    initHeaderScroll();
    initMobileMenu();
    initReveal();
    initCounters();
    initHeroSlides();
    initTabs();
    initFilters();
    initForms();
    initProgress();
  }

  /* ---------------- Language ---------------- */
  function initLang() {
    const lang = I18N.current();
    I18N.apply(lang);
    document.querySelectorAll('.lang button').forEach((b) => {
      b.classList.toggle('active', b.dataset.lang === lang);
      b.addEventListener('click', () => I18N.set(b.dataset.lang));
    });
  }

  /* ---------------- Header scroll state ---------------- */
  function initHeaderScroll() {
    const header = document.getElementById('siteHeader');
    if (!header) return;
    const solid = document.body.dataset.header === 'solid';
    if (solid) header.classList.add('solid');
    const onScroll = () => {
      if (solid) return;
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------------- Mobile menu ---------------- */
  function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('primaryNav');
    if (!toggle || !nav) return;
    const close = () => {
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => e.key === 'Escape' && close());
  }

  /* ---------------- Scroll reveal ---------------- */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach((e) => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((e) => io.observe(e));
  }

  /* ---------------- Animated counters ---------------- */
  function initCounters() {
    const nums = document.querySelectorAll('[data-count]');
    if (!nums.length) return;
    const run = (el) => {
      const target = parseFloat(el.dataset.count);
      const dur = 1600;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target * eased;
        el.textContent = Number.isInteger(target)
          ? Math.round(val).toString()
          : val.toFixed(1);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = el.dataset.count;
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    nums.forEach((n) => io.observe(n));
  }

  /* ---------------- Hero slideshow ---------------- */
  function initHeroSlides() {
    const slides = document.querySelectorAll('.hero__slide');
    if (slides.length < 2) return;
    let i = 0;
    slides[0].classList.add('is-active');
    setInterval(() => {
      slides[i].classList.remove('is-active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-active');
    }, 5000);
  }

  /* ---------------- Tabs ---------------- */
  function initTabs() {
    document.querySelectorAll('[data-tabs]').forEach((group) => {
      const tabs = group.querySelectorAll('.tab');
      const panels = document.querySelectorAll('.tab-panel');
      const activate = (id) => {
        tabs.forEach((t) => t.classList.toggle('active', t.dataset.tab === id));
        panels.forEach((p) => p.classList.toggle('active', p.id === id));
      };
      tabs.forEach((t) =>
        t.addEventListener('click', () => {
          activate(t.dataset.tab);
          history.replaceState(null, '', '#' + t.dataset.tab);
        })
      );
      const hash = location.hash.slice(1);
      if (hash && [...tabs].some((t) => t.dataset.tab === hash)) activate(hash);
    });
  }

  /* ---------------- Project filters ---------------- */
  function initFilters() {
    const bar = document.querySelector('[data-filter-bar]');
    if (!bar) return;
    const items = document.querySelectorAll('[data-cat]');
    bar.querySelectorAll('.tab').forEach((btn) =>
      btn.addEventListener('click', () => {
        bar.querySelectorAll('.tab').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        items.forEach((it) => {
          const show = f === 'all' || it.dataset.cat === f;
          it.style.display = show ? '' : 'none';
        });
      })
    );
  }

  /* ---------------- Forms (front-end demo) ---------------- */
  function initForms() {
    document.querySelectorAll('form[data-demo]').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        const ok = form.querySelector('.form-success');
        if (ok) ok.classList.add('show');
        form.querySelectorAll('input,textarea,select').forEach((el) => {
          if (el.type !== 'submit') el.value = '';
        });
        if (ok) ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
  }

  /* ---------------- Scroll progress ---------------- */
  function initProgress() {
    const bar = document.querySelector('.progress-bar');
    if (!bar) return;
    const onScroll = () => {
      const h = document.documentElement;
      const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = p + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
