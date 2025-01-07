// Mobile Navigation Toggle
const mobileNavIcon = document.querySelector('.fa-bars');
const overlay = document.getElementById('overlay');
const closeNavIcon = document.querySelector('.fa-times');

mobileNavIcon.addEventListener('click', () => {
    overlay.classList.add('show');
});

closeNavIcon.addEventListener('click', () => {
    overlay.classList.remove('show');
});

// Scroll Animations
const fadeInElements = document.querySelectorAll('.card, .hero, footer');

function fadeInOnScroll() {
    fadeInElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 100) {
            element.classList.add('fade-in-visible');
        }
    });
}

// Listen to scroll events
window.addEventListener('scroll', fadeInOnScroll);

// Initial check in case elements are already in view
fadeInOnScroll();
