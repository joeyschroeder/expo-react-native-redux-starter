import { createSlice } from '@reduxjs/toolkit';

export const NAME = 'sample';
export const INITIAL_STATE = {
  data: 0,
};

const sampleSlice = createSlice({
  name: NAME,
  initialState: INITIAL_STATE,
  reducers: {
    updateSampleData(state) {
      const updatedData = state.data + 1;
      return { ...state, data: updatedData };
    },
    resetSampleData(state) {
      return { ...state, data: 0 };
    },
  },
});

const { actions, reducer } = sampleSlice;

export { reducer as sampleReducer };

// actions
export const { updateSampleData, resetSampleData } = actions;

// selectors
export const selectSample = (state) => state[NAME] || INITIAL_STATE;
export const selectSampleData = (state) =>
  selectSample(state).data || INITIAL_STATE.data;
