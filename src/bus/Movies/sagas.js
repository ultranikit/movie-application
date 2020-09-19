import { takeEvery, put, all } from "redux-saga/effects";
import { TYPES } from "./types";
import {
  setMovies,
  setFetchFailure,
  setLiveSearchMovies,
  setLiveFetchFailure,
  setTotalResults,
} from "./actions";
import api from "../../Api";

export default function* MoviesSaga() {
  yield takeEvery(TYPES.GET_MOVIES_REQUEST, onGetMovies);
  yield takeEvery(TYPES.GET_LIVE_SEARCH_MOVIES_REQUEST, onGetLiveSearchMovies);
}

function* onGetMovies(action) {
  try {
    const params = action.params;
    const movies = yield api.getMovies({ params: { ...params } });
    if (movies.data.Error) {
      throw new Error(movies.data.Error);
    }
    const data = movies.data.Search;
    const totalResults = movies.data.totalResults;
    yield all([put(setMovies(data)), put(setTotalResults(totalResults))]);
  } catch (e) {
    yield put(setFetchFailure());
  }
}

function* onGetLiveSearchMovies(action) {
  try {
    const params = action.params;
    const movies = yield api.getMovies({ params: { ...params } });
    if (movies.data.Error) {
      throw new Error(movies.data.Error);
    }
    const data = movies.data.Search;
    yield put(setLiveSearchMovies(data));
  } catch (e) {
    yield put(setLiveFetchFailure());
  }
}
