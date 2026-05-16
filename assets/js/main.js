document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar-custom');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                navbar.classList.add('shadow-sm');
                navbar.classList.remove('bg-transparent');
            } else {
                navbar.classList.remove('scrolled');
                navbar.classList.remove('shadow-sm');
                navbar.classList.add('bg-transparent');
            }
        });
    }

    // Active link highlighting
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Check if we are on root or matching the href
        if (currentPath.endsWith(href) || (currentPath.endsWith('/') && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Mobile menu close on click
    const navItems = document.querySelectorAll('.navbar-collapse .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
        // Bootstrap 5 is loaded globally via CDN in the HTML
        if (typeof bootstrap !== 'undefined') {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            navItems.forEach(item => {
                item.addEventListener('click', () => {
                    if (navbarCollapse.classList.contains('show')) {
                        bsCollapse.hide();
                    }
                });
            });
        }
    }
});
