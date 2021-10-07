import { getLocaleProp } from '@utils/getLocale';
import { getLocaleDate } from '@utils/getLocaleDate';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const getStaticProps = ({ locale }) =>
  getLocaleProp(locale, ['payment', 'common']);

export default function Payment({ locale }) {
  const { t } = useTranslation();
  return (
    <div>
      {t('payment:payment_title')}
      <br />
      {t('common:currency', { value: 1000 })}
      <br />
      {getLocaleDate(locale, new Date())}
    </div>
  );
}
