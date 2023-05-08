import { createSlice } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    totalResults: 0,
    totalPages: 500,
    page: 1,
    status: null,
  },
  reducers: {
    fetchPeople: (state, { payload: page }) => {
      state.people = null;
      state.page = page;
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
      if (payload.totalPages > 500) {
        state.totalPages = 500;
      } else {
        state.totalPages = payload.totalPages;
      }
    },
    fetchPeopleError: (state) => {
      state.people = null;
      state.status = "error";
    },
    setPage: (state, { payload: page }) => {
      state.page = page;
    },
  },
});

export const { fetchPeopleError, fetchPeople, fetchPeopleSuccess, setPage } =
  peopleSlice.actions;
export const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectPage = (state) => selectPeopleState(state).page;
export const selectPeopleTotalPages = (state) =>
  selectPeopleState(state).totalPages;
export const selectPeopleStatus = (state) => selectPeopleState(state).status;
export const selectPeopleTotalResults = (state) =>
  selectPeopleState(state).totalResults;
export default peopleSlice.reducer;
