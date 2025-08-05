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
    return `<h2>Warenkorb</h2>
            <span>Anlieferung</span>
            <span>Platzhalter Artikel</span>
            <span>Zwischensumme</span>
            <span>Lieferkosten</span>
            <span>Gesamt</span>

            `
}
