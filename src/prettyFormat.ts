/**
 *
 * @param ms the duration in milliseconds
 * @param format long: show all days, moth, year, short: only the hour, minute and second
 * @returns the duration in human readable form
 */

import { day, hour, minute, month, second } from './constants';

export const prettyFormat = (
  ms: number,
  format: 'short' | 'long' = 'short'
): string | undefined => {
  if (!ms || typeof ms !== 'number') return;
  let time = {
    year: Math.floor(ms / (month * 12)),
    month: Math.floor(ms / month) % 12,
    day: Math.floor(ms / day) % 30,
  };
  const minTime = {
    hour: Math.floor(ms / hour),
    minute: Math.floor(ms / minute) % 60,
    second: Math.floor(ms / second) % 60,
  };
  if (format == 'long') {
    minTime.hour = Math.floor(ms / hour) % 24;
    time = { ...time, ...minTime };
  }
  return Object.entries(format == 'long' ? time : minTime)
    .filter((val) => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
    .join(', ');
};
