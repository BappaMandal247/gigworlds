// scripts/footer.js - Footer-Specific Scripts
function initFooter() {
  // Dynamically update the copyright year
  const copyrightElement = document.querySelector(".copyRightArea p");
  if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.textContent = `© ${currentYear} GigWorlds. All rights reserved.`;
  }

  // Add smooth scroll to footer links
  const footerLinks = document.querySelectorAll(".footer a");
  footerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
}

// Export for main.js
window.initFooter = initFooter;