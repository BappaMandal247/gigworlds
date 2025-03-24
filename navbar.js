// scripts/navbar.js - Navbar Functionality
function initNavbar() {
  const logo = document.querySelector(".logo");
  const navLinks = document.querySelectorAll(".nav-links a");

  // Logo hover-3d toggle on click
  logo.addEventListener("click", () => {
    logo.classList.toggle("hover-3d-active");
  });

  // Nav links hover-3d effect on click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("hover-3d-active"));
      link.classList.add("hover-3d-active");
    });
  });

  // Responsive logo globe toggle
  function updateLogo() {
    if (window.innerWidth <= 600) {
      logo.classList.add("globe-active");
    } else {
      logo.classList.remove("globe-active");
    }
  }

  window.addEventListener("resize", updateLogo);
  updateLogo(); // Initial call
}

// Export for main.js
window.initNavbar = initNavbar;