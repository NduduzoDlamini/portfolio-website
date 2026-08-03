# Nduduzo Dlamini — Portfolio Site

A plain HTML/CSS/JS site — no build step, no npm install. Open the folder
in VS Code, edit, and refresh your browser to see changes.

## Files

```
portfolio-site/
├── index.html      ← all the page content + structure
├── css/style.css   ← colors, fonts, layout
├── js/script.js    ← mobile menu + scroll progress line
├── assets/         ← put your photo here as profile.jpg
└── README.md
```

## Getting it running

1. Open the `portfolio-site` folder in VS Code.
2. Install the **Live Server** extension (search it in the Extensions
   panel — puzzle-piece icon on the left sidebar).
3. Right-click `index.html` → **Open with Live Server**. It opens in your
   browser and auto-refreshes every time you save a file.

## Things to personalize first

- **Photo**: drop an image into `assets/` named `profile.jpg` (or edit
  the filename in `index.html`, search for `profile.jpg`).
- **Email**: in `index.html`, search for `you@example.com` and replace it
  with your real address.
- **Social links**: in `index.html`, search for `class="social-link"` —
  each `<a href="#">` should point at your real LinkedIn, Credly, GitHub
  and Tableau Public profile URLs.
- **Project links**: search for `class="btn btn--small"` — point each
  "View" button at a real project write-up, repo, or a page you build later.
- **Bio text**: edit the paragraph inside `<p class="hero__bio">`.
- **Certificate PDFs**: each card in the Certifications section links to a
  file in `assets/certificates/`. One real file is already in there
  (`ai-fundamentals-ibm-skillsbuild.pdf`) and wired up. Add your other
  certificates as PDFs to that same folder using the filenames already
  referenced in `index.html` (search for `assets/certificates/` to see
  the full list) — clicking a card opens the PDF in a new browser tab
  using the browser's built-in PDF viewer. The ISC² card has no link
  since that certification is still in progress; once you finish it,
  add the PDF and change its `<li>` block to match the others (copy an
  existing `<a class="credential" ...>` block as a template).
- **Badge images**: each certificate card also has a spot for its badge
  icon (e.g. the Cisco/Credly badge PNG) in `assets/badges/`. Add a PNG
  named to match the card's PDF slug — e.g. `ccna-level-1.png` next to
  `ccna-level-1.pdf`. If a badge image is missing, that card
  automatically falls back to a plain certificate icon, so nothing
  breaks while you're still collecting badge files. Most badge
  platforms (Credly, Accredible) let you right-click → "Save image" on
  your badge, or download it from your badge page directly.

## How the sections map to the design

- The thin glowing line on the left edge of the page fills in as you
  scroll — a nod to a network trace/ping, tying into your networking
  background.
- Each section's "hop 0X" label works the same way — they're just
  section markers, not literal network hops.
- Colors and fonts are all defined once at the top of `css/style.css`
  under `:root { ... }` — change a value there and it updates everywhere.

## Adding a new project card

Copy one `<article class="work-card">...</article>` block inside
`index.html`, change the icon class (any icon name from
[Font Awesome](https://fontawesome.com/search)), title, description and
link.

## Deploying it for free

Once you're happy with it locally:
- **GitHub Pages**: push this folder to a GitHub repo, then in
  Settings → Pages, set the source to your main branch. You'll get a
  free `yourname.github.io` URL.
- **Netlify / Vercel**: drag-and-drop the folder onto their dashboard
  for an instant live URL.
