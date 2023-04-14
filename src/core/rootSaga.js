import { all } from "redux-saga/effects";
import { moviesSaga } from "../feature/Movie/moviesSaga";
import { peopleSaga } from "../feature/People/peopleSaga";

export default function* rootSaga() {
  yield all([moviesSaga(),peopleSaga()]);
}
