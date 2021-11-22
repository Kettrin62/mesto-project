export default class Popup {
  constructor({ popup }) {
    this._popup = popup;
  }
  // Метод открытия попапа
  open() {
    // добавляем класс открытия
    this._popup.classList.add("popup_opened");
    console.log(this._popup);

    // добавляем слушателей
    this.setEventListeners();
  }

  // Метод закрытия попапа
  close() {
    this._popup.classList.remove("popup_opened");
    this.removeEventListeners();
  }

  // Метод закрытия по esc
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      // закрыли попап
      this.close();
    }
  }

  // Метод закрытия по оверлей
  _handleOverlayClose(evt) {
    if (evt.target.classList.contains("popup_opened")) {
      this.close();
    }
  }

  // Метод навешивания слушателей
  setEventListeners() {
    document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
    this._popup.addEventListener("click", (evt) =>
      this._handleOverlayClose(evt)
    );
  }

  // Метод снятия слушателей
  removeEventListeners() {
    document.removeEventListener("keydown", (evt) => this._handleEscClose(evt));
    this._popup.removeEventListener("click", (evt) =>
      this._handleOverlayClose(evt)
    );
  }
}