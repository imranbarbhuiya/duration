import { dateFormateRegex, type dateFormats, months } from './constants';

const padLeftZero = (num: number) => {
	return num.toString().padStart(2, '0');
};

/**
 * Format a date as a string.
 *
 * @param input the date to format
 * @param format the format to use
 * @returns the formatted date
 */
export const date = (input: Date | number | string, format = 'yyyy-MM-dd HH:mm:ss', locale = 'en-US'): string => {
	const dateObj = input instanceof Date ? input : new Date(input);
	const year = dateObj.getFullYear();
	const month = dateObj.getMonth() + 1;
	const day = dateObj.getDate();
	const hour = dateObj.getHours();
	const minute = dateObj.getMinutes();

	const dayOfWeekStr = dateObj.toLocaleDateString(locale, {
		weekday: 'long'
	});

	const formattedText = format.replace(dateFormateRegex, (match) => {
		switch (match as dateFormats) {
			case 'yyyy':
				return year.toString();
			case 'yy':
				return year.toString().substring(2);
			case 'MMMM':
				return months[month - 1];
			case 'MMM':
				return months[month - 1].substring(0, 3);
			case 'MM':
				return padLeftZero(month);
			case 'dd':
			case 'DD':
				return padLeftZero(day);
			case 'HH':
			case 'hh':
				return padLeftZero(/a/i.test(format) ? hour % 12 : hour);
			case 'mm':
				return padLeftZero(minute);
			case 'ss':
				return padLeftZero(dateObj.getSeconds());
			case 'SS':
				return padLeftZero(dateObj.getMilliseconds());
			case 'Do':
				return `${dayOfWeekStr}`;
			case 'DDD':
				return dayOfWeekStr.substring(0, 3);
			case 'D':
				return day.toString();
			case 'Z':
				return (dateObj.getTimezoneOffset() / 60).toString();
			case 'A':
				return dateObj.getHours() < 12 ? 'AM' : 'PM';
			case 'a':
				return dateObj.getHours() < 12 ? 'am' : 'pm';
			case 'X':
				return (dateObj.getTime() / 1000).toString();
			case 'x':
				return dateObj.getTime().toString();
		}
	});

	return formattedText;
};
