import { createContext, useContext } from 'react';
import { AppStore } from './app';

function createStores() {
  return {
    appStore: new AppStore(),
  };
}

const store = createStores();

const StoreContext = createContext(store);

// hooks 使用笔记看这里 -> https://github.com/olivewind/blog/issues/1
const useStores = () => useContext(StoreContext);

function useAppStore() {
  const { appStore } = useStores();
  return appStore;
}

export {
  store,
  useAppStore,
  StoreContext,
};
