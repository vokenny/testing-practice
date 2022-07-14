export default function reverseStr(phrase: string): string {
  return phrase.split('').reduce((result, char) => char + result);
}
