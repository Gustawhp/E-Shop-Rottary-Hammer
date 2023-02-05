import { loginError } from "./changeLanguage.js";

const formLogin = document.getElementById('form-login');
const nameLogin = document.getElementById('user-name-login');
const passLogin = document.getElementById('password-login');

formLogin.addEventListener('submit', e => {
  e.preventDefault();
  signInImputs();
});

function signInImputs() {
  let userNameLogin = nameLogin.value;
  let passwordLogin = passLogin.value;
  const users = JSON.parse(localStorage.getItem('Users'));

  const user = users.find(x => {
    return x.username == userNameLogin && x.pass == passwordLogin;
  });
  if (user?.id) {
    localStorage.setItem('userId', user.id);
    location.reload()
  } else {
    setErrorLogin(loginError);
  }
}

function setErrorLogin (message) {
const small = document.querySelector('.error-login');

small.innerText = message;

small.className = 'error-login error'
}