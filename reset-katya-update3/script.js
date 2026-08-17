// Sticky topbar background on scroll
const topbar = document.getElementById('topbar');
const onScroll = () => {
  topbar.classList.toggle('scrolled', window.scrollY > 40);
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile sticky CTA appears after hero is scrolled past
const hero = document.getElementById('hero');
const mobileCta = document.getElementById('mobileCta');
if (hero && mobileCta) {
  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        mobileCta.classList.toggle('visible', !entry.isIntersecting);
      });
    },
    { threshold: 0 }
  );
  heroObserver.observe(hero);
}

// Stagger index for grouped items (cards, list items, badges, chips, photo slots, stages)
document
  .querySelectorAll(
    '.grid--cards .card, .check-list--big li, .badges .badge, .chips .chip, .grid--photos .photo-slot, .stages .stage'
  )
  .forEach((el, i) => {
    el.style.setProperty('--i', i % 8);
  });

// Scroll reveal animations
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);
revealEls.forEach((el) => revealObserver.observe(el));
document.documentElement.classList.add('motion-ready');
