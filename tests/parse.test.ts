import { parse } from '../src/index.js';

describe('Parse', () => {
	test('GIVEN a valid string THEN return ms', () => {
		expect(parse('1ms')).toBe(1);
		expect(parse('1s')).toBe(1_000);
		expect(parse('1m')).toBe(60_000);
		expect(parse('1h')).toBe(3_600_000);
		expect(parse('1d')).toBe(86_400_000);
		expect(parse('1w')).toBe(604_800_000);
		expect(parse('1mo')).toBe(2_592_000_000);
		expect(parse('1y')).toBe(31_536_000_000);
	});

	test('GIVEN long form or short form THEN return ms', () => {
		expect(parse('1 second')).toBe(parse('1s'));
		expect(parse('1 minute')).toBe(parse('1m'));
		expect(parse('1 hour')).toBe(parse('1h'));
		expect(parse('1 day')).toBe(parse('1d'));
		expect(parse('1 week')).toBe(parse('1w'));
		expect(parse('1 month')).toBe(parse('1mo'));
		expect(parse('1 year')).toBe(parse('1y'));
	});

	test('GIVEN multiple inputs THEN return addition of all the inputs', () => {
		expect(parse('1ms 1 second 1 minute 1 hour 1 day 1 week 1 month 1 year')).toBe(
			1 + 1_000 + 60_000 + 3_600_000 + 86_400_000 + 604_800_000 + 2_592_000_000 + 31_536_000_000
		);
		expect(parse('1ms -1 second 1 minute 1 hour 1 day 1 week 1 month 1 year')).toBe(
			1 - 1_000 + 60_000 + 3_600_000 + 86_400_000 + 604_800_000 + 2_592_000_000 + 31_536_000_000
		);
	});
});
