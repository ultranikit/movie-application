import { TYPES } from "./types";

const initialState = {
  movies: [],
  liveSearchMovies: [],
  loading: false,
  liveSearchLoading: false,
  totalResults: 0,
};

export const moviesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.GET_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case TYPES.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: payload,
        loading: false,
      };
    case TYPES.GET_MOVIES_FAILURE:
      return {
        ...state,
        movies: [],
        totalResults: 0,
        loading: false,
      };

    case TYPES.GET_LIVE_SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        liveSearchLoading: true,
      };

    case TYPES.GET_LIVE_SEARCH_MOVIES_SUCCESS:
      const movies = payload.slice(0, 5);
      return {
        ...state,
        liveSearchMovies: movies,
        liveSearchLoading: false,
      };
    case TYPES.GET_LIVE_SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        liveSearchMovies: [],
        liveSearchLoading: false,
      };

    case TYPES.SET_TOTAL_RESULTS:
      return {
        ...state,
        totalResults: Number(payload),
      };

    default:
      return state;
  }
};
