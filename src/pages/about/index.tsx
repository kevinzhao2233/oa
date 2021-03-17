import React from 'react';
import { Observer, observer } from 'mobx-react';
import { useUserStore } from '/@store/index';

function About() {
  const { userInfo, getUserId } = useUserStore();

  return (
    <Observer>{() => (
      <div>
        <h1>About 页面</h1>
        <p>name: {userInfo.name}</p>
        <p>id: {getUserId}</p>
      </div>
    )}
    </Observer>
  );
}

export default observer(About);
