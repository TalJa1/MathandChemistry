/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {containerStyle, vw, vh} from '../../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {LoginAccountProps} from '../../../services/typeProps';

const UserProfile = () => {
  // useStatusBar('black');
  const route = useRoute();
  const {user} = route.params as {user: LoginAccountProps};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ScrollView>
        <ImageGrp user={user} />
        <MainInfo user={user} />
      </ScrollView>
    </SafeAreaView>
  );
};

const MainInfo: React.FC<{user: LoginAccountProps}> = ({user}) => {
  return (
    <View style={{width: vw(100), alignItems: 'center'}}>
      <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: '600'}}>
        {user.accInfor.infor.name}
      </Text>
      <Text style={{color: '#FFFFFF'}}>{user.email}</Text>
    </View>
  );
};

const ImageGrp: React.FC<{user: LoginAccountProps}> = ({user}) => {
  return (
    <View style={{marginBottom: vh(6)}}>
      <Image
        style={{
          width: vw(100),
          height: vh(25),
          resizeMode: 'cover',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
        source={
          user.accInfor.infor.image[0] &&
          typeof user.accInfor.infor.image[0] === 'string'
            ? {uri: user.accInfor.infor.image[0]}
            : require('../../../assets/profile/mainPro.png')
        }
      />
      <View
        style={{
          position: 'absolute',
          bottom: -45,
          alignItems: 'center',
          width: vw(100),
        }}>
        <Image
          style={{
            width: vw(25),
            height: vw(25),
            resizeMode: 'cover',
            borderRadius: vw(40),
            borderWidth: 3,
            borderColor: '#69CB84',
          }}
          source={
            user.accInfor.infor.image[0] &&
            typeof user.accInfor.infor.image[0] === 'string'
              ? {uri: user.accInfor.infor.image[0]}
              : require('../../../assets/profile/mainPro.png')
          }
        />
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: containerStyle,
});
