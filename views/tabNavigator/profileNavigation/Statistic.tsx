/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {centerAll, containerStyle, vh, vw} from '../../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/docs/Header';
import {nextIcon} from '../../../assets/svgXml';

const Statistic = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Thống kê" />
      <ScrollView
        style={{paddingHorizontal: vw(5)}}
        contentContainerStyle={{paddingVertical: vh(2)}}>
        <InfoGroup />
      </ScrollView>
    </SafeAreaView>
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
