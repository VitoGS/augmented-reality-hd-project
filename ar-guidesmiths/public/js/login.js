
const email = document.getElementById('email');
const form = document.getElementById('login-form');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (!!email.value) {
    console.log('obj');
    window.location.href = `/grattitud?email=${email.value}`;
  }
});
