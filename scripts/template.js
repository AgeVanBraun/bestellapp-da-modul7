function getOffersTemplate(indexOffers) {
  return `<div class="pizza-box">

            <button id="box_btn" class="box-btn">+</button>
                <div class="pizza-content">
                    <h1>${myOffers.Pizzas[indexOffers].name}</h1>
                    <span>${myOffers.Pizzas[indexOffers].description}</span>
                    <p>${myOffers.Pizzas[indexOffers].price.toFixed(2).replace('.',',') + ' €'}</p>
                </div>
            </div>`;
}
