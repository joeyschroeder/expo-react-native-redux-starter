import { combineReducers } from 'redux';
import { testDuck } from './test/test.duck';

export const reducers = combineReducers({
  test: testDuck
});
