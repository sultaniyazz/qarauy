import axios from "axios";
import {
  fetchDestErr,
  fetchedDestData,
  fetchingDestData,
} from "../features/destinations/destinationsSlice";

export const getAllDestData = (url) => {
  return async (dispatch) => {
    dispatch(fetchingDestData());
    try {
      const res = await axios.get(url);
      dispatch(fetchedDestData(res.data));
    } catch (err) {
      dispatch(fetchDestErr(err.message));
    }
  };
};
