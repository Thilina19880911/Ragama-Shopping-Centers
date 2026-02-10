// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

// Filter Shops
const filterBtns = document.querySelectorAll('.filter-btn');
const shopCards = document.querySelectorAll('.shop-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => {
            b.classList.remove('active', 'bg-accent', 'text-white');
            b.classList.add('bg-white', 'text-gray-600');
        });

        // Add active class to clicked button
        btn.classList.add('active', 'bg-accent', 'text-white');
        btn.classList.remove('bg-white', 'text-gray-600');

        const filter = btn.getAttribute('data-filter');

        shopCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                // Optional: Add fade-in animation
                card.classList.add('animate-fade-in');
            } else {
                card.style.display = 'none';
                card.classList.remove('animate-fade-in');
            }
        });
    });
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

