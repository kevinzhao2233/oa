import React, { Suspense } from 'react';
import { Provider } from 'mobx-react';
import { Spin } from 'antd';
import { store } from './store/index';
import Routers from './router/index';

function App() {
  return (
    <Provider {...store}>
      <Suspense fallback={<Spin />}>
        <Routers />
      </Suspense>
    </Provider>
  );
}

export default App;
