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
import { anim } from "./modules/anim.js";

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
  anim();
  const statsBlock = document.querySelector(".stats");

  // Настройки для Intersection Observer
  const options = {
    root: null, // используем viewport как область отслеживания
    rootMargin: "0px",
    threshold: 0.5, // сработает когда 50% элемента в зоне видимости
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Когда блок появляется в зоне видимости
        entry.target.classList.add("animate");

        // Опционально: можно отключить наблюдение после первого срабатывания
        // observer.unobserve(entry.target);
      }
    });
  }, options);

  // Начинаем наблюдение
  if (statsBlock) {
    observer.observe(statsBlock);
  }
});
