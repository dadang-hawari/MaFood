import CONFIG from './config';

const API_ENDPOINT = {
  RESTORAN: `${CONFIG.BASE_URL}list`,
  DETAIL_RESTORAN: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
