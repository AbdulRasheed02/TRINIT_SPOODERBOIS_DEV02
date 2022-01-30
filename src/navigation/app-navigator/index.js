import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {user_store} from '../../mobx/user_store';
import UserScreen from '../../screens/UserScreen';
import TeamLeaderScreen from '../../screens/TeamLeaderScreen';
import * as userTypes from '../../utils/userType';
import RaiseBug from '../../screens/RaiseBugScreen';
import ResolvedBugsScreen from '../../screens/ResolvedBugsScreen';
import AllBugsScreen from '../../screens/AllBugsScreen';
import AssignBugsScreen from '../../screens/AssignBugsScreen';
import EmployeeScreen from '../../screens/EmployeeScreen';
import ManagerScreen from '../../screens/ManagerScreen';
import UserRolesScreen from '../../screens/UserRolesScreen';

const RootStack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <RootStack.Navigator independent={true}>
        {user_store.getUserType === userTypes.user ? (
          <RootStack.Screen
            name="UserScreen"
            component={UserScreen}
            options={{
              headerShown: false,
            }}
          />
        ) : user_store.getUserType === userTypes.teamLeader ? (
          <RootStack.Screen
            name="TeamLeaderScreen"
            component={TeamLeaderScreen}
            options={{
              headerShown: false,
            }}
          />
        ) : user_store.getUserType === userTypes.manager ? (
          <RootStack.Screen
            name="ManagerScreen"
            component={ManagerScreen}
            options={{
              headerShown: false,
            }}
          />
        ) : user_store.getUserType === userTypes.employee ? (
          <RootStack.Screen
            name="EmployeeScreen"
            component={EmployeeScreen}
            options={{
              headerShown: false,
            }}
          />
        ) : null}
        <RootStack.Screen
          name="RaiseBugScreen"
          component={RaiseBug}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="ResolvedBugScreen"
          component={ResolvedBugsScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="AllBugsScreen"
          component={AllBugsScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="AssignBugsScreen"
          component={AssignBugsScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="UserRolesScreen"
          component={UserRolesScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
