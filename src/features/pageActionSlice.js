import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  changeLanguage: false,
};

const pageActionSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    showModal: (state) => {
      state.modal = !state.modal;
    },
    showLanguage: (state) => {
      state.changeLanguage = !state.changeLanguage;
    },
  },
});

export const { showModal, showLanguage } = pageActionSlice.actions;
export default pageActionSlice.reducer;
