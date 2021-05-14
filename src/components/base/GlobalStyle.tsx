import { css, Global } from '@emotion/react';
import Head from 'next/head';
import React from 'react';

const GlobalStyle = () => (
  <>
    <Head>
      <link
        href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
        rel="stylesheet"
        type="text/css"
      />
    </Head>
    <Global
      styles={css`
        html {
          font-size: 16px;
          height: 100%;

          @media screen and (max-width: 800px) {
            font-size: 14px;
          }

          @media screen and (max-width: 700px) {
            font-size: 12px;
          }
        }

        body {
          padding-bottom: env(safe-area-inset-bottom);
          word-break: keep-all;
          background: #050a0b;
          color: #ffffff;
          min-height: 100%;
          line-height: 1.5;

          margin: 0;
          padding: 0;
          font-family: 'Inter', 'Spoqa Han Sans Neo', -apple-system,
            BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
            'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;

          scrollbar-width: none;
        }

        textarea,
        button,
        button:active,
        input {
          resize: none;
          outline: none;
          border: none;

          font-family: 'Inter', 'Spoqa Han Sans Neo', -apple-system,
            BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
            'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }

        a,
        a:visited {
          color: inherit;
          text-decoration: none;
        }

        input,
        textarea {
          border: none;

          :focus {
            outline: none;
          }
        }

        * {
          box-sizing: border-box;
          margin: 0;

          ::selection {
            color: #f1f3f5;
          }
        }

        #root {
          overflow-y: auto;
        }
      `}
    />
  </>
);

export default GlobalStyle;
