/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {centerAll, containerStyle, vh, vw} from '../../services/styleSheets';
import {
  cautionIcon,
  darkModeIcon,
  docsIconSVG,
  keepInTouchIcon,
  nextIconnotArrow,
  noticeIcon,
  profileIconSVG,
  settingIcon,
  statisticIcon,
} from '../../assets/svgXml';
import ToggleSwitch from 'toggle-switch-react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LoginAccountProps} from '../../services/typeProps';
import {loadData} from '../../services/storage';
import {loginAccountStorage, loginIndexStorage} from '../../data/rootStorage';

const Profile = () => {
  useStatusBar('black');
  const [loginIndex, setLoginIndex] = useState(-1);
  const [user, setUser] = useState<LoginAccountProps>({
    email: '',
    password: '',
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
  });

  // use useEffect to load index from loginIndexStorage
  React.useEffect(() => {
    loadData<number>(loginIndexStorage)
      .then(index => {
        setLoginIndex(index);
      })
      .catch(error => {
        console.error('Failed to load login index:', error);
      });
  }, []);

  React.useEffect(() => {
    if (loginIndex !== -1) {
      loadData<LoginAccountProps[]>(loginAccountStorage)
        .then(accounts => {
          const currentUser = accounts[loginIndex];
          if (currentUser) {
            setUser(currentUser);
          }
        })
        .catch(error => {
          console.error('Failed to load user data:', error);
        });
    }
  }, [loginIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Cá nhân" />
      <ScrollView
        style={{paddingHorizontal: vw(5)}}
        contentContainerStyle={{paddingVertical: vh(1)}}>
        <ProfileTab user={user} />
        <MainContent />
      </ScrollView>
    </SafeAreaView>
  );
};

const MainContent: React.FC = () => {
  return (
    <View>
      <RenderItem
        title="Thống kê"
        icon={statisticIcon(vw(5), vw(5), '#0D0D0D')}
        color="#69CB84"
        navigatePage="Statistic"
      />
      <RenderItem
        title="Đề thi của bạn"
        icon={docsIconSVG(vw(5), vw(5), '#0D0D0D')}
        color="#A3A3F2"
        navigatePage=""
      />
      <RenderItem
        title="Lưu ý ôn tập"
        icon={cautionIcon(vw(5), vw(5), '#0D0D0D')}
        color="#565CE7"
        navigatePage=""
      />
      <RenderItem
        title="Trang cá nhân"
        icon={profileIconSVG(vw(5), vw(5), '#0D0D0D')}
        color="#ED7234"
        navigatePage=""
      />
      <RenderItem
        title="Liên lạc, phản hồi"
        icon={keepInTouchIcon(vw(5), vw(5), '#0D0D0D')}
        color="#D2FD7C"
        navigatePage="KeepInTouch"
      />
      <RenderItem
        title="Cài đặt chung"
        icon={settingIcon(vw(5), vw(5), '#0D0D0D')}
        color="#7EA8CA"
        navigatePage=""
      />
      <RenderItem
        title="Chế độ tối"
        icon={darkModeIcon(vw(5), vw(5), '#0D0D0D')}
        color="#F7F9FA"
        navigatePage=""
      />
    </View>
  );
};

const RenderItem: React.FC<{
  title: string;
  icon: any;
  color: string;
  navigatePage: string;
}> = ({title, icon, color, navigatePage}) => {
  const [toggleNotice, setToggleNotice] = React.useState(false); // Declare toggleNotice variable
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <TouchableOpacity
      disabled={navigatePage === ''}
      onPress={() => {
        navigatePage !== '' && navigation.navigate(navigatePage);
      }}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: vh(2),
        flex: 1,
      }}>
      <View
        style={[
          {
            width: vw(10),
            height: vw(10),
            borderRadius: 10,
            backgroundColor: color,
          },
          centerAll,
        ]}>
        {icon}
      </View>
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: '700',
          marginLeft: vw(5),
          flex: 1,
        }}>
        {title}
      </Text>
      {title === 'Chế độ tối' && (
        <ToggleSwitch
          disabled={true}
          isOn={toggleNotice}
          onColor="#16B364"
          offColor="#16B364"
          size="medium"
          thumbOnStyle={{backgroundColor: 'white'}}
          onToggle={isOn => setToggleNotice(isOn)}
        />
      )}
    </TouchableOpacity>
  );
};

const ProfileTab: React.FC<{user: LoginAccountProps}> = ({user}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('UserProfile', {
            user: user,
          });
        }}
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          columnGap: vw(3),
        }}>
        <Image
          style={{
            width: vw(15),
            height: vw(15),
            resizeMode: 'cover',
            borderRadius: vw(20),
            borderWidth: 2,
            borderColor: '#3E6280',
          }}
          source={
            user.accInfor.infor.image[0] &&
            typeof user.accInfor.infor.image[0] === 'string'
              ? {uri: user.accInfor.infor.image[0]}
              : require('../../assets/profile/pro1.png')
          }
        />
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '700'}}>
              {user.accInfor.infor.name ?? 'Nguyễn Minh Hòa'}
            </Text>
            {nextIconnotArrow(vw(5), vw(5))}
          </View>
          <Text style={{color: '#A7A7A7'}}>
            Lớp {user.accInfor.class ?? 11}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Header: React.FC<{title: string}> = ({title}) => {
  return (
    <View
      style={{
        width: vw(100),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: vw(5),
        justifyContent: 'space-between',
        marginVertical: vh(2),
      }}>
      <View style={{flex: 1, marginHorizontal: 10}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#A7A7A7',
            fontSize: 16,
            fontWeight: '500',
          }}>
          {title}
        </Text>
      </View>
      {noticeIcon(vw(8), vw(8))}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: containerStyle,
});
