import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'eda1cd62ac56f17bba5191ebaf4fad10',
  },
});

export const getPopularMovies = async () => {
  const { data } = await instance.get('/trending/movie/week');
  return data;
};

export const getSearch = async query => {
  const { data } = await instance.get('/search/movie', {
    params: { query },
  });
  return data;
};

export const getMovieDetailes = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}`);
  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);
  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`);
  return data;
};
