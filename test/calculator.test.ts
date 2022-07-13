import { calculator } from '../src/calculator';

// TODO: Implement these tests first
describe('calculator', () => {
  describe('add', () => {
    it.each([
      [0, 0, 0],
      [1, 2, 3],
      [9, 11, 20],
      [-2, 0, -2],
      [-5, 8, 3],
    ])('should add %d and %d to get %d', (x, y, result) => {
      expect(calculator.add(x, y)).toEqual(result);
    });

    it.each([
      [0.5, 0.2, 0.7],
      [0.1, 0.2, 0.3],
      [-0.1, -0.2, -0.3],
      [0, -0.9, -0.9],
    ])('should add %f and %f to get %f', (x, y, result) => {
      expect(calculator.add(x, y)).toBeCloseTo(result);
    });
  });

  describe('subtract', () => {
    it.each([
      [0, 0, 0],
      [1, 2, -1],
      [11, 9, 2],
      [-2, 0, -2],
      [-5, 8, -13],
    ])('should subtract %d and %d to get %d', (x, y, result) => {
      expect(calculator.subtract(x, y)).toEqual(result);
    });

    it.each([
      [0.5, 0.2, 0.3],
      [0.1, 0.2, -0.1],
      [-0.1, -0.2, 0.1],
      [0, -0.9, 0.9],
    ])('should subtract %f and %f to get %f', (x, y, result) => {
      expect(calculator.subtract(x, y)).toBeCloseTo(result);
    });
  });

  describe('multiply', () => {
    it.each([
      [0, 0, 0],
      [1, 2, 2],
      [12, 3, 36],
      [-1, 9, -9],
    ])('should multiply %d and %d to get %d', (x, y, result) => {
      expect(calculator.multiply(x, y)).toEqual(result);
    });

    it.each([
      [0.1, 0, 0],
      [0.1, 10, 1],
      [1.25, 4, 5],
      [-0.5, -2.2, 1.1],
      [-1.5, 20, -30],
    ])('should multiply %f and %f to get %f', (x, y, result) => {
      expect(calculator.multiply(x, y)).toBeCloseTo(result);
    });
  });

  describe.skip('divide', () => {});
});
