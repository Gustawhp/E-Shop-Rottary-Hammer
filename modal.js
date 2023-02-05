const modals = ['modal', 'modal-login', 'modal-signup', 'modal-my-account'];
const modalClasses = [
  'modal-hidden',
  'modal-login-hidden',
  'modal-signup-hidden',
  'modal-my-account-hidden'
];

const toggleModal = modalIndex => {
  modals.forEach((modal, index) => {
    if (index === modalIndex) {
      document.querySelector(`.${modal}`).classList.toggle(modalClasses[index]);
    } else {
      document.querySelector(`.${modal}`).classList.add(modalClasses[index]);
    }
  });
};

document
  .querySelector('#icon-cart')
  .addEventListener('click', () => toggleModal(0));
document
  .querySelector('.cancel')
  .addEventListener('click', () => toggleModal(0));
document
  .querySelector('.button-login')
  .addEventListener('click', () => toggleModal(1));
document
  .querySelector('.login-link')
  .addEventListener('click', () => toggleModal(1));
document
  .querySelector('.cancel-login')
  .addEventListener('click', () => toggleModal(1));
document
  .querySelector('.signup-link')
  .addEventListener('click', () => toggleModal(2));
document
  .querySelector('.cancel-signup')
  .addEventListener('click', () => toggleModal(2));
document
  .querySelector('.button-my-account')
  .addEventListener('click', () => toggleModal(3));
document
  .querySelector('.cancel-my-account')
  .addEventListener('click', () => toggleModal(3));
