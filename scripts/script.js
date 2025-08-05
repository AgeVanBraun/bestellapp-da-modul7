'use strict';

function init() {
  renderPizzas();
  renderSalads();
  renderDrinks();
  renderBasket();
}

function renderPizzas() {
  let contentRef = document.getElementById('pizzas_content');
  contentRef.innerHTML = '';

  for (let indexOffers = 0; indexOffers < myOffers.Pizzas.length; indexOffers++) {
    contentRef.innerHTML += getPizzaTemplate(indexOffers);
  }
}
function renderSalads() {
  let contentRef = document.getElementById('salads_content');
  contentRef.innerHTML = '';

  for (let indexOffers = 0; indexOffers < myOffers.Salads.length; indexOffers++) {
    contentRef.innerHTML += getSaladTemplate(indexOffers);
  }
}
function renderDrinks() {
  let contentRef = document.getElementById('drinks_content');
  contentRef.innerHTML = '';

  for (let indexOffers = 0; indexOffers < myOffers.Drinks.length; indexOffers++) {
    contentRef.innerHTML += getDrinksTemplate(indexOffers);
  }
}
function renderBasket() {
    let contentRef = document.getElementById('basket');
  contentRef.innerHTML = getBasketTemplate();

}
