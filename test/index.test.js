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
