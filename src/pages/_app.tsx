import { AppProps } from 'next/app';

import '../styles/global.css';
import Navigation from '../components/Navigation';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Navigation />
    <div className="content">
      <Component {...pageProps} />
    </div>
  </>
);

export default App;
