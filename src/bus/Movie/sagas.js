import { takeEvery, put } from "redux-saga/effects";
import { TYPES } from "./types";
import { setMovieDetails, setMovieDetailshFailure } from "./actions";
import api from "../../Api";

export default function* MovieDetailsSaga() {
  yield takeEvery(TYPES.GET_MOVIE_DETAILS_REQUEST, onGetMovieDetails);
}

function* onGetMovieDetails(action) {
  try {
    const movieId = action.id;
    const movie = yield api.getMoviesDetails(movieId);
    if (movie.data.Error) {
      throw new Error(movie.data.Error);
    }
    const data = movie.data;
    yield put(setMovieDetails(data));
  } catch (e) {
    yield put(setMovieDetailshFailure());
  }
}
