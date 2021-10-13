import { getLocaleProp } from '@utils/getLocale';
import { getLocaleCurrency } from '@utils/getLocaleCurrency';
import { getLocaleDate } from '@utils/getLocaleDate';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const getStaticProps = ({ locale }) =>
  getLocaleProp(locale, ['payment', 'common', 'icu']);

export default function Payment({ locale }) {
  const { t } = useTranslation();
  const currencyFormat = t('common:currency');
  return (
    <div>
      <div>{t('icu:person', { numPersons: 2 })}</div>
      <div>{getLocaleCurrency(500, locale, currencyFormat)}</div>
      <div>{getLocaleDate(locale, new Date())}</div>
    </div>
  );
}
