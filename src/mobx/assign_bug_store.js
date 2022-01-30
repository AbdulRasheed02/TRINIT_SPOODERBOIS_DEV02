import {action, makeObservable, observable, computed} from 'mobx';

class AssignBugStore {
  state = {
    assignPerson: '',
    priority: '',
    tag: '',
    deadline: new Date(),
    datePicker: false,
  };

  setAssignPerson = val => {
    this.state.assignPerson = val;
  };

  get getAssignPerson() {
    return this.state.assignPerson;
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

      setAssignPerson: action,
      getAssignPerson: computed,

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
