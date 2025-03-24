// scripts/toggle.js - Theme Toggle Initialization
function initToggle() {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) {
      console.warn("Theme toggle element (.theme-toggle) not found.");
      return;
    }
  
    // Initial visual state (CSS handles most of it)
    const currentTheme = localStorage.getItem('theme') || 'light';
    updateToggleVisuals(currentTheme);
  
    // Note: Click event is handled in theme.js to centralize theme logic
  }
  
  function updateToggleVisuals(theme) {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;
  
    // CSS already handles sun/moon opacity via [data-theme], so this is a placeholder
    // Future enhancement: Add JS-driven icon changes if needed
    console.log(`Toggle visuals updated for theme: ${theme}`);
  }
  
  // Export for main.js and theme.js
  window.initToggle = initToggle;
  window.updateToggleVisuals = updateToggleVisuals;