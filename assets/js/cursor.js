export default class Cursor {
  constructor() {
    this.pos = { x: 0, y: 0 }; //cursor position
  }

  init() {
    this.$html = document.querySelector("html");
    this.cursor = {
      $el: document.querySelector("[data-cursor]"),
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
