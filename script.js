'use strict';

const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const header = document.querySelector('.site-header');
const updateMenu = (open) => {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.classList.toggle('is-open', open);
  mobileNav.inert = !open;
  document.body.classList.toggle('menu-open', open);
};
menuToggle.addEventListener('click', () => updateMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => updateMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') updateMenu(false); });
document.addEventListener('click', event => { if (!header.contains(event.target)) updateMenu(false); });

const track = document.getElementById('projectTrack');
const cards = Array.from(track.querySelectorAll('.project-card'));
const counter = document.getElementById('slideCounter');
const line = document.getElementById('carouselProgress');
const prev = document.getElementById('previousProject');
const next = document.getElementById('nextProject');
let currentSlide = 0;

function nearestSlide() {
  return cards.reduce((nearest, card, index) =>
    Math.abs(card.offsetLeft - track.scrollLeft) < Math.abs(cards[nearest].offsetLeft - track.scrollLeft)
      ? index : nearest, 0);
}
function updateCarousel(index) {
  currentSlide = Math.max(0, Math.min(cards.length - 1, index));
  counter.textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
  line.style.width = `${((currentSlide + 1) / cards.length) * 100}%`;
  prev.disabled = currentSlide === 0;
  next.disabled = currentSlide === cards.length - 1;
}
function goToSlide(index) {
  const destination = Math.max(0, Math.min(cards.length - 1, index));
  track.scrollTo({ left: cards[destination].offsetLeft - cards[0].offsetLeft, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  updateCarousel(destination);
}
prev.addEventListener('click', () => goToSlide(currentSlide - 1));
next.addEventListener('click', () => goToSlide(currentSlide + 1));
track.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') { event.preventDefault(); goToSlide(currentSlide + 1); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); goToSlide(currentSlide - 1); }
});
let scrollFrame = 0;
track.addEventListener('scroll', () => {
  cancelAnimationFrame(scrollFrame);
  scrollFrame = requestAnimationFrame(() => updateCarousel(nearestSlide()));
}, { passive: true });
window.addEventListener('resize', () => updateCarousel(nearestSlide()));
updateCarousel(0);

const revealTargets = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { rootMargin: '0px 0px -45px 0px', threshold: 0.08 });
  revealTargets.forEach(target => observer.observe(target));
} else { revealTargets.forEach(target => target.classList.add('is-visible')); }

const scrollProgress = document.getElementById('scrollProgress');
let pageFrame = 0;
function updatePageProgress() {
  const scrollableHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  scrollProgress.style.transform = `scaleX(${Math.min(1, window.scrollY / scrollableHeight)})`;
}
window.addEventListener('scroll', () => {
  cancelAnimationFrame(pageFrame);
  pageFrame = requestAnimationFrame(updatePageProgress);
}, { passive: true });
window.addEventListener('resize', updatePageProgress);
updatePageProgress();
document.getElementById('copyrightYear').textContent = new Date().getFullYear();
