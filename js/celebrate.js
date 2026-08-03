// Small celebration burst for [data-celebrate] buttons — e.g. the CUM LAUDE badge.
(function () {
  var EMOJIS = ['🎉', '🎊', '✨', '⭐'];
  var COUNT = 16;

  function burst(el) {
    var rect = el.getBoundingClientRect();
    var originX = rect.left + rect.width / 2 + window.scrollX;
    var originY = rect.top + rect.height / 2 + window.scrollY;

    for (var i = 0; i < COUNT; i++) {
      var piece = document.createElement('span');
      piece.className = 'celebrate-particle';
      piece.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

      var angle = Math.random() * Math.PI * 2;
      var distance = 50 + Math.random() * 70;
      var tx = (Math.cos(angle) * distance) + 'px';
      var ty = (Math.sin(angle) * distance - 30) + 'px'; // slight upward bias

      piece.style.left = originX + 'px';
      piece.style.top = originY + 'px';
      piece.style.setProperty('--tx', tx);
      piece.style.setProperty('--ty', ty);
      piece.style.setProperty('--r-mid', (Math.random() * 40 - 20) + 'deg');
      piece.style.setProperty('--r-end', (Math.random() * 360) + 'deg');
      piece.style.animationDelay = (Math.random() * 60) + 'ms';

      document.body.appendChild(piece);
      piece.addEventListener('animationend', function () {
        this.remove();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('[data-celebrate]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        burst(btn);
      });
    });

    // Auto-play once when the section containing the badge scrolls into view.
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var target = entry.target;
            target.querySelectorAll('[data-celebrate]').forEach(function (btn) {
              burst(btn);
            });
            obs.unobserve(target);
          }
        });
      }, { threshold: 0.25, rootMargin: '0px 0px -15% 0px' });

      var sections = new Set();
      buttons.forEach(function (btn) {
        var section = btn.closest('section') || btn;
        sections.add(section);
      });
      sections.forEach(function (section) {
        observer.observe(section);
      });
    }
  });
})();
