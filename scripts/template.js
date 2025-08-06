function getPizzaTemplate(indexOffers) {
  return `<div class="offers-box">
            <button id="box_btn" class="box-btn">+</button>
            <img class="offers-img" src=${myOffers.Pizzas[indexOffers].picture} alt="Bild von einer Pizza">
                <div class="offers-content">
                    <h2>${myOffers.Pizzas[indexOffers].name}</h2>
                    <span>${myOffers.Pizzas[indexOffers].description}</span>
                    <p>${myOffers.Pizzas[indexOffers].price.toFixed(2).replace('.',',') + ' €'}</p>
                </div>
            </div>`;
}
function getSaladTemplate(indexOffers) {
  return `<div class="offers-box">
            <button id="box_btn" class="box-btn">+</button>
            <img class="offers-img" src=${myOffers.Salads[indexOffers].picture} alt="Bild von einem Salat">
                <div class="offers-content">
                    <h2>${myOffers.Salads[indexOffers].name}</h2>
                    <span>${myOffers.Salads[indexOffers].description}</span>
                    <p>${myOffers.Salads[indexOffers].price.toFixed(2).replace('.',',') + ' €'}</p>
                </div>
            </div>`;
}
function getDrinksTemplate(indexOffers) {
  return `<div class="offers-box">
            <button id="box_btn" class="box-btn">+</button>
            <img class="offers-img object-position-top" src=${myOffers.Drinks[indexOffers].picture} alt="Bild von einem Getränk">
                <div class="offers-content">
                    <h2>${myOffers.Drinks[indexOffers].name}</h2>
                    <span>${myOffers.Drinks[indexOffers].description}</span>
                    <p>${myOffers.Drinks[indexOffers].price.toFixed(2).replace('.',',') + ' €'}</p>
                </div>
            </div>`;
}
function getBasketTemplate(){
    return `<h2 class="center">Warenkorb</h2>
            <div class="separator-basket"></div>
            <div class="format-basket-content">
            <span class="font-bold">Anlieferung:</span><span class="font-bold">0,00 €</span>
            </div>
            <div class="separator-basket"></div>
            <div id="article-basket">
            <span>Platzhalter Artikel</span>
            </div>
            <div class="separator-basket"></div>
            <div class="format-basket-content">
            <span class="font-gray">Lieferkosten:</span><span class="font-bold font-gray">0,00 €</span>
            </div>
            <div class="format-basket-content">
            <span class="font-gray">Zwischensumme:</span><span class="font-bold font-gray">0,00 €</span>
            </div>
            <div class="separator-basket"></div>
            <div class="format-basket-content">
            <span class="font-bold">Gesamtkosten:</span><span class="font-bold">0,00 €</span>
            </div>
            <button class="order-btn font-bold">jetzt bestellen</button>
            `
}
