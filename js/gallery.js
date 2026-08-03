/* =========================================================
   PORTFOLIO GALLERY
   Option B — Gallery data managed in JavaScript
   ========================================================= */


/* =========================================================
   GALLERY DATA
   =========================================================
   
   To add a new gallery item:
   1. Copy one of the objects below.
   2. Change the information.
   3. Add the correct image path.
   
   Categories:
   networking
   data
   ai
   field
   events
========================================================= */

const galleryItems = [

  /* =======================================================
     NETWORKING
  ======================================================= */

  {
    title: "Enterprise Linux Infrastructure: HPE ProLiant Server Deployment",

    category: "networking",

    project: "Server setup",

    description:
      " Utilized standard Linux CLI utilities to establish early-stage configurations, networking protocols, security baselines, and package management setups.",

    type: "technical",

    technologies: [
      "Storage Architecture",
      " HPE ProLiant DL380 Hardware",
      "Ubuntu Server OS",
      "Linux CLI"
    ],

    date: "2026",

    source: "Professional field work",

    image: "assets/gallery/server.jpeg",

    images: [
      "assets/gallery/server.jpeg",
      "assets/gallery/server1.jpeg"
    ],

    alt: "Network server and access point setup",

    projectUrl:
      "index.html#networking-projects"
  },


  /* =======================================================
     DATA ANALYTICS
     =======================================================
     
     IMPORTANT:
     Use only public datasets for portfolio projects.
     
     Replace the example Kaggle information with the
     actual dataset used for each project.
  ======================================================= */

  {
    title: "Healthcare Analytics Dashboard",

    category: "data",

    project: "Healthcare Analytics Dashboard",

    description:
      "An analytics dashboard developed using a publicly available dataset. The project demonstrates data cleaning, SQL/Python analysis, visualization and dashboard development without exposing confidential workplace data.",

    type: "data",

    technologies: [
      "SQL",
      "Python",
      "Pandas",
      "Tableau"
    ],

    date: "2026",

    source: "Kaggle — Public Dataset",

    dataSourceUrl:
      "https://www.kaggle.com/",

    image: "assets/gallery/dashboard.png",

    alt: "Data analytics dashboard",

    projectUrl:
      "data-projects.html"
  },


  /* =======================================================
     AI
     ======================================================= */

  {
    title: "AI Project",

    category: "ai",

    project: "AI Portfolio Project",

    description:
      "AI project demonstrating practical application of artificial intelligence concepts.",

    type: "technical",

    technologies: [
      "Artificial Intelligence"
    ],

    date: "2026",

    source: "Public dataset / personal project",

    image: "assets/gallery/ai.jpg",

    alt: "AI project",

    projectUrl:
      "index.html#work"
  },


  /* =======================================================
     EVENTS
     ======================================================= */

  {
    title: "Healthcare System Training",

    category: "events",

    project: "Healthcare System Support",

    description:
      "Healthcare system training and technical support activity conducted during field work, at Manzini Gov.",

    type: "field",

    technologies: [
      "System Support",
      "User Training",
      "Technical Support"
    ],

    date: "2026",

    source: "Professional field work",

    image: "assets/gallery/training.jpg",

    alt: "Healthcare system training",

    projectUrl:
      "index.html#work"
  },

   /* =======================================================
     FIELD WORK
     ======================================================= */

  {
    title: "UniFi U6 Deployment",

    category: "field",

    project: "Access point installation",

    description:
      "A production-ready deployment of Ubiquiti UniFi U6 Access Points to modernize wireless infrastructure. This project features centralized network management, secure multi-SSID broadcasting and reliable Wi-Fi 6 coverage.",

    type: "field",

    technologies: [
      "Unifi access point u6",
      "UniFi Controller",
      "Power over Ethernet",
      "WPA3 Security"
    ],

    date: "2026",

    source: "Professional field work",

    image: "assets/gallery/AP.jpg",

    alt: "Technical field support",

    projectUrl:
      "index.html#networking-projects"
  },

  {
    title: "Network Connectivity & Infrastructure Upgrades",

    category: "field",

    project: "Access point & Ethernet installation",

    description:
      "Accessed the ceiling crawl space to route the necessary network cabling for a new wireless access point installation. Managed the cable runs safely, prepared the connection point, and completed the infrastructure setup to expand wireless coverage on-site.",

    type: "field",

    technologies: [
      "Ethernet CAT6",
      "Cable tester",
      "Crimping tools"
    ],

    date: "2026",

    source: "Professional field work",

    image: "assets/gallery/Install.jpg",

    alt: "Technical field support",

    projectUrl:
      "index.html#networking-projects"
  },

  {
    title: "Enterprise Point-to-Point (P2P) Bridge Deployment",

    category: "field",

    project: "Outdoor Wireless Infrastructure",

    description:
      " This project involved the physical deployment, alignment, and configuration of an outdoor high-throughput wireless network. Using Ubiquiti airMAX NanoStation hardware, I established a dedicated Point-to-Point (P2P) wireless bridge to extend high-speed enterprise network connectivity between separate physical facilities without the overhead of trenching fiber.",

    type: "technical",

    technologies: [
      "Ubiquiti airMAX NanoStation",
      "Ubiquiti airOS",
      "PoE (Power over Ethernet)",
      "Signal Strength Alignment"
    ],

    date: "2026",

    source: "Professional field work",

    image: "assets/gallery/pear.jpeg",

    images: [
      "assets/gallery/pear.jpeg",
      "assets/gallery/pear1.jpeg",
      "assets/gallery/pear2.jpeg"
    ],

    alt: "Outdoor Wireless Infrastructure",

    projectUrl:
      "index.html#networking-projects"
  },

  {
    title: "Physical Layer Network Deployment",

    category: "field",

    project: "Structured Cabling Infrastructure",

    description:
      " Installed, routed, and terminated structured Cat6 cabling to establish high-speed LAN endpoints. Utilized professional network tools to punch down an enterprise-grade Redstrut RJ45 surface-mount box, delivering reliable physical wall drops.",

    type: "technical",

    technologies: [
      "Cat6 Ethernet Wiring",
      "Hardware Termination",
      " Impact Punch-Down Tooling"
    ],

    date: "2026",

    source: "Professional field work",

    image: "assets/gallery/box1.jpeg",

    images: [
      "assets/gallery/box1.jpeg",
      "assets/gallery/box.jpeg"
    ],

    alt: "Outdoor Wireless Infrastructure",

    projectUrl:
      "index.html#networking-projects"
  },

  /* =======================================================
     EVENTS
     ======================================================= */

  {
    title: "FARSAR Support",

    category: "events",

    project: "FARSAR Data Reporting Support",

    description:
      "Supporting FARSAR during their quarterly data reporting activities.",

    type: "professional",

    technologies: [
      "Data Reporting",
      "Data Support"
    ],

    date: "2026",

    source: "Professional activity",

    image: "assets/gallery/Farsar.jpg",

    alt: "FARSAR data reporting support",

    projectUrl:
      "index.html#work"
  },


  {
    title: "Honours Degree Milestone",

    category: "qualifications",

    project: "Durban University of Technology",

    description:
      "Graduation milestone following completion of the Bachelor of Information and Communication Technology (Honours).",

    type: "milestone",

    technologies: [
      "Bachelor of Information and Communication Technology (Honours)"
    ],

    date: "2022",

    source: "Personal milestone",

    image: "assets/gallery/Grad.jpg",

    alt: "Graduation milestone",

    projectUrl:
      "index.html#qualifications"
  }

];


