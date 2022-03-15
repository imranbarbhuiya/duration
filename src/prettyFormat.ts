/**
 *
 * @param ms the duration in milliseconds
 * @param format long: show all days, moth, year, short: only the hour, minute and second
 * @returns the duration in human readable form
 */

import {
  year,
  month,
  day,
  hour,
  minute,
  second,
  timeFormats,
} from './constants';

export const prettyFormat = (
  ms: number,
  {
    patterns = timeFormats,
    keepDecimal = false,
    format = 'long',
  }: {
    patterns?: readonly typeof timeFormats[number][];
    keepDecimal?: boolean;
    format?: 'long' | 'short';
  } = {}
): string | undefined => {
  if (!ms || typeof ms !== 'number') return;

  const sign = ms < 0 ? '-' : '';
  // if (!keepDecimal) ms = Math.floor(Math.abs(ms));
  let abs = Math.abs(ms);

  const results = patterns.reduce((acc, p) => {
    const result = getValue(p, abs);
    if (result.value) {
      acc.push(
        `${result.value}${
          format === 'short'
            ? p === 'month'
              ? 'mo'
              : p[0]
            : result.value === 1
            ? ` ${p}`
            : ` ${p}s`
        }`
      );
      abs -= result.value * result.ms;
    }
    return acc;
  }, [] as string[]);

  if (results.length === 0) return;

  return `${sign}${results.join(', ')}`;
};

function getValue(
  pattern: typeof timeFormats[number],
  abs: number
): { value: number | undefined; ms: number } {
  switch (pattern) {
    case 'year':
      return {
        value: abs >= year ? Math.floor(abs / year) : undefined,
        ms: year,
      };
    case 'month':
      return {
        value: abs >= month ? Math.floor(abs / month) : undefined,
        ms: month,
      };
    case 'week':
      return {
        value: abs >= day * 7 ? Math.floor(abs / day / 7) : undefined,
        ms: day * 7,
      };
    case 'day':
      return {
        value: abs >= day ? Math.floor(abs / day) : undefined,
        ms: day,
      };
    case 'hour':
      return {
        value: abs >= hour ? Math.floor(abs / hour) : undefined,
        ms: hour,
      };
    case 'minute':
      return {
        value: abs >= minute ? Math.floor(abs / minute) : undefined,
        ms: minute,
      };
    case 'second':
      return {
        value: abs >= second ? Math.floor(abs / second) : undefined,
        ms: second,
      };
    case 'millisecond':
      return {
        value: abs >= 1 ? Math.floor(abs) : undefined,
        ms: 1,
      };
    default:
      return {
        value: undefined,
        ms: 0,
      };
  }
}

prettyFormat(1000, {
  patterns: ['day', 'day'],
});
