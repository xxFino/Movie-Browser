import { delay, call, put, takeLatest, all } from "redux-saga/effects";
import { fetchData, fetchGenresApi } from "../../core/fetchData";
import {
  fetchMoviesError,
  fetchMovies,
  fetchMoviesSuccess,
  fetchGenres,
} from "./moviesSlice";

function* fetchMoviesHandler() {
  try {
    yield delay(0);
    const [movies, genres] = yield all([call(fetchData), call(fetchGenresApi)]);
    yield put(fetchMoviesSuccess(movies));
    yield put(fetchGenres(genres));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
