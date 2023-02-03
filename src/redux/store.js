import { configureStore } from "@reduxjs/toolkit";
import sideReducer from "./SideSlide";

export const store = configureStore({
  reducer: {
    side: sideReducer,
  },
});
