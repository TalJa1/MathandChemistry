/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle} from '../../../services/styleSheets';
import useStatusBar from '../../../services/useStatusBarCustom';

const LiveStream = () => {
  useStatusBar('black');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>LiveStream</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LiveStream;

const styles = StyleSheet.create({
  container: containerStyle,
});
