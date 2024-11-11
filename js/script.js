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
const menu = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav_links_list");
const [...nav_li] = navLinks.getElementsByClassName("nav_links_list_links");

let currentIndexHero = 0;
let currentIndexProduct = 0;

let title = document.title.toUpperCase().split(" - ")[0];

title == "HOME" ? (title = "INICIO") : title;

title == "TIENDA" ? (title = "NUESTROS") : title;

nav_li.forEach(link => {
  if (link.textContent.includes(title)) {
    link.firstChild.classList.add("link_active_page");
  }
});

const showSlide = index => {
  points[currentIndexProduct + 3].checked = true;
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

document.addEventListener("click", () => {
  if (!navLinks.contains(event.target) && !menu.contains(event.target)) {
    navLinks.classList.add("oculto");
    event.stopPropagation();
  }
});

if (title.includes("INICIO")) {
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
}

menu.addEventListener("click", () => {
  navLinks.classList.toggle("oculto");
});

const audio = document.getElementById("myAudio");
audio.volume = 0.1;

window.addEventListener("resize", () => {
  if (innerWidth > 375) {
    audio.pause();
  } else {
    audio.play();
  }
});
