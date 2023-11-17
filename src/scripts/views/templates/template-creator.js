import CONFIG from '../../globals/config';

const createRestaurantTemplate = (data) => `

  <picture>
    <img
      src="images/placeholder-skeleton.svg"
      data-src="${CONFIG.BASE_IMAGE_URL}small/${data.pictureId}"
      alt="Photo of ${data.name}"
      class="item-img lazyload"
    />
  </picture>

  <h2 class="kota" aria-label='Kota ${data.city}'>${data.city}</h2>
  <h2 class="rating"> Rating ⭐️ ${data.rating} </h2>
  <div class="konten">
    <h2 class="restoran-title"><a href="#/detail/${data.id}">${data.name}</a></h2>
    <p>${data.description.slice(0, 110)}...</p>
  </div>
`;

const createDetailRestaurantTemplate = (data) => `
  <h2 class="detail-title" tabindex="0">${data.name}</h2>
  <div class="restaurant-detail">
    <picture>
      <img
        src="images/placeholder-skeleton.svg"
        data-src="${CONFIG.BASE_IMAGE_URL}medium/${data.pictureId}"
        alt="${data.name}"
        class="img-detail lazyload"
      />
    </picture>
    <div class="detail-info">
      <div>
        <h3 class='bm-2'>Address</h3>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" height="0.9em" viewBox="0 0 384 512">
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
          </svg>
          ${data.city}, ${data.address}
        </p>
      </div>
      <div>
        <h3 class='bm-2'>Rating</h3>
        <p><i><b>${data.rating}⭐️ Rated Restaurant</b></i></p>
      </div>
      <span id="food-drinks">
        <h3 class='mb-05'>Foods</h3>
        <ul>
          ${data.menus.foods.map((food) => `
            <li class="menus">
              <div>${food.name}</div> Rp 25k
            </li>`).join('')}
        </ul>
        <h3 class='mb-05'>Beverages</h3>
        <ul>
          ${data.menus.drinks.map((drink) => `
            <li class="menus">
              <div>${drink.name}</div> Rp 15k
            </li>`).join('')}
        </ul>
      </span>
      <h3>Description</h3>
      <p class="justify">${data.description}</p>
    </div>
  </div>
`;

const createReviewerRestaurantTemplate = (data) => `  
  <div class="review-data ma-1">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 0.2);">
      <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path>
    </svg>
    <h3>${data.name}</h3><i class="date"> - ${data.date}</i>
  </div>
  <p class="comment-review">${data.review}</p>
  <hr>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="add this restaurant to your favorites restaurant" id="favoriteButton" class="favorite">
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" style="fill: rgba(255,255,255, 1);transform: ;msFilter:;">
      <path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path>
    </svg>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="remove this restaurant from your favorites restaurant" id="favoriteButton" class="favorite">
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" style="fill: rgba(255,255,255, 1);transform: ;msFilter:;">
      <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
    </svg>
  </button>
`;

export {
  createRestaurantTemplate,
  createDetailRestaurantTemplate,
  createReviewerRestaurantTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
