# Verification — 20 October 2026

## Implementation and browser checks

- Static HTML/CSS/vanilla JavaScript retained; seven sections and five primary case studies.
- Playwright with installed Google Chrome: **35 checks passed**.
- Layout widths tested: **320, 390, 768, 1024 and 1440 px**; no document horizontal overflow at these widths.
- Supplied portrait loads at every tested width, with intrinsic 960 × 1280 dimensions and a 3:4 presentation. Original image remains untouched.
- Carousel previous/next, ArrowRight, Home and End navigation verified; native horizontal scrolling updates the counter. Native scroll was tested programmatically; a physical touchscreen gesture was not tested.
- Details expansion, both focus orders, focus URL persistence and direct shared-focus loading verified.
- All four decision examples exercised.
- Mobile menu opening, anchor dismissal, Escape closing and focus restoration verified.
- Internal section targets and relative asset paths checked.
- Reduced-motion scroll behavior verified.
- JavaScript-disabled content, stacked case studies and 320 px overflow checked.
- No JavaScript page errors during the browser suite.
- Desktop and mobile hero screenshots, expanded case study and social preview visually reviewed. Local artifacts are in ignored `.qa/`.
- axe-core WCAG 2 A/AA and WCAG 2.1 AA automated audit: **zero violations** in the default view with reduced motion. A low-contrast timeline index was corrected before the passing audit. This is an automated audit, not a full manual accessibility certification.
- `node --check script.js` and `git diff --check` passed.
- Lighthouse scores were not measured.

## Professional content checklist

- Public name: Fiona Hanura; degree: BSc Computer Engineering, University of Dodoma.
- ICTPACK: **2020** per latest correction, no invented months. Earlier CV date conflict still requires reconciliation in the source CV.
- NPK: Business Analyst **Intern**, August–October 2018.
- Deloitte: May 2025–September 2026; Banny: 2023; Marie Stopes: 2022.
- Attendance system: developed, deployed and functionally tested; no organization-wide rollout claimed. Public demo could not initially be verified; no live-app button published.
- Enterprise implementation is described as team contribution; AI use is accurately described as assistance and illustrative assessment.
- No confidential health, inventory or personal records, fabricated metrics, badges, testimonials or employer endorsements included.

## Deployment

The intended repository and branch were verified as `blessedNishimwe/Fiona_Portfolio`, `main`. Git history preserves the original tracked website. Only relevant site files should be staged; the original untracked portrait remains untouched. See README for GitHub Pages setup and the final task report for push/deployment status.

## Public link checks

- Existing GitHub Pages address: HTTP 200 before deployment of this redesign.
- GitHub profile: HTTP 200.
- LinkedIn: HTTP 999 (automated access blocked); supplied URL retained, destination content not independently verified.
- Attendance demo: connection timed out; active demo button omitted.
- Unauthenticated Pages configuration API returned 404; this does not establish whether Pages is disabled because the existing public site responds successfully.
