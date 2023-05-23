import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_FCxwFFYCEXbFeKE0SlxjFpY1JN6v9OC6U42igHQvuLyY369CjO2aZ70WZyuEzUfo';

export const fetchBreeds = async controllerSignal => {
  const response = await axios.get('/breeds', {
    signal: controllerSignal,
  });
  return response.data;
};

export const fetchCatByBreed = async breedId => {
  const response = await axios.get(`/images/search`, {
    params: { breed_ids: breedId },
  });
  return response.data[0];
};
