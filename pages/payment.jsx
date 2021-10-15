import { getLocaleProp } from '@utils/getLocale';
import { getLocaleCurrency } from '@utils/getLocaleCurrency';
import { getLocaleDate } from '@utils/getLocaleDate';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  CURRENCY_CODE_EUR,
  CURRENCY_STYLE_ACCOUNTING,
  CURRENCY_STYLE_CODE,
  CURRENCY_STYLE_NAME,
} from 'src/constants';

export const getStaticProps = async ({ locale }) =>
  getLocaleProp(locale, ['payment', 'common', 'plural']);

export default function Payment({ locale }) {
  const { t } = useTranslation();
  const currencyCode = getLocaleCurrency(500, locale, CURRENCY_STYLE_CODE, CURRENCY_CODE_EUR);
  const currencyAccounting = getLocaleCurrency(500, locale, CURRENCY_STYLE_ACCOUNTING, CURRENCY_CODE_EUR);
  const currencyName = getLocaleCurrency(500, locale, CURRENCY_STYLE_NAME, CURRENCY_CODE_EUR);
  const currencyNameOne = getLocaleCurrency(1, locale, CURRENCY_STYLE_NAME, CURRENCY_CODE_EUR);
  return (
    <div>
      <p>{t('plural:person', { numPersons: 2 })}</p>
      <p>{currencyCode}</p>
      <p>{currencyAccounting}</p>
      <p>{currencyName}</p>
      <p>{currencyNameOne}</p>
      <p>{getLocaleDate(locale, new Date())}</p>
    </div>
  );
}
