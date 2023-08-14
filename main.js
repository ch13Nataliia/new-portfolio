// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

// MENU SHOW
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// MENU HIDDEN

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

//  EMAILJS
const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  //serviceID - templateID - #form - publickey
  emailjs
    .sendForm(
      'service_yr3xy9e',
      'template_b8figkp',
      '#contact-form',
      '4lfpUhwPSyn3qFUK6',
    )
    .then(
      () => {
        contactMessage.textContent = 'Message sent successfully';
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);
// reset
        contactForm.reset();
      },
      () => {
        contactMessage.textContent = 'Message not sent (service error)';
      },
    );
};
contactForm.addEventListener('submit', sendEmail);


