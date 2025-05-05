import { swiper } from "./modules/swiper.js";
import { why } from "../pug/components/why/why.js";
import { about } from "../pug/components/about/about.js";
import { quiz } from "../pug/components/quiz/quiz.js";
import { validateForm } from "./modules/validate.js";
import { inputsMask } from "./modules/inputs-mask.js";
import { range } from "./modules/range.js";

document.addEventListener("DOMContentLoaded", () => {
  swiper();
  why();
  about();
  validateForm();
  inputsMask();
  range();
  quiz();
});
