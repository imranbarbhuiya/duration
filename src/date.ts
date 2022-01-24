const padLeftZero = (str: number) => {
  return `0${str}`.slice(-2);
};

/**
 *
 * @param date the date to format
 * @param format the format to use
 * @returns the formatted date
 */
export const date = (
  date: Date | number | string,
  format = "yyyy-MM-dd HH:mm:ss"
): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = dateObj.getDay();
  const dayOfWeekStr = days[dayOfWeek];

  const dayOfWeekShortStr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    dayOfWeek
  ].substring(0, 1);

  return format
    .replace("yyyy", `${year}`)
    .replace("yy", `${year % 100}`.slice(2))
    .replace("MMMM", months[month - 1])
    .replace("MMM", months[month - 1].substring(0, 3))
    .replace("MM", padLeftZero(month))
    .replace("dd", padLeftZero(day))
    .replace("HH", padLeftZero(hour))
    .replace("mm", padLeftZero(minute))
    .replace("ss", padLeftZero(dateObj.getSeconds()))
    .replace("SS", padLeftZero(dateObj.getMilliseconds()))
    .replace("Do", dayOfWeekStr)
    .replace("D", dayOfWeekShortStr)
    .replace("DD", padLeftZero(day))
    .replace("DDD", `${dateObj.getDay()}`)
    .replace("Z", `${dateObj.getTimezoneOffset() / 60}`)
    .replace("A", hour < 12 ? "AM" : "PM")
    .replace("a", hour < 12 ? "am" : "pm")
    .replace("X", `${dateObj.getTime() / 1000}`)
    .replace("x", `${dateObj.getTime()}`);
};
