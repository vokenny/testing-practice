import capitalise from '../src/capitalise';

describe('capitalise', () => {
  it.each([
    ['', ''],
    ['a', 'A'],
    ['hello', 'Hello'],
    ['/', '/'],
    ['1', '1'],
  ])('should capitalise %s by returning %s', (input, expected) => {
    expect(capitalise(input)).toBe(expected);
  });
});
