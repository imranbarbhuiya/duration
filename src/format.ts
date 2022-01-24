import { DAY, HOUR, MIN, MONTH, SEC, YEAR } from "./constants";

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

export const format = (
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
