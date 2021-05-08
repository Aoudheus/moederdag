const cadeau = document.querySelector("img");
const text = document.querySelector("h1");
const shadow = document.querySelector(".shadow");

cadeau.addEventListener("click", function () {
  cadeau.classList.add("active");
  cadeau.classList.remove("jumping");
  setTimeout(function () {
    text.classList.remove("hidden");
  }, 500);
});
