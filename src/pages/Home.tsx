import React from 'react';
import { css } from 'emotion';

const styles = {
  page: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    min-height: 100vh;
  `,
  heading: css`
    font-size: 5rem;
    text-transform: uppercase;
    margin: 0;
  `,
  subheading: css`
    font-size: 3rem;
    margin: 0;
  `,
};

const Home: React.FC = () => (
  <div className={styles.page}>
    <h1 className={styles.heading}>Joe Walton</h1>
    <h2 className={styles.subheading}>Full Stack Software Engineer</h2>
  </div>
);

export default Home;
