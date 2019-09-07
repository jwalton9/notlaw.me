import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

const Home = lazy(() => import(/* webpackChunkName: 'home' */ './pages/Home'));
const Spinner = lazy(() => import(/* webpackChunkName: 'spinner' */ './pages/Spinner'));

const App = () => (
  <Router>
    <Suspense fallback="Loading...">
      <Navigation />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/spinner" component={Spinner} />
      </div>
      <Footer />
    </Suspense>
  </Router>
);

export default hot(App);
