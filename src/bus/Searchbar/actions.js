import { TYPES } from "./types";

export const setSearchParams = (payload) => ({
  type: TYPES.SET_SEARCH_PARAMS,
  payload,
});

export const setLiveSearchParams = (payload) => ({
  type: TYPES.SET_LIVE_SEARCH_PARAMS,
  payload,
});

export const incrementPageParam = () => ({
  type: TYPES.INCREMENT_PAGE,
});

export const decrementPageParam = () => ({
  type: TYPES.DECREMENT_PAGE,
});

export const resetPageParam = () => ({
  type: TYPES.RESET_PAGE,
});
