export const regex =
  /(-?(?:\d+)?\.?\d+) *(m(?:illiseconds?|s(?:ecs?)?))?(s(?:ec(?:onds?|s)?)?)?(h(?:ours?|rs?)?)?(d(?:ays?)?)?(w(?:eeks?|ks?)?)?(mo(?:n(?:ths?|s)?)?)?(m(?:in(?:utes?|s)?)?)?(y(?:ears?|rs?)?)?/gi;
export const second = 1e3;
export const minute = second * 60;
export const hour = minute * 60;
export const day = hour * 24;
export const month = day * 30;
export const year = day * 365;
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
