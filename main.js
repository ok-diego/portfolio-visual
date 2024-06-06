import "./assets/css/style.css";
import "./assets/css/headroom.css";
// import classes
// import our prismic class
// import CMS from "./assets/js/cms";
import Cursor from "./assets/js/cursor";
import Modal from "./assets/js/modal";
import ModeSwtich from "./assets/js/mode-switch";
import MenuFS from "./assets/js/menu-fs";
import Hero from "./assets/js/hero";
import Intro from "./assets/js/intro";
import Header from "./assets/js/header";

// instance our classes
const header = new Header();
// const cms = new CMS();
const intro = new Intro();
const hero = new Hero();
const menufs = new MenuFS();
const modeSwitch = new ModeSwtich();
const modal = new Modal();
const cursor = new Cursor();
if (window.innerWidth > 1024) {
  cursor.init();
}
// Optional: Handle window resize to reinitialize the cursor
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    cursor.init();
  }
});
