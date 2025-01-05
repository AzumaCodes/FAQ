const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true";
    const content = document.getElementById(this.getAttribute("aria-controls"));

    // Toggle current accordion
    this.setAttribute("aria-expanded", !expanded);
    content.hidden = expanded;

    // Optionally collapse other accordions
    accordionBtns.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.setAttribute("aria-expanded", "false");
        const otherContent = document.getElementById(
          otherBtn.getAttribute("aria-controls")
        );
        otherContent.hidden = true;
      }
    });
  });
});
