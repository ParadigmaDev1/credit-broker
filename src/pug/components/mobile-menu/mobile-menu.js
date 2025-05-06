export const mobileMenu = () => {
  const header = document.querySelector(".header");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = mobileMenu.querySelector(".close-btn");
  const links = mobileMenu.querySelectorAll(".header-link");
  const scrollObjs = document.querySelectorAll(".scroll-obj");

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

  window.addEventListener("click", (e) => {
    if (e.target === mobileMenu) mobileMenu.classList.remove("active");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      const currentScrollObj = Array.from(scrollObjs).find((obj) => {
        return obj.id == link.getAttribute("data-link");
      });
      window.scrollTo({
        top: currentScrollObj.offsetTop - header.offsetHeight / 2,
        left: 0,
        behavior: "smooth",
      });
    });
  });
};
