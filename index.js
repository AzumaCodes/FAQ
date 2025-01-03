document.addEventListener("DOMContentLoaded", () => {
  const faqContents = document.querySelectorAll(".faq-content");

  faqContents.forEach((faq) => {
    const question = faq.querySelector(".faq-question");
    const answer = faq.querySelector(".faq-answer");
    const icon = faq.querySelector(".image");

    question.addEventListener("click", () => {
      faq.classList.toggle("active");

      if (faq.classList.contains("active")) {
        answer.style.display = "block";
        icon.src = "./assets/images/icon-minus.svg";
      } else {
        answer.style.display = "none";
        icon.src = "./assets/images/icon-plus.svg";
      }
    });
  });
});
