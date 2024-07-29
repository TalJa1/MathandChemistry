/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBarCustom from '../services/useStatusBarCustom';
import {textSubTitle, textTitle, vh, vw} from '../services/styleSheets';

const LoginPage: React.FC = () => {
  useStatusBarCustom('black');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginGrp}>
        <Image source={require('../assets/login/StarGrp.png')} />
        <Text style={textTitle}>Khám phá ứng dụng</Text>
        <Text style={[textSubTitle, {textAlign: 'center'}]}>
          Bạn có thể tạo tài khoản mới bằng các liên kết dưới đây:
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImg: {
    width: vw(30),
    height: vw(30),
    resizeMode: 'contain',
  },
  loginGrp: {
    backgroundColor: '#D2FD7C',
    borderRadius: 32,
    width: vw(90),
    alignItems: 'center',
    paddingVertical: vh(2),
    paddingHorizontal: vw(2),
  },
});
