// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact form validation
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if(name === '' || email === '' || message === '') {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.style.color = 'red';
  } else {
    formMessage.textContent = 'Form submitted successfully!';
    formMessage.style.color = 'green';
    form.reset();
  }
});
