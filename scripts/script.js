'use strict';

console.table(myOffers.Pizzas)

function init() {
  renderOffers();
}

function renderOffers() {
  let contentRef = document.getElementById('pizzas_content');
  contentRef.innerHTML = '';

  for (let indexOffers = 0; indexOffers < myOffers.Pizzas.length; indexOffers++) {
    contentRef.innerHTML += getOffersTemplate(indexOffers);
      }
}
