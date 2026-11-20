const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', function () {
  document.body.classList.toggle('dark');
});

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    status.textContent = 'Please fill in all the fields.';
    status.style.color = 'red';
    return;
  }

  if (!email.includes('@')) {
    status.textContent = 'Please enter a valid email address.';
    status.style.color = 'red';
    return;
  }

  status.textContent = 'Thank you! Your message looks good.';
  status.style.color = 'green';
  form.reset();
});