import { createReviewerRestaurantTemplate } from '../views/templates/template-creator';

class CommentReviewer extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render(data) {
    this.innerHTML = createReviewerRestaurantTemplate(data);
  }
}

customElements.define('comment-reviewer', CommentReviewer);
