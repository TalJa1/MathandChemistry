/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {centerAll, containerStyle, vh, vw} from '../../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/docs/Header';
import {nextIcon} from '../../../assets/svgXml';
import useStatusBar from '../../../services/useStatusBarCustom';
import {LineChart} from 'react-native-gifted-charts';

const Statistic = () => {
  useStatusBar('black');
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Thống kê" />
      <ScrollView
        style={{paddingHorizontal: vw(5)}}
        contentContainerStyle={{paddingVertical: vh(2)}}>
        <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: '700'}}>
          Môn
        </Text>
        <View style={{flexDirection: 'row', columnGap: vw(3)}}>
          <SubjectRender color="#69CB84" title="Hóa" />
          <SubjectRender color="#A3A3F2" title="Toán" />
        </View>
        <ChartRender />
        <InfoGroup />
      </ScrollView>
    </SafeAreaView>
  );
};

const ChartRender: React.FC = () => {
  const getRandomValue = () => Math.floor(Math.random() * 41) + 60; // Random value between 60 and 100

  const lineData = Array.from({length: 12}, (_, i) => ({
    value: getRandomValue(),
    dataPointText: `${getRandomValue()}`,
    label: `t${i + 1}`,
  }));

  const lineData2 = Array.from({length: 12}, (_, i) => ({
    value: getRandomValue(),
    dataPointText: `${getRandomValue()}`,
    label: `t${i + 1}`,
  }));
  return (
    <View style={{marginVertical: vh(2)}}>
      <LineChart
        data={lineData}
        data2={lineData2}
        curved={true}
        height={250}
        spacing={44}
        initialSpacing={20}
        color1="#69CB84"
        color2="#A3A3F2"
        textColor1="green"
        dataPointsHeight={6}
        dataPointsWidth={6}
        dataPointsColor1="blue"
        dataPointsColor2="red"
        textShiftY={-2}
        textShiftX={-5}
        textFontSize={13}
      />
    </View>
  );
};

const SubjectRender: React.FC<{title: string; color: string}> = ({
  color,
  title,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        columnGap: vw(1),
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: color,
          width: vw(3),
          height: vw(3),
          borderRadius: 4,
        }}
      />
      <Text>{title}</Text>
    </View>
  );
};

const InfoGroup = () => {
  return (
    <View style={{flex: 1, rowGap: vh(1)}}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#D2FD7C',
            height: vh(12),
            width: '38%',
            borderRadius: 10,
            justifyContent: 'center',
            paddingHorizontal: '4%',
          }}>
          <Text
            style={{
              color: '#D2FD7C',
              fontSize: 16,
              fontWeight: '700',
            }}>
            Chưa làm tới
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#464646', fontWeight: '700'}}>34/70 </Text>
            {nextIcon(vw(5), vw(5))}
          </View>
        </View>
        <ActionGroup title="Đã làm" value="12" />
        <ActionGroup title="Đang làm" value="3" />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={[
            {
              height: vh(12),
              width: '38%',
              borderRadius: 10,
              paddingHorizontal: '4%',
            },
            centerAll,
          ]}>
          <Text
            style={{
              color: '#D2FD7C',
              fontSize: 16,
              fontWeight: '700',
            }}>
            Điểm TB
          </Text>
        </View>
        <ScoreGroup title="TOÁN" value="8.5" />
        <ScoreGroup title="HÓA" value="8.5" />
      </View>
    </View>
  );
};

const ScoreGroup: React.FC<{title: string; value: string}> = ({
  title,
  value,
}) => {
  return (
    <View
      style={[
        {
          height: vh(12),
          width: '30%',
          paddingHorizontal: '4%',
          borderRadius: 10,
        },
        centerAll,
        title === 'TOÁN'
          ? {backgroundColor: '#ED7234'}
          : {backgroundColor: '#565CE7'},
      ]}>
      <Text
        style={{
          color: '#0D0D0D',
          fontSize: 16,
          fontWeight: '700',
        }}>
        {title}
      </Text>
      <Text style={{color: '#0D0D0D', fontWeight: '700', fontSize: 28}}>
        {value}
      </Text>
    </View>
  );
};

const ActionGroup: React.FC<{title: string; value: string}> = ({
  title,
  value,
}) => {
  return (
    <View
      style={[
        {
          width: '30%',
          justifyContent: 'center',
          borderRadius: 10,
          paddingHorizontal: '4%',
        },
        title === 'Đang làm'
          ? {backgroundColor: '#A3A3F2'}
          : {backgroundColor: '#D2FD7C'},
      ]}>
      <Text style={{color: '#0D0D0D', fontSize: 16, fontWeight: '700'}}>
        {title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: '#464646'}}>{value} đề</Text>
        {nextIcon(vw(5), vw(5))}
      </View>
    </View>
  );
};

export default Statistic;

const styles = StyleSheet.create({
  container: containerStyle,
});
