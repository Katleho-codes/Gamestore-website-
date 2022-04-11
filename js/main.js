const burger = document.getElementById("burger");
const ul = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  burger.classList.toggle("show-x");
  ul.classList.toggle("show");
});

// Form
