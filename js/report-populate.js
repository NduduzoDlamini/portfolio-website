// Populates a report page's title/tag/description from the shared
// dataProjects array (js/projects-data.js), matched via the
// data-project-id attribute on .report-hero. Keeps the report and
// its data-projects.html card in sync from one source of truth —
// edit js/projects-data.js, not this page, to change the content.

(function () {

  const hero = document.querySelector(".report-hero[data-project-id]");

  if (!hero || typeof dataProjects === "undefined") {
    return;
  }

  const projectId = hero.getAttribute("data-project-id");
  const project = dataProjects.find(function (p) {
    return p.id === projectId;
  });

  if (!project) {
    return;
  }

  const tagEl = document.getElementById("reportTag");
  const titleEl = document.getElementById("reportTitle");
  const descriptionEl = document.getElementById("reportDescription");

  if (tagEl) {
    tagEl.textContent = "Report · " + project.tag;
  }

  if (titleEl) {
    titleEl.textContent = project.title;
  }

  if (descriptionEl) {
    descriptionEl.textContent = project.description;
  }

  const stackEl = document.getElementById("reportStack");

  if (stackEl && project.stack && project.stack.length) {
    project.stack.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      stackEl.appendChild(li);
    });
  }

  const vizLinksEl = document.getElementById("reportVizLinks");

  if (vizLinksEl && project.links && project.links.length) {
    project.links.forEach(function (link) {
      const a = document.createElement("a");
      a.href = link.href;
      a.className = "btn btn--small";
      if (link.external) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      a.innerHTML = '<i class="' + link.icon + '"></i> ' + link.label;
      vizLinksEl.appendChild(a);
    });
  }

  document.title = project.title + " — Report | Nduduzo Dlamini";

})();


// =========================================================
// SCROLL SPY
// Highlights the sidebar nav link for whichever .report-section
// is currently in view. Runs independently of the block above
// so it still works even if the project lookup fails.
// =========================================================

(function () {

  const sections = document.querySelectorAll(".report-section[id]");
  const navLinks = document.querySelectorAll(".report-nav a[href^='#']");

  if (!sections.length || !navLinks.length) {
    return;
  }

  const linkById = {};
  navLinks.forEach(function (link) {
    linkById[link.getAttribute("href").slice(1)] = link;
  });

  function setActive(id) {
    navLinks.forEach(function (link) {
      link.classList.remove("is-active");
    });
    const activeLink = linkById[id];
    if (activeLink) {
      activeLink.classList.add("is-active");
    }
  }

  // Section counts as "current" once its top has crossed 20% down
  // the viewport, and stops counting once it's past the bottom 30% —
  // keeps the active link changing right as you scroll into a section.
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });

  // Highlight the first section immediately, before any scrolling.
  setActive(sections[0].id);

})();
