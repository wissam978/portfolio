// Animation au scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Effet typing sur le greeting
const greeting = document.querySelector('.hero-greeting, .page-header .breadcrumb');
if(greeting){
  const original = greeting.textContent;
  greeting.textContent = '';
  let i = 0;
  const type = () => {
    if(i < original.length){
      greeting.textContent += original[i++];
      setTimeout(type, 40);
    }
  };
  setTimeout(type, 200);
}

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if(menuToggle && navLinks){
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Animation des barres de compétences
window.addEventListener('load', () => {
  document.querySelectorAll('.bar-fill').forEach(bar => {
    const target = bar.dataset.value || '0';
    setTimeout(() => bar.style.width = target + '%', 200);
  });
});

// Marquer le lien actif dans la nav (basé sur l'URL)
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if(href === currentPage || (currentPage === '' && href === 'index.html')){
    link.classList.add('active');
  }
});

// Formulaire de contact (démo)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const original = btn.textContent;
    btn.textContent = '✓ Message envoyé !';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      contactForm.reset();
    }, 2500);
  });
}
