// scripts/animations.js - Bubble Background Animation
function initAnimations() {
  const canvas = document.getElementById("bubble-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Bubble object constructor
  class Bubble {
    constructor() {
      this.radius = Math.random() * 20 + 10; // 10-30px
      this.x = Math.random() * (canvas.width - this.radius * 2 - 8) + this.radius + 4;
      this.y = Math.random() * (canvas.height - this.radius * 2 - 8) + this.radius + 4;
      this.dx = (Math.random() - 0.5) * 0.5; // -0.25 to 0.25
      this.dy = (Math.random() - 0.5) * 0.5; // -0.25 to 0.25
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(46, 204, 113, 0.3)`; // #2ecc71 with 0.3 opacity
      ctx.fill();
      ctx.closePath();
    }

    update() {
      this.x += this.dx;
      this.y += this.dy;

      // Bounce off edges with 4px buffer
      if (this.x + this.radius > canvas.width - 4 || this.x - this.radius < 4) {
        this.dx = -this.dx;
      }
      if (this.y + this.radius > canvas.height - 4 || this.y - this.radius < 4) {
        this.dy = -this.dy;
      }

      this.draw();
    }
  }

  let bubbles = [];
  function initBubbles() {
    bubbles = [];
    const bubbleCount = Math.max(10, Math.floor(window.innerWidth / 100));
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push(new Bubble());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach(bubble => bubble.update());
    requestAnimationFrame(animate);
  }

  // Initial setup
  initBubbles();
  animate();

  // Resize handler
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initBubbles(); // Reinitialize on resize
  });
}

// Export for main.js
window.initAnimations = initAnimations;