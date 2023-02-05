const cartItems = document.querySelector('.cart-items');
const subTotal = document.querySelector('.sub-total');
const subPrice = document.querySelector('.sub-price');
const unitValue = document.querySelector('.item-number');
let cartAdd = JSON.parse(localStorage.getItem('CART')) || [];
updateCart();

function updateCart() {
  renderCartItems();
  renderSubtotal();
  removeFromCart();
  listenerQualityInputs();

  localStorage.setItem('CART', JSON.stringify(cartAdd));
}

function renderSubtotal() {
  const currency = localStorage.getItem("currency")
  let totalPrice = 0;
  totalItems = 0;
  cartAdd.forEach(item => {
    totalPrice += parseFloat(item.price[currency]) * parseFloat(item.numberOfUnits);
    totalItems += item.numberOfUnits;
  });
  if(currency === 'usd') {
    subPrice.innerHTML = `$${totalPrice.toFixed(0)}`
  } else {
    subPrice.innerHTML = `${totalPrice.toFixed(0)}zł`
  }
  subTotal.innerHTML = `Subtotal: `;
  unitValue.innerHTML = totalItems;
}

function renderCartItems() {
  cartItems.innerHTML = '';
  cartAdd.forEach(item => {
    const productsModal = document.createElement('products-modal');
    productsModal.className = 'products-modal';

    const itemInfo = document.createElement('item-info');
    itemInfo.id = item.id;
    itemInfo.className = 'item-info';
    productsModal.append(itemInfo);

    const imageModal = document.createElement('img');
    imageModal.setAttribute('src', item.image);
    imageModal.setAttribute('alt', item.productName);
    itemInfo.append(imageModal);

    const divh5 = document.createElement('h5');
    divh5.textContent = item.productName + ` ` + item.model;
    itemInfo.append(divh5);

    const unitPrice = document.createElement('div');
    unitPrice.className = 'unit-price';
    rednerItemPrice(item, unitPrice)
    unitPrice.dataset.usd = item.price.usd;
    unitPrice.dataset.pln = item.price.pln;
    productsModal.append(unitPrice);

    const units = document.createElement('div');
    units.className = 'units';
    productsModal.append(units);

    const quality = document.createElement('input');
    quality.className = 'cart-quality';
    quality.id = item.id;
    quality.type = 'number';
    quality.value = item.numberOfUnits;
    quality.min = '1';
    quality.max = '10';
    units.append(quality);

    const btnX = document.createElement('button');
    btnX.textContent = 'X';
    btnX.className = 'btn-x';
    btnX.id = item.id;
    units.append(btnX);

    document.getElementById('cart-items').append(productsModal);
  });
}

function removeFromCart() {
  const removeBtn = document.querySelectorAll('.btn-x');
  removeBtn.forEach(btnRemove => {
    btnRemove.addEventListener('click', e => {
      const btnId = parseFloat(e.target.id);
      cartAdd = cartAdd.filter(item => item.id !== btnId);
      updateCart();
    });
  });
}

function listenerQualityInputs() {
  const numberUnits = document.querySelectorAll('.cart-quality');
  numberUnits.forEach(input => {
    input.addEventListener('change', e => {
      const unitQuantity = parseInt(e.target.value);
      const itemId = parseInt(e.target.id);
      changeQuantity(unitQuantity, itemId);
    });
  });
}

function changeQuantity(unitQuantity, itemId) {
  cartAdd = cartAdd.map(item => {
    let numberOfUnits = item.numberOfUnits;
    if (item.id === itemId) {
      numberOfUnits = unitQuantity;
    }
    return {
      ...item,
      numberOfUnits
    };
  });
  updateCart();
}

function rednerItemPrice(item, unitPrice) {
  const currency = localStorage.getItem('currency');
  if (currency === 'usd') {
    unitPrice.textContent = '$' + item.price[currency];
  }
  unitPrice.textContent = item.price[currency] + 'zł';
}