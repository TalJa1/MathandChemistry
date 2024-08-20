/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {containerStyle} from '../../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';

const KeepInTouch = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>KeepInTouch</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default KeepInTouch;

const styles = StyleSheet.create({
  container: containerStyle,
});
