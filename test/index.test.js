const { Duration } = require("../dist/index");

test("should return ms from a string", () => {
  expect(Duration.parse("1ms")).toBe(1);
  expect(Duration.parse("1s")).toBe(1000);
  expect(Duration.parse("1m")).toBe(60000);
  expect(Duration.parse("1h")).toBe(3600000);
  expect(Duration.parse("1d")).toBe(86400000);
  expect(Duration.parse("1w")).toBe(604800000);
  expect(Duration.parse("1mo")).toBe(2592000000);
  expect(Duration.parse("1y")).toBe(31557600000);
});

test("should work with aliases", () => {
  expect(Duration.parse("1 second")).toBe(Duration.parse("1s"));
  expect(Duration.parse("1 minute")).toBe(Duration.parse("1m"));
  expect(Duration.parse("1 hour")).toBe(Duration.parse("1h"));
  expect(Duration.parse("1 day")).toBe(Duration.parse("1d"));
  expect(Duration.parse("1 week")).toBe(Duration.parse("1w"));
  expect(Duration.parse("1 month")).toBe(Duration.parse("1mo"));
  expect(Duration.parse("1 year")).toBe(Duration.parse("1y"));
});

test("should convert ms to human-readable string", () => {
  expect(Duration.format(1)).toBe("1ms");
  expect(Duration.format(1000)).toBe("1s");
  expect(Duration.format(60000)).toBe("1m");
  expect(Duration.format(3600000)).toBe("1h");
  expect(Duration.format(86400000)).toBe("1d");
  expect(Duration.format(604800000)).toBe("7d");
  expect(Duration.format(2592000000)).toBe("1mo");
  expect(Duration.format(31557600000)).toBe("1y");
});

test("should give same result with long false or undefined", () => {
  expect(Duration.format(1, { long: false })).toBe("1ms", Duration.format(1));
  expect(Duration.format(1, { long: undefined })).toBe(
    "1ms",
    Duration.format(1)
  );
});

test("should show long form when passing long:true", () => {
  expect(Duration.format(2, { long: true })).toBe("2 milliseconds");
  expect(Duration.format(1000, { long: true })).toBe("1 second");
  expect(Duration.format(60000, { long: true })).toBe("1 minute");
  expect(Duration.format(3600000, { long: true })).toBe("1 hour");
  expect(Duration.format(86400000, { long: true })).toBe("1 day");
  expect(Duration.format(604800000, { long: true })).toBe("7 days");
  expect(Duration.format(2592000000, { long: true })).toBe("1 month");
  expect(Duration.format(31557600000, { long: true })).toBe("1 year");
  expect(Duration.format(31557600100, { long: true })).toBe("1 year");
});

test("should change separator when its passed along with long:true", () => {
  expect(Duration.format(1, { long: true, separator: "-" })).toBe(
    "1-millisecond"
  );
  expect(Duration.format(1000, { long: true, separator: "-" })).toBe(
    "1-second"
  );
  expect(Duration.format(60000, { long: true, separator: "-" })).toBe(
    "1-minute"
  );
  expect(Duration.format(3600000, { long: true, separator: "-" })).toBe(
    "1-hour"
  );
  expect(Duration.format(86400000, { long: true, separator: "-" })).toBe(
    "1-day"
  );
  expect(Duration.format(604800000, { long: true, separator: "-" })).toBe(
    "7-days"
  );
  expect(Duration.format(2592000000, { long: true, separator: "-" })).toBe(
    "1-month"
  );
  expect(Duration.format(31557600000, { long: true, separator: "-" })).toBe(
    "1-year"
  );
});

test("should ignore separator when its passed along with long:false", () => {
  expect(Duration.format(1, { long: false, separator: "-" })).toBe("1ms");
});

test("should work with negative numbers", () => {
  expect(Duration.format(-1000)).toBe("-1s");
  expect(Duration.format(-60000)).toBe("-1m");
  expect(Duration.format(-3600000)).toBe("-1h");
  expect(Duration.format(-86400000)).toBe("-1d");
  expect(Duration.format(-604800000)).toBe("-7d");
  expect(Duration.format(-2592000000)).toBe("-1mo");
  expect(Duration.format(-31557600000)).toBe("-1y");
});

test("should work with negative numbers and long:true", () => {
  expect(Duration.format(-1000, { long: true })).toBe("-1 second");
  expect(Duration.format(-60000, { long: true })).toBe("-1 minute");
  expect(Duration.format(-3600000, { long: true })).toBe("-1 hour");
  expect(Duration.format(-86400000, { long: true })).toBe("-1 day");
  expect(Duration.format(-604800000, { long: true })).toBe("-7 days");
  expect(Duration.format(-2592000000, { long: true })).toBe("-1 month");
  expect(Duration.format(-31557600000, { long: true })).toBe("-1 year");
});

test("should show all units without roundup", () => {
  // number to string (no round up) (short)
  expect(Duration.formatDuration(60000)).toBe("1 minute");
  expect(Duration.formatDuration(3600000)).toBe("1 hour");
  expect(Duration.formatDuration(86400000)).toBe("24 hours");
  expect(Duration.formatDuration(86406000)).toBe("24 hours, 6 seconds");
});

test("should show day and months when format is long", () => {
  expect(Duration.formatDuration(1000 * 60 * 60 * 24 * 30, "long")).toBe(
    "1 month"
  );
  expect(Duration.formatDuration(1000 * 60 * 60 * 24 * 30 * 12, "long")).toBe(
    "1 year"
  );
});

test("short should work same as no input", () => {
  expect(Duration.formatDuration(86406000)).toBe(
    "24 hours, 6 seconds",
    Duration.formatDuration(86406000, "short")
  );
});

test("should return undefined for invalid inputs", () => {
  // parse
  expect(Duration.parse(NaN)).toBe(undefined);
  expect(Duration.parse(null)).toBe(undefined);
  expect(Duration.parse(undefined)).toBe(undefined);
  expect(Duration.parse("")).toBe(undefined);
  expect(Duration.parse("abc")).toBe(undefined);
  expect(Duration.parse(true)).toBe(undefined);
  expect(Duration.parse(false)).toBe(undefined);

  // format
  expect(Duration.format(NaN)).toBe(undefined);
  expect(Duration.format(null)).toBe(undefined);
  expect(Duration.format(undefined)).toBe(undefined);
  expect(Duration.format("")).toBe(undefined);
  expect(Duration.format("abc")).toBe(undefined);
  expect(Duration.format(true)).toBe(undefined);
  expect(Duration.format(false)).toBe(undefined);

  // formatDuration
  expect(Duration.formatDuration(NaN)).toBe(undefined);
  expect(Duration.formatDuration(null)).toBe(undefined);
  expect(Duration.formatDuration(undefined)).toBe(undefined);
  expect(Duration.formatDuration("")).toBe(undefined);
  expect(Duration.formatDuration("abc")).toBe(undefined);
  expect(Duration.formatDuration(true)).toBe(undefined);
  expect(Duration.formatDuration(false)).toBe(undefined);
});
