/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {centerAll, textTitle, vh, vw} from '../../services/styleSheets';
import {TextInputComponentProps} from '../../services/typeProps';

const SignUpPage = () => {
  useStatusBar('black');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.loginGrp}>
          <Image source={require('../../assets/login/StarGrp.png')} />
          <View
            style={{
              alignItems: 'center',
              width: '100%',
              rowGap: vh(1),
              marginVertical: vh(2),
            }}>
            <Text style={textTitle}>Tạo tài khoản</Text>
            <View style={{width: '100%'}}>
              <TextInputComponent
                placeholder="Địa chỉ Email"
                secureTextEntry={false}
                isEmail={true}
              />
              <TextInputComponent
                placeholder="Mật khẩu"
                secureTextEntry={true}
                isEmail={false}
              />
              <TextInputComponent
                placeholder="Xác nhận mật khẩu"
                secureTextEntry={true}
                isEmail={false}
              />
            </View>
            <TouchableOpacity
              style={[
                {
                  backgroundColor: '#0D0D0D',
                  borderRadius: 10,
                  width: '100%',
                  height: 56,
                  marginVertical: vh(2),
                },
                centerAll,
              ]}>
              <Text style={{fontSize: 16, color: '#D2FD7C'}}>
                Tạo tài khoản
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}>
              <Text style={{color: '#0D0D0D'}}>
                Đồng ý khi sử dựng ứng dụng với{' '}
              </Text>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{
                    color: '#0D0D0D',
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                  }}>
                  Điều khoản và Điều kiện của chúng tôi
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  placeholder,
  secureTextEntry,
  isEmail,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={isEmail ? 'email-address' : 'default'}
      />
    </View>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: vh(5),
  },
  loginGrp: {
    flex: 1,
    backgroundColor: '#D2FD7C',
    borderRadius: 32,
    width: vw(90),
    alignItems: 'center',
    paddingVertical: vh(2),
    paddingHorizontal: vw(2),
  },
  inputContainer: {
    width: '100%',
    marginVertical: vh(1),
  },
  input: {
    height: 60,
    borderColor: '#A7A7A7',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#1B1B1B',
  },
});
