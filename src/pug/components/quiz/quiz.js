export const quiz = () => {
  const quiz = document.querySelector(".quiz");
  if (quiz) {
    const steps = quiz.querySelectorAll(".quiz-step");
    const quizCounter = quiz.querySelector(".counter");
    const quizLine = quiz.querySelector(".line");
    const currentNumber = quizCounter.querySelector(".current");
    const totalNumber = quizCounter.querySelector(".total");

    const changeLineProgress = () => {
      quizLine.style.width = `${
        (+currentNumber.textContent / +totalNumber.textContent) * 100
      }%`;
    };
    changeLineProgress();
    steps.forEach((step) => {
      const nextBtn = step.querySelector(".next-step");
      const prevBtn = step.querySelector(".prev-step");
      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          const currentStep = quiz.querySelector(".quiz-step.active");
          if (currentStep) {
            const nextStep = quiz.querySelector(
              `.quiz-step[data-step="${+currentStep.dataset.step + 1}"]`
            );
            nextStep.classList.add("active");
            currentStep.classList.remove("active");
            currentNumber.innerHTML = nextStep.dataset.step;
            changeLineProgress();
          }
        });
      }
      if (prevBtn) {
        prevBtn.addEventListener("click", () => {
          const currentStep = quiz.querySelector(".quiz-step.active");
          if (currentStep) {
            const prevStep = quiz.querySelector(
              `.quiz-step[data-step="${+currentStep.dataset.step - 1}"]`
            );
            prevStep.classList.add("active");
            currentStep.classList.remove("active");
            currentNumber.innerHTML = prevStep.dataset.step;
            changeLineProgress();
          }
        });
      }
    });
  }
};
