const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
};

/**
 *
 * @param {string} value the current locale code
 * @param {date} date the date value
 * @returns formatted date string
 */
export const getLocaleDate = (locale, date) =>
  new Intl.DateTimeFormat([locale, 'en-GB'], options).format(date);
