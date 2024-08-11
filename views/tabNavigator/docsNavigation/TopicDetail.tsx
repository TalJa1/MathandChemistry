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
import {useNavigation, useRoute} from '@react-navigation/native';
import SearchBar from '../../../components/docs/SearchBar';
import {
  tabTimeChemistryDataDetail,
  tabTimeData,
  tabTimeMathDataDetail,
} from '../../../services/renderData';
import {
  docsIconSVG,
  finishDocsIcon,
  pendingDocsIcon,
  reCheckIcon,
  timeIcon,
} from '../../../assets/svgXml';
import {BoxDataProps, MainTimeTabDataProps} from '../../../services/typeProps';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const TopicDetail = () => {
  useStatusBar('black');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [timeTabIndex, setTimeTabIndex] = useState(0);

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
          <TimeTabs
            timeTabIndex={timeTabIndex}
            setTimeTabIndex={setTimeTabIndex}
          />
        </View>
        <View>
          {isMath ? (
            <StatusTabs
              pending={tabTimeMathDataDetail[timeTabIndex].pending}
              finish={tabTimeMathDataDetail[timeTabIndex].finish}
              type={timeTabIndex}
            />
          ) : (
            <StatusTabs
              pending={tabTimeChemistryDataDetail[timeTabIndex].pending}
              finish={tabTimeChemistryDataDetail[timeTabIndex].finish}
              type={timeTabIndex}
            />
          )}
          {isMath ? (
            <View style={{rowGap: vh(1), marginHorizontal: vw(5)}}>
              {tabTimeMathDataDetail[timeTabIndex].data.map((item, index) => (
                <TouchableOpacity
                  disabled={timeTabIndex === 3}
                  key={index}
                  onPress={() =>
                    navigation.navigate('NoteBeforeTest', {
                      time: tabTimeMathDataDetail[timeTabIndex].time,
                      title: item.title,
                      isMath: true,
                    })
                  }>
                  <MainDataRender data={item} type={timeTabIndex} />
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <View style={{rowGap: vh(1), marginHorizontal: vw(5)}}>
              {tabTimeChemistryDataDetail[timeTabIndex].data.map(
                (item, index) => (
                  <TouchableOpacity
                    disabled={timeTabIndex === 3}
                    key={index}
                    onPress={() =>
                      navigation.navigate('NoteBeforeTest', {
                        time: tabTimeChemistryDataDetail[timeTabIndex].time,
                        title: item.title,
                        isMath: false,
                      })
                    }>
                    <MainDataRender data={item} type={timeTabIndex} />
                  </TouchableOpacity>
                ),
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MainDataRender: React.FC<MainTimeTabDataProps & {type: number}> = ({
  data,
  type,
}) => {
  return (
    <View
      style={{
        backgroundColor: '#A3A3F21A',
        padding: vw(3),
        borderRadius: 16,
        rowGap: vh(2),
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          columnGap: vw(2),
          alignItems: 'center',
        }}>
        <Text
          style={{fontSize: 18, fontWeight: '600', flex: 1, color: 'white'}}>
          Đề ôn tập chuyên đề {data.title}
        </Text>
        {type === 3 ? (
          <></>
        ) : (
          <Text
            style={[
              data.status === 'Chưa làm'
                ? styles.stillnotStyle
                : data.status === 'Đang làm'
                ? styles.pendingStyle
                : styles.pointStyle,
            ]}>
            {data.status === 'Chưa làm'
              ? 'Chưa làm'
              : data.status === 'Đang làm'
              ? `Đang làm: ${data.amount}/${data.total}`
              : `${data.point}`}
          </Text>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          columnGap: vw(2),
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: vw(1),
          }}>
          {type === 3 ? (
            <>{reCheckIcon(vw(5), vw(5))}</>
          ) : (
            <>{timeIcon(vw(5), vw(5))}</>
          )}
          <Text style={{color: '#A7A7A7'}}>
            {type === 3 ? (
              <>{data.amount} câu</>
            ) : (
              <>{type === 0 ? '15 phút' : type === 1 ? '60 phút' : '90 phút'}</>
            )}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: vw(1),
          }}>
          {docsIconSVG(vw(5), vw(5), '#A7A7A7')}
          <Text style={{color: '#A7A7A7'}}>{data.id}</Text>
        </View>
      </View>
    </View>
  );
};

const StatusTabs: React.FC<{pending: number; finish: number; type: number}> = ({
  pending,
  finish,
  type,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: vh(2),
      }}>
      {type === 3 ? (
        <>
          <BoxData color="#A3A3F2" title="Đã lưu" content={pending} />
          <BoxData
            color="#D2FD7C"
            title="Ôn tập dạng bài tuơng tự"
            content={finish}
          />
        </>
      ) : (
        <>
          <BoxData color="#A3A3F2" title="Đang làm" content={pending} />
          <BoxData color="#D2FD7C" title="Đã làm" content={finish} />
        </>
      )}
    </View>
  );
};

const BoxData: React.FC<BoxDataProps> = ({color, content, title}) => {
  return (
    <View
      style={{
        backgroundColor: color,
        width: vw(40),
        height: vh(12),
        padding: vw(4),
        justifyContent: 'space-between',
        borderRadius: vw(5),
      }}>
      <Text style={{color: '#0D0D0D', fontSize: 16, fontWeight: '600'}}>
        {title}
      </Text>
      {title === 'Ôn tập dạng bài tuơng tự' ? null : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: vw(2),
          }}>
          {title === 'Đang làm' ? (
            <View>{pendingDocsIcon(vw(6), vw(6))}</View>
          ) : title === 'Đã lưu' ? (
            <View>{reCheckIcon(vw(5), vw(5), 'black')}</View>
          ) : (
            <View>{finishDocsIcon(vw(6), vw(6))}</View>
          )}
          <Text style={{color: '#464646', fontSize: 16, fontWeight: '500'}}>
            {content}
          </Text>
        </View>
      )}
    </View>
  );
};

const TimeTabs: React.FC<{
  timeTabIndex: number;
  setTimeTabIndex: React.Dispatch<React.SetStateAction<number>>;
}> = ({setTimeTabIndex, timeTabIndex}) => {
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
  pointStyle: {
    color: 'red',
    fontSize: 16,
  },
  pendingStyle: {
    backgroundColor: '#A3A3F2',
    padding: vw(2),
    borderRadius: vw(10),
    color: 'black',
  },
  stillnotStyle: {
    backgroundColor: '#7C7C7C',
    padding: vw(2),
    color: 'black',
    borderRadius: vw(10),
  },
});
