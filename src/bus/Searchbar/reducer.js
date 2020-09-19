import { TYPES } from "./types";

const initialState = {
  params: { page: 1 },
  liveSearchParams: {},
  totalResults: 1,
};

const setParams = (event, state) => {
  const { name, value } = event.target;
  return {
    ...state,
    params: { ...state.params, [name]: value },
  };
};

const setLiveSearchParams = (event, state) => {
  const { name, value } = event.target;
  return {
    ...state,
    liveSearchParams: { ...state.liveSearchParams, [name]: value },
  };
};

const incrementPage = (state) => {
  const page = state.params.page;
  return {
    ...state,
    params: { ...state.params, page: page + 1 },
  };
};

const decrementPage = (state) => {
  const page = state.params.page;
  return {
    ...state,
    params: { ...state.params, page: page - 1 },
  };
};

export const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.SET_SEARCH_PARAMS:
      return setParams(payload, state);
    case TYPES.SET_LIVE_SEARCH_PARAMS:
      return setLiveSearchParams(payload, state);
    case TYPES.INCREMENT_PAGE:
      return incrementPage(state);
    case TYPES.DECREMENT_PAGE:
      return decrementPage(state);
    case TYPES.RESET_PAGE:
      return {
        ...state,
        params: { ...state.params, page: 1 },
      };

    default:
      return state;
  }
};
