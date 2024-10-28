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
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const points = document.querySelectorAll(".point");

let currentIndex = 0;

const showSlide = index => {
  slides[currentIndex].classList.remove("active");
  slides[currentIndex].classList.add("deactivate");
  setTimeout(()=>{
  slides[currentIndex].classList.remove("deactivate");
  slides[index].classList.add("active");


  currentIndex = index;
  points[index].checked = true;
  console.log("Termina");},150)
};

next.addEventListener("click", () => {
  const nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
});

prev.addEventListener("click", () => {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
});

points.forEach((point, index) => {
  point.addEventListener("click", () => {
    showSlide(index);
  });
});

// Mostrar la primera imagen al cargar la página
showSlide(currentIndex);
