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
import React, {useState} from 'react';
import {containerStyle, vw, vh, centerAll} from '../../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {LoginAccountProps} from '../../../services/typeProps';
import {
  addIconSVG,
  commentIcon,
  editIcon,
  greenStickIcon,
  heartIcon,
  saveIcon,
  shareIcon,
} from '../../../assets/svgXml';
import {profilePostData} from '../../../services/renderData';

const UserProfile = () => {
  // useStatusBar('black');
  const route = useRoute();
  const {user} = route.params as {user: LoginAccountProps};
  const tabs = ['Bài đăng', 'Đề đăng tải', 'Quản trị nhóm'];
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ScrollView>
        <ImageGrp user={user} />
        <MainInfo user={user} />
        <View
          style={{
            marginVertical: vh(2),
            marginHorizontal: vw(3),
            borderBottomWidth: 2,
            borderColor: '#FFFFFF',
          }}
        />
        <TabsRender
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <PostRender user={user} />
      </ScrollView>
    </SafeAreaView>
  );
};

const PostRender: React.FC<{user: LoginAccountProps}> = ({user}) => {
  return (
    <View
      style={{rowGap: vh(2), marginVertical: vh(1), paddingHorizontal: vw(5)}}>
      {profilePostData.map((post, index) => (
        <View
          key={index}
          style={[
            {
              rowGap: vh(1),
              borderColor: '#464646',
              borderBottomWidth: 1,
              paddingBottom: vh(1),
            },
          ]}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
              }}>
              {user.accInfor.infor.image[0] &&
              typeof user.accInfor.infor.image[0] === 'string' ? (
                <Image
                  style={{
                    width: vw(10),
                    height: vw(10),
                    resizeMode: 'cover',
                    borderRadius: vw(10),
                  }}
                  source={{uri: user.accInfor.infor.image[0]}}
                />
              ) : (
                <Image
                  style={{
                    width: vw(10),
                    height: vw(10),
                    resizeMode: 'cover',
                    borderRadius: vw(10),
                  }}
                  source={require('../../../assets/profile/mainPro.png')}
                />
              )}
              <View style={{marginLeft: vw(2), flex: 1}}>
                <Text style={{color: '#FFFFFF', fontWeight: '700'}}>
                  {user.accInfor.infor.name ?? 'Chưa cập nhật'}
                </Text>
              </View>
              <Text style={{color: '#A7A7A7'}}>{post.time} giờ trước</Text>
            </View>
          </View>
          <View>
            <Text style={{color: '#FFFFFF', fontSize: 16}}>{post.des}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <PostBottom
              icon={heartIcon(vw(5), vw(5), '#B65A46')}
              props={post.time}
            />
            <PostBottom
              icon={commentIcon(vw(5), vw(5), '#7C7C7C')}
              props={post.comment}
            />
            <PostBottom icon={shareIcon(vw(5), vw(5), '#7C7C7C')} />
            <PostBottom icon={saveIcon(vw(5), vw(5), '#7C7C7C')} />
          </View>
        </View>
      ))}
    </View>
  );
};

const PostBottom: React.FC<{icon: any; props?: number}> = ({props, icon}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {icon}
      {props && <Text style={{color: '#6D6D6D'}}> {props}</Text>}
    </View>
  );
};

const TabsRender: React.FC<{
  tabs: string[];
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}> = ({tabs, selectedTab, setSelectedTab}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: vw(5),
        backgroundColor: '#D2FD7C',
        justifyContent: 'space-between',
        borderRadius: 10,
        height: vh(5),
        alignItems: 'center',
        paddingHorizontal: vw(2),
      }}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          disabled={index > 0}
          style={[styles.tab, selectedTab === index && styles.selectedTab]}
          onPress={() => setSelectedTab(index)}>
          <Text
            style={[
              styles.tabText,
              selectedTab === index && styles.selectedTabText,
            ]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const MainInfo: React.FC<{user: LoginAccountProps}> = ({user}) => {
  return (
    <View style={{width: vw(100), alignItems: 'center'}}>
      <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: '600'}}>
        {user.accInfor.infor.name ?? 'Chưa cập nhật'}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: '#FFFFFF'}}>{user.email ?? 'Chưa cập nhật'} </Text>
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
  tab: {
    width: '30%',
    height: vh(4),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTab: {
    backgroundColor: 'black',
  },
  tabText: {
    color: '#464646',
  },
  selectedTabText: {
    color: '#D2FD7C',
  },
});
