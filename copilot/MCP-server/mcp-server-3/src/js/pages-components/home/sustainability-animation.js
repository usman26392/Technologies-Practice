

export default function sustainabilityAnimation() {
    document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('.sustainability-sec');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin
            threshold: 0.3 // Trigger when 10% of the target is visible
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    });
  
}
