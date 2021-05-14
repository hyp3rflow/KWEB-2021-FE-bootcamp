import React from 'react';
import { css } from '@emotion/react';
import oc from 'open-color';

const Introduction = () => {
  return (
    <div
      css={css`
        padding: 24px 0;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
      `}
    >
      <h3
        css={css`
          color: ${oc.gray[4]};
          font-size: 1.5rem;
        `}
      >
        KWEB 2021 프론트엔드 부트캠프
      </h3>
      <h1
        css={css`
          font-size: 2.5rem;
          text-align: right;
        `}
      >
        프론트엔드의 세계로 여러분을 초대합니다.
      </h1>
    </div>
  );
};

export default Introduction;
