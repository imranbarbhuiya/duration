export const parseRegex =
  /(-?(?:\d+)?\.?\d+) *(m(?:illiseconds?|s(?:ecs?)?))?(s(?:ec(?:onds?|s)?)?)?(h(?:ours?|rs?)?)?(d(?:ays?)?)?(w(?:eeks?|ks?)?)?(mo(?:n(?:ths?|s)?)?)?(m(?:in(?:utes?|s)?)?)?(y(?:ears?|rs?)?)?/gi;
export const dateFormateRegex =
  /yyyy|yy|MMMM|MMM|MM|dd|HH|hh|mm|ss|SS|Do|DDD|DD|D|Z|A|a|X|x/g;
export enum Time {
  MilliSecond = 1,
  Second = 1000,
  Minute = 60 * 1000,
  Hour = 60 * 60 * 1000,
  Day = 24 * 60 * 60 * 1000,
  Week = 7 * 24 * 60 * 60 * 1000,
  Month = 30 * 24 * 60 * 60 * 1000,
  Year = 365 * 24 * 60 * 60 * 1000,
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
  'ms',
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
  'December',
] as const;

export type dateFormats =
  | 'yyyy'
  | 'yy'
  | 'MMMM'
  | 'MMM'
  | 'MM'
  | 'dd'
  | 'HH'
  | 'hh'
  | 'mm'
  | 'ss'
  | 'SS'
  | 'Do'
  | 'DDD'
  | 'DD'
  | 'D'
  | 'Z'
  | 'A'
  | 'a'
  | 'X'
  | 'x';

export interface formatterOptions {
  patterns?: readonly typeof timeFormats[number][];
  format?: 'long' | 'short';
  separator?: string;
}
