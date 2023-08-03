const nav__items = document.getElementsByClassName("nav__items");
const hamburgerActive = (hamburger) => {
  hamburger.classList.toggle("active");
  nav__items[0].classList.toggle("active");
  // console.log(nav__items[0]);
};
