export const selectMovies = (state) => state.moviesReducer.movies;
export const selectLiveSearchMovies = (state) =>
  state.moviesReducer.liveSearchMovies;
export const selectLoading = (state) => state.moviesReducer.loading;
export const selectLiveSearchLoading = (state) =>
  state.moviesReducer.liveSearchLoading;

export const selectTotalResults = (state) => state.moviesReducer.totalResults;
