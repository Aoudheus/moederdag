const cadeau = document.querySelector("img");
const text = document.querySelector("h1");
const shadow = document.querySelector(".shadow");

cadeau.addEventListener("mouseenter", function () {
  cadeau.classList.remove("jumping");
  shadow.classList.add("hidden");
});

cadeau.addEventListener("mouseleave", function () {
  cadeau.classList.add("jumping");
  shadow.classList.remove("hidden");
});

cadeau.addEventListener("click", function () {
  cadeau.classList.toggle("active");
  cadeau.classList.toggle("jumping");
  setTimeout(function () {
    text.classList.toggle("hidden");
  }, 500);
});
