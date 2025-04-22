document.addEventListener("DOMContentLoaded", () => {
  let faqItems = document.querySelectorAll(".faq-items");

  faqItems.forEach((item) => {
    let svg_plus = item.querySelector(".svg-plus");
    let svg_minus = item.querySelector(".svg-minus");
    let dropdown = item.querySelector(".dropdown");

    svg_plus.addEventListener("click", () => {
      dropdown.classList.add("show");
      svg_plus.style.display = "none";
      svg_minus.style.display = "block";
    });

    svg_minus.addEventListener("click", () => {
      dropdown.classList.remove("show");
      svg_minus.style.display = "none";
      svg_plus.style.display = "block";
    });
  });
});
