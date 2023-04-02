import { delay, call, put, takeLatest } from "redux-saga/effects";
import { fetchMoviesApi } from "./fetchMoviesApi";
import {
  fetchMoviesError,
  fetchMovies,
  fetchMoviesSuccess,
} from "./moviesSlice";

function* fetchMoviesHandler() {
  try {
    yield delay();
    const movies = yield call(fetchMoviesApi);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
