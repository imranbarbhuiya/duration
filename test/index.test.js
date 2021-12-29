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
  expect(duration.formatDuration(60000)).toBe("1 minute");
  expect(duration.formatDuration(3600000)).toBe("1 hour");
  expect(duration.formatDuration(86400000)).toBe("24 hours");
  expect(duration.formatDuration(86406000)).toBe("24 hours, 6 seconds");
});

test("should show day and months when format is long", () => {
  expect(duration.formatDuration(1000 * 60 * 60 * 24 * 30, "long")).toBe(
    "1 month"
  );
  expect(duration.formatDuration(1000 * 60 * 60 * 24 * 30 * 12, "long")).toBe(
    "1 year"
  );
});

test("short should work same as no input", () => {
  expect(duration.formatDuration(86406000)).toBe(
    "24 hours, 6 seconds",
    duration.formatDuration(86406000, "short")
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

  // formatDuration
  expect(duration.formatDuration(NaN)).toBe(undefined);
  expect(duration.formatDuration(null)).toBe(undefined);
  expect(duration.formatDuration(undefined)).toBe(undefined);
  expect(duration.formatDuration("")).toBe(undefined);
  expect(duration.formatDuration("abc")).toBe(undefined);
  expect(duration.formatDuration(true)).toBe(undefined);
  expect(duration.formatDuration(false)).toBe(undefined);
});
