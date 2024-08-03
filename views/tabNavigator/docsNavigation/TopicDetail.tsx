/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../../services/useStatusBarCustom';
import {centerAll, vh, vw} from '../../../services/styleSheets';
import Header from '../../../components/docs/Header';
import {useRoute} from '@react-navigation/native';
import SearchBar from '../../../components/docs/SearchBar';
import {tabTimeData} from '../../../services/renderData';

const TopicDetail = () => {
  useStatusBar('black');
  //get data from navigation
  const route = useRoute();
  const {title, isMath} = route.params as {title: string; isMath: boolean};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginBottom: vh(1),
          }}>
          <Header title={title} />
          <SearchGrp isMath={isMath} />
        </View>
        <View
          style={{
            backgroundColor: '#202020',
            padding: vw(3),
            borderRadius: vw(5),
          }}>
          <TimeTabs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const TimeTabs: React.FC = () => {
  const [timeTabIndex, setTimeTabIndex] = useState(0);
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      {tabTimeData.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setTimeTabIndex(index)}
          style={{
            padding: vw(2),
            backgroundColor: timeTabIndex === index ? '#D2FD7C' : 'transparent',
            borderRadius: vw(20),
          }}>
          <Text style={{color: timeTabIndex === index ? '#090A0A' : '#7C7C7C'}}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const SearchGrp: React.FC<{isMath: boolean}> = ({isMath}) => {
  return (
    <View
      style={{
        paddingHorizontal: vw(5),
        marginVertical: vh(1),
        flexDirection: 'row',
        columnGap: vw(2),
      }}>
      <View style={{flex: 1}}>
        <SearchBar />
      </View>
      <View
        style={[
          centerAll,
          {
            padding: vw(2),
            backgroundColor: '#D2FD7C',
            flexDirection: 'row',
            borderRadius: vw(20),
            columnGap: vw(1),
          },
        ]}>
        {isMath ? (
          <Text style={{color: 'black'}}>Toán</Text>
        ) : (
          <Text style={{color: 'black'}}>Hóa</Text>
        )}
        <View
          style={[
            {
              backgroundColor: 'black',
              borderRadius: vw(20),
              height: vw(6),
              width: vw(6),
            },
            centerAll,
          ]}>
          <Text style={{color: '#D2FD7C'}}>11</Text>
        </View>
      </View>
    </View>
  );
};

export default TopicDetail;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
});
