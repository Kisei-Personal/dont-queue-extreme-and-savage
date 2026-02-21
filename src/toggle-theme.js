// 1. Grab the button and the HTML element
const themeToggleBtn = document.querySelector("[data-theme-toggle]");
const htmlElement = document.documentElement;

// 2. Check for saved user preference or system preference on load
if (
  localStorage.getItem("theme") === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  htmlElement.classList.add("dark");
  themeToggleBtn.textContent = "Remove invert mode"; // Optional text update
} else {
  htmlElement.classList.remove("dark");
  themeToggleBtn.textContent = "Add invert mode"; // Optional text update
}

// 3. Listen for clicks on your button
themeToggleBtn.addEventListener("click", function () {
  // Toggle the 'dark' class on the <html> element
  htmlElement.classList.toggle("dark");

  // Save the user's preference and update button text
  if (htmlElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggleBtn.textContent = "Remove invert mode";
  } else {
    localStorage.setItem("theme", "light");
    themeToggleBtn.textContent = "Add invert mode";
  }
});
