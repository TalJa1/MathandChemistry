/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle, vw} from '../../../services/styleSheets';
import useStatusBar from '../../../services/useStatusBarCustom';
import {viewIcon} from '../../../assets/svgXml';

const LiveStream = () => {
  useStatusBar('black');
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: vw(5), flex: 1}}>
        <MainContent />
      </View>
    </SafeAreaView>
  );
};

const MainContent: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', columnGap: vw(2)}}>
        {viewIcon(vw(5), vw(5))}
        <Text style={{color: 'white'}}>12 đang xem</Text>
      </View>
    </View>
  );
};

export default LiveStream;

const styles = StyleSheet.create({
  container: containerStyle,
});
