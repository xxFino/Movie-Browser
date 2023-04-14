import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchData, fetchPerson } from "../../core/fetchData";
import { fetchPeople, fetchPeopleError, fetchPeopleSuccess } from "./peopleSlice";

function* fetchPeopleHandler() {
    try {
      yield delay(1000);
      const [people] = yield all([call(fetchPerson)]);
      yield put(fetchPeopleSuccess(people));
    } catch (error) {
      yield put(fetchPeopleError());
    }
  }
  
  export function* peopleSaga() {
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
  }