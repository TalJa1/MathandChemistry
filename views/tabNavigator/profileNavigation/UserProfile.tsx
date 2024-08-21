/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {containerStyle} from '../../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../../services/useStatusBarCustom';
import {useRoute} from '@react-navigation/native';
import {LoginAccountProps} from '../../../services/typeProps';

const UserProfile = () => {
  useStatusBar('black');
  const route = useRoute();
  const {user} = route.params as {user: LoginAccountProps};
  console.log('user', user);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>UserProfile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: containerStyle,
});
