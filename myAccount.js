import {
  emailBlank,
  emailValid,
  passBlank,
  passMore,
  pass2Blank,
  passMatch,
  emailChanged,
  passChanged
} from './changeLanguage.js';

const changeEmail = document.querySelector('.change-email');
const changeEmailVisability = document.querySelector('.change-email-input');

changeEmail.addEventListener('click', function () {
  if (changeEmailVisability.style.display === 'block') {
    changeEmailVisability.style.display = 'none';
  } else {
    changeEmailVisability.style.display = 'block';
  }
});

const changePassword = document.querySelector('.change-password');
const changePasswordVisability = document.querySelector(
  '.change-password-input'
);

changePassword.addEventListener('click', function () {
  if (changePasswordVisability.style.display === 'block') {
    changePasswordVisability.style.display = 'none';
  } else {
    changePasswordVisability.style.display = 'block';
  }
});

const confirmEmail = document.getElementById('email-confirm');
const confirmPassword = document.getElementById('password2-confirm');
const newEmail = document.getElementById('email-my-account');
const newPassword = document.getElementById('password-check-my-account');
const newPassword2 = document.getElementById('password-check2-my-account');

confirmEmail.addEventListener('click', e => {
  e.preventDefault();
  if (checkNewEmail()) {
    const users = JSON.parse(localStorage.getItem('Users'));
    const newUsers = users.map(user => {
      if (localStorage.getItem('userId') === user.id) {
        return { ...user, email: newEmail.value };
      }
      return user;
    });
    localStorage.setItem('Users', JSON.stringify(newUsers));
  }
});

confirmPassword.addEventListener('click', e => {
  e.preventDefault();
  if (checkNewPassword()) {
    const users = JSON.parse(localStorage.getItem('Users'));
    const newUsers = users.map(user => {
      if (localStorage.getItem('userId') === user.id) {
        return { ...user, pass: newPassword.value, pass2: newPassword2.value };
      }
      return user;
    });
    localStorage.setItem('Users', JSON.stringify(newUsers));
  }
});

function checkNewEmail() {
  const newEmailValue = newEmail.value;

  let check = true;

  if (newEmailValue === '') {
    setNewError(newEmail, emailBlank);
    check = false;
  } else if (!isNewEmail(newEmailValue)) {
    setNewError(newEmail, emailValid);
    check = false;
  } else {
    setNewSuccess(newEmail, emailChanged);
    check = true;
  }
  return check;
}

function isNewEmail(newEmail) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    newEmail
  );
}

function checkNewPassword() {
  const newPasswordValue = newPassword.value;
  const newPassword2Value = newPassword2.value;

  let check = true;

  if (newPasswordValue === '') {
    setNewError(newPassword, passBlank);
    check = false;
  } else if (!isNewPassword(newPasswordValue)) {
    setNewError(newPassword, passMore);
    check = false;
  } else {
    setNewSuccess(newPassword, '');
  }

  if (newPassword2Value === '') {
    setNewError(newPassword2, pass2Blank);
    check = false;
  } else if (newPasswordValue !== newPassword2Value) {
    setNewError(newPassword2, passMatch);
    check = false;
  } else {
    setNewSuccess(newPassword2, passChanged);
  }
  return check;
}

function isNewPassword(newPassword) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(newPassword);
}

function setNewError(input, message) {
  const changeControl = input.parentElement;
  const small = changeControl.querySelector('small');

  small.innerText = message;

  changeControl.className = 'main-my-account-control error';
}

function setNewSuccess(input, message) {
  const changeControl = input.parentElement;
  const small = changeControl.querySelector('small');

  small.innerText = message;

  changeControl.className = 'main-my-account-control success';
}
