import {useInfiniteQuery, useQuery} from 'react-query';

import {
  getMovieById,
  getMovieCreditsById,
  getMovieGenres,
  getMovieReviewsById,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  searchMovies,
} from '../services/api';

export const useMovieById = (id: string) => {
  return useQuery('movie', () => getMovieById(id));
};

export const useMovieReviewsById = (id: string) => {
  return useQuery('movie-reviews', () => getMovieReviewsById(id));
};

export const useMovieCreditsById = (id: string) => {
  return useQuery('movie-credits', () => getMovieCreditsById(id));
};

export const useTrendingMovies = () => {
  return useQuery('trending-movies', getTrendingMovies);
};

export const usePopularMovies = () => {
  return useQuery('popular-movies', getPopularMovies);
};

export const useInfinitePopularMovies = () => {
  return useInfiniteQuery(
    'popular-movies-infinite',
    ({pageParam = 1}) => getPopularMovies(pageParam),
    {
      getNextPageParam: lastPage => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
        return undefined;
      },
    },
  );
};

export const useTopRatedMovies = () => {
  return useQuery('top-rated-movies', getTopRatedMovies);
};

export const useMovieGenres = () => {
  return useQuery('movie-genres', getMovieGenres);
};

export const useSearchMovies = (query: string, page: number) => {
  return useQuery(['search-movies', query], () => searchMovies(query, page));
};
