import { all } from "redux-saga/effects";
import { moviesSaga } from "../feature/Movie/moviesSaga";
import { peopleSaga } from "../feature/People/peopleSaga";
import { actorSaga } from "../feature/People/ActorPage/actorSaga";

export default function* rootSaga() {
  yield all([moviesSaga(),peopleSaga(),actorSaga()]);
}