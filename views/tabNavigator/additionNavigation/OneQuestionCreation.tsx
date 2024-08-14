/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle} from '../../../services/styleSheets';

const OneQuestionCreation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>OneQuestionCreation</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OneQuestionCreation;

const styles = StyleSheet.create({
  container: containerStyle,
});
