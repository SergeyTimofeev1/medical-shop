const manufacturesSiderHeader = document.querySelector(".manufactures__top");
const manufacturesSliderButtonPrev = document.querySelector(".manufactures__btn-left");
const manufacturesSliderButtonNext = document.querySelector(".manufactures__btn-right");
const manufacturesSliderWrapper = document.querySelector(".slider-manufactures__inner");
const manufacturesSliderItem = document.querySelector(".slider-manufactures__item");

// ? Динамическое получаение ширины слайдера
let manufacturesWrapperWidth = window.getComputedStyle(manufacturesSliderItem).width;
window.addEventListener("resize", () => (manufacturesWrapperWidth = window.getComputedStyle(manufacturesSliderItem).width));

// ? Обработка события нажатия на кнопки
manufacturesSiderHeader.addEventListener("click", (e) => {
  const target = e.target;
  if (target === manufacturesSliderButtonPrev) {
    onPrevClick();
  }
  if (target === manufacturesSliderButtonNext) {
    onNextClick();
  }
});

// ? Ф-ии действия при нажатии на кнопку

function onPrevClick() {
  manufacturesSliderWrapper.scrollBy({
    left: -parseInt(manufacturesWrapperWidth),
    behavior: "smooth",
  });
}

function onNextClick() {
  manufacturesSliderWrapper.scrollBy({
    left: parseInt(manufacturesWrapperWidth),
    behavior: "smooth",
  });
}
