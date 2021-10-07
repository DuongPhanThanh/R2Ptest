const {timeZone} = Intl.DateTimeFormat().resolvedOptions();
const options = {
  weekday: 'long',
  year: 'numeric', month: 'short', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false,
  timeZone
};
export const getLocaleDate = (locale, date) =>
  new Intl.DateTimeFormat(locale, options).format(date);
