// JavaScript for Mobile Menu Toggle
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.getElementById("navLinks");

// Add event listener to toggle the 'active' class
mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


