import { TYPES } from "./types";

export const getMoviesParams = (params) => ({
  type: TYPES.GET_MOVIES_REQUEST,
  params,
});

export const setMovies = (payload) => ({
  type: TYPES.GET_MOVIES_SUCCESS,
  payload,
});

export const setFetchFailure = () => ({
  type: TYPES.GET_MOVIES_FAILURE,
});

// live search
export const getMoviesLiveSearchParams = (params) => ({
  type: TYPES.GET_LIVE_SEARCH_MOVIES_REQUEST,
  params,
});

export const setLiveSearchMovies = (payload) => ({
  type: TYPES.GET_LIVE_SEARCH_MOVIES_SUCCESS,
  payload,
});

export const setLiveFetchFailure = () => ({
  type: TYPES.GET_LIVE_SEARCH_MOVIES_FAILURE,
});

export const setTotalResults = (payload) => ({
  type: TYPES.SET_TOTAL_RESULTS,
  payload,
});
