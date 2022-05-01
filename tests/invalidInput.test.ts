// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { parse, format, prettyFormat } from '../src/index';

describe('Invalid Inputs', () => {
	test('GIVEN invalid inputs for parse THEN return undefined', () => {
		// parse
		expect(parse(NaN)).toBe(undefined);
		expect(parse(null)).toBe(undefined);
		expect(parse(undefined)).toBe(undefined);
		expect(parse('')).toBe(undefined);
		expect(parse('abc')).toBe(undefined);
		expect(parse(true)).toBe(undefined);
		expect(parse(false)).toBe(undefined);
		expect(parse(10)).toBe(undefined);
	});

	test('GIVEN invalid inputs for format THEN return undefined', () => {
		// format
		expect(format(NaN)).toBe(undefined);
		expect(format(null)).toBe(undefined);
		expect(format(undefined)).toBe(undefined);
		expect(format('')).toBe(undefined);
		expect(format('abc')).toBe(undefined);
		expect(format(true)).toBe(undefined);
		expect(format(false)).toBe(undefined);
	});

	test('GIVEN invalid inputs for prettyFormat THEN return undefined', () => {
		// prettyFormat
		expect(prettyFormat(NaN)).toBe(undefined);
		expect(prettyFormat(null)).toBe(undefined);
		expect(prettyFormat(undefined)).toBe(undefined);
		expect(prettyFormat('')).toBe(undefined);
		expect(prettyFormat('abc')).toBe(undefined);
		expect(prettyFormat(true)).toBe(undefined);
		expect(prettyFormat(false)).toBe(undefined);
		expect(
			prettyFormat(1000, {
				patterns: []
			})
		).toBe(undefined);
	});
});
