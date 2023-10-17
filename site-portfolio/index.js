const buttons = document.querySelectorAll("[data-info-target]");
const infoElements = document.querySelectorAll(".info-exp > div");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-info-target");
    infoElements.forEach((infoElement) => {
      infoElement.style.display =
        infoElement.id === targetId ? "block" : "none";
    });
  });
});

feather.replace();

AOS.init({
  duration: 1200,
})

