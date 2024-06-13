document.addEventListener("DOMContentLoaded", function() {
    const tl = gsap.timeline();

    tl.fromTo(".type-me", { 
        width: "0",
    }, { 
        width: "870px",
        ease: "steppedEase.config(24)",
        duration: 5
    });
});

const showFormButton = document.getElementById('show-form');
const contactForm = document.getElementById('contact-form');

showFormButton.addEventListener('click', function() {
  contactForm.style.display = 'block';
  showFormButton.style.display = 'none';
});