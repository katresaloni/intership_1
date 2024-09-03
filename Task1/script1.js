// Change navbar background color on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#755399'; // Change to darker color on scroll
    } else {
        navbar.style.backgroundColor = '#bac47e'; // Original color
    }
});





