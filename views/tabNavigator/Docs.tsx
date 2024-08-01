/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';

const Docs = () => {
  useStatusBar('black');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Docs</Text>
      </View>
    </SafeAreaView>
  );
};

export default Docs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
