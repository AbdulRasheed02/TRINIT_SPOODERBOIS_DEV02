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
import {scale, verticalScale} from 'react-native-size-matters';

const LoginScreen = navigation => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState();
  const [pickerFocused, setPickerFocused] = useState(false);

  const onLogin = () => {
    auth_store.logIn(123);
    //Change location to after successful API Call later
    user_store.setUserType(userType);
    console.log('User Type: ' + userType);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}} keyboardShouldPersistTaps="always">
        <View style={styles.headerTextContainer}>
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View style={{marginBottom: verticalScale(55)}}>
          <View style={styles.textInput}>
            <TextInput
              label="Username"
              placeholder="Enter your username"
              mode="outlined"
              value={userName}
              autoCapitalize="none"
              style={{
                backgroundColor: colors.Grey,
                fontSize: scale(16),
                color: colors.Black,
              }}
              theme={{
                colors: {
                  primary: 'black',
                },
              }}
              selectionColor={'black'}
              placeholderTextColor={colors.darkGrey}
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
              style={{
                backgroundColor: colors.Grey,
                fontSize: scale(16),
                color: colors.Black,
              }}
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
              placeholderTextColor={colors.darkGrey}
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
              <Picker.Item
                label="Select User Type"
                enabled={!pickerFocused}
                color={colors.Black}
              />
              <Picker.Item
                label="User"
                value={userTypes.user}
                color={colors.Black}
              />
              <Picker.Item
                label="Team Leader"
                value={userTypes.teamLeader}
                color={colors.Black}
              />
              <Picker.Item
                label="Manager"
                value={userTypes.manager}
                color={colors.Black}
              />
              <Picker.Item
                label="Employee"
                value={userTypes.employee}
                color={colors.Black}
              />
            </Picker>
          </View>
          <TouchableOpacity
            style={styles.loginBtnView}
            onPress={() => {
              onLogin();
            }}>
            <Icon name="chevron-right" size={scale(30)} color={colors.White} />
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
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
    justifyContent: 'space-between',
  },
  loginText: {
    padding: scale(10),
    fontSize: scale(25),
    fontWeight: 'bold',
    color: 'black',
    marginLeft: scale(15),
    alignContent: 'flex-start',
  },
  textInput: {
    marginHorizontal: scale(20),
    marginBottom: verticalScale(8),
    borderRadius: scale(30),
    backgroundColor: colors.Grey,
    paddingLeft: scale(30),
    paddingRight: scale(15),
    paddingVertical: verticalScale(6),
  },
  pickerInput: {
    marginHorizontal: scale(20),
    marginBottom: verticalScale(10),
    borderRadius: scale(30),
    backgroundColor: colors.Grey,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(0),
  },
  loginBtnView: {
    marginTop: verticalScale(5),
    marginHorizontal: scale(20),
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.Turquiose,
    borderRadius: scale(30),
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10),
  },
  appInfoContainer: {
    marginTop: verticalScale(-10),
    paddingHorizontal: scale(40),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: verticalScale(20),
    height: scale(200),
    width: scale(200),
    backgroundColor: colors.White,
  },
  appInfoText: {
    fontSize: scale(25),
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.Black,
  },
});

export default LoginScreen;
