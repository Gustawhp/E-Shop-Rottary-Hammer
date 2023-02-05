export function changeCurrency(currency) {
  localStorage.setItem('currency', currency);
  const prices = document.querySelectorAll('.price');

  prices.forEach(priceElement => {
    const currentPrice = priceElement.dataset[currency];
    renderPrice(priceElement, currency, currentPrice);
  });

  const priceUnit = document.querySelectorAll('.unit-price');
  const subPrice = document.querySelectorAll('.sub-price');

  priceUnit.forEach(priceUnitElement => {
    const currentPriceUnit = priceUnitElement.dataset[currency];
    renderPrice(priceUnitElement, currency, currentPriceUnit);
  });

  subPrice.forEach(priceUnitElement => {
    let totalPrice = 0;
    totalItems = 0;
    cartAdd.forEach(item => {
      totalPrice +=
        parseFloat(item.price[currency]) * parseFloat(item.numberOfUnits);
      totalItems += item.numberOfUnits;
    });
    totalPrice.toFixed(0);

    renderPrice(priceUnitElement, currency, totalPrice);
  });
}

const currentElement = document.querySelector('.currency');
const currentSelectCurrency = document.querySelectorAll('.currency-type');
const displayCurrency = document.querySelector('.current-currency');

currentSelectCurrency.forEach(elementCurrency => {
  elementCurrency.addEventListener('click', () => {
    currentElement.querySelector('.active').classList.remove('active');
    elementCurrency.classList.add('active');

    const currentCurrency = elementCurrency.getAttribute('data-currency');

    displayCurrency.innerHTML = currentCurrency.toUpperCase();

    changeCurrency(currentCurrency);
  });
});

export function renderPrice(priceElement, currency, currentPrice) {
  if (currency === 'usd') {
    priceElement.innerHTML = '$' + currentPrice;
  } else {
    priceElement.innerHTML = currentPrice + 'zł';
  }
}
