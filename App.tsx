/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginPage from './views/login/LoginPage';
import SignInPage from './views/login/SignInPage';
import SignUpPage from './views/signup/SignUpPage';
import InputInforPage from './views/inputInformation/InputInforPage';

const Stack = createNativeStackNavigator();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Login Group */}
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpPage}
          options={{headerShown: false}}
        />
        {/* End login Group */}

        {/* Infor Group */}
        <Stack.Screen
          name="InputInfor"
          component={InputInforPage}
          options={{headerShown: false}}
        />
        {/* End infor Group */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
