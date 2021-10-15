import styles from '@styles/Home.module.scss';
import { getLocaleProp } from '@utils/getLocale';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const getStaticProps = async ({ locale }) =>
  getLocaleProp(locale, ['homepage']);

export default function Home({ locale }) {
  const { t } = useTranslation();
  const router = useRouter();
  const goToPayment = () => {
    router.push(`${locale}/payment`);
  };
  const changeLocale = (e) => {
    router.push('/', '/', { locale: e.target.value });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{t('homepage:title_welcome')}</h1>

        <div className={styles.grid}>
          <a onClick={goToPayment} className={styles.card}>
            <h2>{t('homepage:request_payment_button')} &rarr;</h2>
          </a>
        </div>

        <select
          onChange={changeLocale}
          className="form-select"
          aria-label="Default select example"
        >
          <option defaultValue value="en-GB">
            {t('homepage:change_language')}
          </option>
          <option value="en-GB">English (United Kingdom)</option>
          <option value="fi-FI">Finnish </option>
          <option value="sv-SE">Swedish (Sweden)</option>
          <option value="sv-FI">Swedish (Finland)</option>
        </select>
      </main>
    </div>
  );
}
