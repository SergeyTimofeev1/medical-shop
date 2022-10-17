const bottomHeader = document.querySelector(".bottom-header__inner");
const bottomHeaderCatalog = document.querySelector(".bottom-header-catalog");
const navbarItemCatalog = document.querySelector(".navbar__item-catalog");

bottomHeader.addEventListener("click", (e) => {
  if (e.target.classList.contains("navbar__catalog-link") || e.target.classList.contains("navbar__item-catalog")) {
    toggleMenuCatalog();
  }
});

function toggleMenuCatalog() {
  bottomHeaderCatalog.classList.toggle("show");
  navbarItemCatalog.classList.toggle("active");
}
