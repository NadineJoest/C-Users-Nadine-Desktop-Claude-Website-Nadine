/* ============================================================
   main.js — Nadine Joest Website
   ============================================================ */

/* ---- Scroll Reveal ---- */
(function () {
  function initReveal() {
    var grids = document.querySelectorAll(
      '.card-grid-3, .card-grid-2, .pakete-grid, .prozess-grid, .werte-grid, .stats-grid, .footer-grid'
    );
    grids.forEach(function (grid) {
      Array.from(grid.children).forEach(function (child, i) {
        child.classList.add('reveal');
        child.style.transitionDelay = (i * 0.1) + 's';
      });
    });

    var singles = document.querySelectorAll(
      '.section-header, .hero-content, .hero-image, .page-hero .container > *, ' +
      '.about-hero-grid > div, .about-story-grid > div, ' +
      '.fuer-wen-grid > div, .kontakt-grid > div, ' +
      '.pullquote, .fuer-wen-box, .calendly-box, .paket-card, .info-note'
    );
    singles.forEach(function (el) {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
      }
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();

/* ---- Mobile Navigation ---- */
function toggleNav() {
  const links = document.getElementById('nav-links');
  const btn   = document.querySelector('.nav-toggle');
  const isOpen = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen);
}

/* Close nav when a link is clicked (mobile) */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('#nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      const links = document.getElementById('nav-links');
      if (links.classList.contains('open')) {
        links.classList.remove('open');
        document.querySelector('.nav-toggle').setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* Close nav when clicking outside */
  document.addEventListener('click', function (e) {
    const nav   = document.querySelector('.nav');
    const links = document.getElementById('nav-links');
    if (nav && links && !nav.contains(e.target) && links.classList.contains('open')) {
      links.classList.remove('open');
      document.querySelector('.nav-toggle').setAttribute('aria-expanded', 'false');
    }
  });

  /* ---- Kontaktformular ---- */
  const form = document.getElementById('kontakt-formular');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const name       = form.querySelector('#name').value.trim();
      const email      = form.querySelector('#email').value.trim();
      const nachricht  = form.querySelector('#nachricht').value.trim();
      const datenschutz = form.querySelector('#datenschutz').checked;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const successBox = document.getElementById('form-success');
      const errorBox   = document.getElementById('form-error');

      /* Client-side validation */
      if (!name || !email || !nachricht) {
        alert('Bitte fülle alle Pflichtfelder aus.');
        return;
      }
      if (!emailRegex.test(email)) {
        alert('Bitte gib eine gültige E-Mail-Adresse ein.');
        return;
      }
      if (!datenschutz) {
        alert('Bitte stimme der Datenschutzerklärung zu.');
        return;
      }

      const submitBtn = form.querySelector('[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Wird gesendet …';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          form.reset();
          if (successBox) { successBox.style.display = 'block'; }
          if (errorBox)   { errorBox.style.display   = 'none';  }
        } else {
          throw new Error('Server error');
        }
      } catch {
        if (errorBox)   { errorBox.style.display   = 'block'; }
        if (successBox) { successBox.style.display = 'none';  }
      } finally {
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Nachricht absenden';
      }
    });
  }
});
