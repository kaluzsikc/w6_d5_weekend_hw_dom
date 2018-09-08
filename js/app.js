document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const newSearchForm = document.querySelector('#new-search-form');
    newSearchForm.addEventListener('submit', handleNewSearchFormSubmit);
})

const handleNewSearchFormSubmit = function(form) {
  event.preventDefault();

  const resultListItem = createResultListItem(event.target);
  const resultList = document.querySelector('#result-list');
  resultList.appendChild(resultListItem);
}

const createResultListItem = function (form) {
  const resultListItem = document.createElement('li');
  resultListItem.classList.add('result-list-item');

  const category = document.createElement('p');
  category.textContent = form.category.value;
  resultListItem.appendChild(category);

  return resultListItem;
}
