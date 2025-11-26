(function () {
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (event) => {
      const success = form.querySelector('[data-success]');
      if (success) {
        success.hidden = false;
        setTimeout(() => (success.hidden = true), 4000);
      }
    });
  }

  const header = document.querySelector('.site-header');
  if (header) {
    const updateHeader = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 4);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }
})();
