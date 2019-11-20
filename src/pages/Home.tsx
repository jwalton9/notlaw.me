import React from 'react';
import { css } from 'emotion';

const styles = {
  page: css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    min-height: 100vh;
    padding: 0 2rem;
    background: #1a1a1a;
  `,
  heading: css`
    font-size: 3rem;
    margin: 0;
    margin-bottom: 0.5rem;
  `,
  subheading: css`
    font-size: 1.5rem;
    margin: 0;
    color: #ddd;
  `,
  section: css`
    display: grid;
    align-items: center;
    justify-items: center;
    grid-gap: 2rem;
    grid-template-columns: auto 2fr;
    color: #fff;
    @media screen and (max-width: 45rem) {
      text-align: center;
      grid-template-columns: 1fr;
    }
  `,
  image: css`
    width: 100%;
    max-width: 20rem;
    border-radius: 50%;
    border: 0.5rem solid #fff;
  `,
};

const Home: React.FC = () => (
  <div className={styles.page}>
    <div className={styles.section}>
      <img className={styles.image} alt="me" src={require('../../public/me.webp')} />
      <div>
        <h3 className={styles.heading}>My name is Joe</h3>
        <p className={styles.subheading}>I love building on the web</p>
      </div>
    </div>
  </div>
);

export default Home;
