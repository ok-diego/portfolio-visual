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
      this.loadImages();
    }
  }

  loadImages() {
    const promises = Array.from(this.DOM.$imgs).map((img) => {
      return new Promise((resolve, reject) => {
        if (img.complete) {
          resolve();
        } else {
          img.addEventListener("load", resolve);
          img.addEventListener("error", reject);
        }
      });
    });

    Promise.all(promises)
      .then(() => {
        this.loaded();
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        this.loaded();
      });

    promises.forEach((promise) => {
      promise.then(() => {
        this.to_load++;
        this.updatePercentage();
      });
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