/* =========================================================
   ELEMENTS
========================================================= */

const galleryGrid =
  document.getElementById("galleryGrid");

const filterButtons = [
  ...document.querySelectorAll(
    ".gallery-filter button"
  )
];

const lightbox =
  document.getElementById("lightbox");

const lightboxImage =
  document.getElementById("lightboxImage");

const lightboxTitle =
  document.getElementById("lightboxTitle");

const lightboxDescription =
  document.getElementById("lightboxDescription");

const lightboxProject =
  document.getElementById("lightboxProject");

const lightboxProjectLabel =
  document.getElementById("lightboxProjectLabel");

const lightboxProjectLinkText =
  document.getElementById("lightboxProjectLinkText");

const lightboxSource =
  document.getElementById("lightboxSource");

const lightboxTechnologies =
  document.getElementById("lightboxTechnologies");

const lightboxTechnologiesLabel =
  document.getElementById("lightboxTechnologiesLabel");

const lightboxCategory =
  document.getElementById("lightboxCategory");

const lightboxProjectLink =
  document.getElementById("lightboxProjectLink");

const lightboxThumbs =
  document.getElementById("lightboxThumbs");

const closeButton =
  document.getElementById("lightboxClose");

const previousButton =
  document.getElementById("lightboxPrev");

const nextButton =
  document.getElementById("lightboxNext");


