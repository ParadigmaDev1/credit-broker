export const why = () => {
  const why = document.querySelector(".why");

  if (why) {
    const whyAlerts = why.querySelectorAll(".why-alert");
    whyAlerts.forEach((alert) => {
      const circlesContainer = alert.querySelector(".circles");
      circlesContainer.innerHTML = "";
      for (let i = 0; i < 14; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.setAttribute("data-anim", "anim-item");
        circlesContainer.appendChild(circle);
      }
    });
  }
};
