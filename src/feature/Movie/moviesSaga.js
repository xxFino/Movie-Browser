import { delay, call, put, takeLatest } from "redux-saga/effects";
import { fetchData } from "../../core/fetchData";
import {
  fetchMoviesError,
  fetchMovies,
  fetchMoviesSuccess,
} from "./moviesSlice";

function* fetchMoviesHandler() {
  try {
    yield delay();
    const movies = yield call(fetchData);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
