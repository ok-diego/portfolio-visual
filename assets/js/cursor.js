export default class Cursor {
  constructor() {}

  init() {
    this.$html = document.querySelector("html");
    // organize way to add our elements
    this.cursor = {
      $el: document.querySelector(".cursor"),
      $each_trg: document.querySelectorAll(".trg-mouse"),
      $text: document.querySelector(".cursor__change"),
    };

    this.mouse = { x: 0, y: 0 }; //mouse position
    this.pos = { x: 0, y: 0 }; //cursor position
    this.ratio = 0.075; //delay follow cursor

    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    this.delta = 16;
    // these are custom names - not js
    // join the events below
    this.bindEvents();
    // move the cursors and delay circle
    this.tick();
  }
  //? - =========================  bind  ========================= -//
  bindEvents() {
    document.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

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
        this.cursor.$text.innerHTML = `CHANGE`;
      });
    });
  }

  //? - =========================  tick  ========================= -//
  tick() {
    this.pos.x += (this.mouse.x - this.pos.x) * this.ratio;
    this.pos.y += (this.mouse.y - this.pos.y) * this.ratio;
    // translate3D is better for performance
    this.cursor.$el.style.transform = `translate3d(${this.pos.x}px, ${this.pos.y}px, 0)`;
    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
}
