// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu');

mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
});

closeMenuBtn?.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

// Close menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show feedback (you can add a toast notification here)
        console.log('Copied to clipboard:', text);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const html = document.documentElement;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
html.classList.toggle('light', currentTheme === 'light');
updateThemeIcon(currentTheme);

function toggleTheme() {
    const isLight = html.classList.contains('light');
    if (isLight) {
        html.classList.remove('light');
        localStorage.setItem('theme', 'dark');
        updateThemeIcon('dark');
    } else {
        html.classList.add('light');
        localStorage.setItem('theme', 'light');
        updateThemeIcon('light');
    }
}

function updateThemeIcon(theme) {
    const icons = document.querySelectorAll('#theme-toggle i, #theme-toggle-mobile i');
    icons.forEach(icon => {
        if (theme === 'light') {
            icon.className = 'fas fa-moon text-sm';
        } else {
            icon.className = 'fas fa-sun text-sm';
        }
    });
}

themeToggle?.addEventListener('click', toggleTheme);
themeToggleMobile?.addEventListener('click', toggleTheme);
