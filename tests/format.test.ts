import duration from '../src/index';

test('should convert ms to human-readable string', () => {
  expect(duration.format(1)).toBe('1ms');
  expect(duration.format(1000)).toBe('1s');
  expect(duration.format(60000)).toBe('1m');
  expect(duration.format(3600000)).toBe('1h');
  expect(duration.format(86400000)).toBe('1d');
  expect(duration.format(604800000)).toBe('7d');
  expect(duration.format(2592000000)).toBe('1mo');
  expect(duration.format(31557600000)).toBe('1y');
});

test('should give same result with long false or undefined', () => {
  expect(duration.format(1, { long: false })).toBe(duration.format(1));
});

test('should show long form when passing long:true', () => {
  expect(duration.format(2, { long: true })).toBe('2 milliseconds');
  expect(duration.format(1000, { long: true })).toBe('1 second');
  expect(duration.format(60000, { long: true })).toBe('1 minute');
  expect(duration.format(3600000, { long: true })).toBe('1 hour');
  expect(duration.format(86400000, { long: true })).toBe('1 day');
  expect(duration.format(604800000, { long: true })).toBe('7 days');
  expect(duration.format(2592000000, { long: true })).toBe('1 month');
  expect(duration.format(31557600000, { long: true })).toBe('1 year');
  expect(duration.format(31557600100, { long: true })).toBe('1 year');
});

test('should change separator when its passed along with long:true', () => {
  expect(duration.format(1, { long: true, separator: '-' })).toBe(
    '1-millisecond'
  );
  expect(duration.format(1000, { long: true, separator: '-' })).toBe(
    '1-second'
  );
  expect(duration.format(60000, { long: true, separator: '-' })).toBe(
    '1-minute'
  );
  expect(duration.format(3600000, { long: true, separator: '-' })).toBe(
    '1-hour'
  );
  expect(duration.format(86400000, { long: true, separator: '-' })).toBe(
    '1-day'
  );
  expect(duration.format(604800000, { long: true, separator: '-' })).toBe(
    '7-days'
  );
  expect(duration.format(2592000000, { long: true, separator: '-' })).toBe(
    '1-month'
  );
  expect(duration.format(31557600000, { long: true, separator: '-' })).toBe(
    '1-year'
  );
});

test('should ignore separator when its passed along with long:false', () => {
  expect(duration.format(1, { long: false, separator: '-' })).toBe('1ms');
});

test('should work with negative numbers', () => {
  expect(duration.format(-1000)).toBe('-1s');
  expect(duration.format(-60000)).toBe('-1m');
  expect(duration.format(-3600000)).toBe('-1h');
  expect(duration.format(-86400000)).toBe('-1d');
  expect(duration.format(-604800000)).toBe('-7d');
  expect(duration.format(-2592000000)).toBe('-1mo');
  expect(duration.format(-31557600000)).toBe('-1y');
});

test('should work with negative numbers and long:true', () => {
  expect(duration.format(-1000, { long: true })).toBe('-1 second');
  expect(duration.format(-60000, { long: true })).toBe('-1 minute');
  expect(duration.format(-3600000, { long: true })).toBe('-1 hour');
  expect(duration.format(-86400000, { long: true })).toBe('-1 day');
  expect(duration.format(-604800000, { long: true })).toBe('-7 days');
  expect(duration.format(-2592000000, { long: true })).toBe('-1 month');
  expect(duration.format(-31557600000, { long: true })).toBe('-1 year');
});
