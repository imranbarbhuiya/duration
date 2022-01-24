/**
 *
 * @param ms the duration in milliseconds
 * @param format long: show all days, moth, year, short: only the hour, minute and second
 * @returns the duration in human readable form
 */

import { DAY, HOUR, MIN, MONTH, SEC } from "./constants";

export const prettyFormat = (
  ms: number,
  format: "short" | "long" = "short"
): string | undefined => {
  if (!ms || typeof ms !== "number") return;
  let time = {
    year: Math.floor(ms / (MONTH * 12)),
    month: Math.floor(ms / MONTH) % 12,
    day: Math.floor(ms / DAY) % 30,
  };
  const minTime = {
    hour: Math.floor(ms / HOUR),
    minute: Math.floor(ms / MIN) % 60,
    second: Math.floor(ms / SEC) % 60,
  };
  if (format == "long") {
    minTime.hour = Math.floor(ms / HOUR) % 24;
    time = { ...time, ...minTime };
  }
  return Object.entries(format == "long" ? time : minTime)
    .filter((val) => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)
    .join(", ");
};
