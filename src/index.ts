const regex =
  /^(-?(?:\d+)?\.?\d+) *(m(?:illiseconds?|s(?:ecs?)?))?(s(?:ec(?:onds?|s)?)?)?(m(?:in(?:utes?|s)?)?)?(h(?:ours?|rs?)?)?(d(?:ays?)?)?(w(?:eeks?|ks?)?)?(mo(?:n(?:ths?|s)?)?)?(y(?:ears?|rs?)?)?$/;
const globalRegex =
  /(-?(?:\d+)?\.?\d+) *(m(?:illiseconds?|s(?:ecs?)?))?(s(?:ec(?:onds?|s)?)?)?(h(?:ours?|rs?)?)?(d(?:ays?)?)?(w(?:eeks?|ks?)?)?(mo(?:n(?:ths?|s)?)?)?(m(?:in(?:utes?|s)?)?)?(y(?:ears?|rs?)?)?/g;
const SEC = 1e3;
const MIN = SEC * 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;
const YEAR = DAY * 365.25;
/**
 *
 * @param input the input string
 * @returns the duration in milliseconds
 */
const parse = (input: string): number | undefined => {
  if (!input || typeof input !== "string") return;
  let result = 0;
  input = input.toLowerCase();
  const matches = input.match(globalRegex);
  if (!matches) return;
  for (const m of matches) {
    let num: number;
    const match = m.match(regex) as RegExpMatchArray;
    num = parseFloat(match[1]);
    if (match[3]) num = num * SEC;
    if (match[4]) num = num * MIN;
    if (match[5]) num = num * HOUR;
    if (match[6]) num = num * DAY;
    if (match[7]) num = num * DAY * 7;
    if (match[8]) num = num * DAY * 30;
    if (match[9]) num = num * YEAR;
    result += num;
  }
  return result;
};

const fmt = (
  val: number,
  pfx: string,
  str: string,
  long: boolean,
  separator: string
): string => {
  const num = (val | 0) === val ? val : ~~(val + 0.5);
  return (
    pfx +
    num +
    (long
      ? separator + str + (num != 1 ? "s" : "")
      : str == "month"
      ? str.slice(0, 2)
      : str[0])
  );
};

/**
 *
 * @param ms the duration in milliseconds
 * @param long if true, the output will be in the form of "1 year, 2 months, like this"
 * @returns the duration in human readable form
 */

const format = (
  ms: number,
  {
    long = false,
    separator = " ",
  }: {
    long: boolean;
    separator?: string;
  } = { long: false, separator: " " }
): string | undefined => {
  if (!ms || typeof ms !== "number") return;
  const pfx = ms < 0 ? "-" : "",
    abs = ms < 0 ? -ms : ms;
  if (abs < SEC)
    return ms + (long ? `${separator}millisecond${ms != 1 ? "s" : ""}` : "ms");
  if (abs < MIN) return fmt(abs / SEC, pfx, "second", long, separator);
  if (abs < HOUR) return fmt(abs / MIN, pfx, "minute", long, separator);
  if (abs < DAY) return fmt(abs / HOUR, pfx, "hour", long, separator);
  if (abs < MONTH) return fmt(abs / DAY, pfx, "day", long, separator);
  if (abs < YEAR) return fmt(abs / MONTH, pfx, "month", long, separator);
  return fmt(abs / YEAR, pfx, "year", long, separator);
};

/**
 *
 * @param ms the duration in milliseconds
 * @param format long: show all days, moth, year, short: only the hour, minute and second
 * @returns the duration in human readable form
 */

const prettyFormat = (
  ms: number,
  format: "short" | "long" = "short"
): string | undefined => {
  if (!ms || typeof ms !== "number") return;
  let time = {
    year: Math.floor(ms / (MONTH * 12)),
    month: Math.floor(ms / MONTH) % 12,
    day: Math.floor(ms / DAY) % 30,
  };
  const minTime = {
    hour: Math.floor(ms / HOUR),
    minute: Math.floor(ms / MIN) % 60,
    second: Math.floor(ms / SEC) % 60,
  };
  if (format == "long") {
    minTime.hour = Math.floor(ms / HOUR) % 24;
    time = { ...time, ...minTime };
  }
  return Object.entries(format == "long" ? time : minTime)
    .filter((val) => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)
    .join(", ");
};

export { parse, format, prettyFormat };
export default { parse, format, prettyFormat };
