const sidemenu = document.getElementById('sidemenu');
function openmenu() {
  sidemenu.style.right = '0';
}
function closemenu() {
  sidemenu.style.right = '-300px';
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

const emailLabel = document.getElementById('email-label');
const emailFiled = document.getElementById('email-field');
const emailError = document.getElementById('email-error');

function validateEmail() {
  emailLabel.style.bottom = "45px";

  if (!emailFiled.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailError.innerHTML = 'Please enter a valid email';
    return false;
  }
  emailError.innerHTML = '';
  return true;
}
