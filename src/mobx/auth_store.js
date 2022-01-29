import {action, makeObservable, observable, computed} from 'mobx';

class AuthStore {
  state = {
    showSplash: true,
    isLoggedIn: false,
    token: null,
  };

  logOut = () => {
    this.state.isLoggedIn = false;
    this.state.token = null;
  };

  logIn = token => {
    this.state.isLoggedIn = true;
    this.state.token = token;
  };
  closeSplash = () => {
    this.state.showSplash = false;
  };
  get token() {
    return this.state.token;
  }
  get isUserLoggedIn() {
    return this.state.isLoggedIn;
  }
  get showSplash() {
    return this.state.showSplash;
  }
  constructor() {
    makeObservable(this, {
      state: observable,
      logIn: action,
      logOut: action,
      token: computed,
      isUserLoggedIn: computed,
      showSplash: computed,
      closeSplash: action,
    });
  }
}

export const auth_store = new AuthStore();
