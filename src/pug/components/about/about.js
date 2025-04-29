export const about = () => {
  const about = document.querySelector(".about");

  if (about) {
    const info = about.querySelector(".info");
    const rows = info.querySelectorAll(".row ");
    rows.forEach((row) => {
      const circlesContainer = row.querySelectorAll(".circles");
      if (circlesContainer.length) {
        circlesContainer.forEach((container) => {
          container.innerHTML = "";
          for (let i = 0; i < 8; i++) {
            const circle = document.createElement("div");
            circle.classList.add("circle");
            container.appendChild(circle);
          }
        });
      }
      const linesContainer = row.querySelectorAll(".lines");
      if (linesContainer.length) {
        linesContainer.forEach((container) => {
          container.innerHTML = "";
          for (let i = 0; i < 39; i++) {
            const line = document.createElement("div");
            line.classList.add("line");
            container.appendChild(line);
          }
        });
      }
    });
  }
};
