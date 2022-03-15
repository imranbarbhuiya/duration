// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck testing null values

import duration from '../src/index';

test('should return undefined for invalid inputs', () => {
  // parse
  expect(duration.parse(NaN)).toBe(undefined);
  expect(duration.parse(null)).toBe(undefined);
  expect(duration.parse(undefined)).toBe(undefined);
  expect(duration.parse('')).toBe(undefined);
  expect(duration.parse('abc')).toBe(undefined);
  expect(duration.parse(true)).toBe(undefined);
  expect(duration.parse(false)).toBe(undefined);
  expect(duration.parse(10)).toBe(undefined);

  // format
  expect(duration.format(NaN)).toBe(undefined);
  expect(duration.format(null)).toBe(undefined);
  expect(duration.format(undefined)).toBe(undefined);
  expect(duration.format('')).toBe(undefined);
  expect(duration.format('abc')).toBe(undefined);
  expect(duration.format(true)).toBe(undefined);
  expect(duration.format(false)).toBe(undefined);

  // prettyFormat
  expect(duration.prettyFormat(NaN)).toBe(undefined);
  expect(duration.prettyFormat(null)).toBe(undefined);
  expect(duration.prettyFormat(undefined)).toBe(undefined);
  expect(duration.prettyFormat('')).toBe(undefined);
  expect(duration.prettyFormat('abc')).toBe(undefined);
  expect(duration.prettyFormat(true)).toBe(undefined);
  expect(duration.prettyFormat(false)).toBe(undefined);
});
