const duration = require("../index");

test("should return ms from a string", () => {
  expect(duration.parse("1ms")).toBe(1);
  expect(duration.parse("1s")).toBe(1000);
  expect(duration.parse("1m")).toBe(60000);
  expect(duration.parse("1h")).toBe(3600000);
  expect(duration.parse("1d")).toBe(86400000);
  expect(duration.parse("1w")).toBe(604800000);
  expect(duration.parse("1mo")).toBe(2592000000);
  expect(duration.parse("1y")).toBe(31557600000);
});

test("should work with aliases", () => {
  expect(duration.parse("1 second")).toBe(duration.parse("1s"));
  expect(duration.parse("1 minute")).toBe(duration.parse("1m"));
  expect(duration.parse("1 hour")).toBe(duration.parse("1h"));
  expect(duration.parse("1 day")).toBe(duration.parse("1d"));
  expect(duration.parse("1 week")).toBe(duration.parse("1w"));
  expect(duration.parse("1 month")).toBe(duration.parse("1mo"));
  expect(duration.parse("1 year")).toBe(duration.parse("1y"));
});

test("should work multiple inputs", () => {
  expect(
    duration.parse("1ms 1 second 1 minute 1 hour 1 day 1 week 1 month 1 year")
  ).toBe(
    1 + 1000 + 60000 + 3600000 + 86400000 + 604800000 + 2592000000 + 31557600000
  );
  expect(
    duration.parse("1ms -1 second 1 minute 1 hour 1 day 1 week 1 month 1 year")
  ).toBe(
    1 - 1000 + 60000 + 3600000 + 86400000 + 604800000 + 2592000000 + 31557600000
  );
});

test("should convert ms to human-readable string", () => {
  expect(duration.format(1)).toBe("1ms");
  expect(duration.format(1000)).toBe("1s");
  expect(duration.format(60000)).toBe("1m");
  expect(duration.format(3600000)).toBe("1h");
  expect(duration.format(86400000)).toBe("1d");
  expect(duration.format(604800000)).toBe("7d");
  expect(duration.format(2592000000)).toBe("1mo");
  expect(duration.format(31557600000)).toBe("1y");
});

test("should give same result with long false or undefined", () => {
  expect(duration.format(1, { long: false })).toBe("1ms", duration.format(1));
  expect(duration.format(1, { long: undefined })).toBe(
    "1ms",
    duration.format(1)
  );
});

test("should show long form when passing long:true", () => {
  expect(duration.format(2, { long: true })).toBe("2 milliseconds");
  expect(duration.format(1000, { long: true })).toBe("1 second");
  expect(duration.format(60000, { long: true })).toBe("1 minute");
  expect(duration.format(3600000, { long: true })).toBe("1 hour");
  expect(duration.format(86400000, { long: true })).toBe("1 day");
  expect(duration.format(604800000, { long: true })).toBe("7 days");
  expect(duration.format(2592000000, { long: true })).toBe("1 month");
  expect(duration.format(31557600000, { long: true })).toBe("1 year");
  expect(duration.format(31557600100, { long: true })).toBe("1 year");
});

test("should change separator when its passed along with long:true", () => {
  expect(duration.format(1, { long: true, separator: "-" })).toBe(
    "1-millisecond"
  );
  expect(duration.format(1000, { long: true, separator: "-" })).toBe(
    "1-second"
  );
  expect(duration.format(60000, { long: true, separator: "-" })).toBe(
    "1-minute"
  );
  expect(duration.format(3600000, { long: true, separator: "-" })).toBe(
    "1-hour"
  );
  expect(duration.format(86400000, { long: true, separator: "-" })).toBe(
    "1-day"
  );
  expect(duration.format(604800000, { long: true, separator: "-" })).toBe(
    "7-days"
  );
  expect(duration.format(2592000000, { long: true, separator: "-" })).toBe(
    "1-month"
  );
  expect(duration.format(31557600000, { long: true, separator: "-" })).toBe(
    "1-year"
  );
});

test("should ignore separator when its passed along with long:false", () => {
  expect(duration.format(1, { long: false, separator: "-" })).toBe("1ms");
});

test("should work with negative numbers", () => {
  expect(duration.format(-1000)).toBe("-1s");
  expect(duration.format(-60000)).toBe("-1m");
  expect(duration.format(-3600000)).toBe("-1h");
  expect(duration.format(-86400000)).toBe("-1d");
  expect(duration.format(-604800000)).toBe("-7d");
  expect(duration.format(-2592000000)).toBe("-1mo");
  expect(duration.format(-31557600000)).toBe("-1y");
});

