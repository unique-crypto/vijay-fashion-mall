// Redirect to home page after 3 seconds
setTimeout(function() {
    window.location.href = "home.html";
}, 3000);
// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}