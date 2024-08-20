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
import React from 'react';
import {centerAll, containerStyle, vh, vw} from '../../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/docs/Header';
import {
  horizontalContactData,
  verticalContactData,
} from '../../../services/renderData';
import useStatusBar from '../../../services/useStatusBarCustom';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const KeepInTouch = () => {
  useStatusBar('black');
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Liên lạc" />
      <ScrollView contentContainerStyle={{paddingVertical: vh(2)}}>
        <HorizontalContent />
        <View style={{paddingHorizontal: vw(5)}}>
          <VerticalContent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const VerticalContent: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={{rowGap: vh(2)}}>
      {verticalContactData.map((item, index) => (
        <TouchableOpacity
          disabled={index !== 0 ? true : false}
          onPress={() => {
            navigation.navigate('Chat');
          }}
          key={index}
          style={{
            flexDirection: 'row',
            columnGap: vw(2),
          }}>
          <Image
            style={{
              width: vw(15),
              height: vw(15),
              resizeMode: 'cover',
              borderRadius: vw(20),
            }}
            source={item.img}
          />
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 1,
              }}>
              <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '600'}}>
                {item.name}
              </Text>
              <Text style={{color: '#7C7C7C'}}>{item.time} phút trước</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1,
              }}>
              <Text style={{color: '#7C7C7C'}}>{item.des}</Text>
              {item.noti > 0 ? (
                <View
                  style={[
                    {
                      backgroundColor: '#ED7234',
                      width: 30,
                      height: 30,
                      borderRadius: vw(20),
                    },
                    centerAll,
                  ]}>
                  <Text style={{color: 'white'}}>{item.noti}</Text>
                </View>
              ) : (
                <></>
              )}
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const HorizontalContent: React.FC = () => {
  return (
    <ScrollView horizontal>
      {horizontalContactData.map((item, index) => (
        <TouchableOpacity
          disabled={true}
          key={index}
          style={{
            width: vw(30),
            height: vw(30),
            alignItems: 'center',
            justifyContent: 'flex-start',
            rowGap: vh(1),
          }}>
          <Image
            style={{
              borderWidth: 2,
              borderColor: '#A3A3F2',
              borderRadius: vw(20),
              padding: 10,
            }}
            source={item.img}
          />
          <Text style={{textAlign: 'center'}}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default KeepInTouch;

const styles = StyleSheet.create({
  container: containerStyle,
});
