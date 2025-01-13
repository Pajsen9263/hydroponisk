document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("mobile-menu");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active"); // Show/hide the menu
        menuToggle.classList.toggle("open"); // Animate the toggle button
    });
});
