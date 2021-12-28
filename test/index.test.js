const { Duration } = require("../dist/index");

test("should return ms from a string", () => {
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
  expect(Duration.format(1000)).toBe("1s");
  expect(Duration.format(60000)).toBe("1m");
  expect(Duration.format(3600000)).toBe("1h");
  expect(Duration.format(86400000)).toBe("1d");
  expect(Duration.format(604800000)).toBe("7d");
  expect(Duration.format(2592000000)).toBe("1mo");
  expect(Duration.format(31557600000)).toBe("1y");
});

test("should show long form when passing long:true", () => {
  expect(Duration.format(1000, { long: true })).toBe("1 second");
  expect(Duration.format(60000, { long: true })).toBe("1 minute");
  expect(Duration.format(3600000, { long: true })).toBe("1 hour");
  expect(Duration.format(86400000, { long: true })).toBe("1 day");
  expect(Duration.format(604800000, { long: true })).toBe("7 days");
  expect(Duration.format(2592000000, { long: true })).toBe("1 month");
  expect(Duration.format(31557600000, { long: true })).toBe("1 year");
});

test("should change separator when its passed along with long:true", () => {
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
