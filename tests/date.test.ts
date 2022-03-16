import { date } from '../src/index';

describe('Date', () => {
  test('GIVEN date with format THEN return formatted date', () => {
    expect(date('2022-01-01T00:00:00.000Z', 'yyyy-MMMM-Do')).toBe(
      '2022-January-Saturday'
    );
    expect(date('2022-01-01T00:00:00.000Z', 'yy-MMMM-Do HH:mm:ss')).toBe(
      '22-January-Saturday 00:00:00'
    );
    expect(date('2022-01-01T00:00:00.000Z', 'yy-MMM-Do HH:mm:ss')).toBe(
      '22-Jan-Saturday 00:00:00'
    );
    expect(date('2022-01-01T00:00:00.000Z', 'yyyy-MMM-Do HH:mm:ss.SS')).toBe(
      '2022-Jan-Saturday 00:00:00.00'
    );
    expect(date('2022-01-01T00:00:00.000Z', 'yyyy-MMMM-DDD HH:mm:ss.SS')).toBe(
      '2022-January-Sat 00:00:00.00'
    );
    expect(date('2022-01-01T00:00:00.000Z', 'yyyy-MM-DD HH:mm:ss.SS')).toBe(
      '2022-01-01 00:00:00.00'
    );
    expect(date('2022-01-01T00:00:00.000Z', 'yyyy-MM-D HH:mm:ss.SS Z')).toBe(
      '2022-01-1 00:00:00.00 0'
    );
    expect(date('2022-01-01T00:00:00.000Z', 'yyyy-MM-dd HH:mm:ss.SS Z')).toBe(
      date(1640995200000, 'yyyy-MM-dd HH:mm:ss.SS Z')
    );
    const now = new Date();
    expect(date(now, 'yyyy-MM-dd HH:mm:ss.SS Z')).toBe(
      date(now.getTime(), 'yyyy-MM-dd HH:mm:ss.SS Z')
    );
    expect(date(now)).toBe(date(now.getTime(), 'yyyy-MM-dd HH:mm:ss'));
    expect(date('2022-01-01T00:00:00.000Z', 'HH:mm:ss.SS A')).toBe(
      '00:00:00.00 AM'
    );
    expect(date('2022-01-01T13:00:00.000Z', 'HH:mm:ss.SS')).toBe(
      '13:00:00.00 PM'
    );
    expect(date('2022-01-01T13:00:00.000Z', 'HH:mm:ss.SS A')).toBe(
      '01:00:00.00 PM'
    );
    expect(date('2022-01-01T00:00:00.000Z', 'HH:mm:ss.SS a')).toBe(
      '01:00:00.00 pm'
    );
    expect(date('2022-01-01T13:00:00.000Z', 'HH:mm:ss.SS a')).toBe(
      '00:00:00.00 am'
    );
    expect(date('2022-01-01T00:00:00.000Z', 'X')).toBe('1640995200');
    expect(date('2022-01-01T00:00:00.000Z', 'x')).toBe('1640995200000');
  });
});
