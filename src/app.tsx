import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { injectGlobal } from 'emotion';

import { colors, fontSize } from './tokens';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

const Home = lazy(() => import(/* webpackChunkName: 'home' */ './pages/Home'));

injectGlobal`
html,
body {
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}

body {
  font-family: Lato, Helvetica, Arial, sans-serif;
  font-size: ${fontSize.base};
  font-weight: 400;
  color: ${colors.text};
}

*, *::before, *::after {
  box-sizing: border-box;
}

#root {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
`;

const App = () => (
  <Router>
    <Suspense fallback="Loading...">
      <Navigation />
      <div className="content">
        <Route exact path="/" component={Home} />
      </div>
      <Footer />
    </Suspense>
  </Router>
);

export default hot(App);
