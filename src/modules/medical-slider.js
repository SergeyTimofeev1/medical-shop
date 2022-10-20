const medicalSliderContainer = document.querySelector(".medical-equipment__right");
const medicalSlider = document.querySelector(".medical-slider");
const medicalSliderWrapper = document.querySelector(".medical-slider__wrapper");
const medicalSliderItem = document.querySelector(".medical-slider__item");
const medicalSliderItemImg = document.querySelector(".medical-slider__item-img");
const medicalSliderButtonPrev = document.querySelector(".medical-slider__btn-left");
const medicalSliderButtonNext = document.querySelector(".medical-slider__btn-right");

// ? Динамическое получаение ширины слайдера
let wrapperWidth = window.getComputedStyle(medicalSlider).width;
window.addEventListener("resize", () => (wrapperWidth = window.getComputedStyle(medicalSlider).width));

// ? Обработка события кликна кнопки
medicalSliderContainer.addEventListener("click", (e) => {
  const target = e.target;
  if (target === medicalSliderButtonPrev) {
    onPrevClick();
  }
  if (target === medicalSliderButtonNext) {
    onNextClick();
  }
});

// ? Ф-ии действия при нажатии на кнопку

function onPrevClick() {
  medicalSliderWrapper.scrollBy({
    left: -parseInt(wrapperWidth),
    behavior: "smooth",
  });
}

function onNextClick() {
  console.log("clicked", wrapperWidth);
  medicalSliderWrapper.scrollBy({
    left: parseInt(wrapperWidth),
    behavior: "smooth",
  });
}
