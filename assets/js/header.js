//headroomInitializer.js

// export default class HeadroomInitializer {
//   constructor(headerSelector) {
//     this.header = document.querySelector(headerSelector);
//     this.headroom = new Headroom(this.header);
//   }

//   init() {
//     this.headroom.init();
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const headroomInitializer = new HeadroomInitializer(".header");
//   headroomInitializer.init();
// });

export default class Header {
  constructor() {
    this.lastScrollTop = 0;
    this.header = document.querySelector(".header");
    this.toggleHeaderOnScroll();
  }

  toggleHeaderOnScroll() {
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;

      if (currentScroll > this.lastScrollTop) {
        // Downscroll code
        this.header.classList.add("header--unpinned");
      } else {
        // Upscroll code
        this.header.classList.remove("header--unpinned");
      }

      // if currentScroll is less or equal 0 is true
      // update lastScrollTop with value of 0
      // if not update lastScrollTop with value of currentScroll
      // this.lastScrollTop is updated with the current scroll position but is never assigned a negative value
      this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
  }
}

// const Header = new Header();
