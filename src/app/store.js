import { configureStore } from '@reduxjs/toolkit';
import processReducer from '../features/Processes/ProcessSlice';

export const store = configureStore({
  reducer: {
    process: processReducer,
  },
});
