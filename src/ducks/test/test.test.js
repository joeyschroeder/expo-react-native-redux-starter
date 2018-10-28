import { DEFAULT_STATE, resetTestData, testDuck, updateTestData } from './test.duck';

describe('testDuck', () => {
  describe('updateTestData', () => {
    it('should add one to data', () => {
      const result = testDuck(DEFAULT_STATE, updateTestData());
      expect(result).toMatchSnapshot();
    });
  });

  describe('resetTestData', () => {
    it('should reset data', () => {
      const result = testDuck(DEFAULT_STATE, resetTestData());
      expect(result).toMatchSnapshot();
    });
  });
});
