/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SignInNavigationHeaderProps} from '../../services/typeProps';
import {backArrow, signInStar} from '../../assets/svgXml';
import {vw} from '../../services/styleSheets';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const NavigationHeaderComponent: React.FC<SignInNavigationHeaderProps> = ({
  isSkip,
  isback,
  process,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <SafeAreaView style={styles.container}>
      {isback ? (
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          {backArrow(vw(4), vw(4))}
        </TouchableOpacity>
      ) : (
        <View />
      )}
      {process === 0 ? <View /> : <View />}
      {isSkip ? (
        <TouchableOpacity>
          <Text style={{color: '#A3A3F2', fontSize: 16}}>Bỏ qua</Text>
        </TouchableOpacity>
      ) : (
        <View>{signInStar(vw(10), vw(10))}</View>
      )}
    </SafeAreaView>
  );
};

export default NavigationHeaderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backBtn: {
    width: vw(10),
    height: vw(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A7A7A7',
    borderRadius: 10,
  },
});
