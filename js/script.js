// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#home') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Add click animations to buttons
document.querySelectorAll('.cta-button, .play-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
    });
});

// Listen to play button clicks
document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const track = this.getAttribute('data-track') || 'Track';
        alert(`🎵 Now playing: ${track}\n\nConnect to Spotify, Apple Music, or YouTube for full playback!`);
    });
});

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('.newsletter-input').value;
        
        // Using Mailchimp API (you would need to set up)
        // For now, show success message
        alert(`✅ Thanks for subscribing with ${email}!\n\n📧 Check your inbox for exclusive content!`);
        this.reset();
        
        // TODO: Connect to Mailchimp API or email service
        // Example with Mailchimp:
        // Send to: https://your-mailchimp-list.us1.list-manage.com/subscribe/post
    });
}

// Contact form validation
const contactLink = document.querySelector('.contact-link');
if (contactLink) {
    contactLink.addEventListener('click', function(e) {
        // Email link works natively
        console.log('Opening email client...');
    });
}
