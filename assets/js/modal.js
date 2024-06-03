export default class Modal {
  constructor() {
    this.$body = document.querySelector("body");
    this.DOM = {
      $modal: document.querySelector(".modal"),
      $modal_close: document.querySelector(".modal__close"),
      $modal_title: document.querySelector(".modal__title"),
      $modal_link: document.querySelector(".modal__link"),
      $modal_video: document.querySelector(".modal__media video"),
      $each_trg: document.querySelectorAll(".projects__each__info .main-btn"),
    };

    this.bindEvents();
  }

  openModal(el) {
    this.$body.classList.add("is-modal");
    // is-open is not doing anything
    this.DOM.$modal.classList.add("is-open");
    // we use closest so we can get the information from the parent
    // closest does the inverse of querySelector
    const title = el.closest(".projects__each").getAttribute("data-title");
    const video = el.closest(".projects__each").getAttribute("data-video");
    const link = el.closest(".projects__each").getAttribute("data-link");

    this.DOM.$modal_title.innerHTML = title;
    this.DOM.$modal_link.setAttribute("href", link);

    // change the source
    this.DOM.$modal_video.src = video;
    // loads the youtube video so we can play it
    this.DOM.$modal_video.load();
    this.DOM.$modal_video.play();
  }

  closeModal() {
    this.$body.classList.remove("is-modal");
    this.DOM.$modal.classList.remove("is-open");
  }

  //? - =========================  bind  ========================= -//
  //? - =========================  bind  ========================= -//
  bindEvents() {
    this.DOM.$each_trg.forEach((el) => {
      el.addEventListener("click", () => {
        this.openModal(el);
      });
    });
    this.DOM.$modal_close.addEventListener("click", () => {
      this.closeModal();
    });
  }
}
