const navbarToggleButton = document.querySelector(".l-main-nav__toggle-button");
const mainNav = document.querySelector(".l-main-nav");

navbarToggleButton.addEventListener("click", toggleNavigation);

function toggleNavigation() {
  if (mainNav.classList.contains("l-main-nav--active")) {
    navbarToggleButton.querySelector("img").src = "./assets/logos/hamburger.svg";
  } else {
    navbarToggleButton.querySelector("img").src = "./assets/logos/close.svg";
  }
  mainNav.classList.toggle("l-main-nav--active");
}

const navLinks = document.querySelectorAll("l-main-nav__link");

navLinks.forEach((link) => link.addEventListener("click", toggleNavigation));
