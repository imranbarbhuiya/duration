import {
  year,
  month,
  day,
  hour,
  minute,
  second,
  timeFormats,
  type formatterOptions,
} from './constants';

/**
 *
 * @param ms the duration in milliseconds
 * @param options other format options
 * @returns the duration in human readable form
 */
export const prettyFormat = (
  ms: number,
  {
    patterns = timeFormats,
    format = 'long',
    separator = ', ',
  }: formatterOptions = {}
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
            ? result.unit === 'month'
              ? 'mo'
              : result.unit === 'millisecond'
              ? 'ms'
              : result.unit[0]
            : result.value === 1
            ? ` ${result.unit}`
            : ` ${result.unit}s`
        }`
      );
      abs -= result.value * result.ms;
    }
    return acc;
  }, [] as string[]);

  if (results.length === 0) return;

  return `${sign}${results.join(separator)}`;
};

function getValue(
  pattern: typeof timeFormats[number],
  abs: number
): { value: number | undefined; ms: number; unit: string } {
  switch (pattern) {
    case 'year':
    case 'y':
      return {
        value: abs >= year ? Math.floor(abs / year) : undefined,
        ms: year,
        unit: 'year',
      };
    case 'month':
    case 'mo':
      return {
        value: abs >= month ? Math.floor(abs / month) : undefined,
        ms: month,
        unit: 'month',
      };
    case 'week':
    case 'w':
      return {
        value: abs >= day * 7 ? Math.floor(abs / day / 7) : undefined,
        ms: day * 7,
        unit: 'week',
      };
    case 'day':
    case 'd':
      return {
        value: abs >= day ? Math.floor(abs / day) : undefined,
        ms: day,
        unit: 'day',
      };
    case 'hour':
    case 'h':
      return {
        value: abs >= hour ? Math.floor(abs / hour) : undefined,
        ms: hour,
        unit: 'hour',
      };
    case 'minute':
    case 'min':
    case 'm':
      return {
        value: abs >= minute ? Math.floor(abs / minute) : undefined,
        ms: minute,
        unit: 'minute',
      };
    case 'second':
    case 's':
      return {
        value: abs >= second ? Math.floor(abs / second) : undefined,
        ms: second,
        unit: 'second',
      };
    case 'millisecond':
    case 'milli':
    case 'ms':
      return {
        value: abs >= 1 ? Math.floor(abs) : undefined,
        ms: 1,
        unit: 'millisecond',
      };
    default:
      return {
        value: undefined,
        ms: 0,
        unit: '',
      };
  }
}

export class Formatter {
  public patterns: readonly typeof timeFormats[number][];
  public unitFormat: 'long' | 'short';
  public separator: string;
  constructor({
    patterns = timeFormats,
    format = 'long',
    separator = ', ',
  }: formatterOptions = {}) {
    this.patterns = patterns;
    this.unitFormat = format;
    this.separator = separator;
  }

  public setFormat(format: 'long' | 'short') {
    this.unitFormat = format;
    return this;
  }

  public setSeparator(separator: string) {
    this.separator = separator;
    return this;
  }

  public setPatterns(patterns: readonly typeof timeFormats[number][]) {
    this.patterns = patterns;
    return this;
  }

  public format(ms: number): string | undefined {
    return prettyFormat(ms, {
      patterns: this.patterns,
      format: this.unitFormat,
      separator: this.separator,
    });
  }
}
