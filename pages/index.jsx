import styles from '@styles/Home.module.scss';
import { getLocaleProp } from '@utils/getLocale';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const getStaticProps = ({ locale }) =>
  getLocaleProp(locale, ['homepage']);

export default function Home({ locale }) {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{t('homepage:title_welcome')}</h1>

        <div className={styles.grid}>
          <a href={`${locale}/payment`} className={styles.card}>
            <h2>{t('homepage:request_payment_button')} &rarr;</h2>
          </a>
        </div>
      </main>
    </div>
  );
}
