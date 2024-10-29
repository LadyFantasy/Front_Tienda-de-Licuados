// SCROLL DEL NAVBAR
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  if (window.scrollY > 150) {
    // Si el scroll es mayor a 150px
    console.log(window.scrollY);
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* SLIDER HERO */
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const hero = document.querySelector(".hero");
const points = hero.querySelectorAll(".point");

let currentIndex = 0;

const showSlide = index => {
  slides[currentIndex].classList.remove("active");
  slides[currentIndex].classList.add("deactivate");
  setTimeout(() => {
    slides[currentIndex].classList.remove("deactivate");
    slides[index].classList.add("active");

    currentIndex = index;
    points[index].checked = true;
    console.log("Termina");
  }, 100);
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
