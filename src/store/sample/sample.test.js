import { reducers } from '..';
import { updateSampleData, selectSampleData, DEFAULT_STATE, resetSampleData } from './sample';

describe('sampleReducer', () => {
  describe('updateSampleData', () => {
    const action = updateSampleData();
    const state = reducers({}, action);
    const result = selectSampleData(state);

    it('should update state.sample.data by 1', () => {
      expect(result).toEqual(DEFAULT_STATE.data + 1);
    });
  });

  describe('resetSampleData', () => {
    const action = resetSampleData();
    const state = reducers({ sample: { data: 1 } }, action);
    const result = selectSampleData(state);

    it('should reset state.sample.data to DEFAULT_STATE.data', () => {
      expect(result).toEqual(DEFAULT_STATE.data);
    });
  });
});
