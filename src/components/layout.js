import React from 'react';
import Header from './header';
import Footer from './footer';
import { css } from '@emotion/react';

import { rhythm } from '../utils/typography';

const styles = {
  container: css`
    margin: 0 auto;
    max-width: 1200px;
    padding: ${rhythm(2)};
    padding-top: ${rhythm(1.5)};
  `,
};

const Layout = ({ children }) => (
  <div css={styles.container}>
    <Header />
    {children}
    <Footer />
  </div>
);
export default Layout;
