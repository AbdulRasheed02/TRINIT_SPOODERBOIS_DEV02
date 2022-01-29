import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import * as colors from '../../utils/colors';
import {auth_store} from '../../mobx/auth_store';
import {user_store} from '../../mobx/user_store';
import {Picker} from '@react-native-picker/picker';
import * as userTypes from '../../utils/userType';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = navigation => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState();
  const [pickerFocused, setPickerFocused] = useState(false);

  const onLogin = () => {
    auth_store.logIn(123);
    //Change to after successful API Call later
    user_store.setUserType(userType);
    console.log('User Type: ' + userType);
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
              value={userName}
              autoCapitalize="none"
              style={{backgroundColor: colors.Grey, fontSize: 18}}
              theme={{
                colors: {
                  primary: 'black',
                },
              }}
              selectionColor={'black'}
              onChangeText={user => {
                setUserName(user);
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
          <View style={styles.pickerInput}>
            <Picker
              selectedValue={userType}
              onValueChange={(itemValue, itemIndex) => setUserType(itemValue)}
              onFocus={() => setPickerFocused(true)}
              onBlur={() => setPickerFocused(false)}>
              <Picker.Item label="Select User Type" enabled={!pickerFocused} />
              <Picker.Item label="User" value={userTypes.user} />
              <Picker.Item label="Team Leader" value={userTypes.teamLeader} />
              <Picker.Item label="Manager" value={userTypes.manager} />
              <Picker.Item label="Employee" value={userTypes.employee} />
            </Picker>
          </View>
          <TouchableOpacity
            style={styles.loginBtnView}
            onPress={() => {
              onLogin();
            }}>
            <Icon name="chevron-left" size={25} color={colors.White} />
          </TouchableOpacity>
        </View>
        <View style={styles.appInfoContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../../assets/images/loginScreenLogo.png')}
          />
          <Text style={styles.appInfoText}>Welcome to Bug Tracker</Text>
        </View>
      </ScrollView>
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
    marginTop: 20,
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
  pickerInput: {
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 30,
    backgroundColor: colors.Grey,
    paddingHorizontal: 20,
    paddingVertical: 0,
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
    paddingVertical: 10,
  },
  appInfoContainer: {
    marginTop: 20,
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: 20,
    height: 225,
    width: 225,
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
