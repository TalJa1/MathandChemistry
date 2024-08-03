/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {centerAll, vh, vw} from '../services/styleSheets';
import {SwitchButtonProps} from '../services/typeProps';

const SwitchTabComponent: React.FC<SwitchButtonProps> = ({
  isMath,
  setIsMath,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: vh(1),
      }}>
      <TouchableOpacity
        onPress={() => setIsMath(true)}
        style={[
          styles.subjectBox,
          centerAll,
          isMath ? {backgroundColor: '#D2FD7C'} : {},
        ]}>
        <Text
          style={[
            {color: '#7C7C7C', fontWeight: '500'},
            isMath ? {color: '#090A0A'} : {},
          ]}>
          Toán
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIsMath(false)}
        style={[
          styles.subjectBox,
          centerAll,
          isMath ? {} : {backgroundColor: '#D2FD7C'},
        ]}>
        <Text
          style={[
            {color: '#7C7C7C', fontWeight: '500'},
            isMath ? {} : {color: '#090A0A'},
          ]}>
          Hóa
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SwitchTabComponent;

const styles = StyleSheet.create({
  subjectBox: {
    height: 56,
    width: '45%',
    borderRadius: vw(15),
  },
});
