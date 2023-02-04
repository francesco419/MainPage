import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const offSetSlide = createSlice({
  name: "offset",
  initialState,
  reducers: {
    setOffset: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOffset } = offSetSlide.actions;

export default offSetSlide.reducer;
