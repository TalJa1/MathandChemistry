/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle} from '../../../services/styleSheets';
import useStatusBar from '../../../services/useStatusBarCustom';
import {useRoute} from '@react-navigation/native';
import {DataDetail} from '../../../services/typeProps';

const Result = () => {
  useStatusBar('black');
  const route = useRoute();
  const {time, timeLeft, isMath, title, data, listAnswer} = route.params as {
    time: number;
    timeLeft: number;
    isMath: boolean;
    title: string;
    data: DataDetail;
    listAnswer: string[];
  };
  console.log('result', time, timeLeft, isMath, title, data, listAnswer);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Result</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: containerStyle,
});
