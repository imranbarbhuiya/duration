const duration = require("../index");

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
