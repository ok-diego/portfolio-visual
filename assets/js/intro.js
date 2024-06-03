export default class Intro {
  constructor() {
    // we use this so the site opens the top - the intro always runs
    this.$body = document.querySelector("body");
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    this.scramble();
  }

  scramble() {
    this.welcome = {
      $el: document.querySelector(".welcome"),
      $each_text: document.querySelectorAll(".welcome__span"),
    };
    let that = this;
    const length_images = this.welcome.$each_text.length;
    let counter_images = -1;

    let interval_app;
    function changeText() {
      if (!interval_app) {
        interval_app = setInterval(revealText, 250);
      }
    }

    function revealText() {
      counter_images++;
      if (counter_images >= length_images) {
        revealPage();
      } else {
        that.welcome.$each_text.forEach((img) => {
          img.classList.remove("is-active");
        });
        that.welcome.$each_text[counter_images].classList.add("is-active");
      }
    }

    function revealPage() {
      // we force the website to go to the top
      window.scrollTo(0, 0);
      clearInterval(interval_app);
      interval_app = null;
      that.$body.classList.remove("not-ready");
      that.welcome.$el.classList.add("is-done");
    }
    changeText();
  }
}
