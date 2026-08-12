// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

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
