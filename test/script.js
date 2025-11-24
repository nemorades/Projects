const bookingButtons = document.querySelectorAll('#bookNav, #bookHero, #bookCta');
const contactForm = document.querySelector('#contactForm');
const formNote = document.querySelector('#formNote');

bookingButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailField = contactForm.elements.email;
  if (!emailField.value.trim()) return;

  formNote.textContent = 'Thanks for joining! Watch your inbox for glow notes.';
  formNote.classList.add('contact__note--success');
  emailField.value = '';
});
