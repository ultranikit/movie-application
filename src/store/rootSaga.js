import { all } from "redux-saga/effects";
import MoviesSaga from "../bus/Movies/sagas";
import MovieDetailsSaga from "../bus/Movie/sagas";

export default function* rootSaga() {
  yield all([MoviesSaga(), MovieDetailsSaga()]);
}
