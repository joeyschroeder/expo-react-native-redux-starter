import { createAction, handleActions } from 'redux-actions';

export const REDUCER_PREFIX = 'sample';

// action types
const UPDATE = `${REDUCER_PREFIX}/UPDATE`;
const RESET = `${REDUCER_PREFIX}/RESET`;

// action creators
export const updateSampleData = createAction(UPDATE);
export const resetSampleData = createAction(RESET);

// default state
export const DEFAULT_STATE = {
  data: 0,
};

// reducer
export const sampleReducer = handleActions(
  {
    [RESET]: () => ({ ...DEFAULT_STATE }),
    [UPDATE]: (state) => ({ ...state, data: state.data + 1 }),
  },
  DEFAULT_STATE
);

// selectors
export const selectSample = (state) => state[REDUCER_PREFIX] || DEFAULT_STATE;
export const selectSampleData = (state) =>
  selectSample(state).data || DEFAULT_STATE.data;

// thunks
