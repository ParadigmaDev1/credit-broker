import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Thumbs,
  EffectFade,
  Controller,
  Autoplay,
  Mousewheel,
} from "swiper/modules";

export const swiper = () => {
  const problemsSwiper = new Swiper(".problems-swiper", {
    modules: [Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
      prevEl: ".problems-prev",
      nextEl: ".problems-next",
    },
    // pagination: {
    //   el: ".products-pagination",
    //   type: "progressbar",
    // },
    // breakpoints: {
    //   0: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },
    //   767: {
    //     slidesPerView: 4,
    //     spaceBetween: 24,
    //   },
    // },
  });
};
