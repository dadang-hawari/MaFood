import RestaurantSource from '../../data/restaurant-source';
import '../../components/restaurant-item';
import '../../components/list-restaurant';
import '../../components/restaurant-heading';
import '../../components/not-found';
import '../../components/loading-spinner';

const Restaurant = {
  async render() {
    return `
      <restaurant-heading>Explore Restaurants</restaurant-heading>
      <loading-spinner></loading-spinner>
      <list-restaurant></list-restaurant>
      <not-found class="data-not-found hidden"></not-found>
      <button id="sendReview" class="hidden">Load More</button>
    `;
  },

  async afterRender() {
    const loadingSpinner = document.querySelector('loading-spinner');
    const dataNotFound = document.querySelector('.data-not-found');
    const restaurantsList = document.querySelector('list-restaurant');
    const loadMoreButton = document.querySelector('#sendReview');
    let allRestaurants = [];
    let currentDisplayCount = 0;
    const displayBatchSize = 3;

    const displayRestaurants = () => {
      const restaurantsToDisplay = allRestaurants.slice(currentDisplayCount, currentDisplayCount + displayBatchSize);
      restaurantsToDisplay.forEach((restaurant) => {
        const restaurantItem = document.createElement('restaurant-item');
        restaurantItem.render(restaurant);
        restaurantsList.appendChild(restaurantItem);
      });
      currentDisplayCount += displayBatchSize;

      if (currentDisplayCount >= allRestaurants.length) {
        loadMoreButton.classList.add('hidden');
      } else {
        loadMoreButton.classList.remove('hidden');
      }
    };

    const loadRestaurants = async () => {
      loadingSpinner.classList.remove('hidden');
      try {
        allRestaurants = await RestaurantSource.getRestaurant();
        loadingSpinner.classList.add('hidden');
        if (allRestaurants.length === 0) {
          dataNotFound.classList.remove('hidden');
        } else {
          dataNotFound.classList.add('hidden');
          displayRestaurants();
        }
      } catch (error) {
        console.error('Error fetching restaurants:', error);
        loadingSpinner.classList.add('hidden');
        dataNotFound.classList.remove('hidden');
        loadMoreButton.classList.add('hidden');
      }
    };

    loadMoreButton.addEventListener('click', displayRestaurants);

    // Load initial restaurants
    loadRestaurants();
  },
};

export default Restaurant;
