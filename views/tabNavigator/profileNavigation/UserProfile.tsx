/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {containerStyle, vw, vh, centerAll} from '../../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {LoginAccountProps} from '../../../services/typeProps';
import {addIconSVG, editIcon, greenStickIcon} from '../../../assets/svgXml';

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
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: '#FFFFFF'}}>{user.email} </Text>
        {greenStickIcon(vw(4), vw(4))}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          paddingHorizontal: vw(5),
          marginTop: vh(3),
        }}>
        <VerticalInfoRender label="Theo dõi" data={205} />
        <VerticalInfoRender label="Đang theo dõi" data={500} />
        <VerticalInfoRender label="Lượt lưu đề" data={282} />
      </View>
      <View
        style={{
          width: '100%',
          paddingHorizontal: vw(5),
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: vh(2),
        }}>
        <TouchableOpacity
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              width: '40%',
              height: vh(4),
              borderRadius: 10,
            },
            centerAll,
          ]}>
          <Text style={{color: 'black'}}>Đăng tải</Text>
          {addIconSVG(vw(5), vw(5), 'black')}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: 'white',
              width: '40%',
              height: vh(4),
              borderRadius: 10,
            },
            centerAll,
          ]}>
          <Text style={{color: 'white'}}>Sửa thông tin</Text>
          {editIcon(vw(5), vw(5), 'white')}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const VerticalInfoRender: React.FC<{label: string; data: number}> = ({
  label,
  data,
}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{color: '#FFFFFF', fontWeight: '700', fontSize: 24}}>
        {data}
      </Text>
      <Text style={{color: '#A7A7A7'}}>{label}</Text>
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
