import caesarCypher from '../src/caesarCypher';

describe('caesarCypher', () => {
  it.each([
    ['abcdefghijklmnopqrstuvwxyz', 'bcdefghijklmnopqrstuvwxyza', 1],
    ['abcdefghijklmnopqrstuvwxyz', 'zabcdefghijklmnopqrstuvwxy', -1],
    // ['Hello World!', 'Jgnnq Yqtnf!', 2],
    // ['Hello World!', 'Jgnnq Yqtnf!', 2],
    // ["What's the point?", "What's the point?", 0],
    // [
    //   'The quick brown fox jumps over the lazy dog.',
    //   'Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl.',
    //   5,
    // ],
  ])(
    'should transform %s to %s based on key of %d',
    (original, cypher, key) => {
      expect(caesarCypher(key, original)).toBe(cypher);
    }
  );
});