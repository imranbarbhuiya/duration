import { prettyFormat } from '../src/index.js';

describe('PrettyFormat', () => {
	test('GIVEN ms THEN return formatted string with all possible units', () => {
		// number to string (no round up) (short)
		expect(prettyFormat(60_000)).toBe('1 minute');
		expect(prettyFormat(3_600_000)).toBe('1 hour');
		expect(prettyFormat(86_400_000)).toBe('1 day');
		expect(prettyFormat(86_406_000)).toBe('1 day, 6 seconds');
		expect(prettyFormat(86_406_000_000)).toBe('2 years, 9 months, 1 hour, 40 minutes');
		expect(prettyFormat(-86_406_000_000)).toBe('-2 years, 9 months, 1 hour, 40 minutes');
	});

	describe('Adding patterns', () => {
		test('GIVEN pattern THEN return value based on the pattern', () => {
			expect(
				prettyFormat(1_000 * 60 * 60 * 24 * 30, {
					patterns: ['year', 'month', 'day']
				})
			).toBe('1 month');
			expect(
				prettyFormat(1_000 * 60 * 60 * 24 * 30 * 12 * 2, {
					patterns: ['year', 'month', 'week', 'day']
				})
			).toBe(prettyFormat(1_000 * 60 * 60 * 24 * 30 * 12 * 2));
			expect(
				prettyFormat(86_406_000, {
					patterns: ['hour', 'minute', 'second', 'millisecond']
				})
			).toBe('24 hours, 6 seconds');
			expect(
				prettyFormat(86_406_000, {
					// @ts-expect-error adding undefined
					patterns: ['hour', 'minute', 'second', 'millisecond', undefined]
				})
			).toBe('24 hours, 6 seconds');
		});
	});

	describe('Adding format', () => {
		test('GIVEN short format THEN return valid values in short unit', () => {
			expect(
				prettyFormat(1_000 * 60 * 60 * 24 * 30, {
					format: 'short',
					patterns: ['year', 'month', 'day']
				})
			).toBe('1mo');

			expect(
				prettyFormat(86_406_000, {
					format: 'short'
				})
			).toBe('1d, 6s');

			expect(
				prettyFormat(86_406_000, {
					format: 'short',
					patterns: ['hour', 'minute', 'second', 'millisecond']
				})
			).toBe('24h, 6s');

			expect(
				prettyFormat(86_406_010, {
					format: 'short',
					patterns: ['hour', 'minute', 'second', 'millisecond']
				})
			).toBe('24h, 6s, 10ms');
		});
	});

	describe('Adding custom separator', () => {
		test('GIVEN short format with ` ` separator THEN return valid values in short unit with the given separator', () => {
			expect(
				prettyFormat(86_406_000, {
					format: 'short',
					separator: ' '
				})
			).toBe('1d 6s');

			expect(
				prettyFormat(86_406_000, {
					format: 'long',
					patterns: ['hour', 'minute', 'second', 'millisecond'],
					separator: ' '
				})
			).toBe('24 hours 6 seconds');

			expect(
				prettyFormat(86_406_010, {
					format: 'short',
					patterns: ['hour', 'minute', 'second', 'millisecond'],
					separator: ','
				})
			).toBe('24h,6s,10ms');
		});
	});
});
