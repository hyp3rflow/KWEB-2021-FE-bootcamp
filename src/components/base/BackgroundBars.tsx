import React from 'react';
import { css } from '@emotion/react';

const BackgroundBars = () => {
  return (
    <>
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          width: 70%;
          height: 15vh;
          background: linear-gradient(90deg, #0f4c81, #658dc6, #b5c7d3);
          margin-top: 16rem;
          border-top-left-radius: 999px;
          border-bottom-left-radius: 999px;
          transform: skewY(-11deg);
          transform-origin: 0;
          z-index: -1;
        `}
      />
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          width: 40%;
          height: 13vh;
          background: linear-gradient(90deg, #0f4c81, #658dc6, #b5c7d3);
          margin-top: 20rem;
          border-top-left-radius: 999px;
          border-bottom-left-radius: 999px;
          transform: skewY(-11deg);
          transform-origin: 0;
          z-index: -1;
        `}
      />
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 10vh;
          background: linear-gradient(90deg, #0f4c81, #658dc6, #b5c7d3);
          margin-top: 20rem;
          border-top-left-radius: 999px;
          border-bottom-left-radius: 999px;
          transform: skewY(-11deg);
          transform-origin: 0;
          z-index: -1;
        `}
      />
    </>
  );
};

export default BackgroundBars;
