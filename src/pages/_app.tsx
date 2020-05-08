import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/global.css';
import Navigation from '../components/Navigation';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Joe Walton | Software Engineer</title>
    </Head>
    <Navigation />
    <div className="content">
      <Component {...pageProps} />
    </div>
  </>
);

export default App;
