// Animate skill bars khi scroll vào viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-progress').forEach(bar => {
    observer.observe(bar);
});