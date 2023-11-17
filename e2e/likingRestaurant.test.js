const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty liked restaurant', ({ I }) => {
  I.seeElement(locate('list-restaurant'));
  I.see('No Favorite Restaurant yet.', 'h2');
  I.dontSeeElement(locate('list-restaurant').find('restaurant-item'));
});

Scenario('Liking a restaurant', async ({ I }) => {
  I.see('No Favorite Restaurant yet.', 'h2');

  I.amOnPage('/');
  I.waitForElement(locate('list-restaurant').find('restaurant-item'));
  I.seeElement(locate('list-restaurant').find('restaurant-item'));

  const firstRestaurant = locate('list-restaurant restaurant-item').first();
  const firstRestaurantTarget = await I.grabTextFrom(locate(firstRestaurant).find('h2.restoran-title a'));

  I.click(locate(firstRestaurant).find('h2.restoran-title a'));

  I.waitForElement('#favoriteButton');
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement(locate('restaurant-item'));
  const likedRestaurantName = await I.grabTextFrom(locate('restaurant-item').find('h2.restoran-title'));
  
  // Make sure liked restaurant same as the first restaurant
  assert.strictEqual(firstRestaurantTarget, likedRestaurantName, 'Liked restaurant name should be the same as the first restaurant name');
});


