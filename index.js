document.addEventListener("DOMContentLoaded", function () {
  // Select all FAQ question buttons
  const faqButtons = document.querySelectorAll(".faq-question");

  // Iterate over each button and add an event listener for "click"
  faqButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Find the corresponding FAQ answer
      const faqAnswer = button.nextElementSibling;

      // Toggle the visibility of the answer
      faqAnswer.classList.toggle("show");

      // Toggle the visibility of the plus and minus icons
      const plusIcon = button.querySelector(".plus");
      const minusIcon = button.querySelector(".minus");
      plusIcon.classList.toggle("show"); // Hide plus icon when answer is visible
      minusIcon.classList.toggle("show"); // Show minus icon when answer is visible
    });
  });
});
