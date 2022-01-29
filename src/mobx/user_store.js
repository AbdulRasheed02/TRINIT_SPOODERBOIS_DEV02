import {action, makeObservable, observable, computed} from 'mobx';

class UserStore {
  state = {
    userName: '',
    userType: null,
  };

  setUserName = val => {
    this.state.userName = val;
  };

  get getUserName() {
    return this.state.userName;
  }

  setUserType = val => {
    this.state.userType = val;
  };

  get getUserType() {
    return this.state.userType;
  }

  constructor() {
    makeObservable(this, {
      state: observable,

      setUserName: action,
      getUserName: computed,

      setUserType: action,
      getUserType: computed,
    });
  }
}

export const user_store = new UserStore();
