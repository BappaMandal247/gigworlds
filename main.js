// scripts/main.js - Core JavaScript Functionality
document.addEventListener("DOMContentLoaded", () => {
  try {
    // Initialize theme (moved to theme.js, triggered here)
    initTheme();

    // Fade-in observer for sections
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeElements.forEach((el) => observer.observe(el));

    // Back-to-top button
    const backToTop = document.querySelector(".back-to-top");
    if (backToTop) {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          backToTop.classList.add("visible");
        } else {
          backToTop.classList.remove("visible");
        }
      };

      window.addEventListener("scroll", handleScroll);
      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      // Cleanup
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }

    // Initialize other modules with error handling
    const initModules = [
      { name: "Bubbles", fn: initBubbles },
      { name: "Navbar", fn: initNavbar },
      { name: "Buttons", fn: initButtons },
      { name: "Platforms", fn: initPlatforms },
      { name: "Toggle", fn: initToggle },
      { name: "Footer", fn: initFooter }
    ];

    initModules.forEach(({ name, fn }) => {
      try {
        fn();
      } catch (error) {
        console.error(`Error initializing ${name} module:`, error);
        // Optionally show user-friendly error message
        const errorMessage = document.createElement("div");
        errorMessage.className = "error-message";
        errorMessage.textContent = `There was an error loading some features. Please refresh the page.`;
        document.body.appendChild(errorMessage);
      }
    });

  } catch (error) {
    console.error("Error in main initialization:", error);
    // Show user-friendly error message
    const errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    errorMessage.textContent = "There was an error loading the page. Please refresh.";
    document.body.appendChild(errorMessage);
  }
});

// Placeholder functions (defined in respective files)
function initTheme() {
  // Defined in theme.js
}

function initBubbles() {
  // Defined in animations.js
}

function initNavbar() {
  // Defined in navbar.js
}

function initButtons() {
  // Defined in buttons.js
}

function initPlatforms() {
  // Defined in platforms.js
}

function initToggle() {
  // Defined in toggle.js
}

function initFooter() {
  // Defined in footer.js
}