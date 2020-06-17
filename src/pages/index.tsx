import { NextPage } from 'next';
import cx from 'classnames';

import styles from './index.module.scss';
import { Page } from '../components/Page';
import { Github, Twitter, Instagram } from '../components/Icons';

const Home: NextPage = () => (
  <Page title="Joe Walton | Software Engineer" footer={false}>
    <section className={cx('u-padding-alpha', styles.sectionOne)}>
      <div className="o-container">
        <div className={styles.panel}>
          <picture>
            <source srcSet="/images/me.webp" type="image/webp" />
            <source srcSet="/images/me.jpg" type="image/jpeg" />
            <img className={cx('u-margin-bottom-beta', styles.image)} alt="me" src="/images/me.jpg" />
          </picture>
          <div className={styles.text}>
            <h2 className="u-text-alpha u-text-bold">Joe Walton</h2>
            <p className="u-text-delta u-text-bold u-margin-bottom-delta">Software Engineer</p>
            <div className={styles.icons}>
              <a href="https://github.com/jwalton9">
                <Github />
              </a>
              <a href="https://twitter.com/jwalton9">
                <Twitter />
              </a>
              <a href="https://instagram.com/jwalton9">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Page>
);

export default Home;
