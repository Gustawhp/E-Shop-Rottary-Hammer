import { render } from "./renderProducts.js";

render();
window.onload = () => {
  filterProduct('all');
};


const userId = localStorage.getItem('userId')
const users = localStorage.getItem("Users")


if (userId) {
    document.getElementById('button-login').style.display='none';
} else {
    document.getElementById('button-my-account').style.display='none'

}