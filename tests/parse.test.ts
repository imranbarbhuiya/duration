import { parse } from '../src/index';

describe('Parse', () => {
  test('GIVEN a valid string THEN return ms', () => {
    expect(parse('1ms')).toBe(1);
    expect(parse('1s')).toBe(1000);
    expect(parse('1m')).toBe(60000);
    expect(parse('1h')).toBe(3600000);
    expect(parse('1d')).toBe(86400000);
    expect(parse('1w')).toBe(604800000);
    expect(parse('1mo')).toBe(2592000000);
    expect(parse('1y')).toBe(31536000000);
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
    expect(
      parse('1ms 1 second 1 minute 1 hour 1 day 1 week 1 month 1 year')
    ).toBe(
      1 +
        1000 +
        60000 +
        3600000 +
        86400000 +
        604800000 +
        2592000000 +
        31536000000
    );
    expect(
      parse('1ms -1 second 1 minute 1 hour 1 day 1 week 1 month 1 year')
    ).toBe(
      1 -
        1000 +
        60000 +
        3600000 +
        86400000 +
        604800000 +
        2592000000 +
        31536000000
    );
  });
});