/* =========================================================
   STATE
========================================================= */

let currentIndex = 0;

let visibleItems = [];


/* =========================================================
   CREATE GALLERY CARD
========================================================= */

function createGalleryCard(item) {

  const article =
    document.createElement("article");

  article.className =
    `gallery-card ${item.category}`;

  article.setAttribute(
    "tabindex",
    "0"
  );

  article.setAttribute(
    "role",
    "button"
  );

  article.setAttribute(
    "aria-label",
    `View ${item.title}`
  );


  /* -------------------------------------------------------
     STACK LAYERS (multi-image items only)
  ------------------------------------------------------- */

  if (item.images && item.images.length > 1) {

    article.classList.add(
      "gallery-card--stack"
    );

    const stackLayers =
      document.createElement("div");

    stackLayers.className =
      "gallery-card__stack-layers";

    stackLayers.setAttribute(
      "aria-hidden",
      "true"
    );

    stackLayers.innerHTML =
      `<span class="stack-layer stack-layer--3"></span><span class="stack-layer stack-layer--2"></span>`;

    article.appendChild(stackLayers);

  }


  /* -------------------------------------------------------
     IMAGE
  ------------------------------------------------------- */

  const image =
    document.createElement("img");

  image.src =
    item.image;

  image.alt =
    item.alt || item.title;

  image.loading =
    "lazy";


  /* -------------------------------------------------------
     PHOTO COUNT BADGE (multi-image items only)
  ------------------------------------------------------- */

  if (item.images && item.images.length > 1) {

    const countBadge =
      document.createElement("span");

    countBadge.className =
      "gallery-card__count";

    countBadge.innerHTML =
      `<i class="fa-solid fa-images"></i> ${item.images.length}`;

    article.appendChild(countBadge);

  }


  /* -------------------------------------------------------
     OVERLAY
  ------------------------------------------------------- */

  const overlay =
    document.createElement("div");

  overlay.className =
    "gallery-overlay";


  /* Title */

  const title =
    document.createElement("h3");

  title.textContent =
    item.title;


  /* Project */

  const project =
    document.createElement("p");

  project.textContent =
    item.project;


  /* View */

  const view =
    document.createElement("span");

  view.className =
    "gallery-view";

  view.innerHTML =
    `
      <i class="fa-solid fa-expand"></i>
      View Details
    `;


  /* -------------------------------------------------------
     BUILD CARD
  ------------------------------------------------------- */

  overlay.appendChild(title);

  overlay.appendChild(project);

  overlay.appendChild(view);


  article.appendChild(image);

  article.appendChild(overlay);


  /* -------------------------------------------------------
     EVENTS
  ------------------------------------------------------- */

  article.addEventListener(
    "click",
    () => {

      openLightbox(item);

    }
  );


  article.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        openLightbox(item);

      }

    }
  );


  return article;

}


/* =========================================================
   FORMAT CATEGORY
========================================================= */

function formatCategory(category) {

  const names = {

    networking:
      "NETWORKING",

    data:
      "DATA ANALYTICS",

    ai:
      "AI",

    field:
      "FIELD WORK",

    events:
      "EVENTS",

    qualifications:
      "QUALIFICATIONS"

  };


  return (
    names[category] ||
    category.toUpperCase()
  );

}


/* =========================================================
   GROUP LABEL
========================================================= */

function groupLabel(category) {

  const names = {

    networking:
      "Networking",

    data:
      "Data Analytics",

    ai:
      "AI",

    field:
      "Field Work",

    events:
      "Events",

    qualifications:
      "Qualifications"

  };


  return (
    names[category] ||
    category
  );

}


/* =========================================================
   RENDER GALLERY
========================================================= */

