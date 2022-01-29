import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import * as colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {scale, verticalScale} from 'react-native-size-matters';
import {bug_creation_store} from '../../mobx/bug_creation_store';
import {observer} from 'mobx-react';

const RaiseBug = observer(() => {
  console.log('WRITE');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}} keyboardShouldPersistTaps="always">
        <View style={styles.headerTextContainer}>
          <Text style={styles.loginText}>Report a Bug</Text>
        </View>
        <View>
          <View style={styles.textInput}>
            <TextInput
              label="Title"
              placeholder="Enter Title"
              mode="outlined"
              value={bug_creation_store.getBugTilte}
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
              onChangeText={val => {
                bug_creation_store.setBugTitle(val);
              }}
              multiline={true}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              autoCorrect={false}
              label="Description"
              placeholder="Describe the bug"
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
              value={bug_creation_store.getBugDesc}
              onChangeText={val => {
                bug_creation_store.setBugDesc(val);
              }}
              multiline={true}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              autoCorrect={false}
              label="Link"
              placeholder="Enter a link to media files"
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
              value={bug_creation_store.getBugLink}
              onChangeText={val => {
                bug_creation_store.setBugLink(val);
              }}
              multiline={true}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              autoCorrect={false}
              label="Device Details"
              placeholder="Enter details about device"
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
              value={bug_creation_store.getBugUserDevice}
              onChangeText={val => {
                bug_creation_store.setBugUserDevice(val);
              }}
              multiline={true}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              autoCorrect={false}
              label="Replication Details"
              placeholder="Explain briefly how to replicate the bug"
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
              value={bug_creation_store.getBugReplication}
              onChangeText={val => {
                bug_creation_store.setBugReplication(val);
              }}
              multiline={true}
            />
          </View>
          <TouchableOpacity
            style={styles.submitBtnView}
            onPress={() => {
              //onLogin();
            }}>
            <Icon name="chevron-right" size={scale(30)} color={colors.White} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default RaiseBug;

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

  submitBtnView: {
    marginTop: verticalScale(5),
    marginHorizontal: scale(20),
    alignSelf: 'flex-end',

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
