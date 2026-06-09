/* ============================================================
   JI&E — i18n engine + shared (common) translations
   Pages append their own keys via:
     I18N.add({ en:{...}, fr:{...} })
   ============================================================ */
window.I18N = (function () {
  const store = { en: {}, fr: {} };

  function add(dict) {
    if (dict.en) Object.assign(store.en, dict.en);
    if (dict.fr) Object.assign(store.fr, dict.fr);
  }

  function get(lang, key) {
    return (store[lang] && store[lang][key]) ?? store.en[key] ?? null;
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = get(lang, el.getAttribute('data-i18n'));
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
      const v = get(lang, el.getAttribute('data-i18n-ph'));
      if (v != null) el.setAttribute('placeholder', v);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const v = get(lang, el.getAttribute('data-i18n-aria'));
      if (v != null) el.setAttribute('aria-label', v);
    });
    const t = get(lang, 'meta.title');
    if (t) document.title = t;
    const d = get(lang, 'meta.desc');
    if (d) { const m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute('content', d); }
  }

  function current() {
    return localStorage.getItem('jie-lang') || 'en';
  }

  function set(lang) {
    localStorage.setItem('jie-lang', lang);
    apply(lang);
    document.querySelectorAll('.lang button').forEach((b) =>
      b.classList.toggle('active', b.dataset.lang === lang)
    );
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  return { add, apply, set, current, get };
})();

/* ---------------- Shared strings: nav, footer, CTAs ---------------- */
I18N.add({
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.capabilities': 'Capabilities',
    'nav.industries': 'Industries',
    'nav.projects': 'Projects',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact Us',
    'nav.cta': 'Get in touch',

    'cta.explore': 'Explore Our Solutions',
    'cta.contact': 'Contact Us',
    'cta.request': 'Request Information',
    'cta.learn': 'Learn more',
    'cta.discover': 'Discover',

    'foot.tagline': 'Advanced technology, engineering and logistics solutions for defence, aerospace, security and institutional markets across Africa and international markets.',
    'foot.company': 'Company',
    'foot.explore': 'Explore',
    'foot.reach': 'Reach Us',
    'foot.addr': 'Rabat, Morocco',
    'foot.phone': 'Phone number',
    'foot.email': 'Email',
    'foot.rights': '© 2026 JI&E Technology Services. All rights reserved.',
    'foot.owned': 'Jointly owned by Jilya Holding & Eltel Technologistics Ltd.',
    'foot.privacy': 'Privacy',
    'foot.terms': 'Terms',

    'cband.eyebrow': 'Let’s build what’s next',
    'cband.title': 'Ready to engineer your mission-critical advantage?',
    'cband.text': 'Partner with a Moroccan technology leader trusted across defence, aerospace and security programmes.',

    'cap.tab.aerospace': 'Aerospace',
    'cap.tab.handling': 'Aircraft Handling',

    'ind.defence': 'Defence',
    'ind.aerospace': 'Aerospace',
    'ind.security': 'Homeland Security',
    'ind.railway': 'Railway',
    'proj.cat.defence': 'Defence',
    'proj.cat.aerospace': 'Aerospace',
    'proj.cat.engineering': 'Engineering',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.capabilities': 'Expertises',
    'nav.industries': 'Secteurs',
    'nav.projects': 'Projets',
    'nav.careers': 'Carrières',
    'nav.contact': 'Contact',
    'nav.cta': 'Nous contacter',

    'cta.explore': 'Découvrir nos solutions',
    'cta.contact': 'Nous contacter',
    'cta.request': 'Demander une information',
    'cta.learn': 'En savoir plus',
    'cta.discover': 'Découvrir',

    'foot.tagline': 'Solutions technologiques, d’ingénierie et de logistique avancées pour les marchés de la défense, de l’aérospatial, de la sécurité et institutionnels, au Maroc, en Afrique et à l’international.',
    'foot.company': 'Société',
    'foot.explore': 'Explorer',
    'foot.reach': 'Nous joindre',
    'foot.addr': 'Rabat, Maroc',
    'foot.phone': 'Téléphone',
    'foot.email': 'E-mail',
    'foot.rights': '© 2026 JI&E Technology Services. Tous droits réservés.',
    'foot.owned': 'Détenue conjointement par Jilya Holding et Eltel Technologistics Ltd.',
    'foot.privacy': 'Confidentialité',
    'foot.terms': 'Conditions',

    'cband.eyebrow': 'Construisons l’avenir',
    'cband.title': 'Prêt à bâtir votre avantage stratégique ?',
    'cband.text': 'Associez-vous à un leader technologique marocain reconnu dans les programmes de défense, d’aérospatial et de sécurité.',

    'cap.tab.aerospace': 'Aérospatial',
    'cap.tab.handling': 'Servitude aéronautique',

    'ind.defence': 'Défense',
    'ind.aerospace': 'Aérospatial',
    'ind.security': 'Sécurité intérieure',
    'ind.railway': 'Ferroviaire',
    'proj.cat.defence': 'Défense',
    'proj.cat.aerospace': 'Aérospatial',
    'proj.cat.engineering': 'Ingénierie',
  },
});
