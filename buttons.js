// scripts/buttons.js - Button Animation Functionality
function initButtons() {
  console.log("buttons.js initialized");
  const buttons = document.querySelectorAll(".cta-main");

  buttons.forEach((button) => {
    const pointsWrapper = button.querySelector(".points_wrapper");
    if (!pointsWrapper) {
      console.log("No points_wrapper found in button:", button);
      return;
    }

    pointsWrapper.innerHTML = ""; // Clear existing points

    const dotCount = Math.floor(Math.random() * 11) + 5; // 5 to 15 dots
    console.log(`Generating ${dotCount} dots for button`);

    for (let i = 0; i < dotCount; i++) {
      const point = document.createElement("i");
      point.classList.add("point");

      const size = Math.random() * 3 + 2; // 2px to 5px
      point.style.width = `${size}px`;
      point.style.height = `${size}px`;

      const left = Math.random() * 100; // 0% to 100%
      point.style.left = `${left}%`;

      const bottom = Math.random() * -5; // -5px to 0px
      point.style.bottom = `${bottom}px`;

      const duration = Math.random() * 2 + 2; // 2s to 4s
      point.style.animationDuration = `${duration}s`;

      const delay = Math.random() * 1; // 0s to 1s
      point.style.animationDelay = `${delay}s`;

      pointsWrapper.appendChild(point);
    }
  });
}

// Export for main.js
window.initButtons = initButtons;