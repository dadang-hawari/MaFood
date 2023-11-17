import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getRestaurant() {
    const response = await fetch(API_ENDPOINT.RESTORAN);
    const responseJson = await response.json();

    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTORAN(id));
    const responseJson = await response.json();

    return responseJson.restaurant;
  }

  static async postReview(review) {
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    };

    const response = await fetch(API_ENDPOINT.ADD_REVIEW, postOptions);
    return response.json();
  }
}

export default RestaurantSource;
