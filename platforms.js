// scripts/platforms.js - Orb Animation for Background (Adjusted)
function initPlatforms() {
  const canvas = document.getElementById('orb-canvas'); // Changed to #orb-canvas
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const orbs = [];
  const orbCount = 5;

  class Orb {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 20 + 10;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.opacity = Math.random() * 0.3 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(46, 204, 113, ${this.opacity})`;
      ctx.shadowBlur = 20;
      ctx.shadowColor = 'rgba(46, 204, 113, 0.5)';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < orbCount; i++) {
    orbs.push(new Orb());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    orbs.forEach(orb => {
      orb.update();
      orb.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Export for main.js
window.initPlatforms = initPlatforms;