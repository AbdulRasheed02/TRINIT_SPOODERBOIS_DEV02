import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainMenu from '../../screens/MainMenu';
import {user_store} from '../../mobx/user_store';
import UserScreen from '../../screens/UserScreen';
import ManagementScreen from '../../screens/ManagementScreen';
import * as userTypes from '../../utils/userType';

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
        ) : (
          <RootStack.Screen
            name="ManagementScreen"
            component={ManagementScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
