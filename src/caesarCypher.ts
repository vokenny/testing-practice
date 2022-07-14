const LOWER_ALPHABET: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
const UPPER_ALPHABET: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const NUM_OF_CHARS: number = UPPER_ALPHABET.length;

const isLowerCase = (char: string): boolean => char === char.toLowerCase();

function keyMapGen(key: number, alphabetArr): {} {
  return alphabetArr.reduce((keyMap: {}, char: string, idx: number): {} => {
    const shiftedIdx = idx + key;

    const newKeyIdx: number =
      shiftedIdx < 0
        ? shiftedIdx + NUM_OF_CHARS
        : shiftedIdx >= NUM_OF_CHARS
        ? shiftedIdx - NUM_OF_CHARS
        : shiftedIdx;

    return {
      ...keyMap,
      [char]: isLowerCase(char)
        ? LOWER_ALPHABET[newKeyIdx]
        : UPPER_ALPHABET[newKeyIdx],
    };
  }, {});
}

export default function caesarCypher(key: number, plainText: string): any {
  const shiftedLowerKeyMap = keyMapGen(key, LOWER_ALPHABET);
  const shiftedUpperKeyMap = keyMapGen(key, UPPER_ALPHABET);

  const cypher: string = plainText
    .split('')
    .reduce((cypher: string, char: string) => {
      const newChar: string = LOWER_ALPHABET.includes(char)
        ? shiftedLowerKeyMap[char]
        : UPPER_ALPHABET.includes(char)
        ? shiftedUpperKeyMap[char]
        : char;

      return cypher + newChar;
    }, '');

  return cypher;
}
