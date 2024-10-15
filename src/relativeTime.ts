import { Time } from './constants.js';

/**
 * Format a date as relative time.
 *
 * @param time - the time to format
 * @param from - the relative time from this time
 * @returns the formatted relative time
 */
export const relativeTime = (time: Date | number | string, from: Date | number | string = new Date()) => {
	const givenDate = time instanceof Date ? time : new Date(time);
	const dateFrom = from instanceof Date ? from : new Date(from);

	let diff = dateFrom.getTime() - givenDate.getTime();
	if (diff > 0) {
		if (diff < Time.Second * 2) return 'just now';

		if (diff < Time.Minute) return `${Math.floor(diff / Time.Second)} seconds ago`;

		if (diff < Time.Minute * 2) return 'a minute ago';

		if (diff < Time.Hour) return `${Math.floor(diff / Time.Minute)} minutes ago`;

		if (diff < Time.Hour * 2) return 'an hour ago';

		if (diff < Time.Day) return `${Math.floor(diff / Time.Hour)} hours ago`;

		if (diff < Time.Day * 2) return 'yesterday';

		if (diff < Time.Week) return `${Math.floor(diff / Time.Day)} days ago`;

		if (diff < Time.Day * 14) return 'a week ago';

		if (diff < Time.Day * 31) return `${Math.floor(diff / Time.Week)} weeks ago`;

		if (diff < Time.Day * 61) return 'a month ago';

		if (diff < Time.Year) return `${Math.floor(diff / Time.Month)} months ago`;

		if (diff < Time.Year * 2) return 'a year ago';

		return `${Math.floor(diff / Time.Year)} years ago`;
	}

	diff = -diff;
	if (diff < Time.Second * 2) return 'in a few seconds';

	if (diff < Time.Minute) return `in ${Math.floor(diff / Time.Second)} seconds`;

	if (diff < Time.Minute * 2) return 'in a minute';

	if (diff < Time.Hour) return `in ${Math.floor(diff / Time.Minute)} minutes`;

	if (diff < Time.Hour * 2) return 'in an hour';

	if (diff < Time.Day) return `in ${Math.floor(diff / Time.Hour)} hours`;

	if (diff < Time.Day * 2) return 'tomorrow';

	if (diff < Time.Week) return `in ${Math.floor(diff / Time.Day)} days`;

	if (diff < Time.Day * 14) return 'in a week';

	if (diff < Time.Day * 31) return `in ${Math.floor(diff / Time.Week)} weeks`;

	if (diff < Time.Day * 61) return 'in a month';

	if (diff < Time.Year) return `in ${Math.floor(diff / Time.Month)} months`;

	if (diff < Time.Year * 2) return 'in a year';

	return `in ${Math.floor(diff / Time.Year)} years`;
};
