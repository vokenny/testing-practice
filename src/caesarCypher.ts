const ALPHABET_ARR: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
const NUM_OF_CHARS: number = ALPHABET_ARR.length;

const isLowerCase = (char: string): boolean => char === char.toLowerCase();

function keyMapGen(key: number): {} {
  return ALPHABET_ARR.reduce((keyMap: {}, char: string, idx: number): {} => {
    const shiftedIdx = idx + key;

    const newKeyIdx: number =
      shiftedIdx < 0
        ? shiftedIdx + NUM_OF_CHARS
        : shiftedIdx >= NUM_OF_CHARS
        ? shiftedIdx - NUM_OF_CHARS
        : shiftedIdx;

    return {
      ...keyMap,
      [char]: ALPHABET_ARR[newKeyIdx],
    };
  }, {});
}

export default function caesarCypher(key: number, plainText: string): any {
  const shiftedKeyMap = keyMapGen(key);

  const cypher: string = plainText
    .split('')
    .reduce((cypher: string, char: string) => {
      const lowerChar: string = char.toLowerCase();
      if (!ALPHABET_ARR.includes(lowerChar)) return cypher + char;

      const newChar: string = isLowerCase(char)
        ? shiftedKeyMap[lowerChar]
        : shiftedKeyMap[lowerChar].toUpperCase();

      return cypher + newChar;
    }, '');

  return cypher;
}
