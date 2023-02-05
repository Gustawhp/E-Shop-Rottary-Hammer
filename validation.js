import {
  userBlank,
  userMore,
  emailBlank,
  emailValid,
  passBlank,
  passMore,
  pass2Blank,
  passMatch
} from './changeLanguage.js';

const form = document.getElementById('form-signup');
const username = document.getElementById('user-name-signup');
const email = document.getElementById('email-signup');
const password = document.getElementById('password-signup');
const password2 = document.getElementById('password-check-signup');

let usersAdd = JSON.parse(localStorage.getItem('Users')) || [];

form.addEventListener('submit', e => {
  e.preventDefault();

  if (checkInputs()) {
    usersAdd.push({
      id: crypto.randomUUID(),
      username: username.value,
      email: email.value,
      pass: password.value,
      pass2: password2.value
    });
    localStorage.setItem('Users', JSON.stringify(usersAdd));
  }
});

export function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const password2Value = password2.value;

  let check = true;

  if (usernameValue === '') {
    setError(username, userBlank);
    check = false;
  } else if (!isUsername(usernameValue)) {
    setError(username, userMore);
    check = false;
  } else {
    setSuccess(username);
  }

  if (emailValue === '') {
    setError(email, emailBlank);
    check = false;
  } else if (!isEmail(emailValue)) {
    setError(email, emailValid);
    check = false;
  } else {
    setSuccess(email);
  }

  if (passwordValue === '') {
    setError(password, passBlank);
    check = false;
  } else if (!isPassword(passwordValue)) {
    setError(password, passMore);
    check = false;
  } else {
    setSuccess(password);
  }

  if (password2Value === '') {
    setError(password2, pass2Blank);
    check = false;
  } else if (passwordValue !== password2Value) {
    setError(password2, passMatch);
    check = false;
  } else {
    setSuccess(password2);
  }
  return check;
}

function setError(input, message) {
  const formSignupControl = input.parentElement;
  const small = formSignupControl.querySelector('small');

  small.innerText = message;

  formSignupControl.className = 'form-signup-control error';
}

function setSuccess(input) {
  const formSignupControl = input.parentElement;
  formSignupControl.className = 'form-signup-control success';
}

function isUsername(username) {
  return /^[a-zA-Z0-9._-]{6,}$/.test(username);
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}
