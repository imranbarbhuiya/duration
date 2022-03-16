import duration from '../src/index';

describe('Date', () => {
  test('GIVEN date with format THEN return formatted date', () => {
    expect(duration.date('2022-01-01T00:00:00.000Z', 'yyyy-MMMM-Do')).toBe(
      '2022-January-Saturday'
    );
    expect(
      duration.date('2022-01-01T00:00:00.000Z', 'yy-MMMM-Do HH:mm:ss')
    ).toBe('22-January-Saturday 00:00:00');
    expect(
      duration.date('2022-01-01T00:00:00.000Z', 'yy-MMM-Do HH:mm:ss')
    ).toBe('22-Jan-Saturday 00:00:00');
    expect(
      duration.date('2022-01-01T00:00:00.000Z', 'yyyy-MMM-Do HH:mm:ss.SS')
    ).toBe('2022-Jan-Saturday 00:00:00.00');
    expect(
      duration.date('2022-01-01T00:00:00.000Z', 'yyyy-MMMM-DDD HH:mm:ss.SS')
    ).toBe('2022-January-Sat 00:00:00.00');
    expect(
      duration.date('2022-01-01T00:00:00.000Z', 'yyyy-MM-DD HH:mm:ss.SS')
    ).toBe('2022-01-01 00:00:00.00');
    expect(
      duration.date('2022-01-01T00:00:00.000Z', 'yyyy-MM-D HH:mm:ss.SS Z')
    ).toBe('2022-01-1 00:00:00.00 0');
    expect(
      duration.date('2022-01-01T00:00:00.000Z', 'yyyy-MM-dd HH:mm:ss.SS Z')
    ).toBe(duration.date(1640995200000, 'yyyy-MM-dd HH:mm:ss.SS Z'));
    const date = new Date();
    expect(duration.date(date, 'yyyy-MM-dd HH:mm:ss.SS Z')).toBe(
      duration.date(date.getTime(), 'yyyy-MM-dd HH:mm:ss.SS Z')
    );
    expect(duration.date(date)).toBe(
      duration.date(date.getTime(), 'yyyy-MM-dd HH:mm:ss')
    );
    expect(duration.date('2022-01-01T00:00:00.000Z', 'HH:mm:ss.SS A')).toBe(
      '00:00:00.00 AM'
    );
    expect(duration.date('2022-01-01T00:00:00.000Z', 'HH:mm:ss.SS a')).toBe(
      '00:00:00.00 am'
    );
    expect(duration.date('2022-01-01T00:00:00.000Z', 'X')).toBe('1640995200');
    expect(duration.date('2022-01-01T00:00:00.000Z', 'x')).toBe(
      '1640995200000'
    );
  });
});
