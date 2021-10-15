/* eslint-disable import/extensions */
import 'globalize/dist/globalize/number';
import 'globalize/dist/globalize/plural';
import 'globalize/dist/globalize/currency';

const enGBCldrNumbersData = require('cldr-data/main/en-GB/numbers.json');
const svCldrNumbersData = require('cldr-data/main/sv/numbers.json');
const svAXCldrNumbersData = require('cldr-data/main/sv-AX/numbers.json');
const svFICldrNumbersData = require('cldr-data/main/sv-FI/numbers.json');
const fiCldrNumbersData = require('cldr-data/main/fi/numbers.json');

const enGBCurrencies = require('cldr-data/main/en-GB/currencies.json');
const svCurrencies = require('cldr-data/main/sv/currencies.json');
const svAXCurrencies = require('cldr-data/main/sv-AX/currencies.json');
const svFICurrencies = require('cldr-data/main/sv-FI/currencies.json');
const fiCurrencies = require('cldr-data/main/fi/currencies.json');

const numberingSystems = require('cldr-data/supplemental/numberingSystems.json');
const plurals = require('cldr-data/supplemental/plurals.json');
const ordinals = require('cldr-data/supplemental/ordinals.json');
const currencyData = require('cldr-data/supplemental/currencyData.json');
const likelySubtags = require('cldr-data/supplemental/likelySubtags.json');
const Globalize = require('globalize');

Globalize.load(
  numberingSystems,
  plurals,
  ordinals,
  currencyData,
  likelySubtags,
  svAXCldrNumbersData,
  enGBCldrNumbersData,
  svFICldrNumbersData,
  fiCldrNumbersData,
  svCldrNumbersData.main,
  svCurrencies,
  enGBCurrencies,
  svFICurrencies,
  svAXCurrencies,
  fiCurrencies,
);
/**
 * 
 * @param {number} value amount of money 
 * @param {string} locale the desired locale 
 * @param {string} style  the desired style
 * @param {string} currency  the desired currency
 * @returns 
 */

export const getLocaleCurrency = (value, locale = 'en-GB', style, currency) => {
  if (locale === 'sv-SE') {
    console.log(locale);
    Globalize.locale('sv');
  } else {
    Globalize.locale(locale);
  }
  const formatter = Globalize.currencyFormatter(currency, { style });
  const formattedValue = formatter(value);
  return formattedValue;
};
