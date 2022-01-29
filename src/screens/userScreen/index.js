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
import {user_store} from '../../mobx/user_store';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {scale, verticalScale} from 'react-native-size-matters';
import bugFindingLottie from '../../assets/lottieFiles/BugFinding.json';
import LottieView from 'lottie-react-native';

const UserScreen = () => {
  return (
    <View>
      <LottieView
        style={styles.lottie}
        source={bugFindingLottie}
        speed={0.99}
        resizeMode="contain"
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: {
    marginBottom: verticalScale(20),
    height: scale(200),
    width: scale(200),
  },
});

export default UserScreen;
