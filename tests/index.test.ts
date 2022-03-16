// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck testing null values

import { parse, format, prettyFormat } from '../src/index';

test('should return undefined for invalid inputs', () => {
  // parse
  expect(parse(NaN)).toBe(undefined);
  expect(parse(null)).toBe(undefined);
  expect(parse(undefined)).toBe(undefined);
  expect(parse('')).toBe(undefined);
  expect(parse('abc')).toBe(undefined);
  expect(parse(true)).toBe(undefined);
  expect(parse(false)).toBe(undefined);
  expect(parse(10)).toBe(undefined);

  // format
  expect(format(NaN)).toBe(undefined);
  expect(format(null)).toBe(undefined);
  expect(format(undefined)).toBe(undefined);
  expect(format('')).toBe(undefined);
  expect(format('abc')).toBe(undefined);
  expect(format(true)).toBe(undefined);
  expect(format(false)).toBe(undefined);

  // prettyFormat
  expect(prettyFormat(NaN)).toBe(undefined);
  expect(prettyFormat(null)).toBe(undefined);
  expect(prettyFormat(undefined)).toBe(undefined);
  expect(prettyFormat('')).toBe(undefined);
  expect(prettyFormat('abc')).toBe(undefined);
  expect(prettyFormat(true)).toBe(undefined);
  expect(prettyFormat(false)).toBe(undefined);
});
