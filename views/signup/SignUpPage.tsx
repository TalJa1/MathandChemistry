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
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {centerAll, textTitle, vh, vw} from '../../services/styleSheets';
import {
  LoginAccountProps,
  TextInputComponentProps,
} from '../../services/typeProps';
import {loadData, saveData} from '../../services/storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {loginAccountStorage} from '../../data/rootStorage';

const SignUpPage = () => {
  useStatusBar('black');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [signUpAccount, setSignUpAccount] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [finish, setFinish] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  useEffect(() => {
    const {email, password, confirmPassword} = signUpAccount;
    let emailValid = true;
    let passwordValid = true;
    let confirmPasswordValid = true;

    if (!validateEmail(email) && email.length > 0) {
      setEmailError('Email không hợp lệ');
      emailValid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 8 && password.length > 0) {
      setPasswordError('Mật khẩu phải dài hơn 7 ký tự');
      passwordValid = false;
    } else {
      setPasswordError('');
    }

    if (confirmPassword !== password && confirmPassword.length > 0) {
      setConfirmPasswordError('Mật khẩu xác nhận không khớp');
      confirmPasswordValid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (emailValid && passwordValid && confirmPasswordValid) {
      setFinish(true);
    } else {
      setFinish(false);
    }
  }, [signUpAccount]);

  const handleSignUp = async () => {
    if (finish) {
      try {
        const tmp: LoginAccountProps[] = await loadData(loginAccountStorage);
        const newAcc = {
          email: signUpAccount.email,
          password: signUpAccount.password,
          role: '',
          accInfor: {
            language: '',
            who: '',
            class: 11,
            ability: {
              math: 50,
              chemistry: 50,
            },
            goal: [],
            difficulty: {
              math: [],
              chemistry: [],
            },
            infor: {
              name: '',
              school: '',
              city: '',
              image: [],
            },
          },
        };
        tmp.push(newAcc);
        saveData(loginAccountStorage, tmp);
        navigation.navigate('Login');
      } catch (error) {
        console.log(error);
      }
      // Additional logic after saving data can be added here
    }
  };

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
                value={signUpAccount.email}
                onChangeText={text =>
                  setSignUpAccount({...signUpAccount, email: text})
                }
              />
              {emailError ? (
                <Text style={styles.errorText}>{emailError}</Text>
              ) : null}
              <TextInputComponent
                placeholder="Mật khẩu"
                secureTextEntry={true}
                isEmail={false}
                value={signUpAccount.password}
                onChangeText={text =>
                  setSignUpAccount({...signUpAccount, password: text})
                }
              />
              {passwordError ? (
                <Text style={styles.errorText}>{passwordError}</Text>
              ) : null}
              <TextInputComponent
                placeholder="Xác nhận mật khẩu"
                secureTextEntry={true}
                isEmail={false}
                value={signUpAccount.confirmPassword}
                onChangeText={text =>
                  setSignUpAccount({...signUpAccount, confirmPassword: text})
                }
              />
              {confirmPasswordError ? (
                <Text style={styles.errorText}>{confirmPasswordError}</Text>
              ) : null}
            </View>
            <TouchableOpacity
              onPress={handleSignUp}
              disabled={finish === false ? true : false}
              style={[
                {
                  borderRadius: 10,
                  width: '100%',
                  height: 56,
                  marginVertical: vh(2),
                },
                finish
                  ? {backgroundColor: '#0D0D0D'}
                  : {backgroundColor: '#464646'},
                centerAll,
              ]}>
              <Text
                style={[
                  {fontSize: 16},
                  finish ? {color: '#D2FD7C'} : {color: '#1B1B1B'},
                ]}>
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
              <TouchableOpacity disabled={true} onPress={() => {}}>
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
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={isEmail ? 'email-address' : 'default'}
        value={value}
        onChangeText={onChangeText}
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});
