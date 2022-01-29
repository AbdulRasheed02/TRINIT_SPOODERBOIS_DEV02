import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as colors from '../../utils/colors';
import {auth_store} from '../../mobx/auth_store';
const LoginScreen = navigation => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState();

  const onLogin = () => {
    auth_store.logIn(123);
    console.log('Ab');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}} keyboardShouldPersistTaps="always">
        <View style={styles.headerTextContainer}>
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View style={{marginBottom: 55}}>
          <View style={styles.textInput}>
            <TextInput
              label="Username"
              placeholder="Enter your username"
              mode="outlined"
              value={user}
              autoCapitalize="none"
              style={{backgroundColor: colors.Grey, fontSize: 18}}
              theme={{
                colors: {
                  primary: 'black',
                },
              }}
              selectionColor={'black'}
              onChangeText={user => {
                setUser(user);
              }}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              autoCorrect={false}
              label="Password"
              placeholder="Enter your password"
              style={{backgroundColor: colors.Grey, fontSize: 18}}
              mode="outlined"
              autoComplete={'off'}
              autoCapitalize="none"
              secureTextEntry={true}
              theme={{
                colors: {
                  primary: 'black',
                },
              }}
              selectionColor={'black'}
              value={password}
              onChangeText={password => setPassword(password)}
            />
          </View>
          <TouchableOpacity
            style={styles.loginBtnView}
            onPress={() => {
              onLogin(user);
            }}>
            <Text style={{color: colors.White}}>Icon</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.appInfoContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/images/loginScreenLogo.png')}
        />
        <Text style={styles.appInfoText}>Welcome to Bug Tracker</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 40,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  loginText: {
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15,
    alignContent: 'flex-start',
  },
  textInput: {
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 30,
    backgroundColor: colors.Grey,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  loginBtnView: {
    marginTop: 10,
    marginHorizontal: 20,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.Turquiose,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  appInfoContainer: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: -100,
    marginBottom: 20,
    height: 250,
    width: 250,
    backgroundColor: colors.White,
  },
  appInfoText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.Black,
  },
});

export default LoginScreen;
