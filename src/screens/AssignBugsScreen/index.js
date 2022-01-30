import React, {useState} from 'react';
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
import {assign_bug_store} from '../../mobx/assign_bug_store';
import {observer} from 'mobx-react';
import {useToast} from 'react-native-toast-notifications';
import {Picker} from '@react-native-picker/picker';
import * as constants from '../../utils/constants';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const AssignBugsScreen = observer(({navigation}) => {
  const toast = useToast();
  const [picker1Focused, setPicker1Focused] = useState(false);
  assign_bug_store.setAssignPerson('');
  assign_bug_store.setPriority('');
  assign_bug_store.setTag('');
  assign_bug_store.setDeadline(new Date());

  const onSubmit = () => {
    if (
      assign_bug_store.getAssignPerson.trim() === '' ||
      assign_bug_store.getPriority.trim() === '' ||
      assign_bug_store.getTag.trim() === 0 ||
      assign_bug_store.getDeadline === new Date()
    ) {
      toast.show('Fill all the fields', {
        type: 'warning',
        placement: 'top',
        animationType: 'slide-in',
      });
      return;
    }
    console.log('Pressed');
    navigation.goBack();
  };
  const onChangeDate = newDate => {
    var deadline = newDate || assign_bug_store.getDeadline;
    assign_bug_store.setDeadline(deadline);
    assign_bug_store.setDatepicker(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}} keyboardShouldPersistTaps="always">
        <View style={styles.headerTextContainer}>
          <Text style={styles.loginText}>Assign A Bug</Text>
        </View>
        <View>
          <View style={styles.textInput}>
            <TextInput
              label="Assign Person"
              placeholder="Assign Person"
              mode="outlined"
              value={assign_bug_store.getAssignPerson}
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
              selectionColor={'white'}
              placeholderTextColor={colors.darkGrey}
              onChangeText={val => {
                assign_bug_store.setAssignPerson(val);
              }}
              multiline={true}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              autoCorrect={false}
              label="Enter Tag"
              placeholder="Enter Tag"
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
              selectionColor="white"
              placeholderTextColor={colors.darkGrey}
              value={assign_bug_store.getTag}
              onChangeText={val => {
                assign_bug_store.setTag(val);
              }}
              multiline={true}
            />
          </View>
          <View style={styles.pickerInput}>
            <Picker
              selectedValue={assign_bug_store.getPriority}
              onValueChange={(itemValue, itemIndex) =>
                assign_bug_store.setPriority(itemValue)
              }
              onFocus={() => setPicker1Focused(true)}
              onBlur={() => setPicker1Focused(false)}>
              <Picker.Item
                label="Select Priority"
                enabled={!picker1Focused}
                color={colors.Black}
                style={{fontSize: scale(16)}}
              />
              <Picker.Item
                label="Low"
                value={constants.lowPriority}
                color={colors.Black}
                style={{fontSize: scale(16)}}
              />
              <Picker.Item
                label="Medium"
                value={constants.mediumPriority}
                color={colors.Black}
                style={{fontSize: scale(16)}}
              />
              <Picker.Item
                label="High"
                value={constants.highPriority}
                color={colors.Black}
                style={{fontSize: scale(16)}}
              />
            </Picker>
          </View>

          <TouchableOpacity
            style={styles.viewScale}
            onPress={() => assign_bug_store.setDatepicker(true)}>
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              autoCorrect={false}
              autoComplete={'off'}
              autoCapitalize="none"
              style={{
                backgroundColor: colors.Grey,
                fontSize: scale(16),
                color: colors.Black,
              }}
              theme={{
                colors: {
                  primary: colors.Black,
                },
              }}
              selectionColor={colors.White}>
              Deadline : {assign_bug_store.getDeadline.toDateString()}
            </TextInput>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.submitBtnView}
            onPress={() => {
              onSubmit();
            }}>
            <Icon name="chevron-right" size={scale(30)} color={colors.White} />
          </TouchableOpacity>
        </View>
        <DateTimePickerModal
          isVisible={assign_bug_store.getDatepicker}
          date={assign_bug_store.getDeadline}
          mode="date"
          minimumDate={new Date(new Date().getTime() + 1 * 86400000)}
          onConfirm={onChangeDate}
          onCancel={() => assign_bug_store.setDatepicker(false)}
        />
      </ScrollView>
    </SafeAreaView>
  );
});

export default AssignBugsScreen;

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
  viewScale: {
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
