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

  let orderRef = document.getElementById('order_basket');
  orderRef.innerHTML = '';

  for (let index = 0; index < basket.length; index++) {
    orderRef.innerHTML += getArticleTemplate(basket[index], index);
  }
}

function addArticle(category, index) {
  let article = myOffers[category][index];
  let checkMyOffers = myOffers[category][index];
  let foundIndex = -1;

  for (let i = 0; i < basket.length; i++) {
    if (basket[i].name === checkMyOffers.name) {
      foundIndex = i;
      break;
    }
  }

  if (foundIndex !== -1) {
    basket[foundIndex].amount += 1;
  } else {
    basket.push({
      name: checkMyOffers.name,
      price: checkMyOffers.price,
      amount: 1,
    });
  }

  renderBasket();
}

function changeAmount(index, delta) {
  basket[index].amount += delta;

  if (basket[index].amount <= 0) {
    basket.splice(index, 1);
  }
  renderBasket();
}

function check() {
  let checkSwitch = document.getElementById('check');
  let switchActive = checkSwitch.checked;
  let costs = 4.99;

  if (switchActive) {
    document.getElementById('delivery_costs').innerHTML = '0,00 €';
    document.getElementById('delivery').innerHTML = '0,00 €';
  } else {
    document.getElementById('delivery_costs').innerHTML = costs + ' €';
    document.getElementById('delivery').innerHTML = costs + ' €';
  }
}
