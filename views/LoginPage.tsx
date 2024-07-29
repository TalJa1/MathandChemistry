/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBarCustom from '../services/useStatusBarCustom';
import {textSubTitle, textTitle, vh, vw} from '../services/styleSheets';
import {LoginButtonTypeProps} from '../services/typeProps';

const LoginPage: React.FC = () => {
  useStatusBarCustom('black');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginGrp}>
        <Image source={require('../assets/login/StarGrp.png')} />
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            rowGap: vh(1),
            marginVertical: vh(2),
          }}>
          <Text style={textTitle}>Khám phá ứng dụng</Text>
          <Text style={[textSubTitle, {textAlign: 'center'}]}>
            Bạn có thể tạo tài khoản mới bằng các liên kết dưới đây:
          </Text>
        </View>
        <View style={{width: '100%', marginVertical: vh(2), rowGap: vh(1)}}>
          <LoginTypeButton
            image={require('../assets/login/Google.png')}
            title="Google"
          />
          <LoginTypeButton
            image={require('../assets/login/Apple.png')}
            title="Apple"
          />
          <LoginTypeButton
            image={require('../assets/login/Mail.png')}
            title="Email"
          />
        </View>
      </View>
      <TouchableOpacity>
        <Text style={[textSubTitle, {textAlign: 'center', color: '#7C7C7C'}]}>
          Đã có sẵn tài khoản? <Text style={{color: '#F7F9FA'}}>Đăng nhập</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const LoginTypeButton: React.FC<LoginButtonTypeProps> = ({image, title}) => {
  return (
    <TouchableOpacity style={styles.loginBtn}>
      <Image
        style={{width: vw(5), height: vw(5), resizeMode: 'contain'}}
        source={image}
      />
      <Text style={{color: '#A7A7A7', fontSize: 18}}>Tiếp tục với {title}</Text>
    </TouchableOpacity>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: vh(4),
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
  loginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: vw(4),
    backgroundColor: '#1B1B1B',
    width: '100%',
    padding: vw(4),
    borderRadius: 30,
  },
});
