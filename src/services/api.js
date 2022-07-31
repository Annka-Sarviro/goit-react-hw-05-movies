import axios from 'axios';

const API_KEY = 'cdd1c73df14b33d6290e56a1d1d58143';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTranding = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const getSearchMovies = async query => {
  const response = await axios.get(
    `/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return response.data;
};

export const getMoviesDetaile = async id => {
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const getMoviesCredits = async id => {
  const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return response.data;
};

export const getMoviesReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data;
};
