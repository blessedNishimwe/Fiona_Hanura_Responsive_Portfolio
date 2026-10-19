# Fiona Hanura — Enterprise Innovation Portfolio

A responsive, accessible one-page portfolio tailored to demonstrate **ICT service delivery, business analysis, capacity building and practical digital innovation**. Designed for a UNICEF Innovation Officer (Level 2) application while remaining an independent professional website. It does not imply UNICEF affiliation.

## Design system

- Primary — **Atlantic Ink** `#142C35`
- Secondary — **Mineral Blue** `#2859B8`
- Neutral canvas — **Porcelain** `#F5F6F2`; white and grey are neutral surfaces/text colors, not additional brand accents.
- One-page, editorial layout with readable case studies, a native horizontal project carousel, mobile navigation, keyboard-accessible controls, reduced-motion support and no external CDN dependencies.
- Static HTML + CSS + JavaScript: **no Node, npm, framework, build step or hosting costs are needed**.

## Publish on GitHub Pages

1. Extract the ZIP; keep `index.html`, `styles.css`, `script.js` and the `assets` folder together.
2. Sign in at https://github.com and click **New repository**. Name it `portfolio` (or another name), set **Public**, create the repository.
3. Choose **Add file → Upload files**. Upload `index.html`, `styles.css`, `script.js`, `assets/favicon.svg` (and optionally `README.md`). Commit to the `main` branch. Don't upload your private working documents or CV unless you intentionally want them public.
4. Open **Settings → Pages → Build and deployment**. Set **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)**, then **Save**.
5. After GitHub Pages finishes deploying, the address will be `https://YOUR-USERNAME.github.io/portfolio/`. For the user/organization site at `https://YOUR-USERNAME.github.io/`, name the repository `YOUR-USERNAME.github.io` instead.
6. Test the site on mobile, check all project links and share the URL in the recruitment application **where links are accepted**.

**If using an existing repository:** upload the three files and `assets` to the published root of that repository, replacing old site files only after backing them up. If your Pages branch is `docs/`, upload into that folder instead and set Pages accordingly.

### Local preview

Double-click `index.html` in a browser. To test via a local server, run `python -m http.server 8000` in this directory, then open `http://localhost:8000/`.

## Before sharing with recruiters — verify

- **Professional name:** This version uses **Fiona Hanura**, consistent with the supplied LinkedIn URL and prior CV context. Change the name in `index.html`, metadata, footer and CV if you prefer Fiona Alphonce or a full legal name.
- **Dates:** Confirm the exact duration of the short engagements in February 2023 and February 2020. The supplied CV does not provide end dates for those entries.
- **Degree:** Add the actual university and graduation year in the ATS CV.
- **Languages:** Confirm English proficiency and local/UN languages in the application. Do not add unverified fluency levels.
- **Attendance app link:** `https://onsite-ln66.onrender.com/` returned HTTP 503 on one external check; it may be sleeping or unavailable. Confirm the deployment before advertising it as a live demo. The case study explicitly does not assert production rollout or measured adoption.
- **Public website:** The mentorship prototype is publicly accessible at `https://blessednishimwe.github.io/websiteLaunch/`.
- **Permissions and privacy:** Do not publish confidential Deloitte/health-system records, patient information, internal business data or private screenshots. Site case studies deliberately avoid such materials.
- **Metric hygiene:** Replace general descriptions with verified outcomes only where you can defend them in an interview.

## Customize

- Text and links: edit `index.html`.
- Colors and spacing: modify CSS custom properties at the top of `styles.css`.
- Project slider, scroll reveal, menu: `script.js`.
- Favicon: `assets/favicon.svg` (uses a readable FH monogram).

## Accessibility checklist

- Semantic section/headings and `<nav>` landmarks
- Skip link and visible keyboard focus
- Mobile-menu control with `aria-expanded`
- Native `<details>` panels and horizontal-scroll carousel (touch/keyboard/arrows)
- Contrast-conscious dark ink and blue accents; reduced-motion preference supported
- Relative local file paths compatible with GitHub project Pages

## ATS note

The website is a supplementary portfolio, not an ATS substitute. Upload `documents/Fiona_Hanura_UNICEF_Innovation_Officer_ATS.docx` or its PDF equivalent to UNICEF's official application system if the platform accepts those formats. Upload the dedicated CV separately; **do not upload the entire ZIP as a CV**. The CV avoids tables, text boxes, columns and graphical skills ratings for more reliable extraction.
