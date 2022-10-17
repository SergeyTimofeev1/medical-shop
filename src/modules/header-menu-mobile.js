// Константы для открытия - закрытие меню бургер
const burgerBtn = document.querySelector(".header-mobile__navbar");
const headerMenuMobile = document.querySelector(".header__menu-mobile");
const burgerMenuBtnClose = document.querySelector(".menu-mobile__inner-close");
// Константы для смены разделов выпадающего меню
const burgerButtons = document.querySelectorAll(".navigate-mobile__buttons");
const burgerMenu = document.querySelector(".navigate-mobile__menu");
const burgerCatalog = document.querySelector(".navigate-mobile__catalog");

function burgerMenuOpen() {
  headerMenuMobile.classList.add("active");
}

function burgerMenuClose() {
  headerMenuMobile.classList.remove("active");
}

burgerBtn.addEventListener("click", () => {
  burgerMenuOpen();
});

burgerMenuBtnClose.addEventListener("click", () => {
  burgerMenuClose();
});

function toggleBurgerActiveSection(target) {
  target.classList.add("active");
  if (target.previousElementSibling === null) {
    target.nextElementSibling.classList.remove("active");
    // burgerCatalog.classList.add("active");
    // burgerMenu.classList.remove("active");
  } else {
    target.previousElementSibling.classList.remove("active");
    // burgerCatalog.classList.remove("active");
    // burgerMenu.classList.add("active");
  }

  if (burgerCatalog.classList.contains("active")) {
    burgerCatalog.classList.remove("active");
    burgerMenu.classList.add("active");
  } else if (burgerMenu.classList.contains("active")) {
    burgerMenu.classList.remove("active");
    burgerCatalog.classList.add("active");
  }
}

burgerButtons.forEach((element) => {
  element.addEventListener("click", (event) => {
    let target = event.target;
    if (!target.classList.contains("active")) {
      toggleBurgerActiveSection(target);
    }
  });
});
