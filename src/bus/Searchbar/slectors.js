export const selectSearchParams = (state) => state.searchReducer.params;
export const selectLiveSearchParams = (state) =>
  state.searchReducer.liveSearchParams;
export const selectCurrentPage = (state) => state.searchReducer.params.page;
