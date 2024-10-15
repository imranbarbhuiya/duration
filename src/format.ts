import { Time } from './constants.js';

const fmt = (val: number, pfx: string, str: string, long: boolean, separator: string, decimal: number): string => {
	const base = 10 ** decimal;
	const num = Math.round(val * base) / base;
	return `${pfx}${num}` + (long ? separator + str + (Number.parseFloat(`${num}`) === 1 ? '' : 's') : str === 'month' ? str.slice(0, 2) : str[0]);
};

/**
 * Formats the millisecond count to a human-readable time string.
 *
 * @param ms - the duration in milliseconds
 * @param options - other format options
 * @returns the duration in human readable form
 */

export const format = (
	ms: number,
	{
		long = false,
		separator = ' ',
		decimal = 0
	}: {
		decimal?: number;
		long?: boolean;
		separator?: string;
	} = {}
): string | undefined => {
	if (!ms || typeof ms !== 'number') return;
	const pfx = ms < 0 ? '-' : '';
	const abs = Math.abs(ms);
	if (abs < Time.Second) return `${ms}` + (long ? `${separator}millisecond${ms === 1 ? '' : 's'}` : 'ms');
	if (abs < Time.Minute) return fmt(abs / Time.Second, pfx, 'second', long, separator, decimal);
	if (abs < Time.Hour) return fmt(abs / Time.Minute, pfx, 'minute', long, separator, decimal);
	if (abs < Time.Day) return fmt(abs / Time.Hour, pfx, 'hour', long, separator, decimal);
	if (abs < Time.Month) return fmt(abs / Time.Day, pfx, 'day', long, separator, decimal);
	if (abs < Time.Year) return fmt(abs / Time.Month, pfx, 'month', long, separator, decimal);
	return fmt(abs / Time.Year, pfx, 'year', long, separator, decimal);
};
