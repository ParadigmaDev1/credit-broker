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
  const steps = document.querySelector(".steps");

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
  const certificatesSwiper = new Swiper(".certificates-swiper", {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    navigation: {
      prevEl: ".certificates-prev",
      nextEl: ".certificates-next",
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
  const historySwiper = new Swiper(".history-swiper ", {
    modules: [Pagination, Navigation],
    slidesPerView: 1.4,
    spaceBetween: 24,
    // navigation: {
    //   prevEl: ".problems-prev",
    //   nextEl: ".problems-next",
    // },
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

  const stepsSwiper = new Swiper(".steps-swiper", {
    modules: [Pagination, Navigation],
    slidesPerView: 1.5,
    spaceBetween: 24,
    centeredSlides: true,
    navigation: {
      prevEl: ".steps-prev",
      nextEl: ".steps-next",
    },
    on: {
      slideChange: (swiper) => {
        const paginationBtns = steps.querySelectorAll(".pagination-item");
        const currentBtn = Array.from(paginationBtns).find((btn, index) => {
          return swiper.activeIndex === index;
        });
        const activeBtn = steps.querySelector(".pagination-item.active");
        if (activeBtn) {
          activeBtn.classList.remove("active");
        }
        if (currentBtn) {
          currentBtn.classList.add("active");
        }
      },
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

  if (steps) {
    const paginationBtns = steps.querySelectorAll(".pagination-item");
    paginationBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        const activeBtn = steps.querySelector(".pagination-item.active");
        if (activeBtn) {
          activeBtn.classList.remove("active");
        }
        btn.classList.add("active");

        stepsSwiper.slideTo(index);
      });
    });
  }
};
