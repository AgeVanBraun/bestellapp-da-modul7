'use strict';

/**
 * loads all offers and shopping cart
 */
function init() {
  renderPizzas();
  renderSalads();
  renderDrinks();
  renderBasket();
}

/**
 * open and close shopping cart and audjust logo on middle
 */
function toggleBasketBtn() {
  document.getElementById('basket_wrapper').classList.toggle('d_none');
  document.getElementById('main_content').classList.toggle('main-content-full');
}

/**
 * open and close mobile shopping cart and on or off scrollbar
 */
function toggleResCart() {
  document.getElementById('overlay').classList.toggle('d_none');
  document.getElementById('overflow_hidden').classList.toggle('overflow-hidden');
  document.getElementById('submit_overlay').classList.add('d_none');
}

/**
 * renders pizzas
 */
function renderPizzas() {
  let contentRef = document.getElementById('pizzas_content');
  contentRef.innerHTML = '';

  for (let indexOffers = 0; indexOffers < myOffers.Pizzas.length; indexOffers++) {
    contentRef.innerHTML += getPizzaTemplate(indexOffers);
  }
}

/**
 * renders salads
 */
function renderSalads() {
  let contentRef = document.getElementById('salads_content');
  contentRef.innerHTML = '';

  for (let indexOffers = 0; indexOffers < myOffers.Salads.length; indexOffers++) {
    contentRef.innerHTML += getSaladTemplate(indexOffers);
  }
}

/**
 * renders drinks
 */
function renderDrinks() {
  let contentRef = document.getElementById('drinks_content');
  contentRef.innerHTML = '';

  for (let indexOffers = 0; indexOffers < myOffers.Drinks.length; indexOffers++) {
    contentRef.innerHTML += getDrinksTemplate(indexOffers);
  }
}

/**
 * renders shopping cart new and calculates item price + delivery costs = total costs
 */
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

  document.getElementById('article_counter').innerHTML = basket.length
  document.getElementById('delivery').innerHTML = deliveryCosts.toFixed(2).replace('.', ',') + ' €';
  document.getElementById('delivery_costs').innerHTML = deliveryCosts.toFixed(2).replace('.', ',') + ' €';
  document.getElementById('delivery_overlay').innerHTML = deliveryCosts.toFixed(2).replace('.', ',') + ' €';
  document.getElementById('subtotal').innerHTML = subtotal.toFixed(2).replace('.', ',') + ' €';
  document.getElementById('total_costs').innerHTML = (subtotal + deliveryCosts).toFixed(2).replace('.', ',') + ' €';
  document.getElementById('cart_btn_totalCost').innerHTML = (subtotal + deliveryCosts).toFixed(2).replace('.', ',') + ' €';
  document.getElementById('overlay_basket').innerHTML = contentRef.innerHTML;
}

/**
 * adds items to the shopping cart
 */
function addArticle(category, index) {
  let offerItem = myOffers[category][index];
  let foundIndex = -1;

  for (let i = 0; i < basket.length; i++) {
    if (basket[i].name === offerItem.name) {
      foundIndex = i;
      break;
    }
  }
  if (foundIndex !== -1) {
    basket[foundIndex].amount += 1;
  } else {
    basket.push({
      name: offerItem.name,
      price: offerItem.price,
      amount: 1,
    });
  }

  renderBasket();
}

/**
 * changes the item quantity at 0 is deleted
 */
function changeAmount(index, change) {
  basket[index].amount += change;

  if (basket[index].amount <= 0) {
    basket.splice(index, 1);
  }
  renderBasket();
}

/**
 * checks whether a switch is on or off. If one is on, then 4.99 euros
 */
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

/**
 * deletes items in the shopping cart
 */
function trashArticle(index) {
  if (basket[index].amount >= 1) {
    basket.splice(index, 1);
  }
  renderBasket();
}

/**
 * opens the submit dialog, resets the switch and deletes the contents from the shopping cart
 */
function submitOrder() {
  document.getElementById('submit_overlay').classList.remove('d_none');
  document.getElementById('check_main').checked = false;
  document.getElementById('check_overlay').checked = false;

  basket = [];

  renderBasket();
}

/**
 * closes submit dialog
 */
function closeSubmitDialog() {
  document.getElementById('submit_overlay').classList.toggle('d_none');
}
