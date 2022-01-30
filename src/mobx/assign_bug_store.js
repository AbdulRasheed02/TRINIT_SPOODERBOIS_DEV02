import {action, makeObservable, observable, computed} from 'mobx';

class AssignBugStore {
  state = {
    assignManager: '',
    priority: '',
    tag: '',
    deadline: new Date(),
    datePicker: false,
  };

  setAssignManager = val => {
    this.state.assignManager = val;
  };

  get getAssignManager() {
    return this.state.assignManager;
  }

  setPriority = val => {
    this.state.priority = val;
  };

  get getPriority() {
    return this.state.priority;
  }

  setTag = val => {
    this.state.tag = val;
  };

  get getTag() {
    return this.state.tag;
  }

  setDeadline = val => {
    this.state.deadline = val;
  };

  get getDeadline() {
    return this.state.deadline;
  }

  setDatepicker = val => {
    this.state.datePicker = val;
  };

  get getDatepicker() {
    return this.state.datePicker;
  }

  constructor() {
    makeObservable(this, {
      state: observable,

      setAssignManager: action,
      getAssignManager: computed,

      setPriority: action,
      getPriority: computed,

      setTag: action,
      getTag: computed,

      setDeadline: action,
      getDeadline: computed,

      setDatepicker: action,
      getDatepicker: computed,
    });
  }
}

export const assign_bug_store = new AssignBugStore();
