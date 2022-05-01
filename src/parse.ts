import { Time, parseRegex } from './constants';

/**
 * Parses the input string, returning the number of milliseconds.
 *
 * @param input the input string
 * @returns the duration in milliseconds
 */
export const parse = (input: string): number | undefined => {
  if (!input || typeof input !== 'string') return;
  let result = 0;
  const matches = input.matchAll(parseRegex);
  const arrMatches = [...matches];
  if (!arrMatches.length) return;
  for (const match of arrMatches) {
    let num = parseFloat(match[1]);
    if (match[3]) num = num * Time.Second;
    if (match[4]) num = num * Time.Hour;
    if (match[5]) num = num * Time.Day;
    if (match[6]) num = num * Time.Week;
    if (match[7]) num = num * Time.Month;
    if (match[8]) num = num * Time.Minute;
    if (match[9]) num = num * Time.Year;
    result += num;
  }
  return result;
};
