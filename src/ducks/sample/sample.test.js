import { DEFAULT_STATE, resetSampleData, sampleReducer, updateSampleData } from './sample';

describe('sampleReducer', () => {
  describe('updateSampleData', () => {
    it('should add one to data', () => {
      const result = sampleReducer(DEFAULT_STATE, updateSampleData());
      expect(result).toMatchSnapshot();
    });
  });

  describe('resetSampleData', () => {
    it('should reset data', () => {
      const result = sampleReducer(DEFAULT_STATE, resetSampleData());
      expect(result).toMatchSnapshot();
    });
  });
});
