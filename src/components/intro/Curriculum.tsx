import React from 'react';
import { css } from '@emotion/react';
import OpenColor from 'open-color';
import IntroHeading from '../base/IntroHeading';

const Curriculum = () => {
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
      <IntroHeading>커리큘럼 안내</IntroHeading>
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
          <p>다양한 프론트엔드 경험을 쌓을 수 있는 토대를 만들어 드립니다.</p>
          <p>
            부트캠프를 끝까지 수강하신다면, 기본적인 웹 프로토타이핑 또는 작업을
            할 수 있도록
            <br />
            커리큘럼이 구성되어 있습니다.
          </p>
        </p>
        <ul
          css={css`
            padding-left: 1rem;
          `}
        >
          <li>Typescript</li>
          <li>Modern Javascript</li>
          <li>React (React hooks!)</li>
          <li>Emotion / Styled-components</li>
          <li>Deploy with Vercel</li>
        </ul>
      </p>
    </div>
  );
};

export default Curriculum;
