/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {centerAll, containerStyle, vh, vw} from '../../../services/styleSheets';
import useStatusBar from '../../../services/useStatusBarCustom';
import {pinIcon, viewIcon} from '../../../assets/svgXml';
import {useRoute} from '@react-navigation/native';

const LiveStream = () => {
  useStatusBar('black');
  const route = useRoute();
  const {data} = route.params as {data: string[]};

  data.push('Nguyễn Văn A');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: vw(5), flex: 1}}>
        <MainContent data={data} />
      </View>
    </SafeAreaView>
  );
};

const MainContent: React.FC<{data: string[]}> = ({data}) => {
  return (
    <View style={{flex: 1, rowGap: vh(1)}}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', columnGap: vw(2)}}>
        {viewIcon(vw(5), vw(5))}
        <Text style={{color: 'white'}}>12 đang xem</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '40%',
          borderRadius: 20,
          overflow: 'hidden',
        }}>
        <Image
          source={require('../../../assets/liveStream/live1.png')}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            borderRadius: 20,
          }}
        />
        <View
          style={[
            {
              position: 'absolute',
              bottom: vh(1),
              backgroundColor: '#000000A3',
              left: vw(5),
              padding: vw(1),
              flexDirection: 'row',
              borderRadius: 8,
              columnGap: vw(1),
            },
            centerAll,
          ]}>
          {pinIcon(vw(4), vw(4))}
          <Text>{data[0]}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          columnGap: vw(1),
          height: '20%',
          width: '100%',
        }}>
        <View
          style={{
            width: '50%',
            height: '100%',
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <Image
            source={require('../../../assets/liveStream/live2.png')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              borderRadius: 20,
            }}
          />
          <View
            style={[
              {
                position: 'absolute',
                bottom: vh(1),
                backgroundColor: '#000000A3',
                left: vw(5),
                padding: vw(1),
                flexDirection: 'row',
                borderRadius: 8,
                columnGap: vw(1),
              },
              centerAll,
            ]}>
            <Text>{data[1]}</Text>
          </View>
        </View>
        <View
          style={{
            width: '50%',
            height: '100%',
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <Image
            source={require('../../../assets/liveStream/live3.png')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              borderRadius: 20,
            }}
          />
          <View
            style={[
              {
                position: 'absolute',
                bottom: vh(1),
                backgroundColor: '#000000A3',
                left: vw(5),
                padding: vw(1),
                flexDirection: 'row',
                borderRadius: 8,
                columnGap: vw(1),
              },
              centerAll,
            ]}>
            <Text>{data[2]}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LiveStream;

const styles = StyleSheet.create({
  container: containerStyle,
});
