document.querySelector('#search-id').addEventListener('input', filterList);
function filterList() {
  const searchInput = document.getElementById('search-id').value;
  const searchImputFormated = searchInput.toUpperCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.querySelector('.productName');
    const model = card.querySelector('.productModel');
    if (
      title.innerText.includes(searchImputFormated) ||
      model.innerText.includes(searchImputFormated)
    ) {
      card.classList.remove('hide');
    } else {
      card.classList.add('hide');
    }
  });
}
