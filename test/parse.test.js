const duration = require('../index');

test('should return ms from a string', () => {
  expect(duration.parse('1ms')).toBe(1);
  expect(duration.parse('1s')).toBe(1000);
  expect(duration.parse('1m')).toBe(60000);
  expect(duration.parse('1h')).toBe(3600000);
  expect(duration.parse('1d')).toBe(86400000);
  expect(duration.parse('1w')).toBe(604800000);
  expect(duration.parse('1mo')).toBe(2592000000);
  expect(duration.parse('1y')).toBe(31536000000);
});

test('should work with aliases', () => {
  expect(duration.parse('1 second')).toBe(duration.parse('1s'));
  expect(duration.parse('1 minute')).toBe(duration.parse('1m'));
  expect(duration.parse('1 hour')).toBe(duration.parse('1h'));
  expect(duration.parse('1 day')).toBe(duration.parse('1d'));
  expect(duration.parse('1 week')).toBe(duration.parse('1w'));
  expect(duration.parse('1 month')).toBe(duration.parse('1mo'));
  expect(duration.parse('1 year')).toBe(duration.parse('1y'));
});

test('should work multiple inputs', () => {
  expect(
    duration.parse('1ms 1 second 1 minute 1 hour 1 day 1 week 1 month 1 year')
  ).toBe(
    1 + 1000 + 60000 + 3600000 + 86400000 + 604800000 + 2592000000 + 31536000000
  );
  expect(
    duration.parse('1ms -1 second 1 minute 1 hour 1 day 1 week 1 month 1 year')
  ).toBe(
    1 - 1000 + 60000 + 3600000 + 86400000 + 604800000 + 2592000000 + 31536000000
  );
});
