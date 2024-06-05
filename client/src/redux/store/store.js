import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../slices/loadingSlice";
import userReducer from "../slices/UserSlice";

export const store = configureStore({
  reducer: {
    loading:loadingReducer,
    user:userReducer
  },
});
