import { createSlice } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    status: "initial",
  },
  reducers: {
    fetchPeople: () => ({
      people: null,
      status: "loading",
    }),
    fetchPeopleSuccess: (_, { payload: people }) => ({
      people,
      status: "success",
    }),
    fetchPeopleError: () => ({
      people: null,
      status: "error",
    }),
  },
});

export const { fetchPeopleError, fetchPeople, fetchPeopleSuccess} =
  peopleSlice.actions;
const selectPeopleState = (state) => ({
  people: state.people.people,
  status: state.people.status,
});

export const selectPeople = (state) => selectPeopleState(state).people;
export const selectPeopleStatus = (state) => selectPeopleState(state).status;

export default peopleSlice.reducer;
