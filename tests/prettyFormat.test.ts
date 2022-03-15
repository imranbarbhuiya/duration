import duration from '../src/index';

test('should show all units without roundup', () => {
  // number to string (no round up) (short)
  expect(duration.prettyFormat(60000)).toBe('1 minute');
  expect(duration.prettyFormat(3600000)).toBe('1 hour');
  expect(duration.prettyFormat(86400000)).toBe('1 day');
  expect(duration.prettyFormat(86406000)).toBe('1 day, 6 seconds');
  expect(duration.prettyFormat(86406000000)).toBe(
    '2 years, 9 months, 1 hour, 40 minutes'
  );
});

describe('Adding patterns', () => {
  test('GIVEN pattern THEN return value based on the pattern', () => {
    expect(
      duration.prettyFormat(1000 * 60 * 60 * 24 * 30, {
        patterns: ['year', 'month', 'day'],
      })
    ).toBe('1 month');
    expect(
      duration.prettyFormat(1000 * 60 * 60 * 24 * 30 * 12 * 2, {
        patterns: ['year', 'month', 'week', 'day'],
      })
    ).toBe(duration.prettyFormat(1000 * 60 * 60 * 24 * 30 * 12 * 2));
    expect(
      duration.prettyFormat(86406000, {
        patterns: ['hour', 'minute', 'second', 'millisecond'],
      })
    ).toBe('24 hours, 6 seconds');
    expect(
      duration.prettyFormat(86406000, {
        // @ts-expect-error adding undefined
        patterns: ['hour', 'minute', 'second', 'millisecond', undefined],
      })
    ).toBe('24 hours, 6 seconds');
  });
});

describe('Adding format', () => {
  test('GIVEN short format THEN return valid values in short unit', () => {
    expect(
      duration.prettyFormat(86406000, {
        format: 'short',
      })
    ).toBe('1d, 6s');

    expect(
      duration.prettyFormat(86406000, {
        format: 'short',
        patterns: ['hour', 'minute', 'second', 'millisecond'],
      })
    ).toBe('24h, 6s');
  });
});
