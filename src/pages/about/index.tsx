import React from 'react';
import { observer } from 'mobx-react';
import { useUserStore } from '/@store/index';
import { Button } from 'antd';
import './index.less';

function About() {
  const { userInfo, getUserId, setUserInfo } = useUserStore();

  return (
    <div className="about-page">
      <h1>About 页面</h1>
      <p>name: {userInfo.name}</p>
      <p>id: {getUserId}</p>
      <Button onClick={() => setUserInfo({ name: 'ls', id: '121212' })}>改名</Button>
    </div>
  );
}

export default observer(About);
