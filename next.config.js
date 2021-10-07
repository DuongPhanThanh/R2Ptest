require('dotenv').config({ path: `./.env.${process.env.ENVIROMENT}` });

const path = require('path');
const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async headers() {
    return [
      {
        source: '/payment',
        headers: [
          {
            key: 'x-pinecone-payment',
            value: `${process.env.NEXT_PUBLIC_HEADER}`,
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy',
            value: `default-src 'self'; style-src https://fonts.googleapis.com; style-src-elem https://fonts.googleapis.com 'unsafe-inline'; font-src https://fonts.gstatic.com/ https://fonts.googleapis.com;`,
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};
