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
    ])('should add %d and %d to get %d', (x, y, sum) => {
      expect(calculator.add(x, y)).toEqual(sum);
    });

    it.each([
      [0.5, 0.2, 0.7],
      [0.1, 0.2, 0.3],
      [-0.1, -0.2, -0.3],
      [0, -0.9, -0.9],
    ])('should add %f and %f to get %f', (x, y, sum) => {
      expect(calculator.add(x, y)).toBeCloseTo(sum);
    });
  });

  describe('subtract', () => {
    it.each([
      [0, 0, 0],
      [1, 2, -1],
      [11, 9, 2],
      [-2, 0, -2],
      [-5, 8, -13],
    ])('should subtract %d and %d to get %d', (x, y, sum) => {
      expect(calculator.subtract(x, y)).toEqual(sum);
    });

    it.each([
      [0.5, 0.2, 0.3],
      [0.1, 0.2, -0.1],
      [-0.1, -0.2, 0.1],
      [0, -0.9, 0.9],
    ])('should add %f and %f to get %f', (x, y, sum) => {
      expect(calculator.subtract(x, y)).toBeCloseTo(sum);
    });
  });

  describe.skip('multiply', () => {});

  describe.skip('divide', () => {});
});
