const buttonDelImgElement = document.querySelector(".js-buttonDeletePhoto");
const imgDelElement = document.querySelector(".js-image");

buttonDelImgElement.addEventListener("click", () => {
  imgDelElement.remove();
  buttonDelImgElement.remove();
});

const buttonChangeBackgroundElement = document.querySelector(
  ".js-buttonChangeBackground"
);
const bodyElement = document.querySelector("body"); // Poprawione: zmieniłem ".body" na "body"
let buttonChangeBackgroundText = document.querySelector(
  ".js-buttonChangeBackgroundText"
);

buttonChangeBackgroundElement.addEventListener("click", () => {
  bodyElement.classList.toggle("body--background");

  buttonChangeBackgroundText.innerText = bodyElement.classList.contains(
    "body--background"
  )
    ? "Przywróć oryginalne tło"
    : "Zmień tło";
});
const buttonGoToTopElement = document.querySelector(".js-buttonGoToTop");

buttonGoToTopElement.addEventListener("click", () => {
  scroll(0, 0);
});
