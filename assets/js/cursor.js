export default class Cursor {
  constructor() {
    this.pos = { x: 0, y: 0 }; //cursor position
  }

  init() {
    this.$html = document.querySelector("html");
    this.cursor = {
      $el: document.querySelector("[data-cursor]"),
      $each_trg: document.querySelectorAll(".trg-mouse"),
      $text: document.querySelector(".cursor__change"),
    };

    if (this.cursor.$el) {
      this.bindEvents();
    }
  }

  //? - =========================  bind  ========================= -//
  bindEvents() {
    window.addEventListener("mousemove", (e) => {
      this.posX = e.clientX;
      this.posY = e.clientY;

      // console.log(`${this.posX}`);
      // console.log(`${this.posY}`);

      // this.cursor.$el.style.left = `${this.posX}px`;
      // this.cursor.$el.style.top = `${this.posY}px`;

      this.cursor.$each_trg.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          const text_cursor = el.getAttribute("data-cursor");
          this.cursor.$el.classList.add("is-mouse");
          if (el.getAttribute("data-cursor")) {
            this.cursor.$text.innerHTML = text_cursor;
          }
        });
        el.addEventListener("mouseleave", () => {
          this.cursor.$el.classList.remove("is-mouse");
          this.cursor.$text.innerHTML = `LIVE`;
        });
      });

      this.cursor.$el.animate(
        {
          left: `${this.posX}px`,
          top: `${this.posY}px`,
        },
        {
          duration: 500,
          fill: "forwards",
        }
      );
    });
  }
}
