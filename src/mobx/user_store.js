import {action, makeObservable, observable, computed} from 'mobx';

class UserStore {
  state = {
    userType: null,
  };

  setUserType = val => {
    this.state.userType = val;
  };

  get getUserType() {
    return this.state.getUserType;
  }

  constructor() {
    makeObservable(this, {
      state: observable,

      setUserType: action,
      getUserType: computed,
    });
  }
}

export const user_store = new UserStore();
