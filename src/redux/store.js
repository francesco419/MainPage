import { configureStore } from '@reduxjs/toolkit';
import sideReducer from './SideSlide';
import aboutReducer from './aboutControl';
import projectsReducer from './project';

export const store = configureStore({
  reducer: {
    side: sideReducer,
    about: aboutReducer,
    project: projectsReducer
  }
});
