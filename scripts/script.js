'use strict';

function init() {
  renderPizzas();
  renderSalads();
  renderDrinks();
  renderBasket();
}

let switchActive = false;

function toggleBasketBtn() {
  document.getElementById('basket_wrapper').classList.toggle('d_none');
  document.getElementById('logo_middle').classList.toggle('logo-middle-full');
  document.getElementById('main_content').classList.toggle('main-content-full');
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

  let subtotal = 0;
  let deliveryCosts = 0;

  for (let index = 0; index < basket.length; index++) {
    orderRef.innerHTML += getArticleTemplate(basket[index], index);

    subtotal += basket[index].price * basket[index].amount;

  }

  let checkSwitch = document.getElementById('check');
  if (checkSwitch && checkSwitch.checked) {
    deliveryCosts = 4.99;
  }
  document.getElementById('delivery_costs').innerHTML = deliveryCosts.toFixed(2).replace('.', ',') + ' €';
  document.getElementById('delivery').innerHTML = deliveryCosts.toFixed(2).replace('.', ',') + ' €';
  document.getElementById('subtotal').innerHTML = subtotal.toFixed(2).replace('.', ',') + ' €';
  document.getElementById('total_costs').innerHTML = (subtotal + deliveryCosts).toFixed(2).replace('.', ',') + ' €';
}

function addArticle(category, index) {
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

function changeAmount(index, change) {
  basket[index].amount += change;

  if (basket[index].amount <= 0) {
    basket.splice(index, 1);
  }

  renderBasket();
}

function check() {

  renderBasket();
}

function trashArticle(index) {
  if (basket[index].amount >= 1) {
    basket.splice(index, 1);
  }
  renderBasket();
}
