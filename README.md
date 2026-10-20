# Fiona Hanura — Enterprise Digital Portfolio

A one-page, static portfolio for business analysis, digital innovation and enterprise technology. Built with semantic HTML, CSS and vanilla JavaScript; no build step, backend, analytics, paid hosting or external runtime dependencies.

## Structure

- `index.html`: seven sections, five case studies, experience, education and contact links.
- `styles.css`: design tokens, responsive layouts, portrait, workflow illustrations and reduced-motion support.
- `script.js`: mobile navigation, carousel, focus ordering, illustrative AI decision framework and entrance reveals.
- `assets/favicon.svg`: original FH monogram.
- `assets/images/fiona-professional-portrait.webp`: supplied portrait, copied without alteration from the original asset.
- `assets/social-preview.png`: 1200 × 630 social preview.
- `robots.txt`, `sitemap.xml`, `.nojekyll`: GitHub Pages support.
- `VERIFICATION.md`: test results and content verification notes.
- `.qa/`: ignored local browser tooling, test scripts, results and screenshots; not deployed.

## Local preview

Run `python -m http.server 8000` in this directory, then open `http://localhost:8000/`. Opening `index.html` directly also works. No installation is needed for visitors or deployment.

## Content maintenance

Edit project and career text in `index.html`. Every case study has its own `project-*` ID and native expandable details. Change brand tokens at the top of `styles.css`. Focus descriptions and project order are in `focusViews` in `script.js`; they reorder the same underlying content.

Shareable focus views:

- `?focus=innovation`: ICT delivery, attendance development, asset reporting.
- `?focus=ai-adoption`: attendance requirements, Odoo/Moodle, asset data quality.

Without JavaScript, all case studies appear in a readable stack and the approach, details and navigation remain available. Interactive focus selection and AI examples require JavaScript; the decision illustration includes a text fallback.

## GitHub Pages

Repository: `blessedNishimwe/Fiona_Portfolio`. Branch: `main`. Publish the repository root using Settings → Pages → Build and deployment → Deploy from a branch → main → / (root).

Expected public address: https://blessednishimwe.github.io/Fiona_Portfolio/

Use relative paths for local assets and section anchors so hosting works under `/Fiona_Portfolio/`. Canonical, social-image and sitemap URLs intentionally use the full production address. Do not add a custom domain or copy private working documents into the published root.

## Professional content

The website follows the supplied master brief. ICTPACK uses 2020, without invented months; older CV versions have a conflicting date and should be reconciled before reuse. NPK is correctly described as an internship. The attendance system was developed, deployed and functionally tested, without an organization-wide rollout. Its live demo could not be verified, so no active demo link is advertised.

Project diagrams are illustrative and contain no operational records. Learning areas are not represented as certifications. No organizational adoption, savings, uptime, testimonials or employer endorsements have been invented.
