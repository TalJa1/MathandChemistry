/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {containerStyle, vh, vw} from '../../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../../services/useStatusBarCustom';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {Shadow} from 'react-native-shadow-2';

const GroupCreation = () => {
  useStatusBar('black');
  return (
    <SafeAreaView style={styles.container}>
      <Shadow
        distance={5}
        startColor={'#5C5C5C'}
        endColor={'black'}
        offset={[3, 2]}
        style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: 'black',
          width: '100%',
        }}>
        <Header />
      </Shadow>
      <ScrollView>
        <View>
          <Text>GroupCreation</Text>
        </View>
      </ScrollView>
      <Shadow
        distance={10}
        startColor={'#5C5C5C'}
        endColor={'black'}
        offset={[3, 2]}
        style={{
          backgroundColor: 'black',
          width: '100%',
        }}>
        <Footer />
      </Shadow>
    </SafeAreaView>
  );
};

const Footer: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: vh(10),
        alignItems: 'center',
        paddingHorizontal: vw(5),
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          borderWidth: 1,
          borderColor: '#D2FD7C',
          backgroundColor: 'black',
          width: '45%',
          height: vh(7),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 16,
        }}>
        <Text style={{color: '#D2FD7C', fontSize: 16, fontWeight: '500'}}>
          Hủy
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('Tạo đề');
        }}
        style={{
          backgroundColor: '#D2FD7C',
          width: '45%',
          height: vh(7),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 16,
        }}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
          Lưu
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Header: React.FC = () => {
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', height: vh(8)}}>
      <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
        Tạo nhóm mới
      </Text>
    </View>
  );
};

export default GroupCreation;

const styles = StyleSheet.create({
  container: containerStyle,
});
