function getPizzaTemplate(indexOffers) {
  return `<div class="offers-box">
            <button onclick="addArticle('Pizzas', ${indexOffers})" id="box_btn" class="box-btn">+</button>
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
            <button onclick="addArticle('Salads', ${indexOffers})" id="box_btn" class="box-btn">+</button>
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
            <button onclick="addArticle('Drinks', ${indexOffers})" id="box_btn" class="box-btn">+</button>
            <img class="offers-img object-position-top" src=${myOffers.Drinks[indexOffers].picture} alt="Bild von einem Getränk">
                <div class="offers-content">
                    <h2>${myOffers.Drinks[indexOffers].name}</h2>
                    <span>${myOffers.Drinks[indexOffers].description}</span>
                    <p>${myOffers.Drinks[indexOffers].price.toFixed(2).replace('.',',') + ' €'}</p>
                </div>
            </div>`;
}
function getBasketTemplate(indexOffers){
    return `<h2 class="center">Warenkorb</h2>
            <div class="separator-basket"></div>
            <div class="format-basket-content">
            <span class="font-bold">Anlieferung:</span>
            <input type="checkbox" id="check">
            <label for="check" class="switch-btn" onclick="check()"></label>
            <span class="font-bold" id="delivery">0,00 €</span>
            </div>
            <div class="separator-basket"></div>
            <div id="order_basket"></div>
            <div class="separator-basket"></div>
            <div class="format-basket-content">
            <span class="font-gray">Lieferkosten:</span><span class="font-bold font-gray" id="delivery_costs">0,00 €</span>
            </div>
            <div class="format-basket-content">
            <span class="font-gray">Zwischensumme:</span><span class="font-bold font-gray">0,00 €</span>
            </div>
            <div class="separator-basket"></div>
            <div class="format-basket-content">
            <span class="font-bold">Gesamtkosten:</span><span class="font-bold">0,00 €</span>
            </div>
            <button class="order-btn font-bold">jetzt bestellen</button>
            `;
}

function getArticleTemplate(article, index) {
return     `<div class="basket-item">
            <h3>${article.name}</h3>
            <div class="format-basket-content">
            <button onclick="changeAmount(${index}, -1)" class="amount-btn">-</button>
            <span>${article.amount} x</span>
            <button onclick="changeAmount(${index}, 1)" class="amount-btn">+</button>
            <span>${article.price.toFixed(2).replace('.', ',')} €</span>
            <img onclick="trashArticle(${index})" class="trash-img" src=./assets/icons/trash.png alt="Bild von einer Pizza">
            </div>
            </div>
            `;
}
