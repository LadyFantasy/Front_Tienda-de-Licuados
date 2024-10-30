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
const hero_carrousel= document.querySelectorAll(".hero_carrousel_img_text_wrapper")

let currentIndex = 0;

const showSlide = index => {
  slides[currentIndex].classList.remove("active");
  slides[currentIndex].classList.add("deactivate");
  hero_carrousel[currentIndex].classList.remove("move_up")
  hero_carrousel[currentIndex].classList.add("move_down")
  setTimeout(() => {
    slides[currentIndex].classList.remove("deactivate");
    slides[index].classList.add("active");
    hero_carrousel[index].classList.remove("move_down")
    hero_carrousel[index].classList.add("move_up")

    currentIndex = index;
    points[index].checked = true;
  }, 500);
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
