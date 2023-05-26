import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null
};

export const saveProject = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProject: (state, action) => {
      state.value = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setProject } = saveProject.actions;

export default saveProject.reducer;
