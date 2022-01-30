import * as constants from './constants';
import * as userTypes from './userType';
export const userData = [
  {
    userName: 'Jegan',
    userPosition: userTypes.teamLeader,
    userId: 1,
  },
  {
    userName: 'Abdul Rasheed',
    userPosition: userTypes.manager,
    userId: 2,
  },
  {
    userName: 'Ameen',
    userPosition: userTypes.manager,
    userId: 3,
  },
  {
    userName: 'Jack',
    userPosition: userTypes.manager,
    userId: 4,
  },
  {
    userName: 'Rose',
    userPosition: userTypes.employee,
    userId: 5,
  },
  {
    userName: 'Jake',
    userPosition: userTypes.employee,
    userId: 6,
  },
  {
    userName: 'Bob',
    userPosition: userTypes.employee,
    userId: 7,
  },
  {
    userName: 'Amy',
    userPosition: userTypes.employee,
    userId: 8,
  },
  {
    userName: 'Susan',
    userPosition: userTypes.employee,
    userId: 9,
  },
  {
    userName: 'Rohan',
    userPosition: userTypes.employee,
    userId: 10,
  },
];

export const allBugsData = [
  {
    bugTitle: 'Blinking',
    bugDesc: 'Screen is Blinking',
    bugStatus: constants.bugRaised,
    Assignedto: userData[4].userName,
  },
  {
    bugTitle: 'Blinking',
    bugDesc: 'Screen is Blinking',
    bugStatus: constants.bugRaised,
    Assignedto: userData[4].userName,
  },
  {
    bugTitle: 'Blinking',
    bugDesc: 'Screen is Blinking',
    bugStatus: constants.bugRaised,
    Assignedto: userData[4].userName,
  },
  {
    bugTitle: 'Blinking',
    bugDesc: 'Screen is Blinking',
    bugStatus: constants.bugRaised,
    Assignedto: userData[4].userName,
  },
  {
    bugTitle: 'Button not Working',
    bugDesc: 'Button is not Blinking',
    bugStatus: constants.bugResolved,
    Assignedto: userData[4].userName,
  },
  {
    bugTitle: 'Button not Working',
    bugDesc: 'Button is not Blinking',
    bugStatus: constants.bugResolved,
    Assignedto: userData[5].userName,
  },
  {
    bugTitle: 'Button not Working',
    bugDesc: 'Button is not Blinking',
    bugStatus: constants.bugResolved,
    Assignedto: userData[5].userName,
  },
  {
    bugTitle: 'Button not Working',
    bugDesc: 'Button is not Blinking',
    bugStatus: constants.bugResolved,
    Assignedto: userData[5].userName,
  },
  {
    bugTitle: 'Button not Working',
    bugDesc: 'Button is not Blinking',
    bugStatus: constants.bugResolved,
    Assignedto: userData[6].userName,
  },
  {
    bugTitle: 'Button not Working',
    bugDesc: 'Button is not Blinking',
    bugStatus: constants.bugResolved,
    Assignedto: userData[6].userName,
  },
  {
    bugTitle: 'Button not Working',
    bugDesc: 'Button is not Blinking',
    bugStatus: constants.bugResolved,
    Assignedto: userData[6].userName,
  },
  {
    bugTitle: 'Button not Working',
    bugDesc: 'Button is not Blinking',
    bugStatus: constants.bugResolved,
    Assignedto: userData[7].userName,
  },
];
