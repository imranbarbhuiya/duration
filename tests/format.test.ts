import { format } from '../src/index';

describe('Format', () => {
	describe('Without any options', () => {
		test('GIVEN ms THEN return human-readable string', () => {
			expect(format(1)).toBe('1ms');
			expect(format(1000)).toBe('1s');
			expect(format(60000)).toBe('1m');
			expect(format(3600000)).toBe('1h');
			expect(format(86400000)).toBe('1d');
			expect(format(604800000)).toBe('7d');
			expect(format(2592000000)).toBe('1mo');
			expect(format(31557600000)).toBe('1y');
		});

		test('GIVEN negative numbers THEN return negative output', () => {
			expect(format(-1000)).toBe('-1s');
			expect(format(-60000)).toBe('-1m');
			expect(format(-3600000)).toBe('-1h');
			expect(format(-86400000)).toBe('-1d');
			expect(format(-604800000)).toBe('-7d');
			expect(format(-2592000000)).toBe('-1mo');
			expect(format(-31557600000)).toBe('-1y');
		});
	});

	describe('With long option', () => {
		test('GIVEN long: false THEN return same output', () => {
			expect(format(1, { long: false })).toBe(format(1));
		});

		test('GIVEN long:true THEN return long units', () => {
			expect(format(2, { long: true })).toBe('2 milliseconds');
			expect(format(1000, { long: true })).toBe('1 second');
			expect(format(60000, { long: true })).toBe('1 minute');
			expect(format(3600000, { long: true })).toBe('1 hour');
			expect(format(86400000, { long: true })).toBe('1 day');
			expect(format(604800000, { long: true })).toBe('7 days');
			expect(format(2592000000, { long: true })).toBe('1 month');
			expect(format(31557600000, { long: true })).toBe('1 year');
			expect(format(31557600100, { long: true })).toBe('1 year');
		});

		test('GIVEN negative numbers with long: true THEN return negative output with long unit', () => {
			expect(format(-1000, { long: true })).toBe('-1 second');
			expect(format(-60000, { long: true })).toBe('-1 minute');
			expect(format(-3600000, { long: true })).toBe('-1 hour');
			expect(format(-86400000, { long: true })).toBe('-1 day');
			expect(format(-604800000, { long: true })).toBe('-7 days');
			expect(format(-2592000000, { long: true })).toBe('-1 month');
			expect(format(-31557600000, { long: true })).toBe('-1 year');
		});
	});

	describe('With separator option', () => {
		test('GIVEN a different separator along with long: true THEN return result with the given separator', () => {
			expect(format(1, { long: true, separator: '-' })).toBe('1-millisecond');
			expect(format(1000, { long: true, separator: '-' })).toBe('1-second');
			expect(format(60000, { long: true, separator: '-' })).toBe('1-minute');
			expect(format(3600000, { long: true, separator: '-' })).toBe('1-hour');
			expect(format(86400000, { long: true, separator: '-' })).toBe('1-day');
			expect(format(604800000, { long: true, separator: '-' })).toBe('7-days');
			expect(format(2592000000, { long: true, separator: '-' })).toBe('1-month');
			expect(format(31557600000, { long: true, separator: '-' })).toBe('1-year');
		});

		test('GIVEN separator with long: false THEN ignore the separator', () => {
			expect(format(1, { long: false, separator: '-' })).toBe('1ms');
		});
	});

	describe('With decimal option', () => {
		test('GIVEN decimal: 0 THEN return integer output', () => {
			expect(format(1200, { decimal: 0 })).toBe('1s');
			expect(format(61000, { decimal: 0 })).toBe('1m');
		});

		test('GIVEN decimal: 1 THEN return decimal output', () => {
			expect(format(1200, { decimal: 1 })).toBe('1.2s');
			expect(format(66000, { decimal: 1 })).toBe('1.1m');
		});

		test('GIVEN decimal: 2 THEN return decimal output', () => {
			expect(format(1200, { decimal: 2 })).toBe('1.2s');
			expect(format(66500, { decimal: 2 })).toBe('1.11m');
		});

		test('GIVEN decimal with long: true THEN return decimal output with long units', () => {
			expect(format(1200, { long: true, decimal: 1 })).toBe('1.2 seconds');
			expect(format(66000, { long: true, decimal: 1 })).toBe('1.1 minutes');
		});
	});
});
