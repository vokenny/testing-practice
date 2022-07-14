import { analyseArray, ArrayMetaData } from '../src/analyseArray';

describe.each([
  [[1, 8, 3, 4, 2, 6], 4, 1, 8, 6],
  [[0, 20, -10, 46], 14, -10, 46, 4],
])('analyseArray(%o)', (arr, mean, min, max, length) => {
  it(`should calculate the mean average as ${mean}`, () => {
    expect(analyseArray(arr)).toHaveProperty('mean', mean);
  });

  it(`should calculate the minimum value as ${min}`, () => {
    expect(analyseArray(arr)).toHaveProperty('min', min);
  });

  it(`should calculate the maximum value as ${max}`, () => {
    expect(analyseArray(arr)).toHaveProperty('max', max);
  });

  it(`should calculate the length of array as ${length}`, () => {
    expect(analyseArray(arr)).toHaveProperty('length', length);
  });

  it('should produce ArrayMetaData object with exact data', () => {
    const expectedData: ArrayMetaData = {
      length,
      mean,
      min,
      max,
    };

    expect(analyseArray(arr)).toEqual(expectedData);
  });

  it('should work with floating point numbers', () => {
    const arr = [1.8, 2.4, 3.5, -1.3, 4.2];
    const expectedData: ArrayMetaData = {
      length: 5,
      mean: 2.12,
      min: -1.3,
      max: 4.2,
    };

    expect(analyseArray(arr)).toEqual(expectedData);
  });
});

describe('analyseArray', () => {
  it('should throw an error for empty arrays', () => {
    expect(() => analyseArray([])).toThrow(/^Received an empty array$/);
  });
});
