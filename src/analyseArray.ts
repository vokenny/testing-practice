export type ArrayMetaData = {
  mean: number;
  min: number;
  max: number;
  length: number;
};

export function analyseArray(arr: number[]): ArrayMetaData {
  if (arr.length === 0) throw new Error('Received an empty array');

  const length: number = arr.length;
  const mean: number = arr.reduce((sum, x) => sum + x) / length;
  const min: number = arr.reduce((min, x) => (x < min ? x : min));
  const max: number = arr.reduce((max, x) => (x > max ? x : max));

  return {
    length,
    mean,
    min,
    max,
  };
}
