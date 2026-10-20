'use strict';
document.documentElement.classList.add('js');

// Navigation: keyboard dismissal and focus return for the mobile drawer.
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const header = document.querySelector('.site-header');
function updateMenu(open, restoreFocus = false) {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.classList.toggle('is-open', open);
  mobileNav.inert = !open;
  document.body.classList.toggle('menu-open', open);
  if (restoreFocus) menuToggle.focus();
}
menuToggle.addEventListener('click', () => updateMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => updateMenu(false)));
document.addEventListener('keydown', event => {
  if (menuToggle.getAttribute('aria-expanded') !== 'true') return;
  if (event.key === 'Escape') updateMenu(false, true);
  if (event.key === 'Tab') {
    const last = mobileNav.querySelector('a:last-child');
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); menuToggle.focus(); }
    if (event.shiftKey && document.activeElement === menuToggle) { event.preventDefault(); last.focus(); }
  }
});
document.addEventListener('click', event => { if (!header.contains(event.target)) updateMenu(false); });
window.matchMedia('(min-width: 801px)').addEventListener('change', event => { if (event.matches) updateMenu(false); });

// Native scrolling supplies touch swipes. Controls and keyboard share one state.
const track = document.getElementById('projectTrack');
const counter = document.getElementById('slideCounter');
const line = document.getElementById('carouselProgress');
const prev = document.getElementById('previousProject');
const next = document.getElementById('nextProject');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let cards = Array.from(track.children);
let currentSlide = 0;
const cardLeft = card => card.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
function nearestSlide() {
  return cards.reduce((nearest, card, index) => Math.abs(cardLeft(card) - track.scrollLeft) < Math.abs(cardLeft(cards[nearest]) - track.scrollLeft) ? index : nearest, 0);
}
function updateCarousel(index) {
  currentSlide = Math.max(0, Math.min(cards.length - 1, index));
  counter.textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
  line.style.width = `${((currentSlide + 1) / cards.length) * 100}%`;
  prev.disabled = currentSlide === 0;
  next.disabled = currentSlide === cards.length - 1;
  // Offscreen case studies stay available to screen readers; focusing reveals them.
}
function goToSlide(index, instant = false) {
  const destination = Math.max(0, Math.min(cards.length - 1, index));
  track.scrollTo({left: cardLeft(cards[destination]), behavior: instant || reducedMotion.matches ? 'instant' : 'smooth'});
  updateCarousel(destination);
}
prev.addEventListener('click', () => goToSlide(currentSlide - 1));
next.addEventListener('click', () => goToSlide(currentSlide + 1));
track.addEventListener('keydown', event => {
  if (event.target.matches('input, select, textarea')) return;
  const destinations = {ArrowRight: currentSlide + 1, ArrowLeft: currentSlide - 1, Home: 0, End: cards.length - 1};
  if (event.key in destinations) { event.preventDefault(); goToSlide(destinations[event.key]); }
});
track.addEventListener('focusin', event => {
  const card = event.target.closest('.project-card');
  if (card) goToSlide(cards.indexOf(card));
});
let scrollFrame = 0;
track.addEventListener('scroll', () => {
  cancelAnimationFrame(scrollFrame);
  scrollFrame = requestAnimationFrame(() => updateCarousel(nearestSlide()));
}, {passive:true});
window.addEventListener('resize', () => goToSlide(currentSlide, true));

// One underlying set of case studies, reordered for shareable recruiter focus.
const focusSelect = document.getElementById('focusSelect');
const focusDescription = document.getElementById('focusDescription');
const focusViews = {
  general: {order:['gps','ict','assets','odoo','aruti'], text:'Business understanding, enterprise delivery and user enablement.'},
  innovation: {order:['ict','gps','assets','odoo','aruti'], text:'Service continuity, user training, digital health systems, asset accountability and practical digital innovation.'},
  'ai-adoption': {order:['gps','odoo','assets','aruti','ict'], text:'Requirements, stakeholder engagement, process mapping, UAT, data quality, AI-assisted prototyping and user adoption.'}
};
function applyFocus(value, updateUrl = true) {
  const focus = Object.hasOwn(focusViews,value) ? value : 'general';
  focusSelect.value = focus;
  focusDescription.textContent = focusViews[focus].text;
  focusViews[focus].order.forEach(id => track.append(document.getElementById(`project-${id}`)));
  cards = Array.from(track.children);
  goToSlide(0, true);
  if (updateUrl) {
    const url = new URL(window.location.href);
    if (focus === 'general') url.searchParams.delete('focus'); else url.searchParams.set('focus',focus);
    history.replaceState(null,'',url);
  }
}
focusSelect.addEventListener('change', () => applyFocus(focusSelect.value));
applyFocus(new URLSearchParams(location.search).get('focus'), false);
// Capability links expose the relevant card even after reordering.
function revealHashProject() {
  const card = cards.find(item => `#${item.id}` === location.hash);
  if (card) goToSlide(cards.indexOf(card), true);
}
window.addEventListener('hashchange', revealHashProject);
revealHashProject();

// Illustrative framework only; no external service or model is involved.
const decisions = {
  process:['Start with process improvement.','Clarify ownership, handoffs and approval steps before introducing another tool.'],
  rules:['Use rules-based automation.','A known deadline and a defined recipient are explicit conditions. Test the reminder rule, exceptions and audit trail.'],
  reporting:['Start with data reporting.','Clean and classify issue records, then report trends and recurring causes. Agree which decisions the report should inform.'],
  ai:['Consider a supervised AI pilot.','Varied text may benefit from classification assistance. First assess representative data, privacy, governance and cost; retain human review and measure accuracy and time saved against a baseline.']
};
document.getElementById('decision').addEventListener('change', event => {
  const [title,copy] = decisions[event.target.value];
  const result = document.getElementById('decisionResult');
  result.querySelector('h4').textContent = title;
  result.querySelector('p').textContent = copy;
});

// Progressive enhancement keeps content visible if animation is unavailable.
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), {threshold:0.05});
  document.querySelectorAll('.reveal').forEach(target => observer.observe(target));
} else document.querySelectorAll('.reveal').forEach(target => target.classList.add('is-visible'));
const scrollProgress = document.getElementById('scrollProgress');
function updatePageProgress() {
  scrollProgress.style.transform = `scaleX(${Math.min(1,window.scrollY / Math.max(1,document.documentElement.scrollHeight-window.innerHeight))})`;
}
window.addEventListener('scroll',updatePageProgress,{passive:true});
updatePageProgress();
document.getElementById('copyrightYear').textContent = new Date().getFullYear();
