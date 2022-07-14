import reverseStr from '../src/reverseStr';

describe('reverseStr', () => {
  it.each([
    ['10', '01'],
    ['Hello', 'olleH'],
    ['bed', 'deb'],
    ['A short sentence', 'ecnetnes trohs A'],
  ])('should return the string in reverse', (input, expected) => {
    expect(reverseStr(input)).toBe(expected);
  });
});
