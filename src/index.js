import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {auth_store} from './mobx/auth_store';
import {observer} from 'mobx-react';
import {Provider} from 'react-native-paper';
import AppNavigator from './navigation/app-navigator';
import LoginScreen from './screens/LoginScreen';

const RootStack = createNativeStackNavigator();
const index = observer(() => {
  return (
    <Provider>
      <NavigationContainer independent={true}>
        <RootStack.Navigator independent={true}>
          {
            // ) : (token && name && rollNo && department) ? (
            auth_store.isUserLoggedIn ? ( //we're getting only token as of now
              <>
                <RootStack.Screen
                  name="App"
                  component={AppNavigator}
                  options={{
                    headerShown: false,
                  }}
                />
              </>
            ) : (
              <>
                <RootStack.Screen
                  name="Auth"
                  component={LoginScreen}
                  options={{
                    headerShown: false,
                  }}
                />
              </>
            )
          }
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
});

export default index;
