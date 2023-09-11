const sidemenu = document.getElementById('sidemenu');
function openmenu() {
  sidemenu.style.right = '0';
}
function closemenu() {
  sidemenu.style.right = '-200px';
}
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
