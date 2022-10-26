import { Time, parseRegex } from './constants.js';

/**
 * Parses the input string, returning the number of milliseconds.
 *
 * @param input - the input string
 * @returns the duration in milliseconds
 */
export const parse = (input: string): number | undefined => {
	if (!input || typeof input !== 'string') return;
	let result = 0;
	const matches = [...input.matchAll(parseRegex)];
	if (!matches.length) return;
	for (const match of matches) {
		let num = Number.parseFloat(match[1]);
		if (match[3]) num *= Time.Second;
		if (match[4]) num *= Time.Hour;
		if (match[5]) num *= Time.Day;
		if (match[6]) num *= Time.Week;
		if (match[7]) num *= Time.Month;
		if (match[8]) num *= Time.Minute;
		if (match[9]) num *= Time.Year;
		result += num;
	}

	return result;
};
