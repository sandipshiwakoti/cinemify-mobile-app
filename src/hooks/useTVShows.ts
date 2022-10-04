import {useQuery} from 'react-query';

import {
  getPopularTVShows,
  getTopRatedTVShows,
  getTrendingTVShows,
  getTVById,
  getTVCreditsById,
  getTVGenres,
  getTVReviewsById,
  searchTVShows,
} from '../services/api';

export const useTVReviewsById = (id: string) => {
  return useQuery('tv-reviews', () => getTVReviewsById(id));
};

export const useTVById = (id: string) => {
  return useQuery('tv', () => getTVById(id));
};

export const useTVCreditsById = (id: string) => {
  return useQuery('tv-credits', () => getTVCreditsById(id));
};
export const useTrendingTVShows = () => {
  return useQuery('trending-tv-shows', getTrendingTVShows);
};

export const usePopularTVShows = () => {
  return useQuery('popular-tv-shows', getPopularTVShows);
};

export const useTopRatedTVShows = () => {
  return useQuery('top-rated-tv-shows', getTopRatedTVShows);
};

export const useTVGenres = () => {
  return useQuery('tv-genres', getTVGenres);
};

export const useSearchTVShows = (query: string, page: number) => {
  return useQuery(['search-tv-shows', query], () => searchTVShows(query, page));
};
