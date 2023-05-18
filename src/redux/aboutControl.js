import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null
};

export const aboutControl = createSlice({
  name: 'control',
  initialState,
  reducers: {
    setControl: (state, action) => {
      state.value = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setControl } = aboutControl.actions;

export default aboutControl.reducer;
