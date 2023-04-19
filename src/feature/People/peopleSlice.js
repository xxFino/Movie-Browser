import { createSlice } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    totalResults: 0,
    totalPages: 0,
    status: null,
  },
  reducers: {
    fetchPeople: (state, { payload: currentPage }) => {
      state.people = null;
      state.currentPage = currentPage;
      state.status = "loading";
    },
    fetchPeopleSuccess: (state, { payload }) => {
      state.people = payload.people;
      state.status = "success";
      state.totalPages = payload.totalPages;
      state.totalResults = payload.totalResults;

      if (payload.totalResults === 0) {
        state.status = "noResults";
      } else {
        state.status = "success";
      }
    },
  },
  fetchPeopleError: (state) => {
    state.people = null;
    state.status = "error";
  },
  setPage: (state, { payload: currentPage }) => {
    state.currentPage = currentPage;
  },
});

export const { fetchPeopleError, fetchPeople, fetchPeopleSuccess, setPage } =
  peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectPage = (state) => selectPeopleState(state).currentPage;
export const selectTotalPages = (state) => selectPeopleState(state).totalPages;
export const selectPeopleStatus = (state) => selectPeopleState(state).status;
export const selectTotalResults = (state) =>
  selectPeopleState(state).totalResults;
export default peopleSlice.reducer;
