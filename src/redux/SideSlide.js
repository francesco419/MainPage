import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

export const sideSlice = createSlice({
  name: 'side',
  initialState,
  reducers: {
    changeSide: (state, action) => {
      state.value = action.payload;
      console.log(state.value);
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeSide } = sideSlice.actions;

export default sideSlice.reducer;
