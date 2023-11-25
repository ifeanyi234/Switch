const addClass = function (className) {
  className.classList.add("active");
};
const removeClass = function (className) {
  className.classList.remove("active");
};

/* ==================================================== */
/* =============== window scroll effect ============== */
/* ==================================================== */
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  const scroll = document.documentElement.scrollTop;
  if (scroll > 1) {
    addClass(header);
  } else {
    removeClass(header);
  }
});

/* ==================================================== */
/* =============== RESPONSIVE NAVBAR FUNCTIONALITY ============== */
/* ==================================================== */
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navbar = document.querySelector(".navbar-nav");
hamburger.addEventListener("click", function () {
  addClass(navbar);
});
closeBtn.addEventListener("click", function () {
  removeClass(navbar);
});
