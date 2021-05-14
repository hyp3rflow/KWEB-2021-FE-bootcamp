import React from 'react';
import { css } from '@emotion/react';

type IntroHeadingProps = React.ComponentProps<'h2'>;

const IntroHeading = ({ children }: IntroHeadingProps) => {
  return (
    <h2
      css={css`
        font-size: 1.75rem;
        margin-bottom: 1rem;

        position: relative;

        &::before {
          position: absolute;
          content: '';
          top: -1.5rem;
          left: -1.5rem;
          width: 3rem;
          height: 3rem;
          transform: skewY(20deg);
          background: linear-gradient(0deg, #0f4c81, #658dc6);
          z-index: -1;
        }
      `}
    >
      {children}
    </h2>
  );
};

export default IntroHeading;
