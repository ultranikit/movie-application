import { TYPES } from "./types.js";

const initialState = {
  headerCollapse: false,
  searchCollapse: false,
};

export const uiReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case TYPES.OPEN_HEADER_COLLAPSE:
      return {
        ...state,
        headerCollapse: true,
      };
    case TYPES.CLOSE_HEADER_COLLAPSE:
      return {
        ...state,
        headerCollapse: false,
      };

    case TYPES.OPEN_SEARCH_COLLAPSE:
      return {
        ...state,
        searchCollapse: true,
      };
    case TYPES.CLOSE_SEARCH_COLLAPSE:
      return {
        ...state,
        searchCollapse: false,
      };

    default:
      return state;
  }
};
