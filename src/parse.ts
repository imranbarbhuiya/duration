import {
  DAY,
  globalRegex,
  HOUR,
  MIN,
  MONTH,
  regex,
  SEC,
  YEAR,
} from "./constants";

/**
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
    let num: number;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const match = m.match(regex)!;
    num = parseFloat(match[1]);
    if (match[3]) num = num * SEC;
    if (match[4]) num = num * MIN;
    if (match[5]) num = num * HOUR;
    if (match[6]) num = num * DAY;
    if (match[7]) num = num * DAY * 7;
    if (match[8]) num = num * MONTH;
    if (match[9]) num = num * YEAR;
    result += num;
  }
  return result;
};
