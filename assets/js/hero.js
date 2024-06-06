export default class Hero {
  constructor() {
    // different approach from our other files - we call hero here
    this.hero();
  }
  //? - =========================  HERO  ========================= -//
  //? - =========================  HERO  ========================= -//
  hero() {
    this.hero = {
      $btn: document.querySelectorAll(".hero .main-btn"),
      $each_imgs: document.querySelectorAll(".hero li"),
    };
    let that = this;
    const length_images = this.hero.$each_imgs.length;
    let counter_images = 0;

    // we set a variable so we can apply setInterval to it - to one variable so we can use it on clearInterval
    let interval_app;
    function changeImages() {
      if (!interval_app) {
        interval_app = setInterval(revealImage, 325);
      }
    }

    function revealImage() {
      counter_images++;
      if (counter_images >= length_images) {
        counter_images = 0;
      }
      // these lines will run at the interval we set on setInterval
      that.hero.$each_imgs.forEach((img) => {
        img.classList.remove("is-active");
      });
      that.hero.$each_imgs[counter_images].classList.add("is-active");
    }

    function stopImages() {
      clearInterval(interval_app);
      interval_app = null;
      counter_images = 0;
      that.hero.$each_imgs.forEach((img) => {
        img.classList.remove("is-active");
      });
      that.hero.$each_imgs[0].classList.add("is-active");
    }

    // this.hero.$btn.forEach((btn) => {
    //   btn.addEventListener("mouseenter", () => {
    //     changeImages();
    //   });
    //   btn.addEventListener("mouseleave", () => {
    //     stopImages();
    //   });
    // });

    // Add click event listener to run the functions on both hover and click events
    let clickCounter = 0;

    this.hero.$btn.forEach((btn) => {
      // Run functions on mouseenter and mouseleave
      btn.addEventListener("mouseenter", () => {
        changeImages();
      });
      btn.addEventListener("mouseleave", () => {
        stopImages();
      });

      // Run functions on click
      btn.addEventListener("click", () => {
        if (clickCounter === 0) {
          changeImages();
          clickCounter++;
        } else {
          stopImages();
          clickCounter = 0; // Reset the counter
        }
      });
    });
  }
}
