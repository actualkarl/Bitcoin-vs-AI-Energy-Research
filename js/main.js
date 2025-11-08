/* ============================================
   Bitcoin vs AI Power Dashboard - Main JS
   Interactive features and animations
   ============================================ */

/**
 * Number count-up animation
 * Animates numbers from 0 to target value with easing
 */
function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();

    function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }

    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const current = Math.floor(start + (target - start) * easedProgress);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = target;
        }
    }

    requestAnimationFrame(updateNumber);
}

/**
 * Initialize summary card animations
 * Animates the large numbers on page load
 */
function initSummaryCards() {
    const cards = document.querySelectorAll('.summary-card .card-number');

    // Delay slightly to ensure cards are visible
    setTimeout(() => {
        cards.forEach((card, index) => {
            const target = parseInt(card.getAttribute('data-target'));
            // Stagger animations slightly for each card
            setTimeout(() => {
                animateNumber(card, target, 2000);
            }, index * 150);
        });
    }, 300);

    console.log('✅ Summary card animations initialized');
}

/**
 * Intersection Observer for scroll-triggered animations
 * Elements fade in when they enter the viewport
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Unobserve after animation to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    console.log('✅ Scroll animations initialized for', animatedElements.length, 'elements');
}

/**
 * Smooth scroll to anchor links
 * Enhances navigation experience
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') {
                return;
            }

            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log('✅ Smooth scroll initialized');
}

/**
 * Dark mode toggle (placeholder for Phase 2)
 */
function initDarkModeToggle() {
    const toggle = document.getElementById('darkModeToggle');

    if (!toggle) {
        return; // Not implemented yet
    }

    // Load saved preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    toggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Update toggle icon
        toggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
    });

    console.log('✅ Dark mode toggle initialized');
}

/**
 * Add loading state management
 */
function showLoadingState() {
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach(container => {
        container.innerHTML = '<div class="loading">Loading chart...</div>';
    });
}

function hideLoadingState() {
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(el => el.remove());
}

/**
 * Responsive navigation menu toggle (for mobile)
 */
function initMobileMenu() {
    // Placeholder for future mobile menu implementation
    // Not needed for MVP as header is simple
    console.log('ℹ️ Mobile menu: Not implemented (not required for current design)');
}

/**
 * Log dashboard statistics
 */
function logDashboardStats() {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('⚡ Bitcoin vs AI Power Dashboard');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📊 Dashboard initialized successfully');
    console.log('🔋 Bitcoin 2025:', powerData.bitcoin.actual[powerData.bitcoin.actual.length - 1], 'TWh');
    console.log('🤖 AI 2025:', powerData.ai.total[powerData.ai.total.length - 1], 'TWh');
    console.log('🌍 Combined:',
        powerData.bitcoin.actual[powerData.bitcoin.actual.length - 1] +
        powerData.ai.total[powerData.ai.total.length - 1], 'TWh');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

/**
 * Handle errors gracefully
 */
window.addEventListener('error', (event) => {
    console.error('❌ Dashboard error:', event.error);
});

/**
 * Initialize all dashboard features
 */
function initDashboard() {
    console.log('🚀 Initializing dashboard...');

    // Core features (Phase 1)
    initSummaryCards();
    initScrollAnimations();
    initSmoothScroll();

    // Optional features
    initDarkModeToggle();
    initMobileMenu();

    // Log stats
    logDashboardStats();

    // Hide any loading states
    hideLoadingState();

    console.log('✅ Dashboard initialization complete!');
}

/**
 * Performance monitoring (optional)
 */
function logPerformance() {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

        console.log('⚡ Page load time:', (pageLoadTime / 1000).toFixed(2), 'seconds');
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initDashboard();

        // Log performance after page fully loads
        window.addEventListener('load', logPerformance);
    });
} else {
    // DOM already loaded
    initDashboard();
    logPerformance();
}

/**
 * Utility: Format large numbers with commas
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Utility: Calculate percentage change
 */
function calculatePercentageChange(oldValue, newValue) {
    return (((newValue - oldValue) / oldValue) * 100).toFixed(1);
}

/**
 * Export utilities for use in console or other scripts
 */
window.dashboardUtils = {
    formatNumber,
    calculatePercentageChange,
    animateNumber
};
