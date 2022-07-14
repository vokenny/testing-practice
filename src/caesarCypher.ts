const alphabetArr: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
const NUM_OF_CHARS: number = alphabetArr.length;
const originalKeyMap: {} = alphabetArr.reduce(
  (keyMap: {}, char: string, idx: number) => ({ ...keyMap, [idx]: char }),
  {}
);

function keyMapGen(key: number): {} {
  return alphabetArr.reduce((keyMap: {}, char: string, idx: number): {} => {
    const shiftedIdx = idx + key;
    const keyMapIdx: number =
      shiftedIdx < 0
        ? shiftedIdx + NUM_OF_CHARS
        : shiftedIdx >= NUM_OF_CHARS
        ? shiftedIdx - NUM_OF_CHARS
        : shiftedIdx;

    return {
      ...keyMap,
      [char]: originalKeyMap[keyMapIdx],
    };
  }, {});
}

export default function caesarCypher(key: number, plainText: string): any {
  const shiftedKeyMap = keyMapGen(key);
  console.log(shiftedKeyMap);

  return plainText
    .split('')
    .reduce(
      (cypher, char) =>
        shiftedKeyMap[char] ? cypher + shiftedKeyMap[char] : cypher + char,
      ''
    );
}
