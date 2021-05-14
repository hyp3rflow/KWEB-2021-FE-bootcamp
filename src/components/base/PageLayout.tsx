import { css } from '@emotion/react';
import React from 'react';

type PageLayoutProps = React.ComponentPropsWithoutRef<'div'>;

const PageLayout = React.forwardRef<HTMLDivElement, PageLayoutProps>(
  ({ children }) => {
    return (
      <div
        css={css`
          padding: 2rem 2.25rem;
          margin: 0 auto;
          margin-top: 80px;
          max-width: 1000px;
        `}
      >
        {children}
      </div>
    );
  }
);

export default PageLayout;
