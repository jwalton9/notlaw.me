import Navigation from '../Navigation';
import { Footer } from '../Footer';

import styles from './Page.module.scss';
import Head from 'next/head';

interface Props {
  title: string;
  footer?: boolean;
}

export const Page: React.FC<Props> = ({ title, footer = true, children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className={styles.page}>
      <Navigation />
      <div className="u-padding-left-beta u-padding-right-beta u-margin-top-gamma u-margin-bottom-gamma">
        <div className="o-container">{children}</div>
      </div>
      {footer && <Footer />}
    </div>
  </>
);
