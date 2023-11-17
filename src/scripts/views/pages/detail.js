import RestaurantSource from '../../data/restaurant-source';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

import PostReview from '../../utils/post-review';
import FavoriteButtonInitiator from '../../utils/favorite-button-init';

import UrlParser from '../../routes/url-parser';
import { createDetailRestaurantTemplate } from '../templates/template-creator';

// Components
import '../../components/app-review';
import '../../components/app-favorite-button';
import '../../components/app-detail';
import '../../components/comment-reviewer';

const Detail = {
  async render() {
    return `
        <app-detail></app-detail>
        <app-favorite-button></app-favorite-button>
        <app-review></app-review>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantSource.detailRestaurant(url.id);

    const loadingSpinner = document.querySelector('loading-spinner');
    const dataNotFound = document.querySelector('.data-not-found');
    const detailContainer = document.querySelector('.detail-container');

    if (!detail) {
      dataNotFound.classList.remove('hidden');
    } else if (detail) {
      dataNotFound.classList.add('hidden');
      loadingSpinner.classList.add('hidden');

      const reviewContainer = document.querySelector('app-review');
      detailContainer.innerHTML = createDetailRestaurantTemplate(detail);

      detail.customerReviews.forEach((review) => {
        const reviewerItem = document.createElement('comment-reviewer');
        reviewerItem.render(review);
        reviewContainer.appendChild(reviewerItem);
      });

      FavoriteButtonInitiator.init({
        favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: detail.id,
          name: detail.name,
          city: detail.city,
          rating: detail.rating,
          pictureId: detail.pictureId,
          description: detail.description,
        },
      });

      const sendReview = document.getElementById('sendReview');
      sendReview.addEventListener('click', (event) => {
        PostReview();
        event.preventDefault();
      });
    }
  },
};

export default Detail;
