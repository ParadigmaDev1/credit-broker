export const header = () => {
  const header = document.querySelector(".header");
  const address = header.querySelector(".address");
  const burger = header.querySelector(".burger");
  const mobileMenu = document.querySelector(".mobile-menu");

  const links = header.querySelectorAll(".header-link");
  const scrollObjs = document.querySelectorAll(".scroll-obj");

  if (window.innerWidth > 767) {
    address.textContent = "Москва и Московская область";
  } else {
    address.textContent = "Москва и МО";
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
      address.textContent = "Москва и Московская область";
    } else {
      address.textContent = "Москва и МО";
    }
  });

  burger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
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
