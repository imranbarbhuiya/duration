export const regex =
  /^(-?(?:\d+)?\.?\d+) *(m(?:illiseconds?|s(?:ecs?)?))?(s(?:ec(?:onds?|s)?)?)?(m(?:in(?:utes?|s)?)?)?(h(?:ours?|rs?)?)?(d(?:ays?)?)?(w(?:eeks?|ks?)?)?(mo(?:n(?:ths?|s)?)?)?(y(?:ears?|rs?)?)?$/;
export const globalRegex =
  /(-?(?:\d+)?\.?\d+) *(m(?:illiseconds?|s(?:ecs?)?))?(s(?:ec(?:onds?|s)?)?)?(h(?:ours?|rs?)?)?(d(?:ays?)?)?(w(?:eeks?|ks?)?)?(mo(?:n(?:ths?|s)?)?)?(m(?:in(?:utes?|s)?)?)?(y(?:ears?|rs?)?)?/g;
export const SEC = 1e3;
export const MIN = SEC * 60;
export const HOUR = MIN * 60;
export const DAY = HOUR * 24;
export const MONTH = DAY * 30;
export const YEAR = DAY * 365.25;
