import { TYPES } from "./types";

export const getMovieDetails = (id) => ({
  type: TYPES.GET_MOVIE_DETAILS_REQUEST,
  id,
});

export const setMovieDetails = (payload) => ({
  type: TYPES.GET_MOVIE_DETAILS_SUCCESS,
  payload,
});

export const setMovieDetailshFailure = () => ({
  type: TYPES.GET_MOVIE_DETAILS_FAILURE,
});
