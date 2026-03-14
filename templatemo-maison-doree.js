// ══════════════════════
//  Header scroll
// ══════════════════════
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 80);
});

// ══════════════════════
//  Mobile nav
// ══════════════════════
const menuToggle    = document.getElementById('menuToggle');
const mobileNav     = document.getElementById('mobileNav');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileClose   = document.getElementById('mobileNavClose');

const openNav  = () => {
  mobileNav.classList.add('active');
  mobileOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};
const closeNav = () => {
  mobileNav.classList.remove('active');
  mobileOverlay.classList.remove('active');
  document.body.style.overflow = '';
};

menuToggle.addEventListener('click', openNav);
mobileClose.addEventListener('click', closeNav);
mobileOverlay.addEventListener('click', closeNav);
document.querySelectorAll('.mobile-nav-links a').forEach(l => l.addEventListener('click', closeNav));

// ══════════════════════
//  Smooth scroll
// ══════════════════════
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const target = document.querySelector(href);
    if (target) window.scrollTo({ top: target.offsetTop - header.offsetHeight, behavior: 'smooth' });
  });
});

// ══════════════════════
//  Hero slideshow
// ══════════════════════
const slides = document.querySelectorAll('.hero-slide');
let current = 0;
setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 5000);

// ══════════════════════
//  Contact form
// ══════════════════════
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! Entraremos em contato em até 24 horas úteis.');
  this.reset();
});

// ══════════════════════
//  Scroll reveal
// ══════════════════════
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('section:not(#hero)').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(section);
});