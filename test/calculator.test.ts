import { calculator } from '../src/calculator';

// TODO: Implement these tests first
describe('calculator', () => {
  describe('add', () => {
    it.each([
      [0, 0, 0],
      [1, 2, 3],
      [9, 11, 20],
    ])('should add %d and %d to get %d', (x, y, sum) => {
      expect(calculator.add(x, y)).toEqual(sum);
    });

    it.each([
      [0.5, 0.2, 0.7],
      [0.1, 0.2, 0.3],
    ])('should add %d and %d to get %d', (x, y, sum) => {
      expect(calculator.add(x, y)).toBeCloseTo(sum);
    });
  });

  describe.skip('subtract', () => {});

  describe.skip('multiply', () => {});

  describe.skip('divide', () => {});
});