import {action, makeObservable, observable, computed} from 'mobx';

class BugCreationStore {
  state = {
    bugTitle: '',
    bugDesc: '',
    bugLink: '',
    bugUserDevice: '',
    bugReplicatoin: '',
  };

  setBugTitle = val => {
    this.state.bugTitle = val;
  };

  get getBugTitle() {
    return this.state.bugTitle;
  }

  setBugDesc = val => {
    this.state.bugDesc = val;
  };

  get getBugDesc() {
    return this.state.bugDesc;
  }

  setBugLink = val => {
    this.state.bugLink = val;
  };

  get getBugLink() {
    return this.state.bugLink;
  }

  setBugUserDevice = val => {
    this.state.bugUserDevice = val;
  };

  get getBugUserDevice() {
    return this.state.bugUserDevice;
  }

  setBugReplication = val => {
    this.state.bugReplicatoin = val;
  };

  get getBugReplication() {
    return this.state.bugReplicatoin;
  }

  constructor() {
    makeObservable(this, {
      state: observable,

      setBugTitle: action,
      getBugTitle: computed,

      setBugDesc: action,
      getBugDesc: computed,

      setBugLink: action,
      getBugLink: computed,

      setBugUserDevice: action,
      getBugUserDevice: computed,

      setBugReplication: action,
      getBugReplication: computed,
    });
  }
}

export const bug_creation_store = new BugCreationStore();
