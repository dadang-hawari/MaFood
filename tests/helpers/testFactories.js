import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';
import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-init';

const createFavoriteButtonWithRestaurantData = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButton'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createFavoriteButtonWithRestaurantData };
