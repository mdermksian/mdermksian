import React from "react"
import Header from "./header"
import Footer from "./footer"
import { css } from "@emotion/core"
import { Helmet } from "react-helmet"

import { rhythm } from "../utils/typography"

const styles = {
  container: css`
    margin: 0 auto;
    max-width: 1200px;
    padding: ${rhythm(2)};
    padding-top: ${rhythm(1.5)};
  `
}

export default ({ children }) => (
  <div css={styles.container}>
    <Helmet>
      <meta charSet="utf-8"/>
      <title>Michael Dermksian</title>
      <link rel="canonical" href="https://michaeldermksian.com" />
    </Helmet>
    <Header/>
    {children}
    <Footer/>
  </div>
)