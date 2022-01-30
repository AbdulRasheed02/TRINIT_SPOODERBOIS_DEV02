import {action, makeObservable, observable, computed} from 'mobx';

class UserStore {
  state = {
    userName: '',
    userType: '',
    userId: '',
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

  setUserId = val => {
    this.state.userId = val;
  };

  get getUserId() {
    return this.state.userId;
  }

  constructor() {
    makeObservable(this, {
      state: observable,

      setUserName: action,
      getUserName: computed,

      setUserType: action,
      getUserType: computed,

      setUserId: action,
      getUserId: computed,
    });
  }
}

export const user_store = new UserStore();
