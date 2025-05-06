import { swiper } from "./modules/swiper.js";
import { why } from "../pug/components/why/why.js";
import { about } from "../pug/components/about/about.js";
import { quiz } from "../pug/components/quiz/quiz.js";
import { header } from "../pug/components/header/header.js";
import { mobileMenu } from "../pug/components/mobile-menu/mobile-menu.js";
import { policy } from "../pug/components/policy/policy.js";
import { validateForm } from "./modules/validate.js";
import { inputsMask } from "./modules/inputs-mask.js";
import { range } from "./modules/range.js";
import { accordionFunc } from "./modules/accordion.js";
import { modals } from "./modules/modals.js";

document.addEventListener("DOMContentLoaded", () => {
  swiper();
  why();
  about();
  validateForm();
  inputsMask();
  range();
  quiz();
  accordionFunc();
  header();
  modals();
  mobileMenu();
  policy();
});
