import React from 'react';
import { inject, observer } from 'mobx-react';
import { store } from '/@store/index';
import { Button } from 'antd';

// 注入的名称要与 src/store/index 中 createStore 里 key 值相同
@inject('appStore')
@observer
class Home extends React.Component {
  render() {
    const { count, setCount } = store.appStore;
    return (
      <div>
        <div>A</div>
        <div>数量：{count}
          <Button type="primary" onClick={() => setCount()}>+</Button>
        </div>
      </div>
    );
  }
}

export default Home;
