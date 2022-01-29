import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as colors from '../../utils/colors';

const LoginScreen = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always">
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
              //onLogin(user);
            }}>
            <Text>Icon</Text>
          </TouchableOpacity>
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
    marginTop: 40,
    marginBottom: 20,
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
    marginBottom: 10,
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
});

export default LoginScreen;
