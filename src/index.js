import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './screens/loginScreen';
import MainMenu from './screens/MainMenu';

import {auth_store} from './mobx/auth_store';
import {observer} from 'mobx-react';

const RootStack = createNativeStackNavigator();
const index = observer(() => {
  return (
    <NavigationContainer independent={true}>
      <RootStack.Navigator independent={true}>
        {
          // ) : (token && name && rollNo && department) ? (
          auth_store.isUserLoggedIn ? ( //we're getting only token as of now
            <>
              <RootStack.Screen name="App" component={MainMenu} />
            </>
          ) : (
            <>
              <RootStack.Screen name="Auth" component={LoginScreen} />
            </>
          )
        }
      </RootStack.Navigator>
    </NavigationContainer>
  );
});

export default index;
