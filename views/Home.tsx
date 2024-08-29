/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../services/useStatusBarCustom';
import {centerAll, vh, vw} from '../services/styleSheets';
import {
  alignIconSVG,
  cameraIcon,
  nextIcon,
  noticeIcon,
  redBlurDotIcon,
  searchIcon,
} from '../assets/svgXml';
import * as Progress from 'react-native-progress';
import ToggleSwitch from 'toggle-switch-react-native';
import {loadData, saveData} from '../services/storage';
import {loginAccountStorage, loginIndexStorage} from '../data/rootStorage';
import {LoginAccountProps} from '../services/typeProps';
import {getTodayDayAndMonth} from '../services/timeService';

const Home = () => {
  useStatusBar('black');
  const [containerWidth, setContainerWidth] = useState(0);
  const [toggleNotice, setToggleNotice] = useState(false);
  const {day, month} = getTodayDayAndMonth();
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

  // use useEffect to get loginIndex from storage
  useEffect(() => {
    loadData<number>(loginIndexStorage)
      .then(loadedData => {
        setLoginIndex(loadedData);
      })
      .catch(() => {
        saveData(loginIndexStorage, 0);
        setLoginIndex(0);
      });
  }, []);

  // use useEffect to get user from loginIndex
  useEffect(() => {
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
      <ScrollView>
        <Header data={user} />
        <View
          style={{
            paddingHorizontal: vw(3),
            backgroundColor: '#A3A3F2',
            paddingVertical: vh(1),
            rowGap: vh(2),
            marginBottom: vh(2),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: vw(3),
            }}>
            {redBlurDotIcon(vw(5), vw(5))}
            <Text style={{color: 'black'}}>
              Bạn đang làm dở 1 đề trong hôm nay!
            </Text>
          </View>
          <TouchableOpacity
            style={[
              centerAll,
              {backgroundColor: 'black', borderRadius: 12, paddingVertical: 16},
            ]}>
            <Text style={{color: '#A3A3F2', fontWeight: '500'}}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            paddingHorizontal: vw(5),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '65%', rowGap: vh(2), columnGap: vw(2)}}>
            <View
              style={{
                width: '100%',
                borderRadius: 10,
                backgroundColor: '#69CB84',
                padding: vw(2),
                rowGap: vh(1),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    color: '#0D0D0D',
                    fontSize: 18,
                    fontWeight: '600',
                    flexWrap: 'wrap',
                    flexShrink: 1,
                  }}>
                  Kế hoạch hôm nay
                </Text>
                <View
                  style={[
                    {
                      backgroundColor: 'black',
                      width: vw(14),
                      height: vw(14),
                      overflow: 'hidden',
                      borderRadius: vw(20),
                    },
                    centerAll,
                  ]}>
                  <Text style={{color: '#69CB84', fontWeight: '700'}}>
                    {day ?? '01'}
                  </Text>
                  <Text style={{color: '#69CB84'}}>Th{month ?? '01'}</Text>
                </View>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#464646'}}>Hoàn thành</Text>
                <Text style={{color: '#464646'}}>2/3</Text>
              </View>
              {/* Get dynamic content width */}
              <View
                onLayout={event => {
                  const {width} = event.nativeEvent.layout;
                  setContainerWidth(width);
                }}>
                <Progress.Bar
                  progress={0.66}
                  width={containerWidth}
                  borderWidth={0}
                  unfilledColor="#464646"
                  color="black"
                />
              </View>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  borderColor: '#D2FD7C',
                  paddingHorizontal: vw(2),
                  paddingVertical: vh(2),
                  width: '55%',
                  rowGap: vh(1),
                  borderRadius: 10,
                }}>
                <Text
                  style={{fontSize: 16, fontWeight: '700', color: '#D2FD7C'}}>
                  Chưa làm tới
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{fontSize: 12, fontWeight: '700', color: '#464646'}}>
                    34/70 đề
                  </Text>
                  {nextIcon(vw(5), vw(5))}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#D2FD7C',
                  paddingHorizontal: vw(2),
                  paddingVertical: vh(2),
                  width: '40%',
                  rowGap: vh(1),
                  borderRadius: 10,
                }}>
                <Text
                  style={{fontSize: 16, fontWeight: '700', color: '#0D0D0D'}}>
                  Đã làm
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{fontSize: 12, fontWeight: '700', color: '#464646'}}>
                    12 đề
                  </Text>
                  {nextIcon(vw(5), vw(5))}
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={[centerAll, {padding: vw(2), width: '55%'}]}>
                <Text
                  style={{color: '#D2FD7C', fontWeight: '700', fontSize: 16}}>
                  Điểm TB
                </Text>
              </View>
              <View
                style={[
                  centerAll,
                  {
                    padding: vw(2),
                    width: '40%',
                    backgroundColor: '#ED7234',
                    borderRadius: 10,
                  },
                ]}>
                <Text
                  style={{color: '#0D0D0D', fontSize: 16, fontWeight: '700'}}>
                  TOÁN
                </Text>
                <Text
                  style={{color: '#0D0D0D', fontSize: 28, fontWeight: '700'}}>
                  8.4
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '30%',
              height: '100%',
              rowGap: vh(2),
            }}>
            <TouchableOpacity
              style={{
                paddingHorizontal: vw(2),
                backgroundColor: '#A3A3F2',
                borderRadius: 10,
                flex: 1,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
                Đang làm
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text
                  style={{fontSize: 12, fontWeight: '700', color: '#464646'}}>
                  12 đề
                </Text>
                {nextIcon(vw(5), vw(5))}
              </View>
            </TouchableOpacity>
            <View
              style={[
                centerAll,
                {
                  padding: vw(2),
                  backgroundColor: '#ED7234',
                  borderRadius: 10,
                },
              ]}>
              <Text style={{color: '#0D0D0D', fontSize: 16, fontWeight: '700'}}>
                HÓA
              </Text>
              <Text style={{color: '#0D0D0D', fontSize: 28, fontWeight: '700'}}>
                8.6
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginVertical: vh(2),
            marginHorizontal: vw(5),
            rowGap: vh(1),
          }}>
          <Text style={{fontSize: 18, fontWeight: '600', color: 'white'}}>
            Sắp tới
          </Text>
          <View
            style={{
              backgroundColor: '#A3A3F266',
              borderRadius: 20,
              width: '100%',
              padding: vw(3),
              rowGap: vh(1),
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'white', fontSize: 18}}>08:45 - 09:30</Text>
              <ToggleSwitch
                isOn={toggleNotice}
                onColor="#0D0D0D"
                offColor="#0D0D0D"
                size="medium"
                thumbOnStyle={{backgroundColor: '#D2FD7C'}}
                onToggle={isOn => setToggleNotice(isOn)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: vw(2),
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  padding: vw(1),
                  borderRadius: vw(40),
                }}>
                {cameraIcon(vw(4), vw(4))}
              </View>
              <Text style={{fontSize: 16, fontWeight: '600', color: 'white'}}>
                Chữa đề 23 - lớp Hóa 2
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image source={require('../assets/home/gvIcon.png')} />
              <Text style={{flex: 1, paddingLeft: vw(2), color: '#A3A3F2'}}>
                Cô Hoa - Amsterdam
              </Text>
              <View
                style={{
                  padding: vw(1),
                  backgroundColor: '#69CB84',
                  borderRadius: 5,
                }}>
                <Text style={{color: 'black'}}>Hóa</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC<{data: LoginAccountProps}> = ({data}) => {
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
      <View
        style={[
          {
            backgroundColor: '#3E6280',
            borderWidth: 2,
            borderColor: '#3E6280',
            borderRadius: 50,
            overflow: 'hidden',
          },
        ]}>
        <Image
          style={{width: vw(10), height: vw(10), resizeMode: 'cover'}}
          source={
            data.accInfor.infor.image[0] &&
            typeof data.accInfor.infor.image[0] === 'string'
              ? {uri: data.accInfor.infor.image[0]}
              : require('../assets/home/profileDefault.png')
          }
        />
      </View>
      <View style={{flex: 1, marginHorizontal: 10}}>
        <SearchBar />
      </View>
      {noticeIcon(vw(8), vw(8))}
    </View>
  );
};

const SearchBar: React.FC = () => {
  return (
    <View style={styles.searchContainer}>
      {searchIcon(vw(5), vw(5))}
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#999"
      />
      {alignIconSVG(vw(5), vw(5))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#E5F55426',
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: vw(5),
  },
  input: {
    fontSize: 16,
    marginHorizontal: 10,
    flex: 1,
  },
});
