import { configureStore } from "@reduxjs/toolkit";
import destinationsSlice from "../features/destinations/destinationsSlice";
import pageActionSlice from "../features/pageActionSlice";

export const store = configureStore({
  reducer: {
    destinationsSlice,
    pageActionSlice,
  },
});
