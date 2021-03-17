import {
  action, makeObservable, observable, computed,
} from 'mobx';

interface UserInfo {
  id: string;
  name: string;
}

export class UserStore {
  constructor() {
    makeObservable(this, {
      userInfo: observable,
      getUserId: computed,
      setUserInfo: action,
      token: observable,
    });
  }

  /**
   * 用户信息
   */
  userInfo: UserInfo = {
    id: '10086',
    name: 'kevin',
  }

  get getUserId() {
    return this.userInfo.id;
  }

  setUserInfo = (data: UserInfo) => {
    this.userInfo = data;
  }

  /**
   * 用户 token
   */
  token = '10010'

  get getToken() {
    return this.token;
  }
}
