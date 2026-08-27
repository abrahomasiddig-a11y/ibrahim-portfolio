const mobileMenu = document.getElementById('mobile-menu');
const navContainer = document.querySelector('.nav-container');

// 1. Toggle menu when clicking the hamburger icon
mobileMenu.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevents the click from triggering the document listener below
  mobileMenu.classList.toggle('is-active');
  navContainer.classList.toggle('active');
});

// 2. Prevent clicks inside the open nav menu from closing it prematurely 
// (Remove or comment out this block if you want the menu to close even when clicking blank space inside the menu drawer)
navContainer.addEventListener('click', (e) => {
  // If the user clicks a link or button inside the menu, let the document listener handle closing it
  if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
    return;
  }
  e.stopPropagation(); 
});

// 3. Automatically close the menu on ANY click/tap across the page
document.addEventListener('click', () => {
  if (navContainer.classList.contains('active')) {
    mobileMenu.classList.remove('is-active');
    navContainer.classList.remove('active');
  }
});

