import axios from 'axios';
import {API_KEY} from '@env';
import {urls} from '../config/urls';

export const getMovieById = async (id: string) => {
  const {data} = await axios.get(urls.movieById.replace(':id', id));
  return data;
};

export const getMovieReviewsById = async (id: string) => {
  const {data} = await axios.get(urls.movieReviewsById.replace(':id', id));
  return data;
};

export const getMovieCreditsById = async (id: string) => {
  const {data} = await axios.get(urls.movieCreditsById.replace(':id', id));
  return data;
};

export const getTVReviewsById = async (id: string) => {
  const {data} = await axios.get(urls.TVReviewsById.replace(':id', id));
  return data;
};

export const getTVCreditsById = async (id: string) => {
  const {data} = await axios.get(urls.TVCreditsById.replace(':id', id));
  return data;
};

export const getTVById = async (id: string) => {
  const {data} = await axios.get(urls.TVById.replace(':id', id));
  return data;
};

export const getTrendingMovies = async () => {
  const {data} = await axios.get(urls.trendingMovies);
  return data;
};

export const getPopularMovies = async (pageParam: number) => {
  const {data} = await axios.get(
    urls.popularMovies.replace(':pageParam', pageParam.toString()),
  );
  return data;
};

export const getTopRatedMovies = async () => {
  const {data} = await axios.get(urls.topRatedMovies);
  return data;
};

export const getMovieGenres = async () => {
  const {data} = await axios.get(urls.movieGenres);
  return data;
};

export const getTrendingTVShows = async () => {
  const {data} = await axios.get(urls.trendingTVShows);
  return data;
};

export const getPopularTVShows = async () => {
  const {data} = await axios.get(urls.popularTVShows);
  return data;
};

export const getTopRatedTVShows = async () => {
  const {data} = await axios.get(urls.topRatedTVShows);
  return data;
};

export const getTVGenres = async () => {
  const {data} = await axios.get(urls.TVGenres);
  return data;
};

export const searchMovies = async (query: string, page: number) => {
  const {data} = await axios.get(
    urls.searchMovies
      .replace(':query', query)
      .replace(':page', page.toString()),
  );
  return data;
};

export const searchTVShows = async (query: string, page: number) => {
  const {data} = await axios.get(
    urls.searchTVShows
      .replace(':query', query)
      .replace(':page', page.toString()),
  );
  return data;
};
