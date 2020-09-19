import { TYPES } from "./types";

const initialState = {
  movieDetails: {},
  loading: false,
};

export const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.GET_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: payload,
        loading: false,
      };
    case TYPES.GET_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        movieDetails: {},
        loading: false,
      };
    default:
      return state;
  }
};
