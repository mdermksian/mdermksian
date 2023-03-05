import React from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout';
import headshot from '../images/headshot.jpg';
import Seo from '../components/seo';

const styles = {
  container: css`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    margin-top: 15px;
  `,
  title: css`
    margin-top: 20px;
    text-align: center;
  `,
  headshot: css`
    width: 30%;
    display: block;
    height: auto;
    border-radius: 10px;
    min-width: 230px;
  `,
  aboutMe: css`
    width: 60%;
    min-width: 230px;
  `,
};

const Index = () => {
  return (
    <Layout>
      <div css={styles.container}>
        <img src={headshot} css={styles.headshot} alt='' />
        <div css={styles.aboutMe}>
          <h1 css={styles.title}>Michael Dermksian</h1>
          <p>
            I'm a robotics and controls engineer working in the surgical
            robotics field. I'm always in pursuit of unsolved problems,
            impactful solutions, and a team of driven people to help bridge the
            gap. In recent years, I've discovered a latent love for sharing
            knowledge and helping to build collaborative, healthy teams.
          </p>
          <p>
            Come take a look at the things I've done and get a sense for who I
            am. Shoot me an email, connect with me on LinkedIn, and lets build
            something awesome together.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title={`Home`} />;

export default Index;
