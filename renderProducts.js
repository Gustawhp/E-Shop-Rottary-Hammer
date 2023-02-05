import { buttonAdded } from './changeLanguage.js';
import { changeCurrency } from './changeValue.js';
import { renderPrice } from './changeValue.js';

export const render = () => {
  const productList = document.createElement('ul');
  productList.className = 'product-list';

  for (let i of products.data) {
    const card = document.createElement('li');
    card.classList.add('card', i.category, 'hide');
    productList.append(card);

    const productContainer = document.createElement('div');
    card.append(productContainer);

    const image = document.createElement('img');
    image.setAttribute('src', i.image);
    image.setAttribute('alt', i.productName);
    productContainer.append(image);

    const productItem = document.createElement('div');
    productItem.className = 'product-item-content';
    productContainer.append(productItem);

    const name = document.createElement('h2');
    name.className = 'productName';
    name.innerHTML = i.productName.toLocaleUpperCase();
    productItem.append(name);

    const model = document.createElement('h3');
    model.className = 'productModel';
    model.innerHTML = i.model;
    productItem.append(model);

    const div = document.createElement('div');
    div.className = 'product-item-handler'
    productItem.append(div)

    const currency = localStorage.getItem('currency');
    const price = document.createElement('h4');
    price.innerHTML = `$` + i.price.usd;
    renderPrice(price, currency, i.price[currency]);
    div.append(price);
    price.dataset.usd = i.price.usd;
    price.dataset.pln = i.price.pln;
    price.classList.add('price');

    const buttonPrice = document.createElement('button');
    buttonPrice.id = i.id;
    buttonPrice.className = 'add-to-cart';
    buttonPrice.textContent = 'Add to cart';
    div.append(buttonPrice);

    addToCart();

    document.getElementById('products').append(productList);
  }
  changeCurrency(localStorage.getItem('currency') || 'usd');
};

function addToCart() {
  const addToCart = document.querySelectorAll('.add-to-cart');

  addToCart.forEach(btnAdd => {
    btnAdd.addEventListener('click', e => {
      addedToCart(e);
      const productId = parseFloat(e.target.id);
      if (cartAdd.some(item => item.id === productId)) {
      } else {
        const item = products.data.find(product => product.id === productId);
        cartAdd.push({ ...item, numberOfUnits: 1 });
      }
      updateCart();
    });
  });

  const addedToCart = e => {
    const clickedButton = e.target.closest('.add-to-cart');
    clickedButton.textContent = buttonAdded;
    clickedButton.classList.add('.added-to-cart');
  };
}
