import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from '/@pages/home/index';

// 异步加载组件
const AboutPage = React.lazy(() => import('/@pages/about'));

const RouterContainer: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default RouterContainer;
