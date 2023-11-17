import * as testFactories from './helpers/testFactories';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Unliking A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<button id="favoriteButton"></button>';
  };

  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display an unlike button when the restaurant has been favorited', async () => {
    await testFactories.createFavoriteButtonWithRestaurantData({ id: 1 });
    expect(document.querySelector('[aria-label="remove this restaurant from your favorites restaurant"]')).toBeTruthy();
  });

  it('should not display an unlike button when the restaurant has been favorited', async () => {
    await testFactories.createFavoriteButtonWithRestaurantData({ id: 1 });
    expect(document.querySelector('[aria-label="add this restaurant to your favorites restaurant"]')).toBeFalsy();
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    await testFactories.createFavoriteButtonWithRestaurantData({ id: 1 });
    document.getElementById('favoriteButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error when user click unlike button if the unliked resto is not in the list', async () => {
    await testFactories.createFavoriteButtonWithRestaurantData({ id: 1 });
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    document.querySelector('[aria-label="remove this restaurant from your favorites restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
