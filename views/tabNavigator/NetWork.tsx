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
import Header from '../../components/docs/Header';
import SearchBar from '../../components/docs/SearchBar';
import {containerStyle, vh, vw} from '../../services/styleSheets';
import {
  followingGroup as initialFollowingGroup,
  ownerGroup,
  suggestionGroupData as initialSuggestionGroupData,
} from '../../services/renderData';
import {
  personAddedIcon,
  groupIcon,
  noticeIcon,
  personAddIcon,
} from '../../assets/svgXml';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const NetWork = () => {
  useStatusBar('black');
  const [tabs, setTabs] = useState(0);
  const tabBar = ['Của bạn', 'Đang theo dõi', 'Gợi ý'];

  const [suggestionGroupData, setSuggestionGroupData] = useState(
    initialSuggestionGroupData,
  );
  const [followingGroup, setFollowingGroup] = useState(initialFollowingGroup);

  const handleFollow = (index: number) => {
    const itemToFollow = suggestionGroupData[index];
    setFollowingGroup([...followingGroup, itemToFollow]);
    setSuggestionGroupData(suggestionGroupData.filter((_, i) => i !== index));
  };
  const handleUnfollow = (index: number) => {
    const itemToUnfollow = followingGroup[index];
    setSuggestionGroupData([...suggestionGroupData, itemToUnfollow]);
    setFollowingGroup(followingGroup.filter((_, i) => i !== index));
  };

  const renderTabContent = () => {
    switch (tabs) {
      case 0:
        return <OnwerView />;
      case 1:
        return (
          <FollowingView
            followingGroup={followingGroup}
            handleUnfollow={handleUnfollow}
          />
        );
      case 2:
        return (
          <SuggestionView
            suggestionGroupData={suggestionGroupData}
            handleFollow={handleFollow}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Cộng đồng" />
      <View style={{paddingHorizontal: vw(5)}}>
        <SearchBar />
      </View>
      <TabBar tabBar={tabBar} tabs={tabs} setTabs={setTabs} />
      <ScrollView
        style={{paddingTop: vh(2)}}
        contentContainerStyle={{paddingBottom: vh(2)}}>
        <View style={{paddingHorizontal: vw(5)}}>{renderTabContent()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const SuggestionView: React.FC<{
  suggestionGroupData: any[];
  handleFollow: (index: number) => void;
}> = ({suggestionGroupData, handleFollow}) => {
  return (
    <View>
      <View>
        <Text style={styles.tabTitle}>Gợi ý</Text>
        <View style={{rowGap: vh(2), marginVertical: vh(2)}}>
          {suggestionGroupData.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: vw(2),
              }}>
              <Image
                width={vw(10)}
                height={vw(5)}
                resizeMode="contain"
                style={{borderRadius: vw(20)}}
                source={item.img}
              />
              <View style={{flex: 1}}>
                <Text style={{color: '#FFFFFF'}}>{item.name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {groupIcon(vw(5), vw(5), '#FFFFFF')}
                  <Text style={{color: '#A7A7A7'}}> {item.amount}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleFollow(index)}>
                {personAddIcon(vw(5), vw(5), '#464646')}
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const FollowingView: React.FC<{
  followingGroup: any[];
  handleUnfollow: (index: number) => void;
}> = ({followingGroup, handleUnfollow}) => {
  return (
    <View>
      <Text style={styles.tabTitle}>Đang theo dõi</Text>
      <View style={{rowGap: vh(2), marginVertical: vh(2)}}>
        {followingGroup.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: vw(2),
            }}>
            <Image
              width={vw(10)}
              height={vw(5)}
              resizeMode="contain"
              style={{borderRadius: vw(20)}}
              source={item.img}
            />
            <View style={{flex: 1}}>
              <Text style={{color: '#FFFFFF'}}>{item.name}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {groupIcon(vw(5), vw(5), '#FFFFFF')}
                <Text style={{color: '#A7A7A7'}}> {item.amount}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => handleUnfollow(index)}>
              {personAddedIcon(vw(5), vw(5), '#D2FD7C')}
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const OnwerView: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View>
      <Text style={styles.tabTitle}>Quản trị nhóm:</Text>
      <View style={{rowGap: vh(2), marginVertical: vh(2)}}>
        {ownerGroup.map((item, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('OnwerGroup', {index: index})}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: vw(2),
            }}
            key={index}>
            <Image
              width={vw(12)}
              height={vw(12)}
              resizeMode="cover"
              style={{borderRadius: vw(20)}}
              source={typeof item.img === 'string' ? {uri: item.img} : item.img}
            />
            <View style={{flex: 1}}>
              <Text style={{color: '#FFFFFF'}}>{item.name}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {groupIcon(vw(5), vw(5), '#FFFFFF')}
                  <Text style={{color: '#A7A7A7'}}> {item.amount}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {noticeIcon(vw(5), vw(5), '#FFFFFF')}
                  <Text style={{color: '#A7A7A7'}}> {item.noti}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
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
        }}>
        {tabBar.map((item, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={[styles.tab, tabs === index && styles.activeTab]}
            onPress={() => setTabs(index)}>
            <Text
              style={[styles.tabText, tabs === index && styles.activeTabText]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default NetWork;

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
  tabTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
