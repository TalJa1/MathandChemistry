/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {containerStyle} from '../../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../../services/useStatusBarCustom';

const GroupCreation = () => {
  useStatusBar('black');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>GroupCreation</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GroupCreation;

const styles = StyleSheet.create({
  container: containerStyle,
});
