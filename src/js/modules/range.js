export const range = () => {
  const sliderWrapper = document.querySelectorAll(".slider-wrapper ");
  if (sliderWrapper.length) {
    sliderWrapper.forEach((wrapper) => {
      const sliderInput = wrapper.querySelector(".slider-input");
      const sliderTrack = wrapper.querySelector(".slider-track");
      const sliderThumb = wrapper.querySelector(".slider-thumb");
      const textInput = wrapper.parentElement.querySelector(".value-input");
      console.log(textInput);
      const minValue = +sliderInput.min || 0;
      const maxValue = +sliderInput.max || 100;

      const colorStops = [
        { r: 138, g: 184, b: 255 },
        { r: 251, g: 189, b: 30 },
        { r: 251, g: 110, b: 30 },
        { r: 231, g: 26, b: 26 },
      ];

      const setSliderThumbImageColor = (progress) => {
        const index = ((colorStops.length - 1) * progress) / 100;
        const startIndex = Math.floor(index);
        const endIndex = Math.ceil(index);

        const startColor = colorStops[startIndex];
        const endColor = colorStops[endIndex];

        const percentage = index - startIndex;

        const [r, g, b] = [
          Math.round(startColor.r + (endColor.r - startColor.r) * percentage),
          Math.round(startColor.g + (endColor.g - startColor.g) * percentage),
          Math.round(startColor.b + (endColor.b - startColor.b) * percentage),
        ];
      };

      const updateSlider = () => {
        const progress = (100 * +sliderInput.value) / (maxValue - minValue);
        wrapper.style.setProperty("--slider-progress", progress);
        setSliderThumbImageColor(progress);
      };

      sliderInput.addEventListener("input", updateSlider);

      updateSlider();

      let pointerHoldingRightTimer;
      let isTimerRunning = false;

      const detectPointerHoldingRight = (event) => {
        const isSliderAtMax = +sliderInput.value === maxValue;

        const sliderRect = wrapper.getBoundingClientRect();
        const pointerX = event.clientX;
        const offset = 40;
        const isPointerOnSliderRight = pointerX >= sliderRect.right + offset;

        if (isSliderAtMax && isPointerOnSliderRight) {
          if (!isTimerRunning) {
            isTimerRunning = true;
            pointerHoldingRightTimer = setTimeout(() => {
              sliderInput.removeEventListener("pointerdown", detectSecret);
              colorStops.push({ r: 34, g: 0, b: 0 });
              wrapper.classList.add("unlocked");
              sliderThumb.addEventListener("animationend", () => {
                sliderThumb.classList.remove("play-explosion");
              });
              sliderThumb.classList.add("play-explosion");
              setSliderThumbImageColor(100);
            }, 1000);
          }
        } else {
          clearTimeout(pointerHoldingRightTimer);
          isTimerRunning = false;
        }
      };

      const detectSecret = () => {
        window.addEventListener("pointermove", detectPointerHoldingRight);
        sliderInput.addEventListener("pointerup", () => {
          window.removeEventListener("pointermove", detectPointerHoldingRight);
          clearTimeout(pointerHoldingRightTimer);
        });
      };

      sliderInput.addEventListener("pointerdown", detectSecret);

      sliderInput.addEventListener("input", (e) => {
        const rawValue = e.target.value.replace(/[^\d]/g, "");
        const numericValue = parseInt(rawValue || 0);

        textInput.value = numericValue.toLocaleString("ru-RU");

        sliderInput.value = numericValue;
      });

      textInput.addEventListener("input", (e) => {
        const rawValue = e.target.value.replace(/[^\d]/g, "");
        const numericValue = parseInt(rawValue || 0);

        textInput.value = numericValue.toLocaleString("ru-RU");

        sliderInput.value = numericValue;
        updateSlider();
      });
    });
  }
};
