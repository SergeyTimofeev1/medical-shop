import { $ } from "./base";
// Функция создающая модальное окно(темплейт)
export function _createModal(options) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="modal__overlay">
        <div class="modal__window">
            <div class="modal__left">
            <form class="modal__form modal-form">
                <h3 class="modal-form__title">Заполните форму</h3>
                <p class="modal-form__subtitle">
                Для консультации со специалистом
                </p>
                <div class="modal-form__input-wrapper name">
                <input
                    class="modal-form__input"
                    type="text"
                    placeholder="Имя"
                />
                </div>
                <div class="modal-form__input-wrapper email">
                <input
                    class="modal-form__input"
                    type="email"
                    placeholder="Email"
                />
                </div>
                <div class="modal-form__input-wrapper phone">
                <input
                    class="modal-form__input"
                    type="phone"
                    placeholder="Телефон"
                />
                </div>
                <button class="modal-form__button">Отправить</button>
                <p class="modal-form__confi">
                Отправляя эту форму, вы даете свое согласие на обработку
                персональных данных в соответствии с нашей
                <span> <a href="#">Политикой конфиденциальности.</a> </span>
                </p>
            </form>
            <button class="modal__window-close-mobile">&times;</button>
            </div>
            <div class="modal__right">
              <div class="modal__right-img"></div>
              <h3 class="modal__right-title">Производитель</h3>
              <p class="modal__right-text">
                  Аппарат электрохирургический ЭХВЧ-300-01-«АКСИ»
              </p>
            </div>
            <button class="modal__window-close">&times;</button>
        </div>
    </div>
    `
  );
  document.body.appendChild(modal);
  return modal;
}
// Описание методов модального окна
$.modal = function (options) {
  const ANIMATION_SPEED = 500;
  const $modal = _createModal(options);
  return {
    open() {
      $modal.classList.add("open");
      document.body.style.overflow = "hidden";
    },
    close() {
      $modal.classList.remove("open");
      $modal.classList.add("hide");
      setTimeout(() => {
        $modal.classList.remove("hide");
      }, ANIMATION_SPEED);
      document.body.style.overflow = "auto";
    },
    destroy() {},
  };
};
