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
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {
  centerAll,
  signInTitle,
  textNormal,
  vh,
  vw,
} from '../../services/styleSheets';
import NavigationHeaderComponent from '../../components/login/NavigationHeaderComponent';
import {
  LoginAccountProps,
  LoginInputGrpProps,
  LoginInputOptionsProps,
} from '../../services/typeProps';
import {checkIcon} from '../../assets/svgXml';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {loadData, saveData} from '../../services/storage';
import {loginAccountStorage, loginIndexStorage} from '../../data/rootStorage';
import {loginAccount} from '../../services/renderData';

const SignInPage: React.FC = () => {
  useStatusBar('black');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [loginAcc, setLoginAcc] = useState<LoginAccountProps[]>([]);
  const [account, setAccount] = useState({
    email: 'Te@gmail.com',
    password: 'test1234',
  });
  const [error, setError] = useState('');

  React.useEffect(() => {
    loadData<LoginAccountProps[]>(loginAccountStorage)
      .then(loadedData => {
        setLoginAcc(loadedData);
      })
      .catch(() => {
        saveData(loginAccountStorage, loginAccount);
        setLoginAcc(loginAccount);
      });
  }, []);

  const handleChange = (field: string, value: string) => {
    setAccount(prevState => ({...prevState, [field]: value}));
  };

  const handleLogin = async () => {
    const accountExists = loginAcc.some(
      acc => acc.email === account.email && acc.password === account.password,
    );

    if (!accountExists) {
      setError('Email hoặc mật khẩu không đúng');
    } else {
      setError('');
      const role = loginAcc.find(acc => acc.email === account.email)?.role;
      const index = loginAcc.findIndex(acc => acc.email === account.email);
      switch (role) {
        case 'STUDENT':
          await saveData(loginIndexStorage, index);
          navigation.navigate('Main');
          break;
        case 'TEACHER':
          console.log('Teacher');
          break;
        case '':
          navigation.navigate('InputInfor', {
            userAccount: {
              email: account.email,
              password: account.password,
            },
          });
          break;
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={{height: vh(100)}}>
          <View style={{height: '15%'}}>
            <NavigationHeaderComponent
              isSkip={false}
              isback={false}
              process={0}
            />
          </View>
          <View style={{height: '55%'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: vw(2),
                columnGap: vw(4),
              }}>
              <Text style={signInTitle}>Chào mừng bạn</Text>
              <Image source={require('../../assets/login/wavingHand.png')} />
            </View>
            <View style={{rowGap: vh(3), paddingVertical: vh(3)}}>
              <LoginInputGrp
                label="Địa chỉ email"
                placeholder="example@gmail.com"
                type="email"
                onChange={text => handleChange('email', text)}
              />
              <LoginInputGrp
                label="Mật khẩu"
                placeholder="Tối thiểu 8 ký tự"
                type="password"
                onChange={text => handleChange('password', text)}
              />
              {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
              <View
                style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <View style={{flexDirection: 'row', columnGap: vw(2)}}>
                  <TouchableOpacity
                    style={[
                      {
                        width: vw(5),
                        height: vw(5),
                        backgroundColor: 'white',
                        borderRadius: vw(5),
                      },
                      centerAll,
                    ]}>
                    {checkIcon(vw(3), vh(3), '#1B1B1B')}
                  </TouchableOpacity>
                  <Text style={textNormal}>Ghi nhớ</Text>
                </View>
                <TouchableOpacity>
                  <Text style={textNormal}>Quên mật khẩu?</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={handleLogin}
                style={[
                  {
                    width: '100%',
                    height: 56,
                    backgroundColor: '#D2FD7C',
                    borderRadius: 10,
                  },
                  centerAll,
                ]}>
                <Text style={{color: '#1B1B1B', fontSize: 16}}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: '30%'}}>
            <View style={styles.centerText}>
              <View style={styles.line} />
              <Text style={styles.text}>Hoặc đăng nhập với</Text>
              <View style={styles.line} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: vh(4),
              }}>
              <LoginOptionsBtn
                name="Facebook"
                img={require('../../assets/login/Facebook.png')}
              />
              <LoginOptionsBtn
                name="Google"
                img={require('../../assets/login/Google.png')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                columnGap: vw(2),
              }}>
              <Text style={{color: '#7C7C7C'}}>Bạn chưa có tài khoản?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={{color: '#F7F9FA', fontWeight: 'bold'}}>
                  Đăng ký
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const LoginOptionsBtn: React.FC<LoginInputOptionsProps> = ({name, img}) => {
  return (
    <TouchableOpacity
      style={[
        {
          width: '45%',
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: '#1B1B1B',
          height: 56,
          borderColor: '#7C7C7C',
        },
        centerAll,
      ]}>
      <Image source={img} />
      <Text style={textNormal}>{name}</Text>
    </TouchableOpacity>
  );
};

const LoginInputGrp: React.FC<
  LoginInputGrpProps & {onChange: (text: string) => void}
> = ({label, placeholder, type, onChange}) => {
  const [inputValue, setInputValue] = useState(
    type === 'email' ? 'Te@gmail.com' : 'test1234',
  );
  const [error, setError] = useState('');

  const handleInputChange = (text: string) => {
    setInputValue(text);
    if (type === 'password' && text.length < 8) {
      setError('Mật khẩu phải có ít nhất 8 ký tự');
    } else {
      setError('');
    }
  };
  return (
    <View style={{flexDirection: 'column', rowGap: vh(1)}}>
      <Text style={textNormal}>{label}</Text>
      <TextInput
        style={{
          borderRadius: 15,
          borderWidth: 1,
          borderColor: '#7C7C7C',
          color: '#F7F9FA',
          padding: vw(3),
          backgroundColor: '#1B1B1B',
        }}
        placeholder={placeholder}
        placeholderTextColor="#7C7C7C"
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        secureTextEntry={type === 'password' ? true : false}
        onChange={e => {
          handleInputChange(e.nativeEvent.text);
          onChange(e.nativeEvent.text);
        }}
        value={inputValue}
      />
      {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
    </View>
  );
};

export default SignInPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: vw(5),
  },
  centerText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  text: {
    textAlign: 'center',
    color: '#7C7C7C',
    marginHorizontal: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#7C7C7C',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
