export const calculator = {
  add(x: number, y: number): number {
    return x + y;
  },

  subtract(x: number, y: number): number {
    return x - y;
  },

  multiply(x: number, y: number): number {
    return x * y;
  },

  divide(x: number, y: number): number {
    if (y === 0) throw new Error('Cannot divide by zero');

    return x / y;
  },
};
