import { Time, timeFormats, type formatterOptions } from './constants';

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
        value: abs >= Time.Year ? Math.floor(abs / Time.Year) : undefined,
        ms: Time.Year,
        unit: 'year',
      };
    case 'month':
    case 'mo':
      return {
        value: abs >= Time.Month ? Math.floor(abs / Time.Month) : undefined,
        ms: Time.Month,
        unit: 'month',
      };
    case 'week':
    case 'w':
      return {
        value: abs >= Time.Week ? Math.floor(abs / Time.Week) : undefined,
        ms: Time.Week,
        unit: 'week',
      };
    case 'day':
    case 'd':
      return {
        value: abs >= Time.Day ? Math.floor(abs / Time.Day) : undefined,
        ms: Time.Day,
        unit: 'day',
      };
    case 'hour':
    case 'h':
      return {
        value: abs >= Time.Hour ? Math.floor(abs / Time.Hour) : undefined,
        ms: Time.Hour,
        unit: 'hour',
      };
    case 'minute':
    case 'min':
    case 'm':
      return {
        value: abs >= Time.Minute ? Math.floor(abs / Time.Minute) : undefined,
        ms: Time.Minute,
        unit: 'minute',
      };
    case 'second':
    case 's':
      return {
        value: abs >= Time.Second ? Math.floor(abs / Time.Second) : undefined,
        ms: Time.Second,
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
