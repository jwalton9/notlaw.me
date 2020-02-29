import { NextPage } from 'next';

import styles from '../styles/index.module.css';

const Home: NextPage = () => (
  <div className={styles.page}>
    <div className={styles.section}>
      <img className={styles.image} alt="me" src="/images/me.webp" />
      <div>
        <h3 className={styles.heading}>My name is Joe</h3>
        <p className={styles.subheading}>I love building on the web</p>
      </div>
    </div>
  </div>
);

export default Home;
