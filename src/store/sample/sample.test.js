import {
  INITIAL_STATE,
  NAME,
  resetSampleData,
  sampleReducer,
  selectSample,
  selectSampleData,
  updateSampleData,
} from './sample';

describe('sampleReducer', () => {
  describe('updateSampleData', () => {
    const action = updateSampleData();
    const { data } = sampleReducer(INITIAL_STATE, action);

    it('should update state.data by 1', () => {
      expect(data).toEqual(INITIAL_STATE.data + 1);
    });
  });

  describe('resetSampleData', () => {
    const action = resetSampleData();
    const { data } = sampleReducer({ data: 1 }, action);

    it('should reset state.data to DEFAULT_STATE.data', () => {
      expect(data).toEqual(INITIAL_STATE.data);
    });
  });

  describe('selectSample', () => {
    it('should return state', () => {
      const value = 1;
      const state = { [NAME]: value };
      const result = selectSample(state);

      expect(result).toEqual(value);
    });
  });

  describe('selectSampleData', () => {
    it('should return state.data', () => {
      const data = 1;
      const value = { data };
      const state = { [NAME]: value };

      const result = selectSampleData(state);

      expect(result).toEqual(data);
    });
  });
});
