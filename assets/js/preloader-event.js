export default class Preloader {
  constructor() {
    this.length_imgs = 0;
    this.to_load = 0;
    this.DOM = {
      $imgs: null,
      $span_loading: null,
      $master_preloader: null,
    };
  }

  init() {
    this.DOM.$imgs = document.querySelectorAll("img");
    this.DOM.$span_loading = document.querySelector(".percentage");
    this.DOM.$master_preloader = document.querySelector(".master_preloader");
    this.length_imgs = this.DOM.$imgs.length;

    if (this.DOM.$master_preloader) {
      this.bindEvents();
    }
  }

  //? - =========================  bind  ========================= -//
  bindEvents() {
    this.DOM.$imgs.forEach((img) => {
      if (img.complete) {
        this.to_load++;
        this.updatePercentage();
        if (this.to_load === this.length_imgs) {
          this.loaded();
        }
      } else {
        img.addEventListener("load", () => {
          this.to_load++;
          this.updatePercentage();
          if (this.to_load === this.length_imgs) {
            this.loaded();
          }
        });
        img.addEventListener("error", () => {
          this.to_load++;
          this.updatePercentage();
          if (this.to_load === this.length_imgs) {
            this.loaded();
          }
        });
      }
    });
  }

  updatePercentage() {
    this.percentage = Math.floor((this.to_load / this.length_imgs) * 100);
    this.DOM.$span_loading.textContent = `${this.percentage}%`;
  }

  loaded() {
    if (this.DOM.$master_preloader) {
      this.DOM.$master_preloader.remove();
      console.log("Preloader removed");
    }
  }
}
