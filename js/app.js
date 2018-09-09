document.addEventListener('DOMContentLoaded', () => {
  console.log('js loaded');

  const newSearchForm = document.querySelector('#new-search-form');
  newSearchForm.addEventListener('submit', handleNewSearchFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewSearchFormSubmit = function() {
  event.preventDefault();
  // console.log('events', this);
  const resultFlightClass = document.createElement('p');
  // resultFlightClass.textContent = `You selected ${this.classSelection.value} class`;
  resultFlightClass.textContent = this.classSelection.value;
  const resultFlightType = document.createElement('p');
  resultFlightType.textContent = this.flightType.value;
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
  results.append(resultFlightClass, resultFlightType, resultDestinationFrom, resultDestinationTo, resultDepartureDate, resultReturnDate, resulttitle,resultFirstName, resultLastName, resultTelephone, resultEmail);
  // results.append(resultPriceRange);

  // const resultCustomerDetail = document.createElement('div');
  // results.append(resulttitle,resultFirstName, resultLastName, resultTelephone, resultEmail);

  results.classList.add('result-box');

  const result = document.querySelector('#result-list');
  result.append(results);

  this.reset();
}

// const handleDeleteAllClick = function (event) {
//   const resultsList = document.querySelector('#result-list');
//   resultsList.innerHTML = '';
// }

const handleDeleteAllClick = function () {
  const listToDelete = document.querySelector('#result-list');
  while (listToDelete.firstChild) {
    listToDelete.removeChild(listToDelete.firstChild);
  }
}
