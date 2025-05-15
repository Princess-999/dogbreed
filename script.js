// Add smooth scrolling for better user experience
document.addEventListener('DOMContentLoaded', () => {
    // Fade in breed cards on scroll
    const breedCards = document.querySelectorAll('.breed-card');
    
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    breedCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Add click event to breed cards
    breedCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('clicked');
            setTimeout(() => card.classList.remove('clicked'), 200);
        });
    });

    const breedButtons = document.querySelectorAll('.breed-btn');
    const breedInfos = document.querySelectorAll('.breed-info');

    // Show the first breed by default
    breedInfos[0].classList.add('active');
    breedButtons[0].classList.add('active');

    breedButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and breed infos
            breedButtons.forEach(btn => btn.classList.remove('active'));
            breedInfos.forEach(info => info.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show the corresponding breed info
            const breedId = button.getAttribute('data-breed');
            const breedInfo = document.getElementById(breedId);
            breedInfo.classList.add('active');

            // Smooth scroll to the breed info
            breedInfo.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });

    // Add hover effect to breed info sections
    breedInfos.forEach(info => {
        info.addEventListener('mouseenter', () => {
            info.style.transform = 'scale(1.02)';
            info.style.transition = 'transform 0.3s ease';
        });

        info.addEventListener('mouseleave', () => {
            info.style.transform = 'scale(1)';
        });
    });
}); 