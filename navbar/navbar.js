const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
