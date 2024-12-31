$(document).ready(function () {
    $('.btn-toggle-menu').click(function () {
        $(this).toggleClass('open');
        $('.navbar-menu').toggleClass('open');
        $('.header').toggleClass('open');
    });
});

document.querySelectorAll('.faq-title button').forEach((button) => {
    button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const content = button.closest('.faq-item').querySelector('.faq-content');
        // Close all open FAQ items
        document.querySelectorAll('.faq-title button').forEach((btn) => {
            btn.setAttribute('aria-expanded', 'false');
            btn.closest('.faq-item').querySelector('.faq-content').hidden = true;
        });
        // Open the clicked FAQ item
        if (!isExpanded) {
            button.setAttribute('aria-expanded', 'true');
            content.hidden = false;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
    // Toggle submenus and add .open class
    submenuToggles.forEach((toggle) => {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            const parentLi = toggle.closest('li');
            const isOpen = parentLi.classList.contains('open');

            // Close all submenus
            document.querySelectorAll('.nav-links .has-submenu').forEach((li) => {
                li.classList.remove('open');
            });

            // Toggle current submenu
            if (!isOpen) {
                parentLi.classList.add('open');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('visible');
            scrollToTopButton.classList.remove('hidden');
        } else {
            scrollToTopButton.classList.add('hidden');
            scrollToTopButton.classList.remove('visible');
        }
    });

    // Smooth scroll to top on button click
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});
