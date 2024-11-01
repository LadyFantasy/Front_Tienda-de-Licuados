// SCROLL DEL NAVBAR
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  if (window.scrollY > 111) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* SLIDER HERO Y PRODUCTOS*/
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const hero = document.querySelector(".hero");
const points = document.querySelectorAll(".point");
const hero_carrousel = document.querySelectorAll(".hero_carrousel_img_text_wrapper");
const product_carrousel = document.querySelector(".slider_product");
const product_arrow = document.querySelector(".arrows_products");

let currentIndexHero = 0;
let currentIndexProduct = 0;

const showSlide = index => {
  points[currentIndexProduct+3].checked = true;
  if (index < 3) {
    slides[currentIndexHero].classList.remove("active");
    slides[currentIndexHero].classList.add("deactivate");
    hero_carrousel[currentIndexHero].classList.remove("move_up");
    hero_carrousel[currentIndexHero].classList.add("move_down");
    setTimeout(() => {
      slides[currentIndexHero].classList.remove("deactivate");
      slides[index].classList.add("active");
      hero_carrousel[index].classList.remove("move_down");
      hero_carrousel[index].classList.add("move_up");
      
      currentIndexHero = index;
    }, 500);
  } else {
    if (index == 3) {
      product_carrousel.classList.remove("move_right");
      product_carrousel.classList.add("move_left");
    } else {
      product_carrousel.classList.remove("move_left");
      product_carrousel.classList.add("move_right");
    }
  }
  points[index].checked = true;
};

if(document.title.includes("Home")){
next.addEventListener("click", () => {
  const nextIndex = (currentIndexHero + 1) % slides.length;
  showSlide(nextIndex);
});

prev.addEventListener("click", () => {
  const prevIndex = (currentIndexHero - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
});

points.forEach((point, index) => {
  point.addEventListener("click", () => {
    showSlide(index);
  });
});

product_arrow.addEventListener("click", () => {
  currentIndexProduct = (currentIndexProduct - 1) * -1;
  showSlide(currentIndexProduct + 3);
});
showSlide(currentIndexHero);
};