test("should work with negative numbers and long:true", () => {
  expect(duration.format(-1000, { long: true })).toBe("-1 second");
  expect(duration.format(-60000, { long: true })).toBe("-1 minute");
  expect(duration.format(-3600000, { long: true })).toBe("-1 hour");
  expect(duration.format(-86400000, { long: true })).toBe("-1 day");
  expect(duration.format(-604800000, { long: true })).toBe("-7 days");
  expect(duration.format(-2592000000, { long: true })).toBe("-1 month");
  expect(duration.format(-31557600000, { long: true })).toBe("-1 year");
});

test("should show all units without roundup", () => {
  // number to string (no round up) (short)
  expect(duration.prettyFormat(60000)).toBe("1 minute");
  expect(duration.prettyFormat(3600000)).toBe("1 hour");
  expect(duration.prettyFormat(86400000)).toBe("24 hours");
  expect(duration.prettyFormat(86406000)).toBe("24 hours, 6 seconds");
});

test("should show day and months when format is long", () => {
  expect(duration.prettyFormat(1000 * 60 * 60 * 24 * 30, "long")).toBe(
    "1 month"
  );
  expect(duration.prettyFormat(1000 * 60 * 60 * 24 * 30 * 12, "long")).toBe(
    "1 year"
  );
});

test("short should work same as no input", () => {
  expect(duration.prettyFormat(86406000)).toBe(
    "24 hours, 6 seconds",
    duration.prettyFormat(86406000, "short")
  );
});

test("should return undefined for invalid inputs", () => {
  // parse
  expect(duration.parse(NaN)).toBe(undefined);
  expect(duration.parse(null)).toBe(undefined);
  expect(duration.parse(undefined)).toBe(undefined);
  expect(duration.parse("")).toBe(undefined);
  expect(duration.parse("abc")).toBe(undefined);
  expect(duration.parse(true)).toBe(undefined);
  expect(duration.parse(false)).toBe(undefined);

  // format
  expect(duration.format(NaN)).toBe(undefined);
  expect(duration.format(null)).toBe(undefined);
  expect(duration.format(undefined)).toBe(undefined);
  expect(duration.format("")).toBe(undefined);
  expect(duration.format("abc")).toBe(undefined);
  expect(duration.format(true)).toBe(undefined);
  expect(duration.format(false)).toBe(undefined);

  // prettyFormat
  expect(duration.prettyFormat(NaN)).toBe(undefined);
  expect(duration.prettyFormat(null)).toBe(undefined);
  expect(duration.prettyFormat(undefined)).toBe(undefined);
  expect(duration.prettyFormat("")).toBe(undefined);
  expect(duration.prettyFormat("abc")).toBe(undefined);
  expect(duration.prettyFormat(true)).toBe(undefined);
  expect(duration.prettyFormat(false)).toBe(undefined);
});

test("should return formatted string from date", () => {
  expect(duration.date("2022-01-01T00:00:00.000Z", "yyyy-MMMM-Do")).toBe(
    "2022-January-Sat"
  );
  expect(
    duration.date("2022-01-01T00:00:00.000Z", "yyyy-MMMM-Do HH:mm:ss")
  ).toBe("2022-January-Sat 05:30:00");
  expect(
    duration.date("2022-01-01T00:00:00.000Z", "yyyy-MMMM-Do HH:mm:ss.SS")
  ).toBe("2022-January-Sat 05:30:00.00");
  expect(
    duration.date("2022-01-01T00:00:00.000Z", "yyyy-MMMM-dd HH:mm:ss.SS")
  ).toBe("2022-January-01 05:30:00.00");
  expect(
    duration.date("2022-01-01T00:00:00.000Z", "yyyy-MM-dd HH:mm:ss.SS")
  ).toBe("2022-01-01 05:30:00.00");
  expect(
    duration.date("2022-01-01T00:00:00.000Z", "yyyy-MM-dd HH:mm:ss.SS Z")
  ).toBe("2022-01-01 05:30:00.00 -5.5");
  expect(
    duration.date("2022-01-01T00:00:00.000Z", "yyyy-MM-dd HH:mm:ss.SS Z")
  ).toBe(duration.date(1640995200000, "yyyy-MM-dd HH:mm:ss.SS Z"));
  expect(duration.date(new Date(), "yyyy-MM-dd HH:mm:ss.SS Z")).toBe(
    duration.date(Date.now(), "yyyy-MM-dd HH:mm:ss.SS Z")
  );
  expect(duration.date(new Date())).toBe(
    duration.date(Date.now(), "yyyy-MM-dd HH:mm:ss")
  );
});
