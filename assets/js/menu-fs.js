export default class MenuFS {
  constructor() {
    this.$html = document.querySelector("html");
    this.DOM = {
      $trg_menu: document.querySelectorAll(".header__mobile__hamb"),
      $each_link: document.querySelectorAll(".menu-fs__links a"),
    };
    this.bindEvents();
  }

  //? - =========================  bind  ========================= -//
  bindEvents() {
    this.DOM.$trg_menu.forEach((trg) => {
      trg.addEventListener("click", () => {
        if (this.$html.className == "is-menu-close")
          this.$html.className = "is-menu";
        else {
          this.$html.className = "is-menu-close";
        }
      });
    });

    // this.DOM.$trg_menu.forEach((trg) => {
    //   trg.addEventListener("click", () => {
    //     this.$html.classList.toggle("is-menu");
    //   });
    // });

    // this.DOM.$each_link.forEach((trg) => {
    //   trg.addEventListener("click", () => {
    //     this.$html.classList.remove("is-menu");
    //   });
    // });
  }
}
