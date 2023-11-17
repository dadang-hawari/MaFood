import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const FavoritePage = {
  async render() {
    return `
      <restaurant-heading>Favorite Restaurants</restaurant-heading>
      <list-restaurant></list-restaurant>
    `;
  },

  async renderRestaurantList(restaurants) {
    const restaurantList = document.querySelector('list-restaurant');
    const restaurantHeading = document.querySelector('restaurant-heading');

    if (restaurants.length === 0) {
      restaurantHeading.innerHTML += '<h2>No Favorite Restaurant yet.</h2>';
    } else {
      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('restaurant-item');
        restaurantItem.render(restaurant);
        restaurantList.appendChild(restaurantItem);
      });
    }
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    this.renderRestaurantList(restaurants);
  },
};

export default FavoritePage;
