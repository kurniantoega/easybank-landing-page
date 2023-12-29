const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", function () {
  navbar.classList.toggle("active");
  hamburger.classList.toggle("active");
});

document.addEventListener("click", function (ev) {
  if (!hamburger.contains(ev.target) && !navbar.contains(ev.target)) {
    navbar.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

window.addEventListener("scroll", function () {
  navbar.classList.remove("active");
  hamburger.classList.remove("active");
});
