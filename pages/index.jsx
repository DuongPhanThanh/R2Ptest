import styles from '@styles/Home.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

import nextI18nextConfig from '../next-i18next.config';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'], nextI18nextConfig)),
      locale,
    },
  };
}
export default function Home({ locale }) {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{t('home:title_welcome')}</h1>

        <div className={styles.grid}>
          <a href={`${locale}/payment`} className={styles.card}>
            <h2>{t('home:requeset_payment_button')} &rarr;</h2>
          </a>
        </div>
      </main>
    </div>
  );
}
