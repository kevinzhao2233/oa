import { createContext, useContext } from 'react';
import { AppStore } from './modules/app';
import { UserStore } from './modules/user';

function createStores() {
  return {
    appStore: new AppStore(),
    userStore: new UserStore(),
  };
}

const store = createStores();
const StoreContext = createContext(store);
const useStores = () => useContext(StoreContext);

function useAppStore() {
  const { appStore } = useStores();
  return appStore;
}

function useUserStore() {
  const { userStore } = useStores();
  return userStore;
}

export {
  store,
  StoreContext,
  useAppStore,
  useUserStore,
};
