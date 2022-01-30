import React from 'react';
import {View, Text} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import * as colors from '../../utils/colors';

const BugCard = props => {
  const data = props.data;
  const bugName = data.bugTitle;
  const bugDesc = data.bugDesc;
  const bugStatus = data.bugStatus;
  return (
    <View style={styles.cardcontainer}>
      <View
        style={{
          width: scale(6),
          backgroundColor: colors.Turquiose,
          borderRadius: scale(5),
        }}
      />
      <View style={styles.buginfo}>
        <Text style={styles.bugName} numberOfLines={1}>
          {bugName}
        </Text>
        <Text style={styles.bugDesc}>{bugDesc}</Text>
        <Text style={styles.bugStatus} numberOfLines={1}>
          Status: {bugStatus}
        </Text>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  cardcontainer: {
    flexDirection: 'row',
    borderColor: colors.Black,
    borderWidth: '1@s',
    borderRadius: '5@s',
    marginTop: '5@vs',
    padding: '5@s',
    marginHorizontal: '10@s',
    backgroundColor: colors.Grey,
  },
  buginfo: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
    marginLeft: '5@s',
  },
  bugName: {
    fontSize: '16@s',
    fontWeight: 'bold',
    color: colors.Black,
  },
  bugDesc: {
    fontSize: '14@s',
    color: colors.Black,
  },
  bugStatus: {
    fontSize: '14@s',
    color: colors.darkGrey,
  },
});

export default BugCard;
