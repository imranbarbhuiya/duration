import { day, hour, minute, month, second, year } from './constants';

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
      ? separator + str + (num != 1 ? 's' : '')
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
  }: {
    long: boolean;
    separator?: string;
  } = { long: false, separator: ' ' }
): string | undefined => {
  if (!ms || typeof ms !== 'number') return;
  const pfx = ms < 0 ? '-' : '',
    abs = ms < 0 ? -ms : ms;
  if (abs < second)
    return ms + (long ? `${separator}millisecond${ms != 1 ? 's' : ''}` : 'ms');
  if (abs < minute) return fmt(abs / second, pfx, 'second', long, separator);
  if (abs < hour) return fmt(abs / minute, pfx, 'minute', long, separator);
  if (abs < day) return fmt(abs / hour, pfx, 'hour', long, separator);
  if (abs < month) return fmt(abs / day, pfx, 'day', long, separator);
  if (abs < year) return fmt(abs / month, pfx, 'month', long, separator);
  return fmt(abs / year, pfx, 'year', long, separator);
};
