import RestaurantSource from '../../data/restaurant-source';
// Import Components
import '../../components/restaurant-item';
import '../../components/list-restaurant';
import '../../components/restaurant-heading';
import '../../components/not-found';

const Restaurant = {
  async render() {
    return `
      <restaurant-heading>Explore Restaurants</restaurant-heading>
      <list-restaurant></list-restaurant>
      <loading-spinner></loading-spinner>
      <not-found></not-found>
    `;
  },

  async afterRender() {
    const loadingSpinner = document.querySelector('loading-spinner');
    const dataNotFound = document.querySelector('.data-not-found');
    const restaurants = await RestaurantSource.getRestaurant();
    const restaurantsList = document.querySelector('list-restaurant');

    if (restaurants === 0) {
      dataNotFound.classList.remove('hidden');
    } else if (restaurants.length > 0) {
      dataNotFound.classList.add('hidden');
      loadingSpinner.classList.add('hidden');

      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('restaurant-item');
        restaurantItem.render(restaurant);
        restaurantsList.appendChild(restaurantItem);
      });
    }
  },
};

export default Restaurant;
