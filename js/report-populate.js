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
