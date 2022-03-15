import duration from '../src/index';

test('should show relative time negative part', () => {
  expect(duration.relativeTime(Date.now() - 1000)).toBe('just now');
  expect(duration.relativeTime(Date.now() - 5000)).toBe('5 seconds ago');
  expect(duration.relativeTime(Date.now() - 1000 * 60)).toBe('a minute ago');
  expect(duration.relativeTime(Date.now() - 1000 * 60 * 60)).toBe(
    'an hour ago'
  );
  expect(duration.relativeTime(Date.now() - 1000 * 60 * 60 * 24)).toBe(
    'yesterday'
  );
  expect(duration.relativeTime(Date.now() - 1000 * 60 * 60 * 24 * 7)).toBe(
    'a week ago'
  );
  expect(duration.relativeTime(Date.now() - 1000 * 60 * 60 * 24 * 7 * 4)).toBe(
    '4 weeks ago'
  );
  expect(
    duration.relativeTime(Date.now() - 1000 * 60 * 60 * 24 * 7 * 4 * 12 * 2)
  ).toBe('a year ago');
  expect(
    duration.relativeTime(Date.now() - 1000 * 60 * 60 * 24 * 7 * 4 * 4)
  ).toBe('3 months ago');
  expect(
    duration.relativeTime(Date.now() - 1000 * 60 * 60 * 24 * 7 * 4 * 12 * 2 * 5)
  ).toBe('9 years ago');
});

test('should show relative time +ve part', () => {
  const now = Date.now();
  expect(duration.relativeTime(now + 1000)).toBe('in a few seconds');
  expect(duration.relativeTime(now + 1000 * 60)).toBe('in a minute');
  expect(duration.relativeTime(now + 1000 * 60 * 60)).toBe('in an hour');
  expect(duration.relativeTime(now + 1000 * 60 * 60 * 5)).toBe('in 5 hours');
  expect(duration.relativeTime(now + 1000 * 60 * 60 * 24)).toBe('tomorrow');
  expect(duration.relativeTime(now + 1000 * 60 * 60 * 24 * 7)).toBe(
    'in a week'
  );
  expect(duration.relativeTime(now + 1000 * 60 * 60 * 24 * 7 * 4)).toBe(
    'in 4 weeks'
  );
  expect(duration.relativeTime(now + 1000 * 60 * 60 * 24 * 7 * 4 * 12)).toBe(
    'in 11 months'
  );
  expect(
    duration.relativeTime(now + 1000 * 60 * 60 * 24 * 7 * 4 * 12 * 2)
  ).toBe('in a year');
  expect(
    duration.relativeTime(now + 1000 * 60 * 60 * 24 * 7 * 4 * 12 * 2 * 3)
  ).toBe('in 5 years');
  expect(
    duration.relativeTime(now + 1000 * 60 * 60 * 24 * 7 * 4 * 12 * 2 * 3 * 4)
  ).toBe('in 22 years');
});
