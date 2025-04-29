export const tabs = () => {
  const tabContainers = document.querySelectorAll("[data-tabs]");

  tabContainers.forEach((container) => {
    const tabButtons = container.querySelectorAll("[data-tab-button]");
    const tabContents = container.querySelectorAll("[data-tab-content]");

    tabButtons.forEach((button, index) => {
      button.dataset.tab = index + 1;
    });

    tabContents.forEach((content, index) => {
      content.dataset.tabContent = index + 1;
      content.classList.add("hide");
    });

    if (tabButtons.length > 0) {
      tabButtons[0].classList.add("active");
      tabContents[0].classList.remove("hide");
    }

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const tabNumber = button.dataset.tab;

        tabButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        tabContents.forEach((content) => {
          content.classList[
            content.dataset.tabContent === tabNumber ? "remove" : "add"
          ]("hide");
        });
      });
    });
  });
};
