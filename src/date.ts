const padLeftZero = (str: number) => {
  return `0${str}`.slice(-2);
};

/**
 * Format a date as a string.
 *
 * @param date the date to format
 * @param format the format to use
 * @returns the formatted date
 */
export const date = (
  date: Date | number | string,
  format = "yyyy-MM-dd HH:mm:ss",
  locale = "en-US"
): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  dateObj.toLocaleDateString();
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

  const dayOfWeekStr = dateObj.toLocaleDateString(locale, {
    weekday: "long",
  });

  const regex = /yyyy|yy|MMMM|MMM|MM|dd|HH|hh|mm|ss|SS|Do|DDD|DD|D|Z|A|a|X|x/g;

  format = format.replace(regex, (match) => {
    switch (match) {
      case "yyyy":
        return year.toString();
      case "yy":
        return year.toString().substring(2);
      case "MMMM":
        return months[month - 1];
      case "MMM":
        return months[month - 1].substring(0, 3);
      case "MM":
        return padLeftZero(month);
      case "dd":
      case "DD":
        return padLeftZero(day);
      case "HH":
      case "hh":
        return padLeftZero(hour);
      case "mm":
        return padLeftZero(minute);
      case "ss":
        return padLeftZero(dateObj.getSeconds());
      case "SS":
        return padLeftZero(dateObj.getMilliseconds());
      case "Do":
        return `${dayOfWeekStr}`;
      case "DDD":
        return dayOfWeekStr.substring(0, 3);
      case "D":
        return day.toString();
      case "Z":
        return (dateObj.getTimezoneOffset() / 60).toString();
      case "A":
        return dateObj.getHours() < 12 ? "AM" : "PM";
      case "a":
        return dateObj.getHours() < 12 ? "am" : "pm";
      case "X":
        return (dateObj.getTime() / 1000).toString();
      case "x":
        return dateObj.getTime().toString();
      default:
        return match;
    }
  });

  return format;
};
