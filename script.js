const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
  );
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".content h2", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".blog-content .blog-image img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 200,
});

ScrollReveal().reveal(".blog-content .blog-text h3", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".blog-content .blog-text p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".blog-content .blog-text .btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".blog-content .about-image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about-content .about-text h2", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about-content .about-text p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".gallery .gallery-content .gallery-card img", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 1000,
});

const scrollBtn = document.querySelector(".scroll-top");

// first function
window.addEventListener("scroll", function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// second function
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; // for Chrome, Firefox, Safari
});