function renderGallery(category = "all") {

  galleryGrid.innerHTML = "";

  visibleItems = [];


  const categoryOrder = [
    "networking",
    "data",
    "ai",
    "field",
    "events",
    "qualifications"
  ];


  if (category === "all") {

    categoryOrder.forEach(cat => {

      const itemsInCategory =
        galleryItems.filter(
          item => item.category === cat
        );

      if (itemsInCategory.length === 0) {

        return;

      }


      const group =
        document.createElement("div");

      group.className =
        "gallery-group";


      const heading =
        document.createElement("h3");

      heading.className =
        "gallery-group__title";

      heading.textContent =
        groupLabel(cat);

      group.appendChild(heading);


      const count =
        document.createElement("p");

      count.className =
        "gallery-group__count";

      count.textContent =
        itemsInCategory.length === 1
          ? "1 item"
          : `${itemsInCategory.length} items`;

      group.appendChild(count);


      const groupGrid =
        document.createElement("div");

      groupGrid.className =
        "gallery-group-grid";

      itemsInCategory.forEach(item => {

        visibleItems.push(item);

        const card =
          createGalleryCard(item);

        groupGrid.appendChild(card);

      });

      group.appendChild(groupGrid);


      galleryGrid.appendChild(group);

    });

  } else {

    const groupGrid =
      document.createElement("div");

    groupGrid.className =
      "gallery-group-grid";

    galleryItems.forEach(item => {

      if (item.category === category) {

        visibleItems.push(item);

        const card =
          createGalleryCard(item);

        groupGrid.appendChild(card);

      }

    });

    galleryGrid.appendChild(groupGrid);

  }


  updateActiveFilter(category);

}


/* =========================================================
   UPDATE ACTIVE FILTER
========================================================= */

function updateActiveFilter(category) {

  filterButtons.forEach(button => {

    button.classList.toggle(
      "active",
      button.dataset.filter === category
    );

  });

}


/* =========================================================
   FILTER BUTTONS
========================================================= */

filterButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const category =
        button.dataset.filter;

      renderGallery(category);

      updateURL(category);

    }
  );

});


/* =========================================================
   URL CATEGORY
========================================================= */

function getURLCategory() {

  const params =
    new URLSearchParams(
      window.location.search
    );

  return (
    params.get("category") ||
    "all"
  );

}


/* =========================================================
   UPDATE URL
========================================================= */

function updateURL(category) {

  const url =
    new URL(window.location);


  if (category === "all") {

    url.searchParams.delete(
      "category"
    );

  } else {

    url.searchParams.set(
      "category",
      category
    );

  }


  window.history.replaceState(
    {},
    "",
    url
  );

}


/* =========================================================
   OPEN LIGHTBOX
========================================================= */

function openLightbox(item) {

  currentIndex =
    visibleItems.indexOf(item);


  if (currentIndex < 0) {

    currentIndex = 0;

  }


  showLightboxItem(
    currentIndex
  );


  lightbox.classList.add(
    "active"
  );


  lightbox.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";

}


/* =========================================================
   SHOW LIGHTBOX ITEM
========================================================= */

