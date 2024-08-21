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
import {centerAll, containerStyle, vh, vw} from '../../../services/styleSheets';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ownerGroup, postData} from '../../../services/renderData';
import {
  commentIcon,
  downArrowIcon,
  examBack,
  groupIcon,
  heartIcon,
  noticeIcon,
  saveIcon,
  shareIcon,
} from '../../../assets/svgXml';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SearchBar from '../../../components/docs/SearchBar';
import {PostProps} from '../../../services/typeProps';

const OnwerGroup = () => {
  const route = useRoute();
  const {index} = route.params as {index: number};
  const [tab, setTab] = useState(0);
  const tabList = ['Tường', 'Phê duyệt (3)', 'Giới thiệu'];

  const renderTabContent = () => {
    switch (tab) {
      case 0:
        return <WallpaperContent />;
      case 1:
        return <AddminCheckq />;

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header dataIndex={index} />
      <View style={{paddingHorizontal: vw(5)}}>
        <SearchBar />
      </View>
      <TabBar tabBar={tabList} tabs={tab} setTabs={setTab} />
      <ScrollView contentContainerStyle={{paddingBottom: vh(2)}}>
        <View style={{paddingHorizontal: vw(5)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: vh(2),
            }}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
              Bài viết
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: '#7C7C7C'}}>Bộ lọc </Text>
              {downArrowIcon(vw(5), vw(5), '#7C7C7C')}
            </View>
          </View>
          {renderTabContent()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const AddminCheckq: React.FC = () => {
  return (
    <View style={{rowGap: vh(5)}}>
      <Post {...postData[1]} isRender={false} />
      <View style={{rowGap: vh(1)}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            columnGap: vw(2),
          }}>
          <Image
            width={vw(6)}
            height={vw(6)}
            resizeMode="contain"
            source={require('../../../assets/network/logo2.png')}
          />
          <Text style={{color: 'white', fontWeight: '600', flex: 1}}>
            Nguyễn Đức Anh
          </Text>
          <Text style={{color: '#7C7C7C'}}> 20 phút trước</Text>
        </View>
        <Text style={{color: 'white', fontWeight: '400', fontSize: 16}}>
          Mình muốn tham khảo sách nâng cao môn toán, cần gợi ý của mọi người ạ.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            columnGap: vw(2),
          }}>
          <ButtonRender name="Từ chối" color="#B65A46" />
          <ButtonRender name="Phê duyệt" color="#69CB84" />
        </View>
      </View>
    </View>
  );
};

const WallpaperContent: React.FC = () => {
  return (
    <View style={{rowGap: vh(5)}}>
      {postData.map((item, index) => (
        <View key={index}>
          <Post {...item} isRender={true} />
        </View>
      ))}
    </View>
  );
};

const Post: React.FC<PostProps & {isRender: boolean}> = ({
  isRender,
  ...props
}) => {
  return (
    <View style={{rowGap: vh(1)}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          columnGap: vw(2),
        }}>
        <Image
          width={vw(6)}
          height={vw(6)}
          resizeMode="contain"
          source={require('../../../assets/network/logo1.png')}
        />
        <Text style={{color: 'white', fontWeight: '600', flex: 1}}>
          {props.name}
        </Text>
        <Text style={{color: '#7C7C7C'}}> {props.time} phút trước</Text>
      </View>
      <Text style={{color: 'white', fontWeight: '400', fontSize: 16}}>
        {props.des}{' '}
        {props.hashtag.map((item, index) => (
          <Text style={{color: '#4D7CFF'}} key={index}>
            {item}{' '}
          </Text>
        ))}
      </Text>
      <View
        style={{
          backgroundColor: '#37CE7D',
          padding: vw(5),
          borderRadius: 15,
        }}>
        <Text style={{color: 'black', fontWeight: '700', fontSize: 17}}>
          {props.imgValue}
        </Text>
      </View>
      {isRender ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <PostBottom
            icon={heartIcon(vw(5), vw(5), '#B65A46')}
            props={props.time}
          />
          <PostBottom
            icon={commentIcon(vw(5), vw(5), '#7C7C7C')}
            props={props.comment}
          />
          <PostBottom icon={shareIcon(vw(5), vw(5), '#7C7C7C')} />
          <PostBottom icon={saveIcon(vw(5), vw(5), '#7C7C7C')} />
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            columnGap: vw(2),
          }}>
          <ButtonRender name="Từ chối" color="#B65A46" />
          <ButtonRender name="Phê duyệt" color="#69CB84" />
        </View>
      )}
    </View>
  );
};

const ButtonRender: React.FC<{name: string; color: string}> = ({
  color,
  name,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          borderWidth: 1,
          flex: 1,
          borderColor: color,
          padding: vw(2),
          borderRadius: vw(20),
        },
        centerAll,
      ]}>
      <Text style={{color: color}}>{name}</Text>
    </TouchableOpacity>
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

const TabBar: React.FC<{
  tabBar: string[];
  tabs: number;
  setTabs: React.Dispatch<React.SetStateAction<number>>;
}> = ({setTabs, tabBar, tabs}) => {
  return (
    <View
      style={{
        backgroundColor: '#202020',
        marginVertical: vh(1),
        borderRadius: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: vh(1.5),
          justifyContent: 'space-between',
          paddingHorizontal: vw(5),
          alignItems: 'center',
        }}>
        {tabBar.map((item, index) => (
          <TouchableOpacity
            disabled={item === 'Giới thiệu' ? true : false}
            key={index.toString()}
            style={[styles.tab, tabs === index && styles.activeTab]}
            onPress={() => setTabs(index)}>
            <Text
              style={[styles.tabText, tabs === index && styles.activeTabText]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
        <View>{noticeIcon(vw(6), vw(6), '#EBC5CC')}</View>
      </View>
    </View>
  );
};

const Header: React.FC<{dataIndex: number}> = ({dataIndex}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: vw(2),
        paddingHorizontal: vw(5),
        marginVertical: vh(2),
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        {examBack(vw(7), vw(7), '#FFFFFF')}
      </TouchableOpacity>
      <Image
        width={vw(12)}
        height={vw(12)}
        resizeMode="cover"
        style={{borderRadius: vw(20)}}
        source={
          typeof ownerGroup[dataIndex].img === 'string'
            ? {uri: ownerGroup[dataIndex].img}
            : ownerGroup[dataIndex].img
        }
      />
      <View style={{flex: 1}}>
        <Text style={{color: '#FFFFFF'}}>{ownerGroup[dataIndex].name}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {groupIcon(vw(5), vw(5), '#FFFFFF')}
            <Text style={{color: '#A7A7A7'}}>
              {' '}
              {ownerGroup[dataIndex].amount}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnwerGroup;

const styles = StyleSheet.create({
  container: containerStyle,
  tab: {
    paddingVertical: vh(1.5),
    paddingHorizontal: vw(3),
    borderRadius: vw(20),
  },
  activeTab: {
    backgroundColor: '#D2FD7C',
  },
  tabText: {
    color: '#7C7C7C',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#090A0A',
    fontWeight: '500',
  },
});
