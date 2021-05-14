import React from 'react';
import { css } from '@emotion/react';
import OpenColor from 'open-color';
import IntroHeading from '../base/IntroHeading';

const Schedule = () => {
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
      <IntroHeading>일정 안내</IntroHeading>
      <p
        css={css`
          color: ${OpenColor.gray[4]};
          font-weight: 500;
          font-size: 1.25rem;
        `}
      >
        <p>
          세부 일정은 정해지지 않았으며, 4-5주의 기간 동안 주 1-2회 진행
          예정입니다.
        </p>
        <p>또한 선택적으로 수행할 수 있는 과제물이 주어집니다.</p>
      </p>
    </div>
  );
};

export default Schedule;
