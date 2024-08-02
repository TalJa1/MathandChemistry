/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginPage from './views/login/LoginPage';
import SignInPage from './views/login/SignInPage';
import SignUpPage from './views/signup/SignUpPage';
import InputInforPage from './views/inputInformation/InputInforPage';
import {StyleSheet, View} from 'react-native';
import Home from './views/Home';
import {
  addIconSVG,
  docsIconSVG,
  homeIconSVG,
  netWorkIconSVG,
  profileIconSVG,
} from './assets/svgXml';
import {vh, vw} from './services/styleSheets';
import Docs from './views/tabNavigator/Docs';
import Addition from './views/tabNavigator/Addition';
import NetWork from './views/tabNavigator/NetWork';
import Profile from './views/tabNavigator/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const TabNavigator = () => {
    return (
      <View style={styles.tabnavigationStyle}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarShowLabel: false,
            tabBarStyle: {
              borderTopColor: '#000000',
              backgroundColor: '#000000',
              height: vh(9),
            },
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => {
                const iconSize = focused ? vw(7) : vw(6);
                return (
                  <View
                    style={[
                      styles.iconContainer,
                      focused && styles.focusedIcon,
                    ]}>
                    {homeIconSVG(iconSize, iconSize, color)}
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Docs"
            component={Docs}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => {
                const iconSize = focused ? vw(7) : vw(6);
                return (
                  <View
                    style={[
                      styles.iconContainer,
                      focused && styles.focusedIcon,
                    ]}>
                    {docsIconSVG(iconSize, iconSize, color)}
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Add"
            component={Addition}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => {
                const iconSize = focused ? vw(7) : vw(6);
                return (
                  <View
                    style={[
                      styles.iconContainer,
                      focused && styles.focusedIcon,
                    ]}>
                    {addIconSVG(iconSize, iconSize, color)}
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="NetWork"
            component={NetWork}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => {
                const iconSize = focused ? vw(7) : vw(6);
                return (
                  <View
                    style={[
                      styles.iconContainer,
                      focused && styles.focusedIcon,
                    ]}>
                    {netWorkIconSVG(iconSize, iconSize, color)}
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => {
                const iconSize = focused ? vw(7) : vw(6);
                return (
                  <View
                    style={[
                      styles.iconContainer,
                      focused && styles.focusedIcon,
                    ]}>
                    {profileIconSVG(iconSize, iconSize, color)}
                  </View>
                );
              },
            }}
          />
        </Tab.Navigator>
      </View>
    );
  };
  return (
    <NavigationContainer>
      {/* Main || Login */}
      <Stack.Navigator initialRouteName="Main">
        {/* Tab Navigator */}
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        {/* End Tab Navigator */}
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

const styles = StyleSheet.create({
  tabnavigationStyle: {backgroundColor: '#221E3D', flex: 1},
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D2FD7C',
    width: vw(10),
    height: vw(10),
    borderRadius: vw(2),
  },
  dotStyle: {
    height: 7,
    width: 7,
    borderRadius: 7,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusedIcon: {
    backgroundColor: '#D2FD7C',
    borderRadius: vw(8), // Adjust the radius to make it a circle
    padding: vw(4), // Adjust the padding to control the size of the circle
  },
});
