import { action, makeObservable, observable } from 'mobx';

export class AppStore {
  constructor() {
    makeObservable(this, {
      count: observable,
      setCount: action,
    });
  }

    count = 0;

    setCount = () => {
      this.count++;
    }
}
