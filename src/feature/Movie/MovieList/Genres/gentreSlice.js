import { createSlice } from "@reduxjs/toolkit";

export const gentresSlice = createSlice({
  name: "gentres",
  initialState: {
    gentres: [],
  },
  reducers: {
    fetchGentres: () => ({
      gentres: null,
      status: "loading",
    }),
    fetchGentresSuccess: (_, { payload: gentres }) => ({
     gentres,
      status: "success",
    }),
    fetchGentresError: () => ({
      gentres: null,
      status: "error",
    }),
},
});
export const { fetchGentresError, fetchGentres, fetchGentresSuccess } =
  gentresSlice.actions;
const selectGentresState = (state) => state.gentres;

export const selectGentres = (state) => selectGentresState(state).gentres;
export const selectGentresStatus = (state) => selectGentresState(state).status;

export default gentresSlice.reducer;
