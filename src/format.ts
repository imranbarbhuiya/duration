import { day, hour, minute, month, second, year } from './constants';

const fmt = (
  val: number,
  pfx: string,
  str: string,
  long: boolean,
  separator: string,
  decimal: number
): string => {
  const base = Math.pow(10, decimal);
  const num = Math.round(val * base) / base;
  return (
    pfx +
    num +
    (long
      ? separator + str + (parseFloat(`${num}`) != 1 ? 's' : '')
      : str == 'month'
      ? str.slice(0, 2)
      : str[0])
  );
};

/**
 * Formats the millisecond count to a human-readable time string.
 *
 * @param ms the duration in milliseconds
 * @param options other format options
 * @returns the duration in human readable form
 */

export const format = (
  ms: number,
  {
    long = false,
    separator = ' ',
    decimal = 0,
  }: {
    long?: boolean;
    separator?: string;
    decimal?: number;
  } = {}
): string | undefined => {
  if (!ms || typeof ms !== 'number') return;
  const pfx = ms < 0 ? '-' : '';
  const abs = Math.abs(ms);
  if (abs < second)
    return ms + (long ? `${separator}millisecond${ms != 1 ? 's' : ''}` : 'ms');
  if (abs < minute)
    return fmt(abs / second, pfx, 'second', long, separator, decimal);
  if (abs < hour)
    return fmt(abs / minute, pfx, 'minute', long, separator, decimal);
  if (abs < day) return fmt(abs / hour, pfx, 'hour', long, separator, decimal);
  if (abs < month) return fmt(abs / day, pfx, 'day', long, separator, decimal);
  if (abs < year)
    return fmt(abs / month, pfx, 'month', long, separator, decimal);
  return fmt(abs / year, pfx, 'year', long, separator, decimal);
};