function showLightboxItem(index) {

  if (!visibleItems.length) {

    return;

  }


  if (index < 0) {

    index =
      visibleItems.length - 1;

  }


  if (
    index >=
    visibleItems.length
  ) {

    index = 0;

  }


  currentIndex = index;


  const item =
    visibleItems[currentIndex];


  /* -------------------------------------------------------
     IMAGE
  ------------------------------------------------------- */

  lightboxImage.src =
    item.image;

  lightboxImage.alt =
    item.alt || item.title;


  /* -------------------------------------------------------
     THUMBNAILS (multi-image items only)
  ------------------------------------------------------- */

  if (lightboxThumbs) {

    lightboxThumbs.innerHTML = "";

    if (item.images && item.images.length > 1) {

      item.images.forEach((imageSrc, imageIndex) => {

        const thumbButton =
          document.createElement("button");

        thumbButton.type = "button";

        thumbButton.className =
          imageIndex === 0 ? "active" : "";

        thumbButton.setAttribute(
          "aria-label",
          `View photo ${imageIndex + 1} of ${item.images.length}`
        );

        const thumbImage =
          document.createElement("img");

        thumbImage.src = imageSrc;

        thumbImage.alt = "";

        thumbButton.appendChild(thumbImage);

        thumbButton.addEventListener("click", () => {

          lightboxImage.src = imageSrc;

          lightboxThumbs
            .querySelectorAll("button")
            .forEach(button =>
              button.classList.remove("active")
            );

          thumbButton.classList.add("active");

        });

        lightboxThumbs.appendChild(thumbButton);

      });

    }

  }


  /* -------------------------------------------------------
     TITLE
  ------------------------------------------------------- */

  lightboxTitle.textContent =
    item.title;


  /* -------------------------------------------------------
     DESCRIPTION
  ------------------------------------------------------- */

  lightboxDescription.textContent =
    item.description || "";


  /* -------------------------------------------------------
     CATEGORY
  ------------------------------------------------------- */

  lightboxCategory.textContent =
    formatCategory(
      item.category
    );


  /* -------------------------------------------------------
     PROJECT
  ------------------------------------------------------- */

  lightboxProject.textContent =
    item.project ||
    "Portfolio Project";

  if (lightboxProjectLabel) {

    lightboxProjectLabel.textContent =
      item.category === "qualifications"
        ? "University"
        : "Project";

  }


  /* -------------------------------------------------------
     SOURCE
  ------------------------------------------------------- */

  lightboxSource.textContent =
    item.source ||
    "Not specified";


  /* -------------------------------------------------------
     TECHNOLOGIES
  ------------------------------------------------------- */

  if (lightboxTechnologies) {

    lightboxTechnologies.textContent =
      item.technologies && item.technologies.length
        ? item.technologies.join(" • ")
        : "Not specified";

  }

  if (lightboxTechnologiesLabel) {

    lightboxTechnologiesLabel.textContent =
      item.category === "qualifications"
        ? "Qualification name"
        : "Technology";

  }


  /* -------------------------------------------------------
     DATA SOURCE LINK
  ------------------------------------------------------- */

  const existingSourceLink =
    document.getElementById(
      "lightboxSourceLink"
    );


  if (
    item.dataSourceUrl
  ) {

    if (existingSourceLink) {

      existingSourceLink.href =
        item.dataSourceUrl;

      existingSourceLink.style.display =
        "inline";

    }

  } else {

    if (existingSourceLink) {

      existingSourceLink.style.display =
        "none";

    }

  }


  /* -------------------------------------------------------
     PROJECT LINK
  ------------------------------------------------------- */

  if (
    (item.category === "data" || item.category === "qualifications") &&
    item.projectUrl
  ) {

    lightboxProjectLink.href =
      item.projectUrl;

    if (item.projectUrl.startsWith("http")) {

      lightboxProjectLink.target = "_blank";
      lightboxProjectLink.rel = "noopener noreferrer";

    } else {

      lightboxProjectLink.removeAttribute("target");
      lightboxProjectLink.removeAttribute("rel");

    }  

    lightboxProjectLink.style.display =
      "inline-flex";

    if (lightboxProjectLinkText) {

      lightboxProjectLinkText.textContent =
        item.category === "qualifications"
          ? "View Qualifications"
          : "View Project";

    }

  } else {

    lightboxProjectLink.style.display =
      "none";

  }

}


/* =========================================================
   CLOSE LIGHTBOX
========================================================= */

function closeLightbox() {

  lightbox.classList.remove(
    "active"
  );


  lightbox.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow =
    "";

}


/* =========================================================
   NEXT
========================================================= */

function showNext() {

  if (!visibleItems.length) {

    return;

  }


  currentIndex++;


  if (
    currentIndex >=
    visibleItems.length
  ) {

    currentIndex = 0;

  }


  showLightboxItem(
    currentIndex
  );

}


/* =========================================================
   PREVIOUS
========================================================= */

function showPrevious() {

  if (!visibleItems.length) {

    return;

  }


  currentIndex--;


  if (currentIndex < 0) {

    currentIndex =
      visibleItems.length - 1;

  }


  showLightboxItem(
    currentIndex
  );

}


/* =========================================================
   BUTTON EVENTS
========================================================= */

if (closeButton) {

  closeButton.addEventListener(
    "click",
    closeLightbox
  );

}


if (nextButton) {

  nextButton.addEventListener(
    "click",
    showNext
  );

}


if (previousButton) {

  previousButton.addEventListener(
    "click",
    showPrevious
  );

}


/* =========================================================
   CLICK OUTSIDE LIGHTBOX
========================================================= */

if (lightbox) {

  lightbox.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        lightbox
      ) {

        closeLightbox();

      }

    }
  );

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      !lightbox ||
      !lightbox.classList.contains(
        "active"
      )
    ) {

      return;

    }


    switch (event.key) {

      case "Escape":

        closeLightbox();

        break;


      case "ArrowRight":

        showNext();

        break;


      case "ArrowLeft":

        showPrevious();

        break;

    }

  }
);


/* =========================================================
   INITIALISE GALLERY
========================================================= */

const validCategories = [
  "all",
  "networking",
  "data",
  "ai",
  "field",
  "events",
  "qualifications"
];


const initialCategory =
  getURLCategory();


if (
  validCategories.includes(
    initialCategory
  )
) {

  renderGallery(
    initialCategory
  );

} else {

  renderGallery(
    "all"
  );

}