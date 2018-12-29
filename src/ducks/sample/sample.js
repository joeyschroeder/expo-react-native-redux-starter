import { createAction, handleActions } from 'redux-actions';

const UPDATE = 'sample/UPDATE';
const RESET = 'sample/RESET';

export const updateSampleData = createAction(UPDATE);
export const resetSampleData = createAction(RESET);

export const DEFAULT_STATE = {
  data: 0
};

export const sampleReducer = handleActions(
  {
    [UPDATE]: state => ({ ...state, data: state.data + 1 }),
    [RESET]: () => DEFAULT_STATE
  },
  DEFAULT_STATE
);

export const selectSample = state => state.sample || {};
export const selectSampleData = state => selectSample(state).data || null;
