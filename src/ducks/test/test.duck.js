import { createAction, handleActions } from 'redux-actions';

const UPDATE = 'test/UPDATE';
const RESET = 'test/RESET';

export const updateTestData = createAction(UPDATE);
export const resetTestData = createAction(RESET);

export const DEFAULT_STATE = {
  data: 0,
  additionalState: 'test'
};

export const testDuck = handleActions(
  {
    [UPDATE]: state => Object.assign({}, state, { data: state.data + 1 }),
    [RESET]: () => DEFAULT_STATE
  },
  DEFAULT_STATE
);

export const selectTestState = state => state.test || {};
export const selectTestData = state => selectTestState(state).data || null;
