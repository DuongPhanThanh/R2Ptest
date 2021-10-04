import React from 'react';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['payment'])),
    }, // will be passed to the page component as props
  };
}
export default function Payment() {
  const { t } = useTranslation();

  return (<div>
          {t('payment:payment_title')}
        </div>);
}
