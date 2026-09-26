// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Dark/light mode toggle
// Preference order: saved choice > OS preference > dark (site default).
// Applied as data-theme="light" on <html>; the dark palette is the
// unmarked default in style.css, so no attribute means dark.
(function initThemeToggle() {
  const STORAGE_KEY = 'theme';
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const THEME_COLORS = { dark: '#0B1220', light: '#F5F7FB' }; // matches --bg in style.css

  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    if (toggle) {
      toggle.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
      toggle.setAttribute('aria-pressed', theme === 'light');
    }
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', theme === 'light' ? THEME_COLORS.light : THEME_COLORS.dark);
    }
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  applyTheme(saved || (prefersLight ? 'light' : 'dark'));

  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    });
  }

  // Follow the OS setting live, but only until the person picks a
  // theme themselves — once they do, their choice always wins.
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? 'light' : 'dark');
    }
  });
})();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav__links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll "hop trace" progress line
const traceFill = document.getElementById('traceFill');

function updateTrace() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  traceFill.style.height = progress + '%';
}

window.addEventListener('scroll', updateTrace, { passive: true });
window.addEventListener('resize', updateTrace);
updateTrace();

// Highlight whichever link corresponds to the section currently in
// view. Reusable for both the main site nav (About/Work/etc.) and a
// report page's "Contents" sidebar — pass it the set of links and it
// figures out the matching sections from their href="#id" values.
// Safely does nothing if a page has none of the matching sections.
function initScrollSpy(links, activeClass = 'is-active') {

  const hashLinks = links.filter(link => {
    const href = link.getAttribute('href') || '';
    return href.startsWith('#') && href.length > 1;
  });

  const sections = hashLinks
    .map(link => document.getElementById(link.getAttribute('href').slice(1)))
    .filter(Boolean);

  if (!sections.length) {
    return;
  }

  const setActive = (id) => {
    hashLinks.forEach(link => {
      link.classList.toggle(activeClass, link.getAttribute('href') === '#' + id);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    const mostVisible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (mostVisible) {
      setActive(mostVisible.target.id);
    }
  }, {
    rootMargin: '-40% 0px -50% 0px',
    threshold: [0, 0.25, 0.5, 0.75, 1]
  });

  sections.forEach(section => observer.observe(section));

}

// Main site nav (About, Work, Experience, Qualifications, Credentials, Contact)
initScrollSpy(Array.from(navLinks.querySelectorAll('a')));
