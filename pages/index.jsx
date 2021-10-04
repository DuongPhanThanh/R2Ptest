import styles from '@styles/Home.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['home'])),
    }, // will be passed to the page component as props
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
