/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {containerStyle} from '../../../services/styleSheets';
import useStatusBar from '../../../services/useStatusBarCustom';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';

const Chat = () => {
  useStatusBar('black');
  const route = useRoute();
  const {index} = route.params as {index: number};
  console.log(index);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Chat</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: containerStyle,
});
