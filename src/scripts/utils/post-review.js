import RestaurantSource from '../data/restaurant-source';
import UrlParser from '../routes/url-parser';
import '../components/comment-reviewer';

const PostReview = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const inputName = document.getElementById('inputNama');
  const inputComment = document.getElementById('inputKomen');
  const reviewContainer = document.querySelector('app-review');

  if (!inputName.value || !inputComment.value) {
    return;
  }

  const optionDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedDate = new Date().toLocaleDateString('id-ID', optionDate);

  const inputData = {
    id: url.id,
    name: inputName.value,
    review: inputComment.value,
  };

  await RestaurantSource.postReview(inputData);
  inputData.date = formattedDate;

  const reviewerItem = document.createElement('comment-reviewer');
  reviewerItem.render(inputData);
  reviewContainer.appendChild(reviewerItem);

  inputName.value = '';
  inputComment.value = '';
};

export default PostReview;
