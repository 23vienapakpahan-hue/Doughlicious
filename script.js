document.addEventListener('DOMContentLoaded', () => {
    
    // ------------------------------------------
    // 1. Mobile Menu Toggle
    // ------------------------------------------
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.getElementById('mobile-menu');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            // Change icon to X when active
            menuToggle.innerHTML = mobileNav.classList.contains('active') ? '&times;' : '&#9776;';
        });

        // Close menu when a link is clicked
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                menuToggle.innerHTML = '&#9776;';
            });
        });
    }


    // ------------------------------------------
    // 2. Q&A Accordion Functionality
    // ------------------------------------------
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                // Close panel
                panel.style.maxHeight = null;
            } else {
                // Open panel
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
    
    // ------------------------------------------
    // 3. Form Submission Handling (Contact)
    // ------------------------------------------
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // English Alert Message
            alert('Your message has been sent! Doughlicious will reply soon. Thank you!');
            contactForm.reset();
        });
    }

    // ------------------------------------------
    // 4. Scroll Reveal Animation (Intersection Observer)
    // ------------------------------------------
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

    const observerOptions = {
        root: null, 
        threshold: 0.1, 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    scrollRevealElements.forEach(el => {
        observer.observe(el);
    });

});