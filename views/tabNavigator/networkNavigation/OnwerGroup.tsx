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
import {containerStyle, vh, vw} from '../../../services/styleSheets';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ownerGroup} from '../../../services/renderData';
import {examBack, groupIcon, noticeIcon} from '../../../assets/svgXml';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SearchBar from '../../../components/docs/SearchBar';

const OnwerGroup = () => {
  const route = useRoute();
  const {index} = route.params as {index: number};
  const [tab, setTab] = useState(0);
  const tabList = ['Tường', 'Phê duyệt (3)', 'Giới thiệu'];

  const renderTabContent = () => {
    switch (tab) {
      case 0:
        return <Text>asd</Text>;
      case 1:
        return <Text>asd2</Text>;

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
      <ScrollView>
        <View style={{paddingHorizontal: vw(5)}}>{renderTabContent()}</View>
      </ScrollView>
    </SafeAreaView>
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
        width={vw(10)}
        height={vw(5)}
        resizeMode="contain"
        style={{borderRadius: vw(20)}}
        source={ownerGroup[dataIndex].img}
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
