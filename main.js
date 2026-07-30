// 12Testers14Days - Minimal vanilla JS for interactivity
// No frameworks, no dependencies, ~3KB

(function() {
  'use strict';

  // Mobile menu toggle
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const navLinks = document.querySelector('[data-nav-links]');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // Language switcher
  const langBtn = document.querySelector('[data-lang-btn]');
  const langMenu = document.querySelector('[data-lang-menu]');
  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!langMenu.contains(e.target) && !langBtn.contains(e.target)) {
        langMenu.classList.remove('open');
      }
    });
  }

  // Auto-close details when another opens (single-open FAQ accordion feel — optional)
  document.querySelectorAll('.faq-item details').forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) {
        document.querySelectorAll('.faq-item details[open]').forEach(other => {
          if (other !== d) other.removeAttribute('open');
        });
      }
    });
  });

  // Smooth scroll for in-page anchors (respect reduced motion)
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id && id.length > 1) {
          const t = document.querySelector(id);
          if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        }
      });
    });
  }

  // Schema: track CTA clicks (lightweight analytics-friendly event)
  document.querySelectorAll('[data-cta]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.console && console.debug) console.debug('CTA:', btn.dataset.cta);
    });
  });
})();