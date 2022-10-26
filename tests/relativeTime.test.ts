import { relativeTime } from '../src/index.js';

// from is added to all tests just to make sure that the tests don't fail due to few seconds lag

describe('Relative Time', () => {
	test('GIVEN negative time THEN show relative time in past', () => {
		const now = Date.now();
		expect(relativeTime(now - 1_000, now)).toBe('just now');
		expect(relativeTime(now - 5_000, now)).toBe('5 seconds ago');
		expect(relativeTime(now - 1_000 * 60, now)).toBe('a minute ago');
		expect(relativeTime(now - 1_000 * 60 * 2, now)).toBe('2 minutes ago');
		expect(relativeTime(new Date(now - 1_000 * 60 * 60), now)).toBe('an hour ago');
		expect(relativeTime(new Date(now - 1_000 * 60 * 60 * 2), now)).toBe('2 hours ago');
		expect(relativeTime(new Date(now - 1_000 * 60 * 60 * 24), now)).toBe('yesterday');
		expect(relativeTime(new Date(now - 1_000 * 60 * 60 * 24 * 2), now)).toBe('2 days ago');
		expect(relativeTime(new Date(now - 1_000 * 60 * 60 * 24 * 7), now)).toBe('a week ago');
		expect(relativeTime(new Date(now - 1_000 * 60 * 60 * 24 * 7 * 4), now)).toBe('4 weeks ago');
		expect(relativeTime(new Date(now - 1_000 * 60 * 60 * 24 * 33))).toBe('a month ago');
		expect(relativeTime(new Date(now - 1_000 * 60 * 60 * 24 * 30 * 3), now)).toBe('3 months ago');
		expect(relativeTime(new Date(now - 1_000 * 60 * 60 * 24 * 7 * 4 * 12 * 2), now)).toBe('a year ago');
		expect(relativeTime(new Date(now - 1_000 * 60 * 60 * 24 * 7 * 4 * 12 * 2 * 5).toString(), now)).toBe('9 years ago');
	});

	test('GIVEN positive time THEN show relative time in future', () => {
		const now = Date.now();
		expect(relativeTime(new Date(now + 1_000), now)).toBe('in a few seconds');
		expect(relativeTime(new Date(now + 5_000), now)).toBe('in 5 seconds');
		expect(relativeTime(new Date(now + 1_000 * 60), now)).toBe('in a minute');
		expect(relativeTime(new Date(now + 1_000 * 60 * 2), now)).toBe('in 2 minutes');
		expect(relativeTime(new Date(now + 1_000 * 60 * 60), now)).toBe('in an hour');
		expect(relativeTime(new Date(now + 1_000 * 60 * 60 * 5), now)).toBe('in 5 hours');
		expect(relativeTime(new Date(now + 1_000 * 60 * 60 * 24), now)).toBe('tomorrow');
		expect(relativeTime(new Date(now + 1_000 * 60 * 60 * 24 * 2), now)).toBe('in 2 days');
		expect(relativeTime(new Date(now + 1_000 * 60 * 60 * 24 * 7), now)).toBe('in a week');
		expect(relativeTime(new Date(now + 1_000 * 60 * 60 * 24 * 7 * 4), now)).toBe('in 4 weeks');

		expect(relativeTime(new Date(now + 1_000 * 60 * 60 * 24 * 32))).toBe('in a month');
		expect(relativeTime(new Date(now + 1_000 * 60 * 60 * 24 * 30 * 11), now)).toBe('in 11 months');
		expect(relativeTime(new Date(now + 1_000 * 60 * 60 * 24 * 7 * 4 * 12 * 2), now)).toBe('in a year');
		expect(relativeTime(new Date(now + 1_000 * 60 * 60 * 24 * 7 * 4 * 12 * 2 * 3), now)).toBe('in 5 years');
		expect(relativeTime(new Date(now + 1_000 * 60 * 60 * 24 * 7 * 4 * 12 * 2 * 3 * 4), now)).toBe('in 22 years');
	});

	test('GIVEN from THEN show relative time from that time', () => {
		const now = Date.now();
		expect(relativeTime(new Date(now + 1_000), new Date(now - 1_000))).toBe('in 2 seconds');
		expect(relativeTime(new Date(now + 1_000 * 60), new Date(now - 1_000 * 60))).toBe('in 2 minutes');
		expect(relativeTime(new Date(now + 1_000 * 60 * 60), new Date(now - 1_000 * 60 * 60))).toBe('in 2 hours');
	});
});
