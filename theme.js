// scripts/theme.js - Theme Management
function initTheme() {
  const htmlElement = document.documentElement;
  const savedTheme = localStorage.getItem("theme");

  // Set initial theme: use savedTheme or default to light
  if (savedTheme === "dark") {
    htmlElement.setAttribute("data-theme", "dark");
  } else {
    htmlElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  }

  // Add toggle listener
  const toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      if (newTheme === "dark") {
        htmlElement.setAttribute("data-theme", "dark");
      } else {
        htmlElement.removeAttribute("data-theme");
      }
      localStorage.setItem("theme", newTheme);
      updateToggleVisuals(newTheme); // Delegate to toggle.js
    });
  } else {
    console.warn("Theme toggle element (.theme-toggle) not found in the DOM.");
  }
}

function updateToggleVisuals(theme) {
  // Defined in toggle.js
}

// Export for main.js
window.initTheme = initTheme;