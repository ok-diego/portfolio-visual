export default class ModeSwtich {
  constructor() {
    this.$html = document.querySelector("html");
    this.DOM = {
      $trg_mode: document.querySelectorAll(".trg-switch"),
    };
    this.bindEvents();
  }

  //? - =========================  bind  ========================= -//
  bindEvents() {
    this.DOM.$trg_mode.forEach((trg) => {
      trg.addEventListener("click", () => {
        this.$html.classList.toggle("dark-mode");
      });
    });
  }
}
