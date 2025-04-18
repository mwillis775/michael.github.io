document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // Accessibility enhancement - add focus styles that match hover styles
    const interactiveElements = document.querySelectorAll('a, button, input, .family-card');
    interactiveElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.classList.add('focused');
        });
        element.addEventListener('blur', () => {
            element.classList.remove('focused');
        });
    });

    // Placeholder for featured families rotation
    function rotateFeaturedFamilies() {
        console.log('Featured families would rotate here');
    }

    // Placeholder for image lazy loading
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            // This would implement lazy loading for images
        });
    }

    // Helper function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add animation to elements when they come into view
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
    }

    // Listen for scroll events to trigger animations
    window.addEventListener('scroll', animateOnScroll);

    // Call initial animations
    animateOnScroll();
});