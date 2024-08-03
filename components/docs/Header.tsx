/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {vh, vw} from '../../services/styleSheets';
import {backArrow, noticeIcon} from '../../assets/svgXml';

const Header: React.FC<{title: string}> = ({title}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
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
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {backArrow(vw(8), vw(8))}
      </TouchableOpacity>
      <View style={{flex: 1, marginHorizontal: 10}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#A7A7A7',
            fontSize: 16,
            fontWeight: '500',
          }}>
          {title}
        </Text>
      </View>
      {noticeIcon(vw(8), vw(8))}
    </View>
  );
};

export default Header;
