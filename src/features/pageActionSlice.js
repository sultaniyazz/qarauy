import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

const pageActionSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    showModal: (state) => {
      state.modal = !state.modal;
    },
  },
});

export const { showModal } = pageActionSlice.actions;
export default pageActionSlice.reducer;
