const assert = require('assert');

Feature('Post a Review');

Scenario('Post Review', async ({ I }) => {

    I.amOnPage('/');
    I.seeElement('list-restaurant');
    I.seeElement('restaurant-item');

    const firstRestaurant = locate('restaurant-item').first();
    I.waitForElement = (locate(firstRestaurant).find('h2.restoran-title a'));
    const firstRestaurantDetail = await I.grabTextFrom(locate(firstRestaurant).find('h2.restoran-title a'));

    I.click(firstRestaurantDetail);
    I.seeElement(locate('form-review').find('form'));

    const testName = `I am ${new Date().toLocaleTimeString()}`;
    const testMessage = `This is my message '${new Date().toLocaleTimeString()}'`;
    const sumReviewerBefore = await I.grabNumberOfVisibleElements('comment-reviewer');

    I.fillField('Your name', testName);
    I.fillField('Comment about the restaurant', testMessage);
    I.click('Send');
    I.wait(1);

    I.see(testName)
    I.see(testMessage)

    const currentSumReviewer = await I.grabNumberOfVisibleElements('comment-reviewer');

    // Make sure, the new review is posted
    assert(currentSumReviewer === sumReviewerBefore + 1);
});

Scenario('Post Review Without Fill the Form', async ({ I }) => {
    I.amOnPage('/');
    I.wait(0.5);
    I.seeElement('list-restaurant');
    I.seeElement('restaurant-item');

    const firstRestaurant = locate('restaurant-item').first();
    I.waitForElement = (locate(firstRestaurant).find('h2.restoran-title a'));
    const firstRestaurantDetail = await I.grabTextFrom(locate(firstRestaurant).find('h2.restoran-title a'));

    I.click(firstRestaurantDetail);
    I.seeElement(locate('form-review').find('form'));
    
    const sumReviewerBefore = await I.grabNumberOfVisibleElements('comment-reviewer');

    I.click('Send');

    const currentSumReviewer = await I.grabNumberOfVisibleElements('comment-reviewer');
    // Make sure, the post without fill the form is not posted
    assert(currentSumReviewer === sumReviewerBefore);
})