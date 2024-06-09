export default class Preloader {
  constructor() {
    this.DOM = {
      $img: null,
      $span_loading: null,
      $master_preloader: null,
    };
  }

  init() {
    const $heroMediaHolder = document.querySelector(".hero__media__holder");
    if ($heroMediaHolder) {
      this.DOM.$img = $heroMediaHolder.querySelector("li.is-active img");
      this.DOM.$span_loading = document.querySelector(".percentage");
      this.DOM.$master_preloader = document.querySelector(".master_preloader");

      if (this.DOM.$master_preloader) {
        this.loadImage();
      }
    }
  }

  loadImage() {
    const img = this.DOM.$img;
    const promise = new Promise((resolve, reject) => {
      if (img.complete) {
        resolve();
      } else {
        img.addEventListener("load", resolve);
        img.addEventListener("error", reject);
      }
    });

    promise
      .then(() => {
        this.loaded();
      })
      .catch((error) => {
        console.error("Error loading image:", error);
        this.loaded();
      });

    promise.then(() => {
      this.updatePercentage(100);
    });
  }

  updatePercentage(percentage) {
    this.DOM.$span_loading.textContent = `${percentage}%`;
  }

  loaded() {
    if (this.DOM.$master_preloader) {
      this.DOM.$master_preloader.remove();
      console.log("Preloader removed");
    }
  }
}
