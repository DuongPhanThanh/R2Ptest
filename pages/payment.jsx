import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

import nextI18nextConfig from '../next-i18next.config';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['payment'], nextI18nextConfig)),
      locale,
    },
  };
}
export default function Payment() {
  const { t } = useTranslation();

  return <div>{t('payment:payment_title')}</div>;
}
