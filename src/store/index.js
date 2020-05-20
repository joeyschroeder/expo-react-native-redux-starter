import { combineReducers } from 'redux';
import { sampleReducer, REDUCER_PREFIX as SAMPLE } from './sample/sample';

export const reducers = combineReducers({
  [SAMPLE]: sampleReducer,
});
