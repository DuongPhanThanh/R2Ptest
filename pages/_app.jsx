import '../styles/global/_globals.scss';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (<Provider store={store}>
  <Head>
    <title>Pinecone</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />
  </Head>
  <Component {...pageProps} />

</Provider>);
}

export default appWithTranslation(MyApp);
