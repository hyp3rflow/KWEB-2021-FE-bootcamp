import React from 'react';
import { css } from '@emotion/react';
import oc from 'open-color';

const Header = () => {
  return (
    <div
      css={css`
        position: sticky;
        top: 0;
        height: 80px;
        backdrop-filter: blur(30px);
        z-index: 999;
        font-size: 16px;
      `}
    >
      <div
        css={css`
          max-width: 1000px;
          padding: 0 3rem;
          height: 80px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          margin: 0 auto;
        `}
      >
        <div>KWEB 2021 FE Bootcamp</div>
        <div
          css={css`
            display: flex;
            column-gap: 1.125rem;
            color: ${oc.gray[4]};
          `}
        >
          <div>소개</div>
          <div>신청</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
