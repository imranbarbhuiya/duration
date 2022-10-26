import { Formatter } from '../src/index.js';

describe('Formatter', () => {
	describe('Default behavior', () => {
		const formatter = new Formatter();

		test('GIVEN ms THEN return valid string', () => {
			const ms = 123_456_789;
			const result = formatter.format(ms);
			expect(result).toBe('1 day, 10 hours, 17 minutes, 36 seconds, 789 milliseconds');
		});
	});
	describe('Providing all values when constructing', () => {
		const formatter = new Formatter({
			format: 'short',
			patterns: ['hour', 'minute', 'second', 'millisecond'],
			separator: ' '
		});

		test('GIVEN ms THEN return valid string', () => {
			const ms = 123_456_789;
			const result = formatter.format(ms);
			expect(result).toBe('34h 17m 36s 789ms');
		});
	});

	describe('Using methods to add/change values', () => {
		const formatter = new Formatter().setFormat('short').setPatterns(['hour', 'minute', 'second', 'millisecond']).setSeparator(' ');

		test('GIVEN ms THEN return valid string', () => {
			const ms = 123_456_789;
			const result = formatter.format(ms);
			expect(result).toBe('34h 17m 36s 789ms');
		});
	});
});
