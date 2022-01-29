import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainMenu from '../../screens/MainMenu';

const RootStack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <RootStack.Navigator independent={true}>
        <RootStack.Screen
          name="MainMenu"
          component={MainMenu}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
