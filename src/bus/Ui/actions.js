import { TYPES } from "./types";

export const closeHeaderCollapse = () => ({
  type: TYPES.CLOSE_HEADER_COLLAPSE,
});

export const openHeaderCollapse = () => ({
  type: TYPES.OPEN_HEADER_COLLAPSE,
});

export const closeSearchCollapse = () => ({
  type: TYPES.CLOSE_SEARCH_COLLAPSE,
});

export const openSearchCollapse = () => ({
  type: TYPES.OPEN_SEARCH_COLLAPSE,
});
