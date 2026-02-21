const fontToggleBtn = document.querySelector("[data-font-toggle]");
const htmlElement = document.documentElement;

fontToggleBtn.addEventListener("click", () => {
  const isUsingInter = htmlElement.classList.contains("font-sans");

  if (isUsingInter) {
    // Switch to Lexend
    htmlElement.classList.remove("font-sans");
    htmlElement.classList.add("font-lexend");
    fontToggleBtn.textContent = "Revert to default font";
  } else {
    // Switch back to Inter
    htmlElement.classList.remove("font-lexend");
    htmlElement.classList.add("font-sans");
    fontToggleBtn.textContent = "Change font to Lexend";
  }
});
