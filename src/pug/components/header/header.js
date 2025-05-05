export const header = () => {
  const header = document.querySelector(".header");
  const address = header.querySelector(".address");
  console.log(address.textContent);
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
};
