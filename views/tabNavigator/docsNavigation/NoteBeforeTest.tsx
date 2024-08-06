/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../../services/useStatusBarCustom';
import {useRoute} from '@react-navigation/native';

const NoteBeforeTest = () => {
  useStatusBar('#A3A3F2');
  const route = useRoute();
  const {title, time} = route.params as {title: string; time: number};
  console.log(title, time);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>NoteBeforeTest</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NoteBeforeTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
