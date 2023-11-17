Feature('Unliking a Restaurant');

Scenario('Unliking a restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.wait(0.5);
    I.seeElement(locate('list-restaurant').find('restaurant-item'));
  
    const firstRestaurant = locate('list-restaurant restaurant-item').first();
    const firstRestaurantTarget = await I.grabTextFrom(locate(firstRestaurant).find('h2.restoran-title a'));
  
    I.click(locate(firstRestaurant).find('h2.restoran-title a'));
  
    I.wait(1);
    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');
  
    I.amOnPage('/#/favorite');
    I.click(locate(firstRestaurant).find('h2.restoran-title a'));
    I.wait(1);

    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');
    
    I.amOnPage('/#/favorite');
    I.dontSeeElement(locate('restaurant-item').withText(firstRestaurantTarget));
  });
  