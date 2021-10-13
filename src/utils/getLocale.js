import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import nextI18nextConfig from '../../next-i18next.config';

/**
 *
 * @param {*} locale
 * @param {[string]} pages
 * @returns {Object}
 */
export const getLocaleProp = async (locale, pages = []) => ({
  props: {
    ...(await serverSideTranslations(locale, pages, nextI18nextConfig)),
    locale,
  },
});
