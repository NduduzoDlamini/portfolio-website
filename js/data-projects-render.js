// Renders the project cards on data-projects.html from the shared
// dataProjects array (js/projects-data.js). Keeps this page and each
// project's report page in sync from one source of truth.

(function () {

  const container = document.getElementById("dataProjectsList");

  if (!container || typeof dataProjects === "undefined") {
    return;
  }

  dataProjects.forEach(function (project) {

    const article = document.createElement("article");
    article.className = project.placeholder
      ? "data-project data-project--placeholder"
      : "data-project";

    const imageDiv = document.createElement("div");
    imageDiv.className = "data-project__image";

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.imageAlt || project.title;
    imageDiv.appendChild(img);

    const body = document.createElement("div");
    body.className = "data-project__body";

    const tag = document.createElement("span");
    tag.className = "data-project__tag";
    tag.textContent = project.tag;
    body.appendChild(tag);

    const heading = document.createElement("h2");
    heading.textContent = project.title;
    body.appendChild(heading);

    const description = document.createElement("p");
    description.textContent = project.description;
    body.appendChild(description);

    if (project.stack && project.stack.length) {
      const stackList = document.createElement("ul");
      stackList.className = "data-project__stack";
      project.stack.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item;
        stackList.appendChild(li);
      });
      body.appendChild(stackList);
    }

    const linksDiv = document.createElement("div");
    linksDiv.className = "data-project__links";

    const allLinks = (project.links || []).slice();

    // Only show a "View Reports" button when a reportUrl is actually
    // set for this project — otherwise there'd be nothing to link to.
    if (project.reportUrl) {
      allLinks.splice(1, 0, {
        label: "View Reports",
        icon: "fa-solid fa-file-text",
        href: project.reportUrl,
        external: false
      });
    }

    allLinks.forEach(function (link) {
      const a = document.createElement("a");
      a.href = link.href;
      a.className = "btn btn--small";
      if (link.external) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      a.innerHTML = '<i class="' + link.icon + '"></i> ' + link.label;
      linksDiv.appendChild(a);
    });

    body.appendChild(linksDiv);

    article.appendChild(imageDiv);
    article.appendChild(body);

    container.appendChild(article);

  });

})();
