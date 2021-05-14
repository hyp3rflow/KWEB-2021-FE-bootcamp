import React from 'react';
import { css } from '@emotion/react';
import OpenColor from 'open-color';
import IntroHeading from '../base/IntroHeading';

const Lecturer = () => {
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
      <IntroHeading>강사 소개</IntroHeading>
      <p
        css={css`
          color: ${OpenColor.gray[4]};
          font-weight: 500;
          font-size: 1.25rem;
        `}
      >
        <p
          css={css`
            margin-bottom: 1.25rem;
          `}
        >
          컴퓨터학과 19학번 최용욱
        </p>
        <ul
          css={css`
            padding-left: 1rem;
          `}
        >
          <li>고려대학교 강의평가 사이트 KLUE: FE 개발</li>
          <li>고려대학교 정보대학 온라인선거시스템: KU-Voting FE 개발</li>
          <li>뤼이드 (Riiid / 산타토익), Frontend Engineer</li>
        </ul>
      </p>
    </div>
  );
};

export default Lecturer;
