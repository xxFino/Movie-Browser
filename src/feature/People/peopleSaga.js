import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularData } from "../../core/getData";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
} from "./peopleSlice";

function* fetchPeopleHandler({ payload }) {
  try {
    yield delay(1000);
    const page = payload.page;
    const [people] = yield all([call(getPopularData, "person", page)]);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
