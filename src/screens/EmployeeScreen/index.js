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
import LottieView from 'lottie-react-native';
import findingBugLottie from '../../assets/lottieFiles/FindingBugs.json';
import ListLottie from '../../assets/lottieFiles/List.json';
import TeamLottie from '../../assets/lottieFiles/Team.json';
import AssignBugsLottie from '../../assets/lottieFiles/AssignBugs.json';
import {auth_store} from '../../mobx/auth_store';

const EmployeeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.menuText}>Menu</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            auth_store.logOut();
          }}
          style={styles.headerTextContainer3}>
          <Text style={styles.menuText3}>Logout</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={styles.headerTextContainer2}>
          <Text style={styles.detailsText}>
            User : {user_store.getUserName}
          </Text>
          <Text style={styles.detailsText}>
            Position : {user_store.getUserType}
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardRow}>
            <TouchableOpacity
              style={styles.cardLeft}
              onPress={() => {
                navigation.push('AllBugsScreen');
              }}>
              <LottieView
                style={styles.lottie1}
                source={ListLottie}
                speed={0.99}
                resizeMode="cover"
                autoPlay
                loop
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <Text style={styles.cardText}>VIEW ALL BUGS</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardRight}
              onPress={() => {
                navigation.push('AssignedBugsScreen');
              }}>
              <LottieView
                style={styles.lottie2}
                source={AssignBugsLottie}
                speed={0.99}
                resizeMode="cover"
                autoPlay
                loop
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <Text style={styles.cardText}>ASSIGNED BUGS</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.cardRow}>
            <TouchableOpacity
              style={styles.cardLeft}
              onPress={() => {
                navigation.push('RaiseBugScreen');
              }}>
              <LottieView
                style={styles.lottie3}
                source={findingBugLottie}
                speed={0.99}
                resizeMode="cover"
                autoPlay
                loop
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <Text style={styles.cardText}>REPORT A BUG</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardRight}
              onPress={() => {
                navigation.push('UserRolesScreen');
              }}>
              <LottieView
                style={styles.lottie4}
                source={TeamLottie}
                speed={0.99}
                resizeMode="cover"
                autoPlay
                loop
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <Text style={styles.cardText}>USER ROLES</Text>
              </View>
            </TouchableOpacity>
          </View>
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
    marginBottom: verticalScale(10),
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
  headerTextContainer3: {
    backgroundColor: colors.Turquiose,
    marginTop: verticalScale(30),
    marginBottom: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(20),
    alignSelf: 'flex-start',
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10),
    borderRadius: scale(30),
  },
  menuText3: {
    fontSize: scale(10),
    fontWeight: 'bold',
    color: colors.White,
  },
  headerTextContainer2: {
    backgroundColor: colors.Grey,
    marginBottom: verticalScale(20),
    marginHorizontal: scale(20),
    paddingHorizontal: scale(20),
    alignSelf: 'flex-start',
    borderRadius: scale(30),
    paddingVertical: verticalScale(5),
  },
  detailsText: {
    fontSize: scale(18),
    color: colors.Black,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: colors.Grey,
    borderRadius: scale(30),
    marginHorizontal: scale(15),
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: verticalScale(20),
    paddingHorizontal: scale(20),
  },
  cardRow: {
    flexDirection: 'row',
  },
  cardLeft: {
    marginBottom: verticalScale(20),
    width: scale(140),
    backgroundColor: colors.Turquiose,
    borderRadius: scale(30),
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(15),
    marginRight: scale(10),
  },
  cardRight: {
    marginBottom: verticalScale(20),
    width: scale(140),
    backgroundColor: colors.Turquiose,
    borderRadius: scale(30),
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(15),
  },
  lottie1: {
    width: scale(130),
  },
  lottie2: {
    width: scale(125),
  },
  lottie3: {
    width: scale(120),
  },
  lottie4: {
    width: scale(130),
  },
  cardText: {
    marginTop: verticalScale(10),
    fontSize: scale(16),
    fontWeight: 'bold',
    color: colors.White,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default EmployeeScreen;
