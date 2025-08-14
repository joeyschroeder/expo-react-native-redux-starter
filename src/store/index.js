import { configureStore } from '@reduxjs/toolkit';

import { NAME as SAMPLE, sampleReducer } from './sample/sample';

export const STORE = configureStore({
  reducer: {
    [SAMPLE]: sampleReducer,
  },
});
