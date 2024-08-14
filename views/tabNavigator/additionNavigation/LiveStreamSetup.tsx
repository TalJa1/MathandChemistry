/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle} from '../../../services/styleSheets';

const LiveStreamSetup = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>LiveStreamSetup</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LiveStreamSetup;

const styles = StyleSheet.create({
  container: containerStyle,
});
