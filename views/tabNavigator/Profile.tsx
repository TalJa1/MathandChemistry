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
import React from 'react';
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

const Profile = () => {
  useStatusBar('black');
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Cá nhân" />
      <ScrollView
        style={{paddingHorizontal: vw(5)}}
        contentContainerStyle={{paddingVertical: vh(1)}}>
        <ProfileTab />
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
      />
      <RenderItem
        title="Đề thi của bạn"
        icon={docsIconSVG(vw(5), vw(5), '#0D0D0D')}
        color="#A3A3F2"
      />
      <RenderItem
        title="Lưu ý ôn tập"
        icon={cautionIcon(vw(5), vw(5), '#0D0D0D')}
        color="#565CE7"
      />
      <RenderItem
        title="Trang cá nhân"
        icon={profileIconSVG(vw(5), vw(5), '#0D0D0D')}
        color="#ED7234"
      />
      <RenderItem
        title="Liên lạc, phản hồi"
        icon={keepInTouchIcon(vw(5), vw(5), '#0D0D0D')}
        color="#D2FD7C"
      />
      <RenderItem
        title="Cài đặt chung"
        icon={settingIcon(vw(5), vw(5), '#0D0D0D')}
        color="#7EA8CA"
      />
      <RenderItem
        title="Chế độ tối"
        icon={darkModeIcon(vw(5), vw(5), '#0D0D0D')}
        color="#F7F9FA"
      />
    </View>
  );
};

const RenderItem: React.FC<{title: string; icon: any; color: string}> = ({
  title,
  icon,
  color,
}) => {
  const [toggleNotice, setToggleNotice] = React.useState(false); // Declare toggleNotice variable

  return (
    <TouchableOpacity
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

const ProfileTab: React.FC = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View
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
            resizeMode: 'contain',
            borderRadius: vw(20),
            borderWidth: 2,
            borderColor: '#3E6280',
          }}
          source={require('../../assets/profile/pro1.png')}
        />
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '700'}}>
              Nguyễn Minh Hòa
            </Text>
            {nextIconnotArrow(vw(5), vw(5))}
          </View>
          <Text style={{color: '#A7A7A7'}}>Lớp 11</Text>
        </View>
      </View>
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
