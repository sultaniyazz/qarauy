import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destinations: [],
  isDestLoad: false,
  isDestErr: false,
};

const destinationsSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {
    fetchingDestData: (state) => {
      state.isDestLoad = true;
    },
    fetchedDestData: (state, action) => {
      state.isDestLoad = false;
      state.destinations = action.payload;
    },
    fetchDestErr: (state) => {
      state.isDestLoad = false;
      state.isDestErr = true;
    },
  },
});

export const { fetchingDestData, fetchedDestData, fetchDestErr } =
  destinationsSlice.actions;
export default destinationsSlice.reducer;
