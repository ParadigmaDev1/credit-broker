export const anim = () => {
  const svgAnim = document.querySelectorAll(".svg-anim");

  svgAnim.forEach((svg) => {
    const paths = svg.querySelectorAll(".svg-anim svg path");
    const circles = svg.querySelectorAll(".svg-anim svg circle");

    let observerStandart = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            svg.classList.add("active");

            anime({
              targets: paths,
              duration: 1500,
              delay: 800,
              easing: "easeInOutSine",
              strokeDashoffset: [anime.setDashoffset, 0],
            });
            anime({
              targets: circles,
              duration: 1500,
              delay: 800,
              easing: "easeInOutSine",
              strokeDashoffset: [anime.setDashoffset, 0],
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    observerStandart.observe(svg);
  });
  const animObjs = document.querySelectorAll("[data-anim='anim-obj']");
  animObjs.forEach((item) => {
    let observerStandart = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            item.style.transition = `0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
            item.classList.add("anim");
          }
        });
      },
      { threshold: 0.25 }
    );
    observerStandart.observe(item);
  });
  const animArrObjs = document.querySelectorAll("[data-anim='anim-arr-obj']");
  animArrObjs.forEach((obj) => {
    const animArrItem = obj.querySelectorAll("[data-anim='anim-item']");
    const childSpeed = +obj.dataset.childSpeed || 150;
    let observerStandart = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            obj.classList.add("anim");
            animArrItem.forEach((item, index) => {
              setTimeout(() => {
                item.style.transition = `0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
                item.classList.add("anim");
              }, index * childSpeed);
            });
          }
        });
      },
      { threshold: 0.25 }
    );
    observerStandart.observe(obj);
  });
  const animArrPrObjs = document.querySelectorAll(
    "[data-anim='anim-arr-pr-obj']"
  );
  animArrPrObjs.forEach((obj) => {
    const animArrItem = obj.querySelectorAll("[data-anim='anim-ch-item']");
    const childSpeed = +obj.dataset.childSpeed || 250;
    let observerStandart = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            obj.classList.add("anim");
            animArrItem.forEach((item, index) => {
              setTimeout(() => {
                item.style.transition = `0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
                item.classList.add("anim");
              }, index * childSpeed);
            });
          }
        });
      },
      { threshold: 0.25 }
    );
    observerStandart.observe(obj);
  });
};
