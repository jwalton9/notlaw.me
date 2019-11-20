import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { injectGlobal } from 'emotion';

import Navigation from './components/Navigation';

const Home = lazy(() => import(/* webpackChunkName: 'home' */ './pages/Home'));

injectGlobal`
html,
body {
  min-height: 100vh;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}

body {
  font-family: Lato, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #1a1a1a;
  background: #fff;
}

*, *::before, *::after {
  box-sizing: border-box;
}
`;

const App = () => (
  <Router>
    <Suspense fallback="Loading...">
      <Navigation />
      <div className="content">
        <Route exact path="/" component={Home} />
      </div>
    </Suspense>
  </Router>
);

export default hot(App);
