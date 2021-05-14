import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyle from '@src/components/base/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>KWEB 2021 FE Bootcamp :: 프론트엔드 부트캠프</title>
        <style>
          {`
            @import
            url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
            @import url('//fonts.googleapis.com/earlyaccess/notosanskr.css');
            @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
          `}
        </style>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
