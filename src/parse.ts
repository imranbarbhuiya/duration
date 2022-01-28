import {
  day,
  globalRegex,
  hour,
  minute,
  month,
  regex,
  second,
  year,
} from "./constants";

/**
 * Parses the input string, returning the number of milliseconds.
 *
 * @param input the input string
 * @returns the duration in milliseconds
 */
export const parse = (input: string): number | undefined => {
  if (!input || typeof input !== "string") return;
  let result = 0;
  input = input.toLowerCase();
  const matches = input.match(globalRegex);
  if (!matches) return;
  for (const m of matches) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const match = m.match(regex)!;
    let num = parseFloat(match[1]);
    if (match[3]) num = num * second;
    if (match[4]) num = num * minute;
    if (match[5]) num = num * hour;
    if (match[6]) num = num * day;
    if (match[7]) num = num * day * 7;
    if (match[8]) num = num * month;
    if (match[9]) num = num * year;
    result += num;
  }
  return result;
};
