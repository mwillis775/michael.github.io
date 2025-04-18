// Plant Families Explorer - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // Search functionality
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    const familyLinks = document.querySelectorAll('.main-nav a, .family-card a'); // Include links from family cards

    if (searchBar && searchButton) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            performSearch(searchBar.value.trim().toLowerCase());
        });

        searchBar.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(searchBar.value.trim().toLowerCase());
            }
        });
    }

    // Add a search results page redirection
    function performSearch(searchTerm) {
        if (!searchTerm) {
            alert('Please enter a search term.');
            return;
        }

        // Dynamically fetch family links from the families directory
        const familyLinks = Array.from(document.querySelectorAll('a[href^="families/"]')).map(link => ({
            name: link.textContent.trim(),
            url: link.getAttribute('href')
        }));

        // Find matches
        const matches = familyLinks.filter(link => link.name.toLowerCase().includes(searchTerm));

        if (matches.length === 1) {
            // Redirect to the exact match
            window.location.href = matches[0].url;
        } else if (matches.length > 1) {
            // Show the top 3 matches
            const topMatches = matches.slice(0, 3);
            const message = `Did you mean:\n${topMatches.map(match => `- ${match.name} (${match.url})`).join('\n')}`;
            alert(message);
        } else {
            alert('No results found. Please try a different search term.');
        }
    }

    // Placeholder for phylogenetic tree interaction
    const phylogenyPreview = document.querySelector('.phylogeny-preview');
    if (phylogenyPreview) {
        phylogenyPreview.addEventListener('click', function() {
            window.location.href = 'phylogenetic-tree.html';
        });
    }

    // Accessibility enhancement - add focus styles that match hover styles
    const interactiveElements = document.querySelectorAll('a, button, input, .family-card');
    interactiveElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        element.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });

    // Placeholder for featured families rotation
    function rotateFeaturedFamilies() {
        console.log('Featured families would rotate here');
    }

    // Initialize tooltips for botanical terms
    function initTooltips() {
        const botanicalTerms = document.querySelectorAll('.botanical-term');
        botanicalTerms.forEach(term => {
            // This would initialize tooltips for botanical terms
        });
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
            console.log('Checking element:', element); // Debug log
            if (isInViewport(element) && !element.classList.contains('animated')) {
                console.log('Animating element:', element); // Debug log
                element.classList.add('animated');
            }
        });
    }

    // Listen for scroll events to trigger animations
    window.addEventListener('scroll', animateOnScroll);

    // Call initial animations
    animateOnScroll();
});
