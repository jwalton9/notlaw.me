import { AppProps } from 'next/app';
import Head from 'next/head';

import './_app.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Joe Walton | Software Engineer</title>
    </Head>
    <div className="content">
      <Component {...pageProps} />
    </div>
  </>
);

export default App;
