import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import HomePage from '/@pages/home/index';

// 异步加载组件
const AboutPage = React.lazy(() => import('/@pages/about'));

const RouterContainer: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </HashRouter>
);

export default RouterContainer;
