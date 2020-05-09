import Navigation from '../Navigation';
import { Footer } from '../Footer';

import styles from './Page.module.scss';
import Head from 'next/head';

interface Props {
  title: string;
}

export const Page: React.FC<Props> = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className={styles.page}>
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  </>
);
