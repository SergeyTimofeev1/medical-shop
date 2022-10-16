const bottomHeader = document.querySelector(".bottom-header__inner");
const bottomHeaderCatalog = document.querySelector(".bottom-header-catalog");

bottomHeader.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("navbar__catalog-link") || target.classList.contains("navbar__item-catalog")) {
    bottomHeaderCatalog.classList.toggle("show");
  }
});
