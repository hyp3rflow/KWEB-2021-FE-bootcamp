import PageLayout from '@src/components/base/PageLayout';
import Header from '@src/components/base/Header';
import React from 'react';
import { css } from '@emotion/react';
import Introduction from '@src/components/intro/Introduction';
import Prerequisite from '@src/components/intro/Prerequisite';
import Lecturer from '@src/components/intro/Lecturer';
import Curriculum from '@src/components/intro/Curriculum';
import Schedule from '@src/components/intro/Schedule';
import BackgroundBars from '@src/components/base/BackgroundBars';

const HomePage = () => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <Header />
      <PageLayout>
        <Introduction />
        <Prerequisite />
        <Lecturer />
        <Curriculum />
        <Schedule />
      </PageLayout>
      <BackgroundBars />
    </div>
  );
};

export default HomePage;
