import "./index.html";
import "./index.scss";
import "./modules/header-catalog.js";
import "./modules/header-menu-mobile.js";
import "./modules/medical-slider";
import { $ } from "./modules/base.js";
import { modal, _createModal } from "./modules/modal.js";

const myModal = $.modal();
const headerModalOpen = document.querySelector(".top-header__button");
const aboutModalOpen = document.querySelector(".about__button");
const modalClose = document.querySelector(".modal__window-close");
const modalCloseMobile = document.querySelector(".modal__window-close-mobile");

const availableScreenWidth = window.screen.availWidth;
// Header button
headerModalOpen.addEventListener("click", () => myModal.open());
// Закрытие на десктопе
modalClose.addEventListener("click", () => myModal.close());
// Закрытие на планшетах и мобильных устройствах
modalCloseMobile.addEventListener("click", () => myModal.close());
// About button
aboutModalOpen.addEventListener("click", () => myModal.open());
