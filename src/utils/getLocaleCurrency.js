/**
 *
 * @param {object} value the amount of currency
 * @param {string} locale the current locale
 * @returns
 */
export const getLocaleCurrency = (value, locale) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR' }).format(
    value,
  );
