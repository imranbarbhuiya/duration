import { second, minute, hour, day, year, month } from "./constants";

export const relativeTime = (time: number | Date | string) => {
  const givenDate = time instanceof Date ? time : new Date(time);
  const now = new Date();

  let diff = now.getTime() - givenDate.getTime();
  if (diff > 0) {
    if (diff < second * 2) {
      return "just now";
    }
    if (diff < minute) {
      return Math.floor(diff / second) + " seconds ago";
    }
    if (diff < minute * 2) {
      return "a minute ago";
    }
    if (diff < hour) {
      return Math.floor(diff / minute) + " minutes ago";
    }
    if (diff < hour * 2) {
      return "an hour ago";
    }
    if (diff < day) {
      return Math.floor(diff / hour) + " hours ago";
    }
    if (diff < day * 2) {
      return "yesterday";
    }
    if (diff < day * 7) {
      return Math.floor(diff / day) + " days ago";
    }
    if (diff < day * 14) {
      return "a week ago";
    }
    if (diff < day * 31) {
      return Math.floor(diff / (day * 7)) + " weeks ago";
    }
    if (diff < day * 61) {
      return "a month ago";
    }
    if (diff < year) {
      return Math.floor(diff / month) + " months ago";
    }
    if (diff < year * 2) {
      return "a year ago";
    }
    return Math.floor(diff / year) + " years ago";
  } else {
    diff = -diff;
    if (diff < second * 2) {
      return "in a few seconds";
    }
    if (diff < minute) {
      return "in " + Math.floor(diff / second) + " seconds";
    }
    if (diff < minute * 2) {
      return "in a minute";
    }
    if (diff < hour) {
      return "in " + Math.floor(diff / minute) + " minutes";
    }
    if (diff < hour * 2) {
      return "in an hour";
    }
    if (diff < day) {
      return "in " + Math.floor(diff / hour) + " hours";
    }
    if (diff < day * 2) {
      return "tomorrow";
    }
    if (diff < day * 7) {
      return "in " + Math.floor(diff / day) + " days";
    }
    if (diff < day * 14) {
      return "in a week";
    }
    if (diff < day * 31) {
      return "in " + Math.floor(diff / (day * 7)) + " weeks";
    }
    if (diff < day * 61) {
      return "in a month";
    }
    if (diff < year) {
      return "in " + Math.floor(diff / month) + " months";
    }
    if (diff < year * 2) {
      return "in a year";
    }
    return "in " + Math.floor(diff / year) + " years";
  }
};
