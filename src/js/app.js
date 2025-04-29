import { swiper } from "./modules/swiper.js";
import { why } from "../pug/components/why/why.js";
import { about } from "../pug/components/about/about.js";

document.addEventListener("DOMContentLoaded", () => {
  swiper();
  why();
  about();
});
