import { configureStore } from "@reduxjs/toolkit";
import testReducer from "../features/testSlice";

export const store = configureStore({
  reducer: {
    test: testReducer,
  },
});
