const initialState = {
  movieWatchlist: [],
  tvWatchlist: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIE': {
      return state.movieWatchlist.find(movie => movie.id === action.payload.id);
    }
    case 'GET_TV': {
      return state.tvWatchlist.find(tv => tv.id === action.payload.id);
    }
    case 'ADD_MOVIE':
      return {
        ...state,
        movieWatchlist: [...state.movieWatchlist, action.payload],
      };
    case 'ADD_TV':
      return {
        ...state,
        tvWatchlist: [...state.tvWatchlist, action.payload],
      };
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movieWatchlist: state.movieWatchlist.filter(
          movie => movie.id !== action.payload.id,
        ),
      };
    case 'REMOVE_TV':
      return {
        ...state,
        tvWatchlist: state.tvWatchlist.filter(
          tv => tv.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};

export default reducer;
