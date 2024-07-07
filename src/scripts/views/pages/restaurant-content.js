import RestaurantSource from '../../data/restaurant-source';
// Import Components
import '../../components/restaurant-item';
import '../../components/list-restaurant';
import '../../components/restaurant-heading';
import '../../components/not-found';
import '../../components/loading-spinner';

const Restaurant = {
  async render() {
    return `
      <restaurant-heading>Explore Restaurants</restaurant-heading>
      <loading-spinner class="spinner-overlay"></loading-spinner>
      <list-restaurant></list-restaurant>
      <not-found class="hidden"></not-found>
    `;
  },

  async afterRender() {
    const loadingSpinner = document.querySelector('.spinner-overlay');
    let loading = true;
    const dataNotFound = document.querySelector('.data-not-found');
    const restaurantsList = document.querySelector('list-restaurant');

    // Show loading spinner
    loadingSpinner.classList.remove('hidden');

    try {
      const restaurants = await RestaurantSource.getRestaurant();
      loading = false;

      // Hide loading spinner
      loadingSpinner.classList.add('hidden');

      if (restaurants.length === 0) {
        dataNotFound.classList.remove('hidden');
      } else {
        dataNotFound.classList.add('hidden');

        restaurants.forEach((restaurant) => {
          const restaurantItem = document.createElement('restaurant-item');
          restaurantItem.render(restaurant);
          restaurantsList.appendChild(restaurantItem);
        });
      }
    } catch (error) {
      console.error('Failed to fetch restaurants:', error);
      loading = false;
      loadingSpinner.classList.add('hidden');
      dataNotFound.classList.remove('hidden');
    }
  },
};

export default Restaurant;
