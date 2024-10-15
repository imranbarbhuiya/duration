export const parseRegex =
	// eslint-disable-next-line prefer-named-capture-group, unicorn/no-unsafe-regex
	/(-?(?:\d+)?\.?\d+) *(m(?:illiseconds?|s(?:ecs?)?))?(s(?:ec(?:onds?|s)?)?)?(h(?:ours?|rs?)?)?(d(?:ays?)?)?(w(?:eeks?|ks?)?)?(mo(?:n(?:ths?|s)?)?)?(m(?:in(?:utes?|s)?)?)?(y(?:ears?|rs?)?)?/gi;
export const dateFormateRegex = /yyyy|yy|MMMM|MMM|MM|dd|HH|hh|mm|ss|SS|Do|DDD|DD|D|Z|A|a|X|x/g;
export enum Time {
	MilliSecond = 1,
	Second = 1_000,
	/* eslint-disable @typescript-eslint/prefer-literal-enum-member */
	Minute = 60 * 1_000,
	Hour = 60 * 60 * 1_000,
	Day = 24 * 60 * 60 * 1_000,
	Week = 7 * 24 * 60 * 60 * 1_000,
	Month = 30 * 24 * 60 * 60 * 1_000,
	Year = 365 * 24 * 60 * 60 * 1_000
	/* eslint-enable @typescript-eslint/prefer-literal-enum-member */
}

export const timeFormats = [
	'year',
	'y',
	'month',
	'mo',
	'week',
	'w',
	'day',
	'd',
	'hour',
	'h',
	'minute',
	'min',
	'm',
	'second',
	's',
	'millisecond',
	'milli',
	'ms'
] as const;
export const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
] as const;

export type dateFormats =
	| 'A'
	| 'a'
	| 'D'
	| 'DD'
	| 'dd'
	| 'DDD'
	| 'Do'
	| 'HH'
	| 'hh'
	| 'MM'
	| 'mm'
	| 'MMM'
	| 'MMMM'
	| 'SS'
	| 'ss'
	| 'X'
	| 'x'
	| 'yy'
	| 'yyyy'
	| 'Z';

export interface formatterOptions {
	format?: 'long' | 'short';
	patterns?: readonly (typeof timeFormats)[number][];
	separator?: string;
}
