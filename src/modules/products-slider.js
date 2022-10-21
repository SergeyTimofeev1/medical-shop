const productsSiderHeader = document.querySelector(".products__top");
const productsSliderButtonPrev = document.querySelector(".products__btn-left");
const productsSliderButtonNext = document.querySelector(".products__btn-right");
const productsSliderWrapper = document.querySelector(".products-slider__inner");
const productsSliderItem = document.querySelector(".products-slider__item");

// ? Динамическое получаение ширины слайдера
let productsWrapperWidth = window.getComputedStyle(productsSliderItem).width;
let productsGapSize = window.getComputedStyle(productsSliderWrapper).columnGap;
// window.addEventListener("resize", () => ({
//     productsWrapperWidth = window.getComputedStyle(productsSliderItem).width
//     productsGapSize = window.getComputedStyle(productsSliderWrapper).columnGap;
//         }
//     ));
window.addEventListener("resize", () => {
  productsWrapperWidth = window.getComputedStyle(productsSliderItem).width;
  productsGapSize = window.getComputedStyle(productsSliderWrapper).columnGap;
});

// ? Обработка события нажатия на кнопки
productsSiderHeader.addEventListener("click", (e) => {
  let sizeToScroll = productsWrapperWidth + productsGapSize;
  const target = e.target;
  if (target === productsSliderButtonPrev) {
    onPrevClick(sizeToScroll);
  }
  if (target === productsSliderButtonNext) {
    onNextClick(sizeToScroll);
  }
});

// ? Ф-ии действия при нажатии на кнопку

function onPrevClick(sizeToScroll) {
  productsSliderWrapper.scrollBy({
    left: -parseInt(sizeToScroll),
    behavior: "smooth",
  });
}

function onNextClick(sizeToScroll) {
  productsSliderWrapper.scrollBy({
    left: parseInt(sizeToScroll),
    behavior: "smooth",
  });
}
