'use strict';

function init() {
  renderPizzas();
  renderSalads();
  renderDrinks();
  renderBasket();
}

function toggleBasketBtn() {
  document.getElementById('basket_wrapper').classList.toggle('d_none');
  document.getElementById('logo_middle').classList.toggle('logo-middle-full');
  document.getElementById('main_content').classList.toggle('main-content-full');
}

function toggleResCart() {
  document.getElementById('overlay').classList.toggle('d_none');
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

  for (let index = 0; index < basket.length; index++) {
    let itemHTML = getArticleTemplate(basket[index], index);
    orderRef.innerHTML += itemHTML;
    subtotal += basket[index].price * basket[index].amount;
  }

  let mainSwitch = document.getElementById('check_main');

  let deliveryCosts = mainSwitch.checked ? 4.99 : 0;

  document.getElementById('delivery').innerHTML = deliveryCosts.toFixed(2).replace('.', ',') + ' €';
  document.getElementById('delivery_costs').innerHTML = deliveryCosts.toFixed(2).replace('.', ',') + ' €';
  document.getElementById('delivery_overlay').innerHTML = deliveryCosts.toFixed(2).replace('.', ',') + ' €';
  document.getElementById('subtotal').innerHTML = subtotal.toFixed(2).replace('.', ',') + ' €';
  document.getElementById('total_costs').innerHTML = (subtotal + deliveryCosts).toFixed(2).replace('.', ',') + ' €';
  document.getElementById('overlay_basket').innerHTML = contentRef.innerHTML;
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

function check(source) {
  let mainSwitch = document.getElementById('check_main');
  let overlaySwitch = document.getElementById('check_overlay');

  let isChecked;

  if (source === 'main') {
    isChecked = mainSwitch.checked;
    overlaySwitch.checked = isChecked;
  } else {
    isChecked = overlaySwitch.checked;
    mainSwitch.checked = isChecked;
  }

  let deliveryCosts = isChecked ? 4.99 : 0;
  document.getElementById('delivery').innerHTML = deliveryCosts.toFixed(2).replace('.', ',') + ' €';
  document.getElementById('delivery_overlay').innerHTML = deliveryCosts.toFixed(2).replace('.', ',') + ' €';



  renderBasket();
}

function trashArticle(index) {
  if (basket[index].amount >= 1) {
    basket.splice(index, 1);
  }
  renderBasket();
}

function submitOrder(index){
  document.getElementById('submit_overlay').classList.remove('d_none');
  renderBasket();


}

function closeSubmitDialog(){
  document.getElementById('submit_overlay').classList.add('d_none')

}
