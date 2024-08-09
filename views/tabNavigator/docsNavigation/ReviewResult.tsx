/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle} from '../../../services/styleSheets';
import useStatusBar from '../../../services/useStatusBarCustom';
import {useRoute} from '@react-navigation/native';
import {DataDetail} from '../../../services/typeProps';

const ReviewResult = () => {
  useStatusBar('black');
  const route = useRoute();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {data, userAnswer} = route.params as {
    data: DataDetail;
    userAnswer: string[];
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>ReviewResult</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewResult;

const styles = StyleSheet.create({
  container: containerStyle,
});
