/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle} from '../../../services/styleSheets';
import useStatusBar from '../../../services/useStatusBarCustom';
import {useRoute} from '@react-navigation/native';
import {FormDataProps} from '../../../services/typeProps';

const QuestionCreation = () => {
  useStatusBar('black');
  const route = useRoute();
  const {data} = route.params as {data: FormDataProps};

  console.log('data', data);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>QuestionCreation</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuestionCreation;

const styles = StyleSheet.create({
  container: containerStyle,
});
