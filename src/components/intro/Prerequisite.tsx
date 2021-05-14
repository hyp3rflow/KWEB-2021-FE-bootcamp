import React from 'react';
import { css } from '@emotion/react';
import OpenColor from 'open-color';
import IntroHeading from '@src/components/base/IntroHeading';

const Prerequisite = () => {
  return (
    <div
      css={css`
        padding: 24px 0;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      `}
    >
      <IntroHeading>선수 조건 안내</IntroHeading>
      <p
        css={css`
          color: ${OpenColor.gray[4]};
          font-weight: 500;
          font-size: 1.25rem;
        `}
      >
        <p>기본적인 HTML, CSS, JavaScript에 대한 이해</p>
        <p>(KWEB 준회원 스터디 1학기 수강자 혹은 그에 준하는 이해)</p>
      </p>
    </div>
  );
};

export default Prerequisite;
