document.addEventListener('DOMContentLoaded', () => {
  console.log('js loaded');

  const newSearchForm = document.querySelector('#new-search-form');
  newSearchForm.addEventListener('submit', handleNewSearchFormSubmit);

})

const handleNewSearchFormSubmit = function(event) {
  event.preventDefault();
  console.log('events', this);

  const resultFlightClass = document.createElement('p');
  resultFlightClass.textContent = this.classSelection.value;
  // const resultFlightType = document.createElement('p');
  // resultFlightType.textContent = this.flightType.value;
  const resultDestinationFrom = document.createElement('p');
  resultDestinationFrom.textContent = this.destinationFrom.value;
  const resultDestinationTo = document.createElement('p');
  resultDestinationTo.textContent = this.destinationTo.value;
  const resultDepartureDate = document.createElement('p');
  resultDepartureDate.textContent = this.departure.value;
  const resultReturnDate = document.createElement('p');
  resultReturnDate.textContent = this.return.value;
  // const resultPriceRange = document.createElement('p');
  // resultPriceRange.textContent = this.tickmarks.value;


  const resulttitle = document.createElement('p');
  resulttitle.textContent = this.titleSelection.value;
  const resultFirstName = document.createElement('p');
  resultFirstName.textContent = this.firstname.value;
  const resultLastName = document.createElement('p');
  resultLastName.textContent = this.lastname.value;
  const resultTelephone = document.createElement('p');
  resultTelephone.textContent = this.telephone.value;
  const resultEmail = document.createElement('p');
  resultEmail.textContent = this.email.value;


  const results = document.createElement('div');
  results.append(resultFlightClass);
  // results.append(resultFlightType);
  results.append(resultDestinationFrom);
  results.append(resultDestinationTo);
  results.append(resultDepartureDate);
  results.append(resultReturnDate);
  // results.append(resultPriceRange);

  const resultCustomerDetail = document.createElement('div');
  results.append(resulttitle);
  results.append(resultFirstName);
  results.append(resultLastName);
  results.append(resultTelephone);
  results.append(resultEmail);

  const result = document.querySelector('#result-list');
  result.append(results);
  result.append(resultCustomerDetail);
  this.reset();
}






// document.addEventListener('DOMContentLoaded', () => {
//   console.log('JavaScript loaded');
//
//   const newSearchForm = document.querySelector('#new-search-form');
//     newSearchForm.addEventListener('submit', handleNewSearchFormSubmit);
// })
//
// const handleNewSearchFormSubmit = function(form) {
//   event.preventDefault();
//
//   const resultListItem = createResultListItem(event.target);
//   const resultList = document.querySelector('#result-list');
//   resultList.appendChild(resultListItem);
// }
//
// const createResultListItem = function (form) {
//   const resultListItem = document.createElement('li');
//   resultListItem.classList.add('result-list-item');
//
//   const category = document.createElement('h1');
//   category.textContent = form.category.value;
//   resultListItem.appendChild(category);
//
//   return resultListItem;
// }
