

// SCROLL DEL NAVBAR
/* window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) { // Si el scroll es mayor a 50px
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}); */

/* SLIDER HERO */
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;


const showSlide = (index) => {
  slides[currentIndex].classList.remove('active');
  slides[index].classList.add('active');
  currentIndex = index;
};

next.addEventListener('click', () => {
  const nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
});

prev.addEventListener('click', () => {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
});

// Mostrar la primera imagen al cargar la página
showSlide(currentIndex);