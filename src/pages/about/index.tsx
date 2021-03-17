import React from 'react';
import { Observer, observer } from 'mobx-react';
import { useAppStore } from '/@store/index';
import { Button } from 'antd';

function About() {
  const { count, setCount } = useAppStore();

  return (
    <Observer>{() => (
      <div>
        <h1>About 页面</h1>
        <p>count is: {count}</p>
        <Button onClick={setCount}>加一</Button>
      </div>
    )}
    </Observer>
  );
}

export default observer(About);
