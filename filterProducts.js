const buttonsFilter = document.querySelectorAll('.button-value');
buttonsFilter.forEach(button => {
  button.addEventListener('click', function(){
    filterProduct(button.value)
  })
})

function filterProduct(value) {
  const buttonsFilter = document.querySelectorAll('.button-value');
  buttonsFilter.forEach(button => {
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  const elements = document.querySelectorAll('.card');
  elements.forEach(element => {
    if (value == 'all') {
      element.classList.remove('hide');
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove('hide');
      } else {
        element.classList.add('hide');
      }
    }
  });
}
