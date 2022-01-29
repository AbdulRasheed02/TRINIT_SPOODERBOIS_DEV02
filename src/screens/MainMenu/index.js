import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {user_store} from '../../mobx/user_store';
import UserScreen from '../userScreen';
import ManagementScreen from '../managementScreen';

const MainMenu = () => {
  return (
    <View>
      <Text style={{color: 'black'}}>MAIN MENU</Text>
    </View>
  );
};

export default MainMenu;

const styles = StyleSheet.create({});
