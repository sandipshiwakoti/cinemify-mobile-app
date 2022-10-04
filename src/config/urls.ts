const API_KEY = 'ec88df1eaf49b2a2f99e48367089539b';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/original';
export const AVATAR_URL = 'https://www.gravatar.com/avatar';
export const NO_AVATAR_URL =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
export const urls = {
  trendingMovies: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  topRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  popularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=:pageParam`,
  trendingTVShows: `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`,
  topRatedTVShows: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}`,
  popularTVShows: `${BASE_URL}/tv/popular?api_key=${API_KEY}`,
  movieGenres: `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`,
  TVGenres: `${BASE_URL}/genre/tv/list?api_key=${API_KEY}`,
  movieById: `${BASE_URL}/movie/:id?api_key=${API_KEY}`,
  movieReviewsById: `${BASE_URL}/movie/:id/reviews?api_key=${API_KEY}`,
  movieCreditsById: `${BASE_URL}/movie/:id/credits?api_key=${API_KEY}`,
  searchMovies: `${BASE_URL}/search/movie?query=:query&page=:page?&api_key=${API_KEY}`,
  TVById: `${BASE_URL}/tv/:id?api_key=${API_KEY}`,
  TVReviewsById: `${BASE_URL}/tv/:id/reviews?api_key=${API_KEY}`,
  TVCreditsById: `${BASE_URL}/tv/:id/credits?api_key=${API_KEY}`,
  searchTVShows: `${BASE_URL}/search/tv?query=:query&page=:page?&api_key=${API_KEY}`,
};
