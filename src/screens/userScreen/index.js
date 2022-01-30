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
import bugFindingLottie from '../../assets/lottieFiles/FindingBugs.json';
import LottieView from 'lottie-react-native';
import resolvedBugLottie from '../../assets/lottieFiles/ResolvedBugs.json';

const UserScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.menuText}>Menu</Text>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={styles.headerTextContainer2}>
          <Text style={styles.welcomeText}>
            Welcome Back {user_store.getUserName} !
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.push('RaiseBugScreen');
            }}>
            <LottieView
              style={styles.lottie1}
              source={bugFindingLottie}
              speed={0.99}
              resizeMode="cover"
              autoPlay
              loop
            />
            <Text style={styles.cardText}>REPORT A BUG!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.push('ResolvedBugScreen');
            }}>
            <LottieView
              style={styles.lottie2}
              source={resolvedBugLottie}
              speed={0.99}
              resizeMode="cover"
              autoPlay
              loop
            />
            <Text style={styles.cardText}>CHECK RESOLVED BUGS!</Text>
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
    backgroundColor: colors.Turquiose,
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(20),
    alignSelf: 'flex-start',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
    borderRadius: scale(30),
  },
  menuText: {
    fontSize: scale(25),
    fontWeight: 'bold',
    color: colors.White,
  },
  headerTextContainer2: {
    marginBottom: verticalScale(20),
    marginHorizontal: scale(20),
    alignSelf: 'center',
  },
  welcomeText: {
    fontSize: scale(20),
    color: 'black',
    textAlign: 'center',
  },
  cardContainer: {
    flex: 1,
    backgroundColor: colors.Grey,
    borderRadius: scale(30),
    marginHorizontal: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: verticalScale(20),
  },
  card: {
    marginBottom: verticalScale(20),
    width: scale(220),
    backgroundColor: colors.Turquiose,
    borderRadius: scale(30),
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie1: {
    width: scale(160),
  },
  lottie2: {
    width: scale(160),
  },
  cardText: {
    marginTop: verticalScale(10),
    fontSize: scale(20),
    fontWeight: 'bold',
    color: colors.White,
    textAlign: 'center',
  },
});

export default UserScreen;
