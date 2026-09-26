// Single source of truth for each data-analytics project's title, tag,
// description, tech stack, and links. Both data-projects.html (the card
// grid) and each project's report page read from this file, so editing
// a project here updates it everywhere it appears — no more keeping the
// same title/description typed out in two places.
//
// To add a report for a project: set its `reportUrl` field. The card's
// "View Reports" button will only appear when this is set.

const dataProjects = [

  {
    id: "bike-sales",
    tag: "Public Dataset · Kaggle",
    title: "Consumer Purchase Behavior & Bike Sales Dashboard Analysis",
    description:
      "Grounded in a comprehensive customer demographics and behavioral data set, this project focuses on designing data-driven profiling models and analytical summaries to identify target purchasing segments. The analysis covers cleansing customer attributes, restructuring distance variables, categorizing age brackets into granular cohorts, and evaluating buying patterns across multiple metrics—such as average income thresholds, commute constraints, and age brackets—using advanced structural data indexing and conditional aggregation rules to unlock key commercial conversion indicators.",
    image: "assets/gallery/excel.webp",
    imageAlt: "Healthcare analytics dashboard",
    stack: [
      "Demographic Data Profiling",
      "Conditional Data Segmentation",
      "Statistical Cross-Tabulation",
      "Metrics Calibration"
    ],
	 reportUrl: "reports/report-bike-sales.html",
    links: [
      {
        label: "View Dataset",
        icon: "fa-solid fa-database",
        href: "https://docs.google.com/spreadsheets/d/1L_EN_LWFe01CcsoxV2HPV-CcQ8asojed/edit?usp=sharing&ouid=110078759032443403894&rtpof=true&sd=true",
        external: true
      },
      {
        label: "View Dashboard",
        icon: "fa-solid fa-chart-line",
        href: "https://1drv.ms/x/c/74aa4d2faad8bead/IQAX40vjZuWdQb5-YXZSvCewAWNHDac2q6_FHxBY3zbH28k?e=Qg2qxb",
        external: true
      }
    ]
  },

  {
    id: "business-intelligence",
    placeholder: true,
    tag: "Source · TBD",
    title: "Business Intelligence & Data Analytics",
    description:
      "Advanced relational database operations and diagnostic scripts transform raw transactional logs into actionable business insights. The analytical pipeline encompasses profiling data sets to isolate missing records, auditing platform anomalies, calculating station traffic metrics, and generating key user retention benchmarks—such as Month-over-Month (MoM) growth curves—using intricate SQL aggregations, window functions, and multi-table joins.",
    image: "assets/gallery/sql.webp",
    imageAlt: "Project 2 preview",
    stack: [
      "Transact-SQL (T-SQL)",
      "Common Table Expressions (CTEs)",
      "Window Functions (LAG)",
      "Data Profiling & Aggregations"
    ],
    reportUrl: "reports/report-business-intelligence.html",
    links: [
      {
        label: "View Dataset",
        icon: "fa-solid fa-database",
        href: "https://drive.google.com/drive/folders/1dd7-E48r85PpNKUq_KQlEu4Q6g_Z-5mP?usp=sharing",
        external: true
      },
      {
        label: "View code",
        icon: "fa-solid fa-code",
        href: "https://github.com/NduduzoDlamini/DataAnalysis-PortfolioProject/blob/main/SQL_EBIKE/SQL_EBIKE.sql",
        external: true
      }
    ]
  },

  {
    id: "project-3",
    placeholder: true,
    tag: "Source · TBD",
    title: "Project 3 Title",
    description:
      "Placeholder description — replace with a short summary of what the project analyzes, what you built, and one concrete finding or insight.",
    image: "assets/gallery/bi.webp",
    imageAlt: "Project 3 preview",
    stack: [
      "Tool 1",
      "Tool 2"
    ],
    links: [
      { label: "View Dataset", icon: "fa-solid fa-database", href: "#", external: true },
      { label: "View Dashboard", icon: "fa-solid fa-chart-line", href: "#", external: true }
    ]
  },

  {
    id: "sales-performance",
    tag: "Kaggle",
    title: "Business Intelligence & Sales Performance Analysis",
    description:
      "Commercial database logs and transactional records are processed to evaluate key performance indicators for business operations. The analysis tracks baseline metrics including overall revenue totals, average order values, and sales peaks categorized by product types and hours of the day. High-level relational scripts identify top-performing items and isolate high-volume time windows to optimize retail infrastructure placement.",
    image: "assets/gallery/excel.webp",
    imageAlt: "Healthcare analytics dashboard",
    stack: [
      "Transactional Data Profiling",
      "Time-Series Analysis Arrays",
      "Categorical Cross-Tabulation",
      "Performance Matrix Calibration"
    ],
    links: [
      {
        label: "View Dataset",
        icon: "fa-solid fa-database",
        href: "https://docs.google.com/spreadsheets/d/1FjBYtMvqbPdksa5ebeX0kzzi7KWOJRct/edit?usp=sharing&ouid=110078759032443403894&rtpof=true&sd=true",
        external: true
      },
      {
        label: "View Dashboard",
        icon: "fa-solid fa-chart-line",
        href: "https://1drv.ms/x/c/74aa4d2faad8bead/IQA2IuM0hZ4gSJyf--r6qSqXAZe2jWoVRBJOLMlukmVunqo?e=QkqhLi",
        external: true
      }
    ]
  }

];
