import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import * as colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {scale, verticalScale} from 'react-native-size-matters';
import {observer} from 'mobx-react';
import * as constants from '../../utils/constants';
import UserCard from '../../components/userCard';
import {allBugsData, userData} from '../../utils/database';

const UserRolesScreen = () => {
  const data = userData;

  const Item = ({item}) => (
    <TouchableOpacity onPress={() => null} activeOpacity={0.5}>
      <UserCard data={item} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.loginText}>User Roles</Text>
      </View>
      <FlatList
        renderItem={Item}
        showsVerticalScrollIndicator={false}
        data={data}
        ItemSeparatorComponent={() => (
          <View style={{height: verticalScale(1.5)}} />
        )}
      />
    </SafeAreaView>
  );
};

export default UserRolesScreen;

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
});
