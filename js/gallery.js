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

    image: "assets/gallery/server.webp",

    images: [
      "assets/gallery/server.webp",
      "assets/gallery/server1.webp",
      "assets/gallery/server2.webp"
    ],

    alt: "Network server and access point setup",

    projectUrl:
      "index.html#networking-projects"
  },

  {
    title: "Routing and Switch Management via PuTTY",

    category: "networking",

    project: "Network Configuration",

    description:
      "This project focuses on configuring core routing protocols and managing network infrastructure devices through a secure command-line interface. Using PuTTY to establish serial or SSH connections, the project involves authenticating through User Access Verification, navigating administrative privilege levels, and executing commands to define static routes, configure interfaces, and ensure secure device administration.",

    type: "field",

    technologies: [
      "PuTTY",
      "Cisco IOS",
      "Routing Protocols",
      "AAA Authentication"
    ],

    date: "2026",

    source: "Professional field work",

    image: "assets/gallery/route.webp",

    alt: "Technical field support",

    projectUrl:
      "index.html#networking-projects"
  },

    {
    title: "Local Area Network Segmentation via PuTTY",

    category: "networking",

    project: "Managed Switch Layer 2 VLAN Configuration",

    description:
      "The configuration process involves mapping out logical subnets, assigning specific switch ports to their designated broadcast domains, and establishing virtual local area networks (VLANs) via the command-line interface to reduce network congestion and protect sensitive data.",

    type: "field",

    technologies: [
      "PuTTY",
      "Virtual LANs (802.1Q)",
      "Command Line Interface (CLI)"
    ],

    date: "2026",

    source: "Professional field work",

    image: "assets/gallery/vlan.webp",

    alt: "Technical field support",

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

    image: "assets/gallery/dashboard.webp",

    alt: "Data analytics dashboard",

    projectUrl:
      "data-projects.html"
  },

  

  /* =======================================================
     AI
     ======================================================= */

  {
    title: "Natural Language SQL Querying via MCP",

    category: "ai",

    project: "Claude Desktop + SQL Server Integration",

    description:
      "Built a working MCP (Model Context Protocol) integration connecting Claude Desktop to a local SQL Server Express instance, enabling natural language querying of relational databases without writing raw SQL.",

    type: "technical",

    technologies: [
      "Model Context Protocol (MCP)",
      "Claude Desktop",
      "SQL Server Express",
      "Python"
    ],

    date: "2026",

    source: "Personal project",

    image: "assets/gallery/ai.webp",

    video: "assets/gallery/mcp-demo.mp4",

    alt: "AI project",

    projectUrl:
      "index.html#work"
  },


  /* =======================================================
     DEVELOPMENT
     ======================================================= */

  {
    title: "Personal Portfolio Website",

    category: "development",

    project: "Full-Stack Portfolio Build",

    description:
      "Designed and built a personal portfolio website from scratch, including a dynamic, filterable gallery system with lightbox viewing, category filtering, and support for both image and video content.",

    type: "technical",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],

    date: "2026",

    source: "Personal project",

    image: "assets/gallery/web.webp",

    //video: "assets/gallery/hmis.mp4",

    alt: "Personal portfolio website",

    projectUrl:
      "https://github.com/NduduzoDlamini/portfolio-website"
  },

  {
    title: "Automated After-Hours Workstation Shutdown System",

    category: "development",

    project: "HMIS After-Hours Idle Shutdown & Reporting System",

    description:
      "An automated Windows workstation management solution that detects after-hours inactivity, provides users with a branded shutdown countdown, safely powers down idle computers, generates detailed system logs, and records shutdown/cancellation events for centralized reporting.",

    type: "technical",

    technologies: [
      "PowerShell",
      "Windows Task Scheduler",
      "Batch Scripting",
      "SMB",
      "CSV"
    ],

    date: "2026",

    source: "Personal project",

    image: "assets/gallery/hmis.webp",

    video: "assets/gallery/hmis.mp4",
    
    images: ["assets/gallery/hmis.webp",
      "assets/gallery/log.webp"

    ],


    alt: "Personal portfolio website",

    projectUrl:
      "https://github.com/NduduzoDlamini/Automated_After-Hours_Workstation_Shutdown_System"
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

    image: "assets/gallery/training.webp",

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

    image: "assets/gallery/ac.webp",

    images: [
      "assets/gallery/ac.webp",
      "assets/gallery/ac1.webp",
      "assets/gallery/ac2.webp"
      
    ],

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

    image: "assets/gallery/Install.webp",

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

    image: "assets/gallery/pear.webp",

    images: [
      "assets/gallery/pear.webp",
      "assets/gallery/pear1.webp",
      "assets/gallery/pear2.webp"
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

    image: "assets/gallery/box1.webp",

    images: [
      "assets/gallery/box1.webp",
      "assets/gallery/box.webp"
    ],

    alt: "Outdoor Wireless Infrastructure",

    projectUrl:
      "index.html#networking-projects"
  },

   {
    title: "Outdoor Wireless Network Extension",

    category: "field",

    project: "Mankayane Hospital Pharmacy Access Point Installation",

    description:
      " Outdoor network infrastructure installation at the Mankayane Hospital pharmacy building expands localized wireless coverage.The implementation leverages physical structural shelter to shield the enterprise network node from direct rain, extreme sunlight, and wind-driven moisture, delivering extended outdoor signal range without risking environmental equipment decay.",

    type: "field",

    technologies: [
      "Ubiquiti UniFi Access Point",
      "UniFi Controller",
      "Power over Ethernet",
      "WPA3 Security"
    ],

    date: "2026",

    source: "Professional field work",

    image: "assets/gallery/m1.webp",

    images: [
      "assets/gallery/m1.webp",
      "assets/gallery/m2.webp",
      "assets/gallery/m5.webp",
      "assets/gallery/m.webp",
      "assets/gallery/m3.webp"
      
    ],

    alt: "Technical field support",

    projectUrl:
      "index.html#networking-projects"
  },

  {
    title: "Rack relocation",

    category: "field",

    project: "Server Room Infrastructure Migration",

    description:
      "A physical infrastructure migration involving the relocation of an enterprise network rack to a new server room. The project required safely moving the enclosure and its core components—a rackmount server, router, and switch—while adhering to strict sterile environmental safety protocols.",

    type: "technical",

    technologies: [
      "Network Server",
      "Server Rack Enclosure",
      "Cisco router"
    ],

    date: "2026",

    source: "Professional field work",

    image: "assets/gallery/raq1.webp",

    images: [
      "assets/gallery/raq1.webp",
      "assets/gallery/raq.webp"
    ],

    alt: "Network server and access point setup",

    projectUrl:
      "index.html#networking-projects"
  },

   {
    title: "Network Infrastructure Deployment",

    category: "field",

    project: "Wall-Mount Network Cabinet Installation & Integration",

    description:
      "This project covers the physical installation and networking of a wall-mount equipment cabinet. It includes mounting the network enclosure, organizing structured patch cables, and integrating core hardware—including a MikroTik RouterBOARD ",

    type: "technical",

    technologies: [
      "MikroTik RouterBOARD",
      "Wall-Mount Network Cabinet",
      "Structured Cabling"
    ],

    date: "2026",

    source: "Professional field work",

    image: "assets/gallery/cab.webp",

    images: [
      "assets/gallery/cab.webp",
      "assets/gallery/cab1.webp",
      "assets/gallery/cab.webp",
      "assets/gallery/cab3.webp"
    ],

    alt: "Network server and access point setup",

    projectUrl:
      "index.html#networking-projects"
  },

   {
    title: "Network Maintenance & Optimization",

    category: "field",

    project: "Live Network Infrastructure Troubleshooting and Testing",

    description:
      "This project focuses on diagnostic testing and real-time troubleshooting of an overhead network node. It involves establishing a direct Ethernet connection to analyze live packet traffic, verify interface statuses, and identify connectivity bottlenecks to ensure maximum network uptime.",

    type: "field",

    technologies: [
      "Ethernet CAT6",
      "RJ45 Connectors",
      "Wire Stripper & Cutters"
    ],

    date: "2026",

    source: "Professional field work",

    image: "assets/gallery/crimp.webp",

    alt: "Technical field support",

    projectUrl:
      "index.html#networking-projects"
  },

   {
    title: "Healthcare Field IT Infrastructure Rollout",

    category: "field",

    project: "NERCHA Point-of-Care Workstation Deployment",

    description:
      "Field IT logistics drive the rollout of localized desktop computer workstations to active healthcare facilities for the National Emergency Response Council on HIV/AIDS (NERCHA). The process spans hardware assembly, secure cable routing, and device integration within clinical spaces to expand electronic medical system access.",

    type: "field",

    technologies: [
      "EHR Data Node Setup",
      "Field IT Logistics",
      "Peripheral Integration",
      "All-in-One / Desktop Workstations"
    ],

    date: "2026",

    source: "Professional field work",

    image: "assets/gallery/Deploy.webp",
    images: [
      "assets/gallery/Deploy.webp",
      "assets/gallery/Deploy2.webp"
    ],

    alt: "Technical field support",

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

    image: "assets/gallery/Farsar.webp",

    alt: "FARSAR data reporting support",

    projectUrl:
      "index.html#work"
  },

  /* =======================================================
     QALIFICATIONS
     ======================================================= */

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

    image: "assets/gallery/Grad.webp",

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

const lightboxVideo =
  document.getElementById("lightboxVideo");

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

const lightboxProjectLinkIcon =
  document.getElementById("lightboxProjectLinkIcon");

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

const lightboxFullscreenBtn =
  document.getElementById("lightboxFullscreenBtn");

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
     IMAGE OR VIDEO PREVIEW
  ------------------------------------------------------- */

  let image;

  if (item.video) {

    image =
      document.createElement("video");

    image.src =
      item.video;

    if (item.image) {

      image.poster =
        item.image;

    }

    image.muted = true;

    image.loop = true;

    image.playsInline = true;

    image.preload = "metadata";

    const playBadge =
      document.createElement("span");

    playBadge.className =
      "gallery-card__play-badge";

    playBadge.innerHTML =
      `<i class="fa-solid fa-play"></i>`;

    article.appendChild(playBadge);

  } else {

    image =
      document.createElement("img");

    image.src =
      item.image;

    image.alt =
      item.alt || item.title;

    image.loading =
      "lazy";

    image.decoding =
      "async";

    image.fetchPriority =
      "low";

    image.addEventListener("error", () => {
      image.classList.add("image-load-error");
      image.alt = `${item.title} image could not be loaded`;
    });

  }


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

    development:
      "DEVELOPMENT",

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

    development:
      "Development",

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
    "development",
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
     IMAGE OR VIDEO
  ------------------------------------------------------- */

  if (lightboxVideo) {

    lightboxVideo.pause();

    lightboxVideo.removeAttribute("src");

    lightboxVideo.load();

  }

  if (item.video) {

    lightboxImage.style.display = "none";

    if (lightboxFullscreenBtn) {
      lightboxFullscreenBtn.classList.remove("is-visible");
    }

    if (lightboxVideo) {

      lightboxVideo.style.display = "block";

      lightboxVideo.src = item.video;

      if (item.image) {

        lightboxVideo.poster = item.image;

      }

      const playPromise =
        lightboxVideo.play();

      if (playPromise) {

        playPromise.catch(() => {

          lightboxVideo.muted = true;

          lightboxVideo.play().catch(() => {});

        });

      }

    }

  } else {

    lightboxImage.style.display = "";

    if (lightboxFullscreenBtn) {
      lightboxFullscreenBtn.classList.add("is-visible");
    }

    if (lightboxVideo) {

      lightboxVideo.style.display = "none";

    }

    lightboxImage.src =
      item.image;

    lightboxImage.alt =
      item.alt || item.title;

    lightboxImage.loading =
      "eager";

    lightboxImage.decoding =
      "async";

    lightboxImage.fetchPriority =
      "high";

  }


  /* -------------------------------------------------------
     THUMBNAILS (multi-image items only)
  ------------------------------------------------------- */

  if (lightboxThumbs) {

    lightboxThumbs.innerHTML = "";

    if (item.images && item.images.length > 1) {

      item.images.forEach((imageSrc, imageIndex) => {

        // When the item has a video, treat the first thumbnail as
        // "watch the video" rather than a redundant static photo —
        // its src is usually just the video's own poster image.
        const isVideoThumb =
          Boolean(item.video) && imageIndex === 0;

        const thumbButton =
          document.createElement("button");

        thumbButton.type = "button";

        thumbButton.className =
          imageIndex === 0 ? "active" : "";

        thumbButton.setAttribute(
          "aria-label",
          isVideoThumb
            ? "Watch video"
            : `View photo ${imageIndex + 1} of ${item.images.length}`
        );

        const thumbImage =
          document.createElement("img");

        thumbImage.src = imageSrc;

        thumbImage.alt = "";

        thumbImage.loading =
          "lazy";

        thumbImage.decoding =
          "async";

        thumbButton.appendChild(thumbImage);

        thumbButton.addEventListener("click", () => {

          if (isVideoThumb && lightboxVideo) {

            // Switch back to the video.
            lightboxImage.style.display = "none";
            lightboxVideo.style.display = "block";

            if (lightboxFullscreenBtn) {
              lightboxFullscreenBtn.classList.remove("is-visible");
            }

            lightboxVideo.src = item.video;
            lightboxVideo.currentTime = 0;

            const playPromise = lightboxVideo.play();
            if (playPromise) {
              playPromise.catch(() => {
                lightboxVideo.muted = true;
                lightboxVideo.play().catch(() => {});
              });
            }

          } else {

            // Switch to a static photo.
            if (lightboxVideo) {
              lightboxVideo.pause();
              lightboxVideo.style.display = "none";
            }

            if (lightboxFullscreenBtn) {
              lightboxFullscreenBtn.classList.add("is-visible");
            }

            lightboxImage.style.display = "";
            lightboxImage.src = imageSrc;
            lightboxImage.alt = item.alt || item.title;

          }

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
    (item.category === "data" || item.category === "qualifications" || item.category === "development") &&
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

      let linkText = "View Project";

      if (item.category === "qualifications") {
        linkText = "View Qualifications";
      } else if (item.category === "development") {
        linkText = "View on GitHub";
      }

      lightboxProjectLinkText.textContent =
        linkText;

      if (lightboxProjectLinkIcon) {
        lightboxProjectLinkIcon.className =
          item.category === "development"
            ? "fa-brands fa-github"
            : "fa-solid fa-arrow-right";
      }

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

  if (lightboxVideo) {

    lightboxVideo.pause();

  }

  const isFullscreen =
    document.fullscreenElement ||
    document.webkitFullscreenElement;

  if (isFullscreen) {

    const exitFullscreen =
      document.exitFullscreen ||
      document.webkitExitFullscreen;

    if (exitFullscreen) {
      const result = exitFullscreen.call(document);
      if (result && typeof result.catch === "function") {
        result.catch(() => {});
      }
    }

  }

  lightbox.classList.remove(
    "active"
  );

  lightbox.classList.remove(
    "is-photo-fullscreen"
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


if (lightboxFullscreenBtn && lightbox) {

  const updateFullscreenUI = (isPhotoFullscreen) => {

    const icon =
      lightboxFullscreenBtn.querySelector("i");

    if (icon) {
      icon.className =
        isPhotoFullscreen ? "fa-solid fa-compress" : "fa-solid fa-expand";
    }

    lightboxFullscreenBtn.setAttribute(
      "aria-label",
      isPhotoFullscreen ? "Exit full screen" : "View full picture"
    );

  };

  lightboxFullscreenBtn.addEventListener("click", () => {

    const enteringPhotoFullscreen =
      !lightbox.classList.contains("is-photo-fullscreen");

    lightbox.classList.toggle(
      "is-photo-fullscreen",
      enteringPhotoFullscreen
    );

    updateFullscreenUI(enteringPhotoFullscreen);

    // Best-effort real OS-level fullscreen on top of the layout
    // change above — the layout itself no longer depends on this
    // succeeding, since some mobile browsers don't reliably support
    // fullscreening a plain element (only <video> in some cases).
    if (enteringPhotoFullscreen) {

      const requestFullscreen =
        lightbox.requestFullscreen ||
        lightbox.webkitRequestFullscreen ||
        lightbox.msRequestFullscreen;

      if (requestFullscreen) {
        const result = requestFullscreen.call(lightbox);
        if (result && typeof result.catch === "function") {
          result.catch(() => {});
        }
      }

    } else {

      const isNativeFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement;

      if (isNativeFullscreen) {

        const exitFullscreen =
          document.exitFullscreen ||
          document.webkitExitFullscreen;

        if (exitFullscreen) {
          const result = exitFullscreen.call(document);
          if (result && typeof result.catch === "function") {
            result.catch(() => {});
          }
        }

      }

    }

  });

  // Keep things in sync if the user exits native fullscreen another
  // way (pressing Esc, swiping down, etc.) on browsers where the
  // native API did engage.
  const handleNativeFullscreenChange = () => {

    const isNativeFullscreen =
      document.fullscreenElement ||
      document.webkitFullscreenElement;

    if (!isNativeFullscreen && lightbox.classList.contains("is-photo-fullscreen")) {
      lightbox.classList.remove("is-photo-fullscreen");
      updateFullscreenUI(false);
    }

  };

  document.addEventListener("fullscreenchange", handleNativeFullscreenChange);
  document.addEventListener("webkitfullscreenchange", handleNativeFullscreenChange);

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
  "development",
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
