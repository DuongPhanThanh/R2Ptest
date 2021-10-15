const Globalize = require('globalize');
/**
 * 
 * @param {number} value amount of money 
 * @param {string} locale the desired locale 
 * @param {string} style  the desired style
 * @param {string} currency  the desired currency
 * @returns 
 */

export const getLocaleCurrency = (value, locale = 'en-GB', style, currency) => {
  Globalize.locale(locale);
  const formatter = Globalize.currencyFormatter(currency, { style });
  const formattedValue = formatter(value);
  return formattedValue;
};
