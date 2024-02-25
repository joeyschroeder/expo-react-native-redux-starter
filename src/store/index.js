import { configureStore } from '@reduxjs/toolkit';
import { sampleReducer, NAME as SAMPLE } from './sample/sample';

export const STORE = configureStore({
  reducer: {
    [SAMPLE]: sampleReducer,
  },
});
