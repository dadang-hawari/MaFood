import { createRestaurantTemplate } from '../views/templates/template-creator';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render(data) {
    this.innerHTML = createRestaurantTemplate(data);
  }
}

customElements.define('restaurant-item', RestaurantItem);
