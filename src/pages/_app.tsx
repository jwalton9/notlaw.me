import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/global.css';
import Navigation from '../components/Navigation';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Joe Walton | Software Engineer</title>
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
    </Head>
    <Navigation />
    <div className="content">
      <Component {...pageProps} />
    </div>
  </>
);

export default App;
