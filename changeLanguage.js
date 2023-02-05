import { data } from './dataChangeLanguage.js';
import { checkInputs } from './validation.js';

const languageElement = document.querySelector('.language');
const languageType = document.querySelectorAll('.language-type');
const login = document.querySelector('.button-login');
const myAccount = document.querySelector('.button-my-account');
const currentLanguage = document.querySelector('.current-language');
const search = document.querySelector('#search-id');
const btnAll = document.querySelector('.button-value-all');
const yourCart = document.querySelector('.your-cart');
const cartItem = document.querySelector('.cart-item');
const cartUnitPrice = document.querySelector('.cart-unit-price');
const cartUnit = document.querySelector('.cart-unit');
const subtotal = document.querySelector('.sub-total');
const cancel = document.querySelector('.cancel');
const checkout = document.querySelector('.checkout');

// login modal //

const loginTitle = document.querySelector('.login-title');
const loginInputUser = document.querySelector('#user-name-login');
const loginInputPass = document.querySelector('#password-login');
const loginForgotPass = document.querySelector('.forgot-pass');
const loginSubmit = document.querySelector('.submit-login');
const loginSignupText = document.querySelector('.login-text');
const loginSignupLink = document.querySelector('.signup-link');

// signup modal //

const signupTitle = document.querySelector('.signup-title');
const signupInputUser = document.querySelector('#user-name-signup');
const signupInputEmail = document.querySelector('#email-signup');
const signupInputPass = document.querySelector('#password-signup');
const signupInput2Pass = document.querySelector('#password-check-signup');
const signupSubmit = document.querySelector('.submit-signup');
const signupLoginText = document.querySelector('.signup-text');
const signupLoginLink = document.querySelector('.login-link');

// my account modal //

const myAccountTitle = document.querySelector('.my-account');
const myAccountEmail = document.querySelector('.change-email');
const myAccountEmailChange = document.querySelector('#email-my-account');
const myAccountEmailConfirm = document.querySelector('#email-confirm');
const myAccountPass = document.querySelector('.change-password');
const myAccountPassChange = document.querySelector(
  '#password-check-my-account'
);
const myAccountPass2Change = document.querySelector(
  '#password-check2-my-account'
);
const myAccountPassConfirm = document.querySelector('#password2-confirm');
const myAccountLogout = document.querySelector('#logout');

let buttonAdded = data.english.buttonAdded;
let loginError = data.english.loginError;
let userBlank = data.english.userBlank;
let userMore = data.english.userMore;
let emailBlank = data.english.emailBlank;
let emailValid = data.english.emailValid;
let passBlank = data.english.passBlank;
let passMore = data.english.passMore;
let pass2Blank = data.english.pass2Blank;
let passMatch = data.english.passMatch;
let emailChanged = data.english.emailChanged;
let passChanged = data.english.passChanged;

languageType.forEach(currentType => {
  currentType.addEventListener('click', () => {
    languageElement.querySelector('.active').classList.remove('active');
    currentType.classList.add('active');

    const addBtn = document.querySelectorAll('.add-to-cart');
    const attribute = currentType.getAttribute('language');
    login.textContent = data[attribute].login;
    myAccount.textContent = data[attribute].myAccount;
    currentLanguage.textContent = data[attribute].currentLanguage;
    search.placeholder = data[attribute].search;
    btnAll.textContent = data[attribute].btnAll;
    addBtn.forEach(currentBtn => {
      currentBtn.textContent = data[attribute].addBtn;
    });
    yourCart.textContent = data[attribute].yourCart;
    cartItem.textContent = data[attribute].cartItem;
    cartUnitPrice.textContent = data[attribute].cartUnitPrice;
    cartUnit.textContent = data[attribute].cartUnit;
    subtotal.textContent = data[attribute].subtotal;
    cancel.textContent = data[attribute].cancel;
    checkout.textContent = data[attribute].checkout;

    loginTitle.textContent = data[attribute].loginTitle;
    loginInputUser.placeholder = data[attribute].loginInputUser;
    loginInputPass.placeholder = data[attribute].loginForgotPass;
    loginForgotPass.textContent = data[attribute].loginForgotPass;
    loginSubmit.textContent = data[attribute].loginSubmit;
    loginSignupText.textContent = data[attribute].loginSignupText;
    loginSignupLink.textContent = data[attribute].loginSignupLink;
    signupTitle.textContent = data[attribute].signupTitle;
    signupInputUser.placeholder = data[attribute].signupInputUser;
    signupInputEmail.placeholder = data[attribute].signupInputEmail;
    signupInputPass.placeholder = data[attribute].signupInputPass;
    signupInput2Pass.placeholder = data[attribute].signupInput2Pass;
    signupSubmit.textContent = data[attribute].signupSubmit;
    signupLoginText.textContent = data[attribute].signupLoginText;
    signupLoginLink.textContent = data[attribute].signupLoginLink;
    myAccountTitle.textContent = data[attribute].myAccountTitle;
    myAccountEmail.textContent = data[attribute].myAccountEmail;
    myAccountEmailChange.placeholder = data[attribute].myAccountEmailChange;
    myAccountEmailConfirm.textContent = data[attribute].myAccountEmailConfirm;
    myAccountPass.textContent = data[attribute].myAccountPass;
    myAccountPassChange.placeholder = data[attribute].myAccountPassChange;
    myAccountPass2Change.placeholder = data[attribute].myAccountPass2Change;
    myAccountPassConfirm.textContent = data[attribute].myAccountPassConfirm;
    myAccountLogout.textContent = data[attribute].myAccountLogout;

    buttonAdded = data[attribute].buttonAdded;
    loginError = data[attribute].loginError;
    userBlank = data[attribute].userBlank;
    userMore = data[attribute].userMore;
    emailBlank = data[attribute].emailBlank;
    emailValid = data[attribute].emailValid;
    passBlank = data[attribute].passBlank;
    passMore = data[attribute].passMore;
    pass2Blank = data[attribute].pass2Blank;
    passMatch = data[attribute].passMatch;
    emailChanged = data[attribute].emailChanged;
    passChanged = data[attribute].passChanged;
  });
});

export {
  buttonAdded,
  loginError,
  userBlank,
  userMore,
  emailBlank,
  emailValid,
  passBlank,
  passMore,
  pass2Blank,
  passMatch,
  emailChanged,
  passChanged
};
