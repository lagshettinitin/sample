document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const toggleMenu = document.querySelector('.menu-toggle');
  
    // Toggle nav links on mobile
    if (toggleMenu) {
      toggleMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }
  });
  