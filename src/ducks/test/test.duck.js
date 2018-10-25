import { createAction, handleActions } from 'redux-actions';

const UPDATE = 'test/UPDATE';
const RESET = 'test/RESET';

export const updateTestData = createAction(UPDATE);
export const resetTestData = createAction(RESET);

const DEFAULT_STATE = {
  data: 0
};

export const testDuck = handleActions(
  {
    [UPDATE]: state => Object.assign({}, state, { isRequesting: false }),
    [RESET]: state => Object.assign({}, state, { isRequesting: true })
  },
  DEFAULT_STATE
);

export const selectTestState = state => state.test || {};
export const selectTestData = state => selectTestState(state).data || null;
