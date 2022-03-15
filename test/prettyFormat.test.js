const duration = require('../index');

test('should show all units without roundup', () => {
  // number to string (no round up) (short)
  expect(duration.prettyFormat(60000)).toBe('1 minute');
  expect(duration.prettyFormat(3600000)).toBe('1 hour');
  expect(duration.prettyFormat(86400000)).toBe('1 day');
  expect(duration.prettyFormat(86406000)).toBe('1 day, 6 seconds');
});

test('should show day and months when format is long', () => {
  expect(
    duration.prettyFormat(1000 * 60 * 60 * 24 * 30, {
      patterns: ['year', 'month', 'day'],
    })
  ).toBe('1 month');
  expect(
    duration.prettyFormat(1000 * 60 * 60 * 24 * 30 * 12 * 2, {
      patterns: ['year', 'month', 'day'],
    })
  ).toBe(
    '1 year, 11 months, 25 days',
    duration.prettyFormat(1000 * 60 * 60 * 24 * 30 * 12 * 2)
  );
});

test('short should work same as no input', () => {
  expect(
    duration.prettyFormat(86406000, {
      patterns: ['hour', 'minute', 'second', 'millisecond'],
    })
  ).toBe('24 hours, 6 seconds');
});
